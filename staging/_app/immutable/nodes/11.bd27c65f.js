import{aJ as ue,S as yt,i as Et,s as Gt,d as w,bg as tt,v as Dt,bh as et,a2 as N,a3 as M,a4 as L,p as b,t as S,a6 as H,x as y,aa as _,a0 as U,y as E,z as B,ab as O,q as $,a1 as q,a8 as C,B as G,l as I,a7 as m,ac as rt,aY as Z,af as ft,ag as $t,aI as St,ae as Bt,aL as dt,aG as Pt,aM as jt,aN as _t,aO as ct,P as le,k as at,ba as fe,n as ut,r as Ot,a9 as At,m as lt,L as j,ad as Vt,bi as Rt,bj as $e}from"../chunks/vendor.2dadc702.js";import{r as de,s as It}from"../chunks/graphql.769656ab.js";import{l as ge}from"../chunks/gql.ff9241aa.js";import{p as pt}from"../chunks/formatting.6f84ef8f.js";import{a as gt}from"../chunks/user.cdc98260.js";import{T as Tt}from"../chunks/Toast.3d7ae842.js";import{m as mt}from"../chunks/markdown.623802d0.js";import{M as Nt}from"../chunks/MetaDescriptors.c839152c.js";const pe=async({params:i,parent:t})=>({...i,...await ge({guide:ue({query:de,client:(await t()).client,variables:{guide:i.guideId}})})}),Se=Object.freeze(Object.defineProperty({__proto__:null,load:pe},Symbol.toStringTag,{value:"Module"})),it="src/lib/components/guides/GuideInfo.svelte";function Mt(i){let t,c,r,o,e,s,n,a,l=pt(i[0].created_at)+"",f,p;const d={c:function(){t=y("div"),c=y("h3"),r=_("Info"),o=U(),e=y("span"),s=y("strong"),n=_("Created:"),a=U(),f=_(l),p=y("br"),this.h()},l:function(h){t=E(h,"DIV",{class:!0});var x=B(t);c=E(x,"H3",{class:!0});var P=B(c);r=O(P,"Info"),P.forEach($),o=q(x),e=E(x,"SPAN",{});var A=B(e);s=E(A,"STRONG",{});var V=B(s);n=O(V,"Created:"),V.forEach($),a=q(A),f=O(A,l),A.forEach($),p=E(x,"BR",{}),x.forEach($),this.h()},h:function(){C(c,"class","text-2xl my-4 font-bold"),G(c,it,8,6,194),G(s,it,9,12,252),G(e,it,9,6,246),G(p,it,9,75,315),C(t,"class","text-lg"),G(t,it,7,4,166)},m:function(h,x){I(h,t,x),m(t,c),m(c,r),m(t,o),m(t,e),m(e,s),m(s,n),m(e,a),m(e,f),m(t,p)},p:function(h,x){x&1&&l!==(l=pt(h[0].created_at)+"")&&rt(f,l)},d:function(h){h&&$(t)}};return w("SvelteRegisterBlock",{block:d,id:Mt.name,type:"slot",source:"(7:2) <Content>",ctx:i}),d}function Lt(i){let t,c;t=new et({props:{$$slots:{default:[Mt]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(e){M(t.$$.fragment,e)},m:function(e,s){L(t,e,s),c=!0},p:function(e,s){const n={};s&3&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i:function(e){c||(b(t.$$.fragment,e),c=!0)},o:function(e){S(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return w("SvelteRegisterBlock",{block:r,id:Lt.name,type:"slot",source:"(6:0) <Card>",ctx:i}),r}function ht(i){let t,c;t=new tt({props:{$$slots:{default:[Lt]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(e){M(t.$$.fragment,e)},m:function(e,s){L(t,e,s),c=!0},p:function(e,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i:function(e){c||(b(t.$$.fragment,e),c=!0)},o:function(e){S(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return w("SvelteRegisterBlock",{block:r,id:ht.name,type:"component",source:"",ctx:i}),r}function me(i,t,c){let{$$slots:r={},$$scope:o}=t;Dt("GuideInfo",r,[]);let{guide:e}=t;i.$$.on_mount.push(function(){e===void 0&&!("guide"in t||i.$$.bound[i.$$.props.guide])&&console.warn("<GuideInfo> was created without expected prop 'guide'")});const s=["guide"];return Object.keys(t).forEach(n=>{!~s.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<GuideInfo> was created with unknown prop '${n}'`)}),i.$$set=n=>{"guide"in n&&c(0,e=n.guide)},i.$capture_state=()=>({Card:tt,Content:et,prettyDate:pt,guide:e}),i.$inject_state=n=>{"guide"in n&&c(0,e=n.guide)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[e]}class Ht extends yt{constructor(t){super(t),Et(this,t,me,ht,Gt,{guide:0}),w("SvelteRegisterComponent",{component:this,tagName:"GuideInfo",options:t,id:ht.name})}get guide(){throw new Error("<GuideInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set guide(t){throw new Error("<GuideInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Y="src/lib/components/guides/GuideAuthor.svelte";function Ut(i){let t,c,r,o,e,s,n,a,l,f,p,d=i[0].username+"",u,h,x,P,A;const V={c:function(){t=y("div"),c=y("h3"),r=_("Author"),o=U(),e=y("div"),s=y("div"),n=y("div"),l=U(),f=y("div"),p=y("a"),u=_(d),x=U(),P=y("div"),A=_("Writer"),this.h()},l:function(T){t=E(T,"DIV",{class:!0});var k=B(t);c=E(k,"H3",{class:!0});var D=B(c);r=O(D,"Author"),D.forEach($),o=q(k),e=E(k,"DIV",{class:!0});var X=B(e);s=E(X,"DIV",{class:!0});var v=B(s);n=E(v,"DIV",{class:!0,style:!0}),B(n).forEach($),l=q(v),f=E(v,"DIV",{class:!0});var K=B(f);p=E(K,"A",{href:!0,class:!0});var W=B(p);u=O(W,d),W.forEach($),x=q(K),P=E(K,"DIV",{});var g=B(P);A=O(g,"Writer"),g.forEach($),K.forEach($),v.forEach($),X.forEach($),k.forEach($),this.h()},h:function(){C(c,"class","text-2xl my-4 font-bold"),G(c,Y,8,6,197),C(n,"class","rounded-full bg-cover w-14 h-14"),C(n,"style",a=`background-image: url("${i[0].avatar}")`),G(n,Y,12,10,374),C(p,"href",h=Z+"/user/"+i[0].id+"/"),C(p,"class","text-yellow-500 underline"),G(p,Y,14,12,529),G(P,Y,15,12,632),C(f,"class","grid grid-flow-row"),G(f,Y,13,10,484),C(s,"class","grid grid-flow-col auto-cols-min gap-x-4"),G(s,Y,11,8,309),C(e,"class","grid auto-rows-min text-lg gap-y-4"),G(e,Y,10,6,252),C(t,"class","grid grid-flow-row gap-y-2"),G(t,Y,7,4,150)},m:function(T,k){I(T,t,k),m(t,c),m(c,r),m(t,o),m(t,e),m(e,s),m(s,n),m(s,l),m(s,f),m(f,p),m(p,u),m(f,x),m(f,P),m(P,A)},p:function(T,k){k&1&&a!==(a=`background-image: url("${T[0].avatar}")`)&&C(n,"style",a),k&1&&d!==(d=T[0].username+"")&&rt(u,d),k&1&&h!==(h=Z+"/user/"+T[0].id+"/")&&C(p,"href",h)},d:function(T){T&&$(t)}};return w("SvelteRegisterBlock",{block:V,id:Ut.name,type:"slot",source:"(7:2) <Content>",ctx:i}),V}function qt(i){let t,c;t=new et({props:{$$slots:{default:[Ut]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(e){M(t.$$.fragment,e)},m:function(e,s){L(t,e,s),c=!0},p:function(e,s){const n={};s&3&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i:function(e){c||(b(t.$$.fragment,e),c=!0)},o:function(e){S(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return w("SvelteRegisterBlock",{block:r,id:qt.name,type:"slot",source:"(6:0) <Card>",ctx:i}),r}function vt(i){let t,c;t=new tt({props:{$$slots:{default:[qt]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(e){M(t.$$.fragment,e)},m:function(e,s){L(t,e,s),c=!0},p:function(e,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i:function(e){c||(b(t.$$.fragment,e),c=!0)},o:function(e){S(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return w("SvelteRegisterBlock",{block:r,id:vt.name,type:"component",source:"",ctx:i}),r}function he(i,t,c){let{$$slots:r={},$$scope:o}=t;Dt("GuideAuthor",r,[]);let{author:e}=t;i.$$.on_mount.push(function(){e===void 0&&!("author"in t||i.$$.bound[i.$$.props.author])&&console.warn("<GuideAuthor> was created without expected prop 'author'")});const s=["author"];return Object.keys(t).forEach(n=>{!~s.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<GuideAuthor> was created with unknown prop '${n}'`)}),i.$$set=n=>{"author"in n&&c(0,e=n.author)},i.$capture_state=()=>({base:Z,Card:tt,Content:et,author:e}),i.$inject_state=n=>{"author"in n&&c(0,e=n.author)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[e]}class Ft extends yt{constructor(t){super(t),Et(this,t,he,vt,Gt,{author:0}),w("SvelteRegisterComponent",{component:this,tagName:"GuideAuthor",options:t,id:vt.name})}get author(){throw new Error("<GuideAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set author(t){throw new Error("<GuideAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:Ct}=le,F="src/routes/guide/[guideId]/+page.svelte";function xt(i){let t,c;t=new Nt({props:{description:i[1].data.getGuide.short_description,title:i[1].data.getGuide.name},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(e){M(t.$$.fragment,e)},m:function(e,s){L(t,e,s),c=!0},p:function(e,s){const n={};s&2&&(n.description=e[1].data.getGuide.short_description),s&2&&(n.title=e[1].data.getGuide.name),t.$set(n)},i:function(e){c||(b(t.$$.fragment,e),c=!0)},o:function(e){S(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return w("SvelteRegisterBlock",{block:r,id:xt.name,type:"if",source:"(44:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:i}),r}function Wt(i){let t;const c={c:function(){t=_("404")},l:function(o){t=O(o,"404")},m:function(o,e){I(o,t,e)},p:j,i:j,o:j,d:function(o){o&&$(t)}};return w("SvelteRegisterBlock",{block:c,id:Wt.name,type:"else",source:"(99:0) {:else}",ctx:i}),c}function zt(i){let t,c,r,o=i[1].data.getGuide.name+"",e,s,n,a,l,f,p,d,u,h,x,P,A,V,z,T,k=i[3]&&kt(i);f=new tt({props:{class:"h-fit",$$slots:{default:[ne]},$$scope:{ctx:i}},$$inline:!0}),u=new Ht({props:{guide:i[1].data.getGuide},$$inline:!0}),x=new Ft({props:{author:i[1].data.getGuide.user},$$inline:!0});let D=i[3]&&wt(i);function X(W){i[16](W)}let v={$$slots:{default:[ae]},$$scope:{ctx:i}};i[0]!==void 0&&(v.running=i[0]),V=new Tt({props:v,$$inline:!0}),Ot.push(()=>At(V,"running",X));const K={c:function(){t=y("div"),c=y("div"),r=y("h1"),e=_(o),s=U(),n=y("div"),k&&k.c(),a=U(),l=y("div"),N(f.$$.fragment),p=U(),d=y("div"),N(u.$$.fragment),h=U(),N(x.$$.fragment),P=U(),D&&D.c(),A=U(),N(V.$$.fragment),this.h()},l:function(g){t=E(g,"DIV",{class:!0});var R=B(t);c=E(R,"DIV",{class:!0});var Q=B(c);r=E(Q,"H1",{class:!0});var nt=B(r);e=O(nt,o),nt.forEach($),s=q(Q),n=E(Q,"DIV",{});var ot=B(n);k&&k.l(ot),ot.forEach($),Q.forEach($),a=q(R),l=E(R,"DIV",{class:!0});var J=B(l);M(f.$$.fragment,J),p=q(J),d=E(J,"DIV",{class:!0});var st=B(d);M(u.$$.fragment,st),h=q(st),M(x.$$.fragment,st),st.forEach($),J.forEach($),R.forEach($),P=q(g),D&&D.l(g),A=q(g),M(V.$$.fragment,g),this.h()},h:function(){C(r,"class","text-4xl font-bold"),G(r,F,55,6,1990),G(n,F,57,6,2061),C(c,"class","flex flex-wrap h-auto justify-between items-center"),G(c,F,54,4,1919),C(d,"class","grid grid-cols-1 auto-rows-min gap-8"),G(d,F,74,6,2690),C(l,"class","grid grid-auto-max auto-cols-fr gap-4"),G(l,F,64,4,2343),C(t,"class","grid gap-6 xlx:grid-flow-row"),G(t,F,53,2,1872)},m:function(g,R){I(g,t,R),m(t,c),m(c,r),m(r,e),m(c,s),m(c,n),k&&k.m(n,null),m(t,a),m(t,l),L(f,l,null),m(l,p),m(l,d),L(u,d,null),m(d,h),L(x,d,null),I(g,P,R),D&&D.m(g,R),I(g,A,R),L(V,g,R),T=!0},p:function(g,R){(!T||R&2)&&o!==(o=g[1].data.getGuide.name+"")&&rt(e,o),g[3]?k?(k.p(g,R),R&8&&b(k,1)):(k=kt(g),k.c(),b(k,1),k.m(n,null)):k&&(lt(),S(k,1,1,()=>{k=null}),ut());const Q={};R&524290&&(Q.$$scope={dirty:R,ctx:g}),f.$set(Q);const nt={};R&2&&(nt.guide=g[1].data.getGuide),u.$set(nt);const ot={};R&2&&(ot.author=g[1].data.getGuide.user),x.$set(ot),g[3]?D?(D.p(g,R),R&8&&b(D,1)):(D=wt(g),D.c(),b(D,1),D.m(A.parentNode,A)):D&&(lt(),S(D,1,1,()=>{D=null}),ut());const J={};R&524292&&(J.$$scope={dirty:R,ctx:g}),!z&&R&1&&(z=!0,J.running=g[0],Vt(()=>z=!1)),V.$set(J)},i:function(g){T||(b(k),b(f.$$.fragment,g),b(u.$$.fragment,g),b(x.$$.fragment,g),b(D),b(V.$$.fragment,g),T=!0)},o:function(g){S(k),S(f.$$.fragment,g),S(u.$$.fragment,g),S(x.$$.fragment,g),S(D),S(V.$$.fragment,g),T=!1},d:function(g){g&&$(t),k&&k.d(),H(f),H(u),H(x),g&&$(P),D&&D.d(g),g&&$(A),H(V,g)}};return w("SvelteRegisterBlock",{block:K,id:zt.name,type:"if",source:"(53:31) ",ctx:i}),K}function Jt(i){let t,c,r=i[1].error.message+"",o;const e={c:function(){t=y("p"),c=_("Oh no... "),o=_(r),this.h()},l:function(n){t=E(n,"P",{});var a=B(t);c=O(a,"Oh no... "),o=O(a,r),a.forEach($),this.h()},h:function(){G(t,F,51,2,1799)},m:function(n,a){I(n,t,a),m(t,c),m(t,o)},p:function(n,a){a&2&&r!==(r=n[1].error.message+"")&&rt(o,r)},i:j,o:j,d:function(n){n&&$(t)}};return w("SvelteRegisterBlock",{block:e,id:Jt.name,type:"if",source:"(51:23) ",ctx:i}),e}function Yt(i){let t,c;const r={c:function(){t=y("p"),c=_("Loading..."),this.h()},l:function(e){t=E(e,"P",{});var s=B(t);c=O(s,"Loading..."),s.forEach($),this.h()},h:function(){G(t,F,49,2,1755)},m:function(e,s){I(e,t,s),m(t,c)},p:j,i:j,o:j,d:function(e){e&&$(t)}};return w("SvelteRegisterBlock",{block:r,id:Yt.name,type:"if",source:"(49:0) {#if $guide.fetching}",ctx:i}),r}function kt(i){let t,c,r,o;t=new ct({props:{variant:"outlined",$$slots:{default:[Kt]},$$scope:{ctx:i}},$$inline:!0}),t.$on("click",i[11]),r=new ct({props:{variant:"outlined",$$slots:{default:[Qt]},$$scope:{ctx:i}},$$inline:!0}),r.$on("click",i[12]);const e={c:function(){N(t.$$.fragment),c=U(),N(r.$$.fragment)},l:function(n){M(t.$$.fragment,n),c=q(n),M(r.$$.fragment,n)},m:function(n,a){L(t,n,a),I(n,c,a),L(r,n,a),o=!0},p:function(n,a){const l={};a&524288&&(l.$$scope={dirty:a,ctx:n}),t.$set(l);const f={};a&524288&&(f.$$scope={dirty:a,ctx:n}),r.$set(f)},i:function(n){o||(b(t.$$.fragment,n),b(r.$$.fragment,n),o=!0)},o:function(n){S(t.$$.fragment,n),S(r.$$.fragment,n),o=!1},d:function(n){H(t,n),n&&$(c),H(r,n)}};return w("SvelteRegisterBlock",{block:e,id:kt.name,type:"if",source:"(59:8) {#if canUserEdit}",ctx:i}),e}function Kt(i){let t;const c={c:function(){t=_("Edit")},l:function(o){t=O(o,"Edit")},m:function(o,e){I(o,t,e)},d:function(o){o&&$(t)}};return w("SvelteRegisterBlock",{block:c,id:Kt.name,type:"slot",source:`(60:10) <Button variant=\\"outlined\\" on:click={() => goto(base + '/guide/' + guideId + '/edit')}>`,ctx:i}),c}function Qt(i){let t;const c={c:function(){t=_("Delete")},l:function(o){t=O(o,"Delete")},m:function(o,e){I(o,t,e)},d:function(o){o&&$(t)}};return w("SvelteRegisterBlock",{block:c,id:Qt.name,type:"slot",source:'(61:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(true)}>',ctx:i}),c}function Xt(i){const t={c:j,l:j,m:j,p:j,d:j};return w("SvelteRegisterBlock",{block:t,id:Xt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:i}),t}function Zt(i){let t,c=i[18]+"";const r={c:function(){t=y("p"),this.h()},l:function(e){t=E(e,"P",{});var s=B(t);s.forEach($),this.h()},h:function(){G(t,F,69,14,2584)},m:function(e,s){I(e,t,s),t.innerHTML=c},p:function(e,s){s&2&&c!==(c=e[18]+"")&&(t.innerHTML=c)},d:function(e){e&&$(t)}};return w("SvelteRegisterBlock",{block:r,id:Zt.name,type:"then",source:"(69:76)                <p>{@html guideRendered}",ctx:i}),r}function te(i){const t={c:j,l:j,m:j,p:j,d:j};return w("SvelteRegisterBlock",{block:t,id:te.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:i}),t}function ee(i){let t,c,r={ctx:i,current:null,token:null,hasCatch:!1,pending:te,then:Zt,catch:Xt,value:18};Rt(c=mt(i[1].data.getGuide.guide),r);const o={c:function(){t=y("div"),r.block.c(),this.h()},l:function(s){t=E(s,"DIV",{class:!0});var n=B(t);r.block.l(n),n.forEach($),this.h()},h:function(){C(t,"class","markdown-content break-words"),G(t,F,67,10,2450)},m:function(s,n){I(s,t,n),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null},p:function(s,n){i=s,r.ctx=i,n&2&&c!==(c=mt(i[1].data.getGuide.guide))&&Rt(c,r)||$e(r,i,n)},d:function(s){s&&$(t),r.block.d(),r.token=null,r=null}};return w("SvelteRegisterBlock",{block:o,id:ee.name,type:"slot",source:"(67:8) <Content>",ctx:i}),o}function ne(i){let t,c;t=new et({props:{$$slots:{default:[ee]},$$scope:{ctx:i}},$$inline:!0});const r={c:function(){N(t.$$.fragment)},l:function(e){M(t.$$.fragment,e)},m:function(e,s){L(t,e,s),c=!0},p:function(e,s){const n={};s&524290&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i:function(e){c||(b(t.$$.fragment,e),c=!0)},o:function(e){S(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return w("SvelteRegisterBlock",{block:r,id:ne.name,type:"slot",source:'(66:6) <Card class=\\"h-fit\\">',ctx:i}),r}function wt(i){let t,c,r;function o(n){i[15](n)}let e={$$slots:{default:[se]},$$scope:{ctx:i}};i[4]!==void 0&&(e.open=i[4]),t=new Pt({props:e,$$inline:!0}),Ot.push(()=>At(t,"open",o));const s={c:function(){N(t.$$.fragment)},l:function(a){M(t.$$.fragment,a)},m:function(a,l){L(t,a,l),r=!0},p:function(a,l){const f={};l&524288&&(f.$$scope={dirty:l,ctx:a}),!c&&l&16&&(c=!0,f.open=a[4],Vt(()=>c=!1)),t.$set(f)},i:function(a){r||(b(t.$$.fragment,a),r=!0)},o:function(a){S(t.$$.fragment,a),r=!1},d:function(a){H(t,a)}};return w("SvelteRegisterBlock",{block:s,id:wt.name,type:"if",source:"(82:2) {#if canUserEdit}",ctx:i}),s}function oe(i){let t;const c={c:function(){t=_("Delete Guide?")},l:function(o){t=O(o,"Delete Guide?")},m:function(o,e){I(o,t,e)},d:function(o){o&&$(t)}};return w("SvelteRegisterBlock",{block:c,id:oe.name,type:"slot",source:"(84:6) <Title>",ctx:i}),c}function ie(i){let t;const c={c:function(){t=_("Cancel")},l:function(o){t=O(o,"Cancel")},m:function(o,e){I(o,t,e)},d:function(o){o&&$(t)}};return w("SvelteRegisterBlock",{block:c,id:ie.name,type:"slot",source:'(89:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(false)}>',ctx:i}),c}function ce(i){let t;const c={c:function(){t=_("Delete")},l:function(o){t=O(o,"Delete")},m:function(o,e){I(o,t,e)},d:function(o){o&&$(t)}};return w("SvelteRegisterBlock",{block:c,id:ce.name,type:"slot",source:'(90:10) <Button variant=\\"outlined\\" on:click={() => deleteGuideFn()}>',ctx:i}),c}function re(i){let t,c,r,o,e,s,n,a;e=new ct({props:{variant:"outlined",$$slots:{default:[ie]},$$scope:{ctx:i}},$$inline:!0}),e.$on("click",i[13]),n=new ct({props:{variant:"outlined",$$slots:{default:[ce]},$$scope:{ctx:i}},$$inline:!0}),n.$on("click",i[14]);const l={c:function(){t=y("div"),c=y("span"),r=_("Are you sure you wish to delete this guide"),o=U(),N(e.$$.fragment),s=U(),N(n.$$.fragment),this.h()},l:function(p){t=E(p,"DIV",{class:!0});var d=B(t);c=E(d,"SPAN",{});var u=B(c);r=O(u,"Are you sure you wish to delete this guide"),u.forEach($),o=q(d),M(e.$$.fragment,d),s=q(d),M(n.$$.fragment,d),d.forEach($),this.h()},h:function(){G(c,F,86,10,3062),C(t,"class","grid grid-flow-row gap-4"),G(t,F,85,8,3013)},m:function(p,d){I(p,t,d),m(t,c),m(c,r),m(t,o),L(e,t,null),m(t,s),L(n,t,null),a=!0},p:function(p,d){const u={};d&524288&&(u.$$scope={dirty:d,ctx:p}),e.$set(u);const h={};d&524288&&(h.$$scope={dirty:d,ctx:p}),n.$set(h)},i:function(p){a||(b(e.$$.fragment,p),b(n.$$.fragment,p),a=!0)},o:function(p){S(e.$$.fragment,p),S(n.$$.fragment,p),a=!1},d:function(p){p&&$(t),H(e),H(n)}};return w("SvelteRegisterBlock",{block:l,id:re.name,type:"slot",source:"(85:6) <DialogContent>",ctx:i}),l}function se(i){let t,c,r,o;t=new jt({props:{$$slots:{default:[oe]},$$scope:{ctx:i}},$$inline:!0}),r=new _t({props:{$$slots:{default:[re]},$$scope:{ctx:i}},$$inline:!0});const e={c:function(){N(t.$$.fragment),c=U(),N(r.$$.fragment)},l:function(n){M(t.$$.fragment,n),c=q(n),M(r.$$.fragment,n)},m:function(n,a){L(t,n,a),I(n,c,a),L(r,n,a),o=!0},p:function(n,a){const l={};a&524288&&(l.$$scope={dirty:a,ctx:n}),t.$set(l);const f={};a&524288&&(f.$$scope={dirty:a,ctx:n}),r.$set(f)},i:function(n){o||(b(t.$$.fragment,n),b(r.$$.fragment,n),o=!0)},o:function(n){S(t.$$.fragment,n),S(r.$$.fragment,n),o=!1},d:function(n){H(t,n),n&&$(c),H(r,n)}};return w("SvelteRegisterBlock",{block:e,id:se.name,type:"slot",source:"(83:4) <Dialog bind:open={$deleteDialogOpen}>",ctx:i}),e}function ae(i){let t,c;const r={c:function(){t=y("span"),c=_(i[2]),this.h()},l:function(e){t=E(e,"SPAN",{});var s=B(t);c=O(s,i[2]),s.forEach($),this.h()},h:function(){G(t,F,96,4,3404)},m:function(e,s){I(e,t,s),m(t,c)},p:function(e,s){s&4&&rt(c,e[2])},d:function(e){e&&$(t)}};return w("SvelteRegisterBlock",{block:r,id:ae.name,type:"slot",source:"(96:2) <Toast bind:running={errorToast}>",ctx:i}),r}function bt(i){let t,c,r,o,e,s,n=!i[1].fetching&&!i[1].error&&i[1].data.getGuide&&xt(i);const a=[Yt,Jt,zt,Wt],l=[];function f(d,u){return d[1].fetching?0:d[1].error?1:d[1].data.getGuide?2:3}r=f(i),o=l[r]=a[r](i);const p={c:function(){n&&n.c(),t=at(),c=U(),o.c(),e=at()},l:function(u){const h=fe("svelte-bhfvpi",document.head);n&&n.l(h),t=at(),h.forEach($),c=q(u),o.l(u),e=at()},m:function(u,h){n&&n.m(document.head,null),m(document.head,t),I(u,c,h),l[r].m(u,h),I(u,e,h),s=!0},p:function(u,[h]){!u[1].fetching&&!u[1].error&&u[1].data.getGuide?n?(n.p(u,h),h&2&&b(n,1)):(n=xt(u),n.c(),b(n,1),n.m(t.parentNode,t)):n&&(lt(),S(n,1,1,()=>{n=null}),ut());let x=r;r=f(u),r===x?l[r].p(u,h):(lt(),S(l[x],1,1,()=>{l[x]=null}),ut(),o=l[r],o?o.p(u,h):(o=l[r]=a[r](u),o.c()),b(o,1),o.m(e.parentNode,e))},i:function(u){s||(b(n),b(o),s=!0)},o:function(u){S(n),S(o),s=!1},d:function(u){n&&n.d(u),$(t),u&&$(c),l[r].d(u),u&&$(e)}};return w("SvelteRegisterBlock",{block:p,id:bt.name,type:"component",source:"",ctx:i}),p}function ve(i,t,c){let r,o,e,s;ft(gt,"user"),$t(i,gt,v=>c(10,e=v));let{$$slots:n={},$$scope:a}=t;Dt("Page",n,[]);let{data:l}=t;const{guideId:f,guide:p}=l;ft(p,"guide"),$t(i,p,v=>c(1,o=v));const d=St();let u="",h=!1;const x=Bt(!1);ft(x,"deleteDialogOpen"),$t(i,x,v=>c(4,s=v));const P=()=>{d.mutation(It,{guideId:f}).toPromise().then(v=>{v.error?(console.error(v.error.message),c(2,u="Error deleting guide: "+v.error.message),c(0,h=!0)):dt(Z+"/guides")})};i.$$.on_mount.push(function(){l===void 0&&!("data"in t||i.$$.bound[i.$$.props.data])&&Ct.warn("<Page> was created without expected prop 'data'")});const A=["data"];Object.keys(t).forEach(v=>{!~A.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&Ct.warn(`<Page> was created with unknown prop '${v}'`)});const V=()=>dt(Z+"/guide/"+f+"/edit"),z=()=>x.set(!0),T=()=>x.set(!1),k=()=>P();function D(v){s=v,x.set(s)}function X(v){h=v,c(0,h)}return i.$$set=v=>{"data"in v&&c(9,l=v.data)},i.$capture_state=()=>({DeleteGuideDocument:It,GuideInfo:Ht,GuideAuthor:Ft,user:gt,goto:dt,writable:Bt,Toast:Tt,markdown:mt,base:Z,Dialog:Pt,Title:jt,DialogContent:_t,MetaDescriptors:Nt,Card:tt,Content:et,Button:ct,getContextClient:St,data:l,guideId:f,guide:p,client:d,errorMessage:u,errorToast:h,deleteDialogOpen:x,deleteGuideFn:P,canUserEdit:r,$guide:o,$user:e,$deleteDialogOpen:s}),i.$inject_state=v=>{"data"in v&&c(9,l=v.data),"errorMessage"in v&&c(2,u=v.errorMessage),"errorToast"in v&&c(0,h=v.errorToast),"canUserEdit"in v&&c(3,r=v.canUserEdit)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&1026&&c(3,r=e?.roles?.deleteContent||e?.id===o?.data?.getGuide?.user?.id),i.$$.dirty&1&&(h||c(2,u=""))},[h,o,u,r,s,f,p,x,P,l,e,V,z,T,k,D,X]}class Be extends yt{constructor(t){super(t),Et(this,t,ve,bt,Gt,{data:9}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:bt.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Be as component,Se as universal};
//# sourceMappingURL=11.bd27c65f.js.map
