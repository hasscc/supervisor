"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["9733"],{50634:function(e,r,t){t.r(r),t.d(r,{HaQrCode:()=>v});var a=t(73577),o=t(72621),i=(t(71695),t(23669),t(13334),t(47021),t(57243)),s=t(50778),d=t(54647),n=(t(99426),t(11259));let l,c,h,u=e=>e,v=(0,a.Z)([(0,s.Mo)("ha-qr-code")],(function(e,r){class t extends r{constructor(...r){super(...r),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"data",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"error-correction-level"})],key:"errorCorrectionLevel",value(){return"medium"}},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"width",value(){return 4}},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"scale",value(){return 4}},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"margin",value(){return 4}},{kind:"field",decorators:[(0,s.Cb)({attribute:!1,type:Number})],key:"maskPattern",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"center-image"})],key:"centerImage",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,s.IO)("canvas")],key:"_canvas",value:void 0},{kind:"method",key:"willUpdate",value:function(e){(0,o.Z)(t,"willUpdate",this,3)([e]),(e.has("data")||e.has("scale")||e.has("width")||e.has("margin")||e.has("maskPattern")||e.has("errorCorrectionLevel"))&&this._error&&(this._error=void 0)}},{kind:"method",key:"updated",value:function(e){const r=this._canvas;if(r&&this.data&&(e.has("data")||e.has("scale")||e.has("width")||e.has("margin")||e.has("maskPattern")||e.has("errorCorrectionLevel")||e.has("centerImage"))){const e=getComputedStyle(this),t=e.getPropertyValue("--rgb-primary-text-color"),a=e.getPropertyValue("--rgb-card-background-color"),o=(0,n.CO)(t.split(",").map((e=>parseInt(e,10)))),i=(0,n.CO)(a.split(",").map((e=>parseInt(e,10))));if(d.toCanvas(r,this.data,{errorCorrectionLevel:this.errorCorrectionLevel||(this.centerImage?"Q":"M"),width:this.width,scale:this.scale,margin:this.margin,maskPattern:this.maskPattern,color:{light:i,dark:o}}).catch((e=>{this._error=e.message})),this.centerImage){const e=this._canvas.getContext("2d"),t=new Image;t.src=this.centerImage,t.onload=()=>{null==e||e.drawImage(t,.375*r.width,.375*r.height,r.width/4,r.height/4)}}}}},{kind:"method",key:"render",value:function(){return this.data?this._error?(0,i.dy)(l||(l=u`<ha-alert alert-type="error">${0}</ha-alert>`),this._error):(0,i.dy)(c||(c=u`<canvas></canvas>`)):i.Ld}},{kind:"field",static:!0,key:"styles",value(){return(0,i.iv)(h||(h=u`:host{display:block}`))}}]}}),i.oi)},23534:function(e,r,t){t.r(r),t.d(r,{HaSelectorQRCode:()=>l});var a=t(73577),o=(t(71695),t(47021),t(57243)),i=t(50778);t(50634);let s,d,n=e=>e,l=(0,a.Z)([(0,i.Mo)("ha-selector-qr_code")],(function(e,r){return{F:class extends r{constructor(...r){super(...r),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"method",key:"render",value:function(){var e,r,t,a;return(0,o.dy)(s||(s=n`<ha-qr-code .data="${0}" .scale="${0}" .errorCorrectionLevel="${0}" .centerImage="${0}"></ha-qr-code>`),null===(e=this.selector.qr_code)||void 0===e?void 0:e.data,null===(r=this.selector.qr_code)||void 0===r?void 0:r.scale,null===(t=this.selector.qr_code)||void 0===t?void 0:t.error_correction_level,null===(a=this.selector.qr_code)||void 0===a?void 0:a.center_image)}},{kind:"field",static:!0,key:"styles",value(){return(0,o.iv)(d||(d=n`ha-qr-code{text-align:center}`))}}]}}),o.oi)}}]);
//# sourceMappingURL=9733.8f43d641ffce0821.js.map