export const ids=["8716"];export const modules={49976:function(e,t,o){o.d(t,{U:()=>i});const i=e=>e.stopPropagation()},87865:function(e,t,o){o.d(t,{v:()=>i});const i=async(e,t)=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const o=t??document.body,i=document.createElement("textarea");i.value=e,o.appendChild(i),i.select(),document.execCommand("copy"),o.removeChild(i)}},59826:function(e,t,o){var i=o(44249),r=o(31622),a=o(57243),d=o(50778),l=o(22344);(0,i.Z)([(0,d.Mo)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[l.W,a.iv`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}:host([destructive]){--mdc-theme-primary:var(--error-color)}`]}]}}),r.z)},68325:function(e,t,o){var i=o(44249),r=o(72621),a=(o(92745),o(13334),o(57243)),d=o(50778),l=o(27486),n=o(36522),s=o(49976);const h={key:"Mod-s",run:e=>((0,n.B)(e.dom,"editor-save"),!0)},c=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,i.Z)([(0,d.Mo)("ha-code-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({attribute:"read-only",type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"linewrap",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"error",value:()=>!1},{kind:"field",decorators:[(0,d.SB)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.Z)(i,"connectedCallback",this,3)([]),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",s.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.Z)(i,"disconnectedCallback",this,3)([]),this.removeEventListener("keydown",s.U),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){this._loadedCodeMirror??=await Promise.all([o.e("3895"),o.e("7366"),o.e("4729")]).then(o.bind(o,2765)),(0,r.Z)(i,"scheduleUpdate",this,3)([])}},{kind:"method",key:"update",value:function(e){if((0,r.Z)(i,"update",this,3)([e]),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:[this._loadedCodeMirror.langCompartment.reconfigure(this._mode),this._loadedCodeMirror.foldingCompartment.reconfigure(this._getFoldingExtensions())]}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("linewrap")&&t.push({effects:this._loadedCodeMirror.linewrapCompartment.reconfigure(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[])}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.indentationMarkers({thickness:0,activeThickness:1,colors:{activeLight:"var(--secondary-text-color)",activeDark:"var(--secondary-text-color)"}}),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,h]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.linewrapCompartment.of(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[]),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate),this._loadedCodeMirror.foldingCompartment.of(this._getFoldingExtensions())];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:()=>(0,l.Z)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=this._getStates(this.hass.states);return o&&o.length?{from:Number(t.from),options:o,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=[],this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:c})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=await this._getIconItems();return{from:Number(t.from),options:o,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,n.B)(this,"value-changed",{value:this._value}))}}},{kind:"field",key:"_getFoldingExtensions",value(){return()=>"yaml"===this.mode?[this._loadedCodeMirror.foldGutter(),this._loadedCodeMirror.foldingOnIndent]:[]}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}]}}),a.fl)},34363:function(e,t,o){var i=o(44249),r=o(57243),a=o(50778);(0,i.Z)([(0,a.Mo)("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return r.dy`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px;padding-inline-start:16px;padding-inline-end:16px}`}]}}),r.oi)},11530:function(e,t,o){o.r(t),o.d(t,{HaObjectSelector:()=>n});var i=o(44249),r=o(72621),a=o(57243),d=o(50778),l=o(36522);o(64889),o(34363);let n=(0,i.Z)([(0,d.Mo)("ha-selector-object")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,d.IO)("ha-yaml-editor",!0)],key:"_yamlEditor",value:void 0},{kind:"field",key:"_valueChangedFromChild",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy`<ha-yaml-editor .hass="${this.hass}" .readonly="${this.disabled}" .label="${this.label}" .required="${this.required}" .placeholder="${this.placeholder}" .defaultValue="${this.value}" @value-changed="${this._handleChange}"></ha-yaml-editor> ${this.helper?a.dy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"updated",value:function(e){(0,r.Z)(o,"updated",this,3)([e]),e.has("value")&&!this._valueChangedFromChild&&this._yamlEditor.setValue(this.value),this._valueChangedFromChild=!1}},{kind:"method",key:"_handleChange",value:function(e){this._valueChangedFromChild=!0;const t=e.target.value;e.target.isValid&&this.value!==t&&(0,l.B)(this,"value-changed",{value:t})}}]}}),a.oi)},64889:function(e,t,o){var i=o(44249),r=o(72621),a=o(76848),d=o(57243),l=o(50778),n=o(36522),s=o(28008),h=(o(68325),o(72473)),c=o(87865);o(59826);(0,i.Z)([(0,l.Mo)("ha-yaml-editor")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"yamlSchema",value:()=>a.oW},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"defaultValue",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"is-valid",type:Boolean})],key:"isValid",value:()=>!0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:"auto-update",type:Boolean})],key:"autoUpdate",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"read-only",type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"copy-clipboard",type:Boolean})],key:"copyClipboard",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)({attribute:"has-extra-actions",type:Boolean})],key:"hasExtraActions",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_yaml",value:()=>""},{kind:"field",decorators:[(0,l.IO)("ha-code-editor")],key:"_codeEditor",value:void 0},{kind:"method",key:"setValue",value:function(e){try{this._yaml=(e=>{if("object"!=typeof e||null===e)return!1;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0})(e)?"":(0,a.$w)(e,{schema:this.yamlSchema,quotingType:'"',noRefs:!0})}catch(t){console.error(t,e),alert(`There was an error converting to YAML: ${t}`)}}},{kind:"method",key:"firstUpdated",value:function(){void 0!==this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"willUpdate",value:function(e){(0,r.Z)(o,"willUpdate",this,3)([e]),this.autoUpdate&&e.has("value")&&this.setValue(this.value)}},{kind:"method",key:"focus",value:function(){this._codeEditor?.codemirror&&this._codeEditor?.codemirror.focus()}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?d.Ld:d.dy` ${this.label?d.dy`<p>${this.label}${this.required?" *":""}</p>`:d.Ld} <ha-code-editor .hass="${this.hass}" .value="${this._yaml}" .readOnly="${this.readOnly}" mode="yaml" autocomplete-entities autocomplete-icons .error="${!1===this.isValid}" @value-changed="${this._onChange}" dir="ltr"></ha-code-editor> ${this.copyClipboard||this.hasExtraActions?d.dy` <div class="card-actions"> ${this.copyClipboard?d.dy` <ha-button @click="${this._copyYaml}"> ${this.hass.localize("ui.components.yaml-editor.copy_to_clipboard")} </ha-button> `:d.Ld} <slot name="extra-actions"></slot> </div> `:d.Ld} `}},{kind:"method",key:"_onChange",value:function(e){let t;e.stopPropagation(),this._yaml=e.detail.value;let o,i=!0;if(this._yaml)try{t=(0,a.zD)(this._yaml,{schema:this.yamlSchema})}catch(e){i=!1,o=`${this.hass.localize("ui.components.yaml-editor.error",{reason:e.reason})}${e.mark?` (${this.hass.localize("ui.components.yaml-editor.error_location",{line:e.mark.line+1,column:e.mark.column+1})})`:""}`}else t={};this.value=t,this.isValid=i,(0,n.B)(this,"value-changed",{value:t,isValid:i,errorMsg:o})}},{kind:"get",key:"yaml",value:function(){return this._yaml}},{kind:"method",key:"_copyYaml",value:async function(){this.yaml&&(await(0,c.v)(this.yaml),(0,h.C)(this,{message:this.hass.localize("ui.common.copied_clipboard")}))}},{kind:"get",static:!0,key:"styles",value:function(){return[s.Qx,d.iv`.card-actions{border-radius:var(--actions-border-radius,0px 0px var(--ha-card-border-radius,12px) var(--ha-card-border-radius,12px));border:1px solid var(--divider-color);padding:5px 16px}ha-code-editor{flex-grow:1}`]}}]}}),d.oi)},72473:function(e,t,o){o.d(t,{C:()=>r});var i=o(36522);const r=(e,t)=>(0,i.B)(e,"hass-notification",t)}};
//# sourceMappingURL=8716.827eec8053239bac.js.map