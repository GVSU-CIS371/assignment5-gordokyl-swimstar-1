(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Wr=[],Qt=()=>{},dd=()=>!1,Yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zo=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},S_=Object.prototype.hasOwnProperty,we=(t,e)=>S_.call(t,e),ie=Array.isArray,Kr=t=>yi(t)==="[object Map]",pd=t=>yi(t)==="[object Set]",eh=t=>yi(t)==="[object Date]",ue=t=>typeof t=="function",He=t=>typeof t=="string",At=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",gd=t=>(Se(t)||ue(t))&&ue(t.then)&&ue(t.catch),md=Object.prototype.toString,yi=t=>md.call(t),R_=t=>yi(t).slice(8,-1),_d=t=>yi(t)==="[object Object]",ea=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qs=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},P_=/-\w/g,xt=ta(t=>t.replace(P_,e=>e.slice(1).toUpperCase())),C_=/\B([A-Z])/g,Rr=ta(t=>t.replace(C_,"-$1").toLowerCase()),yd=ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),za=ta(t=>t?`on${yd(t)}`:""),Gt=(t,e)=>!Object.is(t,e),ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ec=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let th;const na=()=>th||(th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function us(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?N_(r):us(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Se(t))return t}const V_=/;(?![^(]*\))/g,k_=/:([^]+)/,D_=/\/\*[^]*?\*\//g;function N_(t){const e={};return t.replace(D_,"").split(V_).forEach(n=>{if(n){const r=n.split(k_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tc(t){let e="";if(He(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=tc(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const O_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=Yl(O_);function Ed(t){return!!t||t===""}function M_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ri(t[r],e[r]);return n}function ri(t,e){if(t===e)return!0;let n=eh(t),r=eh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=At(t),r=At(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?M_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!ri(t[a],e[a]))return!1}}return String(t)===String(e)}const Td=t=>!!(t&&t.__v_isRef===!0),Et=t=>He(t)?t:t==null?"":ie(t)||Se(t)&&(t.toString===md||!ue(t.toString))?Td(t)?Et(t.value):JSON.stringify(t,Id,2):String(t),Id=(t,e)=>Td(e)?Id(t,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wa(r,i)+" =>"]=s,n),{})}:pd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wa(n))}:At(e)?Wa(e):Se(e)&&!ie(e)&&!_d(e)?String(e):e,Wa=(t,e="")=>{var n;return At(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class wd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ad(t){return new wd(t)}function bd(){return it}function L_(t,e=!1){it&&it.cleanups.push(t)}let Ce;const Ka=new WeakSet;class Sd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nh(this),Cd(this);const e=Ce,n=Mt;Ce=this,Mt=!0;try{return this.fn()}finally{Vd(this),Ce=e,Mt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,nh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pl(this)&&this.run()}get dirty(){return pl(this)}}let Rd=0,Hs,zs;function Pd(t,e=!1){if(t.flags|=8,e){t.next=zs,zs=t;return}t.next=Hs,Hs=t}function nc(){Rd++}function rc(){if(--Rd>0)return;if(zs){let e=zs;for(zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hs;){let e=Hs;for(Hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Cd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),sc(r),F_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si)||(t.globalVersion=si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!pl(t))))return;t.flags|=2;const e=t.dep,n=Ce,r=Mt;Ce=t,Mt=!0;try{Cd(t);const s=t.fn(t._value);(e.version===0||Gt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=n,Mt=r,Vd(t),t.flags&=-3}}function sc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function F_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Mt=!0;const Dd=[];function vn(){Dd.push(Mt),Mt=!1}function En(){const t=Dd.pop();Mt=t===void 0?!0:t}function nh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let si=0;class U_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ic{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!Mt||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new U_(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,Nd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){nc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rc()}}}function Nd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wo=new WeakMap,_r=Symbol(""),gl=Symbol(""),ii=Symbol("");function at(t,e,n){if(Mt&&Ce){let r=wo.get(t);r||wo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ic),s.map=r,s.key=n),s.track()}}function dn(t,e,n,r,s,i){const a=wo.get(t);if(!a){si++;return}const l=c=>{c&&c.trigger()};if(nc(),e==="clear")a.forEach(l);else{const c=ie(t),h=c&&ea(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===ii||!At(_)&&_>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(ii)),e){case"add":c?h&&l(a.get("length")):(l(a.get(_r)),Kr(t)&&l(a.get(gl)));break;case"delete":c||(l(a.get(_r)),Kr(t)&&l(a.get(gl)));break;case"set":Kr(t)&&l(a.get(_r));break}}rc()}function B_(t,e){const n=wo.get(t);return n&&n.get(e)}function Ur(t){const e=_e(t);return e===t?e:(at(e,"iterate",ii),It(t)?e:e.map(Ft))}function ra(t){return at(t=_e(t),"iterate",ii),t}function Wt(t,e){return Tn(t)?ts(Jt(t)?Ft(e):e):Ft(e)}const j_={__proto__:null,[Symbol.iterator](){return Ga(this,Symbol.iterator,t=>Wt(this,t))},concat(...t){return Ur(this).concat(...t.map(e=>ie(e)?Ur(e):e))},entries(){return Ga(this,"entries",t=>(t[1]=Wt(this,t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,n=>n.map(r=>Wt(this,r)),arguments)},find(t,e){return un(this,"find",t,e,n=>Wt(this,n),arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,n=>Wt(this,n),arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qa(this,"includes",t)},indexOf(...t){return Qa(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return Qa(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...t){return Ns(this,"push",t)},reduce(t,...e){return rh(this,"reduce",t,e)},reduceRight(t,...e){return rh(this,"reduceRight",t,e)},shift(){return Ns(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return Ns(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return Ns(this,"unshift",t)},values(){return Ga(this,"values",t=>Wt(this,t))}};function Ga(t,e,n){const r=ra(t),s=r[e]();return r!==t&&!It(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const $_=Array.prototype;function un(t,e,n,r,s,i){const a=ra(t),l=a!==t&&!It(t),c=a[e];if(c!==$_[e]){const p=c.apply(t,i);return l?Ft(p):p}let h=n;a!==t&&(l?h=function(p,_){return n.call(this,Wt(t,p),_,t)}:n.length>2&&(h=function(p,_){return n.call(this,p,_,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function rh(t,e,n,r){const s=ra(t),i=s!==t&&!It(t);let a=n,l=!1;s!==t&&(i?(l=r.length===0,a=function(h,d,p){return l&&(l=!1,h=Wt(t,h)),n.call(this,h,Wt(t,d),p,t)}):n.length>3&&(a=function(h,d,p){return n.call(this,h,d,p,t)}));const c=s[e](a,...r);return l?Wt(t,c):c}function Qa(t,e,n){const r=_e(t);at(r,"iterate",ii);const s=r[e](...n);return(s===-1||s===!1)&&ia(n[0])?(n[0]=_e(n[0]),r[e](...n)):s}function Ns(t,e,n=[]){vn(),nc();const r=_e(t)[e].apply(t,n);return rc(),En(),r}const q_=Yl("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(At));function H_(t){At(t)||(t=String(t));const e=_e(this);return at(e,"has",t),e.hasOwnProperty(t)}class xd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ey:Ud:i?Fd:Ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let c;if(a&&(c=j_[n]))return c;if(n==="hasOwnProperty")return H_}const l=Reflect.get(e,n,be(e)?e:r);if((At(n)?Od.has(n):q_(n))||(s||at(e,"get",n),i))return l;if(be(l)){const c=a&&ea(n)?l:l.value;return s&&Se(c)?_l(c):c}return Se(l)?s?_l(l):sa(l):l}}class Md extends xd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const a=ie(e)&&ea(n);if(!this._isShallow){const h=Tn(i);if(!It(r)&&!Tn(r)&&(i=_e(i),r=_e(r)),!a&&be(i)&&!be(r))return h||(i.value=r),!0}const l=a?Number(n)<e.length:we(e,n),c=Reflect.set(e,n,r,be(e)?e:s);return e===_e(s)&&(l?Gt(r,i)&&dn(e,"set",n,r):dn(e,"add",n,r)),c}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!At(n)||!Od.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",ie(e)?"length":_r),Reflect.ownKeys(e)}}class z_ extends xd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const W_=new Md,K_=new z_,G_=new Md(!0);const ml=t=>t,Ji=t=>Reflect.getPrototypeOf(t);function Q_(t,e,n){return function(...r){const s=this.__v_raw,i=_e(s),a=Kr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?ml:e?ts:Ft;return!e&&at(i,"iterate",c?gl:_r),Ze(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[d(p[0]),d(p[1])]:d(p),done:_}}})}}function Xi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function J_(t,e){const n={get(s){const i=this.__v_raw,a=_e(i),l=_e(s);t||(Gt(s,l)&&at(a,"get",s),at(a,"get",l));const{has:c}=Ji(a),h=e?ml:t?ts:Ft;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(_e(s),"iterate",_r),s.size},has(s){const i=this.__v_raw,a=_e(i),l=_e(s);return t||(Gt(s,l)&&at(a,"has",s),at(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=_e(l),h=e?ml:t?ts:Ft;return!t&&at(c,"iterate",_r),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ze(n,t?{add:Xi("add"),set:Xi("set"),delete:Xi("delete"),clear:Xi("clear")}:{add(s){const i=_e(this),a=Ji(i),l=_e(s),c=!e&&!It(s)&&!Tn(s)?l:s;return a.has.call(i,c)||Gt(s,c)&&a.has.call(i,s)||Gt(l,c)&&a.has.call(i,l)||(i.add(c),dn(i,"add",c,c)),this},set(s,i){!e&&!It(i)&&!Tn(i)&&(i=_e(i));const a=_e(this),{has:l,get:c}=Ji(a);let h=l.call(a,s);h||(s=_e(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Gt(i,d)&&dn(a,"set",s,i):dn(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:l}=Ji(i);let c=a.call(i,s);c||(s=_e(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&dn(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&dn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Q_(s,t,e)}),n}function oc(t,e){const n=J_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const X_={get:oc(!1,!1)},Y_={get:oc(!1,!0)},Z_={get:oc(!0,!1)};const Ld=new WeakMap,Fd=new WeakMap,Ud=new WeakMap,ey=new WeakMap;function ty(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ny(t){return t.__v_skip||!Object.isExtensible(t)?0:ty(R_(t))}function sa(t){return Tn(t)?t:ac(t,!1,W_,X_,Ld)}function ry(t){return ac(t,!1,G_,Y_,Fd)}function _l(t){return ac(t,!0,K_,Z_,Ud)}function ac(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=ny(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Jt(t){return Tn(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function It(t){return!!(t&&t.__v_isShallow)}function ia(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function lc(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&vd(t,"__v_skip",!0),t}const Ft=t=>Se(t)?sa(t):t,ts=t=>Se(t)?_l(t):t;function be(t){return t?t.__v_isRef===!0:!1}function Ao(t){return sy(t,!1)}function sy(t,e){return be(t)?t:new iy(t,e)}class iy{constructor(e,n){this.dep=new ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:Ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||It(e)||Tn(e);e=r?e:_e(e),Gt(e,n)&&(this._rawValue=e,this._value=r?e:Ft(e),this.dep.trigger())}}function Ee(t){return be(t)?t.value:t}const oy={get:(t,e,n)=>e==="__v_raw"?t:Ee(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bd(t){return Jt(t)?t:new Proxy(t,oy)}function ay(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=jd(t,n);return e}class ly{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=At(n)?n:String(n),this._raw=_e(e);let s=!0,i=e;if(!ie(e)||At(this._key)||!ea(this._key))do s=!ia(i)||It(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Ee(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&be(this._raw[this._key])){const n=this._object[this._key];if(be(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return B_(this._raw,this._key)}}class cy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function uy(t,e,n){return be(t)?t:ue(t)?new cy(t):Se(t)&&arguments.length>1?jd(t,e,n):Ao(t)}function jd(t,e,n){return new ly(t,e,n)}class hy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return Pd(this,!0),!0}get value(){const e=this.dep.track();return kd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fy(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new hy(r,s,n)}const Yi={},bo=new WeakMap;let hr;function dy(t,e=!1,n=hr){if(n){let r=bo.get(n);r||bo.set(n,r=[]),r.push(t)}}function py(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=B=>s?B:It(B)||s===!1||s===0?pn(B,1):pn(B);let d,p,_,b,V=!1,k=!1;if(be(t)?(p=()=>t.value,V=It(t)):Jt(t)?(p=()=>h(t),V=!0):ie(t)?(k=!0,V=t.some(B=>Jt(B)||It(B)),p=()=>t.map(B=>{if(be(B))return B.value;if(Jt(B))return h(B);if(ue(B))return c?c(B,2):B()})):ue(t)?e?p=c?()=>c(t,2):t:p=()=>{if(_){vn();try{_()}finally{En()}}const B=hr;hr=d;try{return c?c(t,3,[b]):t(b)}finally{hr=B}}:p=Qt,e&&s){const B=p,q=s===!0?1/0:s;p=()=>pn(B(),q)}const O=bd(),J=()=>{d.stop(),O&&O.active&&Zl(O.effects,d)};if(i&&e){const B=e;e=(...q)=>{B(...q),J()}}let H=k?new Array(t.length).fill(Yi):Yi;const Q=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const q=d.run();if(s||V||(k?q.some((Z,I)=>Gt(Z,H[I])):Gt(q,H))){_&&_();const Z=hr;hr=d;try{const I=[q,H===Yi?void 0:k&&H[0]===Yi?[]:H,b];H=q,c?c(e,3,I):e(...I)}finally{hr=Z}}}else d.run()};return l&&l(Q),d=new Sd(p),d.scheduler=a?()=>a(Q,!1):Q,b=B=>dy(B,!1,d),_=d.onStop=()=>{const B=bo.get(d);if(B){if(c)c(B,4);else for(const q of B)q();bo.delete(d)}},e?r?Q(!0):H=d.run():a?a(Q.bind(null,!0),!0):d.run(),J.pause=d.pause.bind(d),J.resume=d.resume.bind(d),J.stop=J,J}function pn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,be(t))pn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(pd(t)||Kr(t))t.forEach(r=>{pn(r,e,n)});else if(_d(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(t,e,n,r){try{return r?t(...r):t()}catch(s){oa(s,e,n)}}function nn(t,e,n,r){if(ue(t)){const s=vi(t,e,n,r);return s&&gd(s)&&s.catch(i=>{oa(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(nn(t[i],e,n,r));return s}}function oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){vn(),vi(i,null,10,[t,c,h]),En();return}}gy(t,n,s,r,a)}function gy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pt=[];let Ht=-1;const Gr=[];let xn=null,jr=0;const $d=Promise.resolve();let So=null;function qd(t){const e=So||$d;return t?e.then(this?t.bind(this):t):e}function my(t){let e=Ht+1,n=pt.length;for(;e<n;){const r=e+n>>>1,s=pt[r],i=oi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function cc(t){if(!(t.flags&1)){const e=oi(t),n=pt[pt.length-1];!n||!(t.flags&2)&&e>=oi(n)?pt.push(t):pt.splice(my(e),0,t),t.flags|=1,Hd()}}function Hd(){So||(So=$d.then(Wd))}function _y(t){ie(t)?Gr.push(...t):xn&&t.id===-1?xn.splice(jr+1,0,t):t.flags&1||(Gr.push(t),t.flags|=1),Hd()}function sh(t,e,n=Ht+1){for(;n<pt.length;n++){const r=pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zd(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,r)=>oi(n)-oi(r));if(Gr.length=0,xn){xn.push(...e);return}for(xn=e,jr=0;jr<xn.length;jr++){const n=xn[jr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xn=null,jr=0}}const oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wd(t){try{for(Ht=0;Ht<pt.length;Ht++){const e=pt[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<pt.length;Ht++){const e=pt[Ht];e&&(e.flags&=-2)}Ht=-1,pt.length=0,zd(),So=null,(pt.length||Gr.length)&&Wd()}}let ct=null,Kd=null;function Ro(t){const e=ct;return ct=t,Kd=t&&t.type.__scopeId||null,e}function Ls(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gh(-1);const i=Ro(e);let a;try{a=t(...s)}finally{Ro(i),r._d&&gh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Os(t,e){if(ct===null)return t;const n=ua(ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Pe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&pn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(vn(),nn(c,n,8,[t.el,l,t,e]),En())}}function yy(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function Ws(t,e,n=!1){const r=Tp();if(r||yr){let s=yr?yr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}function vy(){return!!(Tp()||yr)}const Ey=Symbol.for("v-scx"),Ty=()=>Ws(Ey);function lo(t,e,n){return Gd(t,e,n)}function Gd(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:a}=n,l=Ze({},n),c=e&&r||!e&&i!=="post";let h;if(li){if(i==="sync"){const b=Ty();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Qt,b.resume=Qt,b.pause=Qt,b}}const d=gt;l.call=(b,V,k)=>nn(b,d,V,k);let p=!1;i==="post"?l.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(b,V)=>{V?b():cc(b)}),l.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=py(t,e,l);return li&&(h?h.push(_):c&&_()),_}function Iy(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?Qd(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=Ti(this),l=Gd(s,i.bind(r),n);return a(),l}function Qd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const wy=Symbol("_vte"),Ay=t=>t.__isTeleport,by=Symbol("_leaveCb");function uc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,uc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ei(t,e){return ue(t)?Ze({name:t.name},e,{setup:t}):t}function Jd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ih(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Po=new WeakMap;function Ks(t,e,n,r,s=!1){if(ie(t)){t.forEach((k,O)=>Ks(k,e&&(ie(e)?e[O]:e),n,r,s));return}if(Qr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ks(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ua(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,_=_e(p),b=p===Pe?dd:k=>ih(d,k)?!1:we(_,k),V=(k,O)=>!(O&&ih(d,O));if(h!=null&&h!==c){if(oh(e),He(h))d[h]=null,b(h)&&(p[h]=null);else if(be(h)){const k=e;V(h,k.k)&&(h.value=null),k.k&&(d[k.k]=null)}}if(ue(c))vi(c,l,12,[a,d]);else{const k=He(c),O=be(c);if(k||O){const J=()=>{if(t.f){const H=k?b(c)?p[c]:d[c]:V()||!t.k?c.value:d[t.k];if(s)ie(H)&&Zl(H,i);else if(ie(H))H.includes(i)||H.push(i);else if(k)d[c]=[i],b(c)&&(p[c]=d[c]);else{const Q=[i];V(c,t.k)&&(c.value=Q),t.k&&(d[t.k]=Q)}}else k?(d[c]=a,b(c)&&(p[c]=a)):O&&(V(c,t.k)&&(c.value=a),t.k&&(d[t.k]=a))};if(a){const H=()=>{J(),Po.delete(t)};H.id=-1,Po.set(t,H),_t(H,n)}else oh(t),J()}}}function oh(t){const e=Po.get(t);e&&(e.flags|=8,Po.delete(t))}na().requestIdleCallback;na().cancelIdleCallback;const Qr=t=>!!t.type.__asyncLoader,Xd=t=>t.type.__isKeepAlive;function Sy(t,e){Yd(t,"a",e)}function Ry(t,e){Yd(t,"da",e)}function Yd(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xd(s.parent.vnode)&&Py(r,e,n,s),s=s.parent}}function Py(t,e,n,r){const s=aa(e,t,r,!0);ep(()=>{Zl(r[e],s)},n)}function aa(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{vn();const l=Ti(n),c=nn(e,n,t,a);return l(),En(),c});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=gt)=>{(!li||t==="sp")&&aa(t,(...r)=>e(...r),n)},Zd=Rn("bm"),Cy=Rn("m"),Vy=Rn("bu"),ky=Rn("u"),Dy=Rn("bum"),ep=Rn("um"),Ny=Rn("sp"),Oy=Rn("rtg"),xy=Rn("rtc");function My(t,e=gt){aa("ec",t,e)}const Ly=Symbol.for("v-ndc");function Mn(t,e,n,r){let s;const i=n,a=ie(t);if(a||He(t)){const l=a&&Jt(t);let c=!1,h=!1;l&&(c=!It(t),h=Tn(t),t=ra(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?ts(Ft(t[d])):Ft(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function co(t,e,n={},r,s){if(ct.ce||ct.parent&&Qr(ct.parent)&&ct.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),de(),Ln(Fe,null,[wt("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),de();const a=i&&tp(i(n)),l=n.key||a&&a.key,c=Ln(Fe,{key:(l&&!At(l)?l:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function tp(t){return t.some(e=>dc(e)?!(e.type===In||e.type===Fe&&!tp(e.children)):!0)?t:null}const yl=t=>t?Ip(t)?ua(t):yl(t.parent):null,Gs=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yl(t.parent),$root:t=>yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>rp(t),$forceUpdate:t=>t.f||(t.f=()=>{cc(t.update)}),$nextTick:t=>t.n||(t.n=qd.bind(t.proxy)),$watch:t=>Iy.bind(t)}),Ja=(t,e)=>t!==Pe&&!t.__isScriptSetup&&we(t,e),Fy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ja(r,e))return a[e]=1,r[e];if(s!==Pe&&we(s,e))return a[e]=2,s[e];if(we(i,e))return a[e]=3,i[e];if(n!==Pe&&we(n,e))return a[e]=4,n[e];vl&&(a[e]=0)}}const h=Gs[e];let d,p;if(h)return e==="$attrs"&&at(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Pe&&we(n,e))return a[e]=4,n[e];if(p=c.config.globalProperties,we(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ja(s,e)?(s[e]=n,!0):r!==Pe&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(n[l]||t!==Pe&&l[0]!=="$"&&we(t,l)||Ja(e,l)||we(i,l)||we(r,l)||we(Gs,l)||we(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ah(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vl=!0;function Uy(t){const e=rp(t),n=t.proxy,r=t.ctx;vl=!1,e.beforeCreate&&lh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:V,activated:k,deactivated:O,beforeDestroy:J,beforeUnmount:H,destroyed:Q,unmounted:B,render:q,renderTracked:Z,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:A,components:S,directives:E,filters:ht}=e;if(h&&By(h,r,null),a)for(const he in a){const ye=a[he];ue(ye)&&(r[he]=ye.bind(n))}if(s){const he=s.call(n,n);Se(he)&&(t.data=sa(he))}if(vl=!0,i)for(const he in i){const ye=i[he],Ct=ue(ye)?ye.bind(n,n):ue(ye.get)?ye.get.bind(n,n):Qt,nr=!ue(ye)&&ue(ye.set)?ye.set.bind(n):Qt,on=Ut({get:Ct,set:nr});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>on.value,set:ze=>on.value=ze})}if(l)for(const he in l)np(l[he],r,n,he);if(c){const he=ue(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ye=>{yy(ye,he[ye])})}d&&lh(d,t,"c");function Ne(he,ye){ie(ye)?ye.forEach(Ct=>he(Ct.bind(n))):ye&&he(ye.bind(n))}if(Ne(Zd,p),Ne(Cy,_),Ne(Vy,b),Ne(ky,V),Ne(Sy,k),Ne(Ry,O),Ne(My,m),Ne(xy,Z),Ne(Oy,I),Ne(Dy,H),Ne(ep,B),Ne(Ny,y),ie(T))if(T.length){const he=t.exposed||(t.exposed={});T.forEach(ye=>{Object.defineProperty(he,ye,{get:()=>n[ye],set:Ct=>n[ye]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});q&&t.render===Qt&&(t.render=q),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),E&&(t.directives=E),y&&Jd(t)}function By(t,e,n=Qt){ie(t)&&(t=El(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Ws(s.from||r,s.default,!0):i=Ws(s.from||r):i=Ws(s),be(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function lh(t,e,n){nn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,r){let s=r.includes(".")?Qd(n,r):()=>n[r];if(He(t)){const i=e[t];ue(i)&&lo(s,i)}else if(ue(t))lo(s,t.bind(n));else if(Se(t))if(ie(t))t.forEach(i=>np(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&lo(s,i,t)}}function rp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Co(c,h,a,!0)),Co(c,e,a)),Se(e)&&i.set(e,c),c}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(a=>Co(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=jy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const jy={data:ch,props:uh,emits:uh,methods:Fs,computed:Fs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Fs,directives:Fs,watch:qy,provide:ch,inject:$y};function ch(t,e){return e?t?function(){return Ze(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function $y(t,e){return Fs(El(t),El(e))}function El(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?Ze(Object.create(null),t,e):e}function uh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:Ze(Object.create(null),ah(t),ah(e??{})):e}function qy(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function sp(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hy=0;function zy(t,e){return function(r,s=null){ue(r)||(r=Ze({},r)),s!=null&&!Se(s)&&(s=null);const i=sp(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Hy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Iv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ue(d.install)?(a.add(d),d.install(h,...p)):ue(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!c){const b=h._ceVNode||wt(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(b,d,_),c=!0,h._container=d,d.__vue_app__=h,ua(b.component)}},onUnmount(d){l.push(d)},unmount(){c&&(nn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=yr;yr=h;try{return d()}finally{yr=p}}};return h}}let yr=null;const Wy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xt(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function Ky(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),a=i&&Wy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>He(d)?d.trim():d)),a.number&&(s=n.map(ec)));let l,c=r[l=za(e)]||r[l=za(xt(e))];!c&&i&&(c=r[l=za(Rr(e))]),c&&nn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,nn(h,t,6,s)}}const Gy=new WeakMap;function ip(t,e,n=!1){const r=n?Gy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const c=h=>{const d=ip(h,e,!0);d&&(l=!0,Ze(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>a[c]=null):Ze(a,i),Se(t)&&r.set(t,a),a)}function la(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Rr(e))||we(t,e))}function hh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:V,inheritAttrs:k}=t,O=Ro(t);let J,H;try{if(n.shapeFlag&4){const B=s||r,q=B;J=Kt(h.call(q,B,d,p,b,_,V)),H=l}else{const B=e;J=Kt(B.length>1?B(p,{attrs:l,slots:a,emit:c}):B(p,null)),H=e.props?l:Qy(l)}}catch(B){Qs.length=0,oa(B,t,1),J=wt(In)}let Q=J;if(H&&k!==!1){const B=Object.keys(H),{shapeFlag:q}=Q;B.length&&q&7&&(i&&B.some(Zo)&&(H=Jy(H,i)),Q=ns(Q,H,!1,!0))}return n.dirs&&(Q=ns(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&uc(Q,n.transition),J=Q,Ro(O),J}const Qy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},Jy=(t,e)=>{const n={};for(const r in t)(!Zo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fh(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(op(a,r,_)&&!la(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?fh(r,a,h):!0:!!a;return!1}function fh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(op(e,t,i)&&!la(n,i))return!0}return!1}function op(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!ri(r,s):r!==s}function Yy({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const ap={},lp=()=>Object.create(ap),cp=t=>Object.getPrototypeOf(t)===ap;function Zy(t,e,n,r=!1){const s={},i=lp();t.propsDefaults=Object.create(null),up(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ry(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ev(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=_e(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(la(t.emitsOptions,_))continue;const b=e[_];if(c)if(we(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const V=xt(_);s[V]=Tl(c,l,V,b,t,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{up(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!we(e,p)&&((d=Rr(p))===p||!we(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Tl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!we(e,p))&&(delete i[p],h=!0)}h&&dn(t.attrs,"set","")}function up(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(qs(c))continue;const h=e[c];let d;s&&we(s,d=xt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:la(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=_e(n),h=l||Pe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Tl(s,c,p,h[p],t,!we(h,p))}}return a}function Tl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=we(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ti(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}const tv=new WeakMap;function hp(t,e,n=!1){const r=n?tv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ue(t)){const d=p=>{c=!0;const[_,b]=hp(p,e,!0);Ze(a,_),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Se(t)&&r.set(t,Wr),Wr;if(ie(i))for(let d=0;d<i.length;d++){const p=xt(i[d]);dh(p)&&(a[p]=Pe)}else if(i)for(const d in i){const p=xt(d);if(dh(p)){const _=i[d],b=a[p]=ie(_)||ue(_)?{type:_}:Ze({},_),V=b.type;let k=!1,O=!0;if(ie(V))for(let J=0;J<V.length;++J){const H=V[J],Q=ue(H)&&H.name;if(Q==="Boolean"){k=!0;break}else Q==="String"&&(O=!1)}else k=ue(V)&&V.name==="Boolean";b[0]=k,b[1]=O,(k||we(b,"default"))&&l.push(p)}}const h=[a,l];return Se(t)&&r.set(t,h),h}function dh(t){return t[0]!=="$"&&!qs(t)}const hc=t=>t==="_"||t==="_ctx"||t==="$stable",fc=t=>ie(t)?t.map(Kt):[Kt(t)],nv=(t,e,n)=>{if(e._n)return e;const r=Ls((...s)=>fc(e(...s)),n);return r._c=!1,r},fp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hc(s))continue;const i=t[s];if(ue(i))e[s]=nv(s,i,r);else if(i!=null){const a=fc(i);e[s]=()=>a}}},dp=(t,e)=>{const n=fc(e);t.slots.default=()=>n},pp=(t,e,n)=>{for(const r in e)(n||!hc(r))&&(t[r]=e[r])},rv=(t,e,n)=>{const r=t.slots=lp();if(t.vnode.shapeFlag&32){const s=e._;s?(pp(r,e,n),n&&vd(r,"_",s,!0)):fp(e,r)}else e&&dp(t,e)},sv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Pe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:pp(s,e,n):(i=!e.$stable,fp(e,s)),a=e}else e&&(dp(t,e),a={default:1});if(i)for(const l in s)!hc(l)&&a[l]==null&&delete s[l]},_t=cv;function iv(t){return ov(t)}function ov(t,e){const n=na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Qt,insertStaticContent:V}=t,k=(v,w,C,F=null,x=null,L=null,z=void 0,$=null,U=!!w.dynamicChildren)=>{if(v===w)return;v&&!xs(v,w)&&(F=an(v),ze(v,x,L,!0),v=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:W}=w;switch(M){case ca:O(v,w,C,F);break;case In:J(v,w,C,F);break;case Ya:v==null&&H(w,C,F,z);break;case Fe:S(v,w,C,F,x,L,z,$,U);break;default:W&1?q(v,w,C,F,x,L,z,$,U):W&6?E(v,w,C,F,x,L,z,$,U):(W&64||W&128)&&M.process(v,w,C,F,x,L,z,$,U,$t)}ee!=null&&x?Ks(ee,v&&v.ref,L,w||v,!w):ee==null&&v&&v.ref!=null&&Ks(v.ref,null,L,v,!0)},O=(v,w,C,F)=>{if(v==null)r(w.el=l(w.children),C,F);else{const x=w.el=v.el;w.children!==v.children&&h(x,w.children)}},J=(v,w,C,F)=>{v==null?r(w.el=c(w.children||""),C,F):w.el=v.el},H=(v,w,C,F)=>{[v.el,v.anchor]=V(v.children,w,C,F,v.el,v.anchor)},Q=({el:v,anchor:w},C,F)=>{let x;for(;v&&v!==w;)x=_(v),r(v,C,F),v=x;r(w,C,F)},B=({el:v,anchor:w})=>{let C;for(;v&&v!==w;)C=_(v),s(v),v=C;s(w)},q=(v,w,C,F,x,L,z,$,U)=>{if(w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),v==null)Z(w,C,F,x,L,z,$,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,w,x,L,z,$,U)}finally{M&&M._endPatch()}}},Z=(v,w,C,F,x,L,z,$)=>{let U,M;const{props:ee,shapeFlag:W,transition:X,dirs:te}=v;if(U=v.el=a(v.type,L,ee&&ee.is,ee),W&8?d(U,v.children):W&16&&m(v.children,U,null,F,x,Xa(v,L),z,$),te&&cr(v,null,F,"created"),I(U,v,v.scopeId,z,F),ee){for(const ce in ee)ce!=="value"&&!qs(ce)&&i(U,ce,null,ee[ce],L,F);"value"in ee&&i(U,"value",null,ee.value,L),(M=ee.onVnodeBeforeMount)&&qt(M,F,v)}te&&cr(v,null,F,"beforeMount");const ne=av(x,X);ne&&X.beforeEnter(U),r(U,w,C),((M=ee&&ee.onVnodeMounted)||ne||te)&&_t(()=>{try{M&&qt(M,F,v),ne&&X.enter(U),te&&cr(v,null,F,"mounted")}finally{}},x)},I=(v,w,C,F,x)=>{if(C&&b(v,C),F)for(let L=0;L<F.length;L++)b(v,F[L]);if(x){let L=x.subTree;if(w===L||yp(L.type)&&(L.ssContent===w||L.ssFallback===w)){const z=x.vnode;I(v,z,z.scopeId,z.slotScopeIds,x.parent)}}},m=(v,w,C,F,x,L,z,$,U=0)=>{for(let M=U;M<v.length;M++){const ee=v[M]=$?fn(v[M]):Kt(v[M]);k(null,ee,w,C,F,x,L,z,$)}},y=(v,w,C,F,x,L,z)=>{const $=w.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:ee}=w;U|=v.patchFlag&16;const W=v.props||Pe,X=w.props||Pe;let te;if(C&&ur(C,!1),(te=X.onVnodeBeforeUpdate)&&qt(te,C,w,v),ee&&cr(w,v,C,"beforeUpdate"),C&&ur(C,!0),(W.innerHTML&&X.innerHTML==null||W.textContent&&X.textContent==null)&&d($,""),M?T(v.dynamicChildren,M,$,C,F,Xa(w,x),L):z||ye(v,w,$,null,C,F,Xa(w,x),L,!1),U>0){if(U&16)A($,W,X,C,x);else if(U&2&&W.class!==X.class&&i($,"class",null,X.class,x),U&4&&i($,"style",W.style,X.style,x),U&8){const ne=w.dynamicProps;for(let ce=0;ce<ne.length;ce++){const Te=ne[ce],Oe=W[Te],Ue=X[Te];(Ue!==Oe||Te==="value")&&i($,Te,Oe,Ue,x,C)}}U&1&&v.children!==w.children&&d($,w.children)}else!z&&M==null&&A($,W,X,C,x);((te=X.onVnodeUpdated)||ee)&&_t(()=>{te&&qt(te,C,w,v),ee&&cr(w,v,C,"updated")},F)},T=(v,w,C,F,x,L,z)=>{for(let $=0;$<w.length;$++){const U=v[$],M=w[$],ee=U.el&&(U.type===Fe||!xs(U,M)||U.shapeFlag&198)?p(U.el):C;k(U,M,ee,null,F,x,L,z,!0)}},A=(v,w,C,F,x)=>{if(w!==C){if(w!==Pe)for(const L in w)!qs(L)&&!(L in C)&&i(v,L,w[L],null,x,F);for(const L in C){if(qs(L))continue;const z=C[L],$=w[L];z!==$&&L!=="value"&&i(v,L,$,z,x,F)}"value"in C&&i(v,"value",w.value,C.value,x)}},S=(v,w,C,F,x,L,z,$,U)=>{const M=w.el=v?v.el:l(""),ee=w.anchor=v?v.anchor:l("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:te}=w;te&&($=$?$.concat(te):te),v==null?(r(M,C,F),r(ee,C,F),m(w.children||[],C,ee,x,L,z,$,U)):W>0&&W&64&&X&&v.dynamicChildren&&v.dynamicChildren.length===X.length?(T(v.dynamicChildren,X,C,x,L,z,$),(w.key!=null||x&&w===x.subTree)&&gp(v,w,!0)):ye(v,w,C,ee,x,L,z,$,U)},E=(v,w,C,F,x,L,z,$,U)=>{w.slotScopeIds=$,v==null?w.shapeFlag&512?x.ctx.activate(w,C,F,z,U):ht(w,C,F,x,L,z,U):jt(v,w,U)},ht=(v,w,C,F,x,L,z)=>{const $=v.component=mv(v,F,x);if(Xd(v)&&($.ctx.renderer=$t),_v($,!1,z),$.asyncDep){if(x&&x.registerDep($,Ne,z),!v.el){const U=$.subTree=wt(In);J(null,U,w,C),v.placeholder=U.el}}else Ne($,v,w,C,x,L,z)},jt=(v,w,C)=>{const F=w.component=v.component;if(Xy(v,w,C))if(F.asyncDep&&!F.asyncResolved){he(F,w,C);return}else F.next=w,F.update();else w.el=v.el,F.vnode=w},Ne=(v,w,C,F,x,L,z)=>{const $=()=>{if(v.isMounted){let{next:W,bu:X,u:te,parent:ne,vnode:ce}=v;{const tt=mp(v);if(tt){W&&(W.el=ce.el,he(v,W,z)),tt.asyncDep.then(()=>{_t(()=>{v.isUnmounted||M()},x)});return}}let Te=W,Oe;ur(v,!1),W?(W.el=ce.el,he(v,W,z)):W=ce,X&&ao(X),(Oe=W.props&&W.props.onVnodeBeforeUpdate)&&qt(Oe,ne,W,ce),ur(v,!0);const Ue=hh(v),bt=v.subTree;v.subTree=Ue,k(bt,Ue,p(bt.el),an(bt),v,x,L),W.el=Ue.el,Te===null&&Yy(v,Ue.el),te&&_t(te,x),(Oe=W.props&&W.props.onVnodeUpdated)&&_t(()=>qt(Oe,ne,W,ce),x)}else{let W;const{el:X,props:te}=w,{bm:ne,m:ce,parent:Te,root:Oe,type:Ue}=v,bt=Qr(w);ur(v,!1),ne&&ao(ne),!bt&&(W=te&&te.onVnodeBeforeMount)&&qt(W,Te,w),ur(v,!0);{Oe.ce&&Oe.ce._hasShadowRoot()&&Oe.ce._injectChildStyle(Ue,v.parent?v.parent.type:void 0);const tt=v.subTree=hh(v);k(null,tt,C,F,v,x,L),w.el=tt.el}if(ce&&_t(ce,x),!bt&&(W=te&&te.onVnodeMounted)){const tt=w;_t(()=>qt(W,Te,tt),x)}(w.shapeFlag&256||Te&&Qr(Te.vnode)&&Te.vnode.shapeFlag&256)&&v.a&&_t(v.a,x),v.isMounted=!0,w=C=F=null}};v.scope.on();const U=v.effect=new Sd($);v.scope.off();const M=v.update=U.run.bind(U),ee=v.job=U.runIfDirty.bind(U);ee.i=v,ee.id=v.uid,U.scheduler=()=>cc(ee),ur(v,!0),M()},he=(v,w,C)=>{w.component=v;const F=v.vnode.props;v.vnode=w,v.next=null,ev(v,w.props,F,C),sv(v,w.children,C),vn(),sh(v),En()},ye=(v,w,C,F,x,L,z,$,U=!1)=>{const M=v&&v.children,ee=v?v.shapeFlag:0,W=w.children,{patchFlag:X,shapeFlag:te}=w;if(X>0){if(X&128){nr(M,W,C,F,x,L,z,$,U);return}else if(X&256){Ct(M,W,C,F,x,L,z,$,U);return}}te&8?(ee&16&&sr(M,x,L),W!==M&&d(C,W)):ee&16?te&16?nr(M,W,C,F,x,L,z,$,U):sr(M,x,L,!0):(ee&8&&d(C,""),te&16&&m(W,C,F,x,L,z,$,U))},Ct=(v,w,C,F,x,L,z,$,U)=>{v=v||Wr,w=w||Wr;const M=v.length,ee=w.length,W=Math.min(M,ee);let X;for(X=0;X<W;X++){const te=w[X]=U?fn(w[X]):Kt(w[X]);k(v[X],te,C,null,x,L,z,$,U)}M>ee?sr(v,x,L,!0,!1,W):m(w,C,F,x,L,z,$,U,W)},nr=(v,w,C,F,x,L,z,$,U)=>{let M=0;const ee=w.length;let W=v.length-1,X=ee-1;for(;M<=W&&M<=X;){const te=v[M],ne=w[M]=U?fn(w[M]):Kt(w[M]);if(xs(te,ne))k(te,ne,C,null,x,L,z,$,U);else break;M++}for(;M<=W&&M<=X;){const te=v[W],ne=w[X]=U?fn(w[X]):Kt(w[X]);if(xs(te,ne))k(te,ne,C,null,x,L,z,$,U);else break;W--,X--}if(M>W){if(M<=X){const te=X+1,ne=te<ee?w[te].el:F;for(;M<=X;)k(null,w[M]=U?fn(w[M]):Kt(w[M]),C,ne,x,L,z,$,U),M++}}else if(M>X)for(;M<=W;)ze(v[M],x,L,!0),M++;else{const te=M,ne=M,ce=new Map;for(M=ne;M<=X;M++){const Qe=w[M]=U?fn(w[M]):Kt(w[M]);Qe.key!=null&&ce.set(Qe.key,M)}let Te,Oe=0;const Ue=X-ne+1;let bt=!1,tt=0;const Cn=new Array(Ue);for(M=0;M<Ue;M++)Cn[M]=0;for(M=te;M<=W;M++){const Qe=v[M];if(Oe>=Ue){ze(Qe,x,L,!0);continue}let St;if(Qe.key!=null)St=ce.get(Qe.key);else for(Te=ne;Te<=X;Te++)if(Cn[Te-ne]===0&&xs(Qe,w[Te])){St=Te;break}St===void 0?ze(Qe,x,L,!0):(Cn[St-ne]=M+1,St>=tt?tt=St:bt=!0,k(Qe,w[St],C,null,x,L,z,$,U),Oe++)}const Es=bt?lv(Cn):Wr;for(Te=Es.length-1,M=Ue-1;M>=0;M--){const Qe=ne+M,St=w[Qe],Oi=w[Qe+1],Or=Qe+1<ee?Oi.el||_p(Oi):F;Cn[M]===0?k(null,St,C,Or,x,L,z,$,U):bt&&(Te<0||M!==Es[Te]?on(St,C,Or,2):Te--)}}},on=(v,w,C,F,x=null)=>{const{el:L,type:z,transition:$,children:U,shapeFlag:M}=v;if(M&6){on(v.component.subTree,w,C,F);return}if(M&128){v.suspense.move(w,C,F);return}if(M&64){z.move(v,w,C,$t);return}if(z===Fe){r(L,w,C);for(let W=0;W<U.length;W++)on(U[W],w,C,F);r(v.anchor,w,C);return}if(z===Ya){Q(v,w,C);return}if(F!==2&&M&1&&$)if(F===0)$.beforeEnter(L),r(L,w,C),_t(()=>$.enter(L),x);else{const{leave:W,delayLeave:X,afterLeave:te}=$,ne=()=>{v.ctx.isUnmounted?s(L):r(L,w,C)},ce=()=>{L._isLeaving&&L[by](!0),W(L,()=>{ne(),te&&te()})};X?X(L,ne,ce):ce()}else r(L,w,C)},ze=(v,w,C,F=!1,x=!1)=>{const{type:L,props:z,ref:$,children:U,dynamicChildren:M,shapeFlag:ee,patchFlag:W,dirs:X,cacheIndex:te,memo:ne}=v;if(W===-2&&(x=!1),$!=null&&(vn(),Ks($,null,C,v,!0),En()),te!=null&&(w.renderCache[te]=void 0),ee&256){w.ctx.deactivate(v);return}const ce=ee&1&&X,Te=!Qr(v);let Oe;if(Te&&(Oe=z&&z.onVnodeBeforeUnmount)&&qt(Oe,w,v),ee&6)rr(v.component,C,F);else{if(ee&128){v.suspense.unmount(C,F);return}ce&&cr(v,null,w,"beforeUnmount"),ee&64?v.type.remove(v,w,C,$t,F):M&&!M.hasOnce&&(L!==Fe||W>0&&W&64)?sr(M,w,C,!1,!0):(L===Fe&&W&384||!x&&ee&16)&&sr(U,w,C),F&&We(v)}const Ue=ne!=null&&te==null;(Te&&(Oe=z&&z.onVnodeUnmounted)||ce||Ue)&&_t(()=>{Oe&&qt(Oe,w,v),ce&&cr(v,null,w,"unmounted"),Ue&&(v.el=null)},C)},We=v=>{const{type:w,el:C,anchor:F,transition:x}=v;if(w===Fe){Va(C,F);return}if(w===Ya){B(v);return}const L=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:$}=x,U=()=>z(C,L);$?$(v.el,L,U):U()}else L()},Va=(v,w)=>{let C;for(;v!==w;)C=_(v),s(v),v=C;s(w)},rr=(v,w,C)=>{const{bum:F,scope:x,job:L,subTree:z,um:$,m:U,a:M}=v;ph(U),ph(M),F&&ao(F),x.stop(),L&&(L.flags|=8,ze(z,v,w,C)),$&&_t($,w),_t(()=>{v.isUnmounted=!0},w)},sr=(v,w,C,F=!1,x=!1,L=0)=>{for(let z=L;z<v.length;z++)ze(v[z],w,C,F,x)},an=v=>{if(v.shapeFlag&6)return an(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=_(v.anchor||v.el),C=w&&w[wy];return C?_(C):w};let ys=!1;const Ni=(v,w,C)=>{let F;v==null?w._vnode&&(ze(w._vnode,null,null,!0),F=w._vnode.component):k(w._vnode||null,v,w,null,null,null,C),w._vnode=v,ys||(ys=!0,sh(F),zd(),ys=!1)},$t={p:k,um:ze,m:on,r:We,mt:ht,mc:m,pc:ye,pbc:T,n:an,o:t};return{render:Ni,hydrate:void 0,createApp:zy(Ni)}}function Xa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function av(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gp(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=fn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&gp(a,l)),l.type===ca&&(l.patchFlag===-1&&(l=s[i]=fn(l)),l.el=a.el),l.type===In&&!l.el&&(l.el=a.el)}}function lv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}function ph(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function _p(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?_p(e.subTree):null}const yp=t=>t.__isSuspense;function cv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):_y(t)}const Fe=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),Ya=Symbol.for("v-stc"),Qs=[];let Tt=null;function de(t=!1){Qs.push(Tt=t?null:[])}function uv(){Qs.pop(),Tt=Qs[Qs.length-1]||null}let ai=1;function gh(t,e=!1){ai+=t,t<0&&Tt&&e&&(Tt.hasOnce=!0)}function vp(t){return t.dynamicChildren=ai>0?Tt||Wr:null,uv(),ai>0&&Tt&&Tt.push(t),t}function Ie(t,e,n,r,s,i){return vp(oe(t,e,n,r,s,i,!0))}function Ln(t,e,n,r,s){return vp(wt(t,e,n,r,s,!0))}function dc(t){return t?t.__v_isVNode===!0:!1}function xs(t,e){return t.type===e.type&&t.key===e.key}const Ep=({key:t})=>t??null,uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||be(t)||ue(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ep(e),ref:e&&uo(e),scopeId:Kd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return l?(pc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),ai>0&&!a&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const wt=hv;function hv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ly)&&(t=In),dc(t)){const l=ns(t,e,!0);return n&&pc(l,n),ai>0&&!i&&Tt&&(l.shapeFlag&6?Tt[Tt.indexOf(t)]=l:Tt.push(l)),l.patchFlag=-2,l}if(Tv(t)&&(t=t.__vccOpts),e){e=fv(e);let{class:l,style:c}=e;l&&!He(l)&&(e.class=tc(l)),Se(c)&&(ia(c)&&!ie(c)&&(c=Ze({},c)),e.style=us(c))}const a=He(t)?1:yp(t)?128:Ay(t)?64:Se(t)?4:ue(t)?2:0;return oe(t,e,n,r,s,a,i,!0)}function fv(t){return t?ia(t)||cp(t)?Ze({},t):t:null}function ns(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?dv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Ep(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&uc(d,c.clone(d)),d}function kt(t=" ",e=0){return wt(ca,null,t,e)}function dr(t="",e=!1){return e?(de(),Ln(In,null,t)):wt(In,null,t)}function Kt(t){return t==null||typeof t=="boolean"?wt(In):ie(t)?wt(Fe,null,t.slice()):dc(t)?fn(t):wt(ca,null,String(t))}function fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function pc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cp(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function dv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tc([e.class,r.class]));else if(s==="style")e.style=us([e.style,r.style]);else if(Yo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Zo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){nn(t,e,7,[n,r])}const pv=sp();let gv=0;function mv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||pv,i={uid:gv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(r,s),emitsOptions:ip(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ky.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const Tp=()=>gt||ct;let Vo,Il;{const t=na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Vo=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Il=e("__VUE_SSR_SETTERS__",n=>li=n)}const Ti=t=>{const e=gt;return Vo(t),t.scope.on(),()=>{t.scope.off(),Vo(e)}},mh=()=>{gt&&gt.scope.off(),Vo(null)};function Ip(t){return t.vnode.shapeFlag&4}let li=!1;function _v(t,e=!1,n=!1){e&&Il(e);const{props:r,children:s}=t.vnode,i=Ip(t);Zy(t,r,i,e),rv(t,s,n||e);const a=i?yv(t,e):void 0;return e&&Il(!1),a}function yv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Fy);const{setup:r}=n;if(r){vn();const s=t.setupContext=r.length>1?Ev(t):null,i=Ti(t),a=vi(r,t,0,[t.props,s]),l=gd(a);if(En(),i(),(l||t.sp)&&!Qr(t)&&Jd(t),l){if(a.then(mh,mh),e)return a.then(c=>{_h(t,c)}).catch(c=>{oa(c,t,0)});t.asyncDep=a}else _h(t,a)}else wp(t)}function _h(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Bd(e)),wp(t)}function wp(t,e,n){const r=t.type;t.render||(t.render=r.render||Qt);{const s=Ti(t);vn();try{Uy(t)}finally{En(),s()}}}const vv={get(t,e){return at(t,"get",""),t[e]}};function Ev(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vv),slots:t.slots,emit:t.emit,expose:e}}function ua(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bd(lc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function Tv(t){return ue(t)&&"__vccOpts"in t}const Ut=(t,e)=>fy(t,e,li),Iv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wl;const yh=typeof window<"u"&&window.trustedTypes;if(yh)try{wl=yh.createPolicy("vue",{createHTML:t=>t})}catch{}const Ap=wl?t=>wl.createHTML(t):t=>t,wv="http://www.w3.org/2000/svg",Av="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,vh=hn&&hn.createElement("template"),bv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?hn.createElementNS(wv,t):e==="mathml"?hn.createElementNS(Av,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vh.innerHTML=Ap(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=vh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Sv=Symbol("_vtc");function Rv(t,e,n){const r=t[Sv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Eh=Symbol("_vod"),Pv=Symbol("_vsh"),Cv=Symbol(""),Vv=/(?:^|;)\s*display\s*:/;function kv(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ho(r,l,"")}else for(const a in e)n[a]==null&&ho(r,a,"");for(const a in n)a==="display"&&(i=!0),ho(r,a,n[a])}else if(s){if(e!==n){const a=r[Cv];a&&(n+=";"+a),r.cssText=n,i=Vv.test(n)}}else e&&t.removeAttribute("style");Eh in t&&(t[Eh]=i?r.display:"",t[Pv]&&(r.display="none"))}const Th=/\s*!important$/;function ho(t,e,n){if(ie(n))n.forEach(r=>ho(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Dv(t,e);Th.test(n)?t.setProperty(Rr(r),n.replace(Th,""),"important"):t[r]=n}}const Ih=["Webkit","Moz","ms"],Za={};function Dv(t,e){const n=Za[e];if(n)return n;let r=xt(e);if(r!=="filter"&&r in t)return Za[e]=r;r=yd(r);for(let s=0;s<Ih.length;s++){const i=Ih[s]+r;if(i in t)return Za[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function Ah(t,e,n,r,s,i=x_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n):n==null||i&&!Ed(n)?t.removeAttribute(e):t.setAttribute(e,i?"":At(n)?String(n):n)}function bh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ap(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ed(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function pr(t,e,n,r){t.addEventListener(e,n,r)}function Nv(t,e,n,r){t.removeEventListener(e,n,r)}const Sh=Symbol("_vei");function Ov(t,e,n,r,s=null){const i=t[Sh]||(t[Sh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=xv(e);if(r){const h=i[e]=Fv(r,s);pr(t,l,h,c)}else a&&(Nv(t,l,a,c),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function xv(t){let e;if(Rh.test(t)){e={};let r;for(;r=t.match(Rh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let el=0;const Mv=Promise.resolve(),Lv=()=>el||(Mv.then(()=>el=0),el=Date.now());function Fv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(Uv(r,n.value),e,5,[r])};return n.value=t,n.attached=Lv(),n}function Uv(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ph=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Rv(t,r,a):e==="style"?kv(t,n,r):Yo(e)?Zo(e)||Ov(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jv(t,e,r,a))?(bh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ah(t,e,r,a,i,e!=="value")):t._isVueCE&&($v(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!He(r)))?bh(t,xt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ah(t,e,r,a))};function jv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ph(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ph(e)&&He(n)?!1:e in t}function $v(t,e){const n=t._def.props;if(!n)return!1;const r=xt(e);return Array.isArray(n)?n.some(s=>xt(s)===r):Object.keys(n).some(s=>xt(s)===r)}const ko=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>ao(e,n):e};function qv(t){t.target.composing=!0}function Ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jr=Symbol("_assign");function Vh(t,e,n){return e&&(t=t.trim()),n&&(t=ec(t)),t}const Hv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Jr]=ko(s);const i=r||s.props&&s.props.type==="number";pr(t,e?"change":"input",a=>{a.target.composing||t[Jr](Vh(t.value,n,i))}),(n||i)&&pr(t,"change",()=>{t.value=Vh(t.value,n,i)}),e||(pr(t,"compositionstart",qv),pr(t,"compositionend",Ch),pr(t,"change",Ch))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Jr]=ko(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ec(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c)}},Zi={created(t,{value:e},n){t.checked=ri(e,n.props.value),t[Jr]=ko(n),pr(t,"change",()=>{t[Jr](zv(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Jr]=ko(r),e!==n&&(t.checked=ri(e,r.props.value))}};function zv(t){return"_value"in t?t._value:t.value}const Wv=["ctrl","shift","alt","meta"],Kv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Wv.some(n=>t[`${n}Key`]&&!e.includes(n))},Gv=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let a=0;a<e.length;a++){const l=Kv[e[a]];if(l&&l(s,e))return}return t(s,...i)}))},Qv=Ze({patchProp:Bv},bv);let kh;function Jv(){return kh||(kh=iv(Qv))}const Xv=((...t)=>{const e=Jv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Yv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Yv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zv(t){return He(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bp;const ha=t=>bp=t,Sp=Symbol();function Al(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Js||(Js={}));function eE(){const t=Ad(!0),e=t.run(()=>Ao({}));let n=[],r=[];const s=lc({install(i){ha(s),s._a=i,i.provide(Sp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Rp=()=>{};function Dh(t,e,n,r=Rp){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&bd()&&L_(s),s}function Br(t,...e){t.forEach(n=>{n(...e)})}const tE=t=>t(),Nh=Symbol(),tl=Symbol();function bl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Al(s)&&Al(r)&&t.hasOwnProperty(n)&&!be(r)&&!Jt(r)?t[n]=bl(s,r):t[n]=r}return t}const nE=Symbol();function rE(t){return!Al(t)||!Object.prototype.hasOwnProperty.call(t,nE)}const{assign:On}=Object;function sE(t){return!!(be(t)&&t.effect)}function iE(t,e,n,r){const{state:s,actions:i,getters:a}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=ay(n.state.value[t]);return On(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=lc(Ut(()=>{ha(n);const b=n._s.get(t);return a[_].call(b,b)})),p),{}))}return c=Pp(t,h,e,n,r,!0),c}function Pp(t,e,n={},r,s,i){let a;const l=On({actions:{}},n),c={deep:!0};let h,d,p=new Set,_=new Set,b;const V=r.state.value[t];!i&&!V&&(r.state.value[t]={});let k;function O(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[t]),y={type:Js.patchFunction,storeId:t,events:b}):(bl(r.state.value[t],m),y={type:Js.patchObject,payload:m,storeId:t,events:b});const T=k=Symbol();qd().then(()=>{k===T&&(h=!0)}),d=!0,Br(p,y,r.state.value[t])}const J=i?function(){const{state:y}=n,T=y?y():{};this.$patch(A=>{On(A,T)})}:Rp;function H(){a.stop(),p.clear(),_.clear(),r._s.delete(t)}const Q=(m,y="")=>{if(Nh in m)return m[tl]=y,m;const T=function(){ha(r);const A=Array.from(arguments),S=new Set,E=new Set;function ht(he){S.add(he)}function jt(he){E.add(he)}Br(_,{args:A,name:T[tl],store:q,after:ht,onError:jt});let Ne;try{Ne=m.apply(this&&this.$id===t?this:q,A)}catch(he){throw Br(E,he),he}return Ne instanceof Promise?Ne.then(he=>(Br(S,he),he)).catch(he=>(Br(E,he),Promise.reject(he))):(Br(S,Ne),Ne)};return T[Nh]=!0,T[tl]=y,T},B={_p:r,$id:t,$onAction:Dh.bind(null,_),$patch:O,$reset:J,$subscribe(m,y={}){const T=Dh(p,m,y.detached,()=>A()),A=a.run(()=>lo(()=>r.state.value[t],S=>{(y.flush==="sync"?d:h)&&m({storeId:t,type:Js.direct,events:b},S)},On({},c,y)));return T},$dispose:H},q=sa(B);r._s.set(t,q);const I=(r._a&&r._a.runWithContext||tE)(()=>r._e.run(()=>(a=Ad()).run(()=>e({action:Q}))));for(const m in I){const y=I[m];if(be(y)&&!sE(y)||Jt(y))i||(V&&rE(y)&&(be(y)?y.value=V[m]:bl(y,V[m])),r.state.value[t][m]=y);else if(typeof y=="function"){const T=Q(y,m);I[m]=T,l.actions[m]=y}}return On(q,I),On(_e(q),I),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:m=>{O(y=>{On(y,m)})}}),r._p.forEach(m=>{On(q,a.run(()=>m({store:q,app:r._a,pinia:r,options:l})))}),V&&i&&n.hydrate&&n.hydrate(q.$state,V),h=!0,d=!0,q}/*! #__NO_SIDE_EFFECTS__ */function oE(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,l){const c=vy();return a=a||(c?Ws(Sp,null):null),a&&ha(a),a=bp,a._s.has(t)||(s?Pp(t,e,r,a):iE(t,r,a)),a._s.get(t)}return i.$id=t,i}function aE(t){const e=_e(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=Ut({get:()=>t[r],set(i){t[r]=i}}):(be(s)||Jt(s))&&(n[r]=uy(t,r))}return n}function lE(t,e){if(t==null)return;let n=t;for(let r=0;r<e.length;r++){if(n===void 0||n[e[r]]===void 0)return;if(n===null||n[e[r]]===null)return null;n=n[e[r]]}return n}function gc(t,e,n){if(n.length===0)return e;const r=n[0];return n.length>1&&(e=gc(typeof t!="object"||t===null||!Object.prototype.hasOwnProperty.call(t,r)?Number.isInteger(Number(n[1]))?[]:{}:t[r],e,Array.prototype.slice.call(n,1))),Number.isInteger(Number(r))&&Array.isArray(t)?t.slice()[r]:Object.assign({},t,{[r]:e})}function Cp(t,e){if(t==null||e.length===0)return t;if(e.length===1){if(t==null)return t;if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.slice.call(t,0).splice(e[0],1);const n={};for(const r in t)n[r]=t[r];return delete n[e[0]],n}if(t[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(t))return Array.prototype.concat.call([],t);const n={};for(const r in t)n[r]=t[r];return n}return gc(t,Cp(t[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Vp(t,e){return e.map(n=>n.split(".")).map(n=>[n,lE(t,n)]).filter(n=>n[1]!==void 0).reduce((n,r)=>gc(n,r[1],r[0]),{})}function kp(t,e){return e.map(n=>n.split(".")).reduce((n,r)=>Cp(n,r),t)}function Oh(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a,beforeHydrate:l,afterHydrate:c},h,d=!0){try{d&&(l==null||l(h));const p=e.getItem(r);if(p){const _=n.deserialize(p),b=i?Vp(_,i):_,V=a?kp(b,a):b;t.$patch(V)}d&&(c==null||c(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function xh(t,{storage:e,serializer:n,key:r,debug:s,pick:i,omit:a}){try{const l=i?Vp(t,i):t,c=a?kp(l,a):l,h=n.serialize(c);e.setItem(r,h)}catch(l){s&&console.error("[pinia-plugin-persistedstate]",l)}}function cE(t,e){return typeof t=="function"?t(e):typeof t=="string"?t:e}function uE(t,e,n){const{pinia:r,store:s,options:{persist:i=n}}=t;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const l=r._s.get(s.$id.replace("__hot:",""));l&&Promise.resolve().then(()=>l.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:l=!0}={})=>{a.forEach(c=>{Oh(s,c,t,l)})},s.$persist=()=>{a.forEach(l=>{xh(s.$state,l)})},a.forEach(l=>{Oh(s,l,t),s.$subscribe((c,h)=>xh(h,l),{detached:!0})})}function hE(t={}){return function(e){uE(e,n=>{const r=cE(n.key,e.store.$id);return{key:(t.key?t.key:s=>s)(r),debug:n.debug??t.debug??!1,serializer:n.serializer??t.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:n.storage??t.storage??window.localStorage,beforeHydrate:n.beforeHydrate??t.beforeHydrate,afterHydrate:n.afterHydrate??t.afterHydrate,pick:n.pick,omit:n.omit}},t.auto??!1)}}var fE=hE();const Mh=["Hot","Cold"],dE=()=>{};var Lh={};/**
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
 */const Dp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(_=64)),r.push(n[d],n[p],n[_],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new gE;const _=i<<2|l>>4;if(r.push(_),h!==64){const b=l<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mE=function(t){const e=Dp(t);return Np.encodeByteArray(e,!0)},Do=function(t){return mE(t).replace(/\./g,"")},Op=function(t){try{return Np.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yE=()=>_E().__FIREBASE_DEFAULTS__,vE=()=>{if(typeof process>"u"||typeof Lh>"u")return;const t=Lh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Op(t[1]);return e&&JSON.parse(e)},fa=()=>{try{return dE()||yE()||vE()||EE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xp=t=>{var e,n;return(n=(e=fa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},TE=t=>{const e=xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mp=()=>{var t;return(t=fa())===null||t===void 0?void 0:t.config},Lp=t=>{var e;return(e=fa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class IE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Do(JSON.stringify(n)),Do(JSON.stringify(a)),""].join(".")}const Xs={};function AE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xs))Xs[e]?t.emulator.push(e):t.prod.push(e);return t}function bE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fh=!1;function Up(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Xs[t]===e||Xs[t]||Fh)return;Xs[t]=e;function n(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=AE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Fh=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=bE(r),b=n("text"),V=document.getElementById(b)||document.createElement("span"),k=n("learnmore"),O=document.getElementById(k)||document.createElement("a"),J=n("preprendIcon"),H=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Q=_.element;l(Q),d(O,k);const B=h();c(H,J),Q.append(H,V,O,B),document.body.appendChild(Q)}i?(V.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function RE(){var t;const e=(t=fa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kE(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DE(){return!RE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NE(){try{return typeof indexedDB=="object"}catch{return!1}}function OE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const xE="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xE,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ME(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Pn(s,l,r)}}function ME(t,e){return t.replace(LE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LE=/\{\$([^}]+)}/g;function FE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Uh(i)&&Uh(a)){if(!Ir(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
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
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function UE(t,e){const n=new BE(t,e);return n.subscribe.bind(n)}class BE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nl),s.error===void 0&&(s.error=nl),s.complete===void 0&&(s.complete=nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nl(){}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class $E{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HE(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(t){return t===fr?void 0:t}function HE(t){return t.instantiationMode==="EAGER"}/**
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
 */class zE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $E(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const WE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},KE=pe.INFO,GE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},QE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mc{constructor(e){this.name=e,this._logLevel=KE,this._logHandler=QE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const JE=(t,e)=>e.some(n=>t instanceof n);let Bh,jh;function XE(){return Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YE(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,Sl=new WeakMap,jp=new WeakMap,rl=new WeakMap,_c=new WeakMap;function ZE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n($n(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Bp.set(n,t)}).catch(()=>{}),_c.set(e,t),e}function eT(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Sl.set(t,e)}let Rl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tT(t){Rl=t(Rl)}function nT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sl(this),e,...n);return jp.set(r,e.sort?e.sort():[e]),$n(r)}:YE().includes(t)?function(...e){return t.apply(sl(this),e),$n(Bp.get(this))}:function(...e){return $n(t.apply(sl(this),e))}}function rT(t){return typeof t=="function"?nT(t):(t instanceof IDBTransaction&&eT(t),JE(t,XE())?new Proxy(t,Rl):t)}function $n(t){if(t instanceof IDBRequest)return ZE(t);if(rl.has(t))return rl.get(t);const e=rT(t);return e!==t&&(rl.set(t,e),_c.set(e,t)),e}const sl=t=>_c.get(t);function sT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=$n(a);return r&&a.addEventListener("upgradeneeded",c=>{r($n(a.result),c.oldVersion,c.newVersion,$n(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const iT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],il=new Map;function $h(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=oT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||iT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return il.set(e,i),i}tT(t=>({...t,get:(e,n,r)=>$h(e,n)||t.get(e,n,r),has:(e,n)=>!!$h(e,n)||t.has(e,n)}));/**
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
 */class aT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pl="@firebase/app",qh="0.13.2";/**
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
 */const wn=new mc("@firebase/app"),cT="@firebase/app-compat",uT="@firebase/analytics-compat",hT="@firebase/analytics",fT="@firebase/app-check-compat",dT="@firebase/app-check",pT="@firebase/auth",gT="@firebase/auth-compat",mT="@firebase/database",_T="@firebase/data-connect",yT="@firebase/database-compat",vT="@firebase/functions",ET="@firebase/functions-compat",TT="@firebase/installations",IT="@firebase/installations-compat",wT="@firebase/messaging",AT="@firebase/messaging-compat",bT="@firebase/performance",ST="@firebase/performance-compat",RT="@firebase/remote-config",PT="@firebase/remote-config-compat",CT="@firebase/storage",VT="@firebase/storage-compat",kT="@firebase/firestore",DT="@firebase/ai",NT="@firebase/firestore-compat",OT="firebase",xT="11.10.0";/**
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
 */const Cl="[DEFAULT]",MT={[Pl]:"fire-core",[cT]:"fire-core-compat",[hT]:"fire-analytics",[uT]:"fire-analytics-compat",[dT]:"fire-app-check",[fT]:"fire-app-check-compat",[pT]:"fire-auth",[gT]:"fire-auth-compat",[mT]:"fire-rtdb",[_T]:"fire-data-connect",[yT]:"fire-rtdb-compat",[vT]:"fire-fn",[ET]:"fire-fn-compat",[TT]:"fire-iid",[IT]:"fire-iid-compat",[wT]:"fire-fcm",[AT]:"fire-fcm-compat",[bT]:"fire-perf",[ST]:"fire-perf-compat",[RT]:"fire-rc",[PT]:"fire-rc-compat",[CT]:"fire-gcs",[VT]:"fire-gcs-compat",[kT]:"fire-fst",[NT]:"fire-fst-compat",[DT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
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
 */const No=new Map,LT=new Map,Vl=new Map;function Hh(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(Vl.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Vl.set(e,t);for(const n of No.values())Hh(n,t);for(const n of LT.values())Hh(n,t);return!0}function yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const FT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Ii("app","Firebase",FT);/**
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
 */class UT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=xT;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=Mp()),!n)throw qn.create("no-options");const i=No.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const a=new zE(s);for(const c of Vl.values())a.addComponent(c);const l=new UT(n,r,a);return No.set(s,l),l}function qp(t=Cl){const e=No.get(t);if(!e&&t===Cl&&Mp())return $p();if(!e)throw qn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let s=(r=MT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}rs(new wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const BT="firebase-heartbeat-database",jT=1,ci="firebase-heartbeat-store";let ol=null;function Hp(){return ol||(ol=sT(BT,jT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),ol}async function $T(t){try{const n=(await Hp()).transaction(ci),r=await n.objectStore(ci).get(zp(t));return await n.done,r}catch(e){if(e instanceof Pn)wn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function zh(t,e){try{const r=(await Hp()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,zp(t)),await r.done}catch(n){if(n instanceof Pn)wn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function zp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qT=1024,HT=30;class zT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>HT){const a=GT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wh(),{heartbeatsToSend:r,unsentEntries:s}=WT(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wn.warn(n),""}}}function Wh(){return new Date().toISOString().substring(0,10)}function WT(t,e=qT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Kh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NE()?OE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kh(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}function GT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function QT(t){rs(new wr("platform-logger",e=>new aT(e),"PRIVATE")),rs(new wr("heartbeat",e=>new zT(e),"PRIVATE")),Hn(Pl,qh,t),Hn(Pl,qh,"esm2017"),Hn("fire-js","")}QT("");var JT="firebase",XT="11.10.0";/**
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
 */Hn(JT,XT,"app");var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,Wp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],A=I.g[2];var S=I.g[3],E=m+(S^y&(A^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(A^S&(y^A))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(y^A^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(A^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,T=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<m;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)I[y++]=this.g[m]>>>T&255;return I};function i(I,m){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==m||(y[A]=S,T=!1)}this.g=y}var l={};function c(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return O(h(-I));for(var m=[],y=1,T=0;I>=y;T++)m[T]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return O(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=p,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=c(0),_=c(1),b=c(16777216);t=a.prototype,t.m=function(){if(k(this))return-O(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(k(this))return"-"+O(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,T="";;){var A=B(y,m).g;y=J(y,A.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=A,V(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=J(this,I),k(I)?-1:V(I)?0:1};function O(I){for(var m=I.g.length,y=[],T=0;T<m;T++)y[T]=~I.g[T];return new a(y,~I.h).add(_)}t.abs=function(){return k(this)?O(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0,A=0;A<=m;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,y[A]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function J(I,m){return I.add(O(m))}t.j=function(I){if(V(this)||V(I))return p;if(k(this))return k(I)?O(this).j(O(I)):O(O(this).j(I));if(k(I))return O(this.j(O(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=I.i(A)>>>16,jt=I.i(A)&65535;y[2*T+2*A]+=E*jt,H(y,2*T+2*A),y[2*T+2*A+1]+=S*jt,H(y,2*T+2*A+1),y[2*T+2*A+1]+=E*ht,H(y,2*T+2*A+1),y[2*T+2*A+2]+=S*ht,H(y,2*T+2*A+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function H(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Q(I,m){this.g=I,this.h=m}function B(I,m){if(V(m))throw Error("division by zero");if(V(I))return new Q(p,p);if(k(I))return m=B(O(I),m),new Q(O(m.g),O(m.h));if(k(m))return m=B(I,O(m)),new Q(O(m.g),m.h);if(30<I.g.length){if(k(I)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(I);)y=q(y),T=q(T);var A=Z(y,1),S=Z(T,1);for(T=Z(T,2),y=Z(y,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(y),S=E),T=Z(T,1),y=Z(y,1)}return m=J(I,A.j(m)),new Q(A,m)}for(A=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);k(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(m);V(S)&&(S=_),A=A.add(S),I=J(I,E)}return new Q(A,I)}t.A=function(I){return B(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function q(I){for(var m=I.g.length+1,y=[],T=0;T<m;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function Z(I,m){var y=m>>5;m%=32;for(var T=I.g.length-y,A=[],S=0;S<T;S++)A[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,zn=a}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kp,Us,Gp,fo,kl,Qp,Jp,Xp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,P){for(var j=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)j[Re-2]=arguments[Re];return u.prototype[R].apply(g,j)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function O(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const R=o.length||0,P=g.length||0;o.length=R+P;for(let j=0;j<P;j++)o[R+j]=g[j]}else o.push(g)}}class J{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function H(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var q=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Z(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let P=0;P<y.length;P++)f=y[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const g=jt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var jt=new J(()=>new Ne,o=>o.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ye=!1,Ct=new ht,nr=()=>{const o=l.Promise.resolve(void 0);he=()=>{o.then(on)}};var on=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=jt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ye=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Va=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o})();function rr(o,u){if(We.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(q){e:{try{B(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:sr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rr.aa.h.call(this)}}V(rr,We);var sr={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),ys=0;function Ni(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++ys,this.da=this.fa=!1}function $t(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vs(o){this.src=o,this.g={},this.h=0}vs.prototype.add=function(o,u,f,g,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=w(o,u,g,R);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new Ni(u,this.src,P,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(g,R,1),P&&($t(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,g){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),F={};function x(o,u,f,g,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)x(o,u[P],f,g,R);return null}return f=te(f),o&&o[an]?o.K(u,f,h(g)?!!g.capture:!1,R):L(o,u,f,!1,g,R)}function L(o,u,f,g,R,P){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,Re=W(o);if(Re||(o[C]=Re=new vs(o)),f=Re.add(u,f,g,j,P),f.proxy)return f;if(g=z(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Va||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function o(f){return u.call(o.src,o.listener,f)}const u=ee;return o}function $(o,u,f,g,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)$(o,u[P],f,g,R);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[an]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=w(P,f,g,R),-1<f&&($t(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=W(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[an])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=W(u))?(v(f,o),f.h==0&&(f.src=null,u[C]=null)):$t(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new rr(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function W(o){return o=o[C],o instanceof vs?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[X]||(o[X]=function(u){return o.handleEvent(u)}),o[X])}function ne(){ze.call(this),this.i=new vs(this),this.M=this,this.F=null}V(ne,ze),ne.prototype[an]=!0,ne.prototype.removeEventListener=function(o,u,f,g){$(this,o,u,f,g)};function ce(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new We(u,o);else if(u instanceof We)u.target=u.target||o;else{var R=u;u=new We(g,o),T(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var j=u.g=f[P];R=Te(j,g,!0,u)&&R}if(j=u.g=o,R=Te(j,g,!0,u)&&R,R=Te(j,g,!1,u)&&R,f)for(P=0;P<f.length;P++)j=u.g=f[P],R=Te(j,g,!1,u)&&R}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)$t(f[g]);delete o.g[u],o.h--}}this.F=null},ne.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},ne.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Te(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==f){var Re=j.listener,Je=j.ha||j.src;j.fa&&v(o.i,j),R=Re.call(Je,g)!==!1&&R}}return R&&!g.defaultPrevented}function Oe(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ue(o){o.g=Oe(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bt extends ze{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){ze.call(this),this.h=o,this.g={}}V(tt,ze);var Cn=[];function Es(o){Z(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),Es(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=l.JSON.stringify,St=l.JSON.parse,Oi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Or(){}Or.prototype.h=null;function cu(o){return o.h||(o.h=o.i())}function uu(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ka(){We.call(this,"d")}V(ka,We);function Da(){We.call(this,"c")}V(Da,We);var ir={},hu=null;function xi(){return hu=hu||new ne}ir.La="serverreachability";function fu(o){We.call(this,ir.La,o)}V(fu,We);function Is(o){const u=xi();ce(u,new fu(u))}ir.STAT_EVENT="statevent";function du(o,u){We.call(this,ir.STAT_EVENT,o),this.stat=u}V(du,We);function ft(o){const u=xi();ce(u,new du(u,o))}ir.Ma="timingevent";function pu(o,u){We.call(this,ir.Ma,o),this.size=u}V(pu,We);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function r_(o,u,f,g,R,P){o.info(function(){if(o.g)if(P)for(var j="",Re=P.split("&"),Je=0;Je<Re.length;Je++){var ve=Re[Je].split("=");if(1<ve.length){var nt=ve[0];ve=ve[1];var rt=nt.split("_");j=2<=rt.length&&rt[1]=="type"?j+(nt+"="+ve+"&"):j+(nt+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function s_(o,u,f,g,R,P,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+j})}function xr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+o_(o,f)+(g?" "+g:"")})}function i_(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function o_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Qe(f)}catch{return u}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Na;function Li(){}V(Li,Or),Li.prototype.g=function(){return new XMLHttpRequest},Li.prototype.i=function(){return{}},Na=new Li;function Vn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var _u={},Oa={};function xa(o,u,f){o.L=1,o.v=ji(ln(u)),o.m=f,o.P=!0,yu(o,null)}function yu(o,u){o.F=Date.now(),Fi(o),o.A=ln(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Du(f.i,"t",g),o.C=0,f=o.j.J,o.h=new mu,o.g=Ju(o.j,f?u:null,!o.m),0<o.O&&(o.M=new bt(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Cn[0]=R.toString()),R=Cn);for(var P=0;P<R.length;P++){var j=x(f,R[P],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Is(),r_(o.i,o.u,o.A,o.l,o.R,o.m)}Vn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},Vn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=cn(this.g);var u=this.g.Ba();const Fr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Fr?Is(3):Is(2)),Ma(this);var f=this.g.Z();this.X=f;t:if(vu(this)){var g=Uu(this.g);o="";var R=g.length,P=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),bs(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,s_(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,Je=this.g;if((Re=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Re)){var ve=Re;break t}}ve=null}if(f=ve)xr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,La(this,f);else{this.o=!1,this.s=3,ft(12),or(this),bs(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<j.length;)if(Vt=a_(this,j),Vt==Oa){rt==4&&(this.s=4,ft(14),f=!1),xr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==_u){this.s=4,ft(15),xr(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else xr(this.i,this.l,Vt,null),La(this,Vt);if(vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||j.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)xr(this.i,this.l,j,"[Invalid Chunked Response]"),or(this),bs(this);else if(0<j.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),qa(nt),nt.M=!0,ft(11))}}else xr(this.i,this.l,j,null),La(this,j);rt==4&&or(this),this.o&&!this.J&&(rt==4?Wu(this.j,this):(this.o=!1,Fi(this)))}else A_(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),or(this),bs(this)}}}catch{}finally{}};function vu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function a_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Oa:(f=Number(u.substring(f,g)),isNaN(f)?_u:(g+=1,g+f>u.length?Oa:(u=u.slice(g,g+f),o.C=g+f,u)))}Vn.prototype.cancel=function(){this.J=!0,or(this)};function Fi(o){o.S=Date.now()+o.I,Eu(o,o.I)}function Eu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ws(_(o.ba,o),u)}function Ma(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Vn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(i_(this.i,this.A),this.L!=2&&(Is(),ft(17)),or(this),this.s=2,bs(this)):Eu(this,this.S-o)};function bs(o){o.j.G==0||o.J||Wu(o.j,o)}function or(o){Ma(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Es(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function La(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Fa(f.h,o))){if(!o.K&&Fa(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ki(f),zi(f);else break e;$a(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=ws(_(f.Za,f),6e3));if(1>=wu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else lr(f,11)}else if((o.K||f.g==o)&&Ki(f),!H(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let ve=R[u];if(f.T=ve[0],ve=ve[1],f.G==2)if(ve[0]=="c"){f.K=ve[1],f.ia=ve[2];const nt=ve[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=ve[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const Fr=ve[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(g=1.5*Fr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=o.g;if(Vt){const Qi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var P=g.h;P.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ua(P,P.h),P.h=null))}if(g.D){const Ha=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ha&&(g.ya=Ha,ke(g.I,g.D,Ha))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=o;if(g.qa=Qu(g,g.J?g.ia:null,g.W),j.K){Au(g.h,j);var Re=j,Je=g.L;Je&&(Re.I=Je),Re.B&&(Ma(Re),Fi(Re)),g.g=j}else Hu(g);0<f.i.length&&Wi(f)}else ve[0]!="stop"&&ve[0]!="close"||lr(f,7);else f.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?lr(f,7):ja(f):ve[0]!="noop"&&f.l&&f.l.ta(ve),f.v=0)}}Is(4)}catch{}}var l_=class{constructor(o,u){this.g=o,this.map=u}};function Tu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Iu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wu(o){return o.h?1:o.g?o.g.size:0}function Fa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ua(o,u){o.g?o.g.add(u):o.h=u}function Au(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Tu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function c_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function u_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Su(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=u_(o),g=c_(o),R=g.length,P=0;P<R;P++)u.call(void 0,g[P],f&&f[P],o)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var P=o[f].substring(0,g);R=o[f].substring(g+1)}else P=o[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,Ui(this,o.j),this.o=o.o,this.g=o.g,Bi(this,o.s),this.l=o.l;var u=o.i,f=new Ps;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Pu(this,f),this.m=o.m}else o&&(u=String(o).match(Ru))?(this.h=!1,Ui(this,u[1]||"",!0),this.o=Ss(u[2]||""),this.g=Ss(u[3]||"",!0),Bi(this,u[4]),this.l=Ss(u[5]||"",!0),Pu(this,u[6]||"",!0),this.m=Ss(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}ar.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Rs(u,Cu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Rs(u,Cu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Rs(f,f.charAt(0)=="/"?p_:d_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Rs(f,m_)),o.join("")};function ln(o){return new ar(o)}function Ui(o,u,f){o.j=f?Ss(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Bi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Pu(o,u,f){u instanceof Ps?(o.i=u,__(o.i,o.h)):(f||(u=Rs(u,g_)),o.i=new Ps(u,o.h))}function ke(o,u,f){o.i.set(u,f)}function ji(o){return ke(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ss(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,f_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function f_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cu=/[#\/\?@]/g,d_=/[#\?:]/g,p_=/[#\?]/g,g_=/[#\?@]/g,m_=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function kn(o){o.g||(o.g=new Map,o.h=0,o.i&&h_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ps.prototype,t.add=function(o,u){kn(this),this.i=null,o=Mr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Vu(o,u){kn(o),u=Mr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ku(o,u){return kn(o),u=Mr(o,u),o.g.has(u)}t.forEach=function(o,u){kn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},t.na=function(){kn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let P=0;P<R.length;P++)f.push(u[g])}return f},t.V=function(o){kn(this);let u=[];if(typeof o=="string")ku(this,o)&&(u=u.concat(this.g.get(Mr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return kn(this),this.i=null,o=Mr(this,o),ku(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Du(o,u,f){Vu(o,u),0<f.length&&(o.i=null,o.g.set(Mr(o,u),k(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=P;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),o.push(R)}}return this.i=o.join("&")};function Mr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function __(o,u){u&&!o.j&&(kn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Vu(this,g),Du(this,R,f))},o)),o.j=u}function y_(o,u){const f=new As;if(l.Image){const g=new Image;g.onload=b(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Dn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function v_(o,u){const f=new As,g=new AbortController,R=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function E_(){this.g=new Oi}function T_(o,u,f){const g=f||"";try{Su(o,function(R,P){let j=R;h(R)&&(j=Qe(R)),u.push(g+P+"="+encodeURIComponent(j))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function $i(o){this.l=o.Ub||null,this.j=o.eb||!1}V($i,Or),$i.prototype.g=function(){return new qi(this.l,this.j)},$i.prototype.i=(function(o){return function(){return o}})({});function qi(o,u){ne.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(qi,ne),t=qi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Vs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cs(this):Vs(this),this.readyState==3&&Nu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Cs(this))},t.Qa=function(o){this.g&&(this.response=o,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ou(o){let u="";return Z(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ba(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Ou(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ke(o,u,f))}function Me(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Me,ne);var I_=/^https?$/i,w_=["POST","PUT"];t=Me.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Na.g(),this.v=this.o?cu(this.o):cu(Na),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){xu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(w_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){xu(this,P)}};function xu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Mu(o),Hi(o)}function Mu(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Hi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lu(this):this.bb())},t.bb=function(){Lu(this)};function Lu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)Oe(o.Ea,0,o);else if(ce(o,"readystatechange"),cn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=j===0){var R=String(o.D).match(Ru)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!I_.test(R?R.toLowerCase():"")}f=g}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var P=2<cn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Mu(o)}}finally{Hi(o)}}}}function Hi(o,u){if(o.g){Fu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=g}catch{}}}function Fu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),St(u)}};function Uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function A_(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(H(o[g]))continue;var f=A(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Bu(o){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,o),this.cb=ks("retryDelaySeedMs",1e4,o),this.Wa=ks("forwardChannelMaxRetries",2,o),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Tu(o&&o.concurrentRequestLimit),this.Da=new E_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Qu(this,null,this.W),Wi(this)};function ja(o){if(ju(o),o.G==3){var u=o.U++,f=ln(o.I);if(ke(f,"SID",o.K),ke(f,"RID",u),ke(f,"TYPE","terminate"),Ds(o,f),u=new Vn(o,o.j,u),u.L=2,u.v=ji(ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ju(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Fi(u)}Gu(o)}function zi(o){o.g&&(qa(o),o.g.cancel(),o.g=null)}function ju(o){zi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Wi(o){if(!Iu(o.h)&&!o.s){o.s=!0;var u=o.Ga;he||nr(),ye||(he(),ye=!0),Ct.add(u,o),o.B=0}}function b_(o,u){return wu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ws(_(o.Ga,o,u),Ku(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Vn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=qu(this,R,u),f=ln(this.I),ke(f,"RID",o),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),Ds(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Ou(P)))+"&"+u:this.m&&Ba(f,this.m,P)),Ua(this.h,R),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",u),ke(f,"SID","null"),R.T=!0,xa(R,f,null)):xa(R,f,u),this.G=2}}else this.G==3&&(o?$u(this,o):this.i.length==0||Iu(this.h)||$u(this))};function $u(o,u){var f;u?f=u.l:f=o.U++;const g=ln(o.I);ke(g,"SID",o.K),ke(g,"RID",f),ke(g,"AID",o.T),Ds(o,g),o.m&&o.o&&Ba(g,o.m,o.o),f=new Vn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=qu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ua(o.h,f),xa(f,g,u)}function Ds(o,u){o.H&&Z(o.H,function(f,g){ke(u,g,f)}),o.l&&Su({},function(f,g){ke(u,g,f)})}function qu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const j=["count="+f];P==-1?0<f?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Re=!0;for(let Je=0;Je<f;Je++){let ve=R[Je].g;const nt=R[Je].map;if(ve-=P,0>ve)P=Math.max(0,R[Je].g-100),Re=!1;else try{T_(nt,j,"req"+ve+"_")}catch{g&&g(nt)}}if(Re){g=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Hu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;he||nr(),ye||(he(),ye=!0),Ct.add(u,o),o.v=0}}function $a(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ws(_(o.Fa,o),Ku(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ws(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),zi(this),zu(this))};function qa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function zu(o){o.g=new Vn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ln(o.qa);ke(u,"RID","rpc"),ke(u,"SID",o.K),ke(u,"AID",o.T),ke(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ke(u,"TO",o.ja),ke(u,"TYPE","xmlhttp"),Ds(o,u),o.m&&o.o&&Ba(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ji(ln(u)),f.m=null,f.P=!0,yu(f,o)}t.Za=function(){this.C!=null&&(this.C=null,zi(this),$a(this),ft(19))};function Ki(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Wu(o,u){var f=null;if(o.g==u){Ki(o),qa(o),o.g=null;var g=2}else if(Fa(o.h,u))f=u.D,Au(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=xi(),ce(g,new pu(g,f)),Wi(o)}else Hu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&b_(o,u)||g==2&&$a(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function Ku(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function lr(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new ar(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ui(g,"https"),ji(g),R?y_(g.toString(),f):v_(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),Gu(o),ju(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Gu(o){if(o.G=0,o.ka=[],o.l){const u=bu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Qu(o,u,f){var g=f instanceof ar?ln(f):new ar(f);if(g.g!="")u&&(g.g=u+"."+g.g),Bi(g,g.s);else{var R=l.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new ar(null);g&&Ui(P,g),u&&(P.g=u),R&&Bi(P,R),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&ke(g,f,u),ke(g,"VER",o.la),Ds(o,g),g}function Ju(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new $i({eb:f})):new Me(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xu(){}t=Xu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gi(){}Gi.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){ne.call(this),this.g=new Bu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!H(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!H(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Lr(this)}V(vt,ne),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){ja(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new l_(u.Ya++,o)),u.G==3&&Wi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,vt.aa.N.call(this)};function Yu(o){ka.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Yu,ka);function Zu(){Da.call(this),this.status=1}V(Zu,Da);function Lr(o){this.g=o}V(Lr,Xu),Lr.prototype.ua=function(){ce(this.g,"a")},Lr.prototype.ta=function(o){ce(this.g,new Yu(o))},Lr.prototype.sa=function(o){ce(this.g,new Zu)},Lr.prototype.ra=function(){ce(this.g,"b")},Gi.prototype.createWebChannel=Gi.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Xp=function(){return new Gi},Jp=function(){return xi()},Qp=ir,kl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,fo=Mi,gu.COMPLETE="complete",Gp=gu,uu.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Us=uu,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Kp=Me}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const Qh="@firebase/firestore",Jh="4.8.0";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let ds="11.10.0";/**
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
 */const Ar=new mc("@firebase/firestore");function $r(){return Ar.logLevel}function K(t,...e){if(Ar.logLevel<=pe.DEBUG){const n=e.map(vc);Ar.debug(`Firestore (${ds}): ${t}`,...n)}}function An(t,...e){if(Ar.logLevel<=pe.ERROR){const n=e.map(vc);Ar.error(`Firestore (${ds}): ${t}`,...n)}}function Qn(t,...e){if(Ar.logLevel<=pe.WARN){const n=e.map(vc);Ar.warn(`Firestore (${ds}): ${t}`,...n)}}function vc(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function re(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Yp(t,r,n)}function Yp(t,e,n){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw An(r),new Error(r)}function Ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Yp(e,s,r)}function le(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class Zp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ot.UNAUTHENTICATED)))}shutdown(){}}class ZT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class eI{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string",31837,{l:r}),new Zp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class tI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new tI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ae(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Xh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function eg(){return new TextEncoder}/**
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
 */class Ec{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Dl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return fe(r,s);{const i=eg(),a=iI(i.encode(Yh(t,n)),i.encode(Yh(e,n)));return a!==0?a:fe(r,s)}}n+=r>65535?2:1}return fe(t.length,e.length)}function Yh(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function iI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return fe(t[n],e[n]);return fe(t.length,e.length)}function ss(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Zh="__name__";class zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&re(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return fe(e.length,n.length)}static compareSegments(e,n){const r=zt.isNumericId(e),s=zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?zt.extractNumericId(e).compare(zt.extractNumericId(n)):Dl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class Ve extends zt{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ve(n)}static emptyPath(){return new Ve([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends zt{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return oI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zh}static keyField(){return new Ye([Zh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new G(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ve.fromString(e))}static fromName(e){return new Y(Ve.fromString(e).popFirst(5))}static empty(){return new Y(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ve(e.slice()))}}/**
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
 */function tg(t,e,n){if(!n)throw new G(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aI(t,e,n,r){if(e===!0&&r===!0)throw new G(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ef(t){if(!Y.isDocumentKey(t))throw new G(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tf(t){if(Y.isDocumentKey(t))throw new G(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ng(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function da(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re(12329,{type:typeof t})}function Kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=da(t);throw new G(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ai(t,e){if(!ng(t))throw new G(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new G(D.INVALID_ARGUMENT,n);return!0}/**
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
 */const nf=-62135596800,rf=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*rf);return new De(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<nf)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rf}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ai(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:$e("string",De._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
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
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new De(0,0))}static max(){return new ae(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ui=-1;function lI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Jn(s,Y.empty(),e)}function cI(t){return new Jn(t.readTime,t.key,ui)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ae.min(),Y.empty(),ui)}static max(){return new Jn(ae.max(),Y.empty(),ui)}}function uI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ps(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==hI)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):N.reject(n)}static resolve(e){return new N(((n,r)=>{n(e)}))}static reject(e){return new N(((n,r)=>{r(e)}))}static waitFor(e){return new N(((n,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(c=>r(c)))})),a=!0,i===s&&n()}))}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next((s=>s?N.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new N(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next((d=>{a[h]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new N(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function dI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}pa.ue=-1;/**
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
 */const Tc=-1;function ga(t){return t==null}function Oo(t){return t===0&&1/t==-1/0}function pI(t){return typeof t=="number"&&Number.isInteger(t)&&!Oo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const rg="";function gI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sf(e)),e=mI(t.get(n),e);return sf(e)}function mI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case rg:n+="";break;default:n+=i}}return n}function sf(t){return t+rg+""}/**
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
 */function of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new af(this.data.getIterator())}getIteratorFrom(e){return new af(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class af{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Ke(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ig extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ig("Invalid base64 string: "+i):i}})(e);return new et(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const _I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Ae(!!t,39018),typeof t=="string"){let e=0;const n=_I.exec(t);if(Ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yn(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */const og="server_timestamp",ag="__type__",lg="__previous_value__",cg="__local_write_time__";function Ic(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ag])===null||n===void 0?void 0:n.stringValue)===og}function ma(t){const e=t.mapValue.fields[lg];return Ic(e)?ma(e):e}function hi(t){const e=Xn(t.mapValue.fields[cg].timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class yI{constructor(e,n,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const xo="(default)";class fi{constructor(e,n){this.projectId=e,this.database=n||xo}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database===xo}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ug="__type__",vI="__max__",no={mapValue:{}},hg="__vector__",Mo="value";function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ic(t)?4:TI(t)?9007199254740991:EI(t)?10:11:re(28295,{value:t})}function rn(t,e){if(t===e)return!0;const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hi(t).isEqual(hi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xn(s.timestampValue),l=Xn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Yn(s.bytesValue).isEqual(Yn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),l=Le(i.doubleValue);return a===l?Oo(a)===Oo(l):isNaN(a)&&isNaN(l)}return!1})(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(of(a)!==of(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!rn(a[c],l[c])))return!1;return!0})(t,e);default:return re(52216,{left:t})}}function di(t,e){return(t.values||[]).find((n=>rn(n,e)))!==void 0}function is(t,e){if(t===e)return 0;const n=Zn(t),r=Zn(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Le(i.integerValue||i.doubleValue),c=Le(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return lf(t.timestampValue,e.timestampValue);case 4:return lf(hi(t),hi(e));case 5:return Dl(t.stringValue,e.stringValue);case 6:return(function(i,a){const l=Yn(i),c=Yn(a);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=fe(l[h],c[h]);if(d!==0)return d}return fe(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=fe(Le(i.latitude),Le(a.latitude));return l!==0?l:fe(Le(i.longitude),Le(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return cf(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var l,c,h,d;const p=i.fields||{},_=a.fields||{},b=(l=p[Mo])===null||l===void 0?void 0:l.arrayValue,V=(c=_[Mo])===null||c===void 0?void 0:c.arrayValue,k=fe(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:cf(b,V)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const _=Dl(c[p],d[p]);if(_!==0)return _;const b=is(l[c[p]],h[d[p]]);if(b!==0)return b}return fe(c.length,d.length)})(t.mapValue,e.mapValue);default:throw re(23264,{le:n})}}function lf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Xn(t),r=Xn(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function cf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function os(t){return Nl(t)}function Nl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Yn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return Y.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Nl(n.fields[a])}`;return s+"}"})(t.mapValue):re(61005,{value:t})}function po(t){switch(Zn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ma(t);return e?16+po(e):16;case 5:return 2*t.stringValue.length;case 6:return Yn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+po(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Pr(r.fields,((i,a)=>{s+=i.length+po(a)})),s})(t.mapValue);default:throw re(13486,{value:t})}}function uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ol(t){return!!t&&"integerValue"in t}function wc(t){return!!t&&"arrayValue"in t}function hf(t){return!!t&&"nullValue"in t}function ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function EI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ug])===null||n===void 0?void 0:n.stringValue)===hg}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ys(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vI}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ys(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(Ys(this.value))}}function fg(t){const e=[];return Pr(t.fields,((n,r)=>{const s=new Ye([n]);if(go(r)){const i=fg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Nt(e)}/**
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
 */class lt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,ae.min(),ae.min(),ae.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,ae.min(),ae.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ae.min(),ae.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lo{constructor(e,n){this.position=e,this.inclusive=n}}function df(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=is(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function II(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dg{}class je extends dg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AI(e,n,r):n==="array-contains"?new RI(e,r):n==="in"?new PI(e,r):n==="not-in"?new CI(e,r):n==="array-contains-any"?new VI(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bI(e,r):new SI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(is(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends dg{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Bt(e,n)}matches(e){return pg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function pg(t){return t.op==="and"}function gg(t){return wI(t)&&pg(t)}function wI(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function xl(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+os(t.value);if(gg(t))return t.filters.map((e=>xl(e))).join(",");{const e=t.filters.map((n=>xl(n))).join(",");return`${t.op}(${e})`}}function mg(t,e){return t instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)})(t,e):t instanceof Bt?(function(r,s){return s instanceof Bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&mg(a,s.filters[l])),!0):!1})(t,e):void re(19439)}function _g(t){return t instanceof je?(function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`})(t):t instanceof Bt?(function(n){return n.op.toString()+" {"+n.getFilters().map(_g).join(" ,")+"}"})(t):"Filter"}class AI extends je{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class bI extends je{constructor(e,n){super(e,"in",n),this.keys=yg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class SI extends je{constructor(e,n){super(e,"not-in",n),this.keys=yg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function yg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>Y.fromName(r.referenceValue)))}class RI extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wc(n)&&di(n.arrayValue,this.value)}}class PI extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class CI extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!di(this.value.arrayValue,n)}}class VI extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wc(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>di(this.value.arrayValue,r)))}}/**
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
 */class kI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function gf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new kI(t,e,n,r,s,i,a)}function Ac(t){const e=le(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>xl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>os(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>os(r))).join(",")),e.Pe=n}return e.Pe}function bc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!II(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pf(t.startAt,e.startAt)&&pf(t.endAt,e.endAt)}function Ml(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class bi{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function DI(t,e,n,r,s,i,a,l){return new bi(t,e,n,r,s,i,a,l)}function Sc(t){return new bi(t)}function mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vg(t){return t.collectionGroup!==null}function Zs(t){const e=le(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ke(Ye.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fo(i,r))})),n.has(Ye.keyField().canonicalString())||e.Te.push(new Fo(Ye.keyField(),r))}return e.Te}function Xt(t){const e=le(t);return e.Ie||(e.Ie=NI(e,Zs(t))),e.Ie}function NI(t,e){if(t.limitType==="F")return gf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)}));const n=t.endAt?new Lo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lo(t.startAt.position,t.startAt.inclusive):null;return gf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ll(t,e){const n=t.filters.concat([e]);return new bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fl(t,e,n){return new bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _a(t,e){return bc(Xt(t),Xt(e))&&t.limitType===e.limitType}function Eg(t){return`${Ac(Xt(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>_g(s))).join(", ")}]`),ga(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>os(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>os(s))).join(",")),`Target(${r})`})(Xt(t))}; limitType=${t.limitType})`}function ya(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=df(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,Zs(r),s)||r.endAt&&!(function(a,l,c){const h=df(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,Zs(r),s))})(t,e)}function OI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tg(t){return(e,n)=>{let r=!1;for(const s of Zs(t)){const i=xI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xI(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?is(c,h):re(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:t.dir})}}/**
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
 */class Cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return sg(this.inner)}size(){return this.innerSize}}/**
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
 */const MI=new xe(Y.comparator);function bn(){return MI}const Ig=new xe(Y.comparator);function Bs(...t){let e=Ig;for(const n of t)e=e.insert(n.key,n);return e}function wg(t){let e=Ig;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function gr(){return ei()}function Ag(){return ei()}function ei(){return new Cr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const LI=new xe(Y.comparator),FI=new Ke(Y.comparator);function ge(...t){let e=FI;for(const n of t)e=e.add(n);return e}const UI=new Ke(fe);function BI(){return UI}/**
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
 */function Rc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oo(e)?"-0":e}}function bg(t){return{integerValue:""+t}}function jI(t,e){return pI(e)?bg(e):Rc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class va{constructor(){this._=void 0}}function $I(t,e,n){return t instanceof Uo?(function(s,i){const a={fields:{[ag]:{stringValue:og},[cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ic(i)&&(i=ma(i)),i&&(a.fields[lg]=i),{mapValue:a}})(n,e):t instanceof pi?Rg(t,e):t instanceof gi?Pg(t,e):(function(s,i){const a=Sg(s,i),l=_f(a)+_f(s.Ee);return Ol(a)&&Ol(s.Ee)?bg(l):Rc(s.serializer,l)})(t,e)}function qI(t,e,n){return t instanceof pi?Rg(t,e):t instanceof gi?Pg(t,e):n}function Sg(t,e){return t instanceof Bo?(function(r){return Ol(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Uo extends va{}class pi extends va{constructor(e){super(),this.elements=e}}function Rg(t,e){const n=Cg(e);for(const r of t.elements)n.some((s=>rn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class gi extends va{constructor(e){super(),this.elements=e}}function Pg(t,e){let n=Cg(e);for(const r of t.elements)n=n.filter((s=>!rn(s,r)));return{arrayValue:{values:n}}}class Bo extends va{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function _f(t){return Le(t.integerValue||t.doubleValue)}function Cg(t){return wc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function HI(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof pi&&s instanceof pi||r instanceof gi&&s instanceof gi?ss(r.elements,s.elements,rn):r instanceof Bo&&s instanceof Bo?rn(r.Ee,s.Ee):r instanceof Uo&&s instanceof Uo})(t.transform,e.transform)}class zI{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ea{}function Vg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dg(t.key,yn.none()):new Si(t.key,t.data,yn.none());{const n=t.data,r=Rt.empty();let s=new Ke(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vr(t.key,r,new Nt(s.toArray()),yn.none())}}function WI(t,e,n){t instanceof Si?(function(s,i,a){const l=s.value.clone(),c=vf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Vr?(function(s,i,a){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=vf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(kg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function ti(t,e,n,r){return t instanceof Si?(function(i,a,l,c){if(!mo(i.precondition,a))return l;const h=i.value.clone(),d=Ef(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Vr?(function(i,a,l,c){if(!mo(i.precondition,a))return l;const h=Ef(i.fieldTransforms,c,a),d=a.data;return d.setAll(kg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,a,l){return mo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(t,e,n)}function KI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sg(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function yf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,((i,a)=>HI(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Si extends Ea{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends Ea{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function vf(t,e,n){const r=new Map;Ae(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,qI(a,l,n[s]))}return r}function Ef(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,$I(i,a,e))}return r}class Dg extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ag();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Vg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ae.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ge())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,((n,r)=>yf(n,r)))&&ss(this.baseMutations,e.baseMutations,((n,r)=>yf(n,r)))}}class Pc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return LI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Pc(e,n,r,s)}}/**
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
 */class JI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class XI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,me;function YI(t){switch(t){case D.OK:return re(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return re(15467,{code:t})}}function Ng(t){if(t===void 0)return An("GRPC error has no .code"),D.UNKNOWN;switch(t){case Be.OK:return D.OK;case Be.CANCELLED:return D.CANCELLED;case Be.UNKNOWN:return D.UNKNOWN;case Be.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Be.INTERNAL:return D.INTERNAL;case Be.UNAVAILABLE:return D.UNAVAILABLE;case Be.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Be.NOT_FOUND:return D.NOT_FOUND;case Be.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Be.ABORTED:return D.ABORTED;case Be.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Be.DATA_LOSS:return D.DATA_LOSS;default:return re(39323,{code:t})}}(me=Be||(Be={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZI=new zn([4294967295,4294967295],0);function Tf(t){const e=eg().encode(t),n=new Wp;return n.update(e),new Uint8Array(n.digest())}function If(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zn([n,r],0),new zn([s,i],0)]}class Cc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new js(`Invalid padding: ${n}`);if(r<0)throw new js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new js(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=zn.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(zn.fromNumber(r)));return s.compare(ZI)===1&&(s=new zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Cc(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ta{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ta(ae.min(),s,new xe(fe),bn(),ge())}}class Ri{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ri(r,n,ge(),ge(),ge())}}/**
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
 */class _o{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Og{constructor(e,n){this.targetId=e,this.De=n}}class xg{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wf{constructor(){this.ve=0,this.Ce=Af(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ge(),n=ge(),r=ge();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}})),new Ri(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Af()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ae(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ew{constructor(e){this.We=e,this.Ge=new Map,this.ze=bn(),this.je=ro(),this.Je=ro(),this.He=new xe(fe)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:re(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Ml(i))if(r===0){const a=new Y(i.path);this.Xe(n,a,lt.newNoDocument(a,ae.min()))}else Ae(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Yn(r).toUint8Array()}catch(c){if(c instanceof ig)return Qn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Cc(a,s,i)}catch(c){return Qn(c instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,a)=>{const l=this.st(a);if(l){if(i.current&&Ml(l.target)){const c=new Y(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,lt.newNoDocument(c,e))}i.Ne&&(n.set(a,i.Le()),i.ke())}}));let r=ge();this.Je.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ta(e,n,this.He,this.ze,r);return this.ze=bn(),this.je=ro(),this.Je=ro(),this.He=new xe(fe),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new wf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ke(fe),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ke(fe),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new wf),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ro(){return new xe(Y.comparator)}function Af(){return new xe(Y.comparator)}const tw={asc:"ASCENDING",desc:"DESCENDING"},nw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rw={and:"AND",or:"OR"};class sw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ul(t,e){return t.useProto3Json||ga(e)?e:{value:e}}function jo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iw(t,e){return jo(t,e.toTimestamp())}function Yt(t){return Ae(!!t,49232),ae.fromTimestamp((function(n){const r=Xn(n);return new De(r.seconds,r.nanos)})(t))}function Vc(t,e){return Bl(t,e).canonicalString()}function Bl(t,e){const n=(function(s){return new Ve(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Lg(t){const e=Ve.fromString(t);return Ae($g(e),10190,{key:e.toString()}),e}function jl(t,e){return Vc(t.databaseId,e.path)}function al(t,e){const n=Lg(e);if(n.get(1)!==t.databaseId.projectId)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Ug(n))}function Fg(t,e){return Vc(t.databaseId,e)}function ow(t){const e=Lg(t);return e.length===4?Ve.emptyPath():Ug(e)}function $l(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ug(t){return Ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function bf(t,e,n){return{name:jl(t,e),fields:n.value.mapValue.fields}}function aw(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ae(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const d=h.code===void 0?D.UNKNOWN:Ng(h.code);return new G(d,h.message||"")})(a);n=new xg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=al(t,r.document.name),i=Yt(r.document.updateTime),a=r.document.createTime?Yt(r.document.createTime):ae.min(),l=new Rt({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new _o(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=al(t,r.document),i=r.readTime?Yt(r.readTime):ae.min(),a=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new _o([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=al(t,r.document),i=r.removedTargetIds||[];n=new _o([],i,s,null)}else{if(!("filter"in e))return re(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new XI(s,i),l=r.targetId;n=new Og(l,a)}}return n}function lw(t,e){let n;if(e instanceof Si)n={update:bf(t,e.key,e.value)};else if(e instanceof Dg)n={delete:jl(t,e.key)};else if(e instanceof Vr)n={update:bf(t,e.key,e.data),updateMask:_w(e.fieldMask)};else{if(!(e instanceof GI))return re(16599,{Rt:e.type});n={verify:jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof Uo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bo)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw re(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:iw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)})(t,e.precondition)),n}function cw(t,e){return t&&t.length>0?(Ae(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?Yt(s.updateTime):Yt(i);return a.isEqual(ae.min())&&(a=Yt(i)),new zI(a,s.transformResults||[])})(n,e)))):[]}function uw(t,e){return{documents:[Fg(t,e.path)]}}function hw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fg(t,s);const i=(function(h){if(h.length!==0)return jg(Bt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Hr(_.field),direction:pw(_.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ul(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:s}}function fw(t){let e=ow(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const _=Bg(p);return _ instanceof Bt&&gg(_)?_.getFilters():[_]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((_=>(function(V){return new Fo(zr(V.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let _;return _=typeof p=="object"?p.value:p,ga(_)?null:_})(n.limit));let c=null;n.startAt&&(c=(function(p){const _=!!p.before,b=p.values||[];return new Lo(b,_)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new Lo(b,_)})(n.endAt)),DI(e,s,a,i,l,"F",c,h)}function dw(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zr(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zr(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zr(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zr(n.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}})(t):t.fieldFilter!==void 0?(function(n){return je.create(zr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Bt.create(n.compositeFilter.filters.map((r=>Bg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}})(n.compositeFilter.op))})(t):re(30097,{filter:t})}function pw(t){return tw[t]}function gw(t){return nw[t]}function mw(t){return rw[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function zr(t){return Ye.fromServerFormat(t.fieldPath)}function jg(t){return t instanceof je?(function(n){if(n.op==="=="){if(ff(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(hf(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ff(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(hf(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:gw(n.op),value:n.value}}})(t):t instanceof Bt?(function(n){const r=n.getFilters().map((s=>jg(s)));return r.length===1?r[0]:{compositeFilter:{op:mw(n.op),filters:r}}})(t):re(54877,{filter:t})}function _w(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function $g(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jn{constructor(e,n,r,s,i=ae.min(),a=ae.min(),l=et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yw{constructor(e){this.gt=e}}function vw(t){const e=fw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fl(e,e.limit,"L"):e}/**
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
 */class Ew{constructor(){this.Dn=new Tw}addToCollectionParentIndex(e,n){return this.Dn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Jn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class Tw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Sf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qg=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(qg,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */class as{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new as(0)}static ur(){return new as(-1)}}/**
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
 */const Rf="LruGarbageCollector",Iw=1048576;function Pf([t,e],[n,r]){const s=fe(t,n);return s===0?fe(e,r):s}class ww{constructor(e){this.Tr=e,this.buffer=new Ke(Pf),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Pf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Aw{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){K(Rf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gs(n)?K(Rf,"Ignoring IndexedDB error during garbage collection: ",n):await ps(n)}await this.Rr(3e5)}))}}class bw{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return N.resolve(pa.ue);const r=new ww(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Sf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sf):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),$r()<=pe.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Sw(t,e){return new bw(t,e)}/**
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
 */class Rw{constructor(){this.changes=new Cr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Pw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Cw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ti(r.mutation,s,Nt.empty(),De.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ge()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ge()){const s=gr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=Bs();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ge())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(e,n,r,s){let i=bn();const a=ei(),l=(function(){return ei()})();return n.forEach(((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Vr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ti(d.mutation,h,d.mutation.getFieldMask(),De.now())):a.set(h.key,Nt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>{var p;return l.set(h,new Pw(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=ei();let s=new xe(((a,l)=>a-l)),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Nt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ge()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Ag();d.forEach((_=>{if(!i.has(_)){const b=Vg(n.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(gr());let l=ui,c=i;return a.next((h=>N.forEach(h,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{c=c.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,ge()))).next((d=>({batchId:l,changes:wg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next((r=>{let s=Bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Bs();return this.indexManager.getCollectionParents(e,i).next((l=>N.forEach(l,(c=>{const h=(function(p,_){return new bi(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,lt.newInvalidDocument(d)))}));let l=Bs();return a.forEach(((c,h)=>{const d=i.get(c);d!==void 0&&ti(d.mutation,h,Nt.empty(),De.now()),ya(n,h)&&(l=l.insert(c,h))})),l}))}}/**
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
 */class Vw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return N.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}})(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:vw(s.bundledQuery),readTime:Yt(s.readTime)}})(n)),N.resolve()}}/**
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
 */class kw{constructor(){this.overlays=new xe(Y.comparator),this.kr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return N.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,a=new Y(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,d)=>l.set(h,d))),!(l.size()>=s)););return N.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new JI(n,r));let i=this.kr.get(n);i===void 0&&(i=ge(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Dw{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
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
 */class kc{constructor(){this.qr=new Ke(Ge.Qr),this.$r=new Ke(Ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ge(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new Y(new Ve([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Y(new Ve([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ge();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ge(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Y.comparator(e.key,n.key)||fe(e.Hr,n.Hr)}static Ur(e,n){return fe(e.Hr,n.Hr)||Y.comparator(e.key,n.key)}}/**
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
 */class Nw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Ge.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new QI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,n){return N.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Tc:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);i.push(l)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(fe);return n.forEach((s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(l=>{r=r.add(l.Hr)}))})),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new Y(i),0);let l=new Ke(fe);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)}),a),N.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ae(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(n.mutations,(s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Yr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ow{constructor(e){this.ni=e,this.docs=(function(){return new xe(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bn();const a=n.path,l=new Y(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||uI(cI(d),r)<=0||(s.has(d.key)||ya(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re(9500)}ri(e,n){return N.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new xw(this)}getSize(e){return N.resolve(this.size)}}class xw extends Rw{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),N.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class Mw{constructor(e){this.persistence=e,this.ii=new Cr((n=>Ac(n)),bc),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.si=0,this.oi=new kc,this.targetCount=0,this._i=as.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),N.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new as(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.hr(n),N.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.oi.containsKey(n))}}/**
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
 */class Hg{constructor(e,n){this.ai={},this.overlays={},this.ui=new pa(0),this.ci=!1,this.ci=!0,this.li=new Dw,this.referenceDelegate=e(this),this.hi=new Mw(this),this.indexManager=new Ew,this.remoteDocumentCache=(function(s){return new Ow(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new yw(n),this.Ti=new Vw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Nw(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new Lw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return N.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class Lw extends fI{constructor(e){super(),this.currentSequenceNumber=e}}class Dc{constructor(e){this.persistence=e,this.Ai=new kc,this.Ri=null}static Vi(e){return new Dc(e)}get mi(){if(this.Ri)return this.Ri;throw re(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),N.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,(r=>{const s=Y.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ae.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return N.or([()=>N.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class $o{constructor(e,n){this.persistence=e,this.gi=new Cr((r=>gI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Sw(this,n)}static Vi(e,n){return new $o(e,n)}Ii(){}di(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return N.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?N.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,n).next((l=>{l||(r++,i.removeEntry(a,ae.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=po(e.data.value)),n}Sr(e,n,r){return N.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Nc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Fw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Uw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return DE()?8:dI(ut())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Fw;return this.ws(e,n,a).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,a,l.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?($r()<=pe.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):($r()<=pe.DEBUG&&K("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?($r()<=pe.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):N.resolve())}ps(e,n){if(mf(n))return N.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Fl(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=ge(...i);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(n,l);return this.Ds(n,h,a,c.readTime)?this.ps(e,Fl(n,null,"F")):this.vs(e,h,n,c)}))))})))))}ys(e,n,r,s){return mf(n)||s.isEqual(ae.min())?N.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(n,i);return this.Ds(n,a,r,s)?N.resolve(null):($r()<=pe.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.vs(e,a,n,lI(s,ui)).next((l=>l)))}))}bs(e,n){let r=new Ke(Tg(e));return n.forEach(((s,i)=>{ya(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return $r()<=pe.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",qr(n)),this.gs.getDocumentsMatchingQuery(e,n,Jn.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Oc="LocalStore",Bw=3e8;class jw{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new xe(fe),this.Ms=new Cr((i=>Ac(i)),bc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function $w(t,e,n,r){return new jw(t,e,n,r)}async function zg(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=ge();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function qw(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,d){const p=h.batch,_=p.keys();let b=N.resolve();return _.forEach((V=>{b=b.next((()=>d.getEntry(c,V))).next((k=>{const O=h.docVersions.get(V);Ae(O!==null,48541),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Wg(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function Hw(t,e){const n=le(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;l.push(n.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(k,O,J){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Bw?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(_,b,d)&&l.push(n.hi.updateTargetData(i,b))}));let c=bn(),h=ge();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(zw(i,a,e.documentUpdates).next((d=>{c=d.Ls,h=d.ks}))),!r.isEqual(ae.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return N.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Fs=s,i)))}function zw(t,e,n){let r=ge(),s=ge();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=bn();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):K(Oc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:s}}))}function Ww(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Tc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Kw(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):n.hi.allocateTargetId(r).next((a=>(s=new jn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function ql(t,e,n){const r=le(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!gs(a))throw a;K(Oc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Cf(t,e,n){const r=le(t);let s=ae.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,d){const p=le(c),_=p.Ms.get(d);return _!==void 0?N.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Xt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,n?s:ae.min(),n?i:ge()))).next((l=>(Gw(r,OI(e),l),{documents:l,qs:i})))))}function Gw(t,e,n){let r=t.xs.get(e)||ae.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Vf{constructor(){this.activeTargetIds=BI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qw{constructor(){this.Fo=new Vf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jw{xo(e){}shutdown(){}}/**
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
 */const kf="ConnectivityMonitor";class Df{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){K(kf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){K(kf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let so=null;function Hl(){return so===null?so=(function(){return 268435456+Math.round(2147483648*Math.random())})():so++,"0x"+so.toString(16)}/**
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
 */const ll="RestConnection",Xw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===xo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const a=Hl(),l=this.Go(e,n.toUriEncodedString());K(ll,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),d=hs(h);return this.jo(e,l,c,r,d).then((p=>(K(ll,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Qn(ll,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Jo(e,n,r,s,i,a){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ds})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=Xw[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Zw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const st="WebChannelConnection";class eA extends Yw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const a=Hl();return new Promise(((l,c)=>{const h=new Kp;h.setWithCredentials(!0),h.listenOnce(Gp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case fo.NO_ERROR:const p=h.getResponseJson();K(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case fo.TIMEOUT:K(st,`RPC '${e}' ${a} timed out`),c(new G(D.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const _=h.getStatus();if(K(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const k=(function(J){const H=J.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(H)>=0?H:D.UNKNOWN})(V.status);c(new G(k,V.message))}else c(new G(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new G(D.UNAVAILABLE,"Connection failed."));break;default:re(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{K(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);K(st,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=Hl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Xp(),l=Jp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");K(st,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.T_(p);let _=!1,b=!1;const V=new Zw({Ho:O=>{b?K(st,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(_||(K(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),K(st,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Yo:()=>p.close()}),k=(O,J,H)=>{O.listen(J,(Q=>{try{H(Q)}catch(B){setTimeout((()=>{throw B}),0)}}))};return k(p,Us.EventType.OPEN,(()=>{b||(K(st,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),k(p,Us.EventType.CLOSE,(()=>{b||(b=!0,K(st,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),k(p,Us.EventType.ERROR,(O=>{b||(b=!0,Qn(st,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),V.__(new G(D.UNAVAILABLE,"The operation could not be completed")))})),k(p,Us.EventType.MESSAGE,(O=>{var J;if(!b){const H=O.data[0];Ae(!!H,16349);const Q=H,B=(Q==null?void 0:Q.error)||((J=Q[0])===null||J===void 0?void 0:J.error);if(B){K(st,`RPC '${e}' stream ${s} received error:`,B);const q=B.status;let Z=(function(y){const T=Be[y];if(T!==void 0)return Ng(T)})(q),I=B.message;Z===void 0&&(Z=D.INTERNAL,I="Unknown error status: "+q+" with message "+B.message),b=!0,V.__(new G(Z,I)),p.close()}else K(st,`RPC '${e}' stream ${s} received:`,H),V.a_(H)}})),k(l,Qp.STAT_EVENT,(O=>{O.stat===kl.PROXY?K(st,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===kl.NOPROXY&&K(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function cl(){return typeof document<"u"?document:null}/**
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
 */function Ia(t){return new sw(t,!0)}/**
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
 */class Kg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Nf="PersistentStream";class Gg{constructor(e,n,r,s,i,a,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Kg(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new G(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return K(Nf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(K(Nf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tA extends Gg{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=aw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ae.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?Yt(a.readTime):ae.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=$l(this.serializer),n.addTarget=(function(i,a){let l;const c=a.target;if(l=Ml(c)?{documents:uw(i,c)}:{query:hw(i,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Mg(i,a.resumeToken);const h=Ul(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ae.min())>0){l.readTime=jo(i,a.snapshotVersion.toTimestamp());const h=Ul(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=dw(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=$l(this.serializer),n.removeTarget=e,this.k_(n)}}class nA extends Gg{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=cw(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=$l(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>lw(this.serializer,r)))};this.k_(n)}}/**
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
 */class rA{}class sA extends rA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Bl(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(D.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Bl(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class iA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(An(n),this._a=!1):K("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const br="RemoteStore";class oA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{kr(this)&&(K(br,"Restarting streams for network reachability change."),await(async function(c){const h=le(c);h.Ia.add(4),await Pi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await wa(h)})(this))}))})),this.Aa=new iA(r,s)}}async function wa(t){if(kr(t))for(const e of t.da)await e(!0)}async function Pi(t){for(const e of t.da)await e(!1)}function Qg(t,e){const n=le(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Fc(n)?Lc(n):ms(n).x_()&&Mc(n,e))}function xc(t,e){const n=le(t),r=ms(n);n.Ta.delete(e),r.x_()&&Jg(n,e),n.Ta.size===0&&(r.x_()?r.B_():kr(n)&&n.Aa.set("Unknown"))}function Mc(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).H_(e)}function Jg(t,e){t.Ra.$e(e),ms(t).Y_(e)}function Lc(t){t.Ra=new ew({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.Aa.aa()}function Fc(t){return kr(t)&&!ms(t).M_()&&t.Ta.size>0}function kr(t){return le(t).Ia.size===0}function Xg(t){t.Ra=void 0}async function aA(t){t.Aa.set("Online")}async function lA(t){t.Ta.forEach(((e,n)=>{Mc(t,e)}))}async function cA(t,e){Xg(t),Fc(t)?(t.Aa.la(e),Lc(t)):t.Aa.set("Unknown")}async function uA(t,e,n){if(t.Aa.set("Online"),e instanceof xg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(t,e)}catch(r){K(br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qo(t,r)}else if(e instanceof _o?t.Ra.Ye(e):e instanceof Og?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ae.min()))try{const r=await Wg(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const d=i.Ta.get(c);if(!d)return;i.Ta.set(c,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Jg(i,c);const p=new jn(d.target,c,h,d.sequenceNumber);Mc(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){K(br,"Failed to raise snapshot:",r),await qo(t,r)}}async function qo(t,e,n){if(!gs(e))throw e;t.Ia.add(1),await Pi(t),t.Aa.set("Offline"),n||(n=()=>Wg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{K(br,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await wa(t)}))}function Yg(t,e){return e().catch((n=>qo(t,n,e)))}async function Aa(t){const e=le(t),n=er(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Tc;for(;hA(e);)try{const s=await Ww(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,fA(e,s)}catch(s){await qo(e,s)}Zg(e)&&em(e)}function hA(t){return kr(t)&&t.Pa.length<10}function fA(t,e){t.Pa.push(e);const n=er(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Zg(t){return kr(t)&&!er(t).M_()&&t.Pa.length>0}function em(t){er(t).start()}async function dA(t){er(t).na()}async function pA(t){const e=er(t);for(const n of t.Pa)e.X_(n.mutations)}async function gA(t,e,n){const r=t.Pa.shift(),s=Pc.from(r,e,n);await Yg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Aa(t)}async function mA(t,e){e&&er(t).Z_&&await(async function(r,s){if((function(a){return YI(a)&&a!==D.ABORTED})(s.code)){const i=r.Pa.shift();er(r).N_(),await Yg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Aa(r)}})(t,e),Zg(t)&&em(t)}async function Of(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),K(br,"RemoteStore received new credentials");const r=kr(n);n.Ia.add(3),await Pi(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await wa(n)}async function _A(t,e){const n=le(t);e?(n.Ia.delete(2),await wa(n)):e||(n.Ia.add(2),await Pi(n),n.Aa.set("Unknown"))}function ms(t){return t.Va||(t.Va=(function(n,r,s){const i=le(n);return i.ia(),new tA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:aA.bind(null,t),e_:lA.bind(null,t),n_:cA.bind(null,t),J_:uA.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Fc(t)?Lc(t):t.Aa.set("Unknown")):(await t.Va.stop(),Xg(t))}))),t.Va}function er(t){return t.ma||(t.ma=(function(n,r,s){const i=le(n);return i.ia(),new nA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:dA.bind(null,t),n_:mA.bind(null,t),ea:pA.bind(null,t),ta:gA.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Aa(t)):(await t.ma.stop(),t.Pa.length>0&&(K(br,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class Uc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Uc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bc(t,e){if(An("AsyncQueue",`${e}: ${t}`),gs(t))return new G(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xr{static emptySet(e){return new Xr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class xf{constructor(){this.fa=new xe(Y.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):re(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class ls{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new ls(e,n,Xr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class yA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vA{constructor(){this.queries=Mf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=Mf(),i.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new G(D.ABORTED,"Firestore shutting down"))}}function Mf(){return new Cr((t=>Eg(t)),_a)}async function tm(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new yA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Bc(a,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&jc(n)}async function nm(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EA(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&jc(n)}function TA(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function jc(t){t.Da.forEach((e=>{e.next()}))}var zl,Lf;(Lf=zl||(zl={})).Fa="default",Lf.Cache="cache";class rm{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==zl.Cache}}/**
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
 */class sm{constructor(e){this.key=e}}class im{constructor(e){this.key=e}}class IA{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ge(),this.mutatedKeys=ge(),this.Xa=Tg(e),this.eu=new Xr(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new xf,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=ya(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let O=!1;_&&b?_.data.isEqual(b.data)?V!==k&&(r.track({type:3,doc:b}),O=!0):this.iu(_,b)||(r.track({type:2,doc:b}),O=!0,(c&&this.Xa(b,c)>0||h&&this.Xa(b,h)<0)&&(l=!0)):!_&&b?(r.track({type:0,doc:b}),O=!0):_&&!b&&(r.track({type:1,doc:_}),O=!0,(c||h)&&(l=!0)),O&&(b?(a=a.add(b),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{At:O})}};return k(b)-k(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new ls(this.query,e.eu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new xf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ge(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new im(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new sm(r))})),n}uu(e){this.Ha=e.qs,this.Za=ge();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ls.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const $c="SyncEngine";class wA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AA{constructor(e){this.key=e,this.lu=!1}}class bA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Cr((l=>Eg(l)),_a),this.Tu=new Map,this.Iu=new Set,this.du=new xe(Y.comparator),this.Eu=new Map,this.Au=new kc,this.Ru={},this.Vu=new Map,this.mu=as.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function SA(t,e,n=!0){const r=hm(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await om(r,e,n,!0),s}async function RA(t,e){const n=hm(t);await om(n,e,!0,!1)}async function om(t,e,n,r){const s=await Kw(t.localStore,Xt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await PA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qg(t.remoteStore,s),l}async function PA(t,e,n,r,s){t.gu=(p,_,b)=>(async function(k,O,J,H){let Q=O.view.nu(J);Q.Ds&&(Q=await Cf(k.localStore,O.query,!1).then((({documents:I})=>O.view.nu(I,Q))));const B=H&&H.targetChanges.get(O.targetId),q=H&&H.targetMismatches.get(O.targetId)!=null,Z=O.view.applyChanges(Q,k.isPrimaryClient,B,q);return Uf(k,O.targetId,Z._u),Z.snapshot})(t,p,_,b);const i=await Cf(t.localStore,e,!0),a=new IA(e,i.qs),l=a.nu(i.documents),c=Ri.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Uf(t,n,h._u);const d=new wA(e,n,a);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function CA(t,e,n){const r=le(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!_a(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ql(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xc(r.remoteStore,s.targetId),Wl(r,s.targetId)})).catch(ps)):(Wl(r,s.targetId),await ql(r.localStore,s.targetId,!0))}async function VA(t,e){const n=le(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xc(n.remoteStore,r.targetId))}async function kA(t,e,n){const r=FA(t);try{const s=await(function(a,l){const c=le(a),h=De.now(),d=l.reduce(((b,V)=>b.add(V.key)),ge());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=bn(),k=ge();return c.Os.getEntries(b,d).next((O=>{V=O,V.forEach(((J,H)=>{H.isValidDocument()||(k=k.add(J))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,V))).next((O=>{p=O;const J=[];for(const H of l){const Q=KI(H,p.get(H.key).overlayedDocument);Q!=null&&J.push(new Vr(H.key,Q,fg(Q.value.mapValue),yn.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,J,l)})).next((O=>{_=O;const J=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(b,O.batchId,J)}))})).then((()=>({batchId:_.batchId,changes:wg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new xe(fe)),h=h.insert(l,c),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,n),await Ci(r,s.changes),await Aa(r.remoteStore)}catch(s){const i=Bc(s,"Failed to persist write");n.reject(i)}}async function am(t,e){const n=le(t);try{const r=await Hw(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Eu.get(i);a&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ae(a.lu,14607):s.removedDocuments.size>0&&(Ae(a.lu,42227),a.lu=!1))})),await Ci(n,r,e)}catch(r){await ps(r)}}function Ff(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=le(a);c.onlineState=l;let h=!1;c.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(l)&&(h=!0)})),h&&jc(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DA(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new xe(Y.comparator);a=a.insert(i,lt.newNoDocument(i,ae.min()));const l=ge().add(i),c=new Ta(ae.min(),new Map,new xe(fe),a,l);await am(r,c),r.du=r.du.remove(i),r.Eu.delete(e),qc(r)}else await ql(r.localStore,e,!1).then((()=>Wl(r,e,n))).catch(ps)}async function NA(t,e){const n=le(t),r=e.batch.batchId;try{const s=await qw(n.localStore,e);cm(n,r,null),lm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(n,s)}catch(s){await ps(s)}}async function OA(t,e,n){const r=le(t);try{const s=await(function(a,l){const c=le(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next((p=>(Ae(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>c.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);cm(r,e,n),lm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ci(r,s)}catch(s){await ps(s)}}function lm(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function cm(t,e,n){const r=le(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||um(t,r)}))}function um(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(xc(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),qc(t))}function Uf(t,e,n){for(const r of n)r instanceof sm?(t.Au.addReference(r.key,e),xA(t,r)):r instanceof im?(K($c,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||um(t,r.key)):re(19791,{yu:r})}function xA(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(K($c,"New document in limbo: "+n),t.Iu.add(r),qc(t))}function qc(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Y(Ve.fromString(e)),r=t.mu.next();t.Eu.set(r,new AA(n)),t.du=t.du.insert(n,r),Qg(t.remoteStore,new jn(Xt(Sc(n.path)),r,"TargetPurposeLimboResolution",pa.ue))}}async function Ci(t,e,n){const r=le(t),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,n).then((h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Nc.Es(c.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(c,h){const d=le(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>N.forEach(h,(_=>N.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>N.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!gs(p))throw p;K(Oc,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),V=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,k)}}})(r.localStore,i))}async function MA(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){K($c,"User change. New user:",e.toKey());const r=await zg(n.localStore,e);n.currentUser=e,(function(i,a){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new G(D.CANCELLED,a))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ci(n,r.Bs)}}function LA(t,e){const n=le(t),r=n.Eu.get(e);if(r&&r.lu)return ge().add(r.key);{let s=ge();const i=n.Tu.get(e);if(!i)return s;for(const a of i){const l=n.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function hm(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DA.bind(null,e),e.hu.J_=EA.bind(null,e.eventManager),e.hu.pu=TA.bind(null,e.eventManager),e}function FA(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OA.bind(null,e),e}class Ho{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ia(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return $w(this.persistence,new Uw,e.initialUser,this.serializer)}Du(e){return new Hg(Dc.Vi,this.serializer)}bu(e){return new Qw}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ho.provider={build:()=>new Ho};class UA extends Ho{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ae(this.persistence.referenceDelegate instanceof $o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Aw(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Hg((r=>$o.Vi(r,n)),this.serializer)}}class Kl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MA.bind(null,this.syncEngine),await _A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vA})()}createDatastore(e){const n=Ia(e.databaseInfo.databaseId),r=(function(i){return new eA(i)})(e.databaseInfo);return(function(i,a,l,c){return new sA(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,l){return new oA(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Ff(this.syncEngine,n,0)),(function(){return Df.C()?new Df:new Jw})())}createSyncEngine(e,n){return(function(s,i,a,l,c,h,d){const p=new bA(s,i,a,l,c,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=le(s);K(br,"RemoteStore shutting down."),i.Ia.add(5),await Pi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Kl.provider={build:()=>new Kl};/**
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
 *//**
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
 */class fm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const tr="FirestoreClient";class BA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{K(tr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(K(tr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bc(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ul(t,e){t.asyncQueue.verifyOperationInProgress(),K(tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await zg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Qn("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{K("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Qn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Bf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jA(t);K(tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Of(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Of(e.remoteStore,s))),t._onlineComponents=e}async function jA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(tr,"Using user provided OfflineComponentProvider");try{await ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Qn("Error using user provided cache. Falling back to memory cache: "+n),await ul(t,new Ho)}}else K(tr,"Using default OfflineComponentProvider"),await ul(t,new UA(void 0));return t._offlineComponents}async function dm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(tr,"Using user provided OnlineComponentProvider"),await Bf(t,t._uninitializedComponentsProvider._online)):(K(tr,"Using default OnlineComponentProvider"),await Bf(t,new Kl))),t._onlineComponents}function $A(t){return dm(t).then((e=>e.syncEngine))}async function Gl(t){const e=await dm(t),n=e.eventManager;return n.onListen=SA.bind(null,e.syncEngine),n.onUnlisten=CA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VA.bind(null,e.syncEngine),n}function qA(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,h){const d=new fm({next:_=>{d.Ou(),a.enqueueAndForget((()=>nm(i,p))),_.fromCache&&c.source==="server"?h.reject(new G(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new rm(l,d,{includeMetadataChanges:!0,ka:!0});return tm(i,p)})(await Gl(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function pm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jf=new Map;/**
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
 */const gm="firestore.googleapis.com",$f=!0;class qf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gm,this.ssl=$f}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:$f;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Iw)throw new G(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new YT;switch(r.type){case"firstParty":return new nI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=jf.get(n);r&&(K("ComponentProvider","Removing Datastore"),jf.delete(n),r.terminate())})(this),Promise.resolve()}}function HA(t,e,n,r={}){var s;t=Kn(t,ba);const i=hs(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Fp(`https://${c}`),Up("Firestore",!0)),a.host!==gm&&a.host!==c&&Qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Ir(h,l)&&(t._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=wE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new G(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(_)}t._authCredentials=new ZT(new Zp(d,p))}}/**
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
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ai(n,qe._jsonSchema))return new qe(e,r||null,new Y(Ve.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:$e("string",qe._jsonSchemaVersion),referencePath:$e("string")};class Gn extends Dr{constructor(e,n,r){super(e,n,Sc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new Y(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function io(t,e,...n){if(t=mt(t),tg("collection","path",e),t instanceof ba){const r=Ve.fromString(e,...n);return tf(r),new Gn(t,null,r)}{if(!(t instanceof qe||t instanceof Gn))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return tf(r),new Gn(t.firestore,null,r)}}function zA(t,e,...n){if(t=mt(t),arguments.length===1&&(e=Ec.newId()),tg("doc","path",e),t instanceof ba){const r=Ve.fromString(e,...n);return ef(r),new qe(t,null,new Y(r))}{if(!(t instanceof qe||t instanceof Gn))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return ef(r),new qe(t.firestore,t instanceof Gn?t.converter:null,new Y(r))}}/**
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
 */const Hf="AsyncQueue";class zf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Kg(this,"async_queue_retry"),this.oc=()=>{const r=cl();r&&K(Hf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=cl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Wn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!gs(e))throw e;K(Hf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,An("INTERNAL UNHANDLED ERROR: ",Wf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Uc.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&re(47125,{hc:Wf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Wf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function Kf(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class mi extends ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zf(e),this._firestoreClient=void 0,await e}}}function WA(t,e){const n=typeof t=="object"?t:qp(),r=typeof t=="string"?t:xo,s=yc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=TE("firestore");i&&HA(s,...i)}return s}function Hc(t){if(t._terminated)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||KA(t),t._firestoreClient}function KA(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,h,d){return new yI(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,pm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
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
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(et.fromBase64String(e))}catch(n){throw new G(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ai(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:$e("string",Pt._jsonSchemaVersion),bytes:$e("string")};/**
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
 */class zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mm{constructor(e){this._methodName=e}}/**
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
 */class Zt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(Ai(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:$e("string",Zt._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class en{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ai(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new en(e.vectorValues);throw new G(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:$e("string",en._jsonSchemaVersion),vectorValues:$e("object")};/**
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
 */const GA=/^__.*__$/;class QA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Si(e,this.data,n,this.fieldTransforms)}}function _m(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ec:t})}}class Wc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return zo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(_m(this.Ec)&&GA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class JA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ia(e)}Dc(e,n,r,s=!1){return new Wc({Ec:e,methodName:n,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ym(t){const e=t._freezeSettings(),n=Ia(t._databaseId);return new JA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XA(t,e,n,r,s,i={}){const a=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Tm("Data must be an object, but it was:",a,r);const l=vm(r,a);let c,h;if(i.merge)c=new Nt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=ZA(e,p,n);if(!a.contains(_))throw new G(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);tb(d,_)||d.push(_)}c=new Nt(d),h=a.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,h=a.fieldTransforms;return new QA(new Rt(l),c,h)}function YA(t,e,n,r=!1){return Kc(n,t.Dc(r?4:3,e))}function Kc(t,e){if(Em(t=mt(t)))return Tm("Unsupported field value:",e,t),vm(t,e);if(t instanceof mm)return(function(r,s){if(!_m(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=Kc(l,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:jo(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(s.serializer,i)}}if(r instanceof Zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Mg(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof en)return(function(a,l){return{mapValue:{fields:{[ug]:{stringValue:hg},[Mo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Rc(l.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${da(r)}`)})(t,e)}function vm(t,e){const n={};return sg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,((r,s)=>{const i=Kc(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Em(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Zt||t instanceof Pt||t instanceof qe||t instanceof mm||t instanceof en)}function Tm(t,e,n){if(!Em(n)||!ng(n)){const r=da(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ZA(t,e,n){if((e=mt(e))instanceof zc)return e._internalPath;if(typeof e=="string")return Im(t,e);throw zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const eb=new RegExp("[~\\*/\\[\\]]");function Im(t,e,n){if(e.search(eb)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zc(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new G(D.INVALID_ARGUMENT,l+t+c)}function tb(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class wm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nb extends wm{data(){return super.data()}}function Gc(t,e){return typeof e=="string"?Im(t,e):e instanceof zc?e._internalPath:e._delegate._internalPath}/**
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
 */function Am(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qc{}class rb extends Qc{}function sb(t,e,...n){let r=[];e instanceof Qc&&r.push(e),r=r.concat(n),(function(i){const a=i.filter((c=>c instanceof Jc)).length,l=i.filter((c=>c instanceof Sa)).length;if(a>1||a>0&&l>0)throw new G(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Sa extends rb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sa(e,n,r)}_apply(e){const n=this._parse(e);return bm(e._query,n),new Dr(e.firestore,e.converter,Ll(e._query,n))}_parse(e){const n=ym(e.firestore);return(function(i,a,l,c,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Qf(p,d);const V=[];for(const k of p)V.push(Gf(c,i,k));_={arrayValue:{values:V}}}else _=Gf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Qf(p,d),_=YA(l,a,p,d==="in"||d==="not-in");return je.create(h,d,_)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ib(t,e,n){const r=e,s=Gc("where",t);return Sa._create(s,r,n)}class Jc extends Qc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jc(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)bm(a,c),a=Ll(a,c)})(e._query,n),new Dr(e.firestore,e.converter,Ll(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gf(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new G(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vg(e)&&n.indexOf("/")!==-1)throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!Y.isDocumentKey(r))throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uf(t,new Y(r))}if(n instanceof qe)return uf(t,n._key);throw new G(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${da(n)}.`)}function Qf(t,e){if(!Array.isArray(t)||t.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bm(t,e){const n=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ob{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Mo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Le(a.doubleValue)));return new en(i)}convertGeoPoint(e){return new Zt(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ma(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ae($g(r),9688,{name:e});const s=new fi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ab(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vr extends wm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vr._jsonSchemaVersion="firestore/documentSnapshot/1.0",vr._jsonSchema={type:$e("string",vr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class yo extends vr{data(e={}){return super.data(e)}}class Er{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new yo(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new yo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $s(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new yo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $s(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:lb(l.type),doc:c,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ec.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:t})}}Er._jsonSchemaVersion="firestore/querySnapshot/1.0",Er._jsonSchema={type:$e("string",Er._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class Xc extends ob{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function hl(t){t=Kn(t,Dr);const e=Kn(t.firestore,mi),n=Hc(e),r=new Xc(e);return Am(t._query),qA(n,t._query).then((s=>new Er(e,r,t,s)))}function cb(t,e,n){t=Kn(t,qe);const r=Kn(t.firestore,mi),s=ab(t.converter,e);return hb(r,[XA(ym(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yn.none())])}function ub(t,...e){var n,r,s;t=mt(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Kf(e[a])||(i=e[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Kf(e[a])){const p=e[a];e[a]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof qe)h=Kn(t.firestore,mi),d=Sc(t._key.path),c={next:p=>{e[a]&&e[a](fb(h,t,p))},error:e[a+1],complete:e[a+2]};else{const p=Kn(t,Dr);h=Kn(p.firestore,mi),d=p._query;const _=new Xc(h);c={next:b=>{e[a]&&e[a](new Er(h,_,p,b))},error:e[a+1],complete:e[a+2]},Am(t._query)}return(function(_,b,V,k){const O=new fm(k),J=new rm(b,O,V);return _.asyncQueue.enqueueAndForget((async()=>tm(await Gl(_),J))),()=>{O.Ou(),_.asyncQueue.enqueueAndForget((async()=>nm(await Gl(_),J)))}})(Hc(h),d,l,c)}function hb(t,e){return(function(r,s){const i=new Wn;return r.asyncQueue.enqueueAndForget((async()=>kA(await $A(r),s,i))),i.promise})(Hc(t),e)}function fb(t,e,n){const r=n.docs.get(e._key),s=new Xc(t);return new vr(t,s,e._key,r,new $s(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ds=s})(fs),rs(new wr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new mi(new eI(r.getProvider("auth-internal")),new rI(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Hn(Qh,Jh,e),Hn(Qh,Jh,"esm2017")})();const db={apiKey:"AIzaSyBA6rhFMWpWbwHRDtXzqpzX2PNYqNvbw98",authDomain:"beverageshop-gordokyl.firebaseapp.com",projectId:"beverageshop-gordokyl",storageBucket:"beverageshop-gordokyl.firebasestorage.app",messagingSenderId:"937775947040",appId:"1:937775947040:web:3ffb6c58fea52fd10c0b45",measurementId:"G-WEV64X1GMW"},pb=$p(db),Ms=WA(pb),gb=oE("BeverageStore",{state:()=>({temps:Mh,currentTemp:Mh[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",user:null,unsubscribe:null}),actions:{async init(){try{const[t,e,n]=await Promise.all([hl(io(Ms,"bases")),hl(io(Ms,"creamers")),hl(io(Ms,"syrups"))]);this.bases=t.docs.map(r=>({id:r.id,...r.data()})),this.creamers=e.docs.map(r=>({id:r.id,...r.data()})),this.syrups=n.docs.map(r=>({id:r.id,...r.data()})),this.bases.length>0&&(this.currentBase=this.bases[0]),this.creamers.length>0&&(this.currentCreamer=this.creamers[0]),this.syrups.length>0&&(this.currentSyrup=this.syrups[0])}catch(t){console.error("Error initializing:",t)}},setUser(t){if(this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.user=t,t){const e=sb(io(Ms,"beverages"),ib("userId","==",t.uid));this.unsubscribe=ub(e,n=>{this.beverages=n.docs.map(r=>r.data())})}else this.beverages=[]},async makeBeverage(){if(!this.user)return"No user logged in, please sign in first.";if(!this.currentName||!this.currentBase||!this.currentCreamer||!this.currentSyrup)return"Please complete all beverage options and the name before making a beverage.";const t=Date.now().toString(),e={id:t,userId:this.user.uid,name:this.currentName,temp:this.currentTemp,base:this.currentBase,creamer:this.currentCreamer,syrup:this.currentSyrup};try{return await cb(zA(Ms,"beverages",t),e),`Beverage ${this.currentName} made successfully!`}catch{return"Error saving beverage."}},showBeverage(t){this.currentTemp=t.temp,this.currentBase=t.base,this.currentCreamer=t.creamer,this.currentSyrup=t.syrup,this.currentName=t.name}}}),Nr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},mb={},_b={class:"carafe"};function yb(t,e){return de(),Ie("div",_b,[co(t.$slots,"top",{},void 0,!0),co(t.$slots,"mid",{},void 0,!0),co(t.$slots,"bottom",{},void 0,!0)])}const vb=Nr(mb,[["render",yb],["__scopeId","data-v-43d2bfc5"]]),Eb={},Tb={class:"mug"};function Ib(t,e){return de(),Ie("div",Tb,[co(t.$slots,"default")])}const wb=Nr(Eb,[["render",Ib]]),Ab=Ei({__name:"Syrup",props:{syrup:{}},setup(t){const e=t,n=Ut(()=>e.syrup),r=Ut(()=>{var s;return{backgroundColor:((s=n.value)==null?void 0:s.color)||"transparent"}});return(s,i)=>(de(),Ie("div",{class:"syrup",style:us(r.value)},null,4))}}),bb=Nr(Ab,[["__scopeId","data-v-50c3a11b"]]),Sb=Ei({__name:"Base",props:{base:{}},setup(t){const e=t,n=Ut(()=>e.base),r=Ut(()=>{var s;return{backgroundColor:((s=n.value)==null?void 0:s.color)||"transparent"}});return(s,i)=>(de(),Ie("div",{class:"baseBeverage",style:us(r.value)},null,4))}}),Rb=Nr(Sb,[["__scopeId","data-v-7b01a0e5"]]),Pb={class:"froth"},Cb=Ei({__name:"Creamer",props:{creamer:{}},setup(t){const e=t,n=Ut(()=>e.creamer),r=Ut(()=>{var s;return{backgroundColor:((s=n.value)==null?void 0:s.color)||"transparent"}});return(s,i)=>(de(),Ie("div",Pb,[(de(),Ie(Fe,null,Mn(5,a=>oe("div",{key:a,class:"foam",style:us(r.value)},null,4)),64))]))}}),Vb=Nr(Cb,[["__scopeId","data-v-fe7699f2"]]),kb={},Db={id:"steam"},Nb={class:"stream"};function Ob(t,e){return de(),Ie("div",Db,[(de(),Ie(Fe,null,Mn(3,()=>oe("div",Nb)),64))])}const xb=Nr(kb,[["render",Ob]]),Mb={},Lb={id:"condensation"},Fb={class:"flake"};function Ub(t,e){return de(),Ie("div",Lb,[(de(),Ie(Fe,null,Mn(3,()=>oe("div",Fb)),64))])}const Bb=Nr(Mb,[["render",Ub]]),jb=Ei({__name:"Beverage",props:{isIced:{type:Boolean},base:{},creamer:{},syrup:{}},setup(t){const e=t,n=Ut(()=>{var s;return((s=e.creamer)==null?void 0:s.id)!=="c1"}),r=Ut(()=>{var s;return((s=e.syrup)==null?void 0:s.id)!=="s1"});return(s,i)=>(de(),Ln(wb,null,{default:Ls(()=>[t.isIced?(de(),Ln(Bb,{key:0})):(de(),Ln(xb,{key:1})),wt(vb,null,{top:Ls(()=>[n.value?(de(),Ln(Vb,{key:0,creamer:t.creamer},null,8,["creamer"])):dr("",!0)]),mid:Ls(()=>[r.value?(de(),Ln(bb,{key:0,syrup:t.syrup},null,8,["syrup"])):dr("",!0)]),bottom:Ls(()=>[wt(Rb,{base:t.base},null,8,["base"])]),_:1})]),_:1}))}});function Yc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $b=Sm,Rm=new Ii("auth","Firebase",Sm());/**
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
 */const Wo=new mc("@firebase/auth");function qb(t,...e){Wo.logLevel<=pe.WARN&&Wo.warn(`Auth (${fs}): ${t}`,...e)}function vo(t,...e){Wo.logLevel<=pe.ERROR&&Wo.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function sn(t,...e){throw eu(t,...e)}function Lt(t,...e){return eu(t,...e)}function Zc(t,e,n){const r=Object.assign(Object.assign({},$b()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return Zc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),Zc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rm.create(t,...e)}function se(t,e,...n){if(!t)throw eu(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Sn(t,e){t||mn(e)}/**
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
 */function Ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zb(){return Jf()==="http:"||Jf()==="https:"}function Jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Wb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zb()||CE()||"connection"in navigator)?navigator.onLine:!0}function Kb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=SE()||VE()}get(){return Wb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tu(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jb=new Vi(3e4,6e4);function nu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _s(t,e,n,r,s={}){return Cm(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=wi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return PE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(h.credentials="include"),Pm.fetch()(await Vm(t,t.config.apiHost,n,l),h)})}async function Cm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gb),e);try{const s=new Yb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw oo(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zc(t,d,h);sn(t,d)}}catch(s){if(s instanceof Pn)throw s;sn(t,"network-request-failed",{message:String(s)})}}async function Xb(t,e,n,r,s={}){const i=await _s(t,e,n,r,s);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Vm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?tu(t.config,s):`${t.config.apiScheme}://${s}`;return Qb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Yb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),Jb.get())})}}function oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Lt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Zb(t,e){return _s(t,"POST","/v1/accounts:delete",e)}async function Ko(t,e){return _s(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e0(t,e=!1){const n=mt(t),r=await n.getIdToken(e),s=ru(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(fl(s.auth_time)),issuedAtTime:ni(fl(s.iat)),expirationTime:ni(fl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fl(t){return Number(t)*1e3}function ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Op(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xf(t){const e=ru(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&t0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function t0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class n0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _i(t,Ko(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?km(i.providerUserInfo):[],l=s0(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Jl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function r0(t){const e=mt(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function km(t){return t.map(e=>{var{providerId:n}=e,r=Yc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function i0(t,e){const n=await Cm(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Vm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(c.credentials="include"),Pm.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function o0(t,e){return _s(t,"POST","/v2/accounts:revokeToken",nu(t,e))}/**
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
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Xf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await i0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Yr;return r&&(se(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Nn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e0(this,e)}reload(){return r0(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await _i(this,Zb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,J=(h=n.createdAt)!==null&&h!==void 0?h:void 0,H=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:B,isAnonymous:q,providerData:Z,stsTokenManager:I}=n;se(Q&&I,e,"internal-error");const m=Yr.fromJSON(this.name,I);se(typeof Q=="string",e,"internal-error"),Nn(p,e.name),Nn(_,e.name),se(typeof B=="boolean",e,"internal-error"),se(typeof q=="boolean",e,"internal-error"),Nn(b,e.name),Nn(V,e.name),Nn(k,e.name),Nn(O,e.name),Nn(J,e.name),Nn(H,e.name);const y=new Ot({uid:Q,auth:e,email:_,emailVerified:B,displayName:p,isAnonymous:q,photoURL:V,phoneNumber:b,tenantId:k,stsTokenManager:m,createdAt:J,lastLoginAt:H});return Z&&Array.isArray(Z)&&(y.providerData=Z.map(T=>Object.assign({},T))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yr;s.updateFromServerResponse(n);const i=new Ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Go(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?km(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yr;l.updateFromIdToken(r);const c=new Ot({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Yf=new Map;function _n(t){Sn(t instanceof Function,"Expected a class definition");let e=Yf.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yf.set(t,e),e)}/**
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
 */class Dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dm.type="NONE";const Zf=Dm;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ko(this.auth,{idToken:e}).catch(()=>{});return n?Ot._fromGetAccountInfoResponse(this.auth,n,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(_n(Zf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(Zf);const a=Eo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await Ko(e,{idToken:d}).catch(()=>{});if(!_)break;p=await Ot._fromGetAccountInfoResponse(e,_,d)}else p=Ot._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Zr(i,e,r))}}/**
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
 */function ed(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fm(e))return"Blackberry";if(Um(e))return"Webos";if(Om(e))return"Safari";if((e.includes("chrome/")||xm(e))&&!e.includes("edge/"))return"Chrome";if(Lm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nm(t=ut()){return/firefox\//i.test(t)}function Om(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xm(t=ut()){return/crios\//i.test(t)}function Mm(t=ut()){return/iemobile/i.test(t)}function Lm(t=ut()){return/android/i.test(t)}function Fm(t=ut()){return/blackberry/i.test(t)}function Um(t=ut()){return/webos/i.test(t)}function su(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a0(t=ut()){var e;return su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function l0(){return kE()&&document.documentMode===10}function Bm(t=ut()){return su(t)||Lm(t)||Um(t)||Fm(t)||/windows phone/i.test(t)||Mm(t)}/**
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
 */function jm(t,e=[]){let n;switch(t){case"Browser":n=ed(ut());break;case"Worker":n=`${ed(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class c0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function u0(t,e={}){return _s(t,"GET","/v2/passwordPolicy",nu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const h0=6;class f0{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:h0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class d0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new c0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ko(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Tr(this));const n=e?mt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await u0(this),n=new f0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await o0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ra(t){return mt(t)}class td{constructor(e){this.auth=e,this.observer=null,this.addObserver=UE(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p0(t){iu=t}function g0(t){return iu.loadJS(t)}function m0(){return iu.gapiScript}function _0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function y0(t,e){const n=yc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e??{}))return s;sn(s,"already-initialized")}return n.initialize({options:e})}function v0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function E0(t,e,n){const r=Ra(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$m(e),{host:a,port:l}=T0(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(Ir(h,r.config.emulator)&&Ir(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,hs(a)?(Fp(`${i}//${a}${c}`),Up("Auth",!0)):I0()}function $m(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function T0(t){const e=$m(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:nd(a)}}}function nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
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
 */async function es(t,e){return Xb(t,"POST","/v1/accounts:signInWithIdp",nu(t,e))}/**
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
 */const w0="http://localhost";class Sr extends qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Sr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:w0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */class ou{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ki extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends ki{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class Un extends ki{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class Bn extends ki{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),a=rd(r);return new cs({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rd(r);return new cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qo extends Pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qo(e,n,r,s)}}function Hm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,i,e,r):i})}async function A0(t,e,n=!1){const r=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",r)}/**
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
 */async function b0(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await _i(t,Hm(r,s,e,t),n);se(i.idToken,r,"internal-error");const a=ru(i.idToken);se(a,r,"internal-error");const{sub:l}=a;return se(t.uid===l,r,"user-mismatch"),cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
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
 */async function S0(t,e,n=!1){if(Dt(t.app))return Promise.reject(Tr(t));const r="signIn",s=await Hm(t,r,e),i=await cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function R0(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function P0(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function C0(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function V0(t){return mt(t).signOut()}const Jo="__sak";/**
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
 */class zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const k0=1e3,D0=10;class Wm extends zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);l0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,D0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},k0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wm.type="LOCAL";const N0=Wm;/**
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
 */class Km extends zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Km.type="SESSION";const Gm=Km;/**
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
 */function O0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await O0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class x0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=au("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function tn(){return window}function M0(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Qm(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function L0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function U0(){return Qm()?self:null}/**
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
 */const Jm="firebaseLocalStorageDb",B0=1,Xo="firebaseLocalStorage",Xm="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function j0(){const t=indexedDB.deleteDatabase(Jm);return new Di(t).toPromise()}function Xl(){const t=indexedDB.open(Jm,B0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:Xm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await j0(),e(await Xl()))})})}async function sd(t,e,n){const r=Ca(t,!0).put({[Xm]:e,value:n});return new Di(r).toPromise()}async function $0(t,e){const n=Ca(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function id(t,e){const n=Ca(t,!0).delete(e);return new Di(n).toPromise()}const q0=800,H0=3;class Ym{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(U0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await L0(),!this.activeServiceWorker)return;this.sender=new x0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xl();return await sd(e,Jo,"1"),await id(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>id(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ym.type="LOCAL";const z0=Ym;new Vi(3e4,6e4);/**
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
 */function Zm(t,e){return e?_n(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lu extends qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function W0(t){return S0(t.auth,new lu(t),t.bypassAuthState)}function K0(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),b0(n,new lu(t),t.bypassAuthState)}async function G0(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),A0(n,new lu(t),t.bypassAuthState)}/**
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
 */class e_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W0;case"linkViaPopup":case"linkViaRedirect":return G0;case"reauthViaPopup":case"reauthViaRedirect":return K0;default:sn(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Q0=new Vi(2e3,1e4);async function J0(t,e,n){if(Dt(t.app))return Promise.reject(Lt(t,"operation-not-supported-in-this-environment"));const r=Ra(t);Hb(t,e,ou);const s=Zm(r,n);return new mr(r,"signInViaPopup",e,s).executeNotNull()}class mr extends e_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q0.get())};e()}}mr.currentPopupAction=null;/**
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
 */const X0="pendingRedirect",To=new Map;class Y0 extends e_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await Z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z0(t,e){const n=nS(e),r=tS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eS(t,e){To.set(t._key(),e)}function tS(t){return _n(t._redirectPersistence)}function nS(t){return Eo(X0,t.config.apiKey,t.name)}async function rS(t,e,n=!1){if(Dt(t.app))return Promise.reject(Tr(t));const r=Ra(t),s=Zm(r,e),a=await new Y0(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const sS=600*1e3;class iS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!t_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sS&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function t_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t_(t);default:return!1}}/**
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
 */async function aS(t,e={}){return _s(t,"GET","/v1/projects",e)}/**
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
 */const lS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cS=/^https?/;async function uS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aS(t);for(const n of e)try{if(hS(n))return}catch{}sn(t,"unauthorized-domain")}function hS(t){const e=Ql(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!cS.test(n))return!1;if(lS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fS=new Vi(3e4,6e4);function ad(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dS(t){return new Promise((e,n)=>{var r,s,i;function a(){ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ad(),n(Lt(t,"network-request-failed"))},timeout:fS.get()})}if(!((s=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)a();else{const l=_0("iframefcb");return tn()[l]=()=>{gapi.load?a():n(Lt(t,"network-request-failed"))},g0(`${m0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function pS(t){return Io=Io||dS(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const gS=new Vi(5e3,15e3),mS="__/auth/iframe",_S="emulator/auth/iframe",yS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ES(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,_S):`https://${t.config.authDomain}/${mS}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=vS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function TS(t){const e=await pS(t),n=tn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:ES(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Lt(t,"network-request-failed"),l=tn().setTimeout(()=>{i(a)},gS.get());function c(){tn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const IS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wS=500,AS=600,bS="_blank",SS="http://localhost";class ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RS(t,e,n,r=wS,s=AS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},IS),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();n&&(l=xm(h)?bS:n),Nm(h)&&(e=e||SS,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[b,V])=>`${_}${b}=${V},`,"");if(a0(h)&&l!=="_self")return PS(e||"",l),new ld(null);const p=window.open(e||"",l,d);se(p,t,"popup-blocked");try{p.focus()}catch{}return new ld(p)}function PS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CS="__/auth/handler",VS="emulator/auth/handler",kS=encodeURIComponent("fac");async function cd(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof ou){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",FE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof ki){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${kS}=${encodeURIComponent(c)}`:"";return`${DS(t)}?${wi(l).slice(1)}${h}`}function DS({config:t}){return t.emulator?tu(t,VS):`https://${t.authDomain}/${CS}`}/**
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
 */const dl="webStorageSupport";class NS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gm,this._completeRedirectFn=rS,this._overrideRedirectResult=eS}async _openPopup(e,n,r,s){var i;Sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await cd(e,n,r,Ql(),s);return RS(e,a,au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cd(e,n,r,Ql(),s);return M0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TS(e),r=new iS(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dl];a!==void 0&&n(!!a),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bm()||Om()||su()}}const OS=NS;var ud="@firebase/auth",hd="1.10.8";/**
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
 */class xS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LS(t){rs(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;se(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jm(t)},h=new d0(r,s,i,c);return v0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new wr("auth-internal",e=>{const n=Ra(e.getProvider("auth").getImmediate());return(r=>new xS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(ud,hd,MS(t)),Hn(ud,hd,"esm2017")}/**
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
 */const FS=300,US=Lp("authIdTokenMaxAge")||FS;let fd=null;const BS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>US)return;const s=n==null?void 0:n.token;fd!==s&&(fd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jS(t=qp()){const e=yc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=y0(t,{popupRedirectResolver:OS,persistence:[z0,N0,Gm]}),r=Lp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=BS(i.toString());P0(n,a,()=>a(n.currentUser)),R0(n,l=>a(l))}}const s=xp("auth");return s&&E0(n,`http://${s}`),n}function $S(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}p0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$S().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LS("Browser");const qS={key:0},HS=["value"],zS=["value"],WS=["value"],KS=["value"],GS={class:"current-beverage"},QS={key:0},JS=["disabled"],XS=["disabled"],YS={key:1,class:"feedback"},ZS={class:"auth-container"},eR={key:0},tR={key:1},nR={key:0,class:"error"},rR={key:0,id:"beverage-container",class:"current-beverage"},sR={key:0},iR=["onClick"],oR={key:1},aR=Ei({__name:"App",setup(t){const e=gb(),n=jS(),r=new gn,{temps:s,bases:i,syrups:a,creamers:l,currentTemp:c,currentBase:h,currentCreamer:d,currentSyrup:p,currentName:_,beverages:b,user:V}=aE(e),k=Ao(""),O=Ao("");Zd(()=>{e.init(),C0(n,B=>{e.setUser(B)})});async function J(){try{O.value="",await J0(n,r)}catch(B){O.value="Failed to sign in: "+B.message}}async function H(){try{await V0(n),k.value=""}catch(B){console.error("Logout failed",B)}}async function Q(){const B=await e.makeBeverage();k.value=B,B.includes("successfully")&&setTimeout(()=>{k.value=""},3e3)}return(B,q)=>(de(),Ie(Fe,null,[Ee(h)?(de(),Ie("div",qS,[oe("div",null,[wt(jb,{isIced:Ee(c)==="Cold",base:Ee(h),creamer:Ee(d),syrup:Ee(p)},null,8,["isIced","base","creamer","syrup"]),oe("ul",null,[oe("li",null,[(de(!0),Ie(Fe,null,Mn(Ee(s),Z=>(de(),Ie("label",{key:Z},[Os(oe("input",{type:"radio",value:Z,"onUpdate:modelValue":q[0]||(q[0]=I=>be(c)?c.value=I:null)},null,8,HS),[[Zi,Ee(c)]]),kt(" "+Et(Z),1)]))),128))])])]),oe("div",null,[oe("ul",null,[oe("li",null,[(de(!0),Ie(Fe,null,Mn(Ee(i),Z=>(de(),Ie("label",{key:Z.id},[Os(oe("input",{type:"radio",value:Z,"onUpdate:modelValue":q[1]||(q[1]=I=>be(h)?h.value=I:null)},null,8,zS),[[Zi,Ee(h)]]),kt(" "+Et(Z.name),1)]))),128))])])]),oe("div",null,[oe("ul",null,[oe("li",null,[(de(!0),Ie(Fe,null,Mn(Ee(l),Z=>(de(),Ie("label",{key:Z.id},[Os(oe("input",{type:"radio",value:Z,"onUpdate:modelValue":q[2]||(q[2]=I=>be(d)?d.value=I:null)},null,8,WS),[[Zi,Ee(d)]]),kt(" "+Et(Z.name),1)]))),128))])])]),oe("div",null,[oe("ul",null,[oe("li",null,[(de(!0),Ie(Fe,null,Mn(Ee(a),Z=>(de(),Ie("label",{key:Z.id},[Os(oe("input",{type:"radio",value:Z,"onUpdate:modelValue":q[3]||(q[3]=I=>be(p)?p.value=I:null)},null,8,KS),[[Zi,Ee(p)]]),kt(" "+Et(Z.name),1)]))),128))])])]),oe("div",GS,[q[12]||(q[12]=oe("h2",null,"Current Beverage",-1)),Ee(h)&&Ee(p)&&Ee(d)?(de(),Ie("p",QS,[oe("b",null,Et(Ee(c)),1),q[5]||(q[5]=kt()),oe("b",null,Et(Ee(h).name),1),q[6]||(q[6]=kt(" with ",-1)),oe("b",null,Et(Ee(p).name),1),q[7]||(q[7]=kt(" and ",-1)),oe("b",null,Et(Ee(d).name),1)])):dr("",!0),oe("form",{onSubmit:Gv(Q,["prevent"])},[q[8]||(q[8]=oe("label",{for:"bname"},"Beverage Name:",-1)),Os(oe("input",{type:"text",id:"bname","onUpdate:modelValue":q[4]||(q[4]=Z=>be(_)?_.value=Z:null),disabled:!Ee(V)},null,8,JS),[[Hv,Ee(_)]]),q[9]||(q[9]=oe("br",null,null,-1)),q[10]||(q[10]=oe("br",null,null,-1)),oe("input",{type:"submit",value:"Make Beverage",disabled:!Ee(V)},null,8,XS)],32),k.value?(de(),Ie("p",YS,Et(k.value),1)):dr("",!0),q[13]||(q[13]=oe("br",null,null,-1)),oe("div",ZS,[Ee(V)?(de(),Ie("div",eR,[oe("p",null,[q[11]||(q[11]=kt("Welcome, ",-1)),oe("b",null,Et(Ee(V).displayName||Ee(V).email),1)]),oe("button",{onClick:H},"Sign Out")])):(de(),Ie("div",tR,[oe("button",{onClick:J},"Sign in with Email"),O.value?(de(),Ie("p",nR,Et(O.value),1)):dr("",!0)]))])]),q[15]||(q[15]=oe("br",null,null,-1)),Ee(V)?(de(),Ie("div",rR,[q[14]||(q[14]=oe("h2",null,"Your Saved Beverages",-1)),Ee(b).length>0?(de(),Ie("ul",sR,[(de(!0),Ie(Fe,null,Mn(Ee(b),(Z,I)=>(de(),Ie("li",{key:I},[oe("button",{onClick:m=>Ee(e).showBeverage(Z)},Et(Z.name||"Unnamed Beverage"),9,iR)]))),128))])):(de(),Ie("p",oR,"No beverages saved yet. Start brewing!"))])):dr("",!0)])):dr("",!0),q[16]||(q[16]=oe("div",{class:"tiny-talk"},[oe("h2",null,"Assignment 5 - Kyle Gordon - Brew In The Cloud"),oe("p",null,[kt("Visit the "),oe("a",{href:"https://github.com/GVSU-CIS371/assignment5-gordokyl-swimstar-1",target:"_blank"},"GitHub repo"),kt(" here.")])],-1))],64))}}),n_=eE();n_.use(fE);Xv(aR).use(n_).mount("#app");
