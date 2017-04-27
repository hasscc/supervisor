"""Init file for HassIO addons."""
import copy
import logging
import glob

import voluptuous as vol
from voluptuous.humanize import humanize_error

from .validate import validate_options, SCHEMA_ADDON_CONFIG
from ..const import (
    FILE_HASSIO_ADDONS, ATTR_NAME, ATTR_VERSION, ATTR_SLUG, ATTR_DESCRIPTON,
    ATTR_STARTUP, ATTR_BOOT, ATTR_MAP, ATTR_OPTIONS, ATTR_PORTS, BOOT_AUTO,
    DOCKER_REPO, ATTR_INSTALLED, ATTR_SCHEMA, ATTR_IMAGE, ATTR_DEDICATED,
    MAP_CONFIG, MAP_SSL, MAP_ADDONS, MAP_BACKUP)
from ..config import Config
from ..tools import read_json_file, write_json_file

_LOGGER = logging.getLogger(__name__)

ADDONS_REPO_PATTERN = "{}/**/config.json"
SYSTEM = "system"
USER = "user"


class AddonsData(Config):
    """Hold data for addons inside HassIO."""

    def __init__(self, config):
        """Initialize data holder."""
        super().__init__(FILE_HASSIO_ADDONS)
        self.config = config
        self._system_data = self._data.get(SYSTEM, {})
        self._user_data = self._data.get(USER, {})
        self._current_data = {}
        self.arch = None

    def save(self):
        """Store data to config file."""
        self._data = {
            USER: self._user_data,
            SYSTEM: self._system_data,
        }
        super().save()

    def read_data_from_repositories(self):
        """Read data from addons repository."""
        self._current_data = {}

        self._read_addons_folder(self.config.path_addons_repo)
        self._read_addons_folder(self.config.path_addons_custom)

    def _read_addons_folder(self, folder):
        """Read data from addons folder."""
        pattern = ADDONS_REPO_PATTERN.format(folder)

        for addon in glob.iglob(pattern, recursive=True):
            try:
                addon_config = read_json_file(addon)

                addon_config = SCHEMA_ADDON_CONFIG(addon_config)
                self._current_data[addon_config[ATTR_SLUG]] = addon_config

            except (OSError, KeyError):
                _LOGGER.warning("Can't read %s", addon)

            except vol.Invalid as ex:
                _LOGGER.warning("Can't read %s -> %s", addon,
                                humanize_error(addon_config, ex))

    def merge_update_config(self):
        """Update local config if they have update.

        It need to be the same version as the local version is.
        """
        have_change = False

        for addon, data in self._system_data.items():
            # dedicated
            if addon not in self._current_data:
                continue

            current = self._current_data[addon]
            if data[ATTR_VERSION] == current[ATTR_VERSION]:
                if data != current[addon]:
                    self._system_data[addon] = copy.deepcopy(current[data])
                    have_change = True

        if have_change:
            self.save()

    @property
    def list_installed(self):
        """Return a list of installed addons."""
        return set(self._system_data.keys())

    @property
    def list_api(self):
        """Return a list of available addons for api."""
        data = []
        all_addons = {**self._system_data, **self._current_data}
        dedicated = self.list_removed

        for addon, values in all_addons.items():
            i_version = self._user_data.get(addon, {}).get(ATTR_VERSION)

            data.append({
                ATTR_NAME: values[ATTR_NAME],
                ATTR_SLUG: values[ATTR_SLUG],
                ATTR_DESCRIPTON: values[ATTR_DESCRIPTON],
                ATTR_VERSION: values[ATTR_VERSION],
                ATTR_INSTALLED: i_version,
                ATTR_DEDICATED: addon in dedicated,
            })

        return data

    def list_startup(self, start_type):
        """Get list of installed addon with need start by type."""
        addon_list = set()
        for addon in self._system_data.keys():
            if self.get_boot(addon) != BOOT_AUTO:
                continue

            try:
                if self._system_data[addon][ATTR_STARTUP] == start_type:
                    addon_list.add(addon)
            except KeyError:
                _LOGGER.warning("Orphaned addon detect %s", addon)
                continue

        return addon_list

    @property
    def list_removed(self):
        """Return local addons they not support from repo."""
        addon_list = set()
        for addon in self._system_data.keys():
            if addon not in self._current_data:
                addon_list.add(addon)

        return addon_list

    def exists_addon(self, addon):
        """Return True if a addon exists."""
        return addon in self._current_data or addon in self._system_data

    def is_installed(self, addon):
        """Return True if a addon is installed."""
        return addon in self._system_data

    def version_installed(self, addon):
        """Return installed version."""
        return self._user_data[addon][ATTR_VERSION]

    def set_addon_install(self, addon, version):
        """Set addon as installed."""
        self._system_data[addon] = copy.deepcopy(self._current_data[addon])
        self._user_data[addon] = {
            ATTR_OPTIONS: {},
            ATTR_VERSION: version,
        }
        self.save()

    def set_addon_uninstall(self, addon):
        """Set addon as uninstalled."""
        self._system_data.pop(addon, None)
        self._user_data.pop(addon, None)
        self.save()

    def set_addon_update(self, addon, version):
        """Update version of addon."""
        self._system_data[addon] = copy.deepcopy(self._current_data[addon])
        self._user_data[addon][ATTR_VERSION] = version
        self.save()

    def set_options(self, addon, options):
        """Store user addon options."""
        self._user_data[addon][ATTR_OPTIONS] = copy.deepcopy(options)
        self.save()

    def set_boot(self, addon, boot):
        """Store user boot options."""
        self._user_data[addon][ATTR_BOOT] = boot
        self.save()

    def get_options(self, addon):
        """Return options with local changes."""
        return {
            **self._system_data[addon][ATTR_OPTIONS],
            **self._user_data[addon][ATTR_OPTIONS],
        }

    def get_boot(self, addon):
        """Return boot config with prio local settings."""
        if ATTR_BOOT in self._user_data[addon]:
            return self._user_data[addon][ATTR_BOOT]

        return self._system_data[addon][ATTR_BOOT]

    def get_name(self, addon):
        """Return name of addon."""
        return self._system_data[addon][ATTR_NAME]

    def get_description(self, addon):
        """Return description of addon."""
        return self._system_data[addon][ATTR_DESCRIPTON]

    def get_last_version(self, addon):
        """Return version of addon."""
        if addon not in self._current_data:
            return self.version_installed(addon)
        return self._current_data[addon][ATTR_VERSION]

    def get_ports(self, addon):
        """Return ports of addon."""
        return self._system_data[addon].get(ATTR_PORTS)

    def get_image(self, addon):
        """Return image name of addon."""
        addon_data = self._system_data.get(addon, self._current_data[addon])

        if ATTR_IMAGE not in addon_data:
            return "{}/{}-addon-{}".format(DOCKER_REPO, self.arch, addon)

        return addon_data[ATTR_IMAGE]

    def map_config(self, addon):
        """Return True if config map is needed."""
        return MAP_CONFIG in self._system_data[addon][ATTR_MAP]

    def map_ssl(self, addon):
        """Return True if ssl map is needed."""
        return MAP_SSL in self._system_data[addon][ATTR_MAP]

    def map_addons(self, addon):
        """Return True if addons map is needed."""
        return MAP_ADDONS in self._system_data[addon][ATTR_MAP]

    def map_backup(self, addon):
        """Return True if backup map is needed."""
        return MAP_BACKUP in self._system_data[addon][ATTR_MAP]

    def path_data(self, addon):
        """Return addon data path inside supervisor."""
        return "{}/{}".format(self.config.path_addons_data, addon)

    def path_data_docker(self, addon):
        """Return addon data path external for docker."""
        return "{}/{}".format(self.config.path_addons_data_docker, addon)

    def path_addon_options(self, addon):
        """Return path to addons options."""
        return "{}/options.json".format(self.path_data(addon))

    def write_addon_options(self, addon):
        """Return True if addon options is written to data."""
        schema = self.get_schema(addon)
        options = self.get_options(addon)

        try:
            schema(options)
            return write_json_file(self.path_addon_options(addon), options)
        except vol.Invalid as ex:
            _LOGGER.error("Addon %s have wrong options -> %s", addon,
                          humanize_error(options, ex))

        return False

    def get_schema(self, addon):
        """Create a schema for addon options."""
        raw_schema = self._system_data[addon][ATTR_SCHEMA]

        schema = vol.Schema(vol.All(dict, validate_options(raw_schema)))
        return schema
