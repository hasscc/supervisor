export const ids=["3895"];export const modules={67476:function(r){r.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},46162:function(r,t,e){var n=e(1569),o=e(94400),i=e(36313),a=n.ArrayBuffer,u=n.TypeError;r.exports=a&&o(a.prototype,"byteLength","get")||function(r){if("ArrayBuffer"!==i(r))throw new u("ArrayBuffer expected");return r.byteLength}},58812:function(r,t,e){var n=e(1569),o=e(67476),i=e(46162),a=n.DataView;r.exports=function(r){if(!o||0!==i(r))return!1;try{return new a(r),!1}catch(r){return!0}}},38511:function(r,t,e){var n=e(58812),o=TypeError;r.exports=function(r){if(n(r))throw new o("ArrayBuffer is detached");return r}},74125:function(r,t,e){var n=e(1569),o=e(72878),i=e(94400),a=e(25517),u=e(38511),f=e(46162),y=e(8209),c=e(63249),p=n.structuredClone,s=n.ArrayBuffer,d=n.DataView,h=Math.min,A=s.prototype,v=d.prototype,g=o(A.slice),w=i(A,"resizable","get"),T=i(A,"maxByteLength","get"),l=o(v.getInt8),x=o(v.setInt8);r.exports=(c||y)&&function(r,t,e){var n,o=f(r),i=void 0===t?o:a(t),A=!w||!w(r);if(u(r),c&&(r=p(r,{transfer:[r]}),o===i&&(e||A)))return r;if(o>=i&&(!e||A))n=g(r,0,i);else{var v=e&&!A&&T?{maxByteLength:T(r)}:void 0;n=new s(i,v);for(var B=new d(r),E=new d(n),D=h(i,o),C=0;C<D;C++)x(E,C,l(B,C))}return c||y(r),n}},32329:function(r,t,e){var n,o,i,a=e(67476),u=e(85779),f=e(1569),y=e(31947),c=e(61896),p=e(39129),s=e(59069),d=e(97503),h=e(34259),A=e(99473),v=e(27803),g=e(63478),w=e(75205),T=e(50346),l=e(27847),x=e(65005),B=e(84238),E=B.enforce,D=B.get,C=f.Int8Array,R=C&&C.prototype,b=f.Uint8ClampedArray,I=b&&b.prototype,O=C&&w(C),L=R&&w(R),N=Object.prototype,U=f.TypeError,m=l("toStringTag"),M=x("TYPED_ARRAY_TAG"),F="TypedArrayConstructor",_=a&&!!T&&"Opera"!==s(f.opera),S=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},W={BigInt64Array:8,BigUint64Array:8},Y=function(r){var t=w(r);if(c(t)){var e=D(t);return e&&p(e,F)?e[F]:Y(t)}},P=function(r){if(!c(r))return!1;var t=s(r);return p(V,t)||p(W,t)};for(n in V)(i=(o=f[n])&&o.prototype)?E(i)[F]=o:_=!1;for(n in W)(i=(o=f[n])&&o.prototype)&&(E(i)[F]=o);if((!_||!y(O)||O===Function.prototype)&&(O=function(){throw new U("Incorrect invocation")},_))for(n in V)f[n]&&T(f[n],O);if((!_||!L||L===N)&&(L=O.prototype,_))for(n in V)f[n]&&T(f[n].prototype,L);if(_&&w(I)!==L&&T(I,L),u&&!p(L,m))for(n in S=!0,v(L,m,{configurable:!0,get:function(){return c(this)?this[M]:void 0}}),V)f[n]&&h(f[n],M,n);r.exports={NATIVE_ARRAY_BUFFER_VIEWS:_,TYPED_ARRAY_TAG:S&&M,aTypedArray:function(r){if(P(r))return r;throw new U("Target is not a typed array")},aTypedArrayConstructor:function(r){if(y(r)&&(!T||g(O,r)))return r;throw new U(d(r)+" is not a typed array constructor")},exportTypedArrayMethod:function(r,t,e,n){if(u){if(e)for(var o in V){var i=f[o];if(i&&p(i.prototype,r))try{delete i.prototype[r]}catch(e){try{i.prototype[r]=t}catch(r){}}}L[r]&&!e||A(L,r,e?t:_&&R[r]||t,n)}},exportTypedArrayStaticMethod:function(r,t,e){var n,o;if(u){if(T){if(e)for(n in V)if((o=f[n])&&p(o,r))try{delete o[r]}catch(r){}if(O[r]&&!e)return;try{return A(O,r,e?t:_&&O[r]||t)}catch(r){}}for(n in V)!(o=f[n])||o[r]&&!e||A(o,r,t)}},getTypedArrayConstructor:Y,isView:function(r){if(!c(r))return!1;var t=s(r);return"DataView"===t||p(V,t)||p(W,t)},isTypedArray:P,TypedArray:O,TypedArrayPrototype:L}},27883:function(r,t,e){var n=e(13053);r.exports=function(r,t){for(var e=n(r),o=new t(e),i=0;i<e;i++)o[i]=r[e-i-1];return o}},59400:function(r,t,e){var n=e(13053),o=e(88045),i=RangeError;r.exports=function(r,t,e,a){var u=n(r),f=o(e),y=f<0?u+f:f;if(y>=u||y<0)throw new i("Incorrect index");for(var c=new t(u),p=0;p<u;p++)c[p]=p===y?a:r[p];return c}},8209:function(r,t,e){var n,o,i,a,u=e(1569),f=e(19444),y=e(63249),c=u.structuredClone,p=u.ArrayBuffer,s=u.MessageChannel,d=!1;if(y)d=function(r){c(r,{transfer:[r]})};else if(p)try{s||(n=f("worker_threads"))&&(s=n.MessageChannel),s&&(o=new s,i=new p(2),a=function(r){o.port1.postMessage(null,[r])},2===i.byteLength&&(a(i),0===i.byteLength&&(d=a)))}catch(r){}r.exports=d},58108:function(r,t,e){var n=e(2708);r.exports="NODE"===n},2708:function(r,t,e){var n=e(1569),o=e(63253),i=e(36313),a=function(r){return o.slice(0,r.length)===r};r.exports=a("Bun/")?"BUN":a("Cloudflare-Workers")?"CLOUDFLARE":a("Deno/")?"DENO":a("Node.js/")?"NODE":n.Bun&&"string"==typeof Bun.version?"BUN":n.Deno&&"object"==typeof Deno.version?"DENO":"process"===i(n.process)?"NODE":n.window&&n.document?"BROWSER":"REST"},19444:function(r,t,e){var n=e(1569),o=e(58108);r.exports=function(r){if(o){try{return n.process.getBuiltinModule(r)}catch(r){}try{return Function('return require("'+r+'")')()}catch(r){}}}},16856:function(r,t,e){var n=e(59069);r.exports=function(r){var t=n(r);return"BigInt64Array"===t||"BigUint64Array"===t}},63249:function(r,t,e){var n=e(1569),o=e(29660),i=e(29565),a=e(2708),u=n.structuredClone;r.exports=!!u&&!o((function(){if("DENO"===a&&i>92||"NODE"===a&&i>94||"BROWSER"===a&&i>97)return!1;var r=new ArrayBuffer(8),t=u(r,{transfer:[r]});return 0!==r.byteLength||8!==t.byteLength}))},34862:function(r,t,e){var n=e(85354),o=TypeError;r.exports=function(r){var t=n(r,"number");if("number"==typeof t)throw new o("Can't convert number to bigint");return BigInt(t)}},25517:function(r,t,e){var n=e(88045),o=e(82065),i=RangeError;r.exports=function(r){if(void 0===r)return 0;var t=n(r),e=o(t);if(t!==e)throw new i("Wrong length or index");return e}},26200:function(r,t,e){var n=e(85779),o=e(27803),i=e(58812),a=ArrayBuffer.prototype;n&&!("detached"in a)&&o(a,"detached",{configurable:!0,get:function(){return i(this)}})},22246:function(r,t,e){var n=e(40810),o=e(74125);o&&n({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return o(this,arguments.length?arguments[0]:void 0,!1)}})},25754:function(r,t,e){var n=e(40810),o=e(74125);o&&n({target:"ArrayBuffer",proto:!0},{transfer:function(){return o(this,arguments.length?arguments[0]:void 0,!0)}})},71375:function(r,t,e){var n=e(27883),o=e(32329),i=o.aTypedArray,a=o.exportTypedArrayMethod,u=o.getTypedArrayConstructor;a("toReversed",(function(){return n(i(this),u(this))}))},15524:function(r,t,e){var n=e(32329),o=e(72878),i=e(63983),a=e(17743),u=n.aTypedArray,f=n.getTypedArrayConstructor,y=n.exportTypedArrayMethod,c=o(n.TypedArrayPrototype.sort);y("toSorted",(function(r){void 0!==r&&i(r);var t=u(this),e=a(f(t),t);return c(e,r)}))},20267:function(r,t,e){var n=e(59400),o=e(32329),i=e(16856),a=e(88045),u=e(34862),f=o.aTypedArray,y=o.getTypedArrayConstructor,c=o.exportTypedArrayMethod,p=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(r){return 8===r}}();c("with",{with:function(r,t){var e=f(this),o=a(r),c=i(e)?u(t):+t;return n(e,y(e),o,c)}}.with,!p)}};
//# sourceMappingURL=3895.ad61f1844a7bc58f.js.map