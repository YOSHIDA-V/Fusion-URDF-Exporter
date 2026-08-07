(()=>{(function(){let e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(let r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(let a of r)if(a.type==="childList")for(let n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){let a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;let a=t(r);fetch(r.href,a)}})();var gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$c="attached",Fi=1e3,ni=1001,ba=1002,si=1003,As=1004,Rs=1005,ui=1006,Cs=1007,vr=1008,Sn=1009,Ll=1014,Ln=1015,Pl=1016,Nl=1020,Ma=1023,Il=1026,Qc=1027,eh=1028,Kr=2300,pr=2301,jn=2302,po=2400,mo=2401,fo=2402,th=2500,ih=3200,rh=3201,Ct="srgb",qt="srgb-linear",Ul="display-p3",Ls="display-p3-linear",En="linear",Tn="srgb",go="rec709",Wn=7680,Dl=35044,Sa=2e3,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Wt="00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."),_o=1234567,xa=Math.PI/180,Jr=180/Math.PI;function Mi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wt[e&255]+Wt[e>>8&255]+Wt[e>>16&255]+Wt[e>>24&255]+"-"+Wt[t&255]+Wt[t>>8&255]+"-"+Wt[t>>16&15|64]+Wt[t>>24&255]+"-"+Wt[i&63|128]+Wt[i>>8&255]+"-"+Wt[i>>16&255]+Wt[i>>24&255]+Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]).toLowerCase()}function Ht(e,t,i){return Math.max(t,Math.min(i,e))}function Ps(e,t){return(e%t+t)%t}function ah(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function nh(e,t,i){return e===t?0:(i-e)/(t-e)}function ya(e,t,i){return(1-i)*e+i*t}function sh(e,t,i,r){return ya(e,t,1-Math.exp(-i*r))}function oh(e,t=1){return t-Math.abs(Ps(e,t*2)-t)}function lh(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function ch(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function hh(e,t){return e+Math.floor(Math.random()*(t-e+1))}function uh(e,t){return e+Math.random()*(t-e)}function dh(e){return e*(.5-Math.random())}function ph(e){e!==void 0&&(_o=e);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mh(e){return e*xa}function fh(e){return e*Jr}function gh(e){return(e&e-1)==0&&e!==0}function _h(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function vh(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function xh(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),c=n((t+r)/2),h=s((t+r)/2),u=n((t-r)/2),d=s((t-r)/2),m=n((r-t)/2),v=s((r-t)/2);switch(a){case"XYX":e.set(o*h,l*u,l*d,o*c);break;case"YZY":e.set(l*d,o*h,l*u,o*c);break;case"ZXZ":e.set(l*u,l*d,o*h,o*c);break;case"XZX":e.set(o*h,l*v,l*m,o*c);break;case"YXY":e.set(l*m,o*h,l*v,o*c);break;case"ZYZ":e.set(l*v,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function bi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function _t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var $t={DEG2RAD:xa,RAD2DEG:Jr,generateUUID:Mi,clamp:Ht,euclideanModulo:Ps,mapLinear:ah,inverseLerp:nh,lerp:ya,damp:sh,pingpong:oh,smoothstep:lh,smootherstep:ch,randInt:hh,randFloat:uh,randFloatSpread:dh,seededRandom:ph,degToRad:mh,radToDeg:fh,isPowerOfTwo:gh,ceilPowerOfTwo:_h,floorPowerOfTwo:vh,setQuaternionFromProperEuler:xh,normalize:_t,denormalize:bi},De=class Ol{constructor(t=0,i=0){Ol.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ht(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class Fl{constructor(t,i,r,a,n,s,o,l,c){Fl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],u=r[7],d=r[2],m=r[5],v=r[8],g=a[0],f=a[3],p=a[6],y=a[1],R=a[4],E=a[7],B=a[2],L=a[5],P=a[8];return n[0]=s*g+o*y+l*B,n[3]=s*f+o*R+l*L,n[6]=s*p+o*E+l*P,n[1]=c*g+h*y+u*B,n[4]=c*f+h*R+u*L,n[7]=c*p+h*E+u*P,n[2]=d*g+m*y+v*B,n[5]=d*f+m*R+v*L,n[8]=d*p+m*E+v*P,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*s-o*c,d=o*l-h*n,m=c*n-s*l,v=i*u+r*d+a*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return t[0]=u*g,t[1]=(a*c-h*r)*g,t[2]=(o*r-a*s)*g,t[3]=d*g,t[4]=(h*i-a*l)*g,t[5]=(a*n-o*i)*g,t[6]=m*g,t[7]=(r*l-c*i)*g,t[8]=(s*i-r*n)*g,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return this.premultiply(Xn.makeScale(t,i)),this}rotate(t){return this.premultiply(Xn.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xn.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xn=new rt;function kl(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ea(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function yh(){let e=Ea("canvas");return e.style.display="block",e}var vo={};function Bl(e){e in vo||(vo[e]=!0,console.warn(e))}var xo=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yo=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[qt]:{transfer:En,primaries:go,toReference:e=>e,fromReference:e=>e},[Ct]:{transfer:Tn,primaries:go,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Ls]:{transfer:En,primaries:"p3",toReference:e=>e.applyMatrix3(yo),fromReference:e=>e.applyMatrix3(xo)},[Ul]:{transfer:Tn,primaries:"p3",toReference:e=>e.convertSRGBToLinear().applyMatrix3(yo),fromReference:e=>e.applyMatrix3(xo).convertLinearToSRGB()}},bh=new Set([qt,Ls]),ht={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!bh.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,i){if(this.enabled===!1||t===i||!t||!i)return e;let r=za[t].toReference,a=za[i].fromReference;return a(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return za[e].primaries},getTransfer:function(e){return e===""?En:za[e].transfer}};function Yr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var wr,Mh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wr===void 0&&(wr=Ea("canvas")),wr.width=e.width,wr.height=e.height;let i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ea("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Yr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yr(t[i]/255)*255):t[i]=Yr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sh=0,zl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Yn(r[n].image)):a.push(Yn(r[n]))}else a=Yn(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Yn(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Mh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eh=0,Qt=class yn extends Zi{constructor(t=yn.DEFAULT_IMAGE,i=yn.DEFAULT_MAPPING,r=ni,a=ni,n=ui,s=vr,o=Ma,l=Sn,c=yn.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Mi(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fi:t.x-=Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x-=Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fi:t.y-=Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y-=Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=300,Qt.DEFAULT_ANISOTROPY=1;var Mt=class Hl{constructor(t=0,i=0,r=0,a=1){Hl.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w===void 0?1:t.w,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=.01,o=.1,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],g=l[2],f=l[6],p=l[10];if(Math.abs(h-d)<s&&Math.abs(u-g)<s&&Math.abs(v-f)<s){if(Math.abs(h+d)<o&&Math.abs(u+g)<o&&Math.abs(v+f)<o&&Math.abs(c+m+p-3)<o)return this.set(1,0,0,0),this;i=Math.PI;let R=(c+1)/2,E=(m+1)/2,B=(p+1)/2,L=(h+d)/4,P=(u+g)/4,O=(v+f)/4;return R>E&&R>B?R<s?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(R),a=L/r,n=P/r):E>B?E<s?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(E),r=L/a,n=O/a):B<s?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(B),r=P/n,a=O/n),this.set(r,a,n,i),this}let y=Math.sqrt((f-v)*(f-v)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-v)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Th=class extends Zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mr=class extends Th{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vl=class extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wh=class extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],u=a[n+0],d=a[n+1],m=a[n+2],v=a[n+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(s===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=v;return}if(h!==v||o!==u||l!==d||c!==m){let g=1-s,f=o*u+l*d+c*m+h*v,p=f>=0?1:-1,y=1-f*f;if(y>2**-52){let E=Math.sqrt(y),B=Math.atan2(E,f*p);g=Math.sin(g*B)/E,s=Math.sin(s*B)/E}let R=s*p;if(o=o*g+u*R,l=l*g+d*R,c=c*g+m*R,h=h*g+v*R,g===1-s){let E=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=E,l*=E,c*=E,h*=E}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],u=a[n+1],d=a[n+2],m=a[n+3];return e[t]=s*m+c*h+o*d-l*u,e[t+1]=o*m+c*u+l*h-s*d,e[t+2]=l*m+c*d+s*u-o*h,e[t+3]=c*m-s*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),u=o(i/2),d=o(r/2),m=o(a/2);switch(n){case"XYZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"YXZ":this._x=u*c*h+l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"ZXY":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h-u*d*m;break;case"ZYX":this._x=u*c*h-l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h+u*d*m;break;case"YZX":this._x=u*c*h+l*d*m,this._y=l*d*h+u*c*m,this._z=l*c*m-u*d*h,this._w=l*c*h-u*d*m;break;case"XZY":this._x=u*c*h-l*d*m,this._y=l*d*h-u*c*m,this._z=l*c*m+u*d*h,this._w=l*c*h+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=i+s+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(a-l)*d,this._z=(n-r)*d}else if(i>s&&i>h){let d=2*Math.sqrt(1+i-s-h);this._w=(c-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+l)/d}else if(s>h){let d=2*Math.sqrt(1+s-i-h);this._w=(a-l)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+h-i-s);this._w=(n-r)/d,this._x=(a+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<2**-52?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,n=this._w,s=n*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=n,this._x=i,this._y=r,this._z=a,this;let o=1-s*s;if(o<=2**-52){let d=1-t;return this._w=d*n+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,s),h=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=n*h+this._w*u,this._x=i*h+this._x*u,this._y=r*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class Gl{constructor(t=0,i=0,r=0){Gl.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(bo.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(bo.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),u=2*(n*r-s*i);return this.x=i+l*c+s*u-o*h,this.y=r+l*h+o*c-n*u,this.z=a+l*u+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Kn.copy(this).projectOnVector(t),this.sub(Kn)}reflect(t){return this.sub(Kn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Ht(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kn=new U,bo=new ei,mi=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,_i):_i.fromBufferAttribute(a,n),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox===void 0?(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Va.subVectors(this.max,ha),Ar.subVectors(e.a,ha),Rr.subVectors(e.b,ha),Cr.subVectors(e.c,ha),Hi.subVectors(Rr,Ar),Vi.subVectors(Cr,Rr),nr.subVectors(Ar,Cr);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-nr.z,nr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,nr.z,0,-nr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-nr.y,nr.x,0];return!Jn(t,Ar,Rr,Cr,Va)||(t=[1,0,0,0,1,0,0,0,1],!Jn(t,Ar,Rr,Cr,Va))?!1:(Ga.crossVectors(Hi,Vi),t=[Ga.x,Ga.y,Ga.z],Jn(t,Ar,Rr,Cr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new U,new U,new U,new U,new U,new U,new U,new U],_i=new U,Ha=new mi,Ar=new U,Rr=new U,Cr=new U,Hi=new U,Vi=new U,nr=new U,ha=new U,Va=new U,Ga=new U,sr=new U;function Jn(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){sr.fromArray(e,n);let o=a.x*Math.abs(sr.x)+a.y*Math.abs(sr.y)+a.z*Math.abs(sr.z),l=t.dot(sr),c=i.dot(sr),h=r.dot(sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ah=new mi,ua=new U,Zn=new U,li=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t===void 0?Ah.setFromPoints(e).getCenter(i):i.copy(t);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);let t=ua.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Zn)),this.expandByPoint(ua.copy(e.center).sub(Zn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new U,$n=new U,ja=new U,Gi=new U,Qn=new U,Wa=new U,es=new U,xr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$n.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub($n);let a=e.distanceTo(t)*.5,n=-this.direction.dot(ja),s=Gi.dot(this.direction),o=-Gi.dot(ja),l=Gi.lengthSq(),c=Math.abs(1-n*n),h,u,d,m;if(c>0)if(h=n*o-s,u=n*s-o,m=a*c,h>=0)if(u>=-m)if(u<=m){let v=1/c;h*=v,u*=v,d=h*(h+n*u+2*s)+u*(n*h+u+2*o)+l}else u=a,h=Math.max(0,-(n*u+s)),d=-h*h+u*(u+2*o)+l;else u=-a,h=Math.max(0,-(n*u+s)),d=-h*h+u*(u+2*o)+l;else u<=-m?(h=Math.max(0,-(-n*a+s)),u=h>0?-a:Math.min(Math.max(-a,-o),a),d=-h*h+u*(u+2*o)+l):u<=m?(h=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(h=Math.max(0,-(n*a+s)),u=h>0?a:Math.min(Math.max(-a,-o),a),d=-h*h+u*(u+2*o)+l);else u=n>0?-a:a,h=Math.max(0,-(n*u+s)),d=-h*h+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($n).addScaledVector(ja,u),d}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),c>=0?(a=(e.min.y-u.y)*c,n=(e.max.y-u.y)*c):(a=(e.max.y-u.y)*c,n=(e.min.y-u.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,a){Qn.subVectors(t,e),Wa.subVectors(i,e),es.crossVectors(Qn,Wa);let n=this.direction.dot(es),s;if(n>0){if(r)return null;s=1}else if(n<0)s=-1,n=-n;else return null;Gi.subVectors(this.origin,e);let o=s*this.direction.dot(Wa.crossVectors(Gi,Wa));if(o<0)return null;let l=s*this.direction.dot(Qn.cross(Gi));if(l<0||o+l>n)return null;let c=-s*Gi.dot(es);return c<0?null:this.at(c/n,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class Ss{constructor(t,i,r,a,n,s,o,l,c,h,u,d,m,v,g,f){Ss.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,u,d,m,v,g,f)}set(t,i,r,a,n,s,o,l,c,h,u,d,m,v,g,f){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=v,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ss().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){let i=this.elements,r=t.elements,a=1/Lr.setFromMatrixColumn(t,0).length(),n=1/Lr.setFromMatrixColumn(t,1).length(),s=1/Lr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*h,m=s*u,v=o*h,g=o*u;i[0]=l*h,i[4]=-l*u,i[8]=c,i[1]=m+v*c,i[5]=d-g*c,i[9]=-o*l,i[2]=g-d*c,i[6]=v+m*c,i[10]=s*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,v=c*h,g=c*u;i[0]=d+g*o,i[4]=v*o-m,i[8]=s*c,i[1]=s*u,i[5]=s*h,i[9]=-o,i[2]=m*o-v,i[6]=g+d*o,i[10]=s*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,v=c*h,g=c*u;i[0]=d-g*o,i[4]=-s*u,i[8]=v+m*o,i[1]=m+v*o,i[5]=s*h,i[9]=g-d*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let d=s*h,m=s*u,v=o*h,g=o*u;i[0]=l*h,i[4]=v*c-m,i[8]=d*c+g,i[1]=l*u,i[5]=g*c+d,i[9]=m*c-v,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let d=s*l,m=s*c,v=o*l,g=o*c;i[0]=l*h,i[4]=g-d*u,i[8]=v*u+m,i[1]=u,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=m*u+v,i[10]=d-g*u}else if(t.order==="XZY"){let d=s*l,m=s*c,v=o*l,g=o*c;i[0]=l*h,i[4]=-u,i[8]=c*h,i[1]=d*u+g,i[5]=s*h,i[9]=m*u-v,i[2]=v*u-m,i[6]=o*h,i[10]=g*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ch)}lookAt(t,i,r){let a=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ji.crossVectors(r,ri),ji.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ji.crossVectors(r,ri)),ji.normalize(),Xa.crossVectors(ri,ji),a[0]=ji.x,a[4]=Xa.x,a[8]=ri.x,a[1]=ji.y,a[5]=Xa.y,a[9]=ri.y,a[2]=ji.z,a[6]=Xa.z,a[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],u=r[5],d=r[9],m=r[13],v=r[2],g=r[6],f=r[10],p=r[14],y=r[3],R=r[7],E=r[11],B=r[15],L=a[0],P=a[4],O=a[8],b=a[12],M=a[1],F=a[5],H=a[9],k=a[13],q=a[2],z=a[6],ie=a[10],de=a[14],j=a[3],ae=a[7],ne=a[11],Ee=a[15];return n[0]=s*L+o*M+l*q+c*j,n[4]=s*P+o*F+l*z+c*ae,n[8]=s*O+o*H+l*ie+c*ne,n[12]=s*b+o*k+l*de+c*Ee,n[1]=h*L+u*M+d*q+m*j,n[5]=h*P+u*F+d*z+m*ae,n[9]=h*O+u*H+d*ie+m*ne,n[13]=h*b+u*k+d*de+m*Ee,n[2]=v*L+g*M+f*q+p*j,n[6]=v*P+g*F+f*z+p*ae,n[10]=v*O+g*H+f*ie+p*ne,n[14]=v*b+g*k+f*de+p*Ee,n[3]=y*L+R*M+E*q+B*j,n[7]=y*P+R*F+E*z+B*ae,n[11]=y*O+R*H+E*ie+B*ne,n[15]=y*b+R*k+E*de+B*Ee,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],v=t[3],g=t[7],f=t[11],p=t[15];return v*(+n*l*u-a*c*u-n*o*d+r*c*d+a*o*m-r*l*m)+g*(+i*l*m-i*c*d+n*s*d-a*s*m+a*c*h-n*l*h)+f*(+i*c*u-i*o*m-n*s*u+r*s*m+n*o*h-r*c*h)+p*(-a*o*h-i*l*u+i*o*d+a*s*u-r*s*d+r*l*h)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],v=t[12],g=t[13],f=t[14],p=t[15],y=u*f*c-g*d*c+g*l*m-o*f*m-u*l*p+o*d*p,R=v*d*c-h*f*c-v*l*m+s*f*m+h*l*p-s*d*p,E=h*g*c-v*u*c+v*o*m-s*g*m-h*o*p+s*u*p,B=v*u*l-h*g*l-v*o*d+s*g*d+h*o*f-s*u*f,L=i*y+r*R+a*E+n*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/L;return t[0]=y*P,t[1]=(g*d*n-u*f*n-g*a*m+r*f*m+u*a*p-r*d*p)*P,t[2]=(o*f*n-g*l*n+g*a*c-r*f*c-o*a*p+r*l*p)*P,t[3]=(u*l*n-o*d*n-u*a*c+r*d*c+o*a*m-r*l*m)*P,t[4]=R*P,t[5]=(h*f*n-v*d*n+v*a*m-i*f*m-h*a*p+i*d*p)*P,t[6]=(v*l*n-s*f*n-v*a*c+i*f*c+s*a*p-i*l*p)*P,t[7]=(s*d*n-h*l*n+h*a*c-i*d*c-s*a*m+i*l*m)*P,t[8]=E*P,t[9]=(v*u*n-h*g*n-v*r*m+i*g*m+h*r*p-i*u*p)*P,t[10]=(s*g*n-v*o*n+v*r*c-i*g*c-s*r*p+i*o*p)*P,t[11]=(h*o*n-s*u*n-h*r*c+i*u*c+s*r*m-i*o*m)*P,t[12]=B*P,t[13]=(h*g*a-v*u*a+v*r*d-i*g*d-h*r*f+i*u*f)*P,t[14]=(v*o*a-s*g*a-v*r*l+i*g*l+s*r*f-i*o*f)*P,t[15]=(s*u*a-h*o*a+h*r*l-i*u*l-s*r*d+i*o*d)*P,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,u=o+o,d=n*c,m=n*h,v=n*u,g=s*h,f=s*u,p=o*u,y=l*c,R=l*h,E=l*u,B=r.x,L=r.y,P=r.z;return a[0]=(1-(g+p))*B,a[1]=(m+E)*B,a[2]=(v-R)*B,a[3]=0,a[4]=(m-E)*L,a[5]=(1-(d+p))*L,a[6]=(f+y)*L,a[7]=0,a[8]=(v+R)*P,a[9]=(f-y)*P,a[10]=(1-(d+g))*P,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements,n=Lr.set(a[0],a[1],a[2]).length(),s=Lr.set(a[4],a[5],a[6]).length(),o=Lr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),t.x=a[12],t.y=a[13],t.z=a[14],vi.copy(this);let l=1/n,c=1/s,h=1/o;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=c,vi.elements[5]*=c,vi.elements[6]*=c,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,i.setFromRotationMatrix(vi),r.x=n,r.y=s,r.z=o,this}makePerspective(t,i,r,a,n,s,o=Sa){let l=this.elements,c=2*n/(i-t),h=2*n/(r-a),u=(i+t)/(i-t),d=(r+a)/(r-a),m,v;if(o===2e3)m=-(s+n)/(s-n),v=-2*s*n/(s-n);else if(o===2001)m=-s/(s-n),v=-s*n/(s-n);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Sa){let l=this.elements,c=1/(i-t),h=1/(r-a),u=1/(s-n),d=(i+t)*c,m=(r+a)*h,v,g;if(o===2e3)v=(s+n)*u,g=-2*u;else if(o===2001)v=n*u,g=-1*u;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Lr=new U,vi=new Ve,Rh=new U(0,0,0),Ch=new U(1,1,1),ji=new U,Xa=new U,ri=new U,Mo=new Ve,So=new ei,di=class jl{constructor(t=0,i=0,r=0,a=jl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],u=a[2],d=a[6],m=a[10];switch(i){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Mo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mo,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return So.setFromEuler(this),this.setFromQuaternion(So,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Lh=0,Eo=new U,Pr=new ei,Ii=new Ve,qa=new U,da=new U,Ph=new U,Nh=new ei,To=new U(1,0,0),wo=new U(0,1,0),Ao=new U(0,0,1),Ro={type:"added"},Ih={type:"removed"},Nr={type:"childadded",child:null},ts={type:"childremoved",child:null},wt=class bn extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();let t=new U,i=new di,r=new ei,a=new U(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ve},normalMatrix:{value:new rt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(wo,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,i){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(wo,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?qa.copy(t):qa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(da,qa,this.up):Ii.lookAt(qa,da,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Pr.setFromRotationMatrix(Ii),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ro),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ih),ts.child=t,this.dispatchEvent(ts),ts.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ro),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,Ph),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++){let n=i[r];(n.matrixWorldAutoUpdate===!0||t===!0)&&n.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let a=this.children;for(let n=0,s=a.length;n<s;n++){let o=a[n];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),d=s(t.skeletons),m=s(t.animations),v=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}};wt.DEFAULT_UP=new U(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new U,Ui=new U,is=new U,Di=new U,Ir=new U,Ur=new U,Co=new U,rs=new U,as=new U,ns=new U,Ya=class Gr{constructor(t=new U,i=new U,r=new U){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),xi.subVectors(t,i),a.cross(xi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){xi.subVectors(a,i),Ui.subVectors(r,i),is.subVectors(t,i);let s=xi.dot(xi),o=xi.dot(Ui),l=xi.dot(is),c=Ui.dot(Ui),h=Ui.dot(is),u=s*c-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,v=(s*h-o*l)*d;return n.set(1-m-v,v,m)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Di.x),l.addScaledVector(s,Di.y),l.addScaledVector(o,Di.z),l)}static isFrontFacing(t,i,r,a){return xi.subVectors(r,i),Ui.subVectors(t,i),xi.cross(Ui).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),xi.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Gr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Gr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Gr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Ir.subVectors(a,r),Ur.subVectors(n,r),rs.subVectors(t,r);let l=Ir.dot(rs),c=Ur.dot(rs);if(l<=0&&c<=0)return i.copy(r);as.subVectors(t,a);let h=Ir.dot(as),u=Ur.dot(as);if(h>=0&&u<=h)return i.copy(a);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),i.copy(r).addScaledVector(Ir,s);ns.subVectors(t,n);let m=Ir.dot(ns),v=Ur.dot(ns);if(v>=0&&m<=v)return i.copy(n);let g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),i.copy(r).addScaledVector(Ur,o);let f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return Co.subVectors(n,a),o=(u-h)/(u-h+(m-v)),i.copy(a).addScaledVector(Co,o);let p=1/(f+g+d);return s=g*p,o=d*p,i.copy(r).addScaledVector(Ir,s).addScaledVector(Ur,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function ss(e,t,i){return i<0&&(i+=1),i>1&&--i,i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=Ps(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=ss(n,a,e+1/3),this.g=ss(n,a,e),this.b=ss(n,a,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Ct){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=Wl[e.toLowerCase()];return i===void 0?console.warn("THREE.Color: Unknown color "+e):this.setHex(i,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return ht.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Ht(Xt.r*255,0,255))*65536+Math.round(Ht(Xt.g*255,0,255))*256+Math.round(Ht(Xt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,r=Xt.g,a=Xt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ct){ht.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,r=Xt.b;return e==="srgb"?`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Ka);let i=ya(Wi.h,Ka.h,t),r=ya(Wi.s,Ka.s,t),a=ya(Wi.l,Ka.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Pe;Pe.NAMES=Wl;var Uh=0,Gt=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pi=class extends Gt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pt=new U,Ja=new De,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=i,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),a=_t(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Xl=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ql=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ut=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},Dh=0,ci=new Ve,os=new wt,Dr=new U,ai=new mi,pa=new mi,kt=new U,Vt=class Yl extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kl(t)?ql:Xl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new rt().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return os.lookAt(t),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){let i=[];for(let r=0,a=t.length;r<a;r++){let n=t[r];i.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new ut(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];ai.setFromBufferAttribute(n),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(ai.min,pa.min),ai.expandByPoint(kt),kt.addVectors(ai.max,pa.max),ai.expandByPoint(kt)):(ai.expandByPoint(pa.min),ai.expandByPoint(pa.max))}ai.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)kt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(kt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(t,c),kt.add(Dr)),a=Math.max(a,r.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*r.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<r.count;O++)o[O]=new U,l[O]=new U;let c=new U,h=new U,u=new U,d=new De,m=new De,v=new De,g=new U,f=new U;function p(O,b,M){c.fromBufferAttribute(r,O),h.fromBufferAttribute(r,b),u.fromBufferAttribute(r,M),d.fromBufferAttribute(n,O),m.fromBufferAttribute(n,b),v.fromBufferAttribute(n,M),h.sub(c),u.sub(c),m.sub(d),v.sub(d);let F=1/(m.x*v.y-v.x*m.y);isFinite(F)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(F),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(F),o[O].add(g),o[b].add(g),o[M].add(g),l[O].add(f),l[b].add(f),l[M].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let O=0,b=y.length;O<b;++O){let M=y[O],F=M.start,H=M.count;for(let k=F,q=F+H;k<q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let R=new U,E=new U,B=new U,L=new U;function P(O){B.fromBufferAttribute(a,O),L.copy(B);let b=o[O];R.copy(b),R.sub(B.multiplyScalar(B.dot(b))).normalize(),E.crossVectors(L,b);let M=E.dot(l[O])<0?-1:1;s.setXYZW(O,R.x,R.y,R.z,M)}for(let O=0,b=y.length;O<b;++O){let M=y[O],F=M.start,H=M.count;for(let k=F,q=F+H;k<q;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new It(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);let a=new U,n=new U,s=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){let v=t.getX(d+0),g=t.getX(d+1),f=t.getX(d+2);a.fromBufferAttribute(i,v),n.fromBufferAttribute(i,g),s.fromBufferAttribute(i,f),h.subVectors(s,n),u.subVectors(a,n),h.cross(u),o.fromBufferAttribute(r,v),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,f),o.add(h),l.add(h),c.add(h),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=i.count;d<m;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),h.subVectors(s,n),u.subVectors(a,n),h.cross(u),r.setXYZ(d+0,h.x,h.y,h.z),r.setXYZ(d+1,h.x,h.y,h.z),r.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)kt.fromBufferAttribute(t,i),kt.normalize(),t.setXYZ(i,kt.x,kt.y,kt.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,v=0;for(let g=0,f=l.length;g<f;g++){m=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let p=0;p<h;p++)d[v++]=c[m++]}return new It(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Yl,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,r);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone(i));let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],u=n[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lo=new Ve,or=new xr,Za=new li,Po=new U,Or=new U,Fr=new U,kr=new U,ls=new U,$a=new U,Qa=new De,en=new De,tn=new De,No=new U,Io=new U,Uo=new U,rn=new U,an=new U,Tt=class extends wt{constructor(e=new Vt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){$a.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(ls.fromBufferAttribute(h,e),n?$a.addScaledVector(ls,c):$a.addScaledVector(ls.sub(t),c))}t.add($a)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(a),or.copy(e.ray).recast(e.near),!(Za.containsPoint(or.origin)===!1&&(or.intersectSphere(Za,Po)===null||or.origin.distanceToSquared(Po)>(e.far-e.near)**2))&&(Lo.copy(a).invert(),or.copy(e.ray).applyMatrix4(Lo),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let m=0,v=u.length;m<v;m++){let g=u[m],f=n[g.materialIndex],p=Math.max(g.start,d.start),y=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let R=p,E=y;R<E;R+=3){let B=s.getX(R),L=s.getX(R+1),P=s.getX(R+2);r=nn(this,f,e,i,l,c,h,B,L,P),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(s.count,d.start+d.count);for(let g=m,f=v;g<f;g+=3){let p=s.getX(g),y=s.getX(g+1),R=s.getX(g+2);r=nn(this,n,e,i,l,c,h,p,y,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let m=0,v=u.length;m<v;m++){let g=u[m],f=n[g.materialIndex],p=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let R=p,E=y;R<E;R+=3){let B=R,L=R+1,P=R+2;r=nn(this,f,e,i,l,c,h,B,L,P),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,f=v;g<f;g+=3){let p=g,y=g+1,R=g+2;r=nn(this,n,e,i,l,c,h,p,y,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Oh(e,t,i,r,a,n,s,o){let l;if(l=t.side===1?r.intersectTriangle(s,n,a,!0,o):r.intersectTriangle(a,n,s,t.side===0,o),l===null)return null;an.copy(o),an.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(an);return c<i.near||c>i.far?null:{distance:c,point:an.clone(),object:e}}function nn(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,Or),e.getVertexPosition(l,Fr),e.getVertexPosition(c,kr);let h=Oh(e,t,i,r,Or,Fr,kr,rn);if(h){a&&(Qa.fromBufferAttribute(a,o),en.fromBufferAttribute(a,l),tn.fromBufferAttribute(a,c),h.uv=Ya.getInterpolation(rn,Or,Fr,kr,Qa,en,tn,new De)),n&&(Qa.fromBufferAttribute(n,o),en.fromBufferAttribute(n,l),tn.fromBufferAttribute(n,c),h.uv1=Ya.getInterpolation(rn,Or,Fr,kr,Qa,en,tn,new De)),s&&(No.fromBufferAttribute(s,o),Io.fromBufferAttribute(s,l),Uo.fromBufferAttribute(s,c),h.normal=Ya.getInterpolation(rn,Or,Fr,kr,No,Io,Uo,new U),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Ya.getNormal(Or,Fr,kr,u.normal),h.face=u}return h}var Pn=class Kl extends Vt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=0,m=0;v("z","y","x",-1,-1,r,i,t,s,n,0),v("z","y","x",1,-1,r,i,-t,s,n,1),v("x","z","y",1,1,t,r,i,a,s,2),v("x","z","y",1,-1,t,r,-i,a,s,3),v("x","y","z",1,-1,t,i,r,a,n,4),v("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function v(g,f,p,y,R,E,B,L,P,O,b){let M=E/P,F=B/O,H=E/2,k=B/2,q=L/2,z=P+1,ie=O+1,de=0,j=0,ae=new U;for(let ne=0;ne<ie;ne++){let Ee=ne*F-k;for(let fe=0;fe<z;fe++)ae[g]=(fe*M-H)*y,ae[f]=Ee*R,ae[p]=q,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[f]=0,ae[p]=L>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(fe/P),u.push(1-ne/O),de+=1}for(let ne=0;ne<O;ne++)for(let Ee=0;Ee<P;Ee++){let fe=d+Ee+z*ne,G=d+Ee+z*(ne+1),J=d+(Ee+1)+z*(ne+1),ee=d+(Ee+1)+z*ne;l.push(fe,G,ee),l.push(G,J,ee),j+=6}o.addGroup(m,j,b),m+=j,d+=de}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zr(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}}return t}function Zt(e){let t={};for(let i=0;i<e.length;i++){let r=Zr(e[i]);for(let a in r)t[a]=r[a]}return t}function Fh(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Jl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ht.workingColorSpace}var kh={clone:Zr,merge:Zt},Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ji=class extends Gt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Zl=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Sa}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new U,Do=new De,Oo=new De,Nt=class extends Zl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Oo),t.subVectors(Oo,Do)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Br=-90,zr=1,Hh=class extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nt(Br,zr,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Br,zr,e,t);a.layers=this.layers,this.add(a);let n=new Nt(Br,zr,e,t);n.layers=this.layers,this.add(n);let s=new Nt(Br,zr,e,t);s.layers=this.layers,this.add(s);let o=new Nt(Br,zr,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Br,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},$l=class extends Qt{constructor(e,t,i,r,a,n,s,o,l,c){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vh=class extends mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $l(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps===void 0?!1:t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?ui:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pn(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let n=new Tt(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=ui),new Hh(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},cs=new U,Gh=new U,jh=new rt,yi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=cs.subVectors(i,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(cs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||jh.getNormalMatrix(e),r=this.coplanarPoint(cs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},lr=new li,sn=new U,Is=class{constructor(e=new yi,t=new yi,i=new yi,r=new yi,a=new yi,n=new yi){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sa){let i=this.planes,r=e.elements,a=r[0],n=r[1],s=r[2],o=r[3],l=r[4],c=r[5],h=r[6],u=r[7],d=r[8],m=r[9],v=r[10],g=r[11],f=r[12],p=r[13],y=r[14],R=r[15];if(i[0].setComponents(o-a,u-l,g-d,R-f).normalize(),i[1].setComponents(o+a,u+l,g+d,R+f).normalize(),i[2].setComponents(o+n,u+c,g+m,R+p).normalize(),i[3].setComponents(o-n,u-c,g-m,R-p).normalize(),i[4].setComponents(o-s,u-h,g-v,R-y).normalize(),t===2e3)i[5].setComponents(o+s,u+h,g+v,R+y).normalize();else if(t===2001)i[5].setComponents(s,h,v,y).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(sn.x=r.normal.x>0?e.max.x:e.min.x,sn.y=r.normal.y>0?e.max.y:e.min.y,sn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ql(){let e=null,t=!1,i=null,r=null;function a(n,s){i(n,s),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&i!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Wh(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(c instanceof Uint16Array)m=o.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(e.bindBuffer(c,o),u.count===-1&&d.length===0&&e.bufferSubData(c,0,h),d.length!==0){for(let m=0,v=d.length;m<v;m++){let g=d[m];e.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}u.count!==-1&&(e.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var Nn=class ec extends Vt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,u=t/o,d=i/l,m=[],v=[],g=[],f=[];for(let p=0;p<h;p++){let y=p*d-s;for(let R=0;R<c;R++){let E=R*u-n;v.push(E,-y,0),g.push(0,0,1),f.push(R/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let R=y+c*p,E=y+c*(p+1),B=y+1+c*(p+1),L=y+1+c*p;m.push(R,E,L),m.push(E,B,L)}this.setIndex(m),this.setAttribute("position",new ut(v,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.width,t.height,t.widthSegments,t.heightSegments)}},et={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},be={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},wi={basic:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Pe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Zt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Zt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Pe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Zt([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Zt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Zt([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Zt([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Zt([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Zt([be.lights,be.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};wi.physical={uniforms:Zt([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var on={r:0,b:0,g:0},cr=new di,Xh=new Ve;function qh(e,t,i,r,a,n,s){let o=new Pe(0),l=n===!0?0:1,c,h,u=null,d=0,m=null;function v(y){let R=y.isScene===!0?y.background:null;return R&&R.isTexture&&(R=(y.backgroundBlurriness>0?i:t).get(R)),R}function g(y){let R=!1,E=v(y);E===null?p(o,l):E&&E.isColor&&(p(E,1),R=!0);let B=e.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,s):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(e.autoClear||R)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function f(y,R){let E=v(R);E&&(E.isCubeTexture||E.mapping===306)?(h===void 0&&(h=new Tt(new Pn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Zr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),cr.copy(R.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xh.makeRotationFromEuler(cr)),h.material.toneMapped=ht.getTransfer(E.colorSpace)!==Tn,(u!==E||d!==E.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Tt(new Nn(2,2),new Ji({name:"BackgroundMaterial",uniforms:Zr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ht.getTransfer(E.colorSpace)!==Tn,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,m=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,R){y.getRGB(on,Jl(e)),r.buffers.color.setClear(on.r,on.g,on.b,R,s)}return{getClearColor:function(){return o},setClearColor:function(y,R=1){o.set(y),l=R,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:g,addToRenderList:f}}function Yh(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function o(M,F,H,k,q){let z=!1,ie=u(k,H,F);n!==ie&&(n=ie,c(n.object)),z=m(M,k,H,q),z&&v(M,k,H,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,E(M,F,H,k),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function u(M,F,H){let k=H.wireframe===!0,q=r[M.id];q===void 0&&(q={},r[M.id]=q);let z=q[F.id];z===void 0&&(z={},q[F.id]=z);let ie=z[k];return ie===void 0&&(ie=d(l()),z[k]=ie),ie}function d(M){let F=[],H=[],k=[];for(let q=0;q<i;q++)F[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,F,H,k){let q=n.attributes,z=F.attributes,ie=0,de=H.getAttributes();for(let j in de)if(de[j].location>=0){let ae=q[j],ne=z[j];if(ne===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ae===void 0||ae.attribute!==ne||ne&&ae.data!==ne.data)return!0;ie++}return n.attributesNum!==ie||n.index!==k}function v(M,F,H,k){let q={},z=F.attributes,ie=0,de=H.getAttributes();for(let j in de)if(de[j].location>=0){let ae=z[j];ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));let ne={};ne.attribute=ae,ae&&ae.data&&(ne.data=ae.data),q[j]=ne,ie++}n.attributes=q,n.attributesNum=ie,n.index=k}function g(){let M=n.newAttributes;for(let F=0,H=M.length;F<H;F++)M[F]=0}function f(M){p(M,0)}function p(M,F){let H=n.newAttributes,k=n.enabledAttributes,q=n.attributeDivisors;H[M]=1,k[M]===0&&(e.enableVertexAttribArray(M),k[M]=1),q[M]!==F&&(e.vertexAttribDivisor(M,F),q[M]=F)}function y(){let M=n.newAttributes,F=n.enabledAttributes;for(let H=0,k=F.length;H<k;H++)F[H]!==M[H]&&(e.disableVertexAttribArray(H),F[H]=0)}function R(M,F,H,k,q,z,ie){ie===!0?e.vertexAttribIPointer(M,F,H,q,z):e.vertexAttribPointer(M,F,H,k,q,z)}function E(M,F,H,k){g();let q=k.attributes,z=H.getAttributes(),ie=F.defaultAttributeValues;for(let de in z){let j=z[de];if(j.location>=0){let ae=q[de];if(ae===void 0&&(de==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),de==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){let ne=ae.normalized,Ee=ae.itemSize,fe=t.get(ae);if(fe===void 0)continue;let G=fe.buffer,J=fe.type,ee=fe.bytesPerElement,oe=J===e.INT||J===e.UNSIGNED_INT||ae.gpuType===1013;if(ae.isInterleavedBufferAttribute){let ue=ae.data,ke=ue.stride,X=ae.offset;if(ue.isInstancedInterleavedBuffer){for(let Qe=0;Qe<j.locationSize;Qe++)p(j.location+Qe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Qe=0;Qe<j.locationSize;Qe++)f(j.location+Qe);e.bindBuffer(e.ARRAY_BUFFER,G);for(let Qe=0;Qe<j.locationSize;Qe++)R(j.location+Qe,Ee/j.locationSize,J,ne,ke*ee,(X+Ee/j.locationSize*Qe)*ee,oe)}else{if(ae.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)p(j.location+ue,ae.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ue=0;ue<j.locationSize;ue++)f(j.location+ue);e.bindBuffer(e.ARRAY_BUFFER,G);for(let ue=0;ue<j.locationSize;ue++)R(j.location+ue,Ee/j.locationSize,J,ne,Ee*ee,Ee/j.locationSize*ue*ee,oe)}}else if(ie!==void 0){let ne=ie[de];if(ne!==void 0)switch(ne.length){case 2:e.vertexAttrib2fv(j.location,ne);break;case 3:e.vertexAttrib3fv(j.location,ne);break;case 4:e.vertexAttrib4fv(j.location,ne);break;default:e.vertexAttrib1fv(j.location,ne)}}}}y()}function B(){O();for(let M in r){let F=r[M];for(let H in F){let k=F[H];for(let q in k)h(k[q].object),delete k[q];delete F[H]}delete r[M]}}function L(M){if(r[M.id]===void 0)return;let F=r[M.id];for(let H in F){let k=F[H];for(let q in k)h(k[q].object),delete k[q];delete F[H]}delete r[M.id]}function P(M){for(let F in r){let H=r[F];if(H[M.id]===void 0)continue;let k=H[M.id];for(let q in k)h(k[q].object),delete k[q];delete H[M.id]}}function O(){b(),s=!0,n!==a&&(n=a,c(n.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:O,resetDefaultState:b,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:f,disableUnusedAttributes:y}}function Kh(e,t,i){let r;function a(c){r=c}function n(c,h){e.drawArrays(r,c,h),i.update(h,r,1)}function s(c,h,u){u!==0&&(e.drawArraysInstanced(r,c,h,u),i.update(h,r,u))}function o(c,h,u){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u;m++)this.render(c[m],h[m]);else{d.multiDrawArraysWEBGL(r,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];i.update(m,r,1)}}function l(c,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,h,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g];for(let g=0;g<d.length;g++)i.update(v,r,d[g])}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jh(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(L){return!(L!==1023&&r.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let P=L===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==1009&&r.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==1015&&!P)}function l(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision===void 0?"highp":i.precision,h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=i.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),p=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),R=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,B=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:R,vertexTextures:E,maxSamples:B}}function Zh(e){let t=this,i=null,r=0,a=!1,n=!1,s=new yi,o=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||r!==0||a;return a=d,r=u.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){i=h(u,d,0)},this.setState=function(u,d,m){let v=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,p=e.get(u);if(!a||v===null||v.length===0||n&&!f)n?h(null):c();else{let y=n?0:r,R=y*4,E=p.clippingState||null;l.value=E,E=h(v,d,R,m);for(let B=0;B!==R;++B)E[B]=i[B];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(u,d,m,v){let g=u===null?0:u.length,f=null;if(g!==0){if(f=l.value,v!==!0||f===null){let p=m+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let R=0,E=m;R!==g;++R,E+=4)s.copy(u[R]).applyMatrix4(y,o),s.normal.toArray(f,E),f[E+3]=s.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function $h(e){let t=new WeakMap;function i(s,o){return o===303?s.mapping=301:o===304&&(s.mapping=302),s}function r(s){if(s&&s.isTexture){let o=s.mapping;if(o===303||o===304)if(t.has(s)){let l=t.get(s).texture;return i(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=new Vh(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),i(c.texture,s.mapping)}else return null}}return s}function a(s){let o=s.target;o.removeEventListener("dispose",a);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function n(){t=new WeakMap}return{get:r,dispose:n}}var Ta=class extends Zl{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qr=4,Fo=[.125,.215,.35,.446,.526,.582],dr=20,hs=new Ta,ko=new Pe,us=null,ds=0,ps=0,ms=!1,ur=(1+Math.sqrt(5))/2,Hr=1/ur,Bo=[new U(-ur,Hr,0),new U(ur,Hr,0),new U(-Hr,0,ur),new U(Hr,0,ur),new U(0,ur,-Hr),new U(0,ur,Hr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){us=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(us,ds,ps),this._renderer.xr.enabled=ms,e.scissorTest=!1,ln(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),us=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Pl,format:Ma,colorSpace:qt,depthBuffer:!1},r=Ho(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qh(a)),this._blurMaterial=eu(a,e,t)}return r}_compileMaterial(e){let t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,i,r){let a=new Nt(90,1,t,i),n=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,c=o.toneMapping;o.getClearColor(ko),o.toneMapping=0,o.autoClear=!1;let h=new pi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Tt(new Pn,h),d=!1,m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,d=!0):(h.color.copy(ko),d=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(a.up.set(0,n[v],0),a.lookAt(s[v],0,0)):g===1?(a.up.set(0,0,n[v]),a.lookAt(0,s[v],0)):(a.up.set(0,n[v],0),a.lookAt(0,0,s[v]));let f=this._cubeSize;ln(r,g*f,v>2?f:0,f,f),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=c,o.autoClear=l,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vo());let a=r?this._cubemapMaterial:this._equirectMaterial,n=new Tt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;ln(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,hs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Bo[(r-a-1)%Bo.length];this._blur(e,a-1,a,n,s)}t.autoClear=i}_blur(e,t,i,r,a){let n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,s){let o=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new Tt(this._lodPlanes[r],l),h=l.uniforms,u=this._sizeLods[i]-1,d=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*dr-1),m=a/d,v=isFinite(a)?1+Math.floor(3*m):dr;v>dr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${dr}`);let g=[],f=0;for(let R=0;R<dr;++R){let E=R/m,B=Math.exp(-E*E/2);g.push(B),R===0?f+=B:R<v&&(f+=2*B)}for(let R=0;R<g.length;R++)g[R]=g[R]/f;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=g,h.latitudinal.value=n==="latitudinal",s&&(h.poleAxis.value=s);let{_lodMax:p}=this;h.dTheta.value=d,h.mipInt.value=p-i;let y=this._sizeLods[r];ln(t,3*y*(r>p-qr?r-p+qr:0),4*(this._cubeSize-y),3*y,2*y),o.setRenderTarget(t),o.render(c,hs)}};function Qh(e){let t=[],i=[],r=[],a=e,n=e-qr+1+Fo.length;for(let s=0;s<n;s++){let o=2**a;i.push(o);let l=1/o;s>e-qr?l=Fo[s-e+qr-1]:s===0&&(l=0),r.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=new Float32Array(108),v=new Float32Array(72),g=new Float32Array(36);for(let p=0;p<6;p++){let y=p%3*2/3-1,R=p>2?0:-1,E=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];m.set(E,18*p),v.set(d,12*p);let B=[p,p,p,p,p,p];g.set(B,6*p)}let f=new Vt;f.setAttribute("position",new It(m,3)),f.setAttribute("uv",new It(v,2)),f.setAttribute("faceIndex",new It(g,1)),t.push(f),a>qr&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Ho(e,t,i){let r=new mr(e,t,i);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ln(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function eu(e,t,i){let r=new Float32Array(dr),a=new U(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vo(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Go(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Us(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tu(e){let t=new WeakMap,i=null;function r(o){if(o&&o.isTexture){let l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h){let u=t.get(o),d=u===void 0?0:u.texture.pmremVersion;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return i===null&&(i=new zo(e)),u=c?i.fromEquirectangular(o,u):i.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&a(m)?(i===null&&(i=new zo(e)),u=c?i.fromEquirectangular(o):i.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function a(o){let l=0;for(let c=0;c<6;c++)o[c]!==void 0&&l++;return l===6}function n(o){let l=o.target;l.removeEventListener("dispose",n);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:s}}function iu(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a;switch(r){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(r)}return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function ru(e,t,i,r){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let v in d.attributes)t.remove(d.attributes[v]);for(let v in d.morphAttributes){let g=d.morphAttributes[v];for(let f=0,p=g.length;f<p;f++)t.remove(g[f])}d.removeEventListener("dispose",s),delete a[d.id];let m=n.get(d);m&&(t.remove(m),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let v in d)t.update(d[v],e.ARRAY_BUFFER);let m=u.morphAttributes;for(let v in m){let g=m[v];for(let f=0,p=g.length;f<p;f++)t.update(g[f],e.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,v=u.attributes.position,g=0;if(m!==null){let y=m.array;g=m.version;for(let R=0,E=y.length;R<E;R+=3){let B=y[R+0],L=y[R+1],P=y[R+2];d.push(B,L,L,P,P,B)}}else if(v!==void 0){let y=v.array;g=v.version;for(let R=0,E=y.length/3-1;R<E;R+=3){let B=R+0,L=R+1,P=R+2;d.push(B,L,L,P,P,B)}}else return;let f=new(kl(d)?ql:Xl)(d,1);f.version=g;let p=n.get(u);p&&t.remove(p),n.set(u,f)}function h(u){let d=n.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function au(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,m){e.drawElements(r,m,n,d*s),i.update(m,r,1)}function c(d,m,v){v!==0&&(e.drawElementsInstanced(r,m,n,d*s,v),i.update(m,r,v))}function h(d,m,v){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<v;f++)this.render(d[f]/s,m[f]);else{g.multiDrawElementsWEBGL(r,m,0,n,d,0,v);let f=0;for(let p=0;p<v;p++)f+=m[p];i.update(f,r,1)}}function u(d,m,v,g){if(v===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/s,m[p],g[p]);else{f.multiDrawElementsInstancedWEBGL(r,m,0,n,d,0,g,0,v);let p=0;for(let y=0;y<v;y++)p+=m[y];for(let y=0;y<g.length;y++)i.update(p,r,g[y])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function nu(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=n/3*o;break;case e.LINES:i.lines+=n/2*o;break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function su(e,t,i){let r=new WeakMap,a=new Mt;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h===void 0?0:h.length,d=r.get(o);if(d===void 0||d.count!==u){let b=function(){P.dispose(),r.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],R=0;m===!0&&(R=1),v===!0&&(R=2),g===!0&&(R=3);let E=o.attributes.position.count*R,B=1;E>t.maxTextureSize&&(B=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let L=new Float32Array(E*B*4*u),P=new Vl(L,E,B,u);P.type=Ln,P.needsUpdate=!0;let O=R*4;for(let M=0;M<u;M++){let F=f[M],H=p[M],k=y[M],q=E*B*4*M;for(let z=0;z<F.count;z++){let ie=z*O;m===!0&&(a.fromBufferAttribute(F,z),L[q+ie+0]=a.x,L[q+ie+1]=a.y,L[q+ie+2]=a.z,L[q+ie+3]=0),v===!0&&(a.fromBufferAttribute(H,z),L[q+ie+4]=a.x,L[q+ie+5]=a.y,L[q+ie+6]=a.z,L[q+ie+7]=0),g===!0&&(a.fromBufferAttribute(k,z),L[q+ie+8]=a.x,L[q+ie+9]=a.y,L[q+ie+10]=a.z,L[q+ie+11]=k.itemSize===4?a.w:1)}}d={count:u,texture:P,size:new De(E,B)},r.set(o,d),o.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function ou(e,t,i,r){let a=new WeakMap;function n(l){let c=r.render.frame,h=l.geometry,u=t.get(l,h);if(a.get(u)!==c&&(t.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return u}function s(){a=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:n,dispose:s}}var tc=class extends Qt{constructor(e,t,i,r,a,n,s,o,l,c){if(c=c===void 0?Il:c,c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===1026&&(i=Ll),i===void 0&&c===1027&&(i=Nl),super(null,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?si:s,this.minFilter=o===void 0?si:o,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ic=new Qt,rc=new tc(1,1);rc.compareFunction=515;var ac=new Vl,nc=new wh,sc=new $l,jo=[],Wo=[],Xo=new Float32Array(16),qo=new Float32Array(9),Yo=new Float32Array(4);function $r(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=jo[a];if(n===void 0&&(n=new Float32Array(a),jo[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Ut(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Dt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function In(e,t){let i=Wo[t];i===void 0&&(i=new Int32Array(t),Wo[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function lu(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function cu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2fv(this.addr,t),Dt(i,t)}}function hu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ut(i,t))return;e.uniform3fv(this.addr,t),Dt(i,t)}}function uu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4fv(this.addr,t),Dt(i,t)}}function du(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Dt(i,t)}else{if(Ut(i,r))return;Yo.set(r),e.uniformMatrix2fv(this.addr,!1,Yo),Dt(i,r)}}function pu(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Dt(i,t)}else{if(Ut(i,r))return;qo.set(r),e.uniformMatrix3fv(this.addr,!1,qo),Dt(i,r)}}function mu(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Dt(i,t)}else{if(Ut(i,r))return;Xo.set(r),e.uniformMatrix4fv(this.addr,!1,Xo),Dt(i,r)}}function fu(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function gu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2iv(this.addr,t),Dt(i,t)}}function _u(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ut(i,t))return;e.uniform3iv(this.addr,t),Dt(i,t)}}function vu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4iv(this.addr,t),Dt(i,t)}}function xu(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function yu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2uiv(this.addr,t),Dt(i,t)}}function bu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ut(i,t))return;e.uniform3uiv(this.addr,t),Dt(i,t)}}function Mu(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4uiv(this.addr,t),Dt(i,t)}}function Su(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n=this.type===e.SAMPLER_2D_SHADOW?rc:ic;i.setTexture2D(t||n,a)}function Eu(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||nc,a)}function Tu(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||sc,a)}function wu(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||ac,a)}function Au(e){switch(e){case 5126:return lu;case 35664:return cu;case 35665:return hu;case 35666:return uu;case 35674:return du;case 35675:return pu;case 35676:return mu;case 5124:case 35670:return fu;case 35667:case 35671:return gu;case 35668:case 35672:return _u;case 35669:case 35673:return vu;case 5125:return xu;case 36294:return yu;case 36295:return bu;case 36296:return Mu;case 35678:case 36198:case 36298:case 36306:case 35682:return Su;case 35679:case 36299:case 36307:return Eu;case 35680:case 36300:case 36308:case 36293:return Tu;case 36289:case 36303:case 36311:case 36292:return wu}}function Ru(e,t){e.uniform1fv(this.addr,t)}function Cu(e,t){let i=$r(t,this.size,2);e.uniform2fv(this.addr,i)}function Lu(e,t){let i=$r(t,this.size,3);e.uniform3fv(this.addr,i)}function Pu(e,t){let i=$r(t,this.size,4);e.uniform4fv(this.addr,i)}function Nu(e,t){let i=$r(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Iu(e,t){let i=$r(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Uu(e,t){let i=$r(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Du(e,t){e.uniform1iv(this.addr,t)}function Ou(e,t){e.uniform2iv(this.addr,t)}function Fu(e,t){e.uniform3iv(this.addr,t)}function ku(e,t){e.uniform4iv(this.addr,t)}function Bu(e,t){e.uniform1uiv(this.addr,t)}function zu(e,t){e.uniform2uiv(this.addr,t)}function Hu(e,t){e.uniform3uiv(this.addr,t)}function Vu(e,t){e.uniform4uiv(this.addr,t)}function Gu(e,t,i){let r=this.cache,a=t.length,n=In(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));for(let s=0;s!==a;++s)i.setTexture2D(t[s]||ic,n[s])}function ju(e,t,i){let r=this.cache,a=t.length,n=In(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||nc,n[s])}function Wu(e,t,i){let r=this.cache,a=t.length,n=In(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||sc,n[s])}function Xu(e,t,i){let r=this.cache,a=t.length,n=In(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||ac,n[s])}function qu(e){switch(e){case 5126:return Ru;case 35664:return Cu;case 35665:return Lu;case 35666:return Pu;case 35674:return Nu;case 35675:return Iu;case 35676:return Uu;case 5124:case 35670:return Du;case 35667:case 35671:return Ou;case 35668:case 35672:return Fu;case 35669:case 35673:return ku;case 5125:return Bu;case 36294:return zu;case 36295:return Hu;case 36296:return Vu;case 35678:case 36198:case 36298:case 36306:case 35682:return Gu;case 35679:case 36299:case 36307:return ju;case 35680:case 36300:case 36308:case 36293:return Wu;case 36289:case 36303:case 36311:case 36292:return Xu}}var Yu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Au(t.type)}},Ku=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qu(t.type)}},Ju=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},fs=/(\w+)(\])?(\[|\.)?/g;function Ko(e,t){e.seq.push(t),e.map[t.id]=t}function Zu(e,t,i){let r=e.name,a=r.length;for(fs.lastIndex=0;;){let n=fs.exec(r),s=fs.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o|=0),c===void 0||c==="["&&s+2===a){Ko(i,c===void 0?new Yu(o,e,t):new Ku(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new Ju(o),Ko(i,h)),i=h}}}var Mn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r);Zu(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Jo(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var $u=37297,Qu=0;function ed(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function td(e){let t=ht.getPrimaries(ht.workingColorSpace),i=ht.getPrimaries(e),r;switch(t===i?r="":t==="p3"&&i==="rec709"?r="LinearDisplayP3ToLinearSRGB":t==="rec709"&&i==="p3"&&(r="LinearSRGBToLinearDisplayP3"),e){case qt:case Ls:return[r,"LinearTransferOETF"];case Ct:case Ul:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[r,"LinearTransferOETF"]}}function Zo(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+ed(e.getShaderSource(t),s)}else return a}function id(e,t){let i=td(t);return`vec4 ${e}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function rd(e,t){let i;switch(t){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="OptimizedCineon";break;case 4:i="ACESFilmic";break;case 6:i="AgX";break;case 7:i="Neutral";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function ad(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function nd(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function sd(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function va(e){return e!==""}function $o(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var od=/^[ \t]*#include +<([\w\d./]+)>/gm;function Es(e){return e.replace(od,cd)}var ld=new Map;function cd(e,t){let i=et[t];if(i===void 0){let r=ld.get(t);if(r!==void 0)i=et[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw Error("Can not resolve #include <"+t+">")}return Es(i)}var hd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(e){return e.replace(hd,ud)}function ud(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function tl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dd(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function pd(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function md(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===302&&(t="ENVMAP_MODE_REFRACTION"),t}function fd(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function gd(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**i,112)),texelHeight:r,maxMip:i}}function _d(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=dd(i),c=pd(i),h=md(i),u=fd(i),d=gd(i),m=ad(i),v=nd(n),g=a.createProgram(),f,p,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(va).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(va).join(`
`),p.length>0&&(p+=`
`)):(f=[tl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),p=[tl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping===0?"":"#define TONE_MAPPING",i.toneMapping===0?"":et.tonemapping_pars_fragment,i.toneMapping===0?"":rd("toneMapping",i.toneMapping),i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,id("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(va).join(`
`)),s=Es(s),s=$o(s,i),s=Qo(s,i),o=Es(o),o=$o(o,i),o=Qo(o,i),s=el(s),o=el(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=y+f+s,E=y+p+o,B=Jo(a,a.VERTEX_SHADER,R),L=Jo(a,a.FRAGMENT_SHADER,E);a.attachShader(g,B),a.attachShader(g,L),i.index0AttributeName===void 0?i.morphTargets===!0&&a.bindAttribLocation(g,0,"position"):a.bindAttribLocation(g,0,i.index0AttributeName),a.linkProgram(g);function P(F){if(e.debug.checkShaderErrors){let H=a.getProgramInfoLog(g).trim(),k=a.getShaderInfoLog(B).trim(),q=a.getShaderInfoLog(L).trim(),z=!0,ie=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,B,L);else{let de=Zo(a,B,"vertex"),j=Zo(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+de+`
`+j)}else H===""?(k===""||q==="")&&(ie=!1):console.warn("THREE.WebGLProgram: Program Info Log:",H);ie&&(F.diagnostics={runnable:z,programLog:H,vertexShader:{log:k,prefix:f},fragmentShader:{log:q,prefix:p}})}a.deleteShader(B),a.deleteShader(L),O=new Mn(a,g),b=sd(a,g)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(g,$u)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Qu++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=B,this.fragmentShader=L,this}var vd=0,xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yd(e),t.set(e,i)),i}},yd=class{constructor(e){this.id=vd++,this.code=e,this.usedTimes=0}};function bd(e,t,i,r,a,n,s){let o=new Ns,l=new xd,c=new Set,h=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures,m=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,M,F,H,k){let q=H.fog,z=k.geometry,ie=b.isMeshStandardMaterial?H.environment:null,de=(b.isMeshStandardMaterial?i:t).get(b.envMap||ie),j=de&&de.mapping===306?de.image.height:null,ae=v[b.type];b.precision!==null&&(m=a.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ee=ne===void 0?0:ne.length,fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let G,J,ee,oe;if(ae){let qe=wi[ae];G=qe.vertexShader,J=qe.fragmentShader}else G=b.vertexShader,J=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),oe=l.getFragmentShaderID(b);let ue=e.getRenderTarget(),ke=k.isInstancedMesh===!0,X=k.isBatchedMesh===!0,Qe=!!b.map,He=!!b.matcap,lt=!!de,Ge=!!b.aoMap,ct=!!b.lightMap,Be=!!b.bumpMap,Je=!!b.normalMap,At=!!b.displacementMap,yt=!!b.emissiveMap,I=!!b.metalnessMap,T=!!b.roughnessMap,K=b.anisotropy>0,se=b.clearcoat>0,pe=b.dispersion>0,ce=b.iridescence>0,Oe=b.sheen>0,me=b.transmission>0,ye=K&&!!b.anisotropyMap,Xe=se&&!!b.clearcoatMap,Me=se&&!!b.clearcoatNormalMap,Fe=se&&!!b.clearcoatRoughnessMap,nt=ce&&!!b.iridescenceMap,Ce=ce&&!!b.iridescenceThicknessMap,we=Oe&&!!b.sheenColorMap,$e=Oe&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,N=!!b.specularColorMap,he=!!b.specularIntensityMap,D=me&&!!b.transmissionMap,te=me&&!!b.thicknessMap,Q=!!b.gradientMap,xe=!!b.alphaMap,ge=b.alphaTest>0,ft=!!b.alphaHash,dt=!!b.extensions,ot=0;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ot=e.toneMapping);let gt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:J,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:X,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:qt,alphaToCoverage:!!b.alphaToCoverage,map:Qe,matcap:He,envMap:lt,envMapMode:lt&&de.mapping,envMapCubeUVHeight:j,aoMap:Ge,lightMap:ct,bumpMap:Be,normalMap:Je,displacementMap:d&&At,emissiveMap:yt,normalMapObjectSpace:Je&&b.normalMapType===1,normalMapTangentSpace:Je&&b.normalMapType===0,metalnessMap:I,roughnessMap:T,anisotropy:K,anisotropyMap:ye,clearcoat:se,clearcoatMap:Xe,clearcoatNormalMap:Me,clearcoatRoughnessMap:Fe,dispersion:pe,iridescence:ce,iridescenceMap:nt,iridescenceThicknessMap:Ce,sheen:Oe,sheenColorMap:we,sheenRoughnessMap:$e,specularMap:Ze,specularColorMap:N,specularIntensityMap:he,transmission:me,transmissionMap:D,thicknessMap:te,gradientMap:Q,opaque:b.transparent===!1&&b.blending===1&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:ge,alphaHash:ft,combine:b.combine,mapUv:Qe&&g(b.map.channel),aoMapUv:Ge&&g(b.aoMap.channel),lightMapUv:ct&&g(b.lightMap.channel),bumpMapUv:Be&&g(b.bumpMap.channel),normalMapUv:Je&&g(b.normalMap.channel),displacementMapUv:At&&g(b.displacementMap.channel),emissiveMapUv:yt&&g(b.emissiveMap.channel),metalnessMapUv:I&&g(b.metalnessMap.channel),roughnessMapUv:T&&g(b.roughnessMap.channel),anisotropyMapUv:ye&&g(b.anisotropyMap.channel),clearcoatMapUv:Xe&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:$e&&g(b.sheenRoughnessMap.channel),specularMapUv:Ze&&g(b.specularMap.channel),specularColorMapUv:N&&g(b.specularColorMap.channel),specularIntensityMapUv:he&&g(b.specularIntensityMap.channel),transmissionMapUv:D&&g(b.transmissionMap.channel),thicknessMapUv:te&&g(b.thicknessMap.channel),alphaMapUv:xe&&g(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Qe||xe),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:ot,useLegacyLights:e._useLegacyLights,decodeVideoTexture:Qe&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)==="srgb",premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:dt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:dt&&b.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)M.push(F),M.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(y(M,b),R(M,b),M.push(e.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function R(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),b.push(o.mask)}function E(b){let M=v[b.type],F;if(M){let H=wi[M];F=kh.clone(H.uniforms)}else F=b.uniforms;return F}function B(b,M){let F;for(let H=0,k=h.length;H<k;H++){let q=h[H];if(q.cacheKey===M){F=q,++F.usedTimes;break}}return F===void 0&&(F=new _d(e,M,b,n),h.push(F)),F}function L(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function P(b){l.remove(b)}function O(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:E,acquireProgram:B,releaseProgram:L,releaseShaderCache:P,programs:h,dispose:O}}function Md(){let e=new WeakMap;function t(n){let s=e.get(n);return s===void 0&&(s={},e.set(n,s)),s}function i(n){e.delete(n)}function r(n,s,o){e.get(n)[s]=o}function a(){e=new WeakMap}return{get:t,remove:i,update:r,dispose:a}}function Sd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function rl(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u,d,m,v,g,f){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:g,group:f},e[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=f),t++,p}function o(u,d,m,v,g,f){let p=s(u,d,m,v,g,f);m.transmission>0?r.push(p):m.transparent===!0?a.push(p):i.push(p)}function l(u,d,m,v,g,f){let p=s(u,d,m,v,g,f);m.transmission>0?r.unshift(p):m.transparent===!0?a.unshift(p):i.unshift(p)}function c(u,d){i.length>1&&i.sort(u||Sd),r.length>1&&r.sort(d||il),a.length>1&&a.sort(d||il)}function h(){for(let u=t,d=e.length;u<d;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:o,unshift:l,finish:h,sort:c}}function Ed(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new rl,e.set(r,[s])):a>=n.length?(s=new rl,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Td(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new U,color:new Pe};break;case"SpotLight":i={position:new U,direction:new U,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new U,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new U,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=i,i}}}function wd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Ad=0;function Rd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Cd(e){let t=new Td,i=wd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new U);let a=new U,n=new Ve,s=new Ve;function o(c,h){let u=0,d=0,m=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let v=0,g=0,f=0,p=0,y=0,R=0,E=0,B=0,L=0,P=0,O=0;c.sort(Rd);let b=h===!0?Math.PI:1;for(let F=0,H=c.length;F<H;F++){let k=c[F],q=k.color,z=k.intensity,ie=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)u+=q.r*z*b,d+=q.g*z*b,m+=q.b*z*b;else if(k.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(k.sh.coefficients[j],z);O++}else if(k.isDirectionalLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*b),k.castShadow){let ae=k.shadow,ne=i.get(k);ne.shadowBias=ae.bias,ne.shadowNormalBias=ae.normalBias,ne.shadowRadius=ae.radius,ne.shadowMapSize=ae.mapSize,r.directionalShadow[v]=ne,r.directionalShadowMap[v]=de,r.directionalShadowMatrix[v]=k.shadow.matrix,R++}r.directional[v]=j,v++}else if(k.isSpotLight){let j=t.get(k);j.position.setFromMatrixPosition(k.matrixWorld),j.color.copy(q).multiplyScalar(z*b),j.distance=ie,j.coneCos=Math.cos(k.angle),j.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),j.decay=k.decay,r.spot[f]=j;let ae=k.shadow;if(k.map&&(r.spotLightMap[L]=k.map,L++,ae.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[f]=ae.matrix,k.castShadow){let ne=i.get(k);ne.shadowBias=ae.bias,ne.shadowNormalBias=ae.normalBias,ne.shadowRadius=ae.radius,ne.shadowMapSize=ae.mapSize,r.spotShadow[f]=ne,r.spotShadowMap[f]=de,B++}f++}else if(k.isRectAreaLight){let j=t.get(k);j.color.copy(q).multiplyScalar(z),j.halfWidth.set(k.width*.5,0,0),j.halfHeight.set(0,k.height*.5,0),r.rectArea[p]=j,p++}else if(k.isPointLight){let j=t.get(k);if(j.color.copy(k.color).multiplyScalar(k.intensity*b),j.distance=k.distance,j.decay=k.decay,k.castShadow){let ae=k.shadow,ne=i.get(k);ne.shadowBias=ae.bias,ne.shadowNormalBias=ae.normalBias,ne.shadowRadius=ae.radius,ne.shadowMapSize=ae.mapSize,ne.shadowCameraNear=ae.camera.near,ne.shadowCameraFar=ae.camera.far,r.pointShadow[g]=ne,r.pointShadowMap[g]=de,r.pointShadowMatrix[g]=k.shadow.matrix,E++}r.point[g]=j,g++}else if(k.isHemisphereLight){let j=t.get(k);j.skyColor.copy(k.color).multiplyScalar(z*b),j.groundColor.copy(k.groundColor).multiplyScalar(z*b),r.hemi[y]=j,y++}}p>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=m;let M=r.hash;(M.directionalLength!==v||M.pointLength!==g||M.spotLength!==f||M.rectAreaLength!==p||M.hemiLength!==y||M.numDirectionalShadows!==R||M.numPointShadows!==E||M.numSpotShadows!==B||M.numSpotMaps!==L||M.numLightProbes!==O)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=p,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=B+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=O,M.directionalLength=v,M.pointLength=g,M.spotLength=f,M.rectAreaLength=p,M.hemiLength=y,M.numDirectionalShadows=R,M.numPointShadows=E,M.numSpotShadows=B,M.numSpotMaps=L,M.numLightProbes=O,r.version=Ad++)}function l(c,h){let u=0,d=0,m=0,v=0,g=0,f=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let R=c[p];if(R.isDirectionalLight){let E=r.directional[u];E.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(f),u++}else if(R.isSpotLight){let E=r.spot[m];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(f),m++}else if(R.isRectAreaLight){let E=r.rectArea[v];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(f),s.identity(),n.copy(R.matrixWorld),n.premultiply(f),s.extractRotation(n),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(R.isPointLight){let E=r.point[d];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(f),d++}else if(R.isHemisphereLight){let E=r.hemi[g];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:r}}function al(e){let t=new Cd(e),i=[],r=[];function a(h){c.camera=h,i.length=0,r.length=0}function n(h){i.push(h)}function s(h){r.push(h)}function o(h){t.setup(i,h)}function l(h){t.setupView(i,h)}let c={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function Ld(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new al(e),t.set(a,[o])):n>=s.length?(o=new al(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var Pd=class extends Gt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nd=class extends Gt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ud=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dd(e,t,i){let r=new Is,a=new De,n=new De,s=new Mt,o=new Pd({depthPacking:rh}),l=new Nd,c={},h=i.maxTextureSize,u={0:1,1:0,2:2},d=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Id,fragmentShader:Ud}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let v=new Vt;v.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Tt(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(L,P,O){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||L.length===0)return;let b=e.getRenderTarget(),M=e.getActiveCubeFace(),F=e.getActiveMipmapLevel(),H=e.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==3&&this.type===3,q=p===3&&this.type!==3;for(let z=0,ie=L.length;z<ie;z++){let de=L[z],j=de.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);let ae=j.getFrameExtents();if(a.multiply(ae),n.copy(j.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/ae.x),a.x=n.x*ae.x,j.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/ae.y),a.y=n.y*ae.y,j.mapSize.y=n.y)),j.map===null||k===!0||q===!0){let Ee=this.type===3?{}:{minFilter:si,magFilter:si};j.map!==null&&j.map.dispose(),j.map=new mr(a.x,a.y,Ee),j.map.texture.name=de.name+".shadowMap",j.camera.updateProjectionMatrix()}e.setRenderTarget(j.map),e.clear();let ne=j.getViewportCount();for(let Ee=0;Ee<ne;Ee++){let fe=j.getViewport(Ee);s.set(n.x*fe.x,n.y*fe.y,n.x*fe.z,n.y*fe.w),H.viewport(s),j.updateMatrices(de,Ee),r=j.getFrustum(),E(P,O,j.camera,de,this.type)}j.isPointLightShadow!==!0&&this.type===3&&y(j,O),j.needsUpdate=!1}p=this.type,f.needsUpdate=!1,e.setRenderTarget(b,M,F)};function y(L,P){let O=t.update(g);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new mr(a.x,a.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(P,null,O,d,g,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(P,null,O,m,g,null)}function R(L,P,O,b){let M=null,F=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)M=F;else if(M=O.isPointLight===!0?l:o,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let H=M.uuid,k=P.uuid,q=c[H];q===void 0&&(q={},c[H]=q);let z=q[k];z===void 0&&(z=M.clone(),q[k]=z,P.addEventListener("dispose",B)),M=z}if(M.visible=P.visible,M.wireframe=P.wireframe,b===3?M.side=P.shadowSide===null?P.side:P.shadowSide:M.side=P.shadowSide===null?u[P.side]:P.shadowSide,M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=e.properties.get(M);H.light=O}return M}function E(L,P,O,b,M){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===3)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);let H=t.update(L),k=L.material;if(Array.isArray(k)){let q=H.groups;for(let z=0,ie=q.length;z<ie;z++){let de=q[z],j=k[de.materialIndex];if(j&&j.visible){let ae=R(L,j,b,M);L.onBeforeShadow(e,L,P,O,H,ae,de),e.renderBufferDirect(O,null,H,ae,L,de),L.onAfterShadow(e,L,P,O,H,ae,de)}}}else if(k.visible){let q=R(L,k,b,M);L.onBeforeShadow(e,L,P,O,H,q,null),e.renderBufferDirect(O,null,H,q,L,null),L.onAfterShadow(e,L,P,O,H,q,null)}}let F=L.children;for(let H=0,k=F.length;H<k;H++)E(F[H],P,O,b,M)}function B(L){L.target.removeEventListener("dispose",B);for(let P in c){let O=c[P],b=L.target.uuid;b in O&&(O[b].dispose(),delete O[b])}}}function Od(e){function t(){let D=!1,te=new Mt,Q=null,xe=new Mt(0,0,0,0);return{setMask:function(ge){Q!==ge&&!D&&(e.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){D=ge},setClear:function(ge,ft,dt,ot,gt){gt===!0&&(ge*=ot,ft*=ot,dt*=ot),te.set(ge,ft,dt,ot),xe.equals(te)===!1&&(e.clearColor(ge,ft,dt,ot),xe.copy(te))},reset:function(){D=!1,Q=null,xe.set(-1,0,0,0)}}}function i(){let D=!1,te=null,Q=null,xe=null;return{setTest:function(ge){ge?oe(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(ge){te!==ge&&!D&&(e.depthMask(ge),te=ge)},setFunc:function(ge){if(Q!==ge){switch(ge){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Q=ge}},setLocked:function(ge){D=ge},setClear:function(ge){xe!==ge&&(e.clearDepth(ge),xe=ge)},reset:function(){D=!1,te=null,Q=null,xe=null}}}function r(){let D=!1,te=null,Q=null,xe=null,ge=null,ft=null,dt=null,ot=null,gt=null;return{setTest:function(qe){D||(qe?oe(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(qe){te!==qe&&!D&&(e.stencilMask(qe),te=qe)},setFunc:function(qe,vt,Ot){(Q!==qe||xe!==vt||ge!==Ot)&&(e.stencilFunc(qe,vt,Ot),Q=qe,xe=vt,ge=Ot)},setOp:function(qe,vt,Ot){(ft!==qe||dt!==vt||ot!==Ot)&&(e.stencilOp(qe,vt,Ot),ft=qe,dt=vt,ot=Ot)},setLocked:function(qe){D=qe},setClear:function(qe){gt!==qe&&(e.clearStencil(qe),gt=qe)},reset:function(){D=!1,te=null,Q=null,xe=null,ge=null,ft=null,dt=null,ot=null,gt=null}}}let a=new t,n=new i,s=new r,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],m=null,v=!1,g=null,f=null,p=null,y=null,R=null,E=null,B=null,L=new Pe(0,0,0),P=0,O=!1,b=null,M=null,F=null,H=null,k=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ie=0,de=e.getParameter(e.VERSION);de.indexOf("WebGL")===-1?de.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),z=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(de)[1]),z=ie>=1);let j=null,ae={},ne=e.getParameter(e.SCISSOR_BOX),Ee=e.getParameter(e.VIEWPORT),fe=new Mt().fromArray(ne),G=new Mt().fromArray(Ee);function J(D,te,Q,xe){let ge=new Uint8Array(4),ft=e.createTexture();e.bindTexture(D,ft),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let dt=0;dt<Q;dt++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,xe,0,e.RGBA,e.UNSIGNED_BYTE,ge):e.texImage2D(te+dt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return ft}let ee={};ee[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),ee[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ee[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),n.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),n.setFunc(3),Be(!1),Je(1),oe(e.CULL_FACE),Ge(0);function oe(D){c[D]!==!0&&(e.enable(D),c[D]=!0)}function ue(D){c[D]!==!1&&(e.disable(D),c[D]=!1)}function ke(D,te){return h[D]===te?!1:(e.bindFramebuffer(D,te),h[D]=te,D===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=te),D===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=te),!0)}function X(D,te){let Q=d,xe=!1;if(D){Q=u.get(te),Q===void 0&&(Q=[],u.set(te,Q));let ge=D.textures;if(Q.length!==ge.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let ft=0,dt=ge.length;ft<dt;ft++)Q[ft]=e.COLOR_ATTACHMENT0+ft;Q.length=ge.length,xe=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,xe=!0);xe&&e.drawBuffers(Q)}function Qe(D){return m===D?!1:(e.useProgram(D),m=D,!0)}let He={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};He[103]=e.MIN,He[104]=e.MAX;let lt={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function Ge(D,te,Q,xe,ge,ft,dt,ot,gt,qe){if(D===0){v===!0&&(ue(e.BLEND),v=!1);return}if(v===!1&&(oe(e.BLEND),v=!0),D!==5){if(D!==g||qe!==O){if((f!==100||R!==100)&&(e.blendEquation(e.FUNC_ADD),f=100,R=100),qe)switch(D){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,y=null,E=null,B=null,L.set(0,0,0),P=0,g=D,O=qe}return}ge||=te,ft||=Q,dt||=xe,(te!==f||ge!==R)&&(e.blendEquationSeparate(He[te],He[ge]),f=te,R=ge),(Q!==p||xe!==y||ft!==E||dt!==B)&&(e.blendFuncSeparate(lt[Q],lt[xe],lt[ft],lt[dt]),p=Q,y=xe,E=ft,B=dt),(ot.equals(L)===!1||gt!==P)&&(e.blendColor(ot.r,ot.g,ot.b,gt),L.copy(ot),P=gt),g=D,O=!1}function ct(D,te){D.side===2?ue(e.CULL_FACE):oe(e.CULL_FACE);let Q=D.side===1;te&&(Q=!Q),Be(Q),D.blending===1&&D.transparent===!1?Ge(0):Ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),n.setFunc(D.depthFunc),n.setTest(D.depthTest),n.setMask(D.depthWrite),a.setMask(D.colorWrite);let xe=D.stencilWrite;s.setTest(xe),xe&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){b!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),b=D)}function Je(D){D===0?ue(e.CULL_FACE):(oe(e.CULL_FACE),D!==M&&(D===1?e.cullFace(e.BACK):D===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),M=D}function At(D){D!==F&&(z&&e.lineWidth(D),F=D)}function yt(D,te,Q){D?(oe(e.POLYGON_OFFSET_FILL),(H!==te||k!==Q)&&(e.polygonOffset(te,Q),H=te,k=Q)):ue(e.POLYGON_OFFSET_FILL)}function I(D){D?oe(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function T(D){D===void 0&&(D=e.TEXTURE0+q-1),j!==D&&(e.activeTexture(D),j=D)}function K(D,te,Q){Q===void 0&&(Q=j===null?e.TEXTURE0+q-1:j);let xe=ae[Q];xe===void 0&&(xe={type:void 0,texture:void 0},ae[Q]=xe),(xe.type!==D||xe.texture!==te)&&(j!==Q&&(e.activeTexture(Q),j=Q),e.bindTexture(D,te||ee[D]),xe.type=D,xe.texture=te)}function se(){let D=ae[j];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{e.compressedTexImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{e.texSubImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{e.texSubImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{e.texStorage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{e.texStorage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{e.texImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{e.texImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){fe.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function $e(D){G.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Ze(D,te){let Q=l.get(te);Q===void 0&&(Q=new WeakMap,l.set(te,Q));let xe=Q.get(D);xe===void 0&&(xe=e.getUniformBlockIndex(te,D.name),Q.set(D,xe))}function N(D,te){let Q=l.get(te).get(D);o.get(te)!==Q&&(e.uniformBlockBinding(te,Q,D.__bindingPointIndex),o.set(te,Q))}function he(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},j=null,ae={},h={},u=new WeakMap,d=[],m=null,v=!1,g=null,f=null,p=null,y=null,R=null,E=null,B=null,L=new Pe(0,0,0),P=0,O=!1,b=null,M=null,F=null,H=null,k=null,fe.set(0,0,e.canvas.width,e.canvas.height),G.set(0,0,e.canvas.width,e.canvas.height),a.reset(),n.reset(),s.reset()}return{buffers:{color:a,depth:n,stencil:s},enable:oe,disable:ue,bindFramebuffer:ke,drawBuffers:X,useProgram:Qe,setBlending:Ge,setMaterial:ct,setFlipSided:Be,setCullFace:Je,setLineWidth:At,setPolygonOffset:yt,setScissorTest:I,activeTexture:T,bindTexture:K,unbindTexture:se,compressedTexImage2D:pe,compressedTexImage3D:ce,texImage2D:nt,texImage3D:Ce,updateUBOMapping:Ze,uniformBlockBinding:N,texStorage2D:Me,texStorage3D:Fe,texSubImage2D:Oe,texSubImage3D:me,compressedTexSubImage2D:ye,compressedTexSubImage3D:Xe,scissor:we,viewport:$e,reset:he}}function Fd(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return m?new OffscreenCanvas(I,T):Ea("canvas")}function g(I,T,K){let se=1,pe=yt(I);if((pe.width>K||pe.height>K)&&(se=K/Math.max(pe.width,pe.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ce=Math.floor(se*pe.width),Oe=Math.floor(se*pe.height);u===void 0&&(u=v(ce,Oe));let me=T?v(ce,Oe):u;return me.width=ce,me.height=Oe,me.getContext("2d").drawImage(I,0,0,ce,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Oe+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function f(I){return I.generateMipmaps&&I.minFilter!==1003&&I.minFilter!==1006}function p(I){e.generateMipmap(I)}function y(I,T,K,se,pe=!1){if(I!==null){if(e[I]!==void 0)return e[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=T;if(T===e.RED&&(K===e.FLOAT&&(ce=e.R32F),K===e.HALF_FLOAT&&(ce=e.R16F),K===e.UNSIGNED_BYTE&&(ce=e.R8)),T===e.RED_INTEGER&&(K===e.UNSIGNED_BYTE&&(ce=e.R8UI),K===e.UNSIGNED_SHORT&&(ce=e.R16UI),K===e.UNSIGNED_INT&&(ce=e.R32UI),K===e.BYTE&&(ce=e.R8I),K===e.SHORT&&(ce=e.R16I),K===e.INT&&(ce=e.R32I)),T===e.RG&&(K===e.FLOAT&&(ce=e.RG32F),K===e.HALF_FLOAT&&(ce=e.RG16F),K===e.UNSIGNED_BYTE&&(ce=e.RG8)),T===e.RG_INTEGER&&(K===e.UNSIGNED_BYTE&&(ce=e.RG8UI),K===e.UNSIGNED_SHORT&&(ce=e.RG16UI),K===e.UNSIGNED_INT&&(ce=e.RG32UI),K===e.BYTE&&(ce=e.RG8I),K===e.SHORT&&(ce=e.RG16I),K===e.INT&&(ce=e.RG32I)),T===e.RGB&&K===e.UNSIGNED_INT_5_9_9_9_REV&&(ce=e.RGB9_E5),T===e.RGBA){let Oe=pe?En:ht.getTransfer(se);K===e.FLOAT&&(ce=e.RGBA32F),K===e.HALF_FLOAT&&(ce=e.RGBA16F),K===e.UNSIGNED_BYTE&&(ce=Oe==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),K===e.UNSIGNED_SHORT_4_4_4_4&&(ce=e.RGBA4),K===e.UNSIGNED_SHORT_5_5_5_1&&(ce=e.RGB5_A1)}return(ce===e.R16F||ce===e.R32F||ce===e.RG16F||ce===e.RG32F||ce===e.RGBA16F||ce===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function R(I,T){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==1003&&I.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){let T=I.target;T.removeEventListener("dispose",E),L(T),T.isVideoTexture&&h.delete(T)}function B(I){let T=I.target;T.removeEventListener("dispose",B),O(T)}function L(I){let T=r.get(I);if(T.__webglInit===void 0)return;let K=I.source,se=d.get(K);if(se){let pe=se[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&P(I),Object.keys(se).length===0&&d.delete(K)}r.remove(I)}function P(I){let T=r.get(I);e.deleteTexture(T.__webglTexture);let K=I.source,se=d.get(K);delete se[T.__cacheKey],s.memory.textures--}function O(I){let T=r.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(T.__webglFramebuffer[se]))for(let pe=0;pe<T.__webglFramebuffer[se].length;pe++)e.deleteFramebuffer(T.__webglFramebuffer[se][pe]);else e.deleteFramebuffer(T.__webglFramebuffer[se]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[se])}else{if(Array.isArray(T.__webglFramebuffer))for(let se=0;se<T.__webglFramebuffer.length;se++)e.deleteFramebuffer(T.__webglFramebuffer[se]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let se=0;se<T.__webglColorRenderbuffer.length;se++)T.__webglColorRenderbuffer[se]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[se]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let K=I.textures;for(let se=0,pe=K.length;se<pe;se++){let ce=r.get(K[se]);ce.__webglTexture&&(e.deleteTexture(ce.__webglTexture),s.memory.textures--),r.remove(K[se])}r.remove(I)}let b=0;function M(){b=0}function F(){let I=b;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),b+=1,I}function H(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function k(I,T){let K=r.get(I);if(I.isVideoTexture&&Je(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){let se=I.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(K,I,T);return}}i.bindTexture(e.TEXTURE_2D,K.__webglTexture,e.TEXTURE0+T)}function q(I,T){let K=r.get(I);if(I.version>0&&K.__version!==I.version){fe(K,I,T);return}i.bindTexture(e.TEXTURE_2D_ARRAY,K.__webglTexture,e.TEXTURE0+T)}function z(I,T){let K=r.get(I);if(I.version>0&&K.__version!==I.version){fe(K,I,T);return}i.bindTexture(e.TEXTURE_3D,K.__webglTexture,e.TEXTURE0+T)}function ie(I,T){let K=r.get(I);if(I.version>0&&K.__version!==I.version){G(K,I,T);return}i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture,e.TEXTURE0+T)}let de={[Fi]:e.REPEAT,[ni]:e.CLAMP_TO_EDGE,[ba]:e.MIRRORED_REPEAT},j={[si]:e.NEAREST,[As]:e.NEAREST_MIPMAP_NEAREST,[Rs]:e.NEAREST_MIPMAP_LINEAR,[ui]:e.LINEAR,[Cs]:e.LINEAR_MIPMAP_NEAREST,[vr]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ne(I,T){if(T.type===1015&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===1006||T.magFilter===1007||T.magFilter===1005||T.magFilter===1008||T.minFilter===1006||T.minFilter===1007||T.minFilter===1005||T.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(I,e.TEXTURE_WRAP_S,de[T.wrapS]),e.texParameteri(I,e.TEXTURE_WRAP_T,de[T.wrapT]),(I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY)&&e.texParameteri(I,e.TEXTURE_WRAP_R,de[T.wrapR]),e.texParameteri(I,e.TEXTURE_MAG_FILTER,j[T.magFilter]),e.texParameteri(I,e.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(e.texParameteri(I,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(I,e.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===1003||T.minFilter!==1005&&T.minFilter!==1008||T.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");e.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(I,T){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));let se=T.source,pe=d.get(se);pe===void 0&&(pe={},d.set(se,pe));let ce=H(T);if(ce!==I.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,K=!0),pe[ce].usedTimes++;let Oe=pe[I.__cacheKey];Oe!==void 0&&(pe[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&P(T)),I.__cacheKey=ce,I.__webglTexture=pe[ce].texture}return K}function fe(I,T,K){let se=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=e.TEXTURE_3D);let pe=Ee(I,T),ce=T.source;i.bindTexture(se,I.__webglTexture,e.TEXTURE0+K);let Oe=r.get(ce);if(ce.version!==Oe.__version||pe===!0){i.activeTexture(e.TEXTURE0+K);let me=ht.getPrimaries(ht.workingColorSpace),ye=T.colorSpace===""?null:ht.getPrimaries(T.colorSpace),Xe=T.colorSpace===""||me===ye?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Me=g(T.image,!1,a.maxTextureSize);Me=At(T,Me);let Fe=n.convert(T.format,T.colorSpace),nt=n.convert(T.type),Ce=y(T.internalFormat,Fe,nt,T.colorSpace,T.isVideoTexture);ne(se,T);let we,$e=T.mipmaps,Ze=T.isVideoTexture!==!0,N=Oe.__version===void 0||pe===!0,he=ce.dataReady,D=R(T,Me);if(T.isDepthTexture)Ce=e.DEPTH_COMPONENT16,T.type===1015?Ce=e.DEPTH_COMPONENT32F:T.type===1014?Ce=e.DEPTH_COMPONENT24:T.type===1020&&(Ce=e.DEPTH24_STENCIL8),N&&(Ze?i.texStorage2D(e.TEXTURE_2D,1,Ce,Me.width,Me.height):i.texImage2D(e.TEXTURE_2D,0,Ce,Me.width,Me.height,0,Fe,nt,null));else if(T.isDataTexture)if($e.length>0){Ze&&N&&i.texStorage2D(e.TEXTURE_2D,D,Ce,$e[0].width,$e[0].height);for(let te=0,Q=$e.length;te<Q;te++)we=$e[te],Ze?he&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,we.width,we.height,Fe,nt,we.data):i.texImage2D(e.TEXTURE_2D,te,Ce,we.width,we.height,0,Fe,nt,we.data);T.generateMipmaps=!1}else Ze?(N&&i.texStorage2D(e.TEXTURE_2D,D,Ce,Me.width,Me.height),he&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,nt,Me.data)):i.texImage2D(e.TEXTURE_2D,0,Ce,Me.width,Me.height,0,Fe,nt,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&N&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,Ce,$e[0].width,$e[0].height,Me.depth);for(let te=0,Q=$e.length;te<Q;te++)we=$e[te],T.format===1023?Ze?he&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,Me.depth,Fe,nt,we.data):i.texImage3D(e.TEXTURE_2D_ARRAY,te,Ce,we.width,we.height,Me.depth,0,Fe,nt,we.data):Fe===null?console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?he&&i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,we.width,we.height,Me.depth,Fe,we.data,0,0):i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,te,Ce,we.width,we.height,Me.depth,0,we.data,0,0)}else{Ze&&N&&i.texStorage2D(e.TEXTURE_2D,D,Ce,$e[0].width,$e[0].height);for(let te=0,Q=$e.length;te<Q;te++)we=$e[te],T.format===1023?Ze?he&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,we.width,we.height,Fe,nt,we.data):i.texImage2D(e.TEXTURE_2D,te,Ce,we.width,we.height,0,Fe,nt,we.data):Fe===null?console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?he&&i.compressedTexSubImage2D(e.TEXTURE_2D,te,0,0,we.width,we.height,Fe,we.data):i.compressedTexImage2D(e.TEXTURE_2D,te,Ce,we.width,we.height,0,we.data)}else if(T.isDataArrayTexture)Ze?(N&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,Ce,Me.width,Me.height,Me.depth),he&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,nt,Me.data)):i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ce,Me.width,Me.height,Me.depth,0,Fe,nt,Me.data);else if(T.isData3DTexture)Ze?(N&&i.texStorage3D(e.TEXTURE_3D,D,Ce,Me.width,Me.height,Me.depth),he&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,nt,Me.data)):i.texImage3D(e.TEXTURE_3D,0,Ce,Me.width,Me.height,Me.depth,0,Fe,nt,Me.data);else if(T.isFramebufferTexture){if(N)if(Ze)i.texStorage2D(e.TEXTURE_2D,D,Ce,Me.width,Me.height);else{let te=Me.width,Q=Me.height;for(let xe=0;xe<D;xe++)i.texImage2D(e.TEXTURE_2D,xe,Ce,te,Q,0,Fe,nt,null),te>>=1,Q>>=1}}else if($e.length>0){if(Ze&&N){let te=yt($e[0]);i.texStorage2D(e.TEXTURE_2D,D,Ce,te.width,te.height)}for(let te=0,Q=$e.length;te<Q;te++)we=$e[te],Ze?he&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,Fe,nt,we):i.texImage2D(e.TEXTURE_2D,te,Ce,Fe,nt,we);T.generateMipmaps=!1}else if(Ze){if(N){let te=yt(Me);i.texStorage2D(e.TEXTURE_2D,D,Ce,te.width,te.height)}he&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Fe,nt,Me)}else i.texImage2D(e.TEXTURE_2D,0,Ce,Fe,nt,Me);f(T)&&p(se),Oe.__version=ce.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function G(I,T,K){if(T.image.length!==6)return;let se=Ee(I,T),pe=T.source;i.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+K);let ce=r.get(pe);if(pe.version!==ce.__version||se===!0){i.activeTexture(e.TEXTURE0+K);let Oe=ht.getPrimaries(ht.workingColorSpace),me=T.colorSpace===""?null:ht.getPrimaries(T.colorSpace),ye=T.colorSpace===""||Oe===me?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let Q=0;Q<6;Q++)!Xe&&!Me?Fe[Q]=g(T.image[Q],!0,a.maxCubemapSize):Fe[Q]=Me?T.image[Q].image:T.image[Q],Fe[Q]=At(T,Fe[Q]);let nt=Fe[0],Ce=n.convert(T.format,T.colorSpace),we=n.convert(T.type),$e=y(T.internalFormat,Ce,we,T.colorSpace),Ze=T.isVideoTexture!==!0,N=ce.__version===void 0||se===!0,he=pe.dataReady,D=R(T,nt);ne(e.TEXTURE_CUBE_MAP,T);let te;if(Xe){Ze&&N&&i.texStorage2D(e.TEXTURE_CUBE_MAP,D,$e,nt.width,nt.height);for(let Q=0;Q<6;Q++){te=Fe[Q].mipmaps;for(let xe=0;xe<te.length;xe++){let ge=te[xe];T.format===1023?Ze?he&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,ge.width,ge.height,Ce,we,ge.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,$e,ge.width,ge.height,0,Ce,we,ge.data):Ce===null?console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?he&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,ge.width,ge.height,Ce,ge.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,$e,ge.width,ge.height,0,ge.data)}}}else{if(te=T.mipmaps,Ze&&N){te.length>0&&D++;let Q=yt(Fe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,D,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Me){Ze?he&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe[Q].width,Fe[Q].height,Ce,we,Fe[Q].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Fe[Q].width,Fe[Q].height,0,Ce,we,Fe[Q].data);for(let xe=0;xe<te.length;xe++){let ge=te[xe].image[Q].image;Ze?he&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,ge.width,ge.height,Ce,we,ge.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,$e,ge.width,ge.height,0,Ce,we,ge.data)}}else{Ze?he&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,we,Fe[Q]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Ce,we,Fe[Q]);for(let xe=0;xe<te.length;xe++){let ge=te[xe];Ze?he&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Ce,we,ge.image[Q]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,$e,Ce,we,ge.image[Q])}}}f(T)&&p(e.TEXTURE_CUBE_MAP),ce.__version=pe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function J(I,T,K,se,pe,ce){let Oe=n.convert(K.format,K.colorSpace),me=n.convert(K.type),ye=y(K.internalFormat,Oe,me,K.colorSpace);if(!r.get(T).__hasExternalTextures){let Xe=Math.max(1,T.width>>ce),Me=Math.max(1,T.height>>ce);pe===e.TEXTURE_3D||pe===e.TEXTURE_2D_ARRAY?i.texImage3D(pe,ce,ye,Xe,Me,T.depth,0,Oe,me,null):i.texImage2D(pe,ce,ye,Xe,Me,0,Oe,me,null)}i.bindFramebuffer(e.FRAMEBUFFER,I),Be(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,pe,r.get(K).__webglTexture,0,ct(T)):(pe===e.TEXTURE_2D||pe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,se,pe,r.get(K).__webglTexture,ce),i.bindFramebuffer(e.FRAMEBUFFER,null)}function ee(I,T,K){if(e.bindRenderbuffer(e.RENDERBUFFER,I),T.depthBuffer&&!T.stencilBuffer){let se=e.DEPTH_COMPONENT24;if(K||Be(T)){let pe=T.depthTexture;pe&&pe.isDepthTexture&&(pe.type===1015?se=e.DEPTH_COMPONENT32F:pe.type===1014&&(se=e.DEPTH_COMPONENT24));let ce=ct(T);Be(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce,se,T.width,T.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,se,T.width,T.height)}else e.renderbufferStorage(e.RENDERBUFFER,se,T.width,T.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,I)}else if(T.depthBuffer&&T.stencilBuffer){let se=ct(T);K&&Be(T)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,se,e.DEPTH24_STENCIL8,T.width,T.height):Be(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,se,e.DEPTH24_STENCIL8,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,I)}else{let se=T.textures;for(let pe=0;pe<se.length;pe++){let ce=se[pe],Oe=n.convert(ce.format,ce.colorSpace),me=n.convert(ce.type),ye=y(ce.internalFormat,Oe,me,ce.colorSpace),Xe=ct(T);K&&Be(T)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe,ye,T.width,T.height):Be(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xe,ye,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,ye,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function oe(I,T){if(T&&T.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);let K=r.get(T.depthTexture).__webglTexture,se=ct(T);if(T.depthTexture.format===1026)Be(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(T.depthTexture.format===1027)Be(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,se):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw Error("Unknown depthTexture format")}function ue(I){let T=r.get(I),K=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw Error("target.depthTexture not supported in Cube render targets");oe(T.__webglFramebuffer,I)}else if(K){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]=e.createRenderbuffer(),ee(T.__webglDepthbuffer[se],I,!1)}else i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=e.createRenderbuffer(),ee(T.__webglDepthbuffer,I,!1);i.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(I,T,K){let se=r.get(I);T!==void 0&&J(se.__webglFramebuffer,I,I.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),K!==void 0&&ue(I)}function X(I){let T=I.texture,K=r.get(I),se=r.get(T);I.addEventListener("dispose",B);let pe=I.textures,ce=I.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(se.__webglTexture===void 0&&(se.__webglTexture=e.createTexture()),se.__version=T.version,s.memory.textures++),ce){K.__webglFramebuffer=[];for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[me]=[];for(let ye=0;ye<T.mipmaps.length;ye++)K.__webglFramebuffer[me][ye]=e.createFramebuffer()}else K.__webglFramebuffer[me]=e.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let me=0;me<T.mipmaps.length;me++)K.__webglFramebuffer[me]=e.createFramebuffer()}else K.__webglFramebuffer=e.createFramebuffer();if(Oe)for(let me=0,ye=pe.length;me<ye;me++){let Xe=r.get(pe[me]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=e.createTexture(),s.memory.textures++)}if(I.samples>0&&Be(I)===!1){K.__webglMultisampledFramebuffer=e.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){let ye=pe[me];K.__webglColorRenderbuffer[me]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,K.__webglColorRenderbuffer[me]);let Xe=n.convert(ye.format,ye.colorSpace),Me=n.convert(ye.type),Fe=y(ye.internalFormat,Xe,Me,ye.colorSpace,I.isXRRenderTarget===!0),nt=ct(I);e.renderbufferStorageMultisample(e.RENDERBUFFER,nt,Fe,I.width,I.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,K.__webglColorRenderbuffer[me])}e.bindRenderbuffer(e.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=e.createRenderbuffer(),ee(K.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ce){i.bindTexture(e.TEXTURE_CUBE_MAP,se.__webglTexture),ne(e.TEXTURE_CUBE_MAP,T);for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)J(K.__webglFramebuffer[me][ye],I,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+me,ye);else J(K.__webglFramebuffer[me],I,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);f(T)&&p(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let me=0,ye=pe.length;me<ye;me++){let Xe=pe[me],Me=r.get(Xe);i.bindTexture(e.TEXTURE_2D,Me.__webglTexture),ne(e.TEXTURE_2D,Xe),J(K.__webglFramebuffer,I,Xe,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,0),f(Xe)&&p(e.TEXTURE_2D)}i.unbindTexture()}else{let me=e.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(me,se.__webglTexture),ne(me,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)J(K.__webglFramebuffer[ye],I,T,e.COLOR_ATTACHMENT0,me,ye);else J(K.__webglFramebuffer,I,T,e.COLOR_ATTACHMENT0,me,0);f(T)&&p(me),i.unbindTexture()}I.depthBuffer&&ue(I)}function Qe(I){let T=I.textures;for(let K=0,se=T.length;K<se;K++){let pe=T[K];if(f(pe)){let ce=I.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Oe=r.get(pe).__webglTexture;i.bindTexture(ce,Oe),p(ce),i.unbindTexture()}}}let He=[],lt=[];function Ge(I){if(I.samples>0){if(Be(I)===!1){let T=I.textures,K=I.width,se=I.height,pe=e.COLOR_BUFFER_BIT,ce=I.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Oe=r.get(I),me=T.length>1;if(me)for(let ye=0;ye<T.length;ye++)i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=e.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=e.STENCIL_BUFFER_BIT)),me){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Oe.__webglColorRenderbuffer[ye]);let Xe=r.get(T[ye]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Xe,0)}e.blitFramebuffer(0,0,K,se,0,0,K,se,pe,e.NEAREST),l===!0&&(He.length=0,lt.length=0,He.push(e.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.resolveDepthBuffer===!1&&(He.push(ce),lt.push(ce),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,lt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,He))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),me)for(let ye=0;ye<T.length;ye++){i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,Oe.__webglColorRenderbuffer[ye]);let Xe=r.get(T[ye]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,Xe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let T=I.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function ct(I){return Math.min(a.maxSamples,I.samples)}function Be(I){let T=r.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(I){let T=s.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function At(I,T){let K=I.colorSpace,se=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!=="srgb-linear"&&K!==""&&(ht.getTransfer(K)==="srgb"?(se!==1023||pe!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function yt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=ie,this.rebindTextures=ke,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Be}function kd(e,t){function i(r,a=""){let n,s=ht.getTransfer(a);if(r===1009)return e.UNSIGNED_BYTE;if(r===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(r===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===1010)return e.BYTE;if(r===1011)return e.SHORT;if(r===1012)return e.UNSIGNED_SHORT;if(r===1013)return e.INT;if(r===1014)return e.UNSIGNED_INT;if(r===1015)return e.FLOAT;if(r===1016)return e.HALF_FLOAT;if(r===1021)return e.ALPHA;if(r===1022)return e.RGB;if(r===1023)return e.RGBA;if(r===1024)return e.LUMINANCE;if(r===1025)return e.LUMINANCE_ALPHA;if(r===1026)return e.DEPTH_COMPONENT;if(r===1027)return e.DEPTH_STENCIL;if(r===1028)return e.RED;if(r===1029)return e.RED_INTEGER;if(r===1030)return e.RG;if(r===1031)return e.RG_INTEGER;if(r===1033)return e.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(s==="srgb")if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===33776)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===33776)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196||r===37492||r===37496)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===36196||r===37492)return s==="srgb"?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===37496)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===37808)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return s==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===36492)return s==="srgb"?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===36492)return n.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?e.UNSIGNED_INT_24_8:e[r]===void 0?null:e[r]}return{convert:i}}var Bd=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hi=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zd={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let d of e.hand.values()){let m=t.getJointPose(d,i),v=this._getHandJoint(l,d);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position);l.inputState.pinching&&u>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Hd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Qt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new Ji({vertexShader:Hd,fragmentShader:Vd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Tt(new Nn(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},jd=class extends Zi{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,m=null,v=new Gd,g=t.getContextAttributes(),f=null,p=null,y=[],R=[],E=new De,B=null,L=new Nt;L.layers.enable(1),L.viewport=new Mt;let P=new Nt;P.layers.enable(2),P.viewport=new Mt;let O=[L,P],b=new Bd;b.layers.enable(1),b.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=y[G];return J===void 0&&(J=new gs,y[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=y[G];return J===void 0&&(J=new gs,y[G]=J),J.getGripSpace()},this.getHand=function(G){let J=y[G];return J===void 0&&(J=new gs,y[G]=J),J.getHandSpace()};function H(G){let J=R.indexOf(G.inputSource);if(J===-1)return;let ee=y[J];ee!==void 0&&(ee.update(G.inputSource,G.frame,l||n),ee.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let G=0;G<y.length;G++){let J=R[G];J!==null&&(R[G]=null,y[G].disconnect(J))}M=null,F=null,v.reset(),e.setRenderTarget(f),d=null,u=null,h=null,r=null,p=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u===null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new mr(d.framebufferWidth,d.framebufferHeight,{format:Ma,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,ee=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Qc:Il,ee=g.stencil?Nl:Ll);let ue={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(ue),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new mr(u.textureWidth,u.textureHeight,{format:Ma,type:Sn,depthTexture:new tc(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(G){for(let J=0;J<G.removed.length;J++){let ee=G.removed[J],oe=R.indexOf(ee);oe>=0&&(R[oe]=null,y[oe].disconnect(ee))}for(let J=0;J<G.added.length;J++){let ee=G.added[J],oe=R.indexOf(ee);if(oe===-1){for(let ke=0;ke<y.length;ke++)if(ke>=R.length){R.push(ee),oe=ke;break}else if(R[ke]===null){R[ke]=ee,oe=ke;break}if(oe===-1)break}let ue=y[oe];ue&&ue.connect(ee)}}let z=new U,ie=new U;function de(G,J,ee){z.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(ee.matrixWorld);let oe=z.distanceTo(ie),ue=J.projectionMatrix.elements,ke=ee.projectionMatrix.elements,X=ue[14]/(ue[10]-1),Qe=ue[14]/(ue[10]+1),He=(ue[9]+1)/ue[5],lt=(ue[9]-1)/ue[5],Ge=(ue[8]-1)/ue[0],ct=(ke[8]+1)/ke[0],Be=X*Ge,Je=X*ct,At=oe/(-Ge+ct),yt=At*-Ge;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(yt),G.translateZ(At),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let I=X+At,T=Qe+At,K=Be-yt,se=Je+(oe-yt),pe=He*Qe/T*I,ce=lt*Qe/T*I;G.projectionMatrix.makePerspective(K,se,pe,ce,I,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function j(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),b.near=P.near=L.near=G.near,b.far=P.far=L.far=G.far,(M!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,F=b.far,L.near=M,L.far=F,P.near=M,P.far=F,L.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());let J=G.parent,ee=b.cameras;j(b,J);for(let oe=0;oe<ee.length;oe++)j(ee[oe],J);ee.length===2?de(b,L,P):b.projectionMatrix.copy(L.projectionMatrix),ae(G,b,J)};function ae(G,J,ee){ee===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ee.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Jr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(G){o=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let ne=null;function Ee(G,J){if(c=J.getViewerPose(l||n),m=J,c!==null){let ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let oe=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let ke=0;ke<ee.length;ke++){let X=ee[ke],Qe=null;if(d!==null)Qe=d.getViewport(X);else{let lt=h.getViewSubImage(u,X);Qe=lt.viewport,ke===0&&(e.setRenderTargetTextures(p,lt.colorTexture,u.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(p))}let He=O[ke];He===void 0&&(He=new Nt,He.layers.enable(ke),He.viewport=new Mt,O[ke]=He),He.matrix.fromArray(X.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(X.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ke===0&&(b.matrix.copy(He.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(He)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let ke=h.getDepthInformation(ee[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,r.renderState)}}for(let ee=0;ee<y.length;ee++){let oe=R[ee],ue=y[ee];oe!==null&&ue!==void 0&&ue.update(oe,J,l||n)}v.render(e,b),ne&&ne(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}let fe=new Ql;fe.setAnimationLoop(Ee),this.setAnimationLoop=function(G){ne=G},this.dispose=function(){}}},hr=new di,Wd=new Ve;function Xd(e,t){function i(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function r(f,p){p.color.getRGB(f.fogColor.value,Jl(e)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function a(f,p,y,R,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(f,p):p.isMeshToonMaterial?(n(f,p),u(f,p)):p.isMeshPhongMaterial?(n(f,p),h(f,p)):p.isMeshStandardMaterial?(n(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,E)):p.isMeshMatcapMaterial?(n(f,p),v(f,p)):p.isMeshDepthMaterial?n(f,p):p.isMeshDistanceMaterial?(n(f,p),g(f,p)):p.isMeshNormalMaterial?n(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,y,R):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,i(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,i(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,i(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===1&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,i(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===1&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,i(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,i(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=t.get(p),R=y.envMap,E=y.envMapRotation;if(R&&(f.envMap.value=R,hr.copy(E),hr.x*=-1,hr.y*=-1,hr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),f.envMapRotation.value.setFromMatrix4(Wd.makeRotationFromEuler(hr)),f.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let B=e._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*B,i(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,f.aoMapTransform))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,i(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,y,R){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=R*.5,p.map&&(f.map.value=p.map,i(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,i(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,i(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,i(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){let y=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function qd(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,R){let E=R.program;r.uniformBlockBinding(y,E)}function c(y,R){let E=a[y.id];E===void 0&&(v(y),E=h(y),a[y.id]=E,y.addEventListener("dispose",f));let B=R.program;r.updateUBOMapping(y,B);let L=t.render.frame;n[y.id]!==L&&(d(y),n[y.id]=L)}function h(y){let R=u();y.__bindingPointIndex=R;let E=e.createBuffer(),B=y.__size,L=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,B,L),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,E),E}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let R=a[y.id],E=y.uniforms,B=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let L=0,P=E.length;L<P;L++){let O=Array.isArray(E[L])?E[L]:[E[L]];for(let b=0,M=O.length;b<M;b++){let F=O[b];if(m(F,L,b,B)===!0){let H=F.__offset,k=Array.isArray(F.value)?F.value:[F.value],q=0;for(let z=0;z<k.length;z++){let ie=k[z],de=g(ie);typeof ie=="number"||typeof ie=="boolean"?(F.__data[0]=ie,e.bufferSubData(e.UNIFORM_BUFFER,H+q,F.__data)):ie.isMatrix3?(F.__data[0]=ie.elements[0],F.__data[1]=ie.elements[1],F.__data[2]=ie.elements[2],F.__data[3]=0,F.__data[4]=ie.elements[3],F.__data[5]=ie.elements[4],F.__data[6]=ie.elements[5],F.__data[7]=0,F.__data[8]=ie.elements[6],F.__data[9]=ie.elements[7],F.__data[10]=ie.elements[8],F.__data[11]=0):(ie.toArray(F.__data,q),q+=de.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,F.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(y,R,E,B){let L=y.value,P=R+"_"+E;if(B[P]===void 0)return typeof L=="number"||typeof L=="boolean"?B[P]=L:B[P]=L.clone(),!0;{let O=B[P];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return B[P]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function v(y){let R=y.uniforms,E=0;for(let L=0,P=R.length;L<P;L++){let O=Array.isArray(R[L])?R[L]:[R[L]];for(let b=0,M=O.length;b<M;b++){let F=O[b],H=Array.isArray(F.value)?F.value:[F.value];for(let k=0,q=H.length;k<q;k++){let z=H[k],ie=g(z),de=E%16;de!==0&&16-de<ie.boundary&&(E+=16-de),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ie.storage}}}let B=E%16;return B>0&&(E+=16-B),y.__size=E,y.__cache={},this}function g(y){let R={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(R.boundary=4,R.storage=4):y.isVector2?(R.boundary=8,R.storage=8):y.isVector3||y.isColor?(R.boundary=16,R.storage=12):y.isVector4?(R.boundary=16,R.storage=16):y.isMatrix3?(R.boundary=48,R.storage=48):y.isMatrix4?(R.boundary=64,R.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),R}function f(y){let R=y.target;R.removeEventListener("dispose",f);let E=s.indexOf(R.__bindingPointIndex);s.splice(E,1),e.deleteBuffer(a[R.id]),delete a[R.id],delete n[R.id]}function p(){for(let y in a)e.deleteBuffer(a[y]);s=[],a={},n={}}return{bind:l,update:c,dispose:p}}var oc=class{constructor(e={}){let{canvas:t=yh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=n;let d=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,f=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let y=this,R=!1,E=0,B=0,L=null,P=-1,O=null,b=new Mt,M=new Mt,F=null,H=new Pe(0),k=0,q=t.width,z=t.height,ie=1,de=null,j=null,ae=new Mt(0,0,q,z),ne=new Mt(0,0,q,z),Ee=!1,fe=new Is,G=!1,J=!1,ee=new Ve,oe=new U,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return L===null?ie:1}let X=i;function Qe(C,V){return t.getContext(C,V)}try{let C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r164"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",te,!1),X===null){let V="webgl2";if(X=Qe(V,C),X===null)throw Qe(V)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let He,lt,Ge,ct,Be,Je,At,yt,I,T,K,se,pe,ce,Oe,me,ye,Xe,Me,Fe,nt,Ce,we,$e;function Ze(){He=new iu(X),He.init(),Ce=new kd(X,He),lt=new Jh(X,He,e,Ce),Ge=new Od(X),ct=new nu(X),Be=new Md,Je=new Fd(X,He,Ge,Be,lt,Ce,ct),At=new $h(y),yt=new tu(y),I=new Wh(X),we=new Yh(X,I),T=new ru(X,I,ct,we),K=new ou(X,T,I,ct),Me=new su(X,lt,Je),me=new Zh(Be),se=new bd(y,At,yt,He,lt,we,me),pe=new Xd(y,Be),ce=new Ed,Oe=new Ld(He),Xe=new qh(y,At,yt,Ge,K,u,o),ye=new Dd(y,K,lt),$e=new qd(X,ct,lt,Ge),Fe=new Kh(X,He,ct),nt=new au(X,He,ct),ct.programs=se.programs,y.capabilities=lt,y.extensions=He,y.properties=Be,y.renderLists=ce,y.shadowMap=ye,y.state=Ge,y.info=ct}Ze();let N=new jd(y,X);this.xr=N,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let C=He.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=He.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(q,z,!1))},this.getSize=function(C){return C.set(q,z)},this.setSize=function(C,V,Z=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,z=V,t.width=Math.floor(C*ie),t.height=Math.floor(V*ie),Z===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(q*ie,z*ie).floor()},this.setDrawingBufferSize=function(C,V,Z){q=C,z=V,ie=Z,t.width=Math.floor(C*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,V,Z,Y){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,V,Z,Y),Ge.viewport(b.copy(ae).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,V,Z,Y){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,V,Z,Y),Ge.scissor(M.copy(ne).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Ge.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){de=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(C=!0,V=!0,Z=!0){let Y=0;if(C){let W=!1;if(L!==null){let _e=L.texture.format;W=_e===1033||_e===1031||_e===1029}if(W){let _e=L.texture.type,Ue=_e===1009||_e===1014||_e===1012||_e===1020||_e===1017||_e===1018,Ne=Xe.getClearColor(),Re=Xe.getClearAlpha(),We=Ne.r,tt=Ne.g,it=Ne.b;Ue?(d[0]=We,d[1]=tt,d[2]=it,d[3]=Re,X.clearBufferuiv(X.COLOR,0,d)):(m[0]=We,m[1]=tt,m[2]=it,m[3]=Re,X.clearBufferiv(X.COLOR,0,m))}else Y|=X.COLOR_BUFFER_BIT}V&&(Y|=X.DEPTH_BUFFER_BIT),Z&&(Y|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ce.dispose(),Oe.dispose(),Be.dispose(),At.dispose(),yt.dispose(),K.dispose(),we.dispose(),$e.dispose(),se.dispose(),N.dispose(),N.removeEventListener("sessionstart",gt),N.removeEventListener("sessionend",qe),vt.stop()};function he(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let C=ct.autoReset,V=ye.enabled,Z=ye.autoUpdate,Y=ye.needsUpdate,W=ye.type;Ze(),ct.autoReset=C,ye.enabled=V,ye.autoUpdate=Z,ye.needsUpdate=Y,ye.type=W}function te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Q(C){let V=C.target;V.removeEventListener("dispose",Q),xe(V)}function xe(C){ge(C),Be.remove(C)}function ge(C){let V=Be.get(C).programs;V!==void 0&&(V.forEach(function(Z){se.releaseProgram(Z)}),C.isShaderMaterial&&se.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Z,Y,W,_e){V===null&&(V=ue);let Ue=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Da(C,V,Z,Y,W);Ge.setMaterial(Y,Ue);let Re=Z.index,We=1;if(Y.wireframe===!0){if(Re=T.getWireframeAttribute(Z),Re===void 0)return;We=2}let tt=Z.drawRange,it=Z.attributes.position,Lt=tt.start*We,Bt=(tt.start+tt.count)*We;_e!==null&&(Lt=Math.max(Lt,_e.start*We),Bt=Math.min(Bt,(_e.start+_e.count)*We)),Re===null?it!=null&&(Lt=Math.max(Lt,0),Bt=Math.min(Bt,it.count)):(Lt=Math.max(Lt,0),Bt=Math.min(Bt,Re.count));let ti=Bt-Lt;if(ti<0||ti===1/0)return;we.setup(W,Y,Ne,Z,Re);let zt,bt=Fe;if(Re!==null&&(zt=I.get(Re),bt=nt,bt.setIndex(zt)),W.isMesh)Y.wireframe===!0?(Ge.setLineWidth(Y.wireframeLinewidth*ke()),bt.setMode(X.LINES)):bt.setMode(X.TRIANGLES);else if(W.isLine){let Ke=Y.linewidth;Ke===void 0&&(Ke=1),Ge.setLineWidth(Ke*ke()),W.isLineSegments?bt.setMode(X.LINES):W.isLineLoop?bt.setMode(X.LINE_LOOP):bt.setMode(X.LINE_STRIP)}else W.isPoints?bt.setMode(X.POINTS):W.isSprite&&bt.setMode(X.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances===null?bt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount):bt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(W.isInstancedMesh)bt.renderInstances(Lt,ti,W.count);else if(Z.isInstancedBufferGeometry){let Ke=Z._maxInstanceCount===void 0?1/0:Z._maxInstanceCount,Er=Math.min(Z.instanceCount,Ke);bt.renderInstances(Lt,ti,Er)}else bt.render(Lt,ti)};function ft(C,V,Z){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=1,C.needsUpdate=!0,Sr(C,V,Z),C.side=0,C.needsUpdate=!0,Sr(C,V,Z),C.side=2):Sr(C,V,Z)}this.compile=function(C,V,Z=null){Z===null&&(Z=C),g=Oe.get(Z),g.init(V),p.push(g),Z.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),C!==Z&&C.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(y._useLegacyLights);let Y=new Set;return C.traverse(function(W){let _e=W.material;if(_e)if(Array.isArray(_e))for(let Ue=0;Ue<_e.length;Ue++){let Ne=_e[Ue];ft(Ne,Z,W),Y.add(Ne)}else ft(_e,Z,W),Y.add(_e)}),p.pop(),g=null,Y},this.compileAsync=function(C,V,Z=null){let Y=this.compile(C,V,Z);return new Promise(W=>{function _e(){if(Y.forEach(function(Ue){Be.get(Ue).currentProgram.isReady()&&Y.delete(Ue)}),Y.size===0){W(C);return}setTimeout(_e,10)}He.get("KHR_parallel_shader_compile")===null?setTimeout(_e,10):_e()})};let dt=null;function ot(C){dt&&dt(C)}function gt(){vt.stop()}function qe(){vt.start()}let vt=new Ql;vt.setAnimationLoop(ot),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(C){dt=C,N.setAnimationLoop(C),C===null?vt.stop():vt.start()},N.addEventListener("sessionstart",gt),N.addEventListener("sessionend",qe),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(V),V=N.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,V,L),g=Oe.get(C,p.length),g.init(V),p.push(g),ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),fe.setFromProjectionMatrix(ee),J=this.localClippingEnabled,G=me.init(this.clippingPlanes,J),v=ce.get(C,f.length),v.init(),f.push(v),Ot(C,V,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(de,j);let Z=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1;Z&&Xe.addToRenderList(v,C),this.info.render.frame++,G===!0&&me.beginShadows();let Y=g.state.shadowsArray;ye.render(Y,C,V),G===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=v.opaque,_e=v.transmissive;if(g.setupLights(y._useLegacyLights),V.isArrayCamera){let Ue=V.cameras;if(_e.length>0)for(let Ne=0,Re=Ue.length;Ne<Re;Ne++){let We=Ue[Ne];rr(W,_e,C,We)}Z&&Xe.render(C);for(let Ne=0,Re=Ue.length;Ne<Re;Ne++){let We=Ue[Ne];Ci(v,C,We,We.viewport)}}else _e.length>0&&rr(W,_e,C,V),Z&&Xe.render(C),Ci(v,C,V);L!==null&&(Je.updateMultisampleRenderTarget(L),Je.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(y,C,V),we.resetDefaultState(),P=-1,O=null,p.pop(),p.length>0?(g=p[p.length-1],G===!0&&me.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,f.pop(),v=f.length>0?f[f.length-1]:null};function Ot(C,V,Z,Y){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||fe.intersectsSprite(C)){Y&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);let _e=K.update(C),Ue=C.material;Ue.visible&&v.push(C,_e,Ue,Z,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||fe.intersectsObject(C))){let _e=K.update(C),Ue=C.material;if(Y&&(C.boundingSphere===void 0?(_e.boundingSphere===null&&_e.computeBoundingSphere(),oe.copy(_e.boundingSphere.center)):(C.boundingSphere===null&&C.computeBoundingSphere(),oe.copy(C.boundingSphere.center)),oe.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(Ue)){let Ne=_e.groups;for(let Re=0,We=Ne.length;Re<We;Re++){let tt=Ne[Re],it=Ue[tt.materialIndex];it&&it.visible&&v.push(C,_e,it,Z,oe.z,tt)}}else Ue.visible&&v.push(C,_e,Ue,Z,oe.z,null)}}let W=C.children;for(let _e=0,Ue=W.length;_e<Ue;_e++)Ot(W[_e],V,Z,Y)}function Ci(C,V,Z,Y){let W=C.opaque,_e=C.transmissive,Ue=C.transparent;g.setupLightsView(Z),G===!0&&me.setGlobalState(y.clippingPlanes,Z),Y&&Ge.viewport(b.copy(Y)),W.length>0&&Mr(W,V,Z),_e.length>0&&Mr(_e,V,Z),Ue.length>0&&Mr(Ue,V,Z),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function rr(C,V,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new mr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Pl:Sn,minFilter:vr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let W=g.state.transmissionRenderTarget[Y.id],_e=Y.viewport||b;W.setSize(_e.z,_e.w);let Ue=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(H),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear();let Ne=y.toneMapping;y.toneMapping=0;let Re=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),G===!0&&me.setGlobalState(y.clippingPlanes,Y),Mr(C,Z,Y),Je.updateMultisampleRenderTarget(W),Je.updateRenderTargetMipmap(W),He.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let tt=0,it=V.length;tt<it;tt++){let Lt=V[tt],Bt=Lt.object,ti=Lt.geometry,zt=Lt.material,bt=Lt.group;if(zt.side===2&&Bt.layers.test(Y.layers)){let Ke=zt.side;zt.side=1,zt.needsUpdate=!0,Ia(Bt,Z,Y,ti,zt,bt),zt.side=Ke,zt.needsUpdate=!0,We=!0}}We===!0&&(Je.updateMultisampleRenderTarget(W),Je.updateRenderTargetMipmap(W))}y.setRenderTarget(Ue),y.setClearColor(H,k),Re!==void 0&&(Y.viewport=Re),y.toneMapping=Ne}function Mr(C,V,Z){let Y=V.isScene===!0?V.overrideMaterial:null;for(let W=0,_e=C.length;W<_e;W++){let Ue=C[W],Ne=Ue.object,Re=Ue.geometry,We=Y===null?Ue.material:Y,tt=Ue.group;Ne.layers.test(Z.layers)&&Ia(Ne,V,Z,Re,We,tt)}}function Ia(C,V,Z,Y,W,_e){C.onBeforeRender(y,V,Z,Y,W,_e),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(y,V,Z,Y,C,_e),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,y.renderBufferDirect(Z,V,Y,W,C,_e),W.side=0,W.needsUpdate=!0,y.renderBufferDirect(Z,V,Y,W,C,_e),W.side=2):y.renderBufferDirect(Z,V,Y,W,C,_e),C.onAfterRender(y,V,Z,Y,W,_e)}function Sr(C,V,Z){V.isScene!==!0&&(V=ue);let Y=Be.get(C),W=g.state.lights,_e=g.state.shadowsArray,Ue=W.state.version,Ne=se.getParameters(C,W.state,_e,V,Z),Re=se.getProgramCacheKey(Ne),We=Y.programs;Y.environment=C.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(C.isMeshStandardMaterial?yt:At).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",Q),We=new Map,Y.programs=We);let tt=We.get(Re);if(tt!==void 0){if(Y.currentProgram===tt&&Y.lightsStateVersion===Ue)return Ua(C,Ne),tt}else Ne.uniforms=se.getUniforms(C),C.onBuild(Z,Ne,y),C.onBeforeCompile(Ne,y),tt=se.acquireProgram(Ne,Re),We.set(Re,tt),Y.uniforms=Ne.uniforms;let it=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=me.uniform),Ua(C,Ne),Y.needsLights=Vn(C),Y.lightsStateVersion=Ue,Y.needsLights&&(it.ambientLightColor.value=W.state.ambient,it.lightProbe.value=W.state.probe,it.directionalLights.value=W.state.directional,it.directionalLightShadows.value=W.state.directionalShadow,it.spotLights.value=W.state.spot,it.spotLightShadows.value=W.state.spotShadow,it.rectAreaLights.value=W.state.rectArea,it.ltc_1.value=W.state.rectAreaLTC1,it.ltc_2.value=W.state.rectAreaLTC2,it.pointLights.value=W.state.point,it.pointLightShadows.value=W.state.pointShadow,it.hemisphereLights.value=W.state.hemi,it.directionalShadowMap.value=W.state.directionalShadowMap,it.directionalShadowMatrix.value=W.state.directionalShadowMatrix,it.spotShadowMap.value=W.state.spotShadowMap,it.spotLightMatrix.value=W.state.spotLightMatrix,it.spotLightMap.value=W.state.spotLightMap,it.pointShadowMap.value=W.state.pointShadowMap,it.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=tt,Y.uniformsList=null,tt}function na(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Mn.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Ua(C,V){let Z=Be.get(C);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Da(C,V,Z,Y,W){V.isScene!==!0&&(V=ue),Je.resetTextureUnits();let _e=V.fog,Ue=Y.isMeshStandardMaterial?V.environment:null,Ne=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qt,Re=(Y.isMeshStandardMaterial?yt:At).get(Y.envMap||Ue),We=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),it=!!Z.morphAttributes.position,Lt=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color,ti=0;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ti=y.toneMapping);let zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bt=zt===void 0?0:zt.length,Ke=Be.get(Y),Er=g.state.lights;if(G===!0&&(J===!0||C!==O)){let Yt=C===O&&Y.id===P;me.setState(Y,C,Yt)}let jt=!1;Y.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Er.state.version?jt=!0:Ke.outputColorSpace===Ne?W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ke.instancingMorph===!1&&W.morphTexture!==null?jt=!0:Ke.envMap===Re?Y.fog===!0&&Ke.fog!==_e||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==me.numPlanes||Ke.numIntersection!==me.numIntersection)?jt=!0:Ke.vertexAlphas===We&&Ke.vertexTangents===tt&&Ke.morphTargets===it&&Ke.morphNormals===Lt&&Ke.morphColors===Bt&&Ke.toneMapping===ti?Ke.morphTargetsCount!==bt&&(jt=!0):jt=!0:jt=!0:jt=!0:(jt=!0,Ke.__version=Y.version);let Li=Ke.currentProgram;jt===!0&&(Li=Sr(Y,V,W));let sa=!1,ar=!1,Tr=!1,Ft=Li.getUniforms(),Ti=Ke.uniforms;if(Ge.useProgram(Li.program)&&(sa=!0,ar=!0,Tr=!0),Y.id!==P&&(P=Y.id,ar=!0),sa||O!==C){Ft.setValue(X,"projectionMatrix",C.projectionMatrix),Ft.setValue(X,"viewMatrix",C.matrixWorldInverse);let Yt=Ft.map.cameraPosition;Yt!==void 0&&Yt.setValue(X,oe.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&Ft.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ft.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,ar=!0,Tr=!0)}if(W.isSkinnedMesh){Ft.setOptional(X,W,"bindMatrix"),Ft.setOptional(X,W,"bindMatrixInverse");let Yt=W.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ft.setValue(X,"boneTexture",Yt.boneTexture,Je))}W.isBatchedMesh&&(Ft.setOptional(X,W,"batchingTexture"),Ft.setValue(X,"batchingTexture",W._matricesTexture,Je));let oa=Z.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&Me.update(W,Z,Li),(ar||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,Ft.setValue(X,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ti.envMap.value=Re,Ti.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Ti.envMapIntensity.value=V.environmentIntensity),ar&&(Ft.setValue(X,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&Hn(Ti,Tr),_e&&Y.fog===!0&&pe.refreshFogUniforms(Ti,_e),pe.refreshMaterialUniforms(Ti,Y,ie,z,g.state.transmissionRenderTarget[C.id]),Mn.upload(X,na(Ke),Ti,Je)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Mn.upload(X,na(Ke),Ti,Je),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ft.setValue(X,"center",W.center),Ft.setValue(X,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(X,"normalMatrix",W.normalMatrix),Ft.setValue(X,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Yt=Y.uniformsGroups;for(let Rt=0,la=Yt.length;Rt<la;Rt++){let Oa=Yt[Rt];$e.update(Oa,Li),$e.bind(Oa,Li)}}return Li}function Hn(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Vn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,V,Z){Be.get(C.texture).__webglTexture=V,Be.get(C.depthTexture).__webglTexture=Z;let Y=Be.get(C);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=Z===void 0,Y.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){let Z=Be.get(C);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Z=0){L=C,E=V,B=Z;let Y=!0,W=null,_e=!1,Ue=!1;if(C){let Ne=Be.get(C);Ne.__useDefaultFramebuffer===void 0?Ne.__webglFramebuffer===void 0?Je.setupRenderTarget(C):Ne.__hasExternalTextures&&Je.rebindTextures(C,Be.get(C.texture).__webglTexture,Be.get(C.depthTexture).__webglTexture):(Ge.bindFramebuffer(X.FRAMEBUFFER,null),Y=!1);let Re=C.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Ue=!0);let We=Be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(W=Array.isArray(We[V])?We[V][Z]:We[V],_e=!0):W=C.samples>0&&Je.useMultisampledRTT(C)===!1?Be.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?We[Z]:We,b.copy(C.viewport),M.copy(C.scissor),F=C.scissorTest}else b.copy(ae).multiplyScalar(ie).floor(),M.copy(ne).multiplyScalar(ie).floor(),F=Ee;if(Ge.bindFramebuffer(X.FRAMEBUFFER,W)&&Y&&Ge.drawBuffers(C,W),Ge.viewport(b),Ge.scissor(M),Ge.setScissorTest(F),_e){let Ne=Be.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ne.__webglTexture,Z)}else if(Ue){let Ne=Be.get(C.texture),Re=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ne.__webglTexture,Z||0,Re)}P=-1},this.readRenderTargetPixels=function(C,V,Z,Y,W,_e,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){Ge.bindFramebuffer(X.FRAMEBUFFER,Ne);try{let Re=C.texture,We=Re.format,tt=Re.type;if(!lt.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-Y&&Z>=0&&Z<=C.height-W&&X.readPixels(V,Z,Y,W,Ce.convert(We),Ce.convert(tt),_e)}finally{let Re=L===null?null:Be.get(L).__webglFramebuffer;Ge.bindFramebuffer(X.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(C,V,Z=0){let Y=2**-Z,W=Math.floor(V.image.width*Y),_e=Math.floor(V.image.height*Y);Je.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,C.x,C.y,W,_e),Ge.unbindTexture()},this.copyTextureToTexture=function(C,V,Z,Y=0){let W=V.image.width,_e=V.image.height,Ue=Ce.convert(Z.format),Ne=Ce.convert(Z.type);Je.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,C.x,C.y,W,_e,Ue,Ne,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ue,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Y,C.x,C.y,Ue,Ne,V.image),Y===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Z,Y,W=0){let _e=C.max.x-C.min.x,Ue=C.max.y-C.min.y,Ne=C.max.z-C.min.z,Re=Ce.convert(Y.format),We=Ce.convert(Y.type),tt;if(Y.isData3DTexture)Je.setTexture3D(Y,0),tt=X.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)Je.setTexture2DArray(Y,0),tt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let it=X.getParameter(X.UNPACK_ROW_LENGTH),Lt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Bt=X.getParameter(X.UNPACK_SKIP_PIXELS),ti=X.getParameter(X.UNPACK_SKIP_ROWS),zt=X.getParameter(X.UNPACK_SKIP_IMAGES),bt=Z.isCompressedTexture?Z.mipmaps[W]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,bt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,bt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,C.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,C.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(tt,W,V.x,V.y,V.z,_e,Ue,Ne,Re,We,bt.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(tt,W,V.x,V.y,V.z,_e,Ue,Ne,Re,bt.data):X.texSubImage3D(tt,W,V.x,V.y,V.z,_e,Ue,Ne,Re,We,bt),X.pixelStorei(X.UNPACK_ROW_LENGTH,it),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Lt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Bt),X.pixelStorei(X.UNPACK_SKIP_ROWS,ti),X.pixelStorei(X.UNPACK_SKIP_IMAGES,zt),W===0&&Y.generateMipmaps&&X.generateMipmap(tt),Ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Je.setTextureCube(C,0):C.isData3DTexture?Je.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Je.setTexture2DArray(C,0):Je.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){E=0,B=0,L=null,Ge.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e==="display-p3"?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace==="display-p3-linear"?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ds=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},lc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new U,cc=class hc{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Jt.fromBufferAttribute(this,i),Jt.applyMatrix4(t),this.setXYZ(i,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Jt.fromBufferAttribute(this,i),Jt.applyNormalMatrix(t),this.setXYZ(i,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Jt.fromBufferAttribute(this,i),Jt.transformDirection(t),this.setXYZ(i,Jt.x,Jt.y,Jt.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=bi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=_t(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=bi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=bi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=bi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=bi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=_t(i,this.array),r=_t(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=_t(i,this.array),r=_t(r,this.array),a=_t(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=_t(i,this.array),r=_t(r,this.array),a=_t(a,this.array),n=_t(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new It(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nl=new U,sl=new Mt,ol=new Mt,Yd=new U,ll=new Ve,cn=new U,_s=new li,cl=new Ve,vs=new xr,Os=class extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$c,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,cn),this.boundingBox.expandByPoint(cn)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,cn),this.boundingSphere.expandByPoint(cn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(r),e.ray.intersectsSphere(_s)!==!1&&(cl.copy(r).invert(),vs.copy(e.ray).applyMatrix4(cl),!(this.boundingBox!==null&&vs.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a===1/0?e.set(1,0,0,0):e.multiplyScalar(a),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;sl.fromBufferAttribute(r.attributes.skinIndex,e),ol.fromBufferAttribute(r.attributes.skinWeight,e),nl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let n=ol.getComponent(a);if(n!==0){let s=sl.getComponent(a);ll.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(Yd.copy(nl).applyMatrix4(ll),n)}}return t.applyMatrix4(this.bindMatrixInverse)}},Un=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Fs=class extends Qt{constructor(e=null,t=1,i=1,r,a,n,s,o,l=si,c=si,h,u){super(null,n,s,o,l,c,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hl=new Ve,Kd=new Ve,ks=class uc{constructor(t=[],i=[]){this.uuid=Mi(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Ve;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:Kd;hl.multiplyMatrices(o,i[n]),hl.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new uc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new Fs(i,t,t,Ma,Ln);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),s=new Un),this.bones.push(s),this.boneInverses.push(new Ve().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},wn=class extends It{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new Ve,ul=new Ve,hn=[],dl=new mi,Jd=new Ve,ma=new Tt,fa=new li,dc=class extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Jd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),dl.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(dl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),fa.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=e*(i.length+1)+1;for(let n=0;n<i.length;n++)i[n]=r[a+n]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Vr),ul.multiplyMatrices(i,Vr),ma.matrixWorld=ul,ma.raycast(e,hn);for(let n=0,s=hn.length;n<s;n++){let o=hn[n];o.instanceId=a,o.object=this,t.push(o)}hn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fs(new Float32Array(r*this.count),r,this.count,eh,Ln));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;a[o]=s,a.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Bi=class extends Gt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},An=new U,Rn=new U,pl=new Ve,ga=new xr,un=new li,xs=new U,ml=new U,wa=class extends wt{constructor(e=new Vt,t=new Bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)An.fromBufferAttribute(t,r-1),Rn.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=An.distanceTo(Rn);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),un.copy(i.boundingSphere),un.applyMatrix4(r),un.radius+=a,e.ray.intersectsSphere(un)===!1)return;pl.copy(r).invert(),ga.copy(e.ray).applyMatrix4(pl);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){let u=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let m=u,v=d-1;m<v;m+=l){let g=c.getX(m),f=c.getX(m+1),p=dn(this,e,ga,o,g,f);p&&t.push(p)}if(this.isLineLoop){let m=c.getX(d-1),v=c.getX(u),g=dn(this,e,ga,o,m,v);g&&t.push(g)}}else{let u=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let m=u,v=d-1;m<v;m+=l){let g=dn(this,e,ga,o,m,m+1);g&&t.push(g)}if(this.isLineLoop){let m=dn(this,e,ga,o,d-1,u);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function dn(e,t,i,r,a,n){let s=e.geometry.attributes.position;if(An.fromBufferAttribute(s,a),Rn.fromBufferAttribute(s,n),i.distanceSqToSegment(An,Rn,xs,ml)>r)return;xs.applyMatrix4(e.matrixWorld);let o=t.ray.origin.distanceTo(xs);if(!(o<t.near||o>t.far))return{distance:o,point:ml.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,object:e}}var fl=new U,gl=new U,Qr=class extends wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)fl.fromBufferAttribute(t,r),gl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+fl.distanceTo(gl);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pc=class extends wa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$i=class extends Gt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_l=new Ve,Ts=new xr,pn=new li,mn=new U,ea=class extends wt{constructor(e=new Vt,t=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pn.copy(i.boundingSphere),pn.applyMatrix4(r),pn.radius+=a,e.ray.intersectsSphere(pn)===!1)return;_l.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(_l);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let h=Math.max(0,n.start),u=Math.min(l.count,n.start+n.count);for(let d=h,m=u;d<m;d++){let v=l.getX(d);mn.fromBufferAttribute(c,v),vl(mn,v,o,r,e,t,this)}}else{let h=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let d=h,m=u;d<m;d++)mn.fromBufferAttribute(c,d),vl(mn,d,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function vl(e,t,i,r,a,n,s){let o=Ts.distanceSqToPoint(e);if(o<i){let l=new U;Ts.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:s})}}var Zd=class mc extends Vt{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],u=[],d=[],m=[],v=0,g=[],f=r/2,p=0;y(),s===!1&&(t>0&&R(!0),i>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(m,2));function y(){let E=new U,B=new U,L=0,P=(i-t)/r;for(let O=0;O<=n;O++){let b=[],M=O/n,F=M*(i-t)+t;for(let H=0;H<=a;H++){let k=H/a,q=k*l+o,z=Math.sin(q),ie=Math.cos(q);B.x=F*z,B.y=-M*r+f,B.z=F*ie,u.push(B.x,B.y,B.z),E.set(z,P,ie).normalize(),d.push(E.x,E.y,E.z),m.push(k,1-M),b.push(v++)}g.push(b)}for(let O=0;O<a;O++)for(let b=0;b<n;b++){let M=g[b][O],F=g[b+1][O],H=g[b+1][O+1],k=g[b][O+1];h.push(M,F,k),h.push(F,H,k),L+=6}c.addGroup(p,L,0),p+=L}function R(E){let B=v,L=new De,P=new U,O=0,b=E===!0?t:i,M=E===!0?1:-1;for(let H=1;H<=a;H++)u.push(0,f*M,0),d.push(0,M,0),m.push(.5,.5),v++;let F=v;for(let H=0;H<=a;H++){let k=H/a*l+o,q=Math.cos(k),z=Math.sin(k);P.x=b*z,P.y=f*M,P.z=b*q,u.push(P.x,P.y,P.z),d.push(0,M,0),L.x=q*.5+.5,L.y=z*.5*M+.5,m.push(L.x,L.y),v++}for(let H=0;H<a;H++){let k=B+H,q=F+H;E===!0?h.push(q,q+1,k):h.push(q+1,q,k),O+=3}c.addGroup(p,O,E===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $d=class fc extends Vt{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],u=new U,d=new U,m=[],v=[],g=[],f=[];for(let p=0;p<=r;p++){let y=[],R=p/r,E=0;p===0&&s===0?E=.5/i:p===r&&l===Math.PI&&(E=-.5/i);for(let B=0;B<=i;B++){let L=B/i;u.x=-t*Math.cos(a+L*n)*Math.sin(s+R*o),u.y=t*Math.cos(s+R*o),u.z=t*Math.sin(a+L*n)*Math.sin(s+R*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(L+E,1-R),y.push(c++)}h.push(y)}for(let p=0;p<r;p++)for(let y=0;y<i;y++){let R=h[p][y+1],E=h[p][y],B=h[p+1][y],L=h[p+1][y+1];(p!==0||s>0)&&m.push(R,E,L),(p!==r-1||l<Math.PI)&&m.push(E,B,L)}this.setIndex(m),this.setAttribute("position",new ut(v,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gc=class extends Gt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Dn=class extends Gt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Si=class extends Dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ai=class extends Gt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qd=class extends Gt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function fn(e,t,i){return!e||!i&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function ep(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function tp(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function xl(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}function _c(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push.apply(i,s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}var ta=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(i):r,this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}},ip=class extends ta{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:po,endingEnd:po}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case mo:a=e,s=2*t-i;break;case fo:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case mo:n=e,o=2*i-t;break;case fo:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),v=m*m,g=v*m,f=-u*g+2*u*v-u*m,p=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,y=(-1-d)*g+(1.5+d)*v+.5*m,R=d*g-d*v;for(let E=0;E!==s;++E)a[E]=f*n[c+E]+p*n[l+E]+y*n[o+E]+R*n[h+E];return a}},rp=class extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let u=0;u!==s;++u)a[u]=n[l+u]*h+n[o+u]*c;return a}},ap=class extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ri=class{constructor(e,t,i,r){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fn(t,this.TimeBufferType),this.values=fn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fn(e.times,Array),values:fn(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ap(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ip(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case jn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return jn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&ep(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===jn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s];if(l!==e[s+1]&&(s!==1||l!==e[0]))if(r)o=!0;else{let c=s*i,h=c-i,u=c+i;for(let d=0;d!==i;++d){let m=t[c+d];if(m!==t[h+d]||m!==t[u+d]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let c=s*i,h=n*i;for(let u=0;u!==i;++u)t[h+u]=t[c+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,n),this.values=t.slice(0,n*i)),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ri.prototype.TimeBufferType=Float32Array,Ri.prototype.ValueBufferType=Float32Array,Ri.prototype.DefaultInterpolation=pr;var jr=class extends Ri{};jr.prototype.ValueTypeName="bool",jr.prototype.ValueBufferType=Array,jr.prototype.DefaultInterpolation=Kr,jr.prototype.InterpolantFactoryMethodLinear=void 0,jr.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends Ri{};vc.prototype.ValueTypeName="color";var fr=class extends Ri{};fr.prototype.ValueTypeName="number";var np=class extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)ei.slerpFlat(a,0,n,l-s,n,l,o);return a}},ki=class extends Ri{InterpolantFactoryMethodLinear(e){return new np(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion",ki.prototype.DefaultInterpolation=pr,ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends Ri{};Wr.prototype.ValueTypeName="string",Wr.prototype.ValueBufferType=Array,Wr.prototype.DefaultInterpolation=Kr,Wr.prototype.InterpolantFactoryMethodLinear=void 0,Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Ri{};zi.prototype.ValueTypeName="vector";var Cn=class{constructor(e="",t=-1,i=[],r=th){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(op(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,n=i.length;a!==n;++a)t.push(Ri.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let c=tp(o);o=xl(o,1,c),l=xl(l,1,c),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new fr(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],c=l.name.match(a);if(c&&c.length>1){let h=c[1],u=r[h];u||(r[h]=u=[]),u.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(c,h,u,d,m){if(u.length!==0){let v=[],g=[];_c(u,v,g,d),v.length!==0&&m.push(new c(h,v,g))}},r=[],a=e.name||"default",n=e.fps||30,s=e.blendMode,o=e.length||-1,l=e.hierarchy||[];for(let c=0;c<l.length;c++){let h=l[c].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let u={},d;for(d=0;d<h.length;d++)if(h[d].morphTargets)for(let m=0;m<h[d].morphTargets.length;m++)u[h[d].morphTargets[m]]=-1;for(let m in u){let v=[],g=[];for(let f=0;f!==h[d].morphTargets.length;++f){let p=h[d];v.push(p.time),g.push(+(p.morphTarget===m))}r.push(new fr(".morphTargetInfluence["+m+"]",v,g))}o=u.length*n}else{let u=".bones["+t[c].name+"]";i(zi,u+".position",h,"pos",r),i(ki,u+".quaternion",h,"rot",r),i(zi,u+".scale",h,"scl",r)}}return r.length===0?null:new this(a,o,r,s)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function sp(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fr;case"vector":case"vector2":case"vector3":case"vector4":return zi;case"color":return vc;case"quaternion":return ki;case"bool":case"boolean":return jr;case"string":return Wr}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function op(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=sp(e.type);if(e.times===void 0){let i=[],r=[];_c(e.keys,i,r,"value"),e.times=i,e.values=r}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var Ki={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Bs=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(c))return m}return null}}},xc=new Bs,oi=class{constructor(e){this.manager=e===void 0?xc:e,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},lp=class extends Error{constructor(e,t){super(e),this.response=t}},Qi=class extends oi{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Ki.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:i,onError:r});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=Oi[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0,v=0,g=new ReadableStream({start(f){p();function p(){h.read().then(({done:y,value:R})=>{if(y)f.close();else{v+=R.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let B=0,L=c.length;B<L;B++){let P=c[B];P.onProgress&&P.onProgress(E)}f.enqueue(R),p()}})}}});return new Response(g)}else throw new lp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,s));case"json":return l.json();default:if(s===void 0)return l.text();{let c=/charset="?([^;"\s]*)"?/i.exec(s),h=c&&c[1]?c[1].toLowerCase():void 0,u=new TextDecoder(h);return l.arrayBuffer().then(d=>u.decode(d))}}}).then(l=>{Ki.add(e,l);let c=Oi[e];delete Oi[e];for(let h=0,u=c.length;h<u;h++){let d=c[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let c=Oi[e];if(c===void 0)throw this.manager.itemError(e),l;delete Oi[e];for(let h=0,u=c.length;h<u;h++){let d=c[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},cp=class extends oi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Ki.get(e);if(n!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;let s=Ea("img");function o(){c(),Ki.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(h){c(),r&&r(h),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}},hp=class extends oi{constructor(e){super(e)}load(e,t,i,r){let a=this,n=new Fs,s=new Qi(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(a.withCredentials),s.load(e,function(o){let l;try{l=a.parse(o)}catch(c){if(r!==void 0)r(c);else{console.error(c);return}}l.image===void 0?l.data!==void 0&&(n.image.width=l.width,n.image.height=l.height,n.image.data=l.data):n.image=l.image,n.wrapS=l.wrapS===void 0?ni:l.wrapS,n.wrapT=l.wrapT===void 0?ni:l.wrapT,n.magFilter=l.magFilter===void 0?ui:l.magFilter,n.minFilter=l.minFilter===void 0?ui:l.minFilter,n.anisotropy=l.anisotropy===void 0?1:l.anisotropy,l.colorSpace!==void 0&&(n.colorSpace=l.colorSpace),l.flipY!==void 0&&(n.flipY=l.flipY),l.format!==void 0&&(n.format=l.format),l.type!==void 0&&(n.type=l.type),l.mipmaps!==void 0&&(n.mipmaps=l.mipmaps,n.minFilter=vr),l.mipmapCount===1&&(n.minFilter=ui),l.generateMipmaps!==void 0&&(n.generateMipmaps=l.generateMipmaps),n.needsUpdate=!0,t&&t(n,l)},i,r),n}},On=class extends oi{constructor(e){super(e)}load(e,t,i,r){let a=new Qt,n=new cp(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Aa=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},yc=class extends Aa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ys=new Ve,yl=new U,bl=new U,zs=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(yl),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ys),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},up=class extends zs{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Hs=class extends Aa{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new up}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ml=new Ve,_a=new U,bs=new U,dp=class extends zs{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),bs.copy(i.position),bs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bs),i.updateMatrixWorld(),r.makeTranslation(-_a.x,-_a.y,-_a.z),Ml.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml)}},Vs=class extends Aa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pp=class extends zs{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ra=class extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new pp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},mp=class extends Aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},er=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bc=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Ki.get(e);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader;let o=fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ki.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Ki.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Ki.add(e,o),a.manager.itemStart(e)}},fp="\\[\\]\\.:\\/",gp=RegExp("[\\[\\]\\.:\\/]","g"),Gs="[^\\[\\]\\.:\\/]",_p="[^"+fp.replace("\\.","")+"]",vp="((?:WC+[\\/:])*)".replace("WC",Gs),xp="(WCOD+)?".replace("WCOD",_p),yp="(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC",Gs),bp="\\.(WC+)(?:\\[(.+)\\])?".replace("WC",Gs),Mp=RegExp("^"+vp+xp+yp+bp+"$"),Sp=["material","materials","bones","map"],Ep=class{constructor(e,t,i){let r=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class Xr{constructor(t,i,r){this.path=i,this.parsedPath=r||Xr.parseTrackName(i),this.node=Xr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Xr.Composite(t,i,r):new Xr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(t){let i=Mp.exec(t);if(i===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Sp.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Xr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate):o=this.Versioning.NeedsUpdate;let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Ep,Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray],Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sl=new Ve,js=class{constructor(e,t,i=0,r=1/0){this.ray=new xr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sl),this}intersectObject(e,t=!0,i=[]){return ws(e,this,i,t),i.sort(El),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ws(e[r],this,i,t);return i.sort(El),i}};function El(e,t){return e.distance-t.distance}function ws(e,t,i,r){if(e.layers.test(t.layers)&&e.raycast(t,i),r===!0){let a=e.children;for(let n=0,s=a.length;n<s;n++)ws(a[n],t,i,!0)}}var Ws=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");var Xs=class extends oi{constructor(e){super(e)}load(e,t,i,r){let a=this,n=new Qi(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(s){try{t(a.parse(s))}catch(o){r?r(o):console.error(o),a.manager.itemError(e)}},i,r)}parse(e){function t(l){let c=new DataView(l);if(84+c.getUint32(80,!0)*50===c.byteLength)return!0;let h=[115,111,108,105,100];for(let u=0;u<5;u++)if(i(h,c,u))return!1;return!0}function i(l,c,h){for(let u=0,d=l.length;u<d;u++)if(l[u]!==c.getUint8(h+u))return!1;return!0}function r(l){let c=new DataView(l),h=c.getUint32(80,!0),u,d,m,v=!1,g,f,p,y,R;for(let O=0;O<70;O++)c.getUint32(O,!1)==1129270351&&c.getUint8(O+4)==82&&c.getUint8(O+5)==61&&(v=!0,g=new Float32Array(h*3*3),f=c.getUint8(O+6)/255,p=c.getUint8(O+7)/255,y=c.getUint8(O+8)/255,R=c.getUint8(O+9)/255);let E=new Vt,B=new Float32Array(h*3*3),L=new Float32Array(h*3*3),P=new Pe;for(let O=0;O<h;O++){let b=84+O*50,M=c.getFloat32(b,!0),F=c.getFloat32(b+4,!0),H=c.getFloat32(b+8,!0);if(v){let k=c.getUint16(b+48,!0);k&32768?(u=f,d=p,m=y):(u=(k&31)/31,d=(k>>5&31)/31,m=(k>>10&31)/31)}for(let k=1;k<=3;k++){let q=b+k*12,z=O*3*3+(k-1)*3;B[z]=c.getFloat32(q,!0),B[z+1]=c.getFloat32(q+4,!0),B[z+2]=c.getFloat32(q+8,!0),L[z]=M,L[z+1]=F,L[z+2]=H,v&&(P.set(u,d,m).convertSRGBToLinear(),g[z]=P.r,g[z+1]=P.g,g[z+2]=P.b)}}return E.setAttribute("position",new It(B,3)),E.setAttribute("normal",new It(L,3)),v&&(E.setAttribute("color",new It(g,3)),E.hasColors=!0,E.alpha=R),E}function a(l){let c=new Vt,h=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/,m=0,v=RegExp("vertex[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)","g"),g=RegExp("normal[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)","g"),f=[],p=[],y=[],R=new U,E,B=0,L=0,P=0;for(;(E=h.exec(l))!==null;){L=P;let O=E[0],b=(E=d.exec(O))===null?"":E[1];for(y.push(b);(E=u.exec(O))!==null;){let H=0,k=0,q=E[0];for(;(E=g.exec(q))!==null;)R.x=parseFloat(E[1]),R.y=parseFloat(E[2]),R.z=parseFloat(E[3]),k++;for(;(E=v.exec(q))!==null;)f.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),p.push(R.x,R.y,R.z),H++,P++;k!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),H!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}let M=L,F=P-L;c.userData.groupNames=y,c.addGroup(M,F,B),B++}return c.setAttribute("position",new ut(f,3)),c.setAttribute("normal",new ut(p,3)),c}function n(l){return typeof l=="string"?l:new TextDecoder().decode(l)}function s(l){if(typeof l=="string"){let c=new Uint8Array(l.length);for(let h=0;h<l.length;h++)c[h]=l.charCodeAt(h)&255;return c.buffer||c}else return l}let o=s(e);return t(o)?r(o):a(n(e))}},Tl=class extends hp{constructor(e){super(e)}parse(e){function t(z){switch(z.image_type){case u:case v:if(z.colormap_length>256||z.colormap_size!==24||z.colormap_type!==1)throw Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case m:case g:case f:if(z.colormap_type)throw Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw Error("THREE.TGALoader: No data.");default:throw Error("THREE.TGALoader: Invalid type "+z.image_type)}if(z.width<=0||z.height<=0)throw Error("THREE.TGALoader: Invalid image size.");if(z.pixel_size!==8&&z.pixel_size!==16&&z.pixel_size!==24&&z.pixel_size!==32)throw Error("THREE.TGALoader: Invalid pixel size "+z.pixel_size)}function i(z,ie,de,j,ae){let ne,Ee,fe=de.pixel_size>>3,G=de.width*de.height*fe;if(ie&&(Ee=ae.subarray(j,j+=de.colormap_length*(de.colormap_size>>3))),z){ne=new Uint8Array(G);let J,ee,oe,ue=0,ke=new Uint8Array(fe);for(;ue<G;)if(J=ae[j++],ee=(J&127)+1,J&128){for(oe=0;oe<fe;++oe)ke[oe]=ae[j++];for(oe=0;oe<ee;++oe)ne.set(ke,ue+oe*fe);ue+=fe*ee}else{for(ee*=fe,oe=0;oe<ee;++oe)ne[ue+oe]=ae[j++];ue+=ee}}else ne=ae.subarray(j,j+=ie?de.width*de.height:G);return{pixel_data:ne,palettes:Ee}}function r(z,ie,de,j,ae,ne,Ee,fe,G){let J=G,ee,oe=0,ue,ke,X=b.width;for(ke=ie;ke!==j;ke+=de)for(ue=ae;ue!==Ee;ue+=ne,oe++)ee=fe[oe],z[(ue+X*ke)*4+3]=255,z[(ue+X*ke)*4+2]=J[ee*3+0],z[(ue+X*ke)*4+1]=J[ee*3+1],z[(ue+X*ke)*4+0]=J[ee*3+2];return z}function a(z,ie,de,j,ae,ne,Ee,fe){let G,J=0,ee,oe,ue=b.width;for(oe=ie;oe!==j;oe+=de)for(ee=ae;ee!==Ee;ee+=ne,J+=2)G=fe[J+0]+(fe[J+1]<<8),z[(ee+ue*oe)*4+0]=(G&31744)>>7,z[(ee+ue*oe)*4+1]=(G&992)>>2,z[(ee+ue*oe)*4+2]=(G&31)<<3,z[(ee+ue*oe)*4+3]=G&32768?0:255;return z}function n(z,ie,de,j,ae,ne,Ee,fe){let G=0,J,ee,oe=b.width;for(ee=ie;ee!==j;ee+=de)for(J=ae;J!==Ee;J+=ne,G+=3)z[(J+oe*ee)*4+3]=255,z[(J+oe*ee)*4+2]=fe[G+0],z[(J+oe*ee)*4+1]=fe[G+1],z[(J+oe*ee)*4+0]=fe[G+2];return z}function s(z,ie,de,j,ae,ne,Ee,fe){let G=0,J,ee,oe=b.width;for(ee=ie;ee!==j;ee+=de)for(J=ae;J!==Ee;J+=ne,G+=4)z[(J+oe*ee)*4+2]=fe[G+0],z[(J+oe*ee)*4+1]=fe[G+1],z[(J+oe*ee)*4+0]=fe[G+2],z[(J+oe*ee)*4+3]=fe[G+3];return z}function o(z,ie,de,j,ae,ne,Ee,fe){let G,J=0,ee,oe,ue=b.width;for(oe=ie;oe!==j;oe+=de)for(ee=ae;ee!==Ee;ee+=ne,J++)G=fe[J],z[(ee+ue*oe)*4+0]=G,z[(ee+ue*oe)*4+1]=G,z[(ee+ue*oe)*4+2]=G,z[(ee+ue*oe)*4+3]=255;return z}function l(z,ie,de,j,ae,ne,Ee,fe){let G=0,J,ee,oe=b.width;for(ee=ie;ee!==j;ee+=de)for(J=ae;J!==Ee;J+=ne,G+=2)z[(J+oe*ee)*4+0]=fe[G+0],z[(J+oe*ee)*4+1]=fe[G+0],z[(J+oe*ee)*4+2]=fe[G+0],z[(J+oe*ee)*4+3]=fe[G+1];return z}function c(z,ie,de,j,ae){let ne,Ee,fe,G,J,ee;switch((b.flags&p)>>y){default:case B:ne=0,fe=1,J=ie,Ee=0,G=1,ee=de;break;case R:ne=0,fe=1,J=ie,Ee=de-1,G=-1,ee=-1;break;case L:ne=ie-1,fe=-1,J=-1,Ee=0,G=1,ee=de;break;case E:ne=ie-1,fe=-1,J=-1,Ee=de-1,G=-1,ee=-1;break}if(H)switch(b.pixel_size){case 8:o(z,Ee,G,ee,ne,fe,J,j);break;case 16:l(z,Ee,G,ee,ne,fe,J,j);break;default:throw Error("THREE.TGALoader: Format not supported.")}else switch(b.pixel_size){case 8:r(z,Ee,G,ee,ne,fe,J,j,ae);break;case 16:a(z,Ee,G,ee,ne,fe,J,j);break;case 24:n(z,Ee,G,ee,ne,fe,J,j);break;case 32:s(z,Ee,G,ee,ne,fe,J,j);break;default:throw Error("THREE.TGALoader: Format not supported.")}return z}let h=0,u=1,d=2,m=3,v=9,g=10,f=11,p=48,y=4,R=0,E=1,B=2,L=3;if(e.length<19)throw Error("THREE.TGALoader: Not enough data to contain header.");let P=0,O=new Uint8Array(e),b={id_length:O[P++],colormap_type:O[P++],image_type:O[P++],colormap_index:O[P++]|O[P++]<<8,colormap_length:O[P++]|O[P++]<<8,colormap_size:O[P++],origin:[O[P++]|O[P++]<<8,O[P++]|O[P++]<<8],width:O[P++]|O[P++]<<8,height:O[P++]|O[P++]<<8,pixel_size:O[P++],flags:O[P++]};if(t(b),b.id_length+P>e.length)throw Error("THREE.TGALoader: No data.");P+=b.id_length;let M=!1,F=!1,H=!1;switch(b.image_type){case 9:M=!0,F=!0;break;case 1:F=!0;break;case 10:M=!0;break;case 2:break;case 11:M=!0,H=!0;break;case 3:H=!0;break}let k=new Uint8Array(b.width*b.height*4),q=i(M,F,b,P,O);return c(k,b.width,b.height,q.pixel_data,q.palettes),{data:k,width:b.width,height:b.height,flipY:!0,generateMipmaps:!0,minFilter:vr}}},qs=class extends oi{load(e,t,i,r){let a=this,n=a.path===""?er.extractUrlBase(e):a.path,s=new Qi(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(o){try{t(a.parse(o,n))}catch(l){r?r(l):console.error(l),a.manager.itemError(e)}},i,r)}parse(e,t){function i(x,_){let w=[],S=x.childNodes;for(let A=0,$=S.length;A<$;A++){let re=S[A];re.nodeName===_&&w.push(re)}return w}function r(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),w=Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=_[S];return w}function a(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),w=Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=parseFloat(_[S]);return w}function n(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),w=Array(_.length);for(let S=0,A=_.length;S<A;S++)w[S]=parseInt(_[S]);return w}function s(x){return x.substring(1)}function o(){return"three_default_"+Kc++}function l(x){return Object.keys(x).length===0}function c(x){return{unit:h(i(x,"unit")[0]),upAxis:u(i(x,"up_axis")[0])}}function h(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function u(x){return x===void 0?"Y_UP":x.textContent}function d(x,_,w,S){let A=i(x,_)[0];if(A!==void 0){let $=i(A,w);for(let re=0;re<$.length;re++)S($[re])}}function m(x,_){for(let w in x){let S=x[w];S.build=_(x[w])}}function v(x,_){return x.build===void 0&&(x.build=_(x)),x.build}function g(x){let _={sources:{},samplers:{},channels:{}},w=!1;for(let S=0,A=x.childNodes.length;S<A;S++){let $=x.childNodes[S];if($.nodeType!==1)continue;let re;switch($.nodeName){case"source":re=$.getAttribute("id"),_.sources[re]=Q($);break;case"sampler":re=$.getAttribute("id"),_.samplers[re]=f($);break;case"channel":re=$.getAttribute("target"),_.channels[re]=p($);break;case"animation":g($),w=!0;break;default:console.log($)}}w===!1&&(je.animations[x.getAttribute("id")||$t.generateUUID()]=_)}function f(x){let _={inputs:{}};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1&&A.nodeName==="input"){let $=s(A.getAttribute("source")),re=A.getAttribute("semantic");_.inputs[re]=$}}return _}function p(x){let _={},w=x.getAttribute("target").split("/"),S=w.shift(),A=w.shift(),$=A.indexOf("(")!==-1,re=A.indexOf(".")!==-1;if(re)w=A.split("."),A=w.shift(),_.member=w.shift();else if($){let Se=A.split("(");A=Se.shift();for(let ve=0;ve<Se.length;ve++)Se[ve]=parseInt(Se[ve].replace(/\)/,""));_.indices=Se}return _.id=S,_.sid=A,_.arraySyntax=$,_.memberSyntax=re,_.sampler=s(x.getAttribute("source")),_}function y(x){let _=[],w=x.channels,S=x.samplers,A=x.sources;for(let $ in w)if(w.hasOwnProperty($)){let re=w[$],Se=S[re.sampler],ve=Se.inputs.INPUT,Te=Se.inputs.OUTPUT,Ie=A[ve],le=A[Te];b(E(re,Ie,le),_)}return _}function R(x){return v(je.animations[x],y)}function E(x,_,w){let S=je.nodes[x.id],A=jt(S.id),$=S.transforms[x.sid],re=S.matrix.clone().transpose(),Se,ve,Te,Ie,le,Ae,Le={};switch($){case"matrix":for(Te=0,Ie=_.array.length;Te<Ie;Te++)if(Se=_.array[Te],ve=Te*w.stride,Le[Se]===void 0&&(Le[Se]={}),x.arraySyntax===!0){let ze=w.array[ve],St=x.indices[0]+4*x.indices[1];Le[Se][St]=ze}else for(le=0,Ae=w.stride;le<Ae;le++)Le[Se][le]=w.array[ve+le];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}let Ye=B(Le,re);return{name:A.uuid,keyframes:Ye}}function B(x,_){let w=[];for(let A in x)w.push({time:parseFloat(A),value:x[A]});w.sort(S);for(let A=0;A<16;A++)M(w,A,_.elements[A]);return w;function S(A,$){return A.time-$.time}}let L=new U,P=new U,O=new ei;function b(x,_){let w=x.keyframes,S=x.name,A=[],$=[],re=[],Se=[];for(let ve=0,Te=w.length;ve<Te;ve++){let Ie=w[ve],le=Ie.time,Ae=Ie.value;Re.fromArray(Ae).transpose(),Re.decompose(L,O,P),A.push(le),$.push(L.x,L.y,L.z),re.push(O.x,O.y,O.z,O.w),Se.push(P.x,P.y,P.z)}return $.length>0&&_.push(new zi(S+".position",A,$)),re.length>0&&_.push(new ki(S+".quaternion",A,re)),Se.length>0&&_.push(new zi(S+".scale",A,Se)),_}function M(x,_,w){let S,A=!0,$,re;for($=0,re=x.length;$<re;$++)S=x[$],S.value[_]===void 0?S.value[_]=null:A=!1;if(A===!0)for($=0,re=x.length;$<re;$++)S=x[$],S.value[_]=w;else F(x,_)}function F(x,_){let w,S;for(let A=0,$=x.length;A<$;A++){let re=x[A];if(re.value[_]===null){if(w=H(x,A,_),S=k(x,A,_),w===null){re.value[_]=S.value[_];continue}if(S===null){re.value[_]=w.value[_];continue}q(re,w,S,_)}}}function H(x,_,w){for(;_>=0;){let S=x[_];if(S.value[w]!==null)return S;_--}return null}function k(x,_,w){for(;_<x.length;){let S=x[_];if(S.value[w]!==null)return S;_++}return null}function q(x,_,w,S){if(w.time-_.time===0){x.value[S]=_.value[S];return}x.value[S]=(x.time-_.time)*(w.value[S]-_.value[S])/(w.time-_.time)+_.value[S]}function z(x){let _={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="instance_animation"&&_.animations.push(s(A.getAttribute("url")))}je.clips[x.getAttribute("id")]=_}function ie(x){let _=[],w=x.name,S=x.end-x.start||-1,A=x.animations;for(let $=0,re=A.length;$<re;$++){let Se=R(A[$]);for(let ve=0,Te=Se.length;ve<Te;ve++)_.push(Se[ve])}return new Cn(w,S,_)}function de(x){return v(je.clips[x],ie)}function j(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"skin":_.id=s(A.getAttribute("source")),_.skin=ae(A);break;case"morph":_.id=s(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[x.getAttribute("id")]=_}function ae(x){let _={sources:{}};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=a(A.textContent);break;case"source":let $=A.getAttribute("id");_.sources[$]=Q(A);break;case"joints":_.joints=ne(A);break;case"vertex_weights":_.vertexWeights=Ee(A);break}}return _}function ne(x){let _={inputs:{}};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1&&A.nodeName==="input"){let $=A.getAttribute("semantic"),re=s(A.getAttribute("source"));_.inputs[$]=re}}return _}function Ee(x){let _={inputs:{}};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let $=A.getAttribute("semantic"),re=s(A.getAttribute("source")),Se=parseInt(A.getAttribute("offset"));_.inputs[$]={id:re,offset:Se};break;case"vcount":_.vcount=n(A.textContent);break;case"v":_.v=n(A.textContent);break}}return _}function fe(x){let _={id:x.id},w=je.geometries[_.id];return x.skin!==void 0&&(_.skin=G(x.skin),w.sources.skinIndices=_.skin.indices,w.sources.skinWeights=_.skin.weights),_}function G(x){let _={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},w=x.sources,S=x.vertexWeights,A=S.vcount,$=S.v,re=S.inputs.JOINT.offset,Se=S.inputs.WEIGHT.offset,ve=x.sources[x.joints.inputs.JOINT],Te=x.sources[x.joints.inputs.INV_BIND_MATRIX],Ie=w[S.inputs.WEIGHT.id].array,le=0,Ae,Le,Ye;for(Ae=0,Ye=A.length;Ae<Ye;Ae++){let St=A[Ae],xt=[];for(Le=0;Le<St;Le++){let pt=$[le+re],mt=Ie[$[le+Se]];xt.push({index:pt,weight:mt}),le+=2}for(xt.sort(ze),Le=0;Le<4;Le++){let pt=xt[Le];pt===void 0?(_.indices.array.push(0),_.weights.array.push(0)):(_.indices.array.push(pt.index),_.weights.array.push(pt.weight))}}for(x.bindShapeMatrix?_.bindMatrix=new Ve().fromArray(x.bindShapeMatrix).transpose():_.bindMatrix=new Ve().identity(),Ae=0,Ye=ve.array.length;Ae<Ye;Ae++){let St=ve.array[Ae],xt=new Ve().fromArray(Te.array,Ae*Te.stride).transpose();_.joints.push({name:St,boneInverse:xt})}return _;function ze(St,xt){return xt.weight-St.weight}}function J(x){return v(je.controllers[x],fe)}function ee(x){let _={init_from:i(x,"init_from")[0].textContent};je.images[x.getAttribute("id")]=_}function oe(x){return x.build===void 0?x.init_from:x.build}function ue(x){let _=je.images[x];return _===void 0?(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null):v(_,oe)}function ke(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="profile_COMMON"&&(_.profile=X(A))}je.effects[x.getAttribute("id")]=_}function X(x){let _={surfaces:{},samplers:{}};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"newparam":Qe(A,_);break;case"technique":_.technique=Ge(A);break;case"extra":_.extra=I(A);break}}return _}function Qe(x,_){let w=x.getAttribute("sid");for(let S=0,A=x.childNodes.length;S<A;S++){let $=x.childNodes[S];if($.nodeType===1)switch($.nodeName){case"surface":_.surfaces[w]=He($);break;case"sampler2D":_.samplers[w]=lt($);break}}}function He(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="init_from"&&(_.init_from=A.textContent)}return _}function lt(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="source"&&(_.source=A.textContent)}return _}function Ge(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=A.nodeName,_.parameters=ct(A);break;case"extra":_.extra=I(A);break}}return _}function ct(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[A.nodeName]=Be(A);break;case"transparent":_[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:Be(A)};break}}return _}function Be(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":_[A.nodeName]=a(A.textContent);break;case"float":_[A.nodeName]=parseFloat(A.textContent);break;case"texture":_[A.nodeName]={id:A.getAttribute("texture"),extra:Je(A)};break}}return _}function Je(x){let _={technique:{}};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="extra"&&At(A,_)}return _}function At(x,_){for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="technique"&&yt(A,_)}}function yt(x,_){for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?_.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?_.technique[A.nodeName]=0:_.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=K(A);break}}}function I(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="technique"&&(_.technique=T(A))}return _}function T(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"double_sided":_[A.nodeName]=parseInt(A.textContent);break;case"bump":_[A.nodeName]=K(A);break}}return _}function K(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="texture"&&(_[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Je(A)})}return _}function se(x){return x}function pe(x){return v(je.effects[x],se)}function ce(x){let _={name:x.getAttribute("name")};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="instance_effect"&&(_.url=s(A.getAttribute("url")))}je.materials[x.getAttribute("id")]=_}function Oe(x){let _,w=x.slice((x.lastIndexOf(".")-1>>>0)+2);return(w=w.toLowerCase(),w)==="tga"?_=Gn:_=co,_}function me(x){let _=pe(x.url),w=_.profile.technique,S;switch(w.type){case"phong":case"blinn":S=new Ai;break;case"lambert":S=new Qd;break;default:S=new pi;break}S.name=x.name||"";function A(ve,Te=null){let Ie=_.profile.samplers[ve.id],le=null;if(Ie!==void 0){let Ae=_.profile.surfaces[Ie.source];le=ue(Ae.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),le=ue(ve.id);if(le!==null){let Ae=Oe(le);if(Ae!==void 0){let Le=Ae.load(le),Ye=ve.extra;if(Ye!==void 0&&Ye.technique!==void 0&&l(Ye.technique)===!1){let ze=Ye.technique;Le.wrapS=ze.wrapU?Fi:ni,Le.wrapT=ze.wrapV?Fi:ni,Le.offset.set(ze.offsetU||0,ze.offsetV||0),Le.repeat.set(ze.repeatU||1,ze.repeatV||1)}else Le.wrapS=Fi,Le.wrapT=Fi;return Te!==null&&(Le.colorSpace=Te),Le}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",le),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ve.id),null}let $=w.parameters;for(let ve in $){let Te=$[ve];switch(ve){case"diffuse":Te.color&&S.color.fromArray(Te.color),Te.texture&&(S.map=A(Te.texture,Ct));break;case"specular":Te.color&&S.specular&&S.specular.fromArray(Te.color),Te.texture&&(S.specularMap=A(Te.texture));break;case"bump":Te.texture&&(S.normalMap=A(Te.texture));break;case"ambient":Te.texture&&(S.lightMap=A(Te.texture,Ct));break;case"shininess":Te.float&&S.shininess&&(S.shininess=Te.float);break;case"emission":Te.color&&S.emissive&&S.emissive.fromArray(Te.color),Te.texture&&(S.emissiveMap=A(Te.texture,Ct));break}}S.color.convertSRGBToLinear(),S.specular&&S.specular.convertSRGBToLinear(),S.emissive&&S.emissive.convertSRGBToLinear();let re=$.transparent,Se=$.transparency;if(Se===void 0&&re&&(Se={float:1}),re===void 0&&Se&&(re={opaque:"A_ONE",data:{color:[1,1,1,1]}}),re&&Se)if(re.data.texture)S.transparent=!0;else{let ve=re.data.color;switch(re.opaque){case"A_ONE":S.opacity=ve[3]*Se.float;break;case"RGB_ZERO":S.opacity=1-ve[0]*Se.float;break;case"A_ZERO":S.opacity=1-ve[3]*Se.float;break;case"RGB_ONE":S.opacity=ve[0]*Se.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',re.opaque)}S.opacity<1&&(S.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){let ve=w.extra.technique;for(let Te in ve){let Ie=ve[Te];switch(Te){case"double_sided":S.side=Ie===1?2:0;break;case"bump":S.normalMap=A(Ie.texture),S.normalScale=new De(1,1);break}}}return S}function ye(x){return v(je.materials[x],me)}function Xe(x){let _={name:x.getAttribute("name")};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="optics"&&(_.optics=Me(A))}je.cameras[x.getAttribute("id")]=_}function Me(x){for(let _=0;_<x.childNodes.length;_++){let w=x.childNodes[_];if(w.nodeName==="technique_common")return Fe(w)}return{}}function Fe(x){let _={};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];switch(S.nodeName){case"perspective":case"orthographic":_.technique=S.nodeName,_.parameters=nt(S);break}}return _}function nt(x){let _={};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];switch(S.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[S.nodeName]=parseFloat(S.textContent);break}}return _}function Ce(x){let _;switch(x.optics.technique){case"perspective":_=new Nt(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let w=x.optics.parameters.ymag,S=x.optics.parameters.xmag,A=x.optics.parameters.aspect_ratio;S=S===void 0?w*A:S,w=w===void 0?S/A:w,S*=.5,w*=.5,_=new Ta(-S,S,w,-w,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:_=new Nt;break}return _.name=x.name||"",_}function we(x){let _=je.cameras[x];return _===void 0?(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null):v(_,Ce)}function $e(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];A.nodeType===1&&A.nodeName==="technique_common"&&(_=Ze(A))}je.lights[x.getAttribute("id")]=_}function Ze(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=A.nodeName,_.parameters=N(A)}}return _}function N(x){let _={};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":let $=a(A.textContent);_.color=new Pe().fromArray($).convertSRGBToLinear();break;case"falloff_angle":_.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let re=parseFloat(A.textContent);_.distance=re?Math.sqrt(1/re):0;break}}return _}function he(x){let _;switch(x.technique){case"directional":_=new Ra;break;case"point":_=new Vs;break;case"spot":_=new Hs;break;case"ambient":_=new mp;break}return x.parameters.color&&_.color.copy(x.parameters.color),x.parameters.distance&&(_.distance=x.parameters.distance),_}function D(x){let _=je.lights[x];return _===void 0?(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null):v(_,he)}function te(x){let _={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=i(x,"mesh")[0];if(w!==void 0){for(let S=0;S<w.childNodes.length;S++){let A=w.childNodes[S];if(A.nodeType!==1)continue;let $=A.getAttribute("id");switch(A.nodeName){case"source":_.sources[$]=Q(A);break;case"vertices":_.vertices=xe(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(ge(A));break;default:console.log(A)}}je.geometries[x.getAttribute("id")]=_}}function Q(x){let _={array:[],stride:3};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"float_array":_.array=a(S.textContent);break;case"Name_array":_.array=r(S.textContent);break;case"technique_common":let A=i(S,"accessor")[0];A!==void 0&&(_.stride=parseInt(A.getAttribute("stride")));break}}return _}function xe(x){let _={};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];S.nodeType===1&&(_[S.getAttribute("semantic")]=s(S.getAttribute("source")))}return _}function ge(x){let _={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,S=x.childNodes.length;w<S;w++){let A=x.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let $=s(A.getAttribute("source")),re=A.getAttribute("semantic"),Se=parseInt(A.getAttribute("offset")),ve=parseInt(A.getAttribute("set")),Te=ve>0?re+ve:re;_.inputs[Te]={id:$,offset:Se},_.stride=Math.max(_.stride,Se+1),re==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=n(A.textContent);break;case"p":_.p=n(A.textContent);break}}return _}function ft(x){let _={};for(let w=0;w<x.length;w++){let S=x[w];_[S.type]===void 0&&(_[S.type]=[]),_[S.type].push(S)}return _}function dt(x){let _=0;for(let w=0,S=x.length;w<S;w++)x[w].hasUV===!0&&_++;_>0&&_<x.length&&(x.uvsNeedsFix=!0)}function ot(x){let _={},w=x.sources,S=x.vertices,A=x.primitives;if(A.length===0)return{};let $=ft(A);for(let re in $){let Se=$[re];dt(Se),_[re]=gt(Se,w,S)}return _}function gt(x,_,w){let S={},A={array:[],stride:0},$={array:[],stride:0},re={array:[],stride:0},Se={array:[],stride:0},ve={array:[],stride:0},Te={array:[],stride:4},Ie={array:[],stride:4},le=new Vt,Ae=[],Le=0;for(let Ye=0;Ye<x.length;Ye++){let ze=x[Ye],St=ze.inputs,xt=0;switch(ze.type){case"lines":case"linestrips":xt=ze.count*2;break;case"triangles":xt=ze.count*3;break;case"polylist":for(let pt=0;pt<ze.count;pt++){let mt=ze.vcount[pt];switch(mt){case 3:xt+=3;break;case 4:xt+=6;break;default:xt+=(mt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ze.type)}le.addGroup(Le,xt,Ye),Le+=xt,ze.material&&Ae.push(ze.material);for(let pt in St){let mt=St[pt];switch(pt){case"VERTEX":for(let ca in w){let Kt=w[ca];switch(ca){case"POSITION":let Jc=A.array.length;if(qe(ze,_[Kt],mt.offset,A.array),A.stride=_[Kt].stride,_.skinWeights&&_.skinIndices&&(qe(ze,_.skinIndices,mt.offset,Te.array),qe(ze,_.skinWeights,mt.offset,Ie.array)),ze.hasUV===!1&&x.uvsNeedsFix===!0){let Zc=(A.array.length-Jc)/A.stride;for(let uo=0;uo<Zc;uo++)re.array.push(0,0)}break;case"NORMAL":qe(ze,_[Kt],mt.offset,$.array),$.stride=_[Kt].stride;break;case"COLOR":qe(ze,_[Kt],mt.offset,ve.array),ve.stride=_[Kt].stride;break;case"TEXCOORD":qe(ze,_[Kt],mt.offset,re.array),re.stride=_[Kt].stride;break;case"TEXCOORD1":qe(ze,_[Kt],mt.offset,Se.array),re.stride=_[Kt].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ca)}}break;case"NORMAL":qe(ze,_[mt.id],mt.offset,$.array),$.stride=_[mt.id].stride;break;case"COLOR":qe(ze,_[mt.id],mt.offset,ve.array,!0),ve.stride=_[mt.id].stride;break;case"TEXCOORD":qe(ze,_[mt.id],mt.offset,re.array),re.stride=_[mt.id].stride;break;case"TEXCOORD1":qe(ze,_[mt.id],mt.offset,Se.array),Se.stride=_[mt.id].stride;break}}}return A.array.length>0&&le.setAttribute("position",new ut(A.array,A.stride)),$.array.length>0&&le.setAttribute("normal",new ut($.array,$.stride)),ve.array.length>0&&le.setAttribute("color",new ut(ve.array,ve.stride)),re.array.length>0&&le.setAttribute("uv",new ut(re.array,re.stride)),Se.array.length>0&&le.setAttribute("uv1",new ut(Se.array,Se.stride)),Te.array.length>0&&le.setAttribute("skinIndex",new ut(Te.array,Te.stride)),Ie.array.length>0&&le.setAttribute("skinWeight",new ut(Ie.array,Ie.stride)),S.data=le,S.type=x[0].type,S.materialKeys=Ae,S}function qe(x,_,w,S,A=!1){let $=x.p,re=x.stride,Se=x.vcount;function ve(le){let Ae=$[le+w]*Ie,Le=Ae+Ie;for(;Ae<Le;Ae++)S.push(Te[Ae]);if(A){let Ye=S.length-Ie-1;Fa.setRGB(S[Ye+0],S[Ye+1],S[Ye+2]).convertSRGBToLinear(),S[Ye+0]=Fa.r,S[Ye+1]=Fa.g,S[Ye+2]=Fa.b}}let Te=_.array,Ie=_.stride;if(x.vcount!==void 0){let le=0;for(let Ae=0,Le=Se.length;Ae<Le;Ae++){let Ye=Se[Ae];if(Ye===4){let ze=le+re*0,St=le+re*1,xt=le+re*2,pt=le+re*3;ve(ze),ve(St),ve(pt),ve(St),ve(xt),ve(pt)}else if(Ye===3){let ze=le+re*0,St=le+re*1,xt=le+re*2;ve(ze),ve(St),ve(xt)}else if(Ye>4)for(let ze=1,St=Ye-2;ze<=St;ze++){let xt=le+re*0,pt=le+re*ze,mt=le+re*(ze+1);ve(xt),ve(pt),ve(mt)}le+=re*Ye}}else for(let le=0,Ae=$.length;le<Ae;le+=re)ve(le)}function vt(x){return v(je.geometries[x],ot)}function Ot(x){let _={name:x.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];S.nodeType===1&&S.nodeName==="technique_common"&&Mr(S,_)}je.kinematicsModels[x.getAttribute("id")]=_}function Ci(x){return x.build===void 0?x:x.build}function rr(x){return v(je.kinematicsModels[x],Ci)}function Mr(x,_){for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"joint":_.joints[S.getAttribute("sid")]=Ia(S);break;case"link":_.links.push(na(S));break}}}function Ia(x){let _;for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"prismatic":case"revolute":_=Sr(S);break}}return _}function Sr(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"axis":let A=a(S.textContent);_.axis.fromArray(A);break;case"limits":let $=S.getElementsByTagName("max")[0],re=S.getElementsByTagName("min")[0];_.limits.max=parseFloat($.textContent),_.limits.min=parseFloat(re.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function na(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"attachment_full":_.attachments.push(Ua(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Da(S));break}}return _}function Ua(x){let _={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"link":_.links.push(na(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Da(S));break}}return _}function Da(x){let _={type:x.nodeName},w=a(x.textContent);switch(_.type){case"matrix":_.obj=new Ve,_.obj.fromArray(w).transpose();break;case"translate":_.obj=new U,_.obj.fromArray(w);break;case"rotate":_.obj=new U,_.obj.fromArray(w),_.angle=$t.degToRad(w[3]);break}return _}function Hn(x){let _={name:x.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];S.nodeType===1&&S.nodeName==="rigid_body"&&(_.rigidBodies[S.getAttribute("name")]={},Vn(S,_.rigidBodies[S.getAttribute("name")]))}je.physicsModels[x.getAttribute("id")]=_}function Vn(x,_){for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];S.nodeType===1&&S.nodeName==="technique_common"&&C(S,_)}}function C(x,_){for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1)switch(S.nodeName){case"inertia":_.inertia=a(S.textContent);break;case"mass":_.mass=a(S.textContent)[0];break}}}function V(x){let _={bindJointAxis:[]};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];S.nodeType===1&&S.nodeName==="bind_joint_axis"&&_.bindJointAxis.push(Z(S))}je.kinematicsScenes[s(x.getAttribute("url"))]=_}function Z(x){let _={target:x.getAttribute("target").split("/").pop()};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType===1&&S.nodeName==="axis"){_.axis=S.getElementsByTagName("param")[0].textContent;let A=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=A.substring(0,A.length-1)}}return _}function Y(x){return x.build===void 0?x:x.build}function W(x){return v(je.kinematicsScenes[x],Y)}function _e(){let x=Object.keys(je.kinematicsModels)[0],_=Object.keys(je.kinematicsScenes)[0],w=Object.keys(je.visualScenes)[0];if(x===void 0||_===void 0)return;let S=rr(x),A=W(_),$=Tr(w),re=A.bindJointAxis,Se={};for(let Ie=0,le=re.length;Ie<le;Ie++){let Ae=re[Ie],Le=Rt.querySelector('[sid="'+Ae.target+'"]');if(Le){let Ye=Le.parentElement;ve(Ae.jointIndex,Ye)}}function ve(Ie,le){let Ae=le.getAttribute("name"),Le=S.joints[Ie];$.traverse(function(Ye){Ye.name===Ae&&(Se[Ie]={object:Ye,transforms:Ue(le),joint:Le,position:Le.zeroPosition})})}let Te=new Ve;ho={joints:S&&S.joints,getJointValue:function(Ie){let le=Se[Ie];if(le)return le.position;console.warn("THREE.ColladaLoader: Joint "+Ie+" doesn't exist.")},setJointValue:function(Ie,le){let Ae=Se[Ie];if(Ae){let Le=Ae.joint;if(le>Le.limits.max||le<Le.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ie+" value "+le+" outside of limits (min: "+Le.limits.min+", max: "+Le.limits.max+").");else if(Le.static)console.warn("THREE.ColladaLoader: Joint "+Ie+" is static.");else{let Ye=Ae.object,ze=Le.axis,St=Ae.transforms;Re.identity();for(let xt=0;xt<St.length;xt++){let pt=St[xt];if(pt.sid&&pt.sid.indexOf(Ie)!==-1)switch(Le.type){case"revolute":Re.multiply(Te.makeRotationAxis(ze,$t.degToRad(le)));break;case"prismatic":Re.multiply(Te.makeTranslation(ze.x*le,ze.y*le,ze.z*le));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Le.type);break}else switch(pt.type){case"matrix":Re.multiply(pt.obj);break;case"translate":Re.multiply(Te.makeTranslation(pt.obj.x,pt.obj.y,pt.obj.z));break;case"scale":Re.scale(pt.obj);break;case"rotate":Re.multiply(Te.makeRotationAxis(pt.obj,pt.angle));break}}Ye.matrix.copy(Re),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Se[Ie].position=le}}else console.log("THREE.ColladaLoader: "+Ie+" does not exist.")}}}function Ue(x){let _=[],w=Rt.querySelector('[id="'+x.id+'"]');for(let S=0;S<w.childNodes.length;S++){let A=w.childNodes[S];if(A.nodeType!==1)continue;let $,re;switch(A.nodeName){case"matrix":$=a(A.textContent);let Se=new Ve().fromArray($).transpose();_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Se});break;case"translate":case"scale":$=a(A.textContent),re=new U().fromArray($),_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:re});break;case"rotate":$=a(A.textContent),re=new U().fromArray($);let ve=$t.degToRad($[3]);_.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:re,angle:ve});break}}return _}function Ne(x){let _=x.getElementsByTagName("node");for(let w=0;w<_.length;w++){let S=_[w];S.hasAttribute("id")===!1&&S.setAttribute("id",o())}}let Re=new Ve,We=new U;function tt(x){let _={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new Ve,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];if(S.nodeType!==1)continue;let A;switch(S.nodeName){case"node":_.nodes.push(S.getAttribute("id")),tt(S);break;case"instance_camera":_.instanceCameras.push(s(S.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(it(S));break;case"instance_light":_.instanceLights.push(s(S.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(it(S));break;case"instance_node":_.instanceNodes.push(s(S.getAttribute("url")));break;case"matrix":A=a(S.textContent),_.matrix.multiply(Re.fromArray(A).transpose()),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"translate":A=a(S.textContent),We.fromArray(A),_.matrix.multiply(Re.makeTranslation(We.x,We.y,We.z)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"rotate":A=a(S.textContent);let $=$t.degToRad(A[3]);_.matrix.multiply(Re.makeRotationAxis(We.fromArray(A),$)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"scale":A=a(S.textContent),_.matrix.scale(We.fromArray(A)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"extra":break;default:console.log(S)}}return Er(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):je.nodes[_.id]=_,_}function it(x){let _={id:s(x.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<x.childNodes.length;w++){let S=x.childNodes[w];switch(S.nodeName){case"bind_material":let A=S.getElementsByTagName("instance_material");for(let $=0;$<A.length;$++){let re=A[$],Se=re.getAttribute("symbol"),ve=re.getAttribute("target");_.materials[Se]=s(ve)}break;case"skeleton":_.skeletons.push(s(S.textContent));break;default:break}}return _}function Lt(x,_){let w=[],S=[],A,$,re;for(A=0;A<x.length;A++){let Te=x[A],Ie;if(Er(Te))Ie=jt(Te),Bt(Ie,_,w);else if(ar(Te)){let le=je.visualScenes[Te].children;for(let Ae=0;Ae<le.length;Ae++){let Le=le[Ae];Le.type==="JOINT"&&Bt(jt(Le.id),_,w)}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Te)}for(A=0;A<_.length;A++)for($=0;$<w.length;$++)if(re=w[$],re.bone.name===_[A].name){S[A]=re,re.processed=!0;break}for(A=0;A<w.length;A++)re=w[A],re.processed===!1&&(S.push(re),re.processed=!0);let Se=[],ve=[];for(A=0;A<S.length;A++)re=S[A],Se.push(re.bone),ve.push(re.boneInverse);return new ks(Se,ve)}function Bt(x,_,w){x.traverse(function(S){if(S.isBone===!0){let A;for(let $=0;$<_.length;$++){let re=_[$];if(re.name===S.name){A=re.boneInverse;break}}A===void 0&&(A=new Ve),w.push({bone:S,boneInverse:A,processed:!1})}})}function ti(x){let _=[],w=x.matrix,S=x.nodes,A=x.type,$=x.instanceCameras,re=x.instanceControllers,Se=x.instanceLights,ve=x.instanceGeometries,Te=x.instanceNodes;for(let le=0,Ae=S.length;le<Ae;le++)_.push(jt(S[le]));for(let le=0,Ae=$.length;le<Ae;le++){let Le=we($[le]);Le!==null&&_.push(Le.clone())}for(let le=0,Ae=re.length;le<Ae;le++){let Le=re[le],Ye=J(Le.id),ze=Ke(vt(Ye.id),Le.materials),St=Le.skeletons,xt=Ye.skin.joints,pt=Lt(St,xt);for(let mt=0,ca=ze.length;mt<ca;mt++){let Kt=ze[mt];Kt.isSkinnedMesh&&(Kt.bind(pt,Ye.skin.bindMatrix),Kt.normalizeSkinWeights()),_.push(Kt)}}for(let le=0,Ae=Se.length;le<Ae;le++){let Le=D(Se[le]);Le!==null&&_.push(Le.clone())}for(let le=0,Ae=ve.length;le<Ae;le++){let Le=ve[le],Ye=Ke(vt(Le.id),Le.materials);for(let ze=0,St=Ye.length;ze<St;ze++)_.push(Ye[ze])}for(let le=0,Ae=Te.length;le<Ae;le++)_.push(jt(Te[le]).clone());let Ie;if(S.length===0&&_.length===1)Ie=_[0];else{Ie=A==="JOINT"?new Un:new hi;for(let le=0;le<_.length;le++)Ie.add(_[le])}return Ie.name=A==="JOINT"?x.sid:x.name,Ie.matrix.copy(w),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie}let zt=new pi({name:oi.DEFAULT_MATERIAL_NAME,color:16711935});function bt(x,_){let w=[];for(let S=0,A=x.length;S<A;S++){let $=_[x[S]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[S]),w.push(zt)):w.push(ye($))}return w}function Ke(x,_){let w=[];for(let S in x){let A=x[S],$=bt(A.materialKeys,_);if($.length===0&&(S==="lines"||S==="linestrips"?$.push(new Bi):$.push(new Ai)),S==="lines"||S==="linestrips")for(let Te=0,Ie=$.length;Te<Ie;Te++){let le=$[Te];if(le.isMeshPhongMaterial===!0||le.isMeshLambertMaterial===!0){let Ae=new Bi;Ae.color.copy(le.color),Ae.opacity=le.opacity,Ae.transparent=le.transparent,$[Te]=Ae}}let re=A.data.attributes.skinIndex!==void 0,Se=$.length===1?$[0]:$,ve;switch(S){case"lines":ve=new Qr(A.data,Se);break;case"linestrips":ve=new wa(A.data,Se);break;case"triangles":case"polylist":ve=re?new Os(A.data,Se):new Tt(A.data,Se);break}w.push(ve)}return w}function Er(x){return je.nodes[x]!==void 0}function jt(x){return v(je.nodes[x],ti)}function Li(x){let _={name:x.getAttribute("name"),children:[]};Ne(x);let w=i(x,"node");for(let S=0;S<w.length;S++)_.children.push(tt(w[S]));je.visualScenes[x.getAttribute("id")]=_}function sa(x){let _=new hi;_.name=x.name;let w=x.children;for(let S=0;S<w.length;S++){let A=w[S];_.add(jt(A.id))}return _}function ar(x){return je.visualScenes[x]!==void 0}function Tr(x){return v(je.visualScenes[x],sa)}function Ft(x){let _=i(x,"instance_visual_scene")[0];return Tr(s(_.getAttribute("url")))}function Ti(){let x=je.clips;if(l(x)===!0){if(l(je.animations)===!1){let _=[];for(let w in je.animations){let S=R(w);for(let A=0,$=S.length;A<$;A++)_.push(S[A])}ka.push(new Cn("default",-1,_))}}else for(let _ in x)ka.push(de(_))}function oa(x){let _="",w=[x];for(;w.length;){let S=w.shift();S.nodeType===Node.TEXT_NODE?_+=S.textContent:(_+=`
`,w.push.apply(w,S.childNodes))}return _.trim()}if(e.length===0)return{scene:new Ds};let Yt=new DOMParser().parseFromString(e,"application/xml"),Rt=i(Yt,"COLLADA")[0],la=Yt.getElementsByTagName("parsererror")[0];if(la!==void 0){let x=i(la,"div")[0],_;return _=x?x.textContent:oa(la),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}let Oa=Rt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Oa);let lo=c(i(Rt,"asset")[0]),co=new On(this.manager);co.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Gn;Tl&&(Gn=new Tl(this.manager),Gn.setPath(this.resourcePath||t));let Fa=new Pe,ka=[],ho={},Kc=0,je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(Rt,"library_animations","animation",g),d(Rt,"library_animation_clips","animation_clip",z),d(Rt,"library_controllers","controller",j),d(Rt,"library_images","image",ee),d(Rt,"library_effects","effect",ke),d(Rt,"library_materials","material",ce),d(Rt,"library_cameras","camera",Xe),d(Rt,"library_lights","light",$e),d(Rt,"library_geometries","geometry",te),d(Rt,"library_nodes","node",tt),d(Rt,"library_visual_scenes","visual_scene",Li),d(Rt,"library_kinematics_models","kinematics_model",Ot),d(Rt,"library_physics_models","physics_model",Hn),d(Rt,"scene","instance_kinematics_scene",V),m(je.animations,y),m(je.clips,ie),m(je.controllers,fe),m(je.images,oe),m(je.effects,se),m(je.materials,me),m(je.cameras,Ce),m(je.lights,he),m(je.geometries,ot),m(je.visualScenes,sa),Ti(),_e();let Ba=Ft(i(Rt,"scene")[0]);return Ba.animations=ka,lo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Ba.rotation.set(-Math.PI/2,0,0)),Ba.scale.multiplyScalar(lo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),ka},kinematics:ho,library:je,scene:Ba}}},wl=new U,Tp=new di,gn=new Ve,qi=new Ve,_n=new ei,vn=new U(1,1,1),xn=new U,Fn=class extends wt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}},wp=class extends Fn{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}},Ap=class extends Fn{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}},Mc=class extends Fn{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink",this.name="",this.inertial={mass:0,origin:{xyz:[0,0,0],rpy:[0,0,0]},inertia:{ixx:0,ixy:0,ixz:0,iyy:0,iyz:0,izz:0}}}copy(e,t){return super.copy(e,t),this.inertial={mass:e.inertial.mass,origin:{xyz:[...e.inertial.origin.xyz],rpy:[...e.inertial.origin.rpy]},inertia:{...e.inertial.inertia}},this}},Sc=class extends Fn{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=[,].fill(0);break;case"planar":this.jointValue=[,,,].fill(0),this.axis=new U(0,0,1);break;case"floating":this.jointValue=[,,,,,,].fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.name="",this.jointValue=null,this.jointType="fixed",this.axis=new U(1,0,0),this.limit={lower:0,upper:0,effort:0,velocity:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.limit.effort=e.limit.effort,this.limit.velocity=e.limit.velocity,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(i=>i===null?null:parseFloat(i)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(i=>{t=i.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let i=e[0];return i==null||i===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.quaternion.setFromAxisAngle(this.axis,i).premultiply(this.origQuaternion),this.jointValue[0]===i?t:(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0))}case"prismatic":{let i=e[0];return i==null||i===this.jointValue[0]?t:(this.ignoreLimits||(i=Math.min(this.limit.upper,i),i=Math.max(this.limit.lower,i)),this.position.copy(this.origPosition),wl.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(wl,i),this.jointValue[0]===i?t:(this.jointValue[0]=i,this.matrixWorldNeedsUpdate=!0,!0))}case"floating":return this.jointValue.every((i,r)=>e[r]===i||e[r]===null)?t:(this.jointValue[0]=e[0]===null?this.jointValue[0]:e[0],this.jointValue[1]=e[1]===null?this.jointValue[1]:e[1],this.jointValue[2]=e[2]===null?this.jointValue[2]:e[2],this.jointValue[3]=e[3]===null?this.jointValue[3]:e[3],this.jointValue[4]=e[4]===null?this.jointValue[4]:e[4],this.jointValue[5]=e[5]===null?this.jointValue[5]:e[5],qi.compose(this.origPosition,this.origQuaternion,vn),_n.setFromEuler(Tp.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),xn.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),gn.compose(xn,_n,vn),qi.premultiply(gn),this.position.setFromMatrixPosition(qi),this.rotation.setFromRotationMatrix(qi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((i,r)=>e[r]===i||e[r]===null)?t:(this.jointValue[0]=e[0]===null?this.jointValue[0]:e[0],this.jointValue[1]=e[1]===null?this.jointValue[1]:e[1],this.jointValue[2]=e[2]===null?this.jointValue[2]:e[2],qi.compose(this.origPosition,this.origQuaternion,vn),_n.setFromAxisAngle(this.axis,this.jointValue[2]),xn.set(this.jointValue[0],this.jointValue[1],0),gn.compose(xn,_n,vn),qi.premultiply(gn),this.position.setFromMatrixPosition(qi),this.rotation.setFromRotationMatrix(qi),this.matrixWorldNeedsUpdate=!0,!0)}return t}},Al=class extends Sc{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){let t=e.map(i=>i===null?null:i*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}},Rp=class extends Mc{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(i=>{i.isURDFJoint&&i.urdfName in e.joints&&(this.joints[i.urdfName]=i),i.isURDFLink&&i.urdfName in e.links&&(this.links[i.urdfName]=i),i.isURDFCollider&&i.urdfName in e.colliders&&(this.colliders[i.urdfName]=i),i.isURDFVisual&&i.urdfName in e.visual&&(this.visual[i.urdfName]=i)});for(let i in this.joints)this.joints[i].mimicJoints=this.joints[i].mimicJoints.map(r=>this.joints[r.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){let i=this.joints[e];return i?i.setJointValue(...t):!1}setJointValues(e){let t=!1;for(let i in e){let r=e[i];t=Array.isArray(r)?this.setJointValue(i,...r)||t:this.setJointValue(i,r)||t}return t}},Ms=new ei,Rl=new di;function Yi(e){return e?e.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function Cl(e,t,i=!1){i||e.rotation.set(0,0,0),Rl.set(t[0],t[1],t[2],"ZYX"),Ms.setFromEuler(Rl),Ms.multiply(e.quaternion),e.quaternion.copy(Ms)}var Ec=class{constructor(e){this.manager=e||xc,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,i)=>{this.load(e,t,null,i)})}load(e,t,i,r){let a=this.manager,n=er.extractUrlBase(e),s=this.manager.resolveURL(e);a.itemStart(s),fetch(s,this.fetchOptions).then(o=>{if(o.ok)return i&&i(null),o.text();throw Error(`URDFLoader: Failed to load url '${s}' with error code ${o.status} : ${o.statusText}.`)}).then(o=>{t(this.parse(o,this.workingPath||n)),a.itemEnd(s)}).catch(o=>{r?r(o):console.error("URDFLoader: Error loading file.",o),a.itemError(s),a.itemEnd(s)})}parse(e,t=this.workingPath){let i=this.packages,r=this.loadMeshCb,a=this.parseVisual,n=this.parseCollision,s=this.manager,o={},l={},c={};function h(p){if(!/^package:\/\//.test(p))return t?t+p:p;let[y,R]=p.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof i=="string")return i.endsWith(y)?i+"/"+R:i+"/"+y+"/"+R;if(typeof i=="function")return i(y)+"/"+R;if(typeof i=="object")return y in i?i[y]+"/"+R:(console.error(`URDFLoader : ${y} not found in provided package list.`),null)}function u(p){let y;return y=p instanceof Document?[...p.children]:p instanceof Element?[p]:[...new DOMParser().parseFromString(p,"text/xml").children],d(y.filter(R=>R.nodeName==="robot").pop())}function d(p){let y=[...p.children],R=y.filter(M=>M.nodeName.toLowerCase()==="link"),E=y.filter(M=>M.nodeName.toLowerCase()==="joint"),B=y.filter(M=>M.nodeName.toLowerCase()==="material"),L=new Rp;L.robotName=p.getAttribute("name"),L.urdfRobotNode=p,B.forEach(M=>{let F=M.getAttribute("name");c[F]=g(M)});let P={},O={};R.forEach(M=>{let F=M.getAttribute("name");o[F]=v(M,P,O,p.querySelector(`child[link="${F}"]`)===null?L:null)}),E.forEach(M=>{let F=M.getAttribute("name");l[F]=m(M)}),L.joints=l,L.links=o,L.colliders=O,L.visual=P;let b=Object.values(l);return b.forEach(M=>{M instanceof Al&&l[M.mimicJoint].mimicJoints.push(M)}),b.forEach(M=>{let F=new Set,H=k=>{if(F.has(k))throw Error("URDFLoader: Detected an infinite loop of mimic joints.");F.add(k),k.mimicJoints.forEach(q=>{H(q)})};H(M)}),L.frames={...O,...P,...o,...l},L}function m(p){let y=[...p.children],R=p.getAttribute("type"),E,B=y.find(F=>F.nodeName.toLowerCase()==="mimic");B?(E=new Al,E.mimicJoint=B.getAttribute("joint"),E.multiplier=parseFloat(B.getAttribute("multiplier")||1),E.offset=parseFloat(B.getAttribute("offset")||0)):E=new Sc,E.urdfNode=p,E.name=p.getAttribute("name"),E.urdfName=E.name,E.jointType=R;let L=null,P=null,O=[0,0,0],b=[0,0,0];y.forEach(F=>{let H=F.nodeName.toLowerCase();H==="origin"?(O=Yi(F.getAttribute("xyz")),b=Yi(F.getAttribute("rpy"))):H==="child"?P=o[F.getAttribute("link")]:H==="parent"?L=o[F.getAttribute("link")]:H==="limit"&&(E.limit.lower=parseFloat(F.getAttribute("lower")||E.limit.lower),E.limit.upper=parseFloat(F.getAttribute("upper")||E.limit.upper),E.limit.effort=parseFloat(F.getAttribute("effort")||E.limit.effort),E.limit.velocity=parseFloat(F.getAttribute("velocity")||E.limit.velocity))}),L.add(E),E.add(P),Cl(E,b),E.position.set(O[0],O[1],O[2]);let M=y.filter(F=>F.nodeName.toLowerCase()==="axis")[0];if(M){let F=M.getAttribute("xyz").split(/\s+/g).map(H=>parseFloat(H));E.axis=new U(F[0],F[1],F[2]),E.axis.normalize()}return E}function v(p,y,R,E=null){E===null&&(E=new Mc);let B=[...p.children];E.name=p.getAttribute("name"),E.urdfName=E.name,E.urdfNode=p;let L=B.find(P=>P.nodeName.toLowerCase()==="inertial");return L&&[...L.children].forEach(P=>{let O=P.nodeName.toLowerCase();O==="origin"?(E.inertial.origin.xyz=Yi(P.getAttribute("xyz")),E.inertial.origin.rpy=Yi(P.getAttribute("rpy"))):O==="mass"?E.inertial.mass=parseFloat(P.getAttribute("value"))||0:O==="inertia"&&(E.inertial.inertia.ixx=parseFloat(P.getAttribute("ixx"))||0,E.inertial.inertia.ixy=parseFloat(P.getAttribute("ixy"))||0,E.inertial.inertia.ixz=parseFloat(P.getAttribute("ixz"))||0,E.inertial.inertia.iyy=parseFloat(P.getAttribute("iyy"))||0,E.inertial.inertia.iyz=parseFloat(P.getAttribute("iyz"))||0,E.inertial.inertia.izz=parseFloat(P.getAttribute("izz"))||0)}),a&&B.filter(P=>P.nodeName.toLowerCase()==="visual").forEach(P=>{let O=f(P,c);if(E.add(O),P.hasAttribute("name")){let b=P.getAttribute("name");O.name=b,O.urdfName=b,y[b]=O}}),n&&B.filter(P=>P.nodeName.toLowerCase()==="collision").forEach(P=>{let O=f(P);if(E.add(O),P.hasAttribute("name")){let b=P.getAttribute("name");O.name=b,O.urdfName=b,R[b]=O}}),E}function g(p){let y=[...p.children],R=new Ai;return R.name=p.getAttribute("name")||"",y.forEach(E=>{let B=E.nodeName.toLowerCase();if(B==="color"){let L=E.getAttribute("rgba").split(/\s/g).map(P=>parseFloat(P));R.color.setRGB(L[0],L[1],L[2]),R.opacity=L[3],R.transparent=L[3]<1,R.depthWrite=!R.transparent}else if(B==="texture"){let L=E.getAttribute("filename");if(L){let P=new On(s),O=h(L);R.map=P.load(O),R.map.colorSpace=Ct}}}),R}function f(p,y={}){let R=p.nodeName.toLowerCase()==="collision",E=[...p.children],B=null,L=E.filter(O=>O.nodeName.toLowerCase()==="material")[0];if(L){let O=L.getAttribute("name");B=O&&O in y?y[O]:g(L)}else B=new Ai;let P=R?new wp:new Ap;return P.urdfNode=p,E.forEach(O=>{let b=O.nodeName.toLowerCase();if(b==="geometry"){let M=O.children[0].nodeName.toLowerCase();if(M==="mesh"){let F=h(O.children[0].getAttribute("filename"));if(F!==null){let H=O.children[0].getAttribute("scale");if(H){let k=Yi(H);P.scale.set(k[0],k[1],k[2])}r(F,s,B,(k,q)=>{q?console.error("URDFLoader: Error loading mesh.",q):k&&(k.position.set(0,0,0),k.quaternion.identity(),P.add(k))})}}else if(M==="box"){let F=new Tt;F.geometry=new Pn(1,1,1),F.material=B;let H=Yi(O.children[0].getAttribute("size"));F.scale.set(H[0],H[1],H[2]),P.add(F)}else if(M==="sphere"){let F=new Tt;F.geometry=new $d(1,30,30),F.material=B;let H=parseFloat(O.children[0].getAttribute("radius"))||0;F.scale.set(H,H,H),P.add(F)}else if(M==="cylinder"){let F=new Tt;F.geometry=new Zd(1,1,1,30),F.material=B;let H=parseFloat(O.children[0].getAttribute("radius"))||0,k=parseFloat(O.children[0].getAttribute("length"))||0;F.scale.set(H,k,H),F.rotation.set(Math.PI/2,0,0),P.add(F)}}else if(b==="origin"){let M=Yi(O.getAttribute("xyz")),F=Yi(O.getAttribute("rpy"));P.position.set(M[0],M[1],M[2]),P.rotation.set(0,0,0),Cl(P,F)}}),P}return u(e)}defaultMeshLoader(e,t,i,r){/\.stl$/i.test(e)?new Xs(t).load(e,a=>{r(new Tt(a,i||new Ai))},null,a=>r(null,a)):/\.dae$/i.test(e)?new qs(t).load(e,a=>r(a.scene),null,a=>r(null,a)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}};function Tc(e,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===2||t===1){let i=e.getIndex();if(i===null){let s=[],o=e.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);e.setIndex(s),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===2)for(let s=1;s<=r;s++)a.push(i.getX(0)),a.push(i.getX(s)),a.push(i.getX(s+1));else for(let s=0;s<r;s++)s%2==0?(a.push(i.getX(s)),a.push(i.getX(s+1)),a.push(i.getX(s+2))):(a.push(i.getX(s+2)),a.push(i.getX(s+1)),a.push(i.getX(s)));a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let n=e.clone();return n.setIndex(a),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}var Pc=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ip(t)}),this.register(function(t){return new Up(t)}),this.register(function(t){return new Gp(t)}),this.register(function(t){return new jp(t)}),this.register(function(t){return new Wp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new Fp(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new Bp(t)}),this.register(function(t){return new Np(t)}),this.register(function(t){return new zp(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new Vp(t)}),this.register(function(t){return new Hp(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new Xp(t)}),this.register(function(t){return new qp(t)})}load(e,t,i,r){let a=this,n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){let l=er.extractUrlBase(e);n=er.resolveURL(l,this.path)}else n=er.extractUrlBase(e);this.manager.itemStart(e);let s=function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},o=new Qi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{a.parse(l,n,function(c){t(c),a.manager.itemEnd(e)},s)}catch(c){s(c)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a,n={},s={},o=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===Nc){try{n[st.KHR_BINARY_GLTF]=new Yp(e)}catch(c){r&&r(c);return}a=JSON.parse(n[st.KHR_BINARY_GLTF].content)}else a=JSON.parse(o.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new om(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[h.name]=h,n[h.name]=!0}if(a.extensionsUsed)for(let c=0;c<a.extensionsUsed.length;++c){let h=a.extensionsUsed[c],u=a.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:n[h]=new Pp;break;case st.KHR_DRACO_MESH_COMPRESSION:n[h]=new Kp(a,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:n[h]=new Jp;break;case st.KHR_MESH_QUANTIZATION:n[h]=new Zp;break;default:u.indexOf(h)>=0&&s[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(n),l.setPlugins(s),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}};function Cp(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lp=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let a=t.json,n=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],s,o=new Pe(16777215);n.color!==void 0&&o.setRGB(n.color[0],n.color[1],n.color[2],qt);let l=n.range===void 0?0:n.range;switch(n.type){case"directional":s=new Ra(o),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new Vs(o),s.distance=l;break;case"spot":s=new Hs(o),s.distance=l,n.spot=n.spot||{},n.spot.innerConeAngle=n.spot.innerConeAngle===void 0?0:n.spot.innerConeAngle,n.spot.outerConeAngle=n.spot.outerConeAngle===void 0?Math.PI/4:n.spot.outerConeAngle,s.angle=n.spot.outerConeAngle,s.penumbra=1-n.spot.innerConeAngle/n.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+n.type)}return s.position.set(0,0,0),s.decay=2,ir(s,n),n.intensity!==void 0&&(s.intensity=n.intensity),s.name=t.createUniqueName(n.name||"light_"+e),r=Promise.resolve(s),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(n){return i._getNodeRef(t.cache,a,n)})}},Pp=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return pi}extendParams(e,t,i){let r=[];e.color=new Pe(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let n=a.baseColorFactor;e.color.setRGB(n[0],n[1],n[2],qt),e.opacity=n[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",a.baseColorTexture,Ct))}return Promise.all(r)}},Np=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ip=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(s,s)}return Promise.all(a)}},Up=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion===void 0?0:r.dispersion,Promise.resolve()}},Dp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(a)}},Op=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let n=r.extensions[this.name];if(n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ct)),n.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}},Fp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(a)}},kp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(s[0],s[1],s[2],qt),Promise.all(a)}},Bp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior===void 0?1.5:r.ior,Promise.resolve()}},zp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(s[0],s[1],s[2],qt),n.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",n.specularColorTexture,Ct)),Promise.all(a)}},Hp=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(a)}},Vp=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Si}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(a)}},Gp=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],n=t.options.ktx2Loader;if(!n){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,n)}},jp=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,n.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Wp=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,n.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Xp=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){let o=r.byteOffset||0,l=r.byteLength||0,c=r.count,h=r.byteStride,u=new Uint8Array(s,o,l);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(c,h,u,r.mode,r.filter).then(function(d){return d.buffer}):n.ready.then(function(){let d=new ArrayBuffer(c*h);return n.decodeGltfBuffer(new Uint8Array(d),c,h,u,r.mode,r.filter),d})})}else return null}},qp=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let o of r.primitives)if(o.mode!==fi.TRIANGLES&&o.mode!==fi.TRIANGLE_STRIP&&o.mode!==fi.TRIANGLE_FAN&&o.mode!==void 0)return null;let a=i.extensions[this.name].attributes,n=[],s={};for(let o in a)n.push(this.parser.getDependency("accessor",a[o]).then(l=>(s[o]=l,s[o])));return n.length<1?null:(n.push(this.parser.createNodeMesh(e)),Promise.all(n).then(o=>{let l=o.pop(),c=l.isGroup?l.children:[l],h=o[0].count,u=[];for(let d of c){let m=new Ve,v=new U,g=new ei,f=new U(1,1,1),p=new dc(d.geometry,d.material,h);for(let y=0;y<h;y++)s.TRANSLATION&&v.fromBufferAttribute(s.TRANSLATION,y),s.ROTATION&&g.fromBufferAttribute(s.ROTATION,y),s.SCALE&&f.fromBufferAttribute(s.SCALE,y),p.setMatrixAt(y,m.compose(v,g,f));for(let y in s)if(y==="_COLOR_0"){let R=s[y];p.instanceColor=new wn(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&d.geometry.setAttribute(y,s[y]);wt.prototype.copy.call(p,d),this.parser.assignFinalMaterial(p),u.push(p)}return l.isGroup?(l.clear(),l.add(...u),l):u[0]}))}},Nc="glTF",Ca=12,wc={JSON:1313821514,BIN:5130562},Yp=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ca),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nc)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ca,a=new DataView(e,Ca),n=0;for(;n<r;){let s=a.getUint32(n,!0);n+=4;let o=a.getUint32(n,!0);if(n+=4,o===wc.JSON){let l=new Uint8Array(e,Ca+n,s);this.content=i.decode(l)}else if(o===wc.BIN){let l=Ca+n;this.body=e.slice(l,l+s)}n+=s}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}},Kp=class{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,s={},o={},l={};for(let c in n){let h=Qs[c]||c.toLowerCase();s[h]=n[c]}for(let c in e.attributes){let h=Qs[c]||c.toLowerCase();if(n[c]!==void 0){let u=i.accessors[e.attributes[c]];l[h]=ra[u.componentType].name,o[h]=u.normalized===!0}}return t.getDependency("bufferView",a).then(function(c){return new Promise(function(h,u){r.decodeDracoFile(c,function(d){for(let m in d.attributes){let v=d.attributes[m],g=o[m];g!==void 0&&(v.normalized=g)}h(d)},s,l,qt,u)})})}},Jp=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Zp=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Ic=class extends ta{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let n=0;n!==r;n++)t[n]=i[a+n];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=s*2,l=s*3,c=r-t,h=(i-t)/c,u=h*h,d=u*h,m=e*l,v=m-l,g=-2*d+3*u,f=d-u,p=1-g,y=f-u+h;for(let R=0;R!==s;R++){let E=n[v+R+s],B=n[v+R+o]*c,L=n[m+R+s],P=n[m+R]*c;a[R]=p*E+y*B+g*L+f*P}return a}},$p=new ei,Qp=class extends Ic{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return $p.fromArray(a).normalize().toArray(a),a}},fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ac={9728:si,9729:ui,9984:As,9985:Cs,9986:Rs,9987:vr},Rc={33071:ni,33648:ba,10497:Fi},Ys={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qs={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},tr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},em={CUBICSPLINE:void 0,LINEAR:pr,STEP:Kr},Ks={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tm(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Dn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function yr(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function ir(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function im(e,t,i){let r=!1,a=!1,n=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(r=!0),u.NORMAL!==void 0&&(a=!0),u.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(r){let d=u.POSITION===void 0?e.attributes.position:i.getDependency("accessor",u.POSITION);s.push(d)}if(a){let d=u.NORMAL===void 0?e.attributes.normal:i.getDependency("accessor",u.NORMAL);o.push(d)}if(n){let d=u.COLOR_0===void 0?e.attributes.color:i.getDependency("accessor",u.COLOR_0);l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return r&&(e.morphAttributes.position=h),a&&(e.morphAttributes.normal=u),n&&(e.morphAttributes.color=d),e.morphTargetsRelative=!0,e})}function rm(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function am(e){let t,i=e.extensions&&e.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t=i?"draco:"+i.bufferView+":"+i.indices+":"+Js(i.attributes):e.indices+":"+Js(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+Js(e.targets[r]);return t}function Js(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function eo(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nm(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var sm=new Ve,om=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cp,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,a=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&a<98?this.textureLoader=new On(this.options.manager):this.textureLoader=new bc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(n){let s={scene:n[0][r.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:r.asset,parser:i,userData:{}};return yr(a,s,r),ir(s,r),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(s)})).then(function(){for(let o of s.scenes)o.updateMatrixWorld();e(s)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let n=t[r].joints;for(let s=0,o=n.length;s<o;s++)e[n[s]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let n=e[r];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(i[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=(n,s)=>{let o=this.associations.get(n);o!=null&&this.associations.set(s,o);for(let[l,c]of n.children.entries())a(c,s.children[l])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,n){return i.getDependency(e,n)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,n){i.load(er.resolveURL(t.uri,r.path),a,void 0,function(){n(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let n=Ys[r.type],s=ra[r.componentType],o=r.normalized===!0,l=new s(r.count*n);return Promise.resolve(new It(l,n,o))}let a=[];return r.bufferView===void 0?a.push(null):a.push(this.getDependency("bufferView",r.bufferView)),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(n){let s=n[0],o=Ys[r.type],l=ra[r.componentType],c=l.BYTES_PER_ELEMENT,h=c*o,u=r.byteOffset||0,d=r.bufferView===void 0?void 0:i.bufferViews[r.bufferView].byteStride,m=r.normalized===!0,v,g;if(d&&d!==h){let f=Math.floor(u/d),p="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,y=t.cache.get(p);y||(v=new l(s,f*d,r.count*d/c),y=new lc(v,d/c),t.cache.add(p,y)),g=new cc(y,o,u%d/c,m)}else v=s===null?new l(r.count*o):new l(s,u,r.count*o),g=new It(v,o,m);if(r.sparse!==void 0){let f=Ys.SCALAR,p=ra[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,R=r.sparse.values.byteOffset||0,E=new p(n[1],y,r.sparse.count*f),B=new l(n[2],R,r.sparse.count*o);s!==null&&(g=new It(g.array.slice(),g.itemSize,g.normalized));for(let L=0,P=E.length;L<P;L++){let O=E[L];if(g.setX(O,B[L*o]),o>=2&&g.setY(O,B[L*o+1]),o>=3&&g.setZ(O,B[L*o+2]),o>=4&&g.setW(O,B[L*o+3]),o>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],n=this.textureLoader;if(a.uri){let s=i.manager.getHandler(a.uri);s!==null&&(n=s)}return this.loadTextureImage(e,r,n)}loadTextureImage(e,t,i){let r=this,a=this.json,n=a.textures[e],s=a.images[t],o=(s.uri||s.bufferView)+":"+n.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=n.name||s.name||"",c.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(c.name=s.uri);let h=(a.samplers||{})[n.sampler]||{};return c.magFilter=Ac[h.magFilter]||1006,c.minFilter=Ac[h.minFilter]||1008,c.wrapS=Rc[h.wrapS]||1e3,c.wrapT=Rc[h.wrapT]||1e3,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let i=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let n=r.images[e],s=self.URL||self.webkitURL,o=n.uri||"",l=!1;if(n.bufferView!==void 0)o=i.getDependency("bufferView",n.bufferView).then(function(h){l=!0;let u=new Blob([h],{type:n.mimeType});return o=s.createObjectURL(u),o});else if(n.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(o).then(function(h){return new Promise(function(u,d){let m=u;t.isImageBitmapLoader===!0&&(m=function(v){let g=new Qt(v);g.needsUpdate=!0,u(g)}),t.load(er.resolveURL(h,a.path),m,void 0,d)})}).then(function(h){return l===!0&&s.revokeObjectURL(o),h.userData.mimeType=n.mimeType||nm(n.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),h});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(n){if(!n)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(n=n.clone(),n.channel=i.texCoord),a.extensions[st.KHR_TEXTURE_TRANSFORM]){let s=i.extensions===void 0?void 0:i.extensions[st.KHR_TEXTURE_TRANSFORM];if(s){let o=a.associations.get(n);n=a.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(n,s),a.associations.set(n,o)}}return r!==void 0&&(n.colorSpace=r),e[t]=n,n})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,n=t.attributes.normal===void 0;if(e.isPoints){let s="PointsMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new $i,Gt.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(s,o)),i=o}else if(e.isLine){let s="LineBasicMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new Bi,Gt.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(s,o)),i=o}if(r||a||n){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),n&&(s+="flat-shading:");let o=this.cache.get(s);o||(o=i.clone(),a&&(o.vertexColors=!0),n&&(o.flatShading=!0),r&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(s,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return Dn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,a=i.materials[e],n,s={},o=a.extensions||{},l=[];if(o[st.KHR_MATERIALS_UNLIT]){let h=r[st.KHR_MATERIALS_UNLIT];n=h.getMaterialType(),l.push(h.extendParams(s,a,t))}else{let h=a.pbrMetallicRoughness||{};if(s.color=new Pe(1,1,1),s.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;s.color.setRGB(u[0],u[1],u[2],qt),s.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(s,"map",h.baseColorTexture,Ct)),s.metalness=h.metallicFactor===void 0?1:h.metallicFactor,s.roughness=h.roughnessFactor===void 0?1:h.roughnessFactor,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(s,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(s,"roughnessMap",h.metallicRoughnessTexture))),n=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,s)})))}a.doubleSided===!0&&(s.side=2);let c=a.alphaMode||Ks.OPAQUE;if(c===Ks.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,c===Ks.MASK&&(s.alphaTest=a.alphaCutoff===void 0?.5:a.alphaCutoff)),a.normalTexture!==void 0&&n!==pi&&(l.push(t.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new De(1,1),a.normalTexture.scale!==void 0)){let h=a.normalTexture.scale;s.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&n!==pi&&(l.push(t.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&n!==pi){let h=a.emissiveFactor;s.emissive=new Pe().setRGB(h[0],h[1],h[2],qt)}return a.emissiveTexture!==void 0&&n!==pi&&l.push(t.assignTexture(s,"emissiveMap",a.emissiveTexture,Ct)),Promise.all(l).then(function(){let h=new n(s);return a.name&&(h.name=a.name),ir(h,a),t.associations.set(h,{materials:e}),a.extensions&&yr(r,h,a),h})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function a(s){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(o){return Cc(o,s,t)})}let n=[];for(let s=0,o=e.length;s<o;s++){let l=e[s],c=am(l),h=r[c];if(h)n.push(h.promise);else{let u;u=l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?a(l):Cc(new Vt,l,t),r[c]={primitive:l,promise:u},n.push(u)}}return Promise.all(n)}loadMesh(e){let t=this,i=this.json,r=this.extensions,a=i.meshes[e],n=a.primitives,s=[];for(let o=0,l=n.length;o<l;o++){let c=n[o].material===void 0?tm(this.cache):this.getDependency("material",n[o].material);s.push(c)}return s.push(t.loadGeometries(n)),Promise.all(s).then(function(o){let l=o.slice(0,o.length-1),c=o[o.length-1],h=[];for(let d=0,m=c.length;d<m;d++){let v=c[d],g=n[d],f,p=l[d];if(g.mode===fi.TRIANGLES||g.mode===fi.TRIANGLE_STRIP||g.mode===fi.TRIANGLE_FAN||g.mode===void 0)f=a.isSkinnedMesh===!0?new Os(v,p):new Tt(v,p),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===fi.TRIANGLE_STRIP?f.geometry=Tc(f.geometry,1):g.mode===fi.TRIANGLE_FAN&&(f.geometry=Tc(f.geometry,2));else if(g.mode===fi.LINES)f=new Qr(v,p);else if(g.mode===fi.LINE_STRIP)f=new wa(v,p);else if(g.mode===fi.LINE_LOOP)f=new pc(v,p);else if(g.mode===fi.POINTS)f=new ea(v,p);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&rm(f,a),f.name=t.createUniqueName(a.name||"mesh_"+e),ir(f,a),g.extensions&&yr(r,f,g),t.assignFinalMaterial(f),h.push(f)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return a.extensions&&yr(r,h[0],a),h[0];let u=new hi;a.extensions&&yr(r,u,a),t.associations.set(u,{meshes:e});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Nt($t.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ta(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices===void 0?i.push(null):i.push(this.getDependency("accessor",t.inverseBindMatrices)),Promise.all(i).then(function(r){let a=r.pop(),n=r,s=[],o=[];for(let l=0,c=n.length;l<c;l++){let h=n[l];if(h){s.push(h);let u=new Ve;a!==null&&u.fromArray(a.array,l*16),o.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ks(s,o)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,n=[],s=[],o=[],l=[],c=[];for(let h=0,u=r.channels.length;h<u;h++){let d=r.channels[h],m=r.samplers[d.sampler],v=d.target,g=v.node,f=r.parameters===void 0?m.input:r.parameters[m.input],p=r.parameters===void 0?m.output:r.parameters[m.output];v.node!==void 0&&(n.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",p)),l.push(m),c.push(v))}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){let u=h[0],d=h[1],m=h[2],v=h[3],g=h[4],f=[];for(let p=0,y=u.length;p<y;p++){let R=u[p],E=d[p],B=m[p],L=v[p],P=g[p];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let O=i._createAnimationTracks(R,E,B,L,P);if(O)for(let b=0;b<O.length;b++)f.push(O[b])}return new Cn(a,void 0,f)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){let n=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&n.traverse(function(s){if(s.isMesh)for(let o=0,l=r.weights.length;o<l;o++)s.morphTargetInfluences[o]=r.weights[o]}),n})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],a=i._loadNodeShallow(e),n=[],s=r.children||[];for(let l=0,c=s.length;l<c;l++)n.push(i.getDependency("node",s[l]));let o=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(n),o]).then(function(l){let c=l[0],h=l[1],u=l[2];u!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(u,sm)});for(let d=0,m=h.length;d<m;d++)c.add(h[d]);return c})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],n=a.name?r.createUniqueName(a.name):"",s=[],o=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&s.push(o),a.camera!==void 0&&s.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){s.push(l)}),this.nodeCache[e]=Promise.all(s).then(function(l){let c;if(c=a.isBone===!0?new Un:l.length>1?new hi:l.length===1?l[0]:new wt,c!==l[0])for(let h=0,u=l.length;h<u;h++)c.add(l[h]);if(a.name&&(c.userData.name=a.name,c.name=n),ir(c,a),a.extensions&&yr(i,c,a),a.matrix!==void 0){let h=new Ve;h.fromArray(a.matrix),c.applyMatrix4(h)}else a.translation!==void 0&&c.position.fromArray(a.translation),a.rotation!==void 0&&c.quaternion.fromArray(a.rotation),a.scale!==void 0&&c.scale.fromArray(a.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new hi;i.name&&(a.name=r.createUniqueName(i.name)),ir(a,i),i.extensions&&yr(t,a,i);let n=i.nodes||[],s=[];for(let o=0,l=n.length;o<l;o++)s.push(r.getDependency("node",n[o]));return Promise.all(s).then(function(o){for(let l=0,c=o.length;l<c;l++)a.add(o[l]);return r.associations=(l=>{let c=new Map;for(let[h,u]of r.associations)(h instanceof Gt||h instanceof Qt)&&c.set(h,u);return l.traverse(h=>{let u=r.associations.get(h);u!=null&&c.set(h,u)}),c})(a),a})}_createAnimationTracks(e,t,i,r,a){let n=[],s=e.name?e.name:e.uuid,o=[];tr[a.path]===tr.weights?e.traverse(function(u){u.morphTargetInfluences&&o.push(u.name?u.name:u.uuid)}):o.push(s);let l;switch(tr[a.path]){case tr.weights:l=fr;break;case tr.rotation:l=ki;break;case tr.position:case tr.scale:l=zi;break;default:i.itemSize===1?l=fr:l=zi;break}let c=r.interpolation===void 0?pr:em[r.interpolation],h=this._getArrayFromAccessor(i);for(let u=0,d=o.length;u<d;u++){let m=new l(o[u]+"."+tr[a.path],t.array,h,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),n.push(m)}return n}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=eo(t.constructor),r=new Float32Array(t.length);for(let a=0,n=t.length;a<n;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){return new(this instanceof ki?Qp:Ic)(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lm(e,t,i){let r=t.attributes,a=new mi;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(a.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){let h=eo(ra[o.componentType]);a.min.multiplyScalar(h),a.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new U,l=new U;for(let c=0,h=n.length;c<h;c++){let u=n[c];if(u.POSITION!==void 0){let d=i.json.accessors[u.POSITION],m=d.min,v=d.max;if(m!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),d.normalized){let g=eo(ra[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new li;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function Cc(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}for(let s in r){let o=Qs[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return ht.workingColorSpace!=="srgb-linear"&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),ir(e,t),lm(e,t,i),Promise.all(a).then(function(){return t.targets===void 0?e:im(e,t.targets,i)})}function cm(e){return e.isURDFJoint&&e.jointType!=="fixed"}function hm(e){let t=e;for(;t;){if(cm(t))return t;t=t.parent}return t}var Zs=new U,$s=new U,ia=new U,ii=new U,Lc=new U,La=new U,Pa=new U,Ei=new yi,um=class{constructor(e){this.enabled=!0,this.scene=e,this.raycaster=new js,this.initialGrabPoint=new U,this.hitDistance=-1,this.hovered=null,this.manipulating=null}update(){let{raycaster:e,hovered:t,manipulating:i,scene:r}=this;if(i)return;let a=null,n=e.intersectObject(r,!0);if(n.length!==0){let s=n[0];this.hitDistance=s.distance,a=hm(s.object),this.initialGrabPoint.copy(s.point)}a!==t&&(t&&this.onUnhover(t),this.hovered=a,a&&this.onHover(a))}updateJoint(e,t){e.setJointValue(t)}onDragStart(e){}onDragEnd(e){}onHover(e){}onUnhover(e){}getRevoluteDelta(e,t,i){return ii.copy(e.axis).transformDirection(e.matrixWorld).normalize(),ia.set(0,0,0).applyMatrix4(e.matrixWorld),Ei.setFromNormalAndCoplanarPoint(ii,ia),Ei.projectPoint(t,La),Ei.projectPoint(i,Pa),La.sub(ia),Pa.sub(ia),ii.crossVectors(La,Pa),Math.sign(ii.dot(Ei.normal))*Pa.angleTo(La)}getPrismaticDelta(e,t,i){return ii.subVectors(i,t),Ei.normal.copy(e.axis).transformDirection(e.parent.matrixWorld).normalize(),ii.dot(Ei.normal)}moveRay(e){let{raycaster:t,hitDistance:i,manipulating:r}=this,{ray:a}=t;if(r){a.at(i,Zs),e.at(i,$s);let n=0;r.jointType==="revolute"||r.jointType==="continuous"?n=this.getRevoluteDelta(r,Zs,$s):r.jointType==="prismatic"&&(n=this.getPrismaticDelta(r,Zs,$s)),n&&this.updateJoint(r,r.angle+n)}this.raycaster.ray.copy(e),this.update()}setGrabbed(e){let{hovered:t,manipulating:i}=this;if(e){if(i!==null||t===null)return;this.manipulating=t,this.onDragStart(t)}else{if(this.manipulating===null)return;this.onDragEnd(this.manipulating),this.manipulating=null,this.update()}}},Uc=class extends um{constructor(e,t,i){super(e),this.camera=t,this.domElement=i;let r=new js,a=new De;function n(s){let o=i.getBoundingClientRect();a.x=(s.clientX-o.left)/o.width*2-1,a.y=-((s.clientY-o.top)/o.height)*2+1}this._mouseDown=s=>{n(s),r.setFromCamera(a,this.camera),this.moveRay(r.ray),this.setGrabbed(!0)},this._mouseMove=s=>{n(s),r.setFromCamera(a,this.camera),this.moveRay(r.ray)},this._mouseUp=s=>{n(s),r.setFromCamera(a,this.camera),this.moveRay(r.ray),this.setGrabbed(!1)},i.addEventListener("mousedown",this._mouseDown),i.addEventListener("mousemove",this._mouseMove),i.addEventListener("mouseup",this._mouseUp)}getRevoluteDelta(e,t,i){let{camera:r,initialGrabPoint:a}=this;return ii.copy(e.axis).transformDirection(e.matrixWorld).normalize(),ia.set(0,0,0).applyMatrix4(e.matrixWorld),Ei.setFromNormalAndCoplanarPoint(ii,ia),ii.copy(r.position).sub(a).normalize(),Math.abs(ii.dot(Ei.normal))>.3?super.getRevoluteDelta(e,t,i):(ii.set(0,1,0).transformDirection(r.matrixWorld),Ei.projectPoint(t,La),Ei.projectPoint(i,Pa),ii.set(0,0,-1).transformDirection(r.matrixWorld),ii.cross(Ei.normal),Lc.subVectors(i,t),ii.dot(Lc))}dispose(){let{domElement:e}=this;e.removeEventListener("mousedown",this._mouseDown),e.removeEventListener("mousemove",this._mouseMove),e.removeEventListener("mouseup",this._mouseUp)}};var Dc={type:"change"},to={type:"start"},Oc={type:"end"},kn=new xr,Fc=new yi,dm=Math.cos(70*$t.DEG2RAD),kc=class extends Zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",ye),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Dc),i.update(),a=r.NONE},this.update=(function(){let N=new U,he=new ei().setFromUnitVectors(e.up,new U(0,1,0)),D=he.clone().invert(),te=new U,Q=new ei,xe=new U,ge=2*Math.PI;return function(ft=null){let dt=i.object.position;N.copy(dt).sub(i.target),N.applyQuaternion(he),s.setFromVector3(N),i.autoRotate&&a===r.NONE&&F(b(ft)),i.enableDamping?(s.theta+=o.theta*i.dampingFactor,s.phi+=o.phi*i.dampingFactor):(s.theta+=o.theta,s.phi+=o.phi);let ot=i.minAzimuthAngle,gt=i.maxAzimuthAngle;isFinite(ot)&&isFinite(gt)&&(ot<-Math.PI?ot+=ge:ot>Math.PI&&(ot-=ge),gt<-Math.PI?gt+=ge:gt>Math.PI&&(gt-=ge),ot<=gt?s.theta=Math.max(ot,Math.min(gt,s.theta)):s.theta=s.theta>(ot+gt)/2?Math.max(ot,s.theta):Math.min(gt,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let qe=!1;if(i.zoomToCursor&&B||i.object.isOrthographicCamera)s.radius=ae(s.radius);else{let vt=s.radius;s.radius=ae(s.radius*l),qe=vt!=s.radius}if(N.setFromSpherical(s),N.applyQuaternion(D),dt.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(o.theta*=1-i.dampingFactor,o.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(o.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&B){let vt=null;if(i.object.isPerspectiveCamera){let Ot=N.length();vt=ae(Ot*l);let Ci=Ot-vt;i.object.position.addScaledVector(R,Ci),i.object.updateMatrixWorld(),qe=!!Ci}else if(i.object.isOrthographicCamera){let Ot=new U(E.x,E.y,0);Ot.unproject(i.object);let Ci=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),qe=Ci!==i.object.zoom;let rr=new U(E.x,E.y,0);rr.unproject(i.object),i.object.position.sub(rr).add(Ot),i.object.updateMatrixWorld(),vt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;vt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(vt).add(i.object.position):(kn.origin.copy(i.object.position),kn.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(kn.direction))<dm?e.lookAt(i.target):(Fc.setFromNormalAndCoplanarPoint(i.object.up,i.target),kn.intersectPlane(Fc,i.target))))}else if(i.object.isOrthographicCamera){let vt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),vt!==i.object.zoom&&(i.object.updateProjectionMatrix(),qe=!0)}return l=1,B=!1,qe||te.distanceToSquared(i.object.position)>n||8*(1-Q.dot(i.object.quaternion))>n||xe.distanceToSquared(i.target)>n?(i.dispatchEvent(Dc),te.copy(i.object.position),Q.copy(i.object.quaternion),xe.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Fe),i.domElement.removeEventListener("pointerdown",yt),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",pe),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",T),i.domElement.getRootNode().removeEventListener("keydown",Oe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ye),i._domElementKeyEvents=null)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=r.NONE,n=1e-6,s=new Ws,o=new Ws,l=1,c=new U,h=new De,u=new De,d=new De,m=new De,v=new De,g=new De,f=new De,p=new De,y=new De,R=new U,E=new De,B=!1,L=[],P={},O=!1;function b(N){return N===null?2*Math.PI/60/60*i.autoRotateSpeed:2*Math.PI/60*i.autoRotateSpeed*N}function M(N){let he=Math.abs(N*.01);return .95**(i.zoomSpeed*he)}function F(N){o.theta-=N}function H(N){o.phi-=N}let k=(function(){let N=new U;return function(he,D){N.setFromMatrixColumn(D,0),N.multiplyScalar(-he),c.add(N)}})(),q=(function(){let N=new U;return function(he,D){i.screenSpacePanning===!0?N.setFromMatrixColumn(D,1):(N.setFromMatrixColumn(D,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(he),c.add(N)}})(),z=(function(){let N=new U;return function(he,D){let te=i.domElement;if(i.object.isPerspectiveCamera){let Q=i.object.position;N.copy(Q).sub(i.target);let xe=N.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),k(2*he*xe/te.clientHeight,i.object.matrix),q(2*D*xe/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(he*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),q(D*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function ie(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function de(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(N,he){if(!i.zoomToCursor)return;B=!0;let D=i.domElement.getBoundingClientRect(),te=N-D.left,Q=he-D.top,xe=D.width,ge=D.height;E.x=te/xe*2-1,E.y=-(Q/ge)*2+1,R.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function ae(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function ne(N){h.set(N.clientX,N.clientY)}function Ee(N){j(N.clientX,N.clientX),f.set(N.clientX,N.clientY)}function fe(N){m.set(N.clientX,N.clientY)}function G(N){u.set(N.clientX,N.clientY),d.subVectors(u,h).multiplyScalar(i.rotateSpeed);let he=i.domElement;F(2*Math.PI*d.x/he.clientHeight),H(2*Math.PI*d.y/he.clientHeight),h.copy(u),i.update()}function J(N){p.set(N.clientX,N.clientY),y.subVectors(p,f),y.y>0?ie(M(y.y)):y.y<0&&de(M(y.y)),f.copy(p),i.update()}function ee(N){v.set(N.clientX,N.clientY),g.subVectors(v,m).multiplyScalar(i.panSpeed),z(g.x,g.y),m.copy(v),i.update()}function oe(N){j(N.clientX,N.clientY),N.deltaY<0?de(M(N.deltaY)):N.deltaY>0&&ie(M(N.deltaY)),i.update()}function ue(N){let he=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),he=!0;break}he&&(N.preventDefault(),i.update())}function ke(N){if(L.length===1)h.set(N.pageX,N.pageY);else{let he=Ze(N),D=.5*(N.pageX+he.x),te=.5*(N.pageY+he.y);h.set(D,te)}}function X(N){if(L.length===1)m.set(N.pageX,N.pageY);else{let he=Ze(N),D=.5*(N.pageX+he.x),te=.5*(N.pageY+he.y);m.set(D,te)}}function Qe(N){let he=Ze(N),D=N.pageX-he.x,te=N.pageY-he.y,Q=Math.sqrt(D*D+te*te);f.set(0,Q)}function He(N){i.enableZoom&&Qe(N),i.enablePan&&X(N)}function lt(N){i.enableZoom&&Qe(N),i.enableRotate&&ke(N)}function Ge(N){if(L.length==1)u.set(N.pageX,N.pageY);else{let D=Ze(N),te=.5*(N.pageX+D.x),Q=.5*(N.pageY+D.y);u.set(te,Q)}d.subVectors(u,h).multiplyScalar(i.rotateSpeed);let he=i.domElement;F(2*Math.PI*d.x/he.clientHeight),H(2*Math.PI*d.y/he.clientHeight),h.copy(u)}function ct(N){if(L.length===1)v.set(N.pageX,N.pageY);else{let he=Ze(N),D=.5*(N.pageX+he.x),te=.5*(N.pageY+he.y);v.set(D,te)}g.subVectors(v,m).multiplyScalar(i.panSpeed),z(g.x,g.y),m.copy(v)}function Be(N){let he=Ze(N),D=N.pageX-he.x,te=N.pageY-he.y,Q=Math.sqrt(D*D+te*te);p.set(0,Q),y.set(0,(p.y/f.y)**+i.zoomSpeed),ie(y.y),f.copy(p),j((N.pageX+he.x)*.5,(N.pageY+he.y)*.5)}function Je(N){i.enableZoom&&Be(N),i.enablePan&&ct(N)}function At(N){i.enableZoom&&Be(N),i.enableRotate&&Ge(N)}function yt(N){i.enabled!==!1&&(L.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",I),i.domElement.addEventListener("pointerup",T)),!we(N)&&(nt(N),N.pointerType==="touch"?Xe(N):K(N)))}function I(N){i.enabled!==!1&&(N.pointerType==="touch"?Me(N):se(N))}function T(N){switch(Ce(N),L.length){case 0:i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",T),i.dispatchEvent(Oc),a=r.NONE;break;case 1:let he=L[0],D=P[he];Xe({pointerId:he,pageX:D.x,pageY:D.y});break}}function K(N){let he;switch(N.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case gr.DOLLY:if(i.enableZoom===!1)return;Ee(N),a=r.DOLLY;break;case gr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;fe(N),a=r.PAN}else{if(i.enableRotate===!1)return;ne(N),a=r.ROTATE}break;case gr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;ne(N),a=r.ROTATE}else{if(i.enablePan===!1)return;fe(N),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(to)}function se(N){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;G(N);break;case r.DOLLY:if(i.enableZoom===!1)return;J(N);break;case r.PAN:if(i.enablePan===!1)return;ee(N);break}}function pe(N){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(N.preventDefault(),i.dispatchEvent(to),oe(ce(N)),i.dispatchEvent(Oc))}function ce(N){let he=N.deltaMode,D={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(he){case 1:D.deltaY*=16;break;case 2:D.deltaY*=100;break}return N.ctrlKey&&!O&&(D.deltaY*=10),D}function Oe(N){N.key==="Control"&&(O=!0,i.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(N){N.key==="Control"&&(O=!1,i.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function ye(N){i.enabled===!1||i.enablePan===!1||ue(N)}function Xe(N){switch($e(N),L.length){case 1:switch(i.touches.ONE){case _r.ROTATE:if(i.enableRotate===!1)return;ke(N),a=r.TOUCH_ROTATE;break;case _r.PAN:if(i.enablePan===!1)return;X(N),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case _r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;He(N),a=r.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(N),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(to)}function Me(N){switch($e(N),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ge(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ct(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Je(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(N),i.update();break;default:a=r.NONE}}function Fe(N){i.enabled!==!1&&N.preventDefault()}function nt(N){L.push(N.pointerId)}function Ce(N){delete P[N.pointerId];for(let he=0;he<L.length;he++)if(L[he]==N.pointerId){L.splice(he,1);return}}function we(N){for(let he=0;he<L.length;he++)if(L[he]==N.pointerId)return!0;return!1}function $e(N){let he=P[N.pointerId];he===void 0&&(he=new De,P[N.pointerId]=he),he.set(N.pageX,N.pageY)}function Ze(N){return P[N.pointerId===L[0]?L[1]:L[0]]}i.domElement.addEventListener("contextmenu",Fe),i.domElement.addEventListener("pointerdown",yt),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",pe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Oe,{passive:!0,capture:!0}),this.update()}};function pm(e){if(!(e instanceof DataTransfer))throw Error('Data must be of type "DataTransfer"',e);let t={};function i(r){if(r.isFile)return new Promise(a=>{r.file(n=>{t[r.fullPath]=n,a()})});{let a=r.createReader();return new Promise(n=>{let s=[];function o(){a.readEntries(l=>{l.length===0?Promise.all(s).then(()=>n()):(l.forEach(c=>{s.push(i(c))}),o())})}o()})}}return new Promise(r=>{let a=e.items&&[...e.items],n=[...e.files];if(a&&a.length&&a[0].webkitGetAsEntry){let s=[];for(let o=0;o<a.length;o++){let l=a[o].webkitGetAsEntry();s.push(i(l))}Promise.all(s).then(()=>r(t))}else n.filter(s=>s.size!==0).forEach(s=>t["/"+s.name]=s),r(t)})}function mm(e,t){document.addEventListener("dragover",i=>i.preventDefault()),document.addEventListener("dragenter",i=>i.preventDefault()),document.addEventListener("drop",i=>{i.preventDefault(),pm(i.dataTransfer).then(r=>{let a=c=>c.replace(/\\/g,"/").split(/\//g).reduce((h,u)=>(u===".."?h.pop():u!=="."&&h.push(u),h),[]).join("/"),n=Object.keys(r).map(c=>a(c));e.urlModifierFunc=c=>{let h=a(c.replace(e.package,"")),u=n.filter(d=>{let m=Math.min(d.length,h.length);return h.substr(h.length-m)===d.substr(d.length-m)}).pop();if(u!==void 0){let d=URL.createObjectURL(r[u]);return requestAnimationFrame(()=>URL.revokeObjectURL(d)),d}return c};let s=Object.keys(r);e.up="+Z",document.getElementById("up-select").value=e.up;let o=n.filter(c=>/urdf$/i.test(c)),l=document.querySelector("#urdf-options");for(;l.firstChild;)l.removeChild(l.firstChild);o.forEach(c=>{let h=document.createElement("li");h.setAttribute("urdf",c),h.setAttribute("color","#263238"),h.textContent=c.split(/[\\\/]/).pop(),l.appendChild(h)}),e.urdf=s.filter(c=>/urdf$/i.test(c)).shift()}).then(()=>t())})}var fm=/^[og]\s*(.+)?/,gm=/^mtllib /,_m=/^usemtl /,vm=/^usemap /,Bc=/\s+/,zc=new U,io=new U,Hc=new U,Vc=new U,gi=new U,Bn=new Pe;function xm(){let e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}let r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(a,n){let s=this._finalize(!1);s&&(s.inherited||s.groupCount<=0)&&this.materials.splice(s.index,1);let o={index:this.materials.length,name:a||"",mtllib:Array.isArray(n)&&n.length>0?n[n.length-1]:"",smooth:s===void 0?this.smooth:s.smooth,groupStart:s===void 0?0:s.groupEnd,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(a){let n=this.currentMaterial();if(n&&n.groupEnd===-1&&(n.groupEnd=this.geometry.vertices.length/3,n.groupCount=n.groupEnd-n.groupStart,n.inherited=!1),a&&this.materials.length>1)for(let s=this.materials.length-1;s>=0;s--)this.materials[s].groupCount<=0&&this.materials.splice(s,1);return a&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),n}},r&&r.name&&typeof r.clone=="function"){let a=r.clone(0);a.inherited=!0,this.object.materials.push(a)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){let r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseNormalIndex:function(t,i){let r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseUVIndex:function(t,i){let r=parseInt(t,10);return(r>=0?r-1:r+i/2)*2},addVertex:function(t,i,r){let a=this.vertices,n=this.object.geometry.vertices;n.push(a[t+0],a[t+1],a[t+2]),n.push(a[i+0],a[i+1],a[i+2]),n.push(a[r+0],a[r+1],a[r+2])},addVertexPoint:function(t){let i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){let i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,r){let a=this.normals,n=this.object.geometry.normals;n.push(a[t+0],a[t+1],a[t+2]),n.push(a[i+0],a[i+1],a[i+2]),n.push(a[r+0],a[r+1],a[r+2])},addFaceNormal:function(t,i,r){let a=this.vertices,n=this.object.geometry.normals;zc.fromArray(a,t),io.fromArray(a,i),Hc.fromArray(a,r),gi.subVectors(Hc,io),Vc.subVectors(zc,io),gi.cross(Vc),gi.normalize(),n.push(gi.x,gi.y,gi.z),n.push(gi.x,gi.y,gi.z),n.push(gi.x,gi.y,gi.z)},addColor:function(t,i,r){let a=this.colors,n=this.object.geometry.colors;a[t]!==void 0&&n.push(a[t+0],a[t+1],a[t+2]),a[i]!==void 0&&n.push(a[i+0],a[i+1],a[i+2]),a[r]!==void 0&&n.push(a[r+0],a[r+1],a[r+2])},addUV:function(t,i,r){let a=this.uvs,n=this.object.geometry.uvs;n.push(a[t+0],a[t+1]),n.push(a[i+0],a[i+1]),n.push(a[r+0],a[r+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,r,a,n,s,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(i,h),m=this.parseVertexIndex(r,h);if(this.addVertex(u,d,m),this.addColor(u,d,m),o!==void 0&&o!==""){let v=this.normals.length;u=this.parseNormalIndex(o,v),d=this.parseNormalIndex(l,v),m=this.parseNormalIndex(c,v),this.addNormal(u,d,m)}else this.addFaceNormal(u,d,m);if(a!==void 0&&a!==""){let v=this.uvs.length;u=this.parseUVIndex(a,v),d=this.parseUVIndex(n,v),m=this.parseUVIndex(s,v),this.addUV(u,d,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let i=this.vertices.length;for(let r=0,a=t.length;r<a;r++){let n=this.parseVertexIndex(t[r],i);this.addVertexPoint(n),this.addColor(n)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";let r=this.vertices.length,a=this.uvs.length;for(let n=0,s=t.length;n<s;n++)this.addVertexLine(this.parseVertexIndex(t[n],r));for(let n=0,s=i.length;n<s;n++)this.addUVLine(this.parseUVIndex(i[n],a))}};return e.startObject("",!1),e}var ym=class extends oi{constructor(e){super(e),this.materials=null}load(e,t,i,r){let a=this,n=new Qi(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(s){try{t(a.parse(s))}catch(o){r?r(o):console.error(o),a.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new xm;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),r=[];for(let n=0,s=i.length;n<s;n++){let o=i[n].trimStart();if(o.length===0)continue;let l=o.charAt(0);if(l!=="#")if(l==="v"){let c=o.split(Bc);switch(c[0]){case"v":t.vertices.push(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])),c.length>=7?(Bn.setRGB(parseFloat(c[4]),parseFloat(c[5]),parseFloat(c[6])).convertSRGBToLinear(),t.colors.push(Bn.r,Bn.g,Bn.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]));break;case"vt":t.uvs.push(parseFloat(c[1]),parseFloat(c[2]));break}}else if(l==="f"){let c=o.slice(1).trim().split(Bc),h=[];for(let d=0,m=c.length;d<m;d++){let v=c[d];if(v.length>0){let g=v.split("/");h.push(g)}}let u=h[0];for(let d=1,m=h.length-1;d<m;d++){let v=h[d],g=h[d+1];t.addFace(u[0],v[0],g[0],u[1],v[1],g[1],u[2],v[2],g[2])}}else if(l==="l"){let c=o.substring(1).trim().split(" "),h=[],u=[];if(o.indexOf("/")===-1)h=c;else for(let d=0,m=c.length;d<m;d++){let v=c[d].split("/");v[0]!==""&&h.push(v[0]),v[1]!==""&&u.push(v[1])}t.addLineGeometry(h,u)}else if(l==="p"){let c=o.slice(1).trim().split(" ");t.addPointGeometry(c)}else if((r=fm.exec(o))!==null){let c=(" "+r[0].slice(1).trim()).slice(1);t.startObject(c)}else if(_m.test(o))t.object.startMaterial(o.substring(7).trim(),t.materialLibraries);else if(gm.test(o))t.materialLibraries.push(o.substring(7).trim());else if(vm.test(o))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(l==="s"){if(r=o.split(" "),r.length>1){let h=r[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;let c=t.object.currentMaterial();c&&(c.smooth=t.object.smooth)}else{if(o==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+o+'"')}}t.finalize();let a=new hi;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let n=0,s=t.objects.length;n<s;n++){let o=t.objects[n],l=o.geometry,c=o.materials,h=l.type==="Line",u=l.type==="Points",d=!1;if(l.vertices.length===0)continue;let m=new Vt;m.setAttribute("position",new ut(l.vertices,3)),l.normals.length>0&&m.setAttribute("normal",new ut(l.normals,3)),l.colors.length>0&&(d=!0,m.setAttribute("color",new ut(l.colors,3))),l.hasUVIndices===!0&&m.setAttribute("uv",new ut(l.uvs,2));let v=[];for(let f=0,p=c.length;f<p;f++){let y=c[f],R=y.name+"_"+y.smooth+"_"+d,E=t.materials[R];if(this.materials!==null){if(E=this.materials.create(y.name),h&&E&&!(E instanceof Bi)){let B=new Bi;Gt.prototype.copy.call(B,E),B.color.copy(E.color),E=B}else if(u&&E&&!(E instanceof $i)){let B=new $i({size:10,sizeAttenuation:!1});Gt.prototype.copy.call(B,E),B.color.copy(E.color),B.map=E.map,E=B}}E===void 0&&(E=h?new Bi:u?new $i({size:1,sizeAttenuation:!1}):new Ai,E.name=y.name,E.flatShading=!y.smooth,E.vertexColors=d,t.materials[R]=E),v.push(E)}let g;if(v.length>1){for(let f=0,p=c.length;f<p;f++){let y=c[f];m.addGroup(y.groupStart,y.groupCount,f)}g=h?new Qr(m,v):u?new ea(m,v):new Tt(m,v)}else g=h?new Qr(m,v[0]):u?new ea(m,v[0]):new Tt(m,v[0]);g.name=o.name,a.add(g)}else if(t.vertices.length>0){let n=new $i({size:1,sizeAttenuation:!1}),s=new Vt;s.setAttribute("position",new ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(s.setAttribute("color",new ut(t.colors,3)),n.vertexColors=!0);let o=new ea(s,n);a.add(o)}return a}},bm=new De,Mm=()=>{},Sm=class extends HTMLElement{static get observedAttributes(){return["package","urdf","up","display-shadow","ambient-color","ignore-limits","show-collision"]}get package(){return this.getAttribute("package")||""}set package(e){this.setAttribute("package",e)}get urdf(){return this.getAttribute("urdf")||""}set urdf(e){this.setAttribute("urdf",e)}get ignoreLimits(){return this.hasAttribute("ignore-limits")||!1}set ignoreLimits(e){e?this.setAttribute("ignore-limits",e):this.removeAttribute("ignore-limits")}get up(){return this.getAttribute("up")||"+Z"}set up(e){this.setAttribute("up",e)}get displayShadow(){return this.hasAttribute("display-shadow")||!1}set displayShadow(e){e?this.setAttribute("display-shadow",""):this.removeAttribute("display-shadow")}get ambientColor(){return this.getAttribute("ambient-color")||"#8ea0a8"}set ambientColor(e){e?this.setAttribute("ambient-color",e):this.removeAttribute("ambient-color")}get autoRedraw(){return this.hasAttribute("auto-redraw")||!1}set autoRedraw(e){e?this.setAttribute("auto-redraw",!0):this.removeAttribute("auto-redraw")}get noAutoRecenter(){return this.hasAttribute("no-auto-recenter")||!1}set noAutoRecenter(e){e?this.setAttribute("no-auto-recenter",!0):this.removeAttribute("no-auto-recenter")}get showCollision(){return this.hasAttribute("show-collision")||!1}set showCollision(e){e?this.setAttribute("show-collision",!0):this.removeAttribute("show-collision")}get jointValues(){let e={};if(this.robot)for(let t in this.robot.joints){let i=this.robot.joints[t];e[t]=i.jointValue.length===1?i.angle:[...i.jointValue]}return e}set jointValues(e){this.setJointValues(e)}get angles(){return this.jointValues}set angles(e){this.jointValues=e}constructor(){super(),this._requestId=0,this._dirty=!1,this._loadScheduled=!1,this.robot=null,this.loadMeshFunc=null,this.urlModifierFunc=null;let e=new Ds,t=new yc(this.ambientColor,"#000");t.groundColor.lerp(t.color,.5*Math.PI),t.intensity=.5,t.position.set(0,1,0),e.add(t);let i=new Ra(16777215,Math.PI);i.position.set(4,10,1),i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.normalBias=.001,i.castShadow=!0,e.add(i),e.add(i.target);let r=new oc({antialias:!0,alpha:!0});r.setClearColor(16777215),r.setClearAlpha(0),r.shadowMap.enabled=!0,r.shadowMap.type=2,r.outputColorSpace=Ct;let a=new Nt(75,1,.1,1e3);a.position.z=-10;let n=new wt;e.add(n);let s=new Tt(new Nn(40,40),new gc({side:2,transparent:!0,opacity:.25}));s.rotation.x=-Math.PI/2,s.position.y=-.5,s.receiveShadow=!0,s.scale.set(10,10,10),e.add(s);let o=new kc(a,r.domElement);o.rotateSpeed=2,o.zoomSpeed=5,o.panSpeed=2,o.enableZoom=!0,o.enableDamping=!1,o.maxDistance=50,o.minDistance=.25,o.addEventListener("change",()=>this.recenter()),this.scene=e,this.world=n,this.renderer=r,this.camera=a,this.controls=o,this.plane=s,this.directionalLight=i,this.ambientLight=t,this._setUp(this.up),this._collisionMaterial=new Ai({transparent:!0,opacity:.35,shininess:2.5,premultipliedAlpha:!0,color:16760376,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});let l=()=>{this.parentNode&&(this.updateSize(),(this._dirty||this.autoRedraw)&&(this.noAutoRecenter||this._updateEnvironment(),this.renderer.render(e,a),this._dirty=!1),this.controls.update()),this._renderLoopId=requestAnimationFrame(l)};l()}connectedCallback(){if(!this.constructor._styletag){let e=document.createElement("style");e.innerHTML=`
                ${this.tagName} { display: block; }
                ${this.tagName} canvas {
                    width: 100%;
                    height: 100%;
                }
            `,document.head.appendChild(e),this.constructor._styletag=e}this.childElementCount===0&&this.appendChild(this.renderer.domElement),this.updateSize(),requestAnimationFrame(()=>this.updateSize())}disconnectedCallback(){cancelAnimationFrame(this._renderLoopId)}attributeChangedCallback(e,t,i){switch(this._updateCollisionVisibility(),this.noAutoRecenter||this.recenter(),e){case"package":case"urdf":this._scheduleLoad();break;case"up":this._setUp(this.up);break;case"ambient-color":this.ambientLight.color.set(this.ambientColor),this.ambientLight.groundColor.set("#000").lerp(this.ambientLight.color,.5);break;case"ignore-limits":this._setIgnoreLimits(this.ignoreLimits,!0);break}}updateSize(){let e=this.renderer,t=this.clientWidth,i=this.clientHeight,r=e.getSize(bm);(r.width!==t||r.height!==i)&&this.recenter(),e.setPixelRatio(window.devicePixelRatio),e.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix()}redraw(){this._dirty=!0}recenter(){this._updateEnvironment(),this.redraw()}setJointValue(e,...t){this.robot&&this.robot.joints[e]&&this.robot.joints[e].setJointValue(...t)&&(this.redraw(),this.dispatchEvent(new CustomEvent("angle-change",{bubbles:!0,cancelable:!0,detail:e})))}setJointValues(e){for(let t in e)Array.isArray(e[t])?this.setJointValue(t,...e[t]):this.setJointValue(t,e[t])}_updateEnvironment(){let e=this.robot;if(!e)return;this.world.updateMatrixWorld();let t=new mi;t.makeEmpty(),e.traverse(a=>{a.isURDFVisual&&t.expandByObject(a)});let i=t.getCenter(new U);this.controls.target.y=i.y,this.plane.position.y=t.min.y-.001;let r=this.directionalLight;if(r.castShadow=this.displayShadow,this.displayShadow){let a=t.getBoundingSphere(new li).radius,n=r.shadow.camera;n.left=n.bottom=-a,n.right=n.top=a;let s=r.position.clone().sub(r.target.position);r.target.position.copy(i),r.position.copy(i).add(s),n.updateProjectionMatrix()}}_scheduleLoad(){this._prevload!==`${this.package}|${this.urdf}`&&(this._prevload=`${this.package}|${this.urdf}`,!this._loadScheduled&&(this._loadScheduled=!0,this.robot&&=(this.robot.traverse(e=>e.dispose&&e.dispose()),this.robot.parent.remove(this.robot),null),requestAnimationFrame(()=>{this._loadUrdf(this.package,this.urdf),this._loadScheduled=!1})))}_loadUrdf(e,t){if(this.dispatchEvent(new CustomEvent("urdf-change",{bubbles:!0,cancelable:!0,composed:!0})),t){this._requestId++;let i=this._requestId,r=o=>{o.traverse(l=>{if(l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material)){let c=(Array.isArray(l.material)?l.material:[l.material]).map(h=>(h instanceof pi&&(h=new Ai),h.map&&(h.map.colorSpace=Ct),h));l.material=c.length===1?c[0]:c}})};e.includes(":")&&e.split(":")[1].substring(0,2)!=="//"&&(e=e.split(",").reduce((o,l)=>{let c=l.split(/:/).filter(u=>!!u),h=c.shift().trim();return o[h]=c.join(":").trim(),o},{}));let a=null,n=new Bs;n.onLoad=()=>{if(this._requestId!==i){a.traverse(o=>o.dispose&&o.dispose());return}this.robot=a,this.world.add(a),r(a),this._setIgnoreLimits(this.ignoreLimits),this._updateCollisionVisibility(),this.dispatchEvent(new CustomEvent("urdf-processed",{bubbles:!0,cancelable:!0,composed:!0})),this.dispatchEvent(new CustomEvent("geometry-loaded",{bubbles:!0,cancelable:!0,composed:!0})),this.recenter()},this.urlModifierFunc&&n.setURLModifier(this.urlModifierFunc);let s=new Ec(n);s.packages=e,s.loadMeshCb=this.loadMeshFunc,s.fetchOptions={mode:"cors",credentials:"same-origin"},s.parseCollision=!0,s.load(t,o=>a=o)}}_updateCollisionVisibility(){let e=this.showCollision,t=this._collisionMaterial,i=this.robot;if(i===null)return;let r=[];i.traverse(a=>{a.isURDFCollider&&(a.visible=e,r.push(a))}),r.forEach(a=>{a.traverse(n=>{n.isMesh&&(n.raycast=Mm,n.material=t,n.castShadow=!1)})})}_setUp(e){e||="+Z",e=e.toUpperCase();let t=e.replace(/[^-+]/g,"")[0]||"+",i=e.replace(/[^XYZ]/gi,"")[0]||"Z",r=Math.PI,a=r/2;i==="X"&&this.world.rotation.set(0,0,t==="+"?a:-a),i==="Z"&&this.world.rotation.set(t==="+"?-a:a,0,0),i==="Y"&&this.world.rotation.set(t==="+"?0:r,0,0)}_setIgnoreLimits(e,t=!1){this.robot&&Object.values(this.robot.joints).forEach(i=>{i.ignoreLimits=e,i.setJointValue(...i.jointValue)}),t&&this.dispatchEvent(new CustomEvent("ignore-limits-change",{bubbles:!0,cancelable:!0,composed:!0}))}},Em=class extends Sm{static get observedAttributes(){return["highlight-color",...super.observedAttributes]}get disableDragging(){return this.hasAttribute("disable-dragging")}set disableDragging(e){e?this.setAttribute("disable-dragging",!!e):this.removeAttribute("disable-dragging")}get highlightColor(){return this.getAttribute("highlight-color")||"#FFFFFF"}set highlightColor(e){e?this.setAttribute("highlight-color",e):this.removeAttribute("highlight-color")}constructor(...e){super(...e),this.highlightMaterial=new Ai({shininess:10,color:this.highlightColor,emissive:this.highlightColor,emissiveIntensity:.25});let t=n=>n.isURDFJoint&&n.jointType!=="fixed",i=(n,s)=>{let o=l=>{if(l.type==="Mesh"&&(s?(l.material=l.__origMaterial,delete l.__origMaterial):(l.__origMaterial=l.material,l.material=this.highlightMaterial)),l===n||!t(l))for(let c=0;c<l.children.length;c++)l.children[c].isURDFCollider||o(l.children[c])};o(n)},r=this.renderer.domElement,a=new Uc(this.scene,this.camera,r);a.onDragStart=n=>{this.dispatchEvent(new CustomEvent("manipulate-start",{bubbles:!0,cancelable:!0,detail:n.name})),this.controls.enabled=!1,this.redraw()},a.onDragEnd=n=>{this.dispatchEvent(new CustomEvent("manipulate-end",{bubbles:!0,cancelable:!0,detail:n.name})),this.controls.enabled=!0,this.redraw()},a.updateJoint=(n,s)=>{this.setJointValue(n.name,s)},a.onHover=n=>{i(n,!1),this.dispatchEvent(new CustomEvent("joint-mouseover",{bubbles:!0,cancelable:!0,detail:n.name})),this.redraw()},a.onUnhover=n=>{i(n,!0),this.dispatchEvent(new CustomEvent("joint-mouseout",{bubbles:!0,cancelable:!0,detail:n.name})),this.redraw()},this.dragControls=a}disconnectedCallback(){super.disconnectedCallback(),this.dragControls.dispose()}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e)==="highlight-color"&&(this.highlightMaterial.color.set(this.highlightColor),this.highlightMaterial.emissive.set(this.highlightColor))}};customElements.define("urdf-viewer",Em);var at=document.querySelector("urdf-viewer"),ro=document.getElementById("ignore-joint-limits"),ao=document.getElementById("collision-toggle"),zn=document.getElementById("radians-toggle"),no=document.getElementById("autocenter-toggle"),Gc=document.getElementById("up-select"),Tm=document.querySelector("#controls ul"),so=document.getElementById("controls"),wm=document.getElementById("toggle-controls"),aa=document.getElementById("do-animate"),oo=document.getElementById("hide-fixed"),Na=Math.PI/180,Am=1/Na,br={},Wc=e=>{document.body.style.backgroundColor=e,at.highlightColor="#"+new Pe(16777215).lerp(new Pe(e),.35).getHexString()};ro.addEventListener("click",()=>{ro.classList.toggle("checked"),at.ignoreLimits=ro.classList.contains("checked")}),zn.addEventListener("click",()=>{zn.classList.toggle("checked"),Object.values(br).forEach(e=>e.update())}),ao.addEventListener("click",()=>{ao.classList.toggle("checked"),at.showCollision=ao.classList.contains("checked")}),no.addEventListener("click",()=>{no.classList.toggle("checked"),at.noAutoRecenter=!no.classList.contains("checked")}),oo.addEventListener("click",()=>{oo.classList.toggle("checked"),oo.classList.contains("checked")?so.classList.add("hide-fixed"):so.classList.remove("hide-fixed")}),Gc.addEventListener("change",()=>at.up=Gc.value),wm.addEventListener("click",()=>so.classList.toggle("hidden")),at.addEventListener("urdf-change",()=>{Object.values(br).forEach(e=>e.remove()),br={}}),at.addEventListener("ignore-limits-change",()=>{Object.values(br).forEach(e=>e.update())}),at.addEventListener("angle-change",e=>{br[e.detail]&&br[e.detail].update()}),at.addEventListener("joint-mouseover",e=>{let t=document.querySelector(`li[joint-name="${e.detail}"]`);t&&t.setAttribute("robot-hovered",!0)}),at.addEventListener("joint-mouseout",e=>{let t=document.querySelector(`li[joint-name="${e.detail}"]`);t&&t.removeAttribute("robot-hovered")});var jc;at.addEventListener("manipulate-start",e=>{let t=document.querySelector(`li[joint-name="${e.detail}"]`);t&&(t.scrollIntoView({block:"nearest"}),window.scrollTo(0,0)),jc=at.noAutoRecenter,at.noAutoRecenter=!0}),at.addEventListener("manipulate-end",e=>{at.noAutoRecenter=jc}),at.addEventListener("urdf-processed",()=>{let e=at.robot;Object.keys(e.joints).sort((t,i)=>{let r=t.split(/[^\d]+/g).filter(n=>!!n).pop(),a=i.split(/[^\d]+/g).filter(n=>!!n).pop();if(r!==void 0&&a!==void 0){let n=parseFloat(r)-parseFloat(a);if(n!==0)return n}return t>i?1:i>t?-1:0}).map(t=>e.joints[t]).forEach(t=>{let i=document.createElement("li");i.innerHTML=`
            <span title="${t.name}">${t.name}</span>
            <input type="range" value="0" step="0.0001"/>
            <input type="number" step="0.0001" />
            `,i.setAttribute("joint-type",t.jointType),i.setAttribute("joint-name",t.name),Tm.appendChild(i);let r=i.querySelector('input[type="range"]'),a=i.querySelector('input[type="number"]');switch(i.update=()=>{let n=zn.classList.contains("checked")?1:Am,s=t.angle;(t.jointType==="revolute"||t.jointType==="continuous")&&(s*=n),s=Math.abs(s)>1?s.toFixed(1):s.toPrecision(2),a.value=parseFloat(s),r.value=t.angle,at.ignoreLimits||t.jointType==="continuous"?(r.min=-6.28,r.max=6.28,a.min=-6.28*n,a.max=6.28*n):(r.min=t.limit.lower,r.max=t.limit.upper,a.min=t.limit.lower*n,a.max=t.limit.upper*n)},t.jointType){case"continuous":case"prismatic":case"revolute":break;default:i.update=()=>{},a.remove(),r.remove()}r.addEventListener("input",()=>{at.setJointValue(t.name,r.value),i.update()}),a.addEventListener("change",()=>{let n=zn.classList.contains("checked")?1:Na;at.setJointValue(t.name,a.value*n),i.update()}),i.update(),br[t.name]=i})}),document.addEventListener("WebComponentsReady",()=>{at.loadMeshFunc=(e,t,i,r)=>{switch(e.split(/\./g).pop().toLowerCase()){case"gltf":case"glb":new Pc(t).load(e,a=>r(a.scene),null,a=>r(null,a));break;case"obj":new ym(t).load(e,a=>{a.traverse(n=>{n.material&&=i}),r(a)},null,a=>r(null,a));break;case"dae":new qs(t).load(e,a=>r(a.scene),null,a=>r(null,a));break;case"stl":new Xs(t).load(e,a=>{r(new Tt(a,i))},null,a=>r(null,a));break}},document.querySelector("li[urdf]").dispatchEvent(new Event("click")),/javascript\/example\/bundle/i.test(window.location)&&(at.package="../../../urdf"),mm(at,()=>{Wc("#263238"),aa.classList.remove("checked"),Yc()})});var Xc=()=>{if(!at.setJointValue)return;let e=at.angles;for(let i in e)Array.isArray(e[i])?e[i].fill(0):e[i]=0;at.setJointValues(e);let t=Date.now()/300;for(let i=1;i<=6;i++){let r=i*Math.PI/3,a=Math.max(0,Math.sin(t+r));at.setJointValue(`HP${i}`,$t.lerp(30,0,a)*Na),at.setJointValue(`KP${i}`,$t.lerp(90,150,a)*Na),at.setJointValue(`AP${i}`,$t.lerp(-30,-60,a)*Na),at.setJointValue(`TC${i}A`,$t.lerp(0,.065,a)),at.setJointValue(`TC${i}B`,$t.lerp(0,.065,a)),at.setJointValue(`W${i}`,window.performance.now()*.001)}},qc=()=>{aa.classList.contains("checked")&&Xc(),requestAnimationFrame(qc)},Yc=()=>{document.querySelectorAll("#urdf-options li[urdf]").forEach(e=>{e.addEventListener("click",t=>{let i=t.target.getAttribute("urdf"),r=t.target.getAttribute("color");at.up="-Z",document.getElementById("up-select").value=at.up,at.urdf=i,aa.classList.add("checked"),Wc(r)})})};Yc(),document.addEventListener("WebComponentsReady",()=>{aa.addEventListener("click",()=>aa.classList.toggle("checked")),at.addEventListener("manipulate-start",e=>aa.classList.remove("checked")),at.addEventListener("urdf-processed",e=>Xc()),qc(),at.camera.position.set(-5.5,3.5,5.5)});})();
