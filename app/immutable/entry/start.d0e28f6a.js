import{o as ve,t as be}from"../chunks/index.f32e5af7.js";import{w as Re}from"../chunks/index.f9e1eda8.js";function ot(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function it(e){return e.split("%25").map(decodeURI).join("%25")}function st(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const ct=["href","pathname","search","searchParams","toString","toJSON"];function lt(e,n){const i=new URL(e);for(const o of ct)Object.defineProperty(i,o,{get(){return n(),e[o]},enumerable:!0,configurable:!0});return ft(i),i}function ft(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ut="/__data.json";function dt(e){return e.replace(/\/$/,"")+ut}function pt(...e){let n=5381;for(const i of e)if(typeof i=="string"){let o=i.length;for(;o;)n=n*33^i.charCodeAt(--o)}else if(ArrayBuffer.isView(i)){const o=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let d=o.length;for(;d;)n=n*33^o[--d]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const Xe=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&re.delete(Ie(e)),Xe(e,n));const re=new Map;function ht(e){const n=atob(e),i=new Uint8Array(n.length);for(let o=0;o<n.length;o++)i[o]=n.charCodeAt(o);return i.buffer}function gt(e,n){const i=Ie(e,n),o=document.querySelector(i);if(o!=null&&o.textContent){let{body:d,...f}=JSON.parse(o.textContent);const m=o.getAttribute("data-ttl");return m&&re.set(i,{body:d,init:f,ttl:1e3*Number(m)}),o.getAttribute("data-b64")!==null&&(d=ht(d)),Promise.resolve(new Response(d,f))}return window.fetch(e,n)}function mt(e,n,i){if(re.size>0){const o=Ie(e,i),d=re.get(o);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(d.body,d.init);re.delete(o)}}return window.fetch(n,i)}function Ie(e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const d=[];n.headers&&d.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&d.push(n.body),o+=`[data-hash="${pt(...d)}"]`}return o}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function wt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${vt(e).map(o=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(d)return n.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return n.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const m=o.split(/\[(.+?)\](?!\])/);return"/"+m.map((p,_)=>{if(_%2){if(p.startsWith("x+"))return Ee(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return Ee(String.fromCharCode(...p.slice(2).split("-").map(P=>parseInt(P,16))));const h=_t.exec(p);if(!h)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,$,A,D]=h;return n.push({name:A,matcher:D,optional:!!N,rest:!!$,chained:$?_===1&&m[0]==="":!1}),$?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return Ee(p)}).join("")}).join("")}/?$`),params:n}}function yt(e){return!/^\([^)]+\)$/.test(e)}function vt(e){return e.slice(1).split("/").filter(yt)}function bt(e,n,i){const o={},d=e.slice(1),f=d.filter(c=>c!==void 0);let m=0;for(let c=0;c<n.length;c+=1){const p=n[c];let _=d[c-m];if(p.chained&&p.rest&&m&&(_=d.slice(c-m,c+1).filter(h=>h).join("/"),m=0),_===void 0){p.rest&&(o[p.name]="");continue}if(!p.matcher||i[p.matcher](_)){o[p.name]=_;const h=n[c+1],N=d[c+1];h&&!h.rest&&h.optional&&N&&p.chained&&(m=0),!h&&!N&&Object.keys(o).length===f.length&&(m=0);continue}if(p.optional&&p.chained){m++;continue}return}if(!m)return o}function Ee(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Et({nodes:e,server_loads:n,dictionary:i,matchers:o}){const d=new Set(n);return Object.entries(i).map(([c,[p,_,h]])=>{const{pattern:N,params:$}=wt(c),A={id:c,exec:D=>{const P=N.exec(D);if(P)return bt(P,$,o)},errors:[1,...h||[]].map(D=>e[D]),layouts:[0,..._||[]].map(m),leaf:f(p)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function f(c){const p=c<0;return p&&(c=~c),[p,e[c]]}function m(c){return c===void 0?c:[d.has(c),e[c]]}}function Ze(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Fe(e,n){const i=JSON.stringify(n);try{sessionStorage[e]=i}catch{}}var We;const F=((We=globalThis.__sveltekit_10zgvaq)==null?void 0:We.base)??"";var Ye;const kt=((Ye=globalThis.__sveltekit_10zgvaq)==null?void 0:Ye.assets)??F,St="1707184464278",Qe="sveltekit:snapshot",et="sveltekit:scroll",q="sveltekit:index",de={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},pe=location.origin;function Me(e){let n=e.baseURI;if(!n){const i=e.getElementsByTagName("base");n=i.length?i[0].href:e.URL}return n}function ne(){return{x:pageXOffset,y:pageYOffset}}function Y(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ge={...de,"":de.hover};function tt(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=tt(e)}}function ke(e,n){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,d=!i||!!o||ue(i,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(i==null?void 0:i.origin)===pe&&e.hasAttribute("download");return{url:i,external:d,target:o,download:f}}function fe(e){let n=null,i=null,o=null,d=null,f=null,m=null,c=e;for(;c&&c!==document.documentElement;)o===null&&(o=Y(c,"preload-code")),d===null&&(d=Y(c,"preload-data")),n===null&&(n=Y(c,"keepfocus")),i===null&&(i=Y(c,"noscroll")),f===null&&(f=Y(c,"reload")),m===null&&(m=Y(c,"replacestate")),c=tt(c);function p(_){switch(_){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Ge[o??"off"],preload_data:Ge[d??"off"],keep_focus:p(n),noscroll:p(i),reload:p(f),replace_state:p(m)}}function Be(e){const n=Re(e);let i=!0;function o(){i=!0,n.update(m=>m)}function d(m){i=!1,n.set(m)}function f(m){let c;return n.subscribe(p=>{(c===void 0||i&&p!==c)&&m(c=p)})}return{notify:o,set:d,subscribe:f}}function At(){const{set:e,subscribe:n}=Re(!1);let i;async function o(){clearTimeout(i);try{const d=await fetch(`${kt}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!d.ok)return!1;const m=(await d.json()).version!==St;return m&&(e(!0),clearTimeout(i)),m}catch{return!1}}return{subscribe:n,check:o}}function ue(e,n){return e.origin!==pe||!e.pathname.startsWith(n)}const Rt=-1,It=-2,Lt=-3,Ut=-4,Ot=-5,xt=-6;function Pt(e,n){if(typeof e=="number")return d(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,o=Array(i.length);function d(f,m=!1){if(f===Rt)return;if(f===Lt)return NaN;if(f===Ut)return 1/0;if(f===Ot)return-1/0;if(f===xt)return-0;if(m)throw new Error("Invalid input");if(f in o)return o[f];const c=i[f];if(!c||typeof c!="object")o[f]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const p=c[0],_=n==null?void 0:n[p];if(_)return o[f]=_(d(c[1]));switch(p){case"Date":o[f]=new Date(c[1]);break;case"Set":const h=new Set;o[f]=h;for(let A=1;A<c.length;A+=1)h.add(d(c[A]));break;case"Map":const N=new Map;o[f]=N;for(let A=1;A<c.length;A+=2)N.set(d(c[A]),d(c[A+1]));break;case"RegExp":o[f]=new RegExp(c[1],c[2]);break;case"Object":o[f]=Object(c[1]);break;case"BigInt":o[f]=BigInt(c[1]);break;case"null":const $=Object.create(null);o[f]=$;for(let A=1;A<c.length;A+=2)$[c[A]]=d(c[A+1]);break;default:throw new Error(`Unknown type ${p}`)}}else{const p=new Array(c.length);o[f]=p;for(let _=0;_<c.length;_+=1){const h=c[_];h!==It&&(p[_]=d(h))}}else{const p={};o[f]=p;for(const _ in c){const h=c[_];p[_]=d(h)}}return o[f]}return d(0)}function Nt(e){return e.filter(n=>n!=null)}const nt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...nt];const Tt=new Set([...nt]);[...Tt];async function jt(e,n){var i;for(const o in e)if(typeof((i=e[o])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([d,f])=>[d,await f])));return e}class ae{constructor(n,i){this.status=n,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class He{constructor(n,i){this.status=n,this.location=i}}class $t extends Error{constructor(n){super(),this.status=404,this.message=`Not found: ${n}`}}const Ct="x-sveltekit-invalidated",Dt="x-sveltekit-trailing-slash";function Vt(e){e.client}const z={url:Be({}),page:Be({}),navigating:Re(null),updated:At()},H=Ze(et)??{},te=Ze(Qe)??{};function Se(e){H[e]=ne()}function J(e){return location.href=e.href,new Promise(()=>{})}function qt(e,n){var De;const i=Et(e),o=e.nodes[0],d=e.nodes[1];o(),d();const f=document.documentElement,m=[],c=[];let p=null;const _={before_navigate:[],on_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},N=!1,$=!1,A=!0,D=!1,P=!1,C=!1,K=!1,M,x=(De=history.state)==null?void 0:De[q];x||(x=Date.now(),history.replaceState({...history.state,[q]:x},"",location.href));const he=H[x];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let G,W,X;async function Le(){if(X=X||Promise.resolve(),await X,!X)return;X=null;const t=new URL(location.href),l=Q(t,!0);p=null;const a=W={},s=l&&await _e(l);if(a===W&&s){if(s.type==="redirect")return oe(new URL(s.location,t).href,{},1,a);s.props.page!==void 0&&(G=s.props.page),M.$set(s.props)}}function Ue(t){c.some(l=>l==null?void 0:l.snapshot)&&(te[t]=c.map(l=>{var a;return(a=l==null?void 0:l.snapshot)==null?void 0:a.capture()}))}function Oe(t){var l;(l=te[t])==null||l.forEach((a,s)=>{var r,u;(u=(r=c[s])==null?void 0:r.snapshot)==null||u.restore(a)})}function xe(){Se(x),Fe(et,H),Ue(x),Fe(Qe,te)}async function oe(t,{noScroll:l=!1,replaceState:a=!1,keepFocus:s=!1,state:r={},invalidateAll:u=!1},g,v){return typeof t=="string"&&(t=new URL(t,Me(document))),le({url:t,scroll:l?ne():null,keepfocus:s,redirect_count:g,details:{state:r,replaceState:a},nav_token:v,accepted:()=>{u&&(K=!0)},blocked:()=>{},type:"goto"})}async function Pe(t){return p={id:t.id,promise:_e(t).then(l=>(l.type==="loaded"&&l.state.error&&(p=null),l))},p.promise}async function ie(...t){const a=i.filter(s=>t.some(r=>s.exec(r))).map(s=>Promise.all([...s.layouts,s.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(a)}function Ne(t){var s;h=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),G=t.props.page,M=new e.root({target:n,props:{...t.props,stores:z,components:c},hydrate:!0}),Oe(x);const a={from:null,to:{params:h.params,route:{id:((s=h.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};_.after_navigate.forEach(r=>r(a)),$=!0}async function Z({url:t,params:l,branch:a,status:s,error:r,route:u,form:g}){let v="never";for(const y of a)(y==null?void 0:y.slash)!==void 0&&(v=y.slash);t.pathname=ot(t.pathname,v),t.search=t.search;const E={type:"loaded",state:{url:t,params:l,branch:a,error:r,route:u},props:{constructors:Nt(a).map(y=>y.node.component)}};g!==void 0&&(E.props.form=g);let b={},L=!G,R=0;for(let y=0;y<Math.max(a.length,h.branch.length);y+=1){const w=a[y],O=h.branch[y];(w==null?void 0:w.data)!==(O==null?void 0:O.data)&&(L=!0),w&&(b={...b,...w.data},L&&(E.props[`data_${R}`]=b),R+=1)}return(!h.url||t.href!==h.url.href||h.error!==r||g!==void 0&&g!==G.form||L)&&(E.props.page={error:r,params:l,route:{id:(u==null?void 0:u.id)??null},status:s,url:new URL(t),form:g??null,data:L?b:G.data}),E}async function ge({loader:t,parent:l,url:a,params:s,route:r,server_data_node:u}){var b,L,R;let g=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((b=E.universal)!=null&&b.load){let U=function(...w){for(const O of w){const{href:T}=new URL(O,a);v.dependencies.add(T)}};const y={route:new Proxy(r,{get:(w,O)=>(v.route=!0,w[O])}),params:new Proxy(s,{get:(w,O)=>(v.params.add(O),w[O])}),data:(u==null?void 0:u.data)??null,url:lt(a,()=>{v.url=!0}),async fetch(w,O){let T;w instanceof Request?(T=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):T=w;const V=new URL(T,a);return U(V.href),V.origin===a.origin&&(T=V.href.slice(a.origin.length)),$?mt(T,V.href,O):gt(T,O)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,l()}};g=await E.universal.load.call(null,y)??null,g=g?await jt(g,r.id):null}return{node:E,loader:t,server:u,universal:(L=E.universal)!=null&&L.load?{type:"data",data:g,uses:v}:null,data:g??(u==null?void 0:u.data)??null,slash:a.pathname===F||a.pathname===F+"/"?"always":((R=E.universal)==null?void 0:R.trailingSlash)??(u==null?void 0:u.slash)}}function Te(t,l,a,s,r){if(K)return!0;if(!s)return!1;if(s.parent&&t||s.route&&l||s.url&&a)return!0;for(const u of s.params)if(r[u]!==h.params[u])return!0;for(const u of s.dependencies)if(m.some(g=>g(new URL(u))))return!0;return!1}function me(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function _e({id:t,invalidating:l,url:a,params:s,route:r}){if((p==null?void 0:p.id)===t)return p.promise;const{errors:u,layouts:g,leaf:v}=r,E=[...g,v];u.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const L=h.url?t!==h.url.pathname+h.url.search:!1,R=h.route?r.id!==h.route.id:!1;let U=!1;const y=E.map((k,I)=>{var B;const S=h.branch[I],j=!!(k!=null&&k[0])&&((S==null?void 0:S.loader)!==k[1]||Te(U,R,L,(B=S.server)==null?void 0:B.uses,s));return j&&(U=!0),j});if(y.some(Boolean)){try{b=await Je(a,y)}catch(k){return se({status:k instanceof ae?k.status:500,error:await ee(k,{url:a,params:s,route:{id:r.id}}),url:a,route:r})}if(b.type==="redirect")return b}const w=b==null?void 0:b.nodes;let O=!1;const T=E.map(async(k,I)=>{var we;if(!k)return;const S=h.branch[I],j=w==null?void 0:w[I];if((!j||j.type==="skip")&&k[1]===(S==null?void 0:S.loader)&&!Te(O,R,L,(we=S.universal)==null?void 0:we.uses,s))return S;if(O=!0,(j==null?void 0:j.type)==="error")throw j;return ge({loader:k[1],url:a,params:s,route:r,parent:async()=>{var qe;const Ve={};for(let ye=0;ye<I;ye+=1)Object.assign(Ve,(qe=await T[ye])==null?void 0:qe.data);return Ve},server_data_node:me(j===void 0&&k[0]?{type:"skip"}:j??null,k[0]?S==null?void 0:S.server:void 0)})});for(const k of T)k.catch(()=>{});const V=[];for(let k=0;k<E.length;k+=1)if(E[k])try{V.push(await T[k])}catch(I){if(I instanceof He)return{type:"redirect",location:I.location};let S=500,j;if(w!=null&&w.includes(I))S=I.status??S,j=I.error;else if(I instanceof ae)S=I.status,j=I.body;else{if(await z.updated.check())return await J(a);j=await ee(I,{params:s,url:a,route:{id:r.id}})}const B=await je(k,V,u);return B?await Z({url:a,params:s,branch:V.slice(0,B.idx).concat(B.node),status:S,error:j,route:r}):await Ce(a,{id:r.id},j,S)}else V.push(void 0);return await Z({url:a,params:s,branch:V,status:200,error:null,route:r,form:l?void 0:null})}async function je(t,l,a){for(;t--;)if(a[t]){let s=t;for(;!l[s];)s-=1;try{return{idx:s+1,node:{node:await a[t](),loader:a[t],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:t,error:l,url:a,route:s}){const r={};let u=null;if(e.server_loads[0]===0)try{const b=await Je(a,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;u=b.nodes[0]??null}catch{(a.origin!==pe||a.pathname!==location.pathname||N)&&await J(a)}const v=await ge({loader:o,url:a,params:r,route:s,parent:()=>Promise.resolve({}),server_data_node:me(u)}),E={node:await d(),loader:d,universal:null,server:null,data:null};return await Z({url:a,params:r,branch:[v,E],status:t,error:l,route:null})}function Q(t,l){if(ue(t,F))return;const a=ce(t);for(const s of i){const r=s.exec(a);if(r)return{id:t.pathname+t.search,invalidating:l,route:s,params:st(r),url:t}}}function ce(t){return it(t.pathname.slice(F.length)||"/")}function $e({url:t,type:l,intent:a,delta:s}){let r=!1;const u=Ke(h,a,t,l);s!==void 0&&(u.navigation.delta=s);const g={...u.navigation,cancel:()=>{r=!0,u.reject(new Error("navigation was cancelled"))}};return P||_.before_navigate.forEach(v=>v(g)),r?null:u}async function le({url:t,scroll:l,keepfocus:a,redirect_count:s,details:r,type:u,delta:g,nav_token:v={},accepted:E,blocked:b}){var T,V,k;const L=Q(t,!1),R=$e({url:t,type:u,delta:g,intent:L});if(!R){b();return}const U=x;E(),P=!0,$&&z.navigating.set(R.navigation),W=v;let y=L&&await _e(L);if(!y){if(ue(t,F))return await J(t);y=await Ce(t,{id:null},await ee(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(L==null?void 0:L.url)||t,W!==v)return R.reject(new Error("navigation was aborted")),!1;if(y.type==="redirect")if(s>=20)y=await se({status:500,error:await ee(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return oe(new URL(y.location,t).href,{},s+1,v),!1;else((T=y.props.page)==null?void 0:T.status)>=400&&await z.updated.check()&&await J(t);if(m.length=0,K=!1,D=!0,Se(U),Ue(U),(V=y.props.page)!=null&&V.url&&y.props.page.url.pathname!==t.pathname&&(t.pathname=(k=y.props.page)==null?void 0:k.url.pathname),r){const I=r.replaceState?0:1;if(r.state[q]=x+=I,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let S=x+1;for(;te[S]||H[S];)delete te[S],delete H[S],S+=1}}if(p=null,$){h=y.state,y.props.page&&(y.props.page.url=t);const I=(await Promise.all(_.on_navigate.map(S=>S(R.navigation)))).filter(S=>typeof S=="function");if(I.length>0){let S=function(){_.after_navigate=_.after_navigate.filter(j=>!I.includes(j))};I.push(S),_.after_navigate.push(...I)}M.$set(y.props)}else Ne(y);const{activeElement:w}=document;if(await be(),A){const I=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==w&&document.activeElement!==document.body;!a&&!O&&Ae(),A=!0,y.props.page&&(G=y.props.page),P=!1,u==="popstate"&&Oe(x),R.fulfil(void 0),_.after_navigate.forEach(I=>I(R.navigation)),z.navigating.set(null),D=!1}async function Ce(t,l,a,s){return t.origin===pe&&t.pathname===location.pathname&&!N?await se({status:s,error:a,url:t,route:l}):await J(t)}function rt(){let t;f.addEventListener("mousemove",u=>{const g=u.target;clearTimeout(t),t=setTimeout(()=>{s(g,2)},20)});function l(u){s(u.composedPath()[0],1)}f.addEventListener("mousedown",l),f.addEventListener("touchstart",l,{passive:!0});const a=new IntersectionObserver(u=>{for(const g of u)g.isIntersecting&&(ie(ce(new URL(g.target.href))),a.unobserve(g.target))},{threshold:0});function s(u,g){const v=ze(u,f);if(!v)return;const{url:E,external:b,download:L}=ke(v,F);if(b||L)return;const R=fe(v);if(!R.reload)if(g<=R.preload_data){const U=Q(E,!1);U&&Pe(U)}else g<=R.preload_code&&ie(ce(E))}function r(){a.disconnect();for(const u of f.querySelectorAll("a")){const{url:g,external:v,download:E}=ke(u,F);if(v||E)continue;const b=fe(u);b.reload||(b.preload_code===de.viewport&&a.observe(u),b.preload_code===de.eager&&ie(ce(g)))}}_.after_navigate.push(r),r()}function ee(t,l){return t instanceof ae?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id===null&&t instanceof $t?"Not Found":"Internal Error"}}return{after_navigate:t=>{ve(()=>(_.after_navigate.push(t),()=>{const l=_.after_navigate.indexOf(t);_.after_navigate.splice(l,1)}))},before_navigate:t=>{ve(()=>(_.before_navigate.push(t),()=>{const l=_.before_navigate.indexOf(t);_.before_navigate.splice(l,1)}))},on_navigate:t=>{ve(()=>(_.on_navigate.push(t),()=>{const l=_.on_navigate.indexOf(t);_.on_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(D||!$)&&(A=!1)},goto:(t,l={})=>oe(t,l,0),invalidate:t=>{if(typeof t=="function")m.push(t);else{const{href:l}=new URL(t,location.href);m.push(a=>a.href===l)}return Le()},invalidate_all:()=>(K=!0,Le()),preload_data:async t=>{const l=new URL(t,Me(document)),a=Q(l,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await Pe(a)},preload_code:ie,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:a,route:s}=h;if(!s)return;const r=await je(h.branch.length,a,s.errors);if(r){const u=await Z({url:l,params:h.params,branch:a.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:s});h=u.state,M.$set(u.props),be().then(Ae)}}else t.type==="redirect"?oe(t.location,{invalidateAll:!0},0):(M.$set({form:null,page:{...G,form:t.data,status:t.status}}),await be(),M.$set({form:t.data}),t.type==="success"&&Ae())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{let s=!1;if(xe(),!P){const r=Ke(h,void 0,null,"leave"),u={...r.navigation,cancel:()=>{s=!0,r.reject(new Error("navigation was cancelled"))}};_.before_navigate.forEach(g=>g(u))}s?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),(l=navigator.connection)!=null&&l.saveData||rt(),f.addEventListener("click",a=>{var U;if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const s=ze(a.composedPath()[0],f);if(!s)return;const{url:r,external:u,target:g,download:v}=ke(s,F);if(!r)return;if(g==="_parent"||g==="_top"){if(window.parent!==window)return}else if(g&&g!=="_self")return;const E=fe(s);if(!(s instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||v)return;if(u||E.reload){$e({url:r,type:"link"})?P=!0:a.preventDefault();return}const[L,R]=r.href.split("#");if(R!==void 0&&L===location.href.split("#")[0]){if(h.url.hash===r.hash){a.preventDefault(),(U=s.ownerDocument.getElementById(R))==null||U.scrollIntoView();return}if(C=!0,Se(x),t(r),!E.replace_state)return;C=!1,a.preventDefault()}le({url:r,scroll:E.noscroll?ne():null,keepfocus:E.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:E.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),f.addEventListener("submit",a=>{if(a.defaultPrevented)return;const s=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||s.method)!=="get")return;const g=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||s.action);if(ue(g,F))return;const v=a.target,{keep_focus:E,noscroll:b,reload:L,replace_state:R}=fe(v);if(L)return;a.preventDefault(),a.stopPropagation();const U=new FormData(v),y=r==null?void 0:r.getAttribute("name");y&&U.append(y,(r==null?void 0:r.getAttribute("value"))??""),g.search=new URLSearchParams(U).toString(),le({url:g,scroll:b?ne():null,keepfocus:E??!1,redirect_count:0,details:{state:{},replaceState:R??g.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var s,r;if(W={},(s=a.state)!=null&&s[q]){if(a.state[q]===x)return;const u=H[a.state[q]],g=new URL(location.href);if(((r=h.url)==null?void 0:r.href.split("#")[0])===location.href.split("#")[0]){t(g),H[x]=ne(),x=a.state[q],scrollTo(u.x,u.y);return}const v=a.state[q]-x;await le({url:g,scroll:u,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{x=a.state[q]},blocked:()=>{history.go(-v)},type:"popstate",delta:v,nav_token:W})}else if(!C){const u=new URL(location.href);t(u)}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[q]:++x},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&z.navigating.set(null)});function t(a){h.url=a,z.page.set({...G,url:a}),z.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:a,params:s,route:r,data:u,form:g})=>{N=!0;const v=new URL(location.href);({params:s={},route:r={id:null}}=Q(v,!1)||{});let E;try{const b=a.map(async(U,y)=>{const w=u[y];return w!=null&&w.uses&&(w.uses=at(w.uses)),ge({loader:e.nodes[U],url:v,params:s,route:r,parent:async()=>{const O={};for(let T=0;T<y;T+=1)Object.assign(O,(await b[T]).data);return O},server_data_node:me(w)})}),L=await Promise.all(b),R=i.find(({id:U})=>U===r.id);if(R){const U=R.layouts;for(let y=0;y<U.length;y++)U[y]||L.splice(y,0,void 0)}E=await Z({url:v,params:s,branch:L,status:t,error:l,form:g,route:R??null})}catch(b){if(b instanceof He){await J(new URL(b.location,location.href));return}E=await se({status:b instanceof ae?b.status:500,error:await ee(b,{url:v,params:s,route:r}),url:v,route:r})}Ne(E)}}}async function Je(e,n){var d;const i=new URL(e);i.pathname=dt(e.pathname),e.pathname.endsWith("/")&&i.searchParams.append(Dt,"1"),i.searchParams.append(Ct,n.map(f=>f?"1":"0").join(""));const o=await Xe(i.href);if((d=o.headers.get("content-type"))!=null&&d.includes("text/html")&&await J(e),!o.ok)throw new ae(o.status,await o.json());return new Promise(async f=>{var N;const m=new Map,c=o.body.getReader(),p=new TextDecoder;function _($){return Pt($,{Promise:A=>new Promise((D,P)=>{m.set(A,{fulfil:D,reject:P})})})}let h="";for(;;){const{done:$,value:A}=await c.read();if($&&!h)break;for(h+=!A&&h?`
`:p.decode(A);;){const D=h.indexOf(`
`);if(D===-1)break;const P=JSON.parse(h.slice(0,D));if(h=h.slice(D+1),P.type==="redirect")return f(P);if(P.type==="data")(N=P.nodes)==null||N.forEach(C=>{(C==null?void 0:C.type)==="data"&&(C.uses=at(C.uses),C.data=_(C.data))}),f(P);else if(P.type==="chunk"){const{id:C,data:K,error:M}=P,x=m.get(C);m.delete(C),M?x.reject(_(M)):x.fulfil(_(K))}}}})}function at(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ae(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,i=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),i!==null?n.setAttribute("tabindex",i):n.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const d=[];for(let f=0;f<o.rangeCount;f+=1)d.push(o.getRangeAt(f));setTimeout(()=>{if(o.rangeCount===d.length){for(let f=0;f<o.rangeCount;f+=1){const m=d[f],c=o.getRangeAt(f);if(m.commonAncestorContainer!==c.commonAncestorContainer||m.startContainer!==c.startContainer||m.endContainer!==c.endContainer||m.startOffset!==c.startOffset||m.endOffset!==c.endOffset)return}o.removeAllRanges()}})}}}function Ke(e,n,i,o){var p,_;let d,f;const m=new Promise((h,N)=>{d=h,f=N});return m.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((p=e.route)==null?void 0:p.id)??null},url:e.url},to:i&&{params:(n==null?void 0:n.params)??null,route:{id:((_=n==null?void 0:n.route)==null?void 0:_.id)??null},url:i},willUnload:!n,type:o,complete:m},fulfil:d,reject:f}}async function Gt(e,n,i){const o=qt(e,n);Vt({client:o}),i?await o._hydrate(i):o.goto(location.href,{replaceState:!0}),o._start_router()}export{Gt as start};
