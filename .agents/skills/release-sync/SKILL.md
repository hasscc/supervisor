---
name: release-sync
description: 同步上游版本
---

# Release Sync

## 获取最新版本
```bash
version=$(curl https://version.home-assistant.io/stable.json | jq -r .supervisor)
if git ls-remote --tags origin | grep -q "refs/tags/$version$"; then
    echo "$version 已存在，退出任务"
    exit 0
fi
````

## 合并上游
```bash
git remote add upstream https://github.com/home-assistant/supervisor.git
git fetch upstream $version
git merge $version
git push
git ls-remote --tags origin | grep "refs/tags/$version$"
```

## 发布版本
- 合并推送成功后通过`gh`命令发布版本
- 遇到已存在的草稿发布版可删除
- 发布成功后发送版本更新通知到公共频道`chat_id=$TELEGRAM_CHANNEL`
```bash
gh release create $version --title "$version" --notes "<生成中文说明>"
```

## 冲突处理
- 遇到代码冲突时，不要继续
- 发送冲突详情到私密频道`chat_id=$TELEGRAM_NOTIFY`

## 通知渠道
```bash
# 发送Telegram消息
# text参数支持正常的Markdown语法，无需转义
npx -y mcporter call --stdio 'uvx mcp-notify' tg_send_message chat_id="<chat_id>" text="<MarkdownText>" parse_mode="MarkdownV2"
```
