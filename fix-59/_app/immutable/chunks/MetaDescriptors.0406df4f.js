import{S as _,i as O,s as C,d as E,a1 as H,aj as k,a2 as I,v as L,H as P,b as $,e as y,k as b,g as w,N as l,m as M,n as m,u as S,j as f,W as x,h as Q,X as j,Q as A,Y as U}from"./vendor.31aa86e7.js";const v="src/lib/components/utils/MetaDescriptors.svelte";function D(r){let t,a,c,o,i;const d={c:function(){t=y("meta"),a=$(),c=y("meta"),o=$(),i=y("meta"),this.h()},l:function(s){t=w(s,"META",{name:!0,content:!0}),a=b(s),c=w(s,"META",{property:!0,content:!0}),o=b(s),i=w(s,"META",{property:!0,content:!0}),this.h()},h:function(){l(t,"name","description"),l(t,"content",r[0]),M(t,v,13,2,284),l(c,"property","description"),l(c,"content",r[0]),M(c,v,14,2,336),l(i,"property","og:description"),l(i,"content",r[0]),M(i,v,15,2,392)},m:function(s,n){m(s,t,n),m(s,a,n),m(s,c,n),m(s,o,n),m(s,i,n)},p:function(s,n){n&1&&l(t,"content",s[0]),n&1&&l(c,"content",s[0]),n&1&&l(i,"content",s[0])},d:function(s){s&&(f(t),f(a),f(c),f(o),f(i))}};return E("SvelteRegisterBlock",{block:d,id:D.name,type:"if",source:"(10:0) {#if description}",ctx:r}),d}function B(r){let t;const a={c:function(){t=y("meta"),this.h()},l:function(o){t=w(o,"META",{property:!0,content:!0}),this.h()},h:function(){l(t,"property","og:image"),l(t,"content",P+"/assets/favicon.ico"),M(t,v,21,2,525)},m:function(o,i){m(o,t,i)},p:S,d:function(o){o&&f(t)}};return E("SvelteRegisterBlock",{block:a,id:B.name,type:"else",source:"(18:0) {:else}",ctx:r}),a}function N(r){let t;const a={c:function(){t=y("meta"),this.h()},l:function(o){t=w(o,"META",{property:!0,content:!0}),this.h()},h:function(){l(t,"property","og:image"),l(t,"content",r[1]),M(t,v,19,2,470)},m:function(o,i){m(o,t,i)},p:function(o,i){i&2&&l(t,"content",o[1])},d:function(o){o&&f(t)}};return E("SvelteRegisterBlock",{block:a,id:N.name,type:"if",source:"(16:0) {#if image}",ctx:r}),a}function R(r){let t,a,c,o,i,d;const u={c:function(){t=y("title"),a=x(r[2]),c=x(" - SMR"),o=$(),i=y("meta"),this.h()},l:function(n){t=w(n,"TITLE",{});var p=Q(t);a=j(p,r[2]),c=j(p," - SMR"),p.forEach(f),o=b(n),i=w(n,"META",{property:!0,content:!0}),this.h()},h:function(){M(t,v,25,2,611),l(i,"property","og:title"),l(i,"content",d=r[2]+" - SMR"),M(i,v,26,2,642)},m:function(n,p){m(n,t,p),A(t,a),A(t,c),m(n,o,p),m(n,i,p)},p:function(n,p){p&4&&U(a,n[2]),p&4&&d!==(d=n[2]+" - SMR")&&l(i,"content",d)},d:function(n){n&&(f(t),f(o),f(i))}};return E("SvelteRegisterBlock",{block:u,id:R.name,type:"if",source:"(22:0) {#if title}",ctx:r}),u}function T(r){let t,a,c,o,i=r[0]&&D(r);function d(g,e){return g[1]?N:B}let u=d(r),s=u(r),n=r[2]&&R(r);const p={c:function(){i&&i.c(),t=$(),s.c(),a=$(),n&&n.c(),c=$(),o=y("meta"),this.h()},l:function(e){i&&i.l(e),t=b(e),s.l(e),a=b(e),n&&n.l(e),c=b(e),o=w(e,"META",{property:!0,content:!0}),this.h()},h:function(){l(o,"property","og:url"),l(o,"content",""+(r[3]+r[4])),M(o,v,29,0,702)},m:function(e,h){i&&i.m(e,h),m(e,t,h),s.m(e,h),m(e,a,h),n&&n.m(e,h),m(e,c,h),m(e,o,h)},p:function(e,[h]){e[0]?i?i.p(e,h):(i=D(e),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),u===(u=d(e))&&s?s.p(e,h):(s.d(1),s=u(e),s&&(s.c(),s.m(a.parentNode,a))),e[2]?n?n.p(e,h):(n=R(e),n.c(),n.m(c.parentNode,c)):n&&(n.d(1),n=null)},i:S,o:S,d:function(e){e&&(f(t),f(a),f(c),f(o)),i&&i.d(e),s.d(e),n&&n.d(e)}};return E("SvelteRegisterBlock",{block:p,id:T.name,type:"component",source:"",ctx:r}),p}function W(r,t,a){let c;H(k,"page"),I(r,k,e=>a(5,c=e));let{$$slots:o={},$$scope:i}=t;L("MetaDescriptors",o,[]);const d=c.url.origin,u=c.url.pathname;let{description:s=void 0}=t,{image:n=void 0}=t,{title:p=void 0}=t;const g=["description","image","title"];return Object.keys(t).forEach(e=>{!~g.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<MetaDescriptors> was created with unknown prop '${e}'`)}),r.$$set=e=>{"description"in e&&a(0,s=e.description),"image"in e&&a(1,n=e.image),"title"in e&&a(2,p=e.title)},r.$capture_state=()=>({page:k,base:P,baseUrl:d,route:u,description:s,image:n,title:p,$page:c}),r.$inject_state=e=>{"description"in e&&a(0,s=e.description),"image"in e&&a(1,n=e.image),"title"in e&&a(2,p=e.title)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),[s,n,p,d,u]}class Y extends _{constructor(t){super(t),O(this,t,W,T,C,{description:0,image:1,title:2}),E("SvelteRegisterComponent",{component:this,tagName:"MetaDescriptors",options:t,id:T.name})}get description(){throw new Error("<MetaDescriptors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set description(t){throw new Error("<MetaDescriptors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get image(){throw new Error("<MetaDescriptors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set image(t){throw new Error("<MetaDescriptors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get title(){throw new Error("<MetaDescriptors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(t){throw new Error("<MetaDescriptors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Y as M};
//# sourceMappingURL=MetaDescriptors.0406df4f.js.map
