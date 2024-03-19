(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hh={exports:{}},js={},Vh={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi=Symbol.for("react.element"),vy=Symbol.for("react.portal"),yy=Symbol.for("react.fragment"),_y=Symbol.for("react.strict_mode"),wy=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),xy=Symbol.for("react.memo"),Ty=Symbol.for("react.lazy"),mf=Symbol.iterator;function Iy(t){return t===null||typeof t!="object"?null:(t=mf&&t[mf]||t["@@iterator"],typeof t=="function"?t:null)}var Yh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gh=Object.assign,Kh={};function Dr(t,e,n){this.props=t,this.context=e,this.refs=Kh,this.updater=n||Yh}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Dr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qh(){}Qh.prototype=Dr.prototype;function Ru(t,e,n){this.props=t,this.context=e,this.refs=Kh,this.updater=n||Yh}var Ou=Ru.prototype=new Qh;Ou.constructor=Ru;Gh(Ou,Dr.prototype);Ou.isPureReactComponent=!0;var gf=Array.isArray,qh=Object.prototype.hasOwnProperty,Du={current:null},Xh={key:!0,ref:!0,__self:!0,__source:!0};function Jh(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)qh.call(e,r)&&!Xh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qi,type:t,key:o,ref:s,props:i,_owner:Du.current}}function Ny(t,e){return{$$typeof:Qi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qi}function by(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vf=/\/+/g;function ga(t,e){return typeof t=="object"&&t!==null&&t.key!=null?by(""+t.key):e.toString(36)}function jo(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Qi:case vy:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+ga(s,0):r,gf(i)?(n="",t!=null&&(n=t.replace(vf,"$&/")+"/"),jo(i,e,n,"",function(u){return u})):i!=null&&(Mu(i)&&(i=Ny(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(vf,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",gf(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+ga(o,a);s+=jo(o,e,n,l,i)}else if(l=Iy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+ga(o,a++),s+=jo(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function co(t,e,n){if(t==null)return t;var r=[],i=0;return jo(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Ay(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Uo={transition:null},Py={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:Du};F.Children={map:co,forEach:function(t,e,n){co(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return co(t,function(){e++}),e},toArray:function(t){return co(t,function(e){return e})||[]},only:function(t){if(!Mu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Dr;F.Fragment=yy;F.Profiler=wy;F.PureComponent=Ru;F.StrictMode=_y;F.Suspense=ky;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Py;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gh({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Du.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qh.call(e,l)&&!Xh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qi,type:t.type,key:i,ref:o,props:r,_owner:s}};F.createContext=function(t){return t={$$typeof:Ey,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sy,_context:t},t.Consumer=t};F.createElement=Jh;F.createFactory=function(t){var e=Jh.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:Cy,render:t}};F.isValidElement=Mu;F.lazy=function(t){return{$$typeof:Ty,_payload:{_status:-1,_result:t},_init:Ay}};F.memo=function(t,e){return{$$typeof:xy,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=Uo.transition;Uo.transition={};try{t()}finally{Uo.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return Pe.current.useCallback(t,e)};F.useContext=function(t){return Pe.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};F.useEffect=function(t,e){return Pe.current.useEffect(t,e)};F.useId=function(){return Pe.current.useId()};F.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return Pe.current.useMemo(t,e)};F.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};F.useRef=function(t){return Pe.current.useRef(t)};F.useState=function(t){return Pe.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return Pe.current.useTransition()};F.version="18.2.0";Vh.exports=F;var Qe=Vh.exports;const Lu=$h(Qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry=Qe,Oy=Symbol.for("react.element"),Dy=Symbol.for("react.fragment"),My=Object.prototype.hasOwnProperty,Ly=Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fy={key:!0,ref:!0,__self:!0,__source:!0};function Zh(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)My.call(e,r)&&!Fy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Oy,type:t,key:o,ref:s,props:i,_owner:Ly.current}}js.Fragment=Dy;js.jsx=Zh;js.jsxs=Zh;Hh.exports=js;var C=Hh.exports,il={},ep={exports:{}},He={},tp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,R){var O=N.length;N.push(R);e:for(;0<O;){var se=O-1>>>1,he=N[se];if(0<i(he,R))N[se]=R,N[O]=he,O=se;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var R=N[0],O=N.pop();if(O!==R){N[0]=O;e:for(var se=0,he=N.length,lo=he>>>1;se<lo;){var gn=2*(se+1)-1,ma=N[gn],vn=gn+1,uo=N[vn];if(0>i(ma,O))vn<he&&0>i(uo,ma)?(N[se]=uo,N[vn]=O,se=vn):(N[se]=ma,N[gn]=O,se=gn);else if(vn<he&&0>i(uo,O))N[se]=uo,N[vn]=O,se=vn;else break e}}return R}function i(N,R){var O=N.sortIndex-R.sortIndex;return O!==0?O:N.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,c=null,d=3,g=!1,v=!1,_=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=N)r(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(u)}}function y(N){if(_=!1,m(N),!v)if(n(l)!==null)v=!0,ha(S);else{var R=n(u);R!==null&&pa(y,R.startTime-N)}}function S(N,R){v=!1,_&&(_=!1,p(P),P=-1),g=!0;var O=d;try{for(m(R),c=n(l);c!==null&&(!(c.expirationTime>R)||N&&!nt());){var se=c.callback;if(typeof se=="function"){c.callback=null,d=c.priorityLevel;var he=se(c.expirationTime<=R);R=t.unstable_now(),typeof he=="function"?c.callback=he:c===n(l)&&r(l),m(R)}else r(l);c=n(l)}if(c!==null)var lo=!0;else{var gn=n(u);gn!==null&&pa(y,gn.startTime-R),lo=!1}return lo}finally{c=null,d=O,g=!1}}var T=!1,I=null,P=-1,W=5,D=-1;function nt(){return!(t.unstable_now()-D<W)}function $r(){if(I!==null){var N=t.unstable_now();D=N;var R=!0;try{R=I(!0,N)}finally{R?Hr():(T=!1,I=null)}}else T=!1}var Hr;if(typeof h=="function")Hr=function(){h($r)};else if(typeof MessageChannel<"u"){var pf=new MessageChannel,gy=pf.port2;pf.port1.onmessage=$r,Hr=function(){gy.postMessage(null)}}else Hr=function(){A($r,0)};function ha(N){I=N,T||(T=!0,Hr())}function pa(N,R){P=A(function(){N(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ha(S))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var O=d;d=R;try{return N()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,R){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=d;d=N;try{return R()}finally{d=O}},t.unstable_scheduleCallback=function(N,R,O){var se=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?se+O:se):O=se,N){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=O+he,N={id:f++,callback:R,priorityLevel:N,startTime:O,expirationTime:he,sortIndex:-1},O>se?(N.sortIndex=O,e(u,N),n(l)===null&&N===n(u)&&(_?(p(P),P=-1):_=!0,pa(y,O-se))):(N.sortIndex=he,e(l,N),v||g||(v=!0,ha(S))),N},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(N){var R=d;return function(){var O=d;d=R;try{return N.apply(this,arguments)}finally{d=O}}}})(np);tp.exports=np;var zy=tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=Qe,$e=zy;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ip=new Set,Ei={};function $n(t,e){Er(t,e),Er(t+"Capture",e)}function Er(t,e){for(Ei[t]=e,t=0;t<e.length;t++)ip.add(e[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},_f={};function Uy(t){return ol.call(_f,t)?!0:ol.call(yf,t)?!1:jy.test(t)?_f[t]=!0:(yf[t]=!0,!1)}function Wy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function By(t,e,n,r){if(e===null||typeof e>"u"||Wy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fu,zu);Ee[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fu,zu);Ee[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fu,zu);Ee[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function ju(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(By(e,n,i,r)&&(n=null),r||i===null?Uy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),op=Symbol.for("react.provider"),sp=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),Bu=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),ap=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Vr(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,va;function ri(t){if(va===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);va=e&&e[1]||""}return`
`+va+t}var ya=!1;function _a(t,e){if(!t||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ri(t):""}function $y(t){switch(t.tag){case 5:return ri(t.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return t=_a(t.type,!1),t;case 11:return t=_a(t.type.render,!1),t;case 1:return t=_a(t.type,!0),t;default:return""}}function ul(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qn:return"Fragment";case Qn:return"Portal";case sl:return"Profiler";case Uu:return"StrictMode";case al:return"Suspense";case ll:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sp:return(t.displayName||"Context")+".Consumer";case op:return(t._context.displayName||"Context")+".Provider";case Wu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bu:return e=t.displayName||null,e!==null?e:ul(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return ul(t(e))}catch{}}return null}function Hy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(e);case 8:return e===Uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function an(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vy(t){var e=lp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ho(t){t._valueTracker||(t._valueTracker=Vy(t))}function up(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cl(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=an(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cp(t,e){e=e.checked,e!=null&&ju(t,"checked",e,!1)}function fl(t,e){cp(t,e);var n=an(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dl(t,e.type,n):e.hasOwnProperty("defaultValue")&&dl(t,e.type,an(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ef(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dl(t,e,n){(e!=="number"||Zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ii=Array.isArray;function fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+an(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(ii(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:an(n)}}function fp(t,e){var n=an(e.value),r=an(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var po,hp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ci(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yy=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(t){Yy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),li[e]=li[t]})});function pp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||li.hasOwnProperty(t)&&li[t]?(""+e).trim():e+"px"}function mp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Gy=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(t,e){if(e){if(Gy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function gl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yl=null,dr=null,hr=null;function xf(t){if(t=Ji(t)){if(typeof yl!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Hs(e),yl(t.stateNode,t.type,e))}}function gp(t){dr?hr?hr.push(t):hr=[t]:dr=t}function vp(){if(dr){var t=dr,e=hr;if(hr=dr=null,xf(t),e)for(t=0;t<e.length;t++)xf(e[t])}}function yp(t,e){return t(e)}function _p(){}var wa=!1;function wp(t,e,n){if(wa)return t(e,n);wa=!0;try{return yp(t,e,n)}finally{wa=!1,(dr!==null||hr!==null)&&(_p(),vp())}}function ki(t,e){var n=t.stateNode;if(n===null)return null;var r=Hs(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var _l=!1;if(Nt)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{_l=!1}function Ky(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ui=!1,es=null,ts=!1,wl=null,Qy={onError:function(t){ui=!0,es=t}};function qy(t,e,n,r,i,o,s,a,l){ui=!1,es=null,Ky.apply(Qy,arguments)}function Xy(t,e,n,r,i,o,s,a,l){if(qy.apply(this,arguments),ui){if(ui){var u=es;ui=!1,es=null}else throw Error(w(198));ts||(ts=!0,wl=u)}}function Hn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tf(t){if(Hn(t)!==t)throw Error(w(188))}function Jy(t){var e=t.alternate;if(!e){if(e=Hn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Tf(i),t;if(o===r)return Tf(i),e;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Ep(t){return t=Jy(t),t!==null?Cp(t):null}function Cp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cp(t);if(e!==null)return e;t=t.sibling}return null}var kp=$e.unstable_scheduleCallback,If=$e.unstable_cancelCallback,Zy=$e.unstable_shouldYield,e_=$e.unstable_requestPaint,ae=$e.unstable_now,t_=$e.unstable_getCurrentPriorityLevel,Hu=$e.unstable_ImmediatePriority,xp=$e.unstable_UserBlockingPriority,ns=$e.unstable_NormalPriority,n_=$e.unstable_LowPriority,Tp=$e.unstable_IdlePriority,Us=null,_t=null;function r_(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Us,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:s_,i_=Math.log,o_=Math.LN2;function s_(t){return t>>>=0,t===0?32:31-(i_(t)/o_|0)|0}var mo=64,go=4194304;function oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=oi(a):(o&=s,o!==0&&(r=oi(o)))}else s=n&~i,s!==0?r=oi(s):o!==0&&(r=oi(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ct(e),i=1<<n,r|=t[n],e&=~i;return r}function a_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ct(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=a_(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Sl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ip(){var t=mo;return mo<<=1,!(mo&4194240)&&(mo=64),t}function Sa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ct(e),t[e]=n}function u_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Vu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function Np(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bp,Yu,Ap,Pp,Rp,El=!1,vo=[],Qt=null,qt=null,Xt=null,xi=new Map,Ti=new Map,Ht=[],c_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(e.pointerId)}}function Gr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ji(e),e!==null&&Yu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function f_(t,e,n,r,i){switch(e){case"focusin":return Qt=Gr(Qt,t,e,n,r,i),!0;case"dragenter":return qt=Gr(qt,t,e,n,r,i),!0;case"mouseover":return Xt=Gr(Xt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return xi.set(o,Gr(xi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ti.set(o,Gr(Ti.get(o)||null,t,e,n,r,i)),!0}return!1}function Op(t){var e=En(t.target);if(e!==null){var n=Hn(e);if(n!==null){if(e=n.tag,e===13){if(e=Sp(n),e!==null){t.blockedOn=e,Rp(t.priority,function(){Ap(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return e=Ji(n),e!==null&&Yu(e),t.blockedOn=n,!1;e.shift()}return!0}function bf(t,e,n){Wo(t)&&n.delete(e)}function d_(){El=!1,Qt!==null&&Wo(Qt)&&(Qt=null),qt!==null&&Wo(qt)&&(qt=null),Xt!==null&&Wo(Xt)&&(Xt=null),xi.forEach(bf),Ti.forEach(bf)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,El||(El=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,d_)))}function Ii(t){function e(i){return Kr(i,t)}if(0<vo.length){Kr(vo[0],t);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qt!==null&&Kr(Qt,t),qt!==null&&Kr(qt,t),Xt!==null&&Kr(Xt,t),xi.forEach(e),Ti.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Ht.shift()}var pr=Ft.ReactCurrentBatchConfig,is=!0;function h_(t,e,n,r){var i=$,o=pr.transition;pr.transition=null;try{$=1,Gu(t,e,n,r)}finally{$=i,pr.transition=o}}function p_(t,e,n,r){var i=$,o=pr.transition;pr.transition=null;try{$=4,Gu(t,e,n,r)}finally{$=i,pr.transition=o}}function Gu(t,e,n,r){if(is){var i=Cl(t,e,n,r);if(i===null)Pa(t,e,r,os,n),Nf(t,r);else if(f_(i,t,e,n,r))r.stopPropagation();else if(Nf(t,r),e&4&&-1<c_.indexOf(t)){for(;i!==null;){var o=Ji(i);if(o!==null&&bp(o),o=Cl(t,e,n,r),o===null&&Pa(t,e,r,os,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Pa(t,e,r,null,n)}}var os=null;function Cl(t,e,n,r){if(os=null,t=$u(r),t=En(t),t!==null)if(e=Hn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return os=t,null}function Dp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t_()){case Hu:return 1;case xp:return 4;case ns:case n_:return 16;case Tp:return 536870912;default:return 16}default:return 16}}var Yt=null,Ku=null,Bo=null;function Mp(){if(Bo)return Bo;var t,e=Ku,n=e.length,r,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Bo=i.slice(t,1<r?1-r:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Af(){return!1}function Ve(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yo:Af,this.isPropagationStopped=Af,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=Ve(Mr),Xi=re({},Mr,{view:0,detail:0}),m_=Ve(Xi),Ea,Ca,Qr,Ws=re({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(Ea=t.screenX-Qr.screenX,Ca=t.screenY-Qr.screenY):Ca=Ea=0,Qr=t),Ea)},movementY:function(t){return"movementY"in t?t.movementY:Ca}}),Pf=Ve(Ws),g_=re({},Ws,{dataTransfer:0}),v_=Ve(g_),y_=re({},Xi,{relatedTarget:0}),ka=Ve(y_),__=re({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=Ve(__),S_=re({},Mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E_=Ve(S_),C_=re({},Mr,{data:0}),Rf=Ve(C_),k_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T_[t])?!!e[t]:!1}function qu(){return I_}var N_=re({},Xi,{key:function(t){if(t.key){var e=k_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b_=Ve(N_),A_=re({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Ve(A_),P_=re({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),R_=Ve(P_),O_=re({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=Ve(O_),M_=re({},Ws,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=Ve(M_),F_=[9,13,27,32],Xu=Nt&&"CompositionEvent"in window,ci=null;Nt&&"documentMode"in document&&(ci=document.documentMode);var z_=Nt&&"TextEvent"in window&&!ci,Lp=Nt&&(!Xu||ci&&8<ci&&11>=ci),Df=" ",Mf=!1;function Fp(t,e){switch(t){case"keyup":return F_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xn=!1;function j_(t,e){switch(t){case"compositionend":return zp(e);case"keypress":return e.which!==32?null:(Mf=!0,Df);case"textInput":return t=e.data,t===Df&&Mf?null:t;default:return null}}function U_(t,e){if(Xn)return t==="compositionend"||!Xu&&Fp(t,e)?(t=Mp(),Bo=Ku=Yt=null,Xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lp&&e.locale!=="ko"?null:e.data;default:return null}}var W_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W_[t.type]:e==="textarea"}function jp(t,e,n,r){gp(r),e=ss(e,"onChange"),0<e.length&&(n=new Qu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,Ni=null;function B_(t){qp(t,0)}function Bs(t){var e=er(t);if(up(e))return t}function $_(t,e){if(t==="change")return e}var Up=!1;if(Nt){var xa;if(Nt){var Ta="oninput"in document;if(!Ta){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),Ta=typeof Ff.oninput=="function"}xa=Ta}else xa=!1;Up=xa&&(!document.documentMode||9<document.documentMode)}function zf(){fi&&(fi.detachEvent("onpropertychange",Wp),Ni=fi=null)}function Wp(t){if(t.propertyName==="value"&&Bs(Ni)){var e=[];jp(e,Ni,t,$u(t)),wp(B_,e)}}function H_(t,e,n){t==="focusin"?(zf(),fi=e,Ni=n,fi.attachEvent("onpropertychange",Wp)):t==="focusout"&&zf()}function V_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bs(Ni)}function Y_(t,e){if(t==="click")return Bs(e)}function G_(t,e){if(t==="input"||t==="change")return Bs(e)}function K_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:K_;function bi(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(e,i)||!ht(t[i],e[i]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uf(t,e){var n=jf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function Bp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $p(){for(var t=window,e=Zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zo(t.document)}return e}function Ju(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q_(t){var e=$p(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bp(n.ownerDocument.documentElement,n)){if(r!==null&&Ju(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Uf(n,o);var s=Uf(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q_=Nt&&"documentMode"in document&&11>=document.documentMode,Jn=null,kl=null,di=null,xl=!1;function Wf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xl||Jn==null||Jn!==Zo(r)||(r=Jn,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&bi(di,r)||(di=r,r=ss(kl,"onSelect"),0<r.length&&(e=new Qu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jn)))}function _o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zn={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Ia={},Hp={};Nt&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function $s(t){if(Ia[t])return Ia[t];if(!Zn[t])return t;var e=Zn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hp)return Ia[t]=e[n];return t}var Vp=$s("animationend"),Yp=$s("animationiteration"),Gp=$s("animationstart"),Kp=$s("transitionend"),Qp=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(t,e){Qp.set(t,e),$n(e,[t])}for(var Na=0;Na<Bf.length;Na++){var ba=Bf[Na],X_=ba.toLowerCase(),J_=ba[0].toUpperCase()+ba.slice(1);hn(X_,"on"+J_)}hn(Vp,"onAnimationEnd");hn(Yp,"onAnimationIteration");hn(Gp,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Kp,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function $f(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Xy(r,e,void 0,t),t.currentTarget=null}function qp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;$f(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;$f(i,a,u),o=l}}}if(ts)throw t=wl,ts=!1,wl=null,t}function G(t,e){var n=e[Al];n===void 0&&(n=e[Al]=new Set);var r=t+"__bubble";n.has(r)||(Xp(e,t,2,!1),n.add(r))}function Aa(t,e,n){var r=0;e&&(r|=4),Xp(n,t,r,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ai(t){if(!t[wo]){t[wo]=!0,ip.forEach(function(n){n!=="selectionchange"&&(Z_.has(n)||Aa(n,!1,t),Aa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wo]||(e[wo]=!0,Aa("selectionchange",!1,e))}}function Xp(t,e,n,r){switch(Dp(e)){case 1:var i=h_;break;case 4:i=p_;break;default:i=Gu}n=i.bind(null,e,n,t),i=void 0,!_l||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pa(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=En(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wp(function(){var u=o,f=$u(n),c=[];e:{var d=Qp.get(t);if(d!==void 0){var g=Qu,v=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":g=b_;break;case"focusin":v="focus",g=ka;break;case"focusout":v="blur",g=ka;break;case"beforeblur":case"afterblur":g=ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=v_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=R_;break;case Vp:case Yp:case Gp:g=w_;break;case Kp:g=D_;break;case"scroll":g=m_;break;case"wheel":g=L_;break;case"copy":case"cut":case"paste":g=E_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Of}var _=(e&4)!==0,A=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var h=u,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=ki(h,p),y!=null&&_.push(Pi(h,y,m)))),A)break;h=h.return}0<_.length&&(d=new g(d,v,null,n,f),c.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==vl&&(v=n.relatedTarget||n.fromElement)&&(En(v)||v[bt]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?En(v):null,v!==null&&(A=Hn(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=Pf,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Of,y="onPointerLeave",p="onPointerEnter",h="pointer"),A=g==null?d:er(g),m=v==null?d:er(v),d=new _(y,h+"leave",g,n,f),d.target=A,d.relatedTarget=m,y=null,En(f)===u&&(_=new _(p,h+"enter",v,n,f),_.target=m,_.relatedTarget=A,y=_),A=y,g&&v)t:{for(_=g,p=v,h=0,m=_;m;m=Gn(m))h++;for(m=0,y=p;y;y=Gn(y))m++;for(;0<h-m;)_=Gn(_),h--;for(;0<m-h;)p=Gn(p),m--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=Gn(_),p=Gn(p)}_=null}else _=null;g!==null&&Hf(c,d,g,_,!1),v!==null&&A!==null&&Hf(c,A,v,_,!0)}}e:{if(d=u?er(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=$_;else if(Lf(d))if(Up)S=G_;else{S=V_;var T=H_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Y_);if(S&&(S=S(t,u))){jp(c,S,n,f);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&dl(d,"number",d.value)}switch(T=u?er(u):window,t){case"focusin":(Lf(T)||T.contentEditable==="true")&&(Jn=T,kl=u,di=null);break;case"focusout":di=kl=Jn=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,Wf(c,n,f);break;case"selectionchange":if(q_)break;case"keydown":case"keyup":Wf(c,n,f)}var I;if(Xu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xn?Fp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Lp&&n.locale!=="ko"&&(Xn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xn&&(I=Mp()):(Yt=f,Ku="value"in Yt?Yt.value:Yt.textContent,Xn=!0)),T=ss(u,P),0<T.length&&(P=new Rf(P,t,null,n,f),c.push({event:P,listeners:T}),I?P.data=I:(I=zp(n),I!==null&&(P.data=I)))),(I=z_?j_(t,n):U_(t,n))&&(u=ss(u,"onBeforeInput"),0<u.length&&(f=new Rf("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=I))}qp(c,e)})}function Pi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ss(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ki(t,n),o!=null&&r.unshift(Pi(t,o,i)),o=ki(t,e),o!=null&&r.push(Pi(t,o,i))),t=t.return}return r}function Gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hf(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ki(n,o),l!=null&&s.unshift(Pi(n,l,a))):i||(l=ki(n,o),l!=null&&s.push(Pi(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function Vf(t){return(typeof t=="string"?t:""+t).replace(e0,`
`).replace(t0,"")}function So(t,e,n){if(e=Vf(e),Vf(t)!==e&&n)throw Error(w(425))}function as(){}var Tl=null,Il=null;function Nl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(t){return Yf.resolve(null).then(t).catch(i0)}:bl;function i0(t){setTimeout(function(){throw t})}function Ra(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ii(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ii(e)}function Jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Lr,Ri="__reactProps$"+Lr,bt="__reactContainer$"+Lr,Al="__reactEvents$"+Lr,o0="__reactListeners$"+Lr,s0="__reactHandles$"+Lr;function En(t){var e=t[gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gf(t);t!==null;){if(n=t[gt])return n;t=Gf(t)}return e}t=n,n=t.parentNode}return null}function Ji(t){return t=t[gt]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Hs(t){return t[Ri]||null}var Pl=[],tr=-1;function pn(t){return{current:t}}function X(t){0>tr||(t.current=Pl[tr],Pl[tr]=null,tr--)}function Y(t,e){tr++,Pl[tr]=t.current,t.current=e}var ln={},Ne=pn(ln),Le=pn(!1),Rn=ln;function Cr(t,e){var n=t.type.contextTypes;if(!n)return ln;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function ls(){X(Le),X(Ne)}function Kf(t,e,n){if(Ne.current!==ln)throw Error(w(168));Y(Ne,e),Y(Le,n)}function Jp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,Hy(t)||"Unknown",i));return re({},n,r)}function us(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ln,Rn=Ne.current,Y(Ne,t),Y(Le,Le.current),!0}function Qf(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Jp(t,e,Rn),r.__reactInternalMemoizedMergedChildContext=t,X(Le),X(Ne),Y(Ne,t)):X(Le),Y(Le,n)}var Et=null,Vs=!1,Oa=!1;function Zp(t){Et===null?Et=[t]:Et.push(t)}function a0(t){Vs=!0,Zp(t)}function mn(){if(!Oa&&Et!==null){Oa=!0;var t=0,e=$;try{var n=Et;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,Vs=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),kp(Hu,mn),i}finally{$=e,Oa=!1}}return null}var nr=[],rr=0,cs=null,fs=0,Ge=[],Ke=0,On=null,Ct=1,kt="";function yn(t,e){nr[rr++]=fs,nr[rr++]=cs,cs=t,fs=e}function em(t,e,n){Ge[Ke++]=Ct,Ge[Ke++]=kt,Ge[Ke++]=On,On=t;var r=Ct;t=kt;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ct=1<<32-ct(e)+i|n<<i|r,kt=o+t}else Ct=1<<o|n<<i|r,kt=t}function Zu(t){t.return!==null&&(yn(t,1),em(t,1,0))}function ec(t){for(;t===cs;)cs=nr[--rr],nr[rr]=null,fs=nr[--rr],nr[rr]=null;for(;t===On;)On=Ge[--Ke],Ge[Ke]=null,kt=Ge[--Ke],Ge[Ke]=null,Ct=Ge[--Ke],Ge[Ke]=null}var Be=null,We=null,ee=!1,st=null;function tm(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=Jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=On!==null?{id:Ct,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function Rl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ol(t){if(ee){var e=We;if(e){var n=e;if(!qf(t,e)){if(Rl(t))throw Error(w(418));e=Jt(n.nextSibling);var r=Be;e&&qf(t,e)?tm(r,n):(t.flags=t.flags&-4097|2,ee=!1,Be=t)}}else{if(Rl(t))throw Error(w(418));t.flags=t.flags&-4097|2,ee=!1,Be=t}}}function Xf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Eo(t){if(t!==Be)return!1;if(!ee)return Xf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nl(t.type,t.memoizedProps)),e&&(e=We)){if(Rl(t))throw nm(),Error(w(418));for(;e;)tm(t,e),e=Jt(e.nextSibling)}if(Xf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=Jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?Jt(t.stateNode.nextSibling):null;return!0}function nm(){for(var t=We;t;)t=Jt(t.nextSibling)}function kr(){We=Be=null,ee=!1}function tc(t){st===null?st=[t]:st.push(t)}var l0=Ft.ReactCurrentBatchConfig;function it(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ds=pn(null),hs=null,ir=null,nc=null;function rc(){nc=ir=hs=null}function ic(t){var e=ds.current;X(ds),t._currentValue=e}function Dl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mr(t,e){hs=t,nc=ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(nc!==t)if(t={context:t,memoizedValue:e,next:null},ir===null){if(hs===null)throw Error(w(308));ir=t,hs.dependencies={lanes:0,firstContext:t}}else ir=ir.next=t;return e}var Cn=null;function oc(t){Cn===null?Cn=[t]:Cn.push(t)}function rm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,oc(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,oc(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function Ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vu(t,n)}}function Jf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ps(t,e,n,r){var i=t.updateQueue;$t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,f=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(g,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(g,c,d):v,d==null)break e;c=re({},c,d);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=c):f=f.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Mn|=s,t.lanes=s,t.memoizedState=c}}function Zf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var om=new rp.Component().refs;function Ml(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ys={isMounted:function(t){return(t=t._reactInternals)?Hn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=tn(t),o=Tt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Zt(t,o,i),e!==null&&(ft(e,t,i,r),Ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=tn(t),o=Tt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Zt(t,o,i),e!==null&&(ft(e,t,i,r),Ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=tn(t),i=Tt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zt(t,i,r),e!==null&&(ft(e,t,r,n),Ho(e,t,r))}};function ed(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!bi(n,r)||!bi(i,o):!0}function sm(t,e,n){var r=!1,i=ln,o=e.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(i=Fe(e)?Rn:Ne.current,r=e.contextTypes,o=(r=r!=null)?Cr(t,i):ln),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ys,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function td(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ys.enqueueReplaceState(e,e.state,null)}function Ll(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=om,sc(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ze(o):(o=Fe(e)?Rn:Ne.current,i.context=Cr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ml(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ys.enqueueReplaceState(i,i.state,null),ps(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===om&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Co(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nd(t){var e=t._init;return e(t._payload)}function am(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=nn(p,h),p.index=0,p.sibling=null,p}function o(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,y){return h===null||h.tag!==6?(h=Ua(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,y){var S=m.type;return S===qn?f(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&nd(S)===h.type)?(y=i(h,m.props),y.ref=qr(p,h,m),y.return=p,y):(y=qo(m.type,m.key,m.props,null,p.mode,y),y.ref=qr(p,h,m),y.return=p,y)}function u(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Wa(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function f(p,h,m,y,S){return h===null||h.tag!==7?(h=An(m,p.mode,y,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ua(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fo:return m=qo(h.type,h.key,h.props,null,p.mode,m),m.ref=qr(p,null,h),m.return=p,m;case Qn:return h=Wa(h,p.mode,m),h.return=p,h;case Bt:var y=h._init;return c(p,y(h._payload),m)}if(ii(h)||Vr(h))return h=An(h,p.mode,m,null),h.return=p,h;Co(p,h)}return null}function d(p,h,m,y){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:return m.key===S?l(p,h,m,y):null;case Qn:return m.key===S?u(p,h,m,y):null;case Bt:return S=m._init,d(p,h,S(m._payload),y)}if(ii(m)||Vr(m))return S!==null?null:f(p,h,m,y,null);Co(p,m)}return null}function g(p,h,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fo:return p=p.get(y.key===null?m:y.key)||null,l(h,p,y,S);case Qn:return p=p.get(y.key===null?m:y.key)||null,u(h,p,y,S);case Bt:var T=y._init;return g(p,h,m,T(y._payload),S)}if(ii(y)||Vr(y))return p=p.get(m)||null,f(h,p,y,S,null);Co(h,y)}return null}function v(p,h,m,y){for(var S=null,T=null,I=h,P=h=0,W=null;I!==null&&P<m.length;P++){I.index>P?(W=I,I=null):W=I.sibling;var D=d(p,I,m[P],y);if(D===null){I===null&&(I=W);break}t&&I&&D.alternate===null&&e(p,I),h=o(D,h,P),T===null?S=D:T.sibling=D,T=D,I=W}if(P===m.length)return n(p,I),ee&&yn(p,P),S;if(I===null){for(;P<m.length;P++)I=c(p,m[P],y),I!==null&&(h=o(I,h,P),T===null?S=I:T.sibling=I,T=I);return ee&&yn(p,P),S}for(I=r(p,I);P<m.length;P++)W=g(I,p,P,m[P],y),W!==null&&(t&&W.alternate!==null&&I.delete(W.key===null?P:W.key),h=o(W,h,P),T===null?S=W:T.sibling=W,T=W);return t&&I.forEach(function(nt){return e(p,nt)}),ee&&yn(p,P),S}function _(p,h,m,y){var S=Vr(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var T=S=null,I=h,P=h=0,W=null,D=m.next();I!==null&&!D.done;P++,D=m.next()){I.index>P?(W=I,I=null):W=I.sibling;var nt=d(p,I,D.value,y);if(nt===null){I===null&&(I=W);break}t&&I&&nt.alternate===null&&e(p,I),h=o(nt,h,P),T===null?S=nt:T.sibling=nt,T=nt,I=W}if(D.done)return n(p,I),ee&&yn(p,P),S;if(I===null){for(;!D.done;P++,D=m.next())D=c(p,D.value,y),D!==null&&(h=o(D,h,P),T===null?S=D:T.sibling=D,T=D);return ee&&yn(p,P),S}for(I=r(p,I);!D.done;P++,D=m.next())D=g(I,p,P,D.value,y),D!==null&&(t&&D.alternate!==null&&I.delete(D.key===null?P:D.key),h=o(D,h,P),T===null?S=D:T.sibling=D,T=D);return t&&I.forEach(function($r){return e(p,$r)}),ee&&yn(p,P),S}function A(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fo:e:{for(var S=m.key,T=h;T!==null;){if(T.key===S){if(S=m.type,S===qn){if(T.tag===7){n(p,T.sibling),h=i(T,m.props.children),h.return=p,p=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&nd(S)===T.type){n(p,T.sibling),h=i(T,m.props),h.ref=qr(p,T,m),h.return=p,p=h;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===qn?(h=An(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=qo(m.type,m.key,m.props,null,p.mode,y),y.ref=qr(p,h,m),y.return=p,p=y)}return s(p);case Qn:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Wa(m,p.mode,y),h.return=p,p=h}return s(p);case Bt:return T=m._init,A(p,h,T(m._payload),y)}if(ii(m))return v(p,h,m,y);if(Vr(m))return _(p,h,m,y);Co(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Ua(m,p.mode,y),h.return=p,p=h),s(p)):n(p,h)}return A}var xr=am(!0),lm=am(!1),Zi={},wt=pn(Zi),Oi=pn(Zi),Di=pn(Zi);function kn(t){if(t===Zi)throw Error(w(174));return t}function ac(t,e){switch(Y(Di,e),Y(Oi,t),Y(wt,Zi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pl(e,t)}X(wt),Y(wt,e)}function Tr(){X(wt),X(Oi),X(Di)}function um(t){kn(Di.current);var e=kn(wt.current),n=pl(e,t.type);e!==n&&(Y(Oi,t),Y(wt,n))}function lc(t){Oi.current===t&&(X(wt),X(Oi))}var te=pn(0);function ms(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Da=[];function uc(){for(var t=0;t<Da.length;t++)Da[t]._workInProgressVersionPrimary=null;Da.length=0}var Vo=Ft.ReactCurrentDispatcher,Ma=Ft.ReactCurrentBatchConfig,Dn=0,ne=null,ue=null,me=null,gs=!1,hi=!1,Mi=0,u0=0;function Ce(){throw Error(w(321))}function cc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function fc(t,e,n,r,i,o){if(Dn=o,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?h0:p0,t=n(r,i),hi){o=0;do{if(hi=!1,Mi=0,25<=o)throw Error(w(301));o+=1,me=ue=null,e.updateQueue=null,Vo.current=m0,t=n(r,i)}while(hi)}if(Vo.current=vs,e=ue!==null&&ue.next!==null,Dn=0,me=ue=ne=null,gs=!1,e)throw Error(w(300));return t}function dc(){var t=Mi!==0;return Mi=0,t}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=t:me=me.next=t,me}function et(){if(ue===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=me===null?ne.memoizedState:me.next;if(e!==null)me=e,ue=t;else{if(t===null)throw Error(w(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?ne.memoizedState=me=t:me=me.next=t}return me}function Li(t,e){return typeof e=="function"?e(t):e}function La(t){var e=et(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Dn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,ne.lanes|=f,Mn|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ht(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,ne.lanes|=o,Mn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fa(t){var e=et(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ht(o,e.memoizedState)||(De=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function cm(){}function fm(t,e){var n=ne,r=et(),i=e(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,hc(pm.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Fi(9,hm.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(w(349));Dn&30||dm(n,e,i)}return i}function dm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hm(t,e,n,r){e.value=n,e.getSnapshot=r,mm(e)&&gm(t)}function pm(t,e,n){return n(function(){mm(e)&&gm(t)})}function mm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function gm(t){var e=At(t,1);e!==null&&ft(e,t,1,-1)}function rd(t){var e=mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},e.queue=t,t=t.dispatch=d0.bind(null,ne,t),[e.memoizedState,t]}function Fi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vm(){return et().memoizedState}function Yo(t,e,n,r){var i=mt();ne.flags|=t,i.memoizedState=Fi(1|e,n,void 0,r===void 0?null:r)}function Gs(t,e,n,r){var i=et();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&cc(r,s.deps)){i.memoizedState=Fi(e,n,o,r);return}}ne.flags|=t,i.memoizedState=Fi(1|e,n,o,r)}function id(t,e){return Yo(8390656,8,t,e)}function hc(t,e){return Gs(2048,8,t,e)}function ym(t,e){return Gs(4,2,t,e)}function _m(t,e){return Gs(4,4,t,e)}function wm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sm(t,e,n){return n=n!=null?n.concat([t]):null,Gs(4,4,wm.bind(null,e,t),n)}function pc(){}function Em(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Cm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function km(t,e,n){return Dn&21?(ht(n,e)||(n=Ip(),ne.lanes|=n,Mn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function c0(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Ma.transition;Ma.transition={};try{t(!1),e()}finally{$=n,Ma.transition=r}}function xm(){return et().memoizedState}function f0(t,e,n){var r=tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tm(t))Im(e,n);else if(n=rm(t,e,n,r),n!==null){var i=Ae();ft(n,t,r,i),Nm(n,e,r)}}function d0(t,e,n){var r=tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tm(t))Im(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,s)){var l=e.interleaved;l===null?(i.next=i,oc(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rm(t,e,i,r),n!==null&&(i=Ae(),ft(n,t,r,i),Nm(n,e,r))}}function Tm(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function Im(t,e){hi=gs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vu(t,n)}}var vs={readContext:Ze,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},h0={readContext:Ze,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:id,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,wm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=f0.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:rd,useDebugValue:pc,useDeferredValue:function(t){return mt().memoizedState=t},useTransition:function(){var t=rd(!1),e=t[0];return t=c0.bind(null,t[1]),mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=mt();if(ee){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),ve===null)throw Error(w(349));Dn&30||dm(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,id(pm.bind(null,r,o,t),[t]),r.flags|=2048,Fi(9,hm.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=mt(),e=ve.identifierPrefix;if(ee){var n=kt,r=Ct;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Mi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=u0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},p0={readContext:Ze,useCallback:Em,useContext:Ze,useEffect:hc,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:_m,useMemo:Cm,useReducer:La,useRef:vm,useState:function(){return La(Li)},useDebugValue:pc,useDeferredValue:function(t){var e=et();return km(e,ue.memoizedState,t)},useTransition:function(){var t=La(Li)[0],e=et().memoizedState;return[t,e]},useMutableSource:cm,useSyncExternalStore:fm,useId:xm,unstable_isNewReconciler:!1},m0={readContext:Ze,useCallback:Em,useContext:Ze,useEffect:hc,useImperativeHandle:Sm,useInsertionEffect:ym,useLayoutEffect:_m,useMemo:Cm,useReducer:Fa,useRef:vm,useState:function(){return Fa(Li)},useDebugValue:pc,useDeferredValue:function(t){var e=et();return ue===null?e.memoizedState=t:km(e,ue.memoizedState,t)},useTransition:function(){var t=Fa(Li)[0],e=et().memoizedState;return[t,e]},useMutableSource:cm,useSyncExternalStore:fm,useId:xm,unstable_isNewReconciler:!1};function Ir(t,e){try{var n="",r=e;do n+=$y(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function za(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function bm(t,e,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_s||(_s=!0,Gl=r),Fl(t,e)},n}function Am(t,e,n){n=Tt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fl(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fl(t,e),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function od(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new g0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=A0.bind(null,t,e,n),e.then(t,t))}function sd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ad(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tt(-1,1),e.tag=2,Zt(n,e,1))),n.lanes|=1),t)}var v0=Ft.ReactCurrentOwner,De=!1;function be(t,e,n,r){e.child=t===null?lm(e,null,n,r):xr(e,t.child,n,r)}function ld(t,e,n,r,i){n=n.render;var o=e.ref;return mr(e,i),r=fc(t,e,n,r,o,i),n=dc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(ee&&n&&Zu(e),e.flags|=1,be(t,e,r,i),e.child)}function ud(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Ec(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Pm(t,e,o,r,i)):(t=qo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(s,r)&&t.ref===e.ref)return Pt(t,e,i)}return e.flags|=1,t=nn(o,r),t.ref=e.ref,t.return=e,e.child=t}function Pm(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(bi(o,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Pt(t,e,i)}return zl(t,e,n,r,i)}function Rm(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(sr,Ue),Ue|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(sr,Ue),Ue|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(sr,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Y(sr,Ue),Ue|=r;return be(t,e,i,n),e.child}function Om(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zl(t,e,n,r,i){var o=Fe(n)?Rn:Ne.current;return o=Cr(e,o),mr(e,i),n=fc(t,e,n,r,o,i),r=dc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(ee&&r&&Zu(e),e.flags|=1,be(t,e,n,i),e.child)}function cd(t,e,n,r,i){if(Fe(n)){var o=!0;us(e)}else o=!1;if(mr(e,i),e.stateNode===null)Go(t,e),sm(e,n,r),Ll(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Fe(n)?Rn:Ne.current,u=Cr(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&td(e,s,r,u),$t=!1;var d=e.memoizedState;s.state=d,ps(e,r,s,i),l=e.memoizedState,a!==r||d!==l||Le.current||$t?(typeof f=="function"&&(Ml(e,n,f,r),l=e.memoizedState),(a=$t||ed(e,n,a,r,d,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,im(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:it(e.type,a),s.props=u,c=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ze(l):(l=Fe(n)?Rn:Ne.current,l=Cr(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||d!==l)&&td(e,s,r,l),$t=!1,d=e.memoizedState,s.state=d,ps(e,r,s,i);var v=e.memoizedState;a!==c||d!==v||Le.current||$t?(typeof g=="function"&&(Ml(e,n,g,r),v=e.memoizedState),(u=$t||ed(e,n,u,r,d,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return jl(t,e,n,r,o,i)}function jl(t,e,n,r,i,o){Om(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Qf(e,n,!1),Pt(t,e,o);r=e.stateNode,v0.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=xr(e,t.child,null,o),e.child=xr(e,null,a,o)):be(t,e,a,o),e.memoizedState=r.state,i&&Qf(e,n,!0),e.child}function Dm(t){var e=t.stateNode;e.pendingContext?Kf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kf(t,e.context,!1),ac(t,e.containerInfo)}function fd(t,e,n,r,i){return kr(),tc(i),e.flags|=256,be(t,e,n,r),e.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Wl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mm(t,e,n){var r=e.pendingProps,i=te.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(te,i&1),t===null)return Ol(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qs(s,r,0,null),t=An(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Wl(n),e.memoizedState=Ul,t):mc(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return y0(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=nn(a,o):(o=An(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Wl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Ul,r}return o=t.child,t=o.sibling,r=nn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mc(t,e){return e=qs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ko(t,e,n,r){return r!==null&&tc(r),xr(e,t.child,null,n),t=mc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y0(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=za(Error(w(422))),ko(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=qs({mode:"visible",children:r.children},i,0,null),o=An(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&xr(e,t.child,null,s),e.child.memoizedState=Wl(s),e.memoizedState=Ul,o);if(!(e.mode&1))return ko(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=za(o,r,void 0),ko(t,e,s,r)}if(a=(s&t.childLanes)!==0,De||a){if(r=ve,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,At(t,i),ft(r,t,i,-1))}return Sc(),r=za(Error(w(421))),ko(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=P0.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,We=Jt(i.nextSibling),Be=e,ee=!0,st=null,t!==null&&(Ge[Ke++]=Ct,Ge[Ke++]=kt,Ge[Ke++]=On,Ct=t.id,kt=t.overflow,On=e),e=mc(e,r.children),e.flags|=4096,e)}function dd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dl(t.return,e,n)}function ja(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Lm(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(be(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dd(t,n,e);else if(t.tag===19)dd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ms(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ja(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ms(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ja(e,!0,n,null,o);break;case"together":ja(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _0(t,e,n){switch(e.tag){case 3:Dm(e),kr();break;case 5:um(e);break;case 1:Fe(e.type)&&us(e);break;case 4:ac(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(ds,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?Mm(t,e,n):(Y(te,te.current&1),t=Pt(t,e,n),t!==null?t.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Lm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,Rm(t,e,n)}return Pt(t,e,n)}var Fm,Bl,zm,jm;Fm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};zm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kn(wt.current);var o=null;switch(n){case"input":i=cl(t,i),r=cl(t,r),o=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":i=hl(t,i),r=hl(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=as)}ml(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};jm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xr(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function w0(t,e,n){var r=e.pendingProps;switch(ec(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return Fe(e.type)&&ls(),ke(e),null;case 3:return r=e.stateNode,Tr(),X(Le),X(Ne),uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,st!==null&&(ql(st),st=null))),Bl(t,e),ke(e),null;case 5:lc(e);var i=kn(Di.current);if(n=e.type,t!==null&&e.stateNode!=null)zm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return ke(e),null}if(t=kn(wt.current),Eo(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[gt]=e,r[Ri]=o,t=(e.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)G(si[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Sf(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":Cf(r,o),G("invalid",r)}ml(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&So(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&So(r.textContent,a,t),i=["children",""+a]):Ei.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":ho(r),Ef(r,o,!0);break;case"textarea":ho(r),kf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=as)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[gt]=e,t[Ri]=r,Fm(t,e,!1,!1),e.stateNode=t;e:{switch(s=gl(n,r),n){case"dialog":G("cancel",t),G("close",t),i=r;break;case"iframe":case"object":case"embed":G("load",t),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)G(si[i],t);i=r;break;case"source":G("error",t),i=r;break;case"img":case"image":case"link":G("error",t),G("load",t),i=r;break;case"details":G("toggle",t),i=r;break;case"input":Sf(t,r),i=cl(t,r),G("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),G("invalid",t);break;case"textarea":Cf(t,r),i=hl(t,r),G("invalid",t);break;default:i=r}ml(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mp(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hp(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ci(t,l):typeof l=="number"&&Ci(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?l!=null&&o==="onScroll"&&G("scroll",t):l!=null&&ju(t,o,l,s))}switch(n){case"input":ho(t),Ef(t,r,!1);break;case"textarea":ho(t),kf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+an(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?fr(t,!!r.multiple,o,!1):r.defaultValue!=null&&fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=as)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ke(e),null;case 6:if(t&&e.stateNode!=null)jm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=kn(Di.current),kn(wt.current),Eo(e)){if(r=e.stateNode,n=e.memoizedProps,r[gt]=e,(o=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:So(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&So(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=e,e.stateNode=r}return ke(e),null;case 13:if(X(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&We!==null&&e.mode&1&&!(e.flags&128))nm(),kr(),e.flags|=98560,o=!1;else if(o=Eo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(w(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[gt]=e}else kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),o=!1}else st!==null&&(ql(st),st=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?fe===0&&(fe=3):Sc())),e.updateQueue!==null&&(e.flags|=4),ke(e),null);case 4:return Tr(),Bl(t,e),t===null&&Ai(e.stateNode.containerInfo),ke(e),null;case 10:return ic(e.type._context),ke(e),null;case 17:return Fe(e.type)&&ls(),ke(e),null;case 19:if(X(te),o=e.memoizedState,o===null)return ke(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Xr(o,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ms(t),s!==null){for(e.flags|=128,Xr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(te,te.current&1|2),e.child}t=t.sibling}o.tail!==null&&ae()>Nr&&(e.flags|=128,r=!0,Xr(o,!1),e.lanes=4194304)}else{if(!r)if(t=ms(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return ke(e),null}else 2*ae()-o.renderingStartTime>Nr&&n!==1073741824&&(e.flags|=128,r=!0,Xr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ae(),e.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),e):(ke(e),null);case 22:case 23:return wc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function S0(t,e){switch(ec(e),e.tag){case 1:return Fe(e.type)&&ls(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Tr(),X(Le),X(Ne),uc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lc(e),null;case 13:if(X(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(te),null;case 4:return Tr(),null;case 10:return ic(e.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var xo=!1,xe=!1,E0=typeof WeakSet=="function"?WeakSet:Set,x=null;function or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function $l(t,e,n){try{n()}catch(r){ie(t,e,r)}}var hd=!1;function C0(t,e){if(Tl=is,t=$p(),Ju(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(g=c.firstChild)!==null;)d=c,c=g;for(;;){if(c===t)break t;if(d===n&&++u===i&&(a=s),d===o&&++f===r&&(l=s),(g=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Il={focusedElem:t,selectionRange:n},is=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,A=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:it(e.type,_),A);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){ie(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=hd,hd=!1,v}function pi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&$l(e,n,o)}i=i.next}while(i!==r)}}function Ks(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Um(t){var e=t.alternate;e!==null&&(t.alternate=null,Um(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gt],delete e[Ri],delete e[Al],delete e[o0],delete e[s0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wm(t){return t.tag===5||t.tag===3||t.tag===4}function pd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=as));else if(r!==4&&(t=t.child,t!==null))for(Vl(t,e,n),t=t.sibling;t!==null;)Vl(t,e,n),t=t.sibling}function Yl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yl(t,e,n),t=t.sibling;t!==null;)Yl(t,e,n),t=t.sibling}var ye=null,ot=!1;function Ut(t,e,n){for(n=n.child;n!==null;)Bm(t,e,n),n=n.sibling}function Bm(t,e,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Us,n)}catch{}switch(n.tag){case 5:xe||or(n,e);case 6:var r=ye,i=ot;ye=null,Ut(t,e,n),ye=r,ot=i,ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ot?(t=ye,n=n.stateNode,t.nodeType===8?Ra(t.parentNode,n):t.nodeType===1&&Ra(t,n),Ii(t)):Ra(ye,n.stateNode));break;case 4:r=ye,i=ot,ye=n.stateNode.containerInfo,ot=!0,Ut(t,e,n),ye=r,ot=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$l(n,e,s),i=i.next}while(i!==r)}Ut(t,e,n);break;case 1:if(!xe&&(or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,e,a)}Ut(t,e,n);break;case 21:Ut(t,e,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Ut(t,e,n),xe=r):Ut(t,e,n);break;default:Ut(t,e,n)}}function md(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E0),e.forEach(function(r){var i=R0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,ot=!1;break e;case 3:ye=a.stateNode.containerInfo,ot=!0;break e;case 4:ye=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(ye===null)throw Error(w(160));Bm(o,s,i),ye=null,ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$m(e,t),e=e.sibling}function $m(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),pt(t),r&4){try{pi(3,t,t.return),Ks(3,t)}catch(_){ie(t,t.return,_)}try{pi(5,t,t.return)}catch(_){ie(t,t.return,_)}}break;case 1:rt(e,t),pt(t),r&512&&n!==null&&or(n,n.return);break;case 5:if(rt(e,t),pt(t),r&512&&n!==null&&or(n,n.return),t.flags&32){var i=t.stateNode;try{Ci(i,"")}catch(_){ie(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&cp(i,o),gl(a,s);var u=gl(a,o);for(s=0;s<l.length;s+=2){var f=l[s],c=l[s+1];f==="style"?mp(i,c):f==="dangerouslySetInnerHTML"?hp(i,c):f==="children"?Ci(i,c):ju(i,f,c,u)}switch(a){case"input":fl(i,o);break;case"textarea":fp(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?fr(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?fr(i,!!o.multiple,o.defaultValue,!0):fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ri]=o}catch(_){ie(t,t.return,_)}}break;case 6:if(rt(e,t),pt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){ie(t,t.return,_)}}break;case 3:if(rt(e,t),pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(e.containerInfo)}catch(_){ie(t,t.return,_)}break;case 4:rt(e,t),pt(t);break;case 13:rt(e,t),pt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yc=ae())),r&4&&md(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(u=xe)||f,rt(e,t),xe=u):rt(e,t),pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(x=t,f=t.child;f!==null;){for(c=x=f;x!==null;){switch(d=x,g=d.child,d.tag){case 0:case 11:case 14:case 15:pi(4,d,d.return);break;case 1:or(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ie(r,n,_)}}break;case 5:or(d,d.return);break;case 22:if(d.memoizedState!==null){vd(c);continue}}g!==null?(g.return=d,x=g):vd(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pp("display",s))}catch(_){ie(t,t.return,_)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){ie(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:rt(e,t),pt(t),r&4&&md(t);break;case 21:break;default:rt(e,t),pt(t)}}function pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ci(i,""),r.flags&=-33);var o=pd(t);Yl(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=pd(t);Vl(t,a,s);break;default:throw Error(w(161))}}catch(l){ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k0(t,e,n){x=t,Hm(t)}function Hm(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||xo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||xe;a=xo;var u=xe;if(xo=s,(xe=l)&&!u)for(x=i;x!==null;)s=x,l=s.child,s.tag===22&&s.memoizedState!==null?yd(i):l!==null?(l.return=s,x=l):yd(i);for(;o!==null;)x=o,Hm(o),o=o.sibling;x=i,xo=a,xe=u}gd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,x=o):gd(t)}}function gd(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xe||Ks(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Zf(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zf(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Ii(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}xe||e.flags&512&&Hl(e)}catch(d){ie(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function vd(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function yd(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ks(4,e)}catch(l){ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ie(e,i,l)}}var o=e.return;try{Hl(e)}catch(l){ie(e,o,l)}break;case 5:var s=e.return;try{Hl(e)}catch(l){ie(e,s,l)}}}catch(l){ie(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var x0=Math.ceil,ys=Ft.ReactCurrentDispatcher,gc=Ft.ReactCurrentOwner,Je=Ft.ReactCurrentBatchConfig,U=0,ve=null,le=null,Se=0,Ue=0,sr=pn(0),fe=0,zi=null,Mn=0,Qs=0,vc=0,mi=null,Oe=null,yc=0,Nr=1/0,St=null,_s=!1,Gl=null,en=null,To=!1,Gt=null,ws=0,gi=0,Kl=null,Ko=-1,Qo=0;function Ae(){return U&6?ae():Ko!==-1?Ko:Ko=ae()}function tn(t){return t.mode&1?U&2&&Se!==0?Se&-Se:l0.transition!==null?(Qo===0&&(Qo=Ip()),Qo):(t=$,t!==0||(t=window.event,t=t===void 0?16:Dp(t.type)),t):1}function ft(t,e,n,r){if(50<gi)throw gi=0,Kl=null,Error(w(185));qi(t,n,r),(!(U&2)||t!==ve)&&(t===ve&&(!(U&2)&&(Qs|=n),fe===4&&Vt(t,Se)),ze(t,r),n===1&&U===0&&!(e.mode&1)&&(Nr=ae()+500,Vs&&mn()))}function ze(t,e){var n=t.callbackNode;l_(t,e);var r=rs(t,t===ve?Se:0);if(r===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?a0(_d.bind(null,t)):Zp(_d.bind(null,t)),r0(function(){!(U&6)&&mn()}),n=null;else{switch(Np(r)){case 1:n=Hu;break;case 4:n=xp;break;case 16:n=ns;break;case 536870912:n=Tp;break;default:n=ns}n=Jm(n,Vm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vm(t,e){if(Ko=-1,Qo=0,U&6)throw Error(w(327));var n=t.callbackNode;if(gr()&&t.callbackNode!==n)return null;var r=rs(t,t===ve?Se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ss(t,r);else{e=r;var i=U;U|=2;var o=Gm();(ve!==t||Se!==e)&&(St=null,Nr=ae()+500,bn(t,e));do try{N0();break}catch(a){Ym(t,a)}while(!0);rc(),ys.current=o,U=i,le!==null?e=0:(ve=null,Se=0,e=fe)}if(e!==0){if(e===2&&(i=Sl(t),i!==0&&(r=i,e=Ql(t,i))),e===1)throw n=zi,bn(t,0),Vt(t,r),ze(t,ae()),n;if(e===6)Vt(t,r);else{if(i=t.current.alternate,!(r&30)&&!T0(i)&&(e=Ss(t,r),e===2&&(o=Sl(t),o!==0&&(r=o,e=Ql(t,o))),e===1))throw n=zi,bn(t,0),Vt(t,r),ze(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:_n(t,Oe,St);break;case 3:if(Vt(t,r),(r&130023424)===r&&(e=yc+500-ae(),10<e)){if(rs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bl(_n.bind(null,t,Oe,St),e);break}_n(t,Oe,St);break;case 4:if(Vt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x0(r/1960))-r,10<r){t.timeoutHandle=bl(_n.bind(null,t,Oe,St),r);break}_n(t,Oe,St);break;case 5:_n(t,Oe,St);break;default:throw Error(w(329))}}}return ze(t,ae()),t.callbackNode===n?Vm.bind(null,t):null}function Ql(t,e){var n=mi;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Ss(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&ql(e)),t}function ql(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function T0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~vc,e&=~Qs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ct(e),r=1<<n;t[n]=-1,e&=~r}}function _d(t){if(U&6)throw Error(w(327));gr();var e=rs(t,0);if(!(e&1))return ze(t,ae()),null;var n=Ss(t,e);if(t.tag!==0&&n===2){var r=Sl(t);r!==0&&(e=r,n=Ql(t,r))}if(n===1)throw n=zi,bn(t,0),Vt(t,e),ze(t,ae()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_n(t,Oe,St),ze(t,ae()),null}function _c(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Nr=ae()+500,Vs&&mn())}}function Ln(t){Gt!==null&&Gt.tag===0&&!(U&6)&&gr();var e=U;U|=1;var n=Je.transition,r=$;try{if(Je.transition=null,$=1,t)return t()}finally{$=r,Je.transition=n,U=e,!(U&6)&&mn()}}function wc(){Ue=sr.current,X(sr)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,n0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ls();break;case 3:Tr(),X(Le),X(Ne),uc();break;case 5:lc(r);break;case 4:Tr();break;case 13:X(te);break;case 19:X(te);break;case 10:ic(r.type._context);break;case 22:case 23:wc()}n=n.return}if(ve=t,le=t=nn(t.current,null),Se=Ue=e,fe=0,zi=null,vc=Qs=Mn=0,Oe=mi=null,Cn!==null){for(e=0;e<Cn.length;e++)if(n=Cn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Cn=null}return t}function Ym(t,e){do{var n=le;try{if(rc(),Vo.current=vs,gs){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gs=!1}if(Dn=0,me=ue=ne=null,hi=!1,Mi=0,gc.current=null,n===null||n.return===null){fe=1,zi=e,le=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Se,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=sd(s);if(g!==null){g.flags&=-257,ad(g,s,a,o,e),g.mode&1&&od(o,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){od(o,u,e),Sc();break e}l=Error(w(426))}}else if(ee&&a.mode&1){var A=sd(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),ad(A,s,a,o,e),tc(Ir(l,a));break e}}o=l=Ir(l,a),fe!==4&&(fe=2),mi===null?mi=[o]:mi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=bm(o,l,e);Jf(o,p);break e;case 1:a=l;var h=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Am(o,a,e);Jf(o,y);break e}}o=o.return}while(o!==null)}Qm(n)}catch(S){e=S,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Gm(){var t=ys.current;return ys.current=vs,t===null?vs:t}function Sc(){(fe===0||fe===3||fe===2)&&(fe=4),ve===null||!(Mn&268435455)&&!(Qs&268435455)||Vt(ve,Se)}function Ss(t,e){var n=U;U|=2;var r=Gm();(ve!==t||Se!==e)&&(St=null,bn(t,e));do try{I0();break}catch(i){Ym(t,i)}while(!0);if(rc(),U=n,ys.current=r,le!==null)throw Error(w(261));return ve=null,Se=0,fe}function I0(){for(;le!==null;)Km(le)}function N0(){for(;le!==null&&!Zy();)Km(le)}function Km(t){var e=Xm(t.alternate,t,Ue);t.memoizedProps=t.pendingProps,e===null?Qm(t):le=e,gc.current=null}function Qm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=S0(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,le=null;return}}else if(n=w0(n,e,Ue),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);fe===0&&(fe=5)}function _n(t,e,n){var r=$,i=Je.transition;try{Je.transition=null,$=1,b0(t,e,n,r)}finally{Je.transition=i,$=r}return null}function b0(t,e,n,r){do gr();while(Gt!==null);if(U&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(u_(t,o),t===ve&&(le=ve=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,Jm(ns,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var s=$;$=1;var a=U;U|=4,gc.current=null,C0(t,n),$m(n,t),Q_(Il),is=!!Tl,Il=Tl=null,t.current=n,k0(n),e_(),U=a,$=s,Je.transition=o}else t.current=n;if(To&&(To=!1,Gt=t,ws=i),o=t.pendingLanes,o===0&&(en=null),r_(n.stateNode),ze(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_s)throw _s=!1,t=Gl,Gl=null,t;return ws&1&&t.tag!==0&&gr(),o=t.pendingLanes,o&1?t===Kl?gi++:(gi=0,Kl=t):gi=0,mn(),null}function gr(){if(Gt!==null){var t=Np(ws),e=Je.transition,n=$;try{if(Je.transition=null,$=16>t?16:t,Gt===null)var r=!1;else{if(t=Gt,Gt=null,ws=0,U&6)throw Error(w(331));var i=U;for(U|=4,x=t.current;x!==null;){var o=x,s=o.child;if(x.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var f=x;switch(f.tag){case 0:case 11:case 15:pi(8,f,o)}var c=f.child;if(c!==null)c.return=f,x=c;else for(;x!==null;){f=x;var d=f.sibling,g=f.return;if(Um(f),f===u){x=null;break}if(d!==null){d.return=g,x=d;break}x=g}}}var v=o.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var A=_.sibling;_.sibling=null,_=A}while(_!==null)}}x=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,x=s;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,x=p;break e}x=o.return}}var h=t.current;for(x=h;x!==null;){s=x;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,x=m;else e:for(s=h;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ks(9,a)}}catch(S){ie(a,a.return,S)}if(a===s){x=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,x=y;break e}x=a.return}}if(U=i,mn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Us,t)}catch{}r=!0}return r}finally{$=n,Je.transition=e}}return!1}function wd(t,e,n){e=Ir(n,e),e=bm(t,e,1),t=Zt(t,e,1),e=Ae(),t!==null&&(qi(t,1,e),ze(t,e))}function ie(t,e,n){if(t.tag===3)wd(t,t,n);else for(;e!==null;){if(e.tag===3){wd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){t=Ir(n,t),t=Am(e,t,1),e=Zt(e,t,1),t=Ae(),e!==null&&(qi(e,1,t),ze(e,t));break}}e=e.return}}function A0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(Se&n)===n&&(fe===4||fe===3&&(Se&130023424)===Se&&500>ae()-yc?bn(t,0):vc|=n),ze(t,e)}function qm(t,e){e===0&&(t.mode&1?(e=go,go<<=1,!(go&130023424)&&(go=4194304)):e=1);var n=Ae();t=At(t,e),t!==null&&(qi(t,e,n),ze(t,n))}function P0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qm(t,n)}function R0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),qm(t,n)}var Xm;Xm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Le.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,_0(t,e,n);De=!!(t.flags&131072)}else De=!1,ee&&e.flags&1048576&&em(e,fs,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Go(t,e),t=e.pendingProps;var i=Cr(e,Ne.current);mr(e,n),i=fc(null,e,r,t,i,n);var o=dc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(o=!0,us(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sc(e),i.updater=Ys,e.stateNode=i,i._reactInternals=e,Ll(e,r,t,n),e=jl(null,e,r,!0,o,n)):(e.tag=0,ee&&o&&Zu(e),be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=D0(r),t=it(r,t),i){case 0:e=zl(null,e,r,t,n);break e;case 1:e=cd(null,e,r,t,n);break e;case 11:e=ld(null,e,r,t,n);break e;case 14:e=ud(null,e,r,it(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),zl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),cd(t,e,r,i,n);case 3:e:{if(Dm(e),t===null)throw Error(w(387));r=e.pendingProps,o=e.memoizedState,i=o.element,im(t,e),ps(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ir(Error(w(423)),e),e=fd(t,e,r,n,i);break e}else if(r!==i){i=Ir(Error(w(424)),e),e=fd(t,e,r,n,i);break e}else for(We=Jt(e.stateNode.containerInfo.firstChild),Be=e,ee=!0,st=null,n=lm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){e=Pt(t,e,n);break e}be(t,e,r,n)}e=e.child}return e;case 5:return um(e),t===null&&Ol(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Nl(r,i)?s=null:o!==null&&Nl(r,o)&&(e.flags|=32),Om(t,e),be(t,e,s,n),e.child;case 6:return t===null&&Ol(e),null;case 13:return Mm(t,e,n);case 4:return ac(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xr(e,null,r,n):be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),ld(t,e,r,i,n);case 7:return be(t,e,e.pendingProps,n),e.child;case 8:return be(t,e,e.pendingProps.children,n),e.child;case 12:return be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Y(ds,r._currentValue),r._currentValue=s,o!==null)if(ht(o.value,s)){if(o.children===i.children&&!Le.current){e=Pt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dl(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Dl(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mr(e,n),i=Ze(i),r=r(i),e.flags|=1,be(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),ud(t,e,r,i,n);case 15:return Pm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Go(t,e),e.tag=1,Fe(r)?(t=!0,us(e)):t=!1,mr(e,n),sm(e,r,i),Ll(e,r,i,n),jl(null,e,r,!0,t,n);case 19:return Lm(t,e,n);case 22:return Rm(t,e,n)}throw Error(w(156,e.tag))};function Jm(t,e){return kp(t,e)}function O0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new O0(t,e,n,r)}function Ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D0(t){if(typeof t=="function")return Ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wu)return 11;if(t===Bu)return 14}return 2}function nn(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qo(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Ec(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case qn:return An(n.children,i,o,e);case Uu:s=8,i|=8;break;case sl:return t=qe(12,n,e,i|2),t.elementType=sl,t.lanes=o,t;case al:return t=qe(13,n,e,i),t.elementType=al,t.lanes=o,t;case ll:return t=qe(19,n,e,i),t.elementType=ll,t.lanes=o,t;case ap:return qs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case op:s=10;break e;case sp:s=9;break e;case Wu:s=11;break e;case Bu:s=14;break e;case Bt:s=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=qe(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function An(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function qs(t,e,n,r){return t=qe(22,t,r,e),t.elementType=ap,t.lanes=n,t.stateNode={isHidden:!1},t}function Ua(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function Wa(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function M0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cc(t,e,n,r,i,o,s,a,l){return t=new M0(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=qe(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sc(o),t}function L0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zm(t){if(!t)return ln;t=t._reactInternals;e:{if(Hn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Fe(n))return Jp(t,n,e)}return e}function eg(t,e,n,r,i,o,s,a,l){return t=Cc(n,r,!0,t,i,o,s,a,l),t.context=Zm(null),n=t.current,r=Ae(),i=tn(n),o=Tt(r,i),o.callback=e??null,Zt(n,o,i),t.current.lanes=i,qi(t,i,r),ze(t,r),t}function Xs(t,e,n,r){var i=e.current,o=Ae(),s=tn(i);return n=Zm(n),e.context===null?e.context=n:e.pendingContext=n,e=Tt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zt(i,e,s),t!==null&&(ft(t,i,s,o),Ho(t,i,s)),s}function Es(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kc(t,e){Sd(t,e),(t=t.alternate)&&Sd(t,e)}function F0(){return null}var tg=typeof reportError=="function"?reportError:function(t){console.error(t)};function xc(t){this._internalRoot=t}Js.prototype.render=xc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Xs(t,e,null,null)};Js.prototype.unmount=xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ln(function(){Xs(null,t,null,null)}),e[bt]=null}};function Js(t){this._internalRoot=t}Js.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&Op(t)}};function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ed(){}function z0(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Es(s);o.call(u)}}var s=eg(e,r,t,0,null,!1,!1,"",Ed);return t._reactRootContainer=s,t[bt]=s.current,Ai(t.nodeType===8?t.parentNode:t),Ln(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Es(l);a.call(u)}}var l=Cc(t,0,!1,null,null,!1,!1,"",Ed);return t._reactRootContainer=l,t[bt]=l.current,Ai(t.nodeType===8?t.parentNode:t),Ln(function(){Xs(e,l,n,r)}),l}function ea(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Es(s);a.call(l)}}Xs(e,s,t,i)}else s=z0(n,e,t,i,r);return Es(s)}bp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oi(e.pendingLanes);n!==0&&(Vu(e,n|1),ze(e,ae()),!(U&6)&&(Nr=ae()+500,mn()))}break;case 13:Ln(function(){var r=At(t,1);if(r!==null){var i=Ae();ft(r,t,1,i)}}),kc(t,1)}};Yu=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=Ae();ft(e,t,134217728,n)}kc(t,134217728)}};Ap=function(t){if(t.tag===13){var e=tn(t),n=At(t,e);if(n!==null){var r=Ae();ft(n,t,e,r)}kc(t,e)}};Pp=function(){return $};Rp=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};yl=function(t,e,n){switch(e){case"input":if(fl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hs(r);if(!i)throw Error(w(90));up(r),fl(r,i)}}}break;case"textarea":fp(t,n);break;case"select":e=n.value,e!=null&&fr(t,!!n.multiple,e,!1)}};yp=_c;_p=Ln;var j0={usingClientEntryPoint:!1,Events:[Ji,er,Hs,gp,vp,_c]},Jr={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},U0={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ep(t),t===null?null:t.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Us=Io.inject(U0),_t=Io}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(e))throw Error(w(200));return L0(t,e,null,n)};He.createRoot=function(t,e){if(!Tc(t))throw Error(w(299));var n=!1,r="",i=tg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cc(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,Ai(t.nodeType===8?t.parentNode:t),new xc(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Ep(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return Ln(t)};He.hydrate=function(t,e,n){if(!Zs(e))throw Error(w(200));return ea(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!Tc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=eg(e,null,t,1,n??null,i,!1,o,s),t[bt]=e.current,Ai(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Js(e)};He.render=function(t,e,n){if(!Zs(e))throw Error(w(200));return ea(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!Zs(t))throw Error(w(40));return t._reactRootContainer?(Ln(function(){ea(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};He.unstable_batchedUpdates=_c;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zs(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return ea(t,e,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";function ng(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ng)}catch(t){console.error(t)}}ng(),ep.exports=He;var W0=ep.exports,Cd=W0;il.createRoot=Cd.createRoot,il.hydrateRoot=Cd.hydrateRoot;function kd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kd(Object(n),!0).forEach(function(r){de(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cs(t){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cs(t)}function B0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xd(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $0(t,e,n){return e&&xd(t.prototype,e),n&&xd(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function de(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ic(t,e){return V0(t)||G0(t,e)||rg(t,e)||Q0()}function eo(t){return H0(t)||Y0(t)||rg(t)||K0()}function H0(t){if(Array.isArray(t))return Xl(t)}function V0(t){if(Array.isArray(t))return t}function Y0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function G0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function rg(t,e){if(t){if(typeof t=="string")return Xl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xl(t,e)}}function Xl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function K0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Td=function(){},Nc={},ig={},og=null,sg={mark:Td,measure:Td};try{typeof window<"u"&&(Nc=window),typeof document<"u"&&(ig=document),typeof MutationObserver<"u"&&(og=MutationObserver),typeof performance<"u"&&(sg=performance)}catch{}var q0=Nc.navigator||{},Id=q0.userAgent,Nd=Id===void 0?"":Id,un=Nc,J=ig,bd=og,No=sg;un.document;var zt=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",ag=~Nd.indexOf("MSIE")||~Nd.indexOf("Trident/"),bo,Ao,Po,Ro,Oo,Rt="___FONT_AWESOME___",Jl=16,lg="fa",ug="svg-inline--fa",Fn="data-fa-i2svg",Zl="data-fa-pseudo-element",X0="data-fa-pseudo-element-pending",bc="data-prefix",Ac="data-icon",Ad="fontawesome-i2svg",J0="async",Z0=["HTML","HEAD","STYLE","SCRIPT"],cg=function(){try{return!0}catch{return!1}}(),q="classic",oe="sharp",Pc=[q,oe];function to(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[q]}})}var ji=to((bo={},de(bo,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),de(bo,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bo)),Ui=to((Ao={},de(Ao,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Ao,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ao)),Wi=to((Po={},de(Po,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Po,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Po)),e1=to((Ro={},de(Ro,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Ro,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ro)),t1=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,fg="fa-layers-text",n1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,r1=to((Oo={},de(Oo,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Oo,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Oo)),dg=[1,2,3,4,5,6,7,8,9,10],i1=dg.concat([11,12,13,14,15,16,17,18,19,20]),o1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bi=new Set;Object.keys(Ui[q]).map(Bi.add.bind(Bi));Object.keys(Ui[oe]).map(Bi.add.bind(Bi));var s1=[].concat(Pc,eo(Bi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xn.GROUP,xn.SWAP_OPACITY,xn.PRIMARY,xn.SECONDARY]).concat(dg.map(function(t){return"".concat(t,"x")})).concat(i1.map(function(t){return"w-".concat(t)})),vi=un.FontAwesomeConfig||{};function a1(t){var e=J.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function l1(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(J&&typeof J.querySelector=="function"){var u1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];u1.forEach(function(t){var e=Ic(t,2),n=e[0],r=e[1],i=l1(a1(n));i!=null&&(vi[r]=i)})}var hg={styleDefault:"solid",familyDefault:"classic",cssPrefix:lg,replacementClass:ug,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vi.familyPrefix&&(vi.cssPrefix=vi.familyPrefix);var br=k(k({},hg),vi);br.autoReplaceSvg||(br.observeMutations=!1);var b={};Object.keys(hg).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(n){br[t]=n,yi.forEach(function(r){return r(b)})},get:function(){return br[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){br.cssPrefix=e,yi.forEach(function(n){return n(b)})},get:function(){return br.cssPrefix}});un.FontAwesomeConfig=b;var yi=[];function c1(t){return yi.push(t),function(){yi.splice(yi.indexOf(t),1)}}var Wt=Jl,vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f1(t){if(!(!t||!zt)){var e=J.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return J.head.insertBefore(e,r),t}}var d1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $i(){for(var t=12,e="";t-- >0;)e+=d1[Math.random()*62|0];return e}function Fr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rc(t){return t.classList?Fr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function pg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h1(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(pg(t[n]),'" ')},"").trim()}function ta(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oc(t){return t.size!==vt.size||t.x!==vt.x||t.y!==vt.y||t.rotate!==vt.rotate||t.flipX||t.flipY}function p1(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function m1(t){var e=t.transform,n=t.width,r=n===void 0?Jl:n,i=t.height,o=i===void 0?Jl:i,s=t.startCentered,a=s===void 0?!1:s,l="";return a&&ag?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var g1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mg(){var t=lg,e=ug,n=b.cssPrefix,r=b.replacementClass,i=g1;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Pd=!1;function Ba(){b.autoAddCss&&!Pd&&(f1(mg()),Pd=!0)}var v1={mixout:function(){return{dom:{css:mg,insertCss:Ba}}},hooks:function(){return{beforeDOMElementCreation:function(){Ba()},beforeI2svg:function(){Ba()}}}},Ot=un||{};Ot[Rt]||(Ot[Rt]={});Ot[Rt].styles||(Ot[Rt].styles={});Ot[Rt].hooks||(Ot[Rt].hooks={});Ot[Rt].shims||(Ot[Rt].shims=[]);var lt=Ot[Rt],gg=[],y1=function t(){J.removeEventListener("DOMContentLoaded",t),ks=1,gg.map(function(e){return e()})},ks=!1;zt&&(ks=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),ks||J.addEventListener("DOMContentLoaded",y1));function _1(t){zt&&(ks?setTimeout(t,0):gg.push(t))}function no(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?pg(t):"<".concat(e," ").concat(h1(r),">").concat(o.map(no).join(""),"</").concat(e,">")}function Rd(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var w1=function(e,n){return function(r,i,o,s){return e.call(n,r,i,o,s)}},$a=function(e,n,r,i){var o=Object.keys(e),s=o.length,a=i!==void 0?w1(n,i):n,l,u,f;for(r===void 0?(l=1,f=e[o[0]]):(l=0,f=r);l<s;l++)u=o[l],f=a(f,e[u],u,e);return f};function S1(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function eu(t){var e=S1(t);return e.length===1?e[0].toString(16):null}function E1(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Od(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function tu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Od(e);typeof lt.hooks.addPack=="function"&&!i?lt.hooks.addPack(t,Od(e)):lt.styles[t]=k(k({},lt.styles[t]||{}),o),t==="fas"&&tu("fa",e)}var Do,Mo,Lo,ar=lt.styles,C1=lt.shims,k1=(Do={},de(Do,q,Object.values(Wi[q])),de(Do,oe,Object.values(Wi[oe])),Do),Dc=null,vg={},yg={},_g={},wg={},Sg={},x1=(Mo={},de(Mo,q,Object.keys(ji[q])),de(Mo,oe,Object.keys(ji[oe])),Mo);function T1(t){return~s1.indexOf(t)}function I1(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!T1(i)?i:null}var Eg=function(){var e=function(o){return $a(ar,function(s,a,l){return s[l]=$a(a,o,{}),s},{})};vg=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),yg=e(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),Sg=e(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in ar||b.autoFetchSvg,r=$a(C1,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});_g=r.names,wg=r.unicodes,Dc=na(b.styleDefault,{family:b.familyDefault})};c1(function(t){Dc=na(t.styleDefault,{family:b.familyDefault})});Eg();function Mc(t,e){return(vg[t]||{})[e]}function N1(t,e){return(yg[t]||{})[e]}function Tn(t,e){return(Sg[t]||{})[e]}function Cg(t){return _g[t]||{prefix:null,iconName:null}}function b1(t){var e=wg[t],n=Mc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cn(){return Dc}var Lc=function(){return{prefix:null,iconName:null,rest:[]}};function na(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?q:n,i=ji[r][t],o=Ui[r][t]||Ui[r][i],s=t in lt.styles?t:null;return o||s||null}var Dd=(Lo={},de(Lo,q,Object.keys(Wi[q])),de(Lo,oe,Object.keys(Wi[oe])),Lo);function ra(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},de(e,q,"".concat(b.cssPrefix,"-").concat(q)),de(e,oe,"".concat(b.cssPrefix,"-").concat(oe)),e),s=null,a=q;(t.includes(o[q])||t.some(function(u){return Dd[q].includes(u)}))&&(a=q),(t.includes(o[oe])||t.some(function(u){return Dd[oe].includes(u)}))&&(a=oe);var l=t.reduce(function(u,f){var c=I1(b.cssPrefix,f);if(ar[f]?(f=k1[a].includes(f)?e1[a][f]:f,s=f,u.prefix=f):x1[a].indexOf(f)>-1?(s=f,u.prefix=na(f,{family:a})):c?u.iconName=c:f!==b.replacementClass&&f!==o[q]&&f!==o[oe]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var d=s==="fa"?Cg(u.iconName):{},g=Tn(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!ar.far&&ar.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},Lc());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===oe&&(ar.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=Tn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=cn()||"fas"),l}var A1=function(){function t(){B0(this,t),this.definitions={}}return $0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=k(k({},n.definitions[a]||{}),s[a]),tu(a,s[a]);var l=Wi[q][a];l&&tu(l,s[a]),Eg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,f=u[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(n[a][c]=u)}),n[a][l]=u}),n}}]),t}(),Md=[],lr={},vr={},P1=Object.keys(vr);function R1(t,e){var n=e.mixoutsTo;return Md=t,lr={},Object.keys(vr).forEach(function(r){P1.indexOf(r)===-1&&delete vr[r]}),Md.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Cs(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){lr[s]||(lr[s]=[]),lr[s].push(o[s])})}r.provides&&r.provides(vr)}),n}function nu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=lr[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function zn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=lr[t]||[];i.forEach(function(o){o.apply(null,n)})}function Dt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return vr[t]?vr[t].apply(null,e):void 0}function ru(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||cn();if(e)return e=Tn(n,e)||e,Rd(kg.definitions,n,e)||Rd(lt.styles,n,e)}var kg=new A1,O1=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,zn("noAuto")},D1={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(zn("beforeI2svg",e),Dt("pseudoElements2svg",e),Dt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,_1(function(){L1({autoReplaceSvgRoot:n}),zn("watch",e)})}},M1={icon:function(e){if(e===null)return null;if(Cs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Tn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=na(e[0]);return{prefix:r,iconName:Tn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match(t1))){var i=ra(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||cn(),iconName:Tn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=cn();return{prefix:o,iconName:Tn(o,e)||e}}}},Ye={noAuto:O1,config:b,dom:D1,parse:M1,library:kg,findIconDefinition:ru,toHtml:no},L1=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(lt.styles).length>0||b.autoFetchSvg)&&zt&&b.autoReplaceSvg&&Ye.dom.i2svg({node:r})};function ia(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return no(r)})}}),Object.defineProperty(t,"node",{get:function(){if(zt){var r=J.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function F1(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(Oc(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ta(k(k({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function z1(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:s}),children:r}]}]}function Fc(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,l=t.title,u=t.maskId,f=t.titleId,c=t.extra,d=t.watchable,g=d===void 0?!1:d,v=r.found?r:n,_=v.width,A=v.height,p=i==="fak",h=[b.replacementClass,o?"".concat(b.cssPrefix,"-").concat(o):""].filter(function(W){return c.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(c.classes).join(" "),m={children:[],attributes:k(k({},c.attributes),{},{"data-prefix":i,"data-icon":o,class:h,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(A)})},y=p&&!~c.classes.indexOf("fa-fw")?{width:"".concat(_/A*16*.0625,"em")}:{};g&&(m.attributes[Fn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(f||$i())},children:[l]}),delete m.attributes.title);var S=k(k({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:k(k({},y),c.styles)}),T=r.found&&n.found?Dt("generateAbstractMask",S)||{children:[],attributes:{}}:Dt("generateAbstractIcon",S)||{children:[],attributes:{}},I=T.children,P=T.attributes;return S.children=I,S.attributes=P,a?z1(S):F1(S)}function Ld(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,l=a===void 0?!1:a,u=k(k(k({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[Fn]="");var f=k({},s.styles);Oc(i)&&(f.transform=m1({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var c=ta(f);c.length>0&&(u.style=c);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function j1(t){var e=t.content,n=t.title,r=t.extra,i=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ta(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Ha=lt.styles;function iu(t){var e=t[0],n=t[1],r=t.slice(4),i=Ic(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(xn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(xn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(xn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var U1={found:!1,width:512,height:512};function W1(t,e){!cg&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ou(t,e){var n=e;return e==="fa"&&b.styleDefault!==null&&(e=cn()),new Promise(function(r,i){if(Dt("missingIconAbstract"),n==="fa"){var o=Cg(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ha[e]&&Ha[e][t]){var s=Ha[e][t];return r(iu(s))}W1(t,e),r(k(k({},U1),{},{icon:b.showMissingIcons&&t?Dt("missingIconAbstract")||{}:{}}))})}var Fd=function(){},su=b.measurePerformance&&No&&No.mark&&No.measure?No:{mark:Fd,measure:Fd},ai='FA "6.5.1"',B1=function(e){return su.mark("".concat(ai," ").concat(e," begins")),function(){return xg(e)}},xg=function(e){su.mark("".concat(ai," ").concat(e," ends")),su.measure("".concat(ai," ").concat(e),"".concat(ai," ").concat(e," begins"),"".concat(ai," ").concat(e," ends"))},zc={begin:B1,end:xg},Xo=function(){};function zd(t){var e=t.getAttribute?t.getAttribute(Fn):null;return typeof e=="string"}function $1(t){var e=t.getAttribute?t.getAttribute(bc):null,n=t.getAttribute?t.getAttribute(Ac):null;return e&&n}function H1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function V1(){if(b.autoReplaceSvg===!0)return Jo.replace;var t=Jo[b.autoReplaceSvg];return t||Jo.replace}function Y1(t){return J.createElementNS("http://www.w3.org/2000/svg",t)}function G1(t){return J.createElement(t)}function Tg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Y1:G1:n;if(typeof t=="string")return J.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(Tg(s,{ceFn:r}))}),i}function K1(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Jo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Tg(i),n)}),n.getAttribute(Fn)===null&&b.keepOriginalSource){var r=J.createComment(K1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Rc(n).indexOf(b.replacementClass))return Jo.replace(e);var i=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===b.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return no(a)}).join(`
`);n.setAttribute(Fn,""),n.innerHTML=s}};function jd(t){t()}function Ig(t,e){var n=typeof e=="function"?e:Xo;if(t.length===0)n();else{var r=jd;b.mutateApproach===J0&&(r=un.requestAnimationFrame||jd),r(function(){var i=V1(),o=zc.begin("mutate");t.map(i),o(),n()})}}var jc=!1;function Ng(){jc=!0}function au(){jc=!1}var xs=null;function Ud(t){if(bd&&b.observeMutations){var e=t.treeCallback,n=e===void 0?Xo:e,r=t.nodeCallback,i=r===void 0?Xo:r,o=t.pseudoElementsCallback,s=o===void 0?Xo:o,a=t.observeMutationsRoot,l=a===void 0?J:a;xs=new bd(function(u){if(!jc){var f=cn();Fr(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!zd(c.addedNodes[0])&&(b.searchPseudoElements&&s(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&b.searchPseudoElements&&s(c.target.parentNode),c.type==="attributes"&&zd(c.target)&&~o1.indexOf(c.attributeName))if(c.attributeName==="class"&&$1(c.target)){var d=ra(Rc(c.target)),g=d.prefix,v=d.iconName;c.target.setAttribute(bc,g||f),v&&c.target.setAttribute(Ac,v)}else H1(c.target)&&i(c.target)})}}),zt&&xs.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Q1(){xs&&xs.disconnect()}function q1(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function X1(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ra(Rc(t));return i.prefix||(i.prefix=cn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=N1(i.prefix,t.innerText)||Mc(i.prefix,eu(t.innerText))),!i.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function J1(t){var e=Fr(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||$i()):(e["aria-hidden"]="true",e.focusable="false")),e}function Z1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=X1(t),r=n.iconName,i=n.prefix,o=n.rest,s=J1(t),a=nu("parseNodeAttributes",{},t),l=e.styleParser?q1(t):[];return k({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var ew=lt.styles;function bg(t){var e=b.autoReplaceSvg==="nest"?Wd(t,{styleParser:!1}):Wd(t);return~e.extra.classes.indexOf(fg)?Dt("generateLayersText",t,e):Dt("generateSvgReplacementMutation",t,e)}var fn=new Set;Pc.map(function(t){fn.add("fa-".concat(t))});Object.keys(ji[q]).map(fn.add.bind(fn));Object.keys(ji[oe]).map(fn.add.bind(fn));fn=eo(fn);function Bd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();var n=J.documentElement.classList,r=function(c){return n.add("".concat(Ad,"-").concat(c))},i=function(c){return n.remove("".concat(Ad,"-").concat(c))},o=b.autoFetchSvg?fn:Pc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ew));o.includes("fa")||o.push("fa");var s=[".".concat(fg,":not([").concat(Fn,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Fn,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Fr(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=zc.begin("onTree"),u=a.reduce(function(f,c){try{var d=bg(c);d&&f.push(d)}catch(g){cg||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,c){Promise.all(u).then(function(d){Ig(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),c(d)})})}function tw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bg(t).then(function(n){n&&Ig([n],e)})}function nw(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ru(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ru(i||{})),t(r,k(k({},n),{},{mask:i}))}}var rw=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?vt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,f=u===void 0?null:u,c=n.title,d=c===void 0?null:c,g=n.titleId,v=g===void 0?null:g,_=n.classes,A=_===void 0?[]:_,p=n.attributes,h=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(e){var S=e.prefix,T=e.iconName,I=e.icon;return ia(k({type:"icon"},e),function(){return zn("beforeDOMElementCreation",{iconDefinition:e,params:n}),b.autoA11y&&(d?h["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(v||$i()):(h["aria-hidden"]="true",h.focusable="false")),Fc({icons:{main:iu(I),mask:l?iu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:k(k({},vt),i),symbol:s,title:d,maskId:f,titleId:v,extra:{attributes:h,styles:y,classes:A}})})}},iw={mixout:function(){return{icon:nw(rw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bd,n.nodeCallback=tw,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?J:r,o=n.callback,s=o===void 0?function(){}:o;return Bd(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,f=r.mask,c=r.maskId,d=r.extra;return new Promise(function(g,v){Promise.all([ou(i,a),f.iconName?ou(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var A=Ic(_,2),p=A[0],h=A[1];g([n,Fc({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:c,title:o,titleId:s,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=ta(a);l.length>0&&(i.style=l);var u;return Oc(s)&&(u=Dt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},ow={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return ia({type:"layer"},function(){zn("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(eo(o)).join(" ")},children:s}]})}}}},sw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,f=r.styles,c=f===void 0?{}:f;return ia({type:"counter",content:n},function(){return zn("beforeDOMElementCreation",{content:n,params:r}),j1({content:n.toString(),title:o,extra:{attributes:u,styles:c,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(eo(a))}})})}}}},aw={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?vt:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,f=r.attributes,c=f===void 0?{}:f,d=r.styles,g=d===void 0?{}:d;return ia({type:"text",content:n},function(){return zn("beforeDOMElementCreation",{content:n,params:r}),Ld({content:n,transform:k(k({},vt),o),title:a,extra:{attributes:c,styles:g,classes:["".concat(b.cssPrefix,"-layers-text")].concat(eo(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(ag){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/u,l=f.height/u}return b.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ld({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},lw=new RegExp('"',"ug"),$d=[1105920,1112319];function uw(t){var e=t.replace(lw,""),n=E1(e,0),r=n>=$d[0]&&n<=$d[1],i=e.length===2?e[0]===e[1]:!1;return{value:eu(i?e[0]:e),isSecondary:r||i}}function Hd(t,e){var n="".concat(X0).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=Fr(t.children),s=o.filter(function(I){return I.getAttribute(Zl)===e})[0],a=un.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(n1),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&f!=="none"&&f!==""){var c=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?oe:q,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ui[d][l[2].toLowerCase()]:r1[d][u],v=uw(c),_=v.value,A=v.isSecondary,p=l[0].startsWith("FontAwesome"),h=Mc(g,_),m=h;if(p){var y=b1(_);y.iconName&&y.prefix&&(h=y.iconName,g=y.prefix)}if(h&&!A&&(!s||s.getAttribute(bc)!==g||s.getAttribute(Ac)!==m)){t.setAttribute(n,m),s&&t.removeChild(s);var S=Z1(),T=S.extra;T.attributes[Zl]=e,ou(h,g).then(function(I){var P=Fc(k(k({},S),{},{icons:{main:I,mask:Lc()},prefix:g,iconName:m,extra:T,watchable:!0})),W=J.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=P.map(function(D){return no(D)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function cw(t){return Promise.all([Hd(t,"::before"),Hd(t,"::after")])}function fw(t){return t.parentNode!==document.head&&!~Z0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zl)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vd(t){if(zt)return new Promise(function(e,n){var r=Fr(t.querySelectorAll("*")).filter(fw).map(cw),i=zc.begin("searchPseudoElements");Ng(),Promise.all(r).then(function(){i(),au(),e()}).catch(function(){i(),au(),n()})})}var dw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vd,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?J:r;b.searchPseudoElements&&Vd(i)}}},Yd=!1,hw={mixout:function(){return{dom:{unwatch:function(){Ng(),Yd=!0}}}},hooks:function(){return{bootstrap:function(){Ud(nu("mutationObserverCallbacks",{}))},noAuto:function(){Q1()},watch:function(n){var r=n.observeMutationsRoot;Yd?au():Ud(nu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gd=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},pw={mixout:function(){return{parse:{transform:function(n){return Gd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Gd(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(f)},d={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:c,path:d};return{tag:"g",attributes:k({},g.outer),children:[{tag:"g",attributes:k({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),g.path)}]}]}}}},Va={x:0,y:0,width:"100%",height:"100%"};function Kd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mw(t){return t.tag==="g"?t.children:[t]}var gw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?ra(i.split(" ").map(function(s){return s.trim()})):Lc();return o.prefix||(o.prefix=cn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,f=o.icon,c=s.width,d=s.icon,g=p1({transform:l,containerWidth:c,iconWidth:u}),v={tag:"rect",attributes:k(k({},Va),{},{fill:"white"})},_=f.children?{children:f.children.map(Kd)}:{},A={tag:"g",attributes:k({},g.inner),children:[Kd(k({tag:f.tag,attributes:k(k({},f.attributes),g.path)},_))]},p={tag:"g",attributes:k({},g.outer),children:[A]},h="mask-".concat(a||$i()),m="clip-".concat(a||$i()),y={tag:"mask",attributes:k(k({},Va),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:mw(d)},y]};return r.push(S,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},Va)}),{children:r,attributes:i}}}},vw={provides:function(e){var n=!1;un.matchMedia&&(n=un.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=k(k({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:k(k({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:k(k({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:k(k({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:k(k({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},_w=[v1,iw,ow,sw,aw,dw,hw,pw,gw,vw,yw];R1(_w,{mixoutsTo:Ye});Ye.noAuto;Ye.config;Ye.library;Ye.dom;var lu=Ye.parse;Ye.findIconDefinition;Ye.toHtml;var ww=Ye.icon;Ye.layer;Ye.text;Ye.counter;var Ag={exports:{}},Sw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ew=Sw,Cw=Ew;function Pg(){}function Rg(){}Rg.resetWarningCache=Pg;var kw=function(){function t(r,i,o,s,a,l){if(l!==Cw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Rg,resetWarningCache:Pg};return n.PropTypes=n,n};Ag.exports=kw();var xw=Ag.exports;const M=$h(xw);function Qd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qd(Object(n),!0).forEach(function(r){ur(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qd(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ts(t){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ts(t)}function ur(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Iw(t,e){if(t==null)return{};var n=Tw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function uu(t){return Nw(t)||bw(t)||Aw(t)||Pw()}function Nw(t){if(Array.isArray(t))return cu(t)}function bw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Aw(t,e){if(t){if(typeof t=="string")return cu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cu(t,e)}}function cu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Pw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rw(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,f=t.spinReverse,c=t.pulse,d=t.fixedWidth,g=t.inverse,v=t.border,_=t.listItem,A=t.flip,p=t.size,h=t.rotation,m=t.pull,y=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":d,"fa-inverse":g,"fa-border":v,"fa-li":_,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},ur(e,"fa-".concat(p),typeof p<"u"&&p!==null),ur(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),ur(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ur(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}function Ow(t){return t=t-0,t===t}function Og(t){return Ow(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Dw=["style"];function Mw(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Lw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Og(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[Mw(i)]=o:e[i]=o,e},{})}function Dg(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Dg(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=Lw(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[Og(u)]=f}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=Iw(n,Dw);return i.attrs.style=Kt(Kt({},i.attrs.style),s),t.apply(void 0,[e.tag,Kt(Kt({},i.attrs),a)].concat(uu(r)))}var Mg=!1;try{Mg=!0}catch{}function Fw(){if(!Mg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qd(t){if(t&&Ts(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(lu.icon)return lu.icon(t);if(t===null)return null;if(t&&Ts(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ya(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ur({},t,e):{}}var Ar=Lu.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,o=t.className,s=t.title,a=t.titleId,l=t.maskId,u=qd(n),f=Ya("classes",[].concat(uu(Rw(t)),uu(o.split(" ")))),c=Ya("transform",typeof t.transform=="string"?lu.transform(t.transform):t.transform),d=Ya("mask",qd(r)),g=ww(u,Kt(Kt(Kt(Kt({},f),c),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return Fw("Could not find icon",u),null;var v=g.abstract,_={ref:e};return Object.keys(t).forEach(function(A){Ar.defaultProps.hasOwnProperty(A)||(_[A]=t[A])}),zw(v[0],_)});Ar.displayName="FontAwesomeIcon";Ar.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Ar.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var zw=Dg.bind(null,Lu.createElement),jw={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Uw={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]};const Ww="/trinteivirgulacaraio/assets/burek-shurro-LGwzcwr5.jpeg",Bw="/trinteivirgulacaraio/assets/xureg-Ztd0UW8I.mp4";var Xd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw zr(e)},zr=function(t){return new Error("Firebase Database ("+Lg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$w=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=o>>2,c=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(d=64)),r.push(n[f],n[c],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$w(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||c==null)throw new Hw;const d=o<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zg=function(t){const e=Fg(t);return Uc.encodeByteArray(e,!0)},Is=function(t){return zg(t).replace(/\./g,"")},fu=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){return jg(void 0,t)}function jg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yw(n)||(t[n]=jg(t[n],e[n]));return t}function Yw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=()=>Gw().__FIREBASE_DEFAULTS__,Qw=()=>{if(typeof process>"u"||typeof Xd>"u")return;const t=Xd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fu(t[1]);return e&&JSON.parse(e)},Ug=()=>{try{return Kw()||Qw()||qw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xw=t=>{var e,n;return(n=(e=Ug())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jw=t=>{const e=Xw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wg=()=>{var t;return(t=Ug())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Is(JSON.stringify(n)),Is(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(eS())}function tS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $g(){return Lg.NODE_ADMIN===!0}function nS(){try{return typeof indexedDB=="object"}catch{return!1}}function rS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="FirebaseError";class ro extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iS,Object.setPrototypeOf(this,ro.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hg.prototype.create)}}class Hg{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?oS(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ro(i,a,r)}}function oS(t,e){return t.replace(sS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=Hi(fu(o[0])||""),n=Hi(fu(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},aS=function(t){const e=Vg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lS=function(t){const e=Vg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ns(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function du(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Zd(o)&&Zd(s)){if(!du(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=a^o&(s^a),f=1518500249):(u=o^s^a,f=1859775393):c<60?(u=o&s|a&(o|s),f=2400959708):(u=o^s^a,f=3395469782);const d=(i<<5|i>>>27)+u+l+f+r[c]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=e[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}function Wc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){return t&&t._delegate?t._delegate:t}class Vi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pS(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hS(t){return t===wn?void 0:t}function pS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const gS={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},vS=V.INFO,yS={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},_S=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yg{constructor(e){this.name=e,this._logLevel=vS,this._logHandler=_S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const wS=(t,e)=>e.some(n=>t instanceof n);let eh,th;function SS(){return eh||(eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ES(){return th||(th=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,hu=new WeakMap,Kg=new WeakMap,Ga=new WeakMap,Bc=new WeakMap;function CS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(rn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,t)}).catch(()=>{}),Bc.set(e,t),e}function kS(t){if(hu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});hu.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xS(t){pu=t(pu)}function TS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ka(this),e,...n);return Kg.set(r,e.sort?e.sort():[e]),rn(r)}:ES().includes(t)?function(...e){return t.apply(Ka(this),e),rn(Gg.get(this))}:function(...e){return rn(t.apply(Ka(this),e))}}function IS(t){return typeof t=="function"?TS(t):(t instanceof IDBTransaction&&kS(t),wS(t,SS())?new Proxy(t,pu):t)}function rn(t){if(t instanceof IDBRequest)return CS(t);if(Ga.has(t))return Ga.get(t);const e=IS(t);return e!==t&&(Ga.set(t,e),Bc.set(e,t)),e}const Ka=t=>Bc.get(t);function NS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=rn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(rn(s.result),l.oldVersion,l.newVersion,rn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const bS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],Qa=new Map;function nh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bS.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qa.set(e,o),o}xS(t=>({...t,get:(e,n,r)=>nh(e,n)||t.get(e,n,r),has:(e,n)=>!!nh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",rh="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Yg("@firebase/app"),OS="@firebase/app-compat",DS="@firebase/analytics-compat",MS="@firebase/analytics",LS="@firebase/app-check-compat",FS="@firebase/app-check",zS="@firebase/auth",jS="@firebase/auth-compat",US="@firebase/database",WS="@firebase/database-compat",BS="@firebase/functions",$S="@firebase/functions-compat",HS="@firebase/installations",VS="@firebase/installations-compat",YS="@firebase/messaging",GS="@firebase/messaging-compat",KS="@firebase/performance",QS="@firebase/performance-compat",qS="@firebase/remote-config",XS="@firebase/remote-config-compat",JS="@firebase/storage",ZS="@firebase/storage-compat",eE="@firebase/firestore",tE="@firebase/firestore-compat",nE="firebase",rE="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="[DEFAULT]",iE={[mu]:"fire-core",[OS]:"fire-core-compat",[MS]:"fire-analytics",[DS]:"fire-analytics-compat",[FS]:"fire-app-check",[LS]:"fire-app-check-compat",[zS]:"fire-auth",[jS]:"fire-auth-compat",[US]:"fire-rtdb",[WS]:"fire-rtdb-compat",[BS]:"fire-fn",[$S]:"fire-fn-compat",[HS]:"fire-iid",[VS]:"fire-iid-compat",[YS]:"fire-fcm",[GS]:"fire-fcm-compat",[KS]:"fire-perf",[QS]:"fire-perf-compat",[qS]:"fire-rc",[XS]:"fire-rc-compat",[JS]:"fire-gcs",[ZS]:"fire-gcs-compat",[eE]:"fire-fst",[tE]:"fire-fst-compat","fire-js":"fire-js",[nE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Map,vu=new Map;function oE(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function As(t){const e=t.name;if(vu.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of bs.values())oE(n,t);return!0}function sE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Hg("app","Firebase",aE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=rE;function Qg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=Wg()),!n)throw on.create("no-options");const o=bs.get(i);if(o){if(du(n,o.options)&&du(r,o.config))return o;throw on.create("duplicate-app",{appName:i})}const s=new mS(i);for(const l of vu.values())s.addComponent(l);const a=new lE(n,r,s);return bs.set(i,a),a}function cE(t=gu){const e=bs.get(t);if(!e&&t===gu&&Wg())return Qg();if(!e)throw on.create("no-app",{appName:t});return e}function yr(t,e,n){var r;let i=(r=iE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}As(new Vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="firebase-heartbeat-database",dE=1,Yi="firebase-heartbeat-store";let qa=null;function qg(){return qa||(qa=NS(fE,dE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),qa}async function hE(t){try{const n=(await qg()).transaction(Yi),r=await n.objectStore(Yi).get(Xg(t));return await n.done,r}catch(e){if(e instanceof ro)jn.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function ih(t,e){try{const r=(await qg()).transaction(Yi,"readwrite");await r.objectStore(Yi).put(e,Xg(t)),await r.done}catch(n){if(n instanceof ro)jn.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function Xg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=1024,mE=30*24*60*60*1e3;class gE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=oh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=mE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=oh(),{heartbeatsToSend:r,unsentEntries:i}=vE(this._heartbeatsCache.heartbeats),o=Is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function oh(){return new Date().toISOString().substring(0,10)}function vE(t,e=pE){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),sh(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nS()?rS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ih(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ih(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sh(t){return Is(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){As(new Vi("platform-logger",e=>new PS(e),"PRIVATE")),As(new Vi("heartbeat",e=>new gE(e),"PRIVATE")),yr(mu,rh,t),yr(mu,rh,"esm2017"),yr("fire-js","")}_E("");var ah={};const lh="@firebase/database",uh="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jg="";function wE(t){Jg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SE(e)}}catch{}return new EE},In=Zg("localStorage"),yu=Zg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Yg("@firebase/database"),CE=function(){let t=1;return function(){return t++}}(),ev=function(t){const e=fS(t),n=new cS;n.update(e);const r=n.digest();return Uc.encodeByteArray(r)},io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=io.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let Pn=null,ch=!0;const kE=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(_r.logLevel=V.VERBOSE,Pn=_r.log.bind(_r),e&&yu.set("logging_enabled",!0)):typeof t=="function"?Pn=t:(Pn=null,yu.remove("logging_enabled"))},Te=function(...t){if(ch===!0&&(ch=!1,Pn===null&&yu.get("logging_enabled")===!0&&kE(!0)),Pn){const e=io.apply(null,t);Pn(e)}},oo=function(t){return function(...e){Te(t,...e)}},_u=function(...t){const e="FIREBASE INTERNAL ERROR: "+io(...t);_r.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${io(...t)}`;throw _r.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+io(...t);_r.warn(e)},xE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rr="[MIN_NAME]",Un="[MAX_NAME]",Ur=function(t,e){if(t===e)return 0;if(t===Rr||e===Un)return-1;if(e===Rr||t===Un)return 1;{const n=fh(t),r=fh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IE=function(t,e){return t===e?0:t<e?-1:1},Zr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},$c=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=$c(t[e[r]]);return n+="}",n},nv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rv=function(t){E(!tv(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,s,a,l;t===0?(o=0,s=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=a+r,s=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(l=0;l<64;l+=8){let d=parseInt(f.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},NE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},AE=new RegExp("^-?(0*)\\d{1,10}$"),PE=-2147483648,RE=2147483647,fh=function(t){if(AE.test(t)){const e=Number(t);if(e>=PE&&e<=RE)return e}return null},Wr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},OE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_i=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class wr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="5",iv="v",ov="s",sv="r",av="f",lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uv="ls",cv="p",wu="ac",fv="websocket",dv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function LE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function pv(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===fv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LE(t)&&(n.ns=t.namespace);const i=[];return tt(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.counters_={}}incrementCounter(e,n=1){jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Vw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={},Ja={};function Vc(t){const e=t.toString();return Xa[e]||(Xa[e]=new FE),Xa[e]}function zE(t,e){const n=t.toString();return Ja[n]||(Ja[n]=e()),Ja[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Wr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="start",UE="close",WE="pLPCommand",BE="pRTLPCB",mv="id",gv="pw",vv="ser",$E="cb",HE="seg",VE="ts",YE="d",GE="dframe",yv=1870,_v=30,KE=yv-_v,QE=25e3,qE=3e4;class cr{constructor(e,n,r,i,o,s,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oo(e),this.stats_=Vc(n),this.urlFn=l=>(this.appCheckToken&&(l[wu]=this.appCheckToken),pv(n,dv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qE)),TE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yc((...o)=>{const[s,a,l,u,f]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===dh)this.id=a,this.password=l;else if(s===UE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[dh]="t",r[vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$E]=this.scriptTagHolder.uniqueCallbackIdentifier),r[iv]=Hc,this.transportSessionId&&(r[ov]=this.transportSessionId),this.lastSessionId&&(r[uv]=this.lastSessionId),this.applicationId&&(r[cv]=this.applicationId),this.appCheckToken&&(r[wu]=this.appCheckToken),typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(r[sv]=av);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cr.forceAllow_=!0}static forceDisallow(){cr.forceDisallow_=!0}static isAvailable(){return cr.forceAllow_?!0:!cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!NE()&&!bE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zg(n),i=nv(r,KE);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[GE]="t",r[mv]=e,r[gv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CE(),window[WE+this.uniqueCallbackIdentifier]=e,window[BE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yc.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mv]=this.myID,e[gv]=this.myPW,e[vv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_v+r.length<=yv;){const s=this.pendingSegs.shift();r=r+"&"+HE+i+"="+s.seg+"&"+VE+i+"="+s.ts+"&"+YE+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(QE)),o=()=>{clearTimeout(i),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=16384,JE=45e3;let Ps=null;typeof MozWebSocket<"u"?Ps=MozWebSocket:typeof WebSocket<"u"&&(Ps=WebSocket);class at{constructor(e,n,r,i,o,s,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oo(this.connId),this.stats_=Vc(n),this.connURL=at.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,o){const s={};return s[iv]=Hc,typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(s[sv]=av),n&&(s[ov]=n),r&&(s[uv]=r),i&&(s[wu]=i),o&&(s[cv]=o),pv(e,fv,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let r;$g(),this.mySock=new Ps(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ps!==null&&!at.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Hi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nv(n,XE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(JE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const o of Gi.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);Gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=6e4,eC=5e3,tC=10*1024,nC=100*1024,Za="t",hh="d",rC="s",ph="r",iC="e",mh="o",gh="a",vh="n",yh="p",oC="h";class sC{constructor(e,n,r,i,o,s,a,l,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oo("c:"+this.id+":"),this.transportManager_=new Gi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_i(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Za in e){const n=e[Za];n===gh?this.upgradeIfSecondaryHealthy_():n===ph?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zr("t",e),r=Zr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zr("t",e),r=Zr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zr(Za,e);if(hh in e){const r=e[hh];if(n===oC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rC?this.onConnectionShutdown_(r):n===ph?this.onReset_(r):n===iC?_u("Server Error: "+r):n===mh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_u("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hc!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_i(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_i(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Sv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rs}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=32,wh=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new Z("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function Ev(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function aC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Z)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Z(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Xe(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return Xe(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xv(t,e){if(dn(t)!==dn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(dn(t)>dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class lC{constructor(e,n){this.errorPrefix_=n,this.parts_=Cv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=sa(this.parts_[r]);Tv(this)}}function uC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sa(e),Tv(t)}function cC(t){const e=t.parts_.pop();t.byteLength_-=sa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Tv(t){if(t.byteLength_>wh)throw new Error(t.errorPrefix_+"has a key path longer than "+wh+" bytes ("+t.byteLength_+").");if(t.parts_.length>_h)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_h+") or object contains a cycle "+Sn(t))}function Sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Sv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Gc}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=1e3,fC=60*5*1e3,Sh=30*1e3,dC=1.3,hC=3e4,pC="server_kill",Eh=3;class It extends wv{constructor(e,n,r,i,o,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=It.nextPersistentConnectionId_++,this.log_=oo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ei,this.maxReconnectDelay_=fC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$g())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,o={r:i,a:e,b:n};this.log_(we(o)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new oa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,i){this.initConnection_();const o=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,u=a.s;It.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jt(e,"w")){const r=Pr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const o={p:e},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_u("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hC&&(this.reconnectDelay_=ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+It.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(c){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);s?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,a=new sC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(pC)},o))}catch(c){this.log_("Failed to get token: "+c),s||(this.repoInfo_.nodeAdmin&&je(c),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jd(this.interruptReasons_)&&(this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>$c(o)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Z(e).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eh&&(this.reconnectDelay_=Sh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Jg.replace(/\./g,"-")]=1,Bg()?e["framework.cordova"]=1:tS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rs.getInstance().currentlyOnline();return Jd(this.interruptReasons_)&&e}}It.nextPersistentConnectionId_=0;It.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Rr,e),i=new j(Rr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;class Iv extends aa{static get __EMPTY_NODE(){return Fo}static set __EMPTY_NODE(e){Fo=e}compare(e,n){return Ur(e.name,n.name)}isDefinedOn(e){throw zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Un,Fo)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Fo)}toString(){return".key"}}const Sr=new Iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?r(e.key,n):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??Me.EMPTY_NODE,this.right=o??Me.EMPTY_NODE}copy(e,n,r,i,o){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class mC{copy(e,n,r,i,o){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new zo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new zo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new zo(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new mC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e){return Ur(t.name,e.name)}function Kc(t,e){return Ur(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;function vC(t){Su=t}const Nv=function(t){return typeof t=="number"?"number:"+rv(t):"string:"+t},bv=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jt(e,".sv"),"Priority must be a string or number.")}else E(t===Su||t.isEmpty(),"priority of unexpected type.");E(t===Su||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bv(this.priorityNode_)}static set __childrenNodeConstructor(e){Ch=e}static get __childrenNodeConstructor(){return Ch}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:L(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rv(this.value_):e+=this.value_,this.lazyHash_=ev(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),o=pe.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av,Pv;function yC(t){Av=t}function _C(t){Pv=t}class wC extends aa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?Ur(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Un,new pe("[PRIORITY-POST]",Pv))}makePost(e,n){const r=Av(e);return new j(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ie=new wC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=Math.log(2);class EC{constructor(e){const n=o=>parseInt(Math.log(o)/SC,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Os=function(t,e,n,r){t.sort(e);const i=function(l,u){const f=u-l;let c,d;if(f===0)return null;if(f===1)return c=t[l],d=n?n(c):c,new ge(d,c.node,ge.BLACK,null,null);{const g=parseInt(f/2,10)+l,v=i(l,g),_=i(g+1,u);return c=t[g],d=n?n(c):c,new ge(d,c.node,ge.BLACK,v,_)}},o=function(l){let u=null,f=null,c=t.length;const d=function(v,_){const A=c-v,p=c;c-=v;const h=i(A+1,p),m=t[A],y=n?n(m):m;g(new ge(y,m.node,_,null,h))},g=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),A=Math.pow(2,l.count-(v+1));_?d(A,ge.BLACK):(d(A,ge.BLACK),d(A,ge.RED))}return f},s=new EC(t.length),a=o(s);return new Me(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;const Kn={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Kn&&Ie,"ChildrenNode.ts has not been loaded"),el=el||new xt({".priority":Kn},{".priority":Ie}),el}get(e){const n=Pr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return jt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==Sr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(j.Wrap);let s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=Os(r,e.getCompare()):a=Kn;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new xt(f,u)}addToIndexes(e,n){const r=Ns(this.indexes_,(i,o)=>{const s=Pr(this.indexSet_,o);if(E(s,"Missing index implementation for "+o),i===Kn)if(s.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Os(a,s.getCompare())}else return Kn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ns(this.indexes_,i=>{if(i===Kn)return i;{const o=n.get(e.name);return o?i.remove(new j(e.name,o)):i}});return new xt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bv(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ti||(ti=new B(new Me(Kc),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ti}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ti:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,o;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?ti:this.priorityNode_;return new B(i,s,o)}}updateChild(e,n){const r=L(e);if(r===null)return n;{E(L(e)!==".priority"||dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(Ie,(s,a)=>{n[s]=a.val(e),r++,o&&B.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!e&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nv(this.getPriority().val())+":"),this.forEachChild(Ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ev(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new j(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===so?-1:0}withIndex(e){if(e===Sr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Sr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ie),i=n.getIterator(Ie);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===Sr?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CC extends B{constructor(){super(new Me(Kc),B.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const so=new CC;Object.defineProperties(j,{MIN:{value:new j(Rr,B.EMPTY_NODE)},MAX:{value:new j(Un,so)}});Iv.__EMPTY_NODE=B.EMPTY_NODE;pe.__childrenNodeConstructor=B;vC(so);_C(so);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=!0;function _e(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,_e(e))}if(!(t instanceof Array)&&kC){const n=[];let r=!1;if(tt(t,(s,a)=>{if(s.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(s,l)))}}),n.length===0)return B.EMPTY_NODE;const o=Os(n,gC,s=>s.name,Kc);if(r){const s=Os(n,Ie.getCompare());return new B(o,_e(e),new xt({".priority":s},{".priority":Ie}))}else return new B(o,_e(e),xt.Default)}else{let n=B.EMPTY_NODE;return tt(t,(r,i)=>{if(jt(t,r)&&r.substring(0,1)!=="."){const o=_e(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(_e(e))}}yC(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC extends aa{constructor(e){super(),this.indexPath_=e,E(!z(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?Ur(e.name,n.name):o}makePost(e,n){const r=_e(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,so);return new j(Un,e)}toString(){return Cv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC extends aa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ur(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=_e(e);return new j(n,r)}toString(){return".value"}}const IC=new TC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t){return{type:"value",snapshotNode:t}}function bC(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function AC(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function kh(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Qc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===IC?n="$value":t.index_===Sr?n="$key":(E(t.index_ instanceof xC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=we(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+we(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=we(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Th(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends wv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=oo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const s=Ds.getListenId_(e,r),a={};this.listens_[s]=a;const l=xh(e._queryParams);this.restRequest_(o+".json",l,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(o,c,!1,r),Pr(this.listens_,s)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Ds.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xh(e._queryParams),r=e._path.toString(),i=new oa;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+uS(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hi(a.responseText)}catch{je("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){return{value:null,children:new Map}}function Rv(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,Ms());const i=t.children.get(r);e=Q(e),Rv(i,e,n)}}function Eu(t,e,n){t.value!==null?n(e,t.value):OC(t,(r,i)=>{const o=new Z(e.toString()+"/"+r);Eu(i,o,n)})}function OC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=10*1e3,MC=30*1e3,LC=5*60*1e3;class FC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DC(e);const r=Ih+(MC-Ih)*Math.random();_i(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tt(e,(i,o)=>{o>0&&jt(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),_i(this.reportStats_.bind(this),Math.floor(Math.random()*2*LC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Ov(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=Ov()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Ls(H(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new Ls(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return z(this.path)?new Wn(this.source,H(),this.snap.getImmediateChild(e)):new Wn(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new Wn(this.source,H(),n.value):new Ki(this.source,H(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ki(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function zC(t,e,n,r){const i=[],o=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(PC(s.childName,s.snapshotNode))}),ni(t,i,"child_removed",e,r,n),ni(t,i,"child_added",e,r,n),ni(t,i,"child_moved",o,r,n),ni(t,i,"child_changed",e,r,n),ni(t,i,"value",e,r,n),i}function ni(t,e,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>UC(t,a,l)),s.forEach(a=>{const l=jC(t,a,o);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function jC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function UC(t,e,n){if(e.childName==null||n.childName==null)throw zr("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){return{eventCache:t,serverCache:e}}function wi(t,e,n,r){return Lv(new qc(e,n,r),t.serverCache)}function Fv(t,e,n,r){return Lv(t.eventCache,new qc(e,n,r))}function Cu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;const WC=()=>(tl||(tl=new Me(IE)),tl);class K{constructor(e,n=WC()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return tt(e,(r,i)=>{n=n.set(new Z(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(z(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(Q(e),n);return o!=null?{path:ce(new Z(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new K(null)}}set(e,n){if(z(e))return new K(n,this.children);{const r=L(e),o=(this.children.get(r)||new K(null)).set(Q(e),n),s=this.children.insert(r,o);return new K(this.value,s)}}remove(e){if(z(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new K(null):new K(this.value,o)}else return this}}get(e){if(z(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(z(e))return n;{const r=L(e),o=(this.children.get(r)||new K(null)).setTree(Q(e),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new K(this.value,s)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const o=L(e),s=this.children.get(o);return s?s.findOnPath_(Q(e),ce(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=L(e),o=this.children.get(i);return o?o.foreachOnPath_(Q(e),ce(n,i),r):new K(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new K(null))}}function Si(t,e,n){if(z(e))return new dt(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let o=r.value;const s=Xe(i,e);return o=o.updateChild(s,n),new dt(t.writeTree_.set(i,o))}else{const i=new K(n),o=t.writeTree_.setTree(e,i);return new dt(o)}}}function Nh(t,e,n){let r=t;return tt(n,(i,o)=>{r=Si(r,ce(e,i),o)}),r}function bh(t,e){if(z(e))return dt.empty();{const n=t.writeTree_.setTree(e,new K(null));return new dt(n)}}function ku(t,e){return Vn(t,e)!=null}function Vn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xe(n.path,e)):null}function Ah(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function sn(t,e){if(z(e))return t;{const n=Vn(t,e);return n!=null?new dt(new K(n)):new dt(t.writeTree_.subtree(e))}}function xu(t){return t.writeTree_.isEmpty()}function Or(t,e){return zv(H(),t.writeTree_,e)}function zv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(E(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=zv(ce(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e){return Hv(e,t)}function BC(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Si(t.visibleWrites,e,n)),t.lastWriteId=r}function $C(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,s=t.allWrites.length-1;for(;i&&s>=0;){const a=t.allWrites[s];a.visible&&(s>=n&&VC(a,r.path)?i=!1:ut(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return YC(t),!0;if(r.snap)t.visibleWrites=bh(t.visibleWrites,r.path);else{const a=r.children;tt(a,l=>{t.visibleWrites=bh(t.visibleWrites,ce(r.path,l))})}return!0}else return!1}function VC(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ce(t.path,n),e))return!0;return!1}function YC(t){t.visibleWrites=Uv(t.allWrites,GC,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function GC(t){return t.visible}function Uv(t,e,n){let r=dt.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const s=o.path;let a;if(o.snap)ut(n,s)?(a=Xe(n,s),r=Si(r,a,o.snap)):ut(s,n)&&(a=Xe(s,n),r=Si(r,H(),o.snap.getChild(a)));else if(o.children){if(ut(n,s))a=Xe(n,s),r=Nh(r,a,o.children);else if(ut(s,n))if(a=Xe(s,n),z(a))r=Nh(r,H(),o.children);else{const l=Pr(o.children,L(a));if(l){const u=l.getChild(Q(a));r=Si(r,H(),u)}}}else throw zr("WriteRecord should have .snap or .children")}}return r}function Wv(t,e,n,r,i){if(!r&&!i){const o=Vn(t.visibleWrites,e);if(o!=null)return o;{const s=sn(t.visibleWrites,e);if(xu(s))return n;if(n==null&&!ku(s,H()))return null;{const a=n||B.EMPTY_NODE;return Or(s,a)}}}else{const o=sn(t.visibleWrites,e);if(!i&&xu(o))return n;if(!i&&n==null&&!ku(o,H()))return null;{const s=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},a=Uv(t.allWrites,s,e),l=n||B.EMPTY_NODE;return Or(a,l)}}}function KC(t,e,n){let r=B.EMPTY_NODE;const i=Vn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=sn(t.visibleWrites,e);return n.forEachChild(Ie,(s,a)=>{const l=Or(sn(o,new Z(s)),a);r=r.updateImmediateChild(s,l)}),Ah(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=sn(t.visibleWrites,e);return Ah(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function QC(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=ce(e,n);if(ku(t.visibleWrites,o))return null;{const s=sn(t.visibleWrites,o);return xu(s)?i.getChild(n):Or(s,i.getChild(n))}}function qC(t,e,n,r){const i=ce(e,n),o=Vn(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=sn(t.visibleWrites,i);return Or(s,r.getNode().getImmediateChild(n))}else return null}function XC(t,e){return Vn(t.visibleWrites,e)}function JC(t,e,n,r,i,o,s){let a;const l=sn(t.visibleWrites,e),u=Vn(l,H());if(u!=null)a=u;else if(n!=null)a=Or(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const f=[],c=s.getCompare(),d=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let g=d.getNext();for(;g&&f.length<i;)c(g,r)!==0&&f.push(g),g=d.getNext();return f}else return[]}function ZC(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function Tu(t,e,n,r){return Wv(t.writeTree,t.treePath,e,n,r)}function Bv(t,e){return KC(t.writeTree,t.treePath,e)}function Ph(t,e,n,r){return QC(t.writeTree,t.treePath,e,n,r)}function Fs(t,e){return XC(t.writeTree,ce(t.treePath,e))}function ek(t,e,n,r,i,o){return JC(t.writeTree,t.treePath,e,n,r,i,o)}function Xc(t,e,n){return qC(t.writeTree,t.treePath,e,n)}function $v(t,e){return Hv(ce(t.treePath,e),t.writeTree)}function Hv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,kh(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,AC(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,bC(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,kh(r,e.snapshotNode,i.oldSnap));else throw zr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Vv=new nk;class Jc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bn(this.viewCache_),o=ek(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]}}function rk(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ik(t,e,n,r,i){const o=new tk;let s,a;if(n.type===yt.OVERWRITE){const u=n;u.source.fromUser?s=Iu(t,e,u.path,u.snap,r,i,o):(E(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),s=zs(t,e,u.path,u.snap,r,i,a,o))}else if(n.type===yt.MERGE){const u=n;u.source.fromUser?s=sk(t,e,u.path,u.children,r,i,o):(E(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),s=Nu(t,e,u.path,u.children,r,i,a,o))}else if(n.type===yt.ACK_USER_WRITE){const u=n;u.revert?s=uk(t,e,u.path,r,i,o):s=ak(t,e,u.path,u.affectedTree,r,i,o)}else if(n.type===yt.LISTEN_COMPLETE)s=lk(t,e,n.path,r,o);else throw zr("Unknown operation type: "+n.type);const l=o.getChanges();return ok(e,s,l),{viewCache:s,changes:l}}function ok(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Cu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(NC(Cu(e)))}}function Yv(t,e,n,r,i,o){const s=e.eventCache;if(Fs(r,n)!=null)return e;{let a,l;if(z(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Bn(e),f=u instanceof B?u:B.EMPTY_NODE,c=Bv(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{const u=Tu(r,Bn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const u=L(n);if(u===".priority"){E(dn(n)===1,"Can't have a priority with additional path components");const f=s.getNode();l=e.serverCache.getNode();const c=Ph(r,n,f,l);c!=null?a=t.filter.updatePriority(f,c):a=s.getNode()}else{const f=Q(n);let c;if(s.isCompleteForChild(u)){l=e.serverCache.getNode();const d=Ph(r,n,s.getNode(),l);d!=null?c=s.getNode().getImmediateChild(u).updateChild(f,d):c=s.getNode().getImmediateChild(u)}else c=Xc(r,u,e.serverCache);c!=null?a=t.filter.updateChild(s.getNode(),u,c,f,i,o):a=s.getNode()}}return wi(e,a,s.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function zs(t,e,n,r,i,o,s,a){const l=e.serverCache;let u;const f=s?t.filter:t.filter.getIndexedFilter();if(z(n))u=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=f.updateFullNode(l.getNode(),g,null)}else{const g=L(n);if(!l.isCompleteForPath(n)&&dn(n)>1)return e;const v=Q(n),A=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=f.updatePriority(l.getNode(),A):u=f.updateChild(l.getNode(),g,A,v,Vv,null)}const c=Fv(e,u,l.isFullyInitialized()||z(n),f.filtersNodes()),d=new Jc(i,c,o);return Yv(t,c,n,i,d,a)}function Iu(t,e,n,r,i,o,s){const a=e.eventCache;let l,u;const f=new Jc(i,e,o);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,s),l=wi(e,u,!0,t.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=wi(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Q(n),g=a.getNode().getImmediateChild(c);let v;if(z(d))v=r;else{const _=f.getCompleteChild(c);_!=null?Ev(d)===".priority"&&_.getChild(kv(d)).isEmpty()?v=_:v=_.updateChild(d,r):v=B.EMPTY_NODE}if(g.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),c,v,d,f,s);l=wi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Rh(t,e){return t.eventCache.isCompleteForChild(e)}function sk(t,e,n,r,i,o,s){let a=e;return r.foreach((l,u)=>{const f=ce(n,l);Rh(e,L(f))&&(a=Iu(t,a,f,u,i,o,s))}),r.foreach((l,u)=>{const f=ce(n,l);Rh(e,L(f))||(a=Iu(t,a,f,u,i,o,s))}),a}function Oh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nu(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;z(n)?u=r:u=new K(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=Oh(t,g,d);l=zs(t,l,new Z(c),v,i,o,s,a)}}),u.children.inorderTraversal((c,d)=>{const g=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),_=Oh(t,v,d);l=zs(t,l,new Z(c),_,i,o,s,a)}}),l}function ak(t,e,n,r,i,o,s){if(Fs(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return zs(t,e,n,l.getNode().getChild(n),i,o,a,s);if(z(n)){let u=new K(null);return l.getNode().forEachChild(Sr,(f,c)=>{u=u.set(new Z(f),c)}),Nu(t,e,n,u,i,o,a,s)}else return e}else{let u=new K(null);return r.foreach((f,c)=>{const d=ce(n,f);l.isCompleteForPath(d)&&(u=u.set(f,l.getNode().getChild(d)))}),Nu(t,e,n,u,i,o,a,s)}}function lk(t,e,n,r,i){const o=e.serverCache,s=Fv(e,o.getNode(),o.isFullyInitialized()||z(n),o.isFiltered());return Yv(t,s,n,r,Vv,i)}function uk(t,e,n,r,i,o){let s;if(Fs(r,n)!=null)return e;{const a=new Jc(r,e,i),l=e.eventCache.getNode();let u;if(z(n)||L(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Tu(r,Bn(e));else{const c=e.serverCache.getNode();E(c instanceof B,"serverChildren would be complete if leaf node"),f=Bv(r,c)}f=f,u=t.filter.updateFullNode(l,f,o)}else{const f=L(n);let c=Xc(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=l.getImmediateChild(f)),c!=null?u=t.filter.updateChild(l,f,c,Q(n),a,o):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(l,f,B.EMPTY_NODE,Q(n),a,o):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Tu(r,Bn(e)),s.isLeafNode()&&(u=t.filter.updateFullNode(u,s,o)))}return s=e.serverCache.isFullyInitialized()||Fs(r,H())!=null,wi(e,u,s,t.filter.filtersNodes())}}function ck(t,e){const n=Bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Dh(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(E(Bn(t.viewCache_),"We should always have a full cache before handling merges"),E(Cu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=ik(t.processor_,i,e,n,r);return rk(t.processor_,o.viewCache),E(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,fk(t,o.changes,o.viewCache.eventCache.getNode(),null)}function fk(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return zC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mh;function dk(t){E(!Mh,"__referenceConstructor has already been defined"),Mh=t}function Zc(t,e,n,r){const i=e.source.queryId;if(i!==null){const o=t.views.get(i);return E(o!=null,"SyncTree gave us an op for an invalid query."),Dh(o,e,n,r)}else{let o=[];for(const s of t.views.values())o=o.concat(Dh(s,e,n,r));return o}}function ef(t,e){let n=null;for(const r of t.views.values())n=n||ck(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh;function hk(t){E(!Lh,"__referenceConstructor has already been defined"),Lh=t}class Fh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=ZC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gv(t,e,n,r,i){return BC(t.pendingWriteTree_,e,n,r,i),i?ua(t,new Wn(Ov(),e,n)):[]}function Nn(t,e,n=!1){const r=$C(t.pendingWriteTree_,e);if(HC(t.pendingWriteTree_,e)){let o=new K(null);return r.snap!=null?o=o.set(H(),!0):tt(r.children,s=>{o=o.set(new Z(s),!0)}),ua(t,new Ls(r.path,o,n))}else return[]}function la(t,e,n){return ua(t,new Wn(Dv(),e,n))}function pk(t,e,n){const r=K.fromObject(n);return ua(t,new Ki(Dv(),e,r))}function mk(t,e,n,r){const i=qv(t,r);if(i!=null){const o=Xv(i),s=o.path,a=o.queryId,l=Xe(s,e),u=new Wn(Mv(a),l,n);return Jv(t,s,u)}else return[]}function gk(t,e,n,r){const i=qv(t,r);if(i){const o=Xv(i),s=o.path,a=o.queryId,l=Xe(s,e),u=K.fromObject(n),f=new Ki(Mv(a),l,u);return Jv(t,s,f)}else return[]}function tf(t,e,n){const i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(s,a)=>{const l=Xe(s,e),u=ef(a,l);if(u)return u});return Wv(i,e,o,n,!0)}function ua(t,e){return Kv(e,t.syncPointTree_,null,jv(t.pendingWriteTree_,H()))}function Kv(t,e,n,r){if(z(t.path))return Qv(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=ef(i,H()));let o=[];const s=L(t.path),a=t.operationForChild(s),l=e.children.get(s);if(l&&a){const u=n?n.getImmediateChild(s):null,f=$v(r,s);o=o.concat(Kv(a,l,u,f))}return i&&(o=o.concat(Zc(i,t,r,n))),o}}function Qv(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=ef(i,H()));let o=[];return e.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,u=$v(r,s),f=t.operationForChild(s);f&&(o=o.concat(Qv(f,a,l,u)))}),i&&(o=o.concat(Zc(i,t,r,n))),o}function qv(t,e){return t.tagToQueryMap.get(e)}function Xv(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Jv(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=jv(t.pendingWriteTree_,e);return Zc(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nf(n)}node(){return this.node_}}class rf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new rf(this.syncTree_,n)}node(){return tf(this.syncTree_,this.path_)}}const vk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zh=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _k(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},_k=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},wk=function(t,e,n,r){return of(e,new rf(n,t),r)},Zv=function(t,e,n){return of(t,new nf(e),n)};function of(t,e,n){const r=t.getPriority().val(),i=zh(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const s=t,a=zh(s.getValue(),e,n);return a!==s.getValue()||i!==s.getPriority().val()?new pe(a,_e(i)):t}else{const s=t;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new pe(i))),s.forEachChild(Ie,(a,l)=>{const u=of(l,e.getImmediateChild(a),n);u!==l&&(o=o.updateImmediateChild(a,u))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function af(t,e){let n=e instanceof Z?e:new Z(e),r=t,i=L(n);for(;i!==null;){const o=Pr(r.node.children,i)||{children:{},childCount:0};r=new sf(i,r,o),n=Q(n),i=L(n)}return r}function Br(t){return t.node.value}function ey(t,e){t.node.value=e,bu(t)}function ty(t){return t.node.childCount>0}function Sk(t){return Br(t)===void 0&&!ty(t)}function ca(t,e){tt(t.node.children,(n,r)=>{e(new sf(n,t,r))})}function ny(t,e,n,r){n&&!r&&e(t),ca(t,i=>{ny(i,e,!0,r)}),n&&r&&e(t)}function Ek(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ao(t){return new Z(t.parent===null?t.name:ao(t.parent)+"/"+t.name)}function bu(t){t.parent!==null&&Ck(t.parent,t.name,t)}function Ck(t,e,n){const r=Sk(n),i=jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,bu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,bu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=/[\[\].#$\/\u0000-\u001F\u007F]/,xk=/[\[\].#$\u0000-\u001F\u007F]/,nl=10*1024*1024,ry=function(t){return typeof t=="string"&&t.length!==0&&!kk.test(t)},iy=function(t){return typeof t=="string"&&t.length!==0&&!xk.test(t)},Tk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iy(t)},oy=function(t,e,n,r){r&&e===void 0||lf(Wc(t,"value"),e,n)},lf=function(t,e,n){const r=n instanceof Z?new lC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Sn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Sn(r)+" with contents = "+e.toString());if(tv(e))throw new Error(t+"contains "+e.toString()+" "+Sn(r));if(typeof e=="string"&&e.length>nl/3&&sa(e)>nl)throw new Error(t+"contains a string greater than "+nl+" utf8 bytes "+Sn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(tt(e,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!ry(s)))throw new Error(t+" contains an invalid key ("+s+") "+Sn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uC(r,s),lf(t,a,r),cC(r)}),i&&o)throw new Error(t+' contains ".value" child '+Sn(r)+" in addition to actual children.")}},sy=function(t,e,n,r){if(!(r&&n===void 0)&&!iy(n))throw new Error(Wc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ik=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sy(t,e,n,r)},ay=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Nk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ry(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Tk(n))throw new Error(Wc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ly(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();n!==null&&!xv(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lt(t,e,n){ly(t,n),Ak(t,r=>ut(r,e)||ut(e,r))}function Ak(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(Pk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Pk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pn&&Te("event: "+n.toString()),Wr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="repo_interrupt",Ok=25;class Dk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ms(),this.transactionQueueTree_=new sf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Mk(t,e,n){if(t.stats_=Vc(t.repoInfo_),t.forceRestClient_||OE())t.server_=new Ds(t.repoInfo_,(r,i,o,s)=>{jh(t,r,i,o,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Uh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new It(t.repoInfo_,e,(r,i,o,s)=>{jh(t,r,i,o,s)},r=>{Uh(t,r)},r=>{Lk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=zE(t.repoInfo_,()=>new FC(t.stats_,t.server_)),t.infoData_=new RC,t.infoSyncTree_=new Fh({startListening:(r,i,o,s)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=la(t.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),cf(t,"connected",!1),t.serverSyncTree_=new Fh({startListening:(r,i,o,s)=>(t.server_.listen(r,o,i,(a,l)=>{const u=s(a,l);Lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function uy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uf(t){return vk({timestamp:uy(t)})}function jh(t,e,n,r,i){t.dataUpdateCount++;const o=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(i)if(r){const l=Ns(n,u=>_e(u));s=gk(t.serverSyncTree_,o,l,i)}else{const l=_e(n);s=mk(t.serverSyncTree_,o,l,i)}else if(r){const l=Ns(n,u=>_e(u));s=pk(t.serverSyncTree_,o,l)}else{const l=_e(n);s=la(t.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=fa(t,o)),Lt(t.eventQueue_,a,s)}function Uh(t,e){cf(t,"connected",e),e===!1&&zk(t)}function Lk(t,e){tt(e,(n,r)=>{cf(t,n,r)})}function cf(t,e,n){const r=new Z("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const o=la(t.infoSyncTree_,r,i);Lt(t.eventQueue_,r,o)}function cy(t){return t.nextWriteId_++}function Fk(t,e,n,r,i){ff(t,"set",{path:e.toString(),value:n,priority:r});const o=uf(t),s=_e(n,r),a=tf(t.serverSyncTree_,e),l=Zv(s,a,o),u=cy(t),f=Gv(t.serverSyncTree_,e,l,u,!0);ly(t.eventQueue_,f),t.server_.put(e.toString(),s.val(!0),(d,g)=>{const v=d==="ok";v||je("set at "+e+" failed: "+d);const _=Nn(t.serverSyncTree_,u,!v);Lt(t.eventQueue_,e,_),Uk(t,i,d,g)});const c=my(t,e);fa(t,c),Lt(t.eventQueue_,c,[])}function zk(t){ff(t,"onDisconnectEvents");const e=uf(t),n=Ms();Eu(t.onDisconnect_,H(),(i,o)=>{const s=wk(i,o,t.serverSyncTree_,e);Rv(n,i,s)});let r=[];Eu(n,H(),(i,o)=>{r=r.concat(la(t.serverSyncTree_,i,o));const s=my(t,i);fa(t,s)}),t.onDisconnect_=Ms(),Lt(t.eventQueue_,H(),r)}function jk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rk)}function ff(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Uk(t,e,n,r){e&&Wr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,e(s)}})}function fy(t,e,n){return tf(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function df(t,e=t.transactionQueueTree_){if(e||da(t,e),Br(e)){const n=hy(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Wk(t,ao(e),n)}else ty(e)&&ca(e,n=>{df(t,n)})}function Wk(t,e,n){const r=n.map(u=>u.currentWriteId),i=fy(t,e,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const f=n[u];E(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=Xe(e,f.path);o=o.updateChild(c,f.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ff(t,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();da(t,af(t.transactionQueueTree_,e)),df(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)Wr(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{je("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}fa(t,e)}},s)}function fa(t,e){const n=dy(t,e),r=ao(n),i=hy(t,n);return Bk(t,i,r),r}function Bk(t,e,n){if(e.length===0)return;const r=[];let i=[];const s=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Xe(n,l.path);let f=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,c=l.abortReason,i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ok)f=!0,c="maxretry",i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=fy(t,l.path,s);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){lf("transaction failed: Data returned ",g,l.path);let v=_e(g);typeof g=="object"&&g!=null&&jt(g,".priority")||(v=v.updatePriority(d.getPriority()));const A=l.currentWriteId,p=uf(t),h=Zv(v,d,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=cy(t),s.splice(s.indexOf(A),1),i=i.concat(Gv(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,A,!0))}else f=!0,c="nodata",i=i.concat(Nn(t.serverSyncTree_,l.currentWriteId,!0))}Lt(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}da(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Wr(r[a]);df(t,t.transactionQueueTree_)}function dy(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&Br(r)===void 0;)r=af(r,n),e=Q(e),n=L(e);return r}function hy(t,e){const n=[];return py(t,e,n),n.sort((r,i)=>r.order-i.order),n}function py(t,e,n){const r=Br(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ca(e,i=>{py(t,i,n)})}function da(t,e){const n=Br(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ey(e,n.length>0?n:void 0)}ca(e,r=>{da(t,r)})}function my(t,e){const n=ao(dy(t,e)),r=af(t.transactionQueueTree_,e);return Ek(r,i=>{rl(t,i)}),rl(t,r),ny(r,i=>{rl(t,i)}),n}function rl(t,e){const n=Br(e);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(E(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(E(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?ey(e,void 0):n.length=o+1,Lt(t.eventQueue_,ao(e),i);for(let s=0;s<r.length;s++)Wr(r[s])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Hk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wh=function(t,e){const n=Vk(t),r=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Z(n.pathString)}},Vk=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=$k(t.substring(f,c)));const d=Hk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),o=r}"ns"in d&&(o=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Yk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=Bh.charAt(n%64),n=Math.floor(n/64);E(n===0,"Cannot push at time == 0");let s=o.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=Bh.charAt(e[i]);return E(s.length===20,"nextPushId: Length should be 20."),s}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:Ev(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=Th(this._queryParams),n=$c(e);return n==="{}"?"default":n}get _queryObject(){return Th(this._queryParams)}isEqual(e){if(e=jr(e),!(e instanceof hf))return!1;const n=this._repo===e._repo,r=xv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+aC(this._path)}}class Yn extends hf{constructor(e,n){super(e,n,new Qc,!1)}get parent(){const e=kv(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Gk(t,e){return t=jr(t),t._checkNotDeleted("ref"),e!==void 0?Au(t._root,e):t._root}function Au(t,e){return t=jr(t),L(t._path)===null?Ik("child","path",e,!1):sy("child","path",e,!1),new Yn(t._repo,ce(t._path,e))}function Kk(t,e){t=jr(t),ay("push",t._path),oy("push",e,t._path,!0);const n=uy(t._repo),r=Yk(n),i=Au(t,r),o=Au(t,r);let s;return e!=null?s=Qk(o,e).then(()=>o):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function Qk(t,e){t=jr(t),ay("set",t._path),oy("set",e,t._path,!1);const n=new oa;return Fk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}dk(Yn);hk(Yn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="FIREBASE_DATABASE_EMULATOR_HOST",Pu={};let Xk=!1;function Jk(t,e,n,r){t.repoInfo_=new hv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Zk(t,e,n,r,i){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=Wh(o,i),a=s.repoInfo,l,u;typeof process<"u"&&ah&&(u=ah[qk]),u?(l=!0,o=`http://${u}?ns=${a.namespace}`,s=Wh(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const f=i&&l?new wr(wr.OWNER):new ME(t.name,t.options,e);Nk("Invalid Firebase Database URL",s),z(s.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=t2(a,t,f,new DE(t.name,n));return new n2(c,t)}function e2(t,e){const n=Pu[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jk(t),delete n[t.key]}function t2(t,e,n,r){let i=Pu[e.name];i||(i={},Pu[e.name]=i);let o=i[t.toURLString()];return o&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Dk(t,Xk,n,r),i[t.toURLString()]=o,o}class n2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Mk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(e2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function r2(t=cE(),e){const n=sE(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Jw("database");r&&i2(n,...r)}return n}function i2(t,e,n,r={}){t=jr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Mt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new wr(wr.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:Zw(r.mockUserToken,t.app.options.projectId);o=new wr(s)}Jk(i,e,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){wE(uE),As(new Vi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Zk(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),yr(lh,uh,t),yr(lh,uh,"esm2017")}It.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};It.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};o2();var s2="firebase",a2="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(s2,a2,"app");const l2={apiKey:"AIzaSyCFhdEDlsvhxSAcBLWXI0UBJ1oNPjDG3wM",authDomain:"contato-niver.firebaseapp.com",databaseURL:"https://contato-niver-default-rtdb.firebaseio.com",projectId:"contato-niver",storageBucket:"contato-niver.appspot.com",messagingSenderId:"591042802869",appId:"1:591042802869:web:cc0b6e112c3f4cc384bafc"},u2=Qg(l2);function c2(){const t=r2(u2),[e,n]=Qe.useState(!1),[r,i]=Qe.useState({guestName:"",invite:"",companion:!1,companionName:""}),o=l=>{const{name:u,value:f,type:c,checked:d}=l.target;i({...r,[u]:c==="radio"?f:c==="checkbox"?d:f.trim()})},s=l=>{l.preventDefault(),Kk(Gk(t),{guestName:r.guestName,invite:r.invite,companion:r.companion,companionName:r.companionName}).then(()=>n(!0)).catch(()=>console.log("nao salvou"))},a=()=>{n(!1),i({guestName:"",invite:"",companion:!1,companionName:""})};return C.jsx("form",{onSubmit:s,className:"invite-form",children:e?C.jsxs("div",{children:[r.invite==="yes"?C.jsx("p",{children:"Obrigada pela confirmação e nos vemos em breve ^^"}):C.jsx("p",{children:"Falo nada, viu ¬¬"}),C.jsx("button",{className:"submit-btn",type:"button",onClick:a,children:"Preencher novamente"})]}):C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"mb-3",children:[C.jsx("label",{htmlFor:"guestName",children:"Nome: "}),C.jsx("input",{name:"guestName",id:"guestName",value:r.guestName,onChange:o,required:!0,className:"p-2"})]}),C.jsxs("div",{children:[C.jsx("p",{className:"mb-3",children:"Você vai... né?"}),C.jsx("div",{className:"mb-3",children:C.jsxs("label",{htmlFor:"yes",className:"radio-container",children:[C.jsx("input",{type:"radio",id:"yes",name:"invite",value:"yes",onChange:o}),"Sim"]})}),C.jsx("div",{className:"mb-2",children:C.jsxs("label",{htmlFor:"no",className:"radio-container",children:[C.jsx("input",{type:"radio",id:"no",name:"invite",value:"no",onChange:o}),"Não"]})})]}),r.invite==="yes"&&C.jsxs("div",{className:"mb-3 mt-3",children:[C.jsxs("label",{htmlFor:"companion",className:"checkmark-container",children:[C.jsx("input",{type:"checkbox",name:"companion",id:"companion",checked:r.companion,onChange:o}),C.jsx("span",{className:"checkmark"}),"Vou levar acompanhante"]}),r.companion&&C.jsxs("div",{children:[C.jsx("label",{htmlFor:"companionName",className:"mb-3 block",children:"Nome da pessoa acompanhante:"}),C.jsx("input",{name:"companionName",id:"companionName",value:r.companionName,onChange:o,required:!0,className:"p-2"})]})]}),C.jsx("button",{className:"submit-btn",type:"submit",children:"Enviar"})]})})}function f2(){const t=Qe.useRef(null),[e,n]=Qe.useState(!0),r=()=>{t.current&&(t.current.volume=1)};return Qe.useEffect(()=>{e||r()},[e]),C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"controls p-3",children:C.jsxs("button",{style:{fontSize:20},onClick:()=>n(!e),children:[e?C.jsx(Ar,{icon:jw}):C.jsx(Ar,{icon:Uw}),C.jsx("span",{className:"pl-2",children:e?"Solta o som, DJ!":"Abaixa essa porra"})]})}),C.jsxs("div",{className:"content",children:[C.jsx("h1",{className:"title",children:"Ei, você, pessoa do reino de tão, tão distante..."}),C.jsx("p",{children:"Em um sábado frio e chuvoso, mais especificamente o sábado de 02 de julho de 1994, na longínqua cidade de Dourados, nascia..."}),C.jsx("p",{children:"Eu."}),C.jsx("p",{children:"E o que isso significa?"}),C.jsx("p",{children:"Que esse ano eu estou"}),C.jsx("p",{className:"highlight",children:"T R I N T A N D O"}),C.jsx("img",{src:Ww,alt:"burek e shurro",width:"300",className:"mx-auto"}),C.jsx("p",{className:"caption",children:"Pois é, eu faço essa cara quando lembro disso também."}),C.jsx("p",{children:"E é com grande honra e alegria que convoco a vossa presença para celebrar esse evento extraordinário comigo!"}),C.jsxs("ul",{className:"invite-details",children:[C.jsxs("li",{children:[C.jsx("span",{children:"Quando: "}),"06 de julho de 2024, às 15h"]}),C.jsxs("li",{children:[C.jsx("span",{children:"Local: "}),"algum lugar de Campinas ",C.jsx("em",{children:"(você vai receber por mensagem os detalhes após a confirmação)"})]}),C.jsxs("li",{children:[C.jsx("span",{children:"Traje: "}),"você não ",C.jsx("em",{children:"preciiiisa"})," estar fantasiated de algum personagem do universo de Shrek ",C.jsx("em",{children:"(mas saiba que, se estiver, vai ser legal demais)"})]}),C.jsxs("li",{children:[C.jsx("span",{children:"O que levar: "}),"seu corpinho e, caso vás a bebeires algum álcool, fique à vontade para trazer ",C.jsx("em",{children:"(em um cooler cairia bem)"})]})]}),C.jsxs("p",{children:["Aguardo sua confirmação no formulário abaixo até o dia ",C.jsx("strong",{children:"15 de maio de 2024"}),", para que tudo possa ser organizado da melhor forma possível!"]}),C.jsx(c2,{})]}),C.jsx("div",{className:"app-background",children:C.jsx("video",{ref:t,autoPlay:!0,muted:e,loop:!0,children:C.jsx("source",{src:Bw,type:"video/mp4"})})})]})}function d2(){const[t,e]=Qe.useState(!1),[n,r]=Qe.useState(""),[i,o]=Qe.useState(!1);return Qe.useEffect(()=>{n==="linkinpark"&&(e(!0),setTimeout(()=>{o(!0)},2e3))},[n]),C.jsx(C.Fragment,{children:i?C.jsx("main",{className:t?"fade-in":"",children:C.jsx(f2,{})}):C.jsxs("main",{className:`${t?"fade-out":""} h-screen flex flex-col justify-center items-center`,children:[C.jsx("p",{className:"mb-3",children:"Por favor, insira a senha para entrar:"}),C.jsx("input",{value:n,onChange:s=>r(s.target.value),type:"password",className:"p-3 password-input"})]})})}il.createRoot(document.getElementById("root")).render(C.jsx(Lu.StrictMode,{children:C.jsx(d2,{})}));
