import{S as O,i as W,s as G,a as E,y as A,K,h as f,c as y,z as I,b as _,A as S,g as z,d as T,B as D,k as h,l as d,m as b,n as j,E as L,q as C,r as P,C as v,L as M,e as q,u as J}from"../chunks/index.f32e5af7.js";import{I as Q}from"../chunks/Image.e84196af.js";/* empty css                                                   */import{R as U,C as B}from"../chunks/Row.163d0efa.js";import"../chunks/Offcanvas.svelte_svelte_type_style_lang.8f08610b.js";const X=async({fetch:i})=>({posts:await(await i("/api")).json()}),re=Object.freeze(Object.defineProperty({__proto__:null,load:X},Symbol.toStringTag,{value:"Module"}));function F(i,o,l){const s=i.slice();return s[3]=o[l],s}function Y(i){let o,l,s;return l=new Q({props:{css:"default",fileName:"goneFishing.jpg",alt:"A painting by Eunice depicting a woman sitting on the side of a cliff fishing in turbulent waters.",description:"'Gone Fishing' | 2020 "}}),{c(){o=h("div"),A(l.$$.fragment),this.h()},l(e){o=d(e,"DIV",{class:!0});var t=b(o);I(l.$$.fragment,t),t.forEach(f),this.h()},h(){j(o,"class","side-image")},m(e,t){_(e,o,t),S(l,o,null),s=!0},p:L,i(e){s||(z(l.$$.fragment,e),s=!0)},o(e){T(l.$$.fragment,e),s=!1},d(e){e&&f(o),D(l)}}}function H(i){let o,l,s=i[3].title+"",e,t,n,p;return{c(){o=h("div"),l=h("a"),e=C(s),n=E(),p=h("br"),this.h()},l(r){o=d(r,"DIV",{});var u=b(o);l=d(u,"A",{href:!0,class:!0});var w=b(l);e=P(w,s),w.forEach(f),u.forEach(f),n=y(r),p=d(r,"BR",{}),this.h()},h(){j(l,"href",t=i[3].path),j(l,"class","svelte-1t7eb4r")},m(r,u){_(r,o,u),v(o,l),v(l,e),_(r,n,u),_(r,p,u)},p(r,u){u&1&&s!==(s=r[3].title+"")&&J(e,s),u&1&&t!==(t=r[3].path)&&j(l,"href",t)},d(r){r&&f(o),r&&f(n),r&&f(p)}}}function N(i){let o=i[3].tags.includes("portfolio"),l,s=o&&H(i);return{c(){s&&s.c(),l=q()},l(e){s&&s.l(e),l=q()},m(e,t){s&&s.m(e,t),_(e,l,t)},p(e,t){t&1&&(o=e[3].tags.includes("portfolio")),o?s?s.p(e,t):(s=H(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(e){s&&s.d(e),e&&f(l)}}}function Z(i){let o,l,s,e,t,n,p,r,u,w,k=i[0].posts,m=[];for(let a=0;a<k.length;a+=1)m[a]=N(F(i,k,a));return{c(){o=h("p"),l=C("Thank you for stopping by!"),s=E(),e=h("p"),t=C("Apologies for the mess. We're under construction."),n=E(),p=h("div"),r=h("p"),u=C("Here's a look back at some memorable projects - big & small. Click below"),w=E();for(let a=0;a<m.length;a+=1)m[a].c();this.h()},l(a){o=d(a,"P",{});var $=b(o);l=P($,"Thank you for stopping by!"),$.forEach(f),s=y(a),e=d(a,"P",{});var c=b(e);t=P(c,"Apologies for the mess. We're under construction."),c.forEach(f),n=y(a),p=d(a,"DIV",{class:!0});var g=b(p);r=d(g,"P",{});var V=b(r);u=P(V,"Here's a look back at some memorable projects - big & small. Click below"),V.forEach(f),w=y(g);for(let R=0;R<m.length;R+=1)m[R].l(g);g.forEach(f),this.h()},h(){j(p,"class","ramblings")},m(a,$){_(a,o,$),v(o,l),_(a,s,$),_(a,e,$),v(e,t),_(a,n,$),_(a,p,$),v(p,r),v(r,u),v(p,w);for(let c=0;c<m.length;c+=1)m[c].m(p,null)},p(a,$){if($&1){k=a[0].posts;let c;for(c=0;c<k.length;c+=1){const g=F(a,k,c);m[c]?m[c].p(g,$):(m[c]=N(g),m[c].c(),m[c].m(p,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=k.length}},d(a){a&&f(o),a&&f(s),a&&f(e),a&&f(n),a&&f(p),M(m,a)}}}function x(i){let o,l,s,e;return o=new B({props:{md:{size:6,order:2,offset:0},$$slots:{default:[Y]},$$scope:{ctx:i}}}),s=new B({props:{md:{size:6,order:1,offset:0},$$slots:{default:[Z]},$$scope:{ctx:i}}}),{c(){A(o.$$.fragment),l=E(),A(s.$$.fragment)},l(t){I(o.$$.fragment,t),l=y(t),I(s.$$.fragment,t)},m(t,n){S(o,t,n),_(t,l,n),S(s,t,n),e=!0},p(t,n){const p={};n&64&&(p.$$scope={dirty:n,ctx:t}),o.$set(p);const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),s.$set(r)},i(t){e||(z(o.$$.fragment,t),z(s.$$.fragment,t),e=!0)},o(t){T(o.$$.fragment,t),T(s.$$.fragment,t),e=!1},d(t){D(o,t),t&&f(l),D(s,t)}}}function ee(i){let o,l,s;return l=new U({props:{$$slots:{default:[x]},$$scope:{ctx:i}}}),{c(){o=E(),A(l.$$.fragment),this.h()},l(e){K("svelte-wdlemp",document.head).forEach(f),o=y(e),I(l.$$.fragment,e),this.h()},h(){document.title="Portfolio"},m(e,t){_(e,o,t),S(l,e,t),s=!0},p(e,[t]){const n={};t&65&&(n.$$scope={dirty:t,ctx:e}),l.$set(n)},i(e){s||(z(l.$$.fragment,e),s=!0)},o(e){T(l.$$.fragment,e),s=!1},d(e){e&&f(o),D(l,e)}}}function te(i,o,l){let{data:s}=o;const e=s.posts.map(t=>t.tags).reduce((t,n)=>[...t,...n]);return[...new Set(e)].sort(),i.$$set=t=>{"data"in t&&l(0,s=t.data)},[s]}class ie extends O{constructor(o){super(),W(this,o,te,ee,G,{data:0})}}export{ie as component,re as universal};
