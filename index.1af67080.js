var t,e,r,n={},o={};e=function(t){var e,r,n=p(t),o=n[0],i=n[1],f=new a(function(t,e,r){return 3*(e+r)/4-r}(0,o,i)),u=0,c=i>0?o-4:o;for(r=0;r<c;r+=4)e=s[t.charCodeAt(r)]<<18|s[t.charCodeAt(r+1)]<<12|s[t.charCodeAt(r+2)]<<6|s[t.charCodeAt(r+3)],f[u++]=e>>16&255,f[u++]=e>>8&255,f[u++]=255&e;2===i&&(e=s[t.charCodeAt(r)]<<2|s[t.charCodeAt(r+1)]>>4,f[u++]=255&e);1===i&&(e=s[t.charCodeAt(r)]<<10|s[t.charCodeAt(r+1)]<<4|s[t.charCodeAt(r+2)]>>2,f[u++]=e>>8&255,f[u++]=255&e);return f},r=function(t){for(var e,r=t.length,n=r%3,o=[],i=16383,f=0,s=r-n;f<s;f+=i)o.push(y(t,f,f+i>s?s:f+i));1===n?(e=t[r-1],o.push(u[e>>2]+u[e<<4&63]+"==")):2===n&&(e=(t[r-2]<<8)+t[r-1],o.push(u[e>>10]+u[e>>4&63]+u[e<<2&63]+"="));return o.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var i,f,u=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=0,l=c.length;h<l;++h)u[h]=c[h],s[c.charCodeAt(h)]=h;function p(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function y(t,e,r){for(var n,o,i=[],f=e;f<r;f+=3)n=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),i.push(u[(o=n)>>18&63]+u[o>>12&63]+u[o>>6&63]+u[63&o]);return i.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63,i=function(t,e,r,n,o){var i,f,u=8*o-n-1,s=(1<<u)-1,a=s>>1,c=-7,h=r?o-1:0,l=r?-1:1,p=t[e+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=u;c>0;i=256*i+t[e+h],h+=l,c-=8);for(f=i&(1<<-c)-1,i>>=-c,c+=n;c>0;f=256*f+t[e+h],h+=l,c-=8);if(0===i)i=1-a;else{if(i===s)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),i-=a}return(p?-1:1)*f*Math.pow(2,i-n)},f=function(t,e,r,n,o,i){var f,u,s,a=8*i-o-1,c=(1<<a)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,f=c):(f=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-f))<1&&(f--,s*=2),(e+=f+h>=1?l/s:l*Math.pow(2,1-h))*s>=2&&(f++,s/=2),f+h>=c?(u=0,f=c):f+h>=1?(u=(e*s-1)*Math.pow(2,o),f+=h):(u=e*Math.pow(2,h-1)*Math.pow(2,o),f=0));o>=8;t[r+p]=255&u,p+=y,u/=256,o-=8);for(f=f<<o|u,a+=o;a>0;t[r+p]=255&f,p+=y,f/=256,a-=8);t[r+p-y]|=128*g};const g="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t=d;function w(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,d.prototype),e}function d(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return E(t)}return b(t,e,r)}function b(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|U(t,e);let n=w(r);const o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(nt(t,Uint8Array)){const e=new Uint8Array(t);return A(e.buffer,e.byteOffset,e.byteLength)}return B(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(nt(t,ArrayBuffer)||t&&nt(t.buffer,ArrayBuffer))return A(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(nt(t,SharedArrayBuffer)||t&&nt(t.buffer,SharedArrayBuffer)))return A(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return d.from(n,e,r);const o=function(t){if(d.isBuffer(t)){const e=0|I(t.length),r=w(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||ot(t.length)?w(0):B(t);if("Buffer"===t.type&&Array.isArray(t.data))return B(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return d.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function m(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function E(t){return m(t),w(t<0?0:0|I(t))}function B(t){const e=t.length<0?0:0|I(t.length),r=w(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function A(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,d.prototype),n}function I(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function U(t,e){if(d.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||nt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return et(t).length;default:if(o)return n?-1:tt(t).length;e=(""+e).toLowerCase(),o=!0}}function v(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return P(this,e,r);case"utf8":case"utf-8":return $(this,e,r);case"ascii":return M(this,e,r);case"latin1":case"binary":return N(this,e,r);case"base64":return j(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function O(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function R(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),ot(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=d.from(e,n)),d.isBuffer(e))return 0===e.length?-1:T(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):T(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function T(t,e,r,n,o){let i,f=1,u=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;f=2,u/=2,s/=2,r/=2}function a(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(o){let n=-1;for(i=r;i<u;i++)if(a(t,i)===a(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===s)return n*f}else-1!==n&&(i-=i-n),n=-1}else for(r+s>u&&(r=u-s),i=r;i>=0;i--){let r=!0;for(let n=0;n<s;n++)if(a(t,i+n)!==a(e,n)){r=!1;break}if(r)return i}return-1}function L(t,e,r,n){r=Number(r)||0;const o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=e.length;let f;for(n>i/2&&(n=i/2),f=0;f<n;++f){const n=parseInt(e.substr(2*f,2),16);if(ot(n))return f;t[r+f]=n}return f}function S(t,e,r,n){return rt(tt(e,t.length-r),t,r,n)}function x(t,e,r,n){return rt(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function _(t,e,r,n){return rt(et(e),t,r,n)}function C(t,e,r,n){return rt(function(t,e){let r,n,o;const i=[];for(let f=0;f<t.length&&!((e-=2)<0);++f)r=t.charCodeAt(f),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function j(t,e,n){return 0===e&&n===t.length?r(t):r(t.slice(e,n))}function $(t,e,r){r=Math.min(t.length,r);const n=[];let o=e;for(;o<r;){const e=t[o];let i=null,f=e>239?4:e>223?3:e>191?2:1;if(o+f<=r){let r,n,u,s;switch(f){case 1:e<128&&(i=e);break;case 2:r=t[o+1],128==(192&r)&&(s=(31&e)<<6|63&r,s>127&&(i=s));break;case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(s=(15&e)<<12|(63&r)<<6|63&n,s>2047&&(s<55296||s>57343)&&(i=s));break;case 4:r=t[o+1],n=t[o+2],u=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&u)&&(s=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&u,s>65535&&s<1114112&&(i=s))}}null===i?(i=65533,f=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=f}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}d.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),d.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.byteOffset}}),d.poolSize=8192,d.from=function(t,e,r){return b(t,e,r)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array),d.alloc=function(t,e,r){return function(t,e,r){return m(t),t<=0?w(t):void 0!==e?"string"==typeof r?w(t).fill(e,r):w(t).fill(e):w(t)}(t,e,r)},d.allocUnsafe=function(t){return E(t)},d.allocUnsafeSlow=function(t){return E(t)},d.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==d.prototype},d.compare=function(t,e){if(nt(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),nt(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(t)||!d.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},d.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return d.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=d.allocUnsafe(e);let o=0;for(r=0;r<t.length;++r){let e=t[r];if(nt(e,Uint8Array))o+e.length>n.length?(d.isBuffer(e)||(e=d.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else{if(!d.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,o)}o+=e.length}return n},d.byteLength=U,d.prototype._isBuffer=!0,d.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)O(this,e,e+1);return this},d.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)O(this,e,e+3),O(this,e+1,e+2);return this},d.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)O(this,e,e+7),O(this,e+1,e+6),O(this,e+2,e+5),O(this,e+3,e+4);return this},d.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?$(this,0,t):v.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(t){if(!d.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===d.compare(this,t)},d.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},g&&(d.prototype[g]=d.prototype.inspect),d.prototype.compare=function(t,e,r,n,o){if(nt(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;let i=(o>>>=0)-(n>>>=0),f=(r>>>=0)-(e>>>=0);const u=Math.min(i,f),s=this.slice(n,o),a=t.slice(e,r);for(let t=0;t<u;++t)if(s[t]!==a[t]){i=s[t],f=a[t];break}return i<f?-1:f<i?1:0},d.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},d.prototype.indexOf=function(t,e,r){return R(this,t,e,r,!0)},d.prototype.lastIndexOf=function(t,e,r){return R(this,t,e,r,!1)},d.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return L(this,t,e,r);case"utf8":case"utf-8":return S(this,t,e,r);case"ascii":case"latin1":case"binary":return x(this,t,e,r);case"base64":return _(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function M(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function N(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function P(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=it[t[n]];return o}function k(t,e,r){const n=t.slice(e,r);let o="";for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}function F(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function D(t,e,r,n,o,i){if(!d.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function z(t,e,r,n,o){H(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function G(t,e,r,n,o){H(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function Y(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function V(t,e,r,n,o){return e=+e,r>>>=0,o||Y(t,0,r,4),f(t,e,r,n,23,4),r+4}function W(t,e,r,n,o){return e=+e,r>>>=0,o||Y(t,0,r,8),f(t,e,r,n,52,8),r+8}d.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,d.prototype),n},d.prototype.readUintLE=d.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||F(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},d.prototype.readUintBE=d.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||F(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},d.prototype.readUint8=d.prototype.readUInt8=function(t,e){return t>>>=0,e||F(t,1,this.length),this[t]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(t,e){return t>>>=0,e||F(t,2,this.length),this[t]|this[t+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(t,e){return t>>>=0,e||F(t,2,this.length),this[t]<<8|this[t+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(t,e){return t>>>=0,e||F(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(t,e){return t>>>=0,e||F(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},d.prototype.readBigUInt64LE=ft((function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Q(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),d.prototype.readBigUInt64BE=ft((function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Q(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),d.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||F(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},d.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||F(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},d.prototype.readInt8=function(t,e){return t>>>=0,e||F(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},d.prototype.readInt16LE=function(t,e){t>>>=0,e||F(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt16BE=function(t,e){t>>>=0,e||F(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt32LE=function(t,e){return t>>>=0,e||F(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},d.prototype.readInt32BE=function(t,e){return t>>>=0,e||F(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},d.prototype.readBigInt64LE=ft((function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Q(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),d.prototype.readBigInt64BE=ft((function(t){K(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Q(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),d.prototype.readFloatLE=function(t,e){return t>>>=0,e||F(t,4,this.length),i(this,t,!0,23,4)},d.prototype.readFloatBE=function(t,e){return t>>>=0,e||F(t,4,this.length),i(this,t,!1,23,4)},d.prototype.readDoubleLE=function(t,e){return t>>>=0,e||F(t,8,this.length),i(this,t,!0,52,8)},d.prototype.readDoubleBE=function(t,e){return t>>>=0,e||F(t,8,this.length),i(this,t,!1,52,8)},d.prototype.writeUintLE=d.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){D(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){D(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},d.prototype.writeUint8=d.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,1,255,0),this[e]=255&t,e+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},d.prototype.writeBigUInt64LE=ft((function(t,e=0){return z(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeBigUInt64BE=ft((function(t,e=0){return G(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);D(this,t,e,r,n-1,-n)}let o=0,i=1,f=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===f&&0!==this[e+o-1]&&(f=1),this[e+o]=(t/i>>0)-f&255;return e+r},d.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);D(this,t,e,r,n-1,-n)}let o=r-1,i=1,f=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===f&&0!==this[e+o+1]&&(f=1),this[e+o]=(t/i>>0)-f&255;return e+r},d.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},d.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},d.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},d.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},d.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||D(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},d.prototype.writeBigInt64LE=ft((function(t,e=0){return z(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeBigInt64BE=ft((function(t,e=0){return G(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeFloatLE=function(t,e,r){return V(this,t,e,!0,r)},d.prototype.writeFloatBE=function(t,e,r){return V(this,t,e,!1,r)},d.prototype.writeDoubleLE=function(t,e,r){return W(this,t,e,!0,r)},d.prototype.writeDoubleBE=function(t,e,r){return W(this,t,e,!1,r)},d.prototype.copy=function(t,e,r,n){if(!d.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},d.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{const i=d.isBuffer(t)?t:d.from(t,n),f=i.length;if(0===f)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%f]}return this};const q={};function J(t,e,r){q[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Z(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function H(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new q.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,r){K(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||Q(e,t.length-(r+1))}(n,o,i)}function K(t,e){if("number"!=typeof t)throw new q.ERR_INVALID_ARG_TYPE(e,"number",t)}function Q(t,e,r){if(Math.floor(t)!==t)throw K(t,r),new q.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}J("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),J("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),J("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=Z(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=Z(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n}),RangeError);const X=/[^+/0-9A-Za-z-_]/g;function tt(t,e){let r;e=e||1/0;const n=t.length;let o=null;const i=[];for(let f=0;f<n;++f){if(r=t.charCodeAt(f),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(f+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function et(t){return e(function(t){if((t=(t=t.split("=")[0]).trim().replace(X,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function rt(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function nt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function ot(t){return t!=t}const it=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();function ft(t){return"undefined"==typeof BigInt?ut:t}function ut(){throw new Error("BigInt not supported")}var st=t;const at=Symbol.prototype.valueOf;var ct,ht=Object.prototype.toString;function lt(t){return"function"==typeof t.constructor?t.constructor.name:null}ct=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e,r=typeof t;if("boolean"===r)return"boolean";if("string"===r)return"string";if("number"===r)return"number";if("symbol"===r)return"symbol";if("function"===r)return e=t,"GeneratorFunction"===lt(e)?"generatorfunction":"function";if(function(t){return Array.isArray?Array.isArray(t):t instanceof Array}(t))return"array";if(function(t){return!(!t.constructor||"function"!=typeof t.constructor.isBuffer)&&t.constructor.isBuffer(t)}(t))return"buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}(t))return"arguments";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";if(function(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}(t))return"regexp";switch(lt(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(function(t){return"function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}(t))return"generator";switch(r=ht.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return r.slice(8,-1).toLowerCase().replace(/\s/g,"")},o=function(t,e){switch(ct(t)){case"array":return t.slice();case"object":return Object.assign({},t);case"date":return new t.constructor(Number(t));case"map":return new Map(t);case"set":return new Set(t);case"buffer":return function(t){const e=t.length,r=st.allocUnsafe?st.allocUnsafe(e):st.from(e);return t.copy(r),r}(t);case"symbol":return function(t){return at?Object(at.call(t)):{}}(t);case"arraybuffer":return function(t){const e=new t.constructor(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}(t);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return function(t,e){return new t.constructor(t.buffer,t.byteOffset,t.length)}(t);case"regexp":return function(t){const e=void 0!==t.flags?t.flags:/\w+$/.exec(t)||void 0,r=new t.constructor(t.source,e);return r.lastIndex=t.lastIndex,r}(t);case"error":return Object.create(t);default:return t}};var pt,yt;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function gt(t){return!0===yt(t)&&"[object Object]"===Object.prototype.toString.call(t)}function wt(t,e){switch(ct(t)){case"object":return function(t,e){if("function"==typeof e)return e(t);if(e||pt(t)){const r=new t.constructor;for(let n in t)r[n]=wt(t[n],e);return r}return t}(t,e);case"array":return function(t,e){const r=new t.constructor(t.length);for(let n=0;n<t.length;n++)r[n]=wt(t[n],e);return r}(t,e);default:return o(t)}}yt=function(t){return null!=t&&"object"==typeof t&&!1===Array.isArray(t)},pt=function(t){var e,r;return!1!==gt(t)&&("function"==typeof(e=t.constructor)&&(!1!==gt(r=e.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")))},n=wt;const dt={a:[2,3],b:[4]},bt={...dt};console.log(bt);const mt=JSON.stringify(dt);console.log(JSON.parse(mt));let Et={a:"b"};n([Et]);Et.c="d";
//# sourceMappingURL=index.1af67080.js.map
