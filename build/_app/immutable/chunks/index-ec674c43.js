function v(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function T(){return Object.create(null)}function p(t){t.forEach(O)}function P(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function R(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(W(n,e))}function at(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,o){if(r){const c=q(n,e,i,o);t.p(c,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function pt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function yt(t){return t??""}let w=!1;function G(){w=!0}function I(){w=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const l=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:J(1,r,g=>n[e[g]].claim_order,l))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const o=[],c=[];let u=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(o.push(n[s-1]);u>=s;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[s],a)}}function Q(t,n){if(w){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function bt(){return j(" ")}function $t(){return j("")}function Et(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function X(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:X(t,i,n[i])}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){Z(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function tt(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function wt(t,n,e){return tt(t,n,e,V)}function nt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Nt(t){return nt(t," ")}function kt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function et(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function jt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Ct(t,n){return new t(n)}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function St(t){y().$$.on_mount.push(t)}function Tt(t){y().$$.after_update.push(t)}function Dt(){const t=y();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=et(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Mt(t,n){return y().$$.context.set(t,n),n}function Ot(t){return y().$$.context.get(t)}function Pt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],D=[],$=[],M=[],H=Promise.resolve();let k=!1;function L(){k||(k=!0,H.then(z))}function qt(){return L(),H}function A(t){$.push(t)}const N=new Set;let b=0;function z(){const t=m;do{for(;b<d.length;){const n=d[b];b++,h(n),it(n.$$)}for(h(null),d.length=0,b=0;D.length;)D.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];N.has(e)||(N.add(e),e())}$.length=0}while(d.length);for(;M.length;)M.pop()();k=!1,N.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const E=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function Ht(){_.r||p(_.c),_=_.p}function rt(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function zt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],u=n[o];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(e[s]=u[s],r[s]=1);t[o]=u}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t){t&&t.c()}function Wt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(O).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(A)}function st(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(d.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,o,c,u=[-1]){const s=m;h(t);const l=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:n.target||s.$$.root};c&&c(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...C)=>{const S=C.length?C[0]:g;return l.ctx&&r(l.ctx[f],l.ctx[f]=S)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](S),a&&ot(t,f)),g}):[],l.update(),a=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){G();const f=Y(n.target);l.fragment&&l.fragment.l(f),f.forEach(U)}else l.fragment&&l.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),I(),z()}h(s)}class It{$destroy(){st(this,1),this.$destroy=v}$on(n,e){if(!P(e))return v;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!R(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{qt as A,v as B,Q as C,Et as D,p as E,at as F,dt as G,ht as H,_t as I,yt as J,lt as K,F as L,vt as M,zt as N,pt as O,mt as P,D as Q,Pt as R,It as S,Ft as T,Mt as U,Dt as V,Ot as W,ft as X,jt as Y,xt as Z,bt as a,gt as b,Nt as c,Ht as d,$t as e,rt as f,Bt as g,U as h,Gt as i,Tt as j,V as k,wt as l,Y as m,X as n,St as o,At as p,j as q,nt as r,ut as s,Lt as t,kt as u,Ct as v,Rt as w,Wt as x,ct as y,st as z};
