import{S as ee,i as te,d as C,s as ae,bo as K,v as ne,a_ as b,bp as Q,a8 as H,a6 as k,x as v,L as I,bi as re,ab as R,q as s,a9 as S,y,z as x,N as M,ac as u,C as w,ae as U,l as d,ad as B,p as V,t as L,aj as j,P as se}from"../chunks/vendor.e8e74389.js";import{M as X}from"../chunks/MetaDescriptors.3c06201a.js";const E="src/routes/admin/+page.svelte";function Y(p){let e,o,c,l,a,n,$,q,i,t,f,h,g,W,P;const O={c:function(){e=v("a"),o=v("h2"),c=I("Unapproved Mods"),l=k(),a=v("a"),n=v("h2"),$=I("Unapproved Versions"),q=k(),i=v("a"),t=v("h2"),f=I("SML Versions"),h=k(),g=v("a"),W=v("h2"),P=I("Tag Manager"),this.h()},l:function(r){e=y(r,"A",{href:!0,class:!0});var m=x(e);o=y(m,"H2",{class:!0});var T=x(o);c=M(T,"Unapproved Mods"),T.forEach(s),m.forEach(s),l=S(r),a=y(r,"A",{href:!0,class:!0});var _=x(a);n=y(_,"H2",{class:!0});var z=x(n);$=M(z,"Unapproved Versions"),z.forEach(s),_.forEach(s),q=S(r),i=y(r,"A",{href:!0,class:!0});var D=x(i);t=y(D,"H2",{class:!0});var F=x(t);f=M(F,"SML Versions"),F.forEach(s),D.forEach(s),h=S(r),g=y(r,"A",{href:!0,class:!0});var G=x(g);W=y(G,"H2",{class:!0});var J=x(W);P=M(J,"Tag Manager"),J.forEach(s),G.forEach(s),this.h()},h:function(){u(o,"class","s-7rWotIBe7yq4"),w(o,E,15,6,381),u(e,"href",b+"/admin/unapproved-mods"),u(e,"class","text-white s-7rWotIBe7yq4"),w(e,E,14,4,316),u(n,"class","s-7rWotIBe7yq4"),w(n,E,19,6,489),u(a,"href",b+"/admin/unapproved-versions"),u(a,"class","text-white s-7rWotIBe7yq4"),w(a,E,18,4,420),u(t,"class","s-7rWotIBe7yq4"),w(t,E,23,6,594),u(i,"href",b+"/admin/sml-versions"),u(i,"class","text-white s-7rWotIBe7yq4"),w(i,E,22,4,532),u(W,"class","s-7rWotIBe7yq4"),w(W,E,27,6,691),u(g,"href",b+"/admin/tag-manager"),u(g,"class","text-white s-7rWotIBe7yq4"),w(g,E,26,4,630)},m:function(r,m){d(r,e,m),B(e,o),B(o,c),d(r,l,m),d(r,a,m),B(a,n),B(n,$),d(r,q,m),d(r,i,m),B(i,t),B(t,f),d(r,h,m),d(r,g,m),B(g,W),B(W,P)},p:se,d:function(r){r&&s(e),r&&s(l),r&&s(a),r&&s(q),r&&s(i),r&&s(h),r&&s(g)}};return C("SvelteRegisterBlock",{block:O,id:Y.name,type:"slot",source:"(14:2) <Content>",ctx:p}),O}function Z(p){let e,o;e=new Q({props:{$$slots:{default:[Y]},$$scope:{ctx:p}},$$inline:!0});const c={c:function(){H(e.$$.fragment)},l:function(a){R(e.$$.fragment,a)},m:function(a,n){U(e,a,n),o=!0},p:function(a,n){const $={};n&1&&($.$$scope={dirty:n,ctx:a}),e.$set($)},i:function(a){o||(V(e.$$.fragment,a),o=!0)},o:function(a){L(e.$$.fragment,a),o=!1},d:function(a){j(e,a)}};return C("SvelteRegisterBlock",{block:c,id:Z.name,type:"slot",source:"(13:0) <Card>",ctx:p}),c}function N(p){let e,o,c,l,a,n,$;e=new X({props:{description:"SMR Admin",title:"Admin"},$$inline:!0}),n=new K({props:{$$slots:{default:[Z]},$$scope:{ctx:p}},$$inline:!0});const q={c:function(){H(e.$$.fragment),o=k(),c=v("h1"),l=I("Admin Panel"),a=k(),H(n.$$.fragment),this.h()},l:function(t){const f=re("svelte-1y14ew6",document.head);R(e.$$.fragment,f),f.forEach(s),o=S(t),c=y(t,"H1",{class:!0});var h=x(c);l=M(h,"Admin Panel"),h.forEach(s),a=S(t),R(n.$$.fragment,t),this.h()},h:function(){u(c,"class","s-7rWotIBe7yq4"),w(c,E,10,0,271)},m:function(t,f){U(e,document.head,null),d(t,o,f),d(t,c,f),B(c,l),d(t,a,f),U(n,t,f),$=!0},p:function(t,[f]){const h={};f&1&&(h.$$scope={dirty:f,ctx:t}),n.$set(h)},i:function(t){$||(V(e.$$.fragment,t),V(n.$$.fragment,t),$=!0)},o:function(t){L(e.$$.fragment,t),L(n.$$.fragment,t),$=!1},d:function(t){j(e),t&&s(o),t&&s(c),t&&s(a),j(n,t)}};return C("SvelteRegisterBlock",{block:q,id:N.name,type:"component",source:"",ctx:p}),q}function oe(p,e,o){let{$$slots:c={},$$scope:l}=e;ne("Page",c,[]);const a=[];return Object.keys(e).forEach(n=>{!~a.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),p.$capture_state=()=>({base:b,MetaDescriptors:X,Card:K,Content:Q}),[]}class le extends ee{constructor(e){super(e),te(this,e,oe,N,ae,{}),C("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:N.name})}}export{le as component};
//# sourceMappingURL=3.9bffd778.js.map
