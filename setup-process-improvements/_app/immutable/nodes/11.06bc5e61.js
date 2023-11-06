import{aL as fe,S as Et,i as Gt,s as Dt,d as k,bo as tt,v as St,aK as lt,Y as rt,bp as et,a8 as V,ab as N,ae as M,p as E,t as I,aj as H,P as O,aw as _t,x as D,L as j,a6 as U,y as S,z as C,N as T,q as d,a9 as q,ac as _,C as B,l as P,ad as m,O as Y,a_ as W,Z as dt,aJ as Bt,X as Rt,aN as pt,aH as Ot,aO as jt,aP as Tt,aQ as st,ao as $e,k as ut,bi as de,n as ft,r as At,T as Vt,m as $t,ai as Nt,bq as It,br as pe}from"../chunks/vendor.9e4e80bb.js";import{r as ge,s as Ct}from"../chunks/graphql.04d4ab78.js";import{l as me}from"../chunks/gql.ff9241aa.js";import{p as mt}from"../chunks/formatting.730f0615.js";import{a as gt}from"../chunks/user.8a06633c.js";import{T as Mt}from"../chunks/Toast.eb4eb2e1.js";import{m as ht}from"../chunks/markdown.d8d0e444.js";import{M as Ht}from"../chunks/MetaDescriptors.6b3b353a.js";const he=async({params:o,parent:t})=>({...o,...await me({guide:fe({query:ge,client:(await t()).client,variables:{guide:o.guideId}})})}),Re=Object.freeze(Object.defineProperty({__proto__:null,load:he},Symbol.toStringTag,{value:"Module"})),ct="src/lib/components/guides/GuideInfo.svelte";function Lt(o){let t,c,r=o[2]("entry.info")+"",n,e,s,i,a=o[2]("entry.created-at")+"",l,p,u,$=mt(o[0].created_at)+"",f,h;const b={c:function(){t=D("div"),c=D("h3"),n=j(r),e=U(),s=D("span"),i=D("strong"),l=j(a),p=j(":"),u=U(),f=j($),h=D("br"),this.h()},l:function(R){t=S(R,"DIV",{class:!0});var y=C(t);c=S(y,"H3",{class:!0});var K=C(c);n=T(K,r),K.forEach(d),e=q(y),s=S(y,"SPAN",{});var z=C(s);i=S(z,"STRONG",{});var x=C(i);l=T(x,a),p=T(x,":"),x.forEach(d),u=q(z),f=T(z,$),z.forEach(d),h=S(y,"BR",{}),y.forEach(d),this.h()},h:function(){_(c,"class","text-2xl my-4 font-bold"),B(c,ct,10,6,278),B(i,ct,11,12,350),B(s,ct,11,6,344),B(h,ct,11,92,430),_(t,"class","text-lg"),B(t,ct,9,4,250)},m:function(R,y){P(R,t,y),m(t,c),m(c,n),m(t,e),m(t,s),m(s,i),m(i,l),m(i,p),m(s,u),m(s,f),m(t,h)},p:function(R,y){y&4&&r!==(r=R[2]("entry.info")+"")&&Y(n,r),y&4&&a!==(a=R[2]("entry.created-at")+"")&&Y(l,a),y&1&&$!==($=mt(R[0].created_at)+"")&&Y(f,$)},d:function(R){R&&d(t)}};return k("SvelteRegisterBlock",{block:b,id:Lt.name,type:"slot",source:"(9:2) <Content>",ctx:o}),b}function Ut(o){let t,c;t=new et({props:{$$slots:{default:[Lt]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){V(t.$$.fragment)},l:function(e){N(t.$$.fragment,e)},m:function(e,s){M(t,e,s),c=!0},p:function(e,s){const i={};s&13&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i:function(e){c||(E(t.$$.fragment,e),c=!0)},o:function(e){I(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return k("SvelteRegisterBlock",{block:r,id:Ut.name,type:"slot",source:"(8:0) <Card>",ctx:o}),r}function vt(o){let t,c;t=new tt({props:{$$slots:{default:[Ut]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){V(t.$$.fragment)},l:function(e){N(t.$$.fragment,e)},m:function(e,s){M(t,e,s),c=!0},p:function(e,[s]){const i={};s&13&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i:function(e){c||(E(t.$$.fragment,e),c=!0)},o:function(e){I(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return k("SvelteRegisterBlock",{block:r,id:vt.name,type:"component",source:"",ctx:o}),r}function ve(o,t,c){let r,n=O,e=()=>(n(),n=_t(l,u=>c(2,r=u)),l);o.$$.on_destroy.push(()=>n());let{$$slots:s={},$$scope:i}=t;St("GuideInfo",s,[]);let{guide:a}=t;const{t:l}=lt();rt(l,"t"),e(),o.$$.on_mount.push(function(){a===void 0&&!("guide"in t||o.$$.bound[o.$$.props.guide])&&console.warn("<GuideInfo> was created without expected prop 'guide'")});const p=["guide"];return Object.keys(t).forEach(u=>{!~p.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<GuideInfo> was created with unknown prop '${u}'`)}),o.$$set=u=>{"guide"in u&&c(0,a=u.guide)},o.$capture_state=()=>({Card:tt,Content:et,prettyDate:mt,getTranslate:lt,guide:a,t:l,$t:r}),o.$inject_state=u=>{"guide"in u&&c(0,a=u.guide)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[a,l,r]}class qt extends Et{constructor(t){super(t),Gt(this,t,ve,vt,Dt,{guide:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"GuideInfo",options:t,id:vt.name})}get guide(){throw new Error("<GuideInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set guide(t){throw new Error("<GuideInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<GuideInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Z="src/lib/components/guides/GuideAuthor.svelte";function zt(o){let t,c,r=o[2]("author")+"",n,e,s,i,a,l,p,u,$,f=o[0].username+"",h,b,A,R,y=o[2]("role.writer")+"",K;const z={c:function(){t=D("div"),c=D("h3"),n=j(r),e=U(),s=D("div"),i=D("div"),a=D("div"),p=U(),u=D("div"),$=D("a"),h=j(f),A=U(),R=D("div"),K=j(y),this.h()},l:function(w){t=S(w,"DIV",{class:!0});var L=C(t);c=S(L,"H3",{class:!0});var v=C(c);n=T(v,r),v.forEach(d),e=q(L),s=S(L,"DIV",{class:!0});var nt=C(s);i=S(nt,"DIV",{class:!0});var F=C(i);a=S(F,"DIV",{class:!0,style:!0}),C(a).forEach(d),p=q(F),u=S(F,"DIV",{class:!0});var g=C(u);$=S(g,"A",{href:!0,class:!0});var G=C($);h=T(G,f),G.forEach(d),A=q(g),R=S(g,"DIV",{});var X=C(R);K=T(X,y),X.forEach(d),g.forEach(d),F.forEach(d),nt.forEach(d),L.forEach(d),this.h()},h:function(){_(c,"class","text-2xl my-4 font-bold"),B(c,Z,10,6,281),_(a,"class","rounded-full bg-cover w-14 h-14"),_(a,"style",l=`background-image: url("${o[0].avatar}")`),B(a,Z,14,10,466),_($,"href",b=W+"/user/"+o[0].id+"/"),_($,"class","text-yellow-500 underline"),B($,Z,16,12,621),B(R,Z,17,12,724),_(u,"class","grid grid-flow-row"),B(u,Z,15,10,576),_(i,"class","grid grid-flow-col auto-cols-min gap-x-4"),B(i,Z,13,8,401),_(s,"class","grid auto-rows-min text-lg gap-y-4"),B(s,Z,12,6,344),_(t,"class","grid grid-flow-row gap-y-2"),B(t,Z,9,4,234)},m:function(w,L){P(w,t,L),m(t,c),m(c,n),m(t,e),m(t,s),m(s,i),m(i,a),m(i,p),m(i,u),m(u,$),m($,h),m(u,A),m(u,R),m(R,K)},p:function(w,L){L&4&&r!==(r=w[2]("author")+"")&&Y(n,r),L&1&&l!==(l=`background-image: url("${w[0].avatar}")`)&&_(a,"style",l),L&1&&f!==(f=w[0].username+"")&&Y(h,f),L&1&&b!==(b=W+"/user/"+w[0].id+"/")&&_($,"href",b),L&4&&y!==(y=w[2]("role.writer")+"")&&Y(K,y)},d:function(w){w&&d(t)}};return k("SvelteRegisterBlock",{block:z,id:zt.name,type:"slot",source:"(9:2) <Content>",ctx:o}),z}function Ft(o){let t,c;t=new et({props:{$$slots:{default:[zt]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){V(t.$$.fragment)},l:function(e){N(t.$$.fragment,e)},m:function(e,s){M(t,e,s),c=!0},p:function(e,s){const i={};s&13&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i:function(e){c||(E(t.$$.fragment,e),c=!0)},o:function(e){I(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return k("SvelteRegisterBlock",{block:r,id:Ft.name,type:"slot",source:"(8:0) <Card>",ctx:o}),r}function wt(o){let t,c;t=new tt({props:{$$slots:{default:[Ft]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){V(t.$$.fragment)},l:function(e){N(t.$$.fragment,e)},m:function(e,s){M(t,e,s),c=!0},p:function(e,[s]){const i={};s&13&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i:function(e){c||(E(t.$$.fragment,e),c=!0)},o:function(e){I(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return k("SvelteRegisterBlock",{block:r,id:wt.name,type:"component",source:"",ctx:o}),r}function we(o,t,c){let r,n=O,e=()=>(n(),n=_t(l,u=>c(2,r=u)),l);o.$$.on_destroy.push(()=>n());let{$$slots:s={},$$scope:i}=t;St("GuideAuthor",s,[]);let{author:a}=t;const{t:l}=lt();rt(l,"t"),e(),o.$$.on_mount.push(function(){a===void 0&&!("author"in t||o.$$.bound[o.$$.props.author])&&console.warn("<GuideAuthor> was created without expected prop 'author'")});const p=["author"];return Object.keys(t).forEach(u=>{!~p.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<GuideAuthor> was created with unknown prop '${u}'`)}),o.$$set=u=>{"author"in u&&c(0,a=u.author)},o.$capture_state=()=>({base:W,Card:tt,Content:et,getTranslate:lt,author:a,t:l,$t:r}),o.$inject_state=u=>{"author"in u&&c(0,a=u.author)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[a,l,r]}class Kt extends Et{constructor(t){super(t),Gt(this,t,we,wt,Dt,{author:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"GuideAuthor",options:t,id:wt.name})}get author(){throw new Error("<GuideAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set author(t){throw new Error("<GuideAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<GuideAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:Pt}=$e,Q="src/routes/guide/[guideId]/+page.svelte";function xt(o){let t,c;t=new Ht({props:{description:o[1].data.getGuide.short_description,title:o[1].data.getGuide.name},$$inline:!0});const r={c:function(){V(t.$$.fragment)},l:function(e){N(t.$$.fragment,e)},m:function(e,s){M(t,e,s),c=!0},p:function(e,s){const i={};s&2&&(i.description=e[1].data.getGuide.short_description),s&2&&(i.title=e[1].data.getGuide.name),t.$set(i)},i:function(e){c||(E(t.$$.fragment,e),c=!0)},o:function(e){I(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return k("SvelteRegisterBlock",{block:r,id:xt.name,type:"if",source:"(44:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:o}),r}function Qt(o){let t;const c={c:function(){t=j("404")},l:function(n){t=T(n,"404")},m:function(n,e){P(n,t,e)},p:O,i:O,o:O,d:function(n){n&&d(t)}};return k("SvelteRegisterBlock",{block:c,id:Qt.name,type:"else",source:"(99:0) {:else}",ctx:o}),c}function Xt(o){let t,c,r,n=o[1].data.getGuide.name+"",e,s,i,a,l,p,u,$,f,h,b,A,R,y,K,z,x=o[3]&&kt(o);p=new tt({props:{class:"h-fit",$$slots:{default:[ie]},$$scope:{ctx:o}},$$inline:!0}),f=new qt({props:{guide:o[1].data.getGuide},$$inline:!0}),b=new Kt({props:{author:o[1].data.getGuide.user},$$inline:!0});let w=o[3]&&yt(o);function L(F){o[16](F)}let v={$$slots:{default:[le]},$$scope:{ctx:o}};o[0]!==void 0&&(v.running=o[0]),y=new Mt({props:v,$$inline:!0}),At.push(()=>Vt(y,"running",L));const nt={c:function(){t=D("div"),c=D("div"),r=D("h1"),e=j(n),s=U(),i=D("div"),x&&x.c(),a=U(),l=D("div"),V(p.$$.fragment),u=U(),$=D("div"),V(f.$$.fragment),h=U(),V(b.$$.fragment),A=U(),w&&w.c(),R=U(),V(y.$$.fragment),this.h()},l:function(g){t=S(g,"DIV",{class:!0});var G=C(t);c=S(G,"DIV",{class:!0});var X=C(c);r=S(X,"H1",{class:!0});var ot=C(r);e=T(ot,n),ot.forEach(d),s=q(X),i=S(X,"DIV",{});var it=C(i);x&&x.l(it),it.forEach(d),X.forEach(d),a=q(G),l=S(G,"DIV",{class:!0});var J=C(l);N(p.$$.fragment,J),u=q(J),$=S(J,"DIV",{class:!0});var at=C($);N(f.$$.fragment,at),h=q(at),N(b.$$.fragment,at),at.forEach(d),J.forEach(d),G.forEach(d),A=q(g),w&&w.l(g),R=q(g),N(y.$$.fragment,g),this.h()},h:function(){_(r,"class","text-4xl font-bold"),B(r,Q,55,6,1990),B(i,Q,57,6,2061),_(c,"class","flex flex-wrap h-auto justify-between items-center"),B(c,Q,54,4,1919),_($,"class","grid grid-cols-1 auto-rows-min gap-8"),B($,Q,74,6,2690),_(l,"class","grid grid-auto-max auto-cols-fr gap-4"),B(l,Q,64,4,2343),_(t,"class","grid gap-6 xlx:grid-flow-row"),B(t,Q,53,2,1872)},m:function(g,G){P(g,t,G),m(t,c),m(c,r),m(r,e),m(c,s),m(c,i),x&&x.m(i,null),m(t,a),m(t,l),M(p,l,null),m(l,u),m(l,$),M(f,$,null),m($,h),M(b,$,null),P(g,A,G),w&&w.m(g,G),P(g,R,G),M(y,g,G),z=!0},p:function(g,G){(!z||G&2)&&n!==(n=g[1].data.getGuide.name+"")&&Y(e,n),g[3]?x?(x.p(g,G),G&8&&E(x,1)):(x=kt(g),x.c(),E(x,1),x.m(i,null)):x&&($t(),I(x,1,1,()=>{x=null}),ft());const X={};G&524290&&(X.$$scope={dirty:G,ctx:g}),p.$set(X);const ot={};G&2&&(ot.guide=g[1].data.getGuide),f.$set(ot);const it={};G&2&&(it.author=g[1].data.getGuide.user),b.$set(it),g[3]?w?(w.p(g,G),G&8&&E(w,1)):(w=yt(g),w.c(),E(w,1),w.m(R.parentNode,R)):w&&($t(),I(w,1,1,()=>{w=null}),ft());const J={};G&524292&&(J.$$scope={dirty:G,ctx:g}),!K&&G&1&&(K=!0,J.running=g[0],Nt(()=>K=!1)),y.$set(J)},i:function(g){z||(E(x),E(p.$$.fragment,g),E(f.$$.fragment,g),E(b.$$.fragment,g),E(w),E(y.$$.fragment,g),z=!0)},o:function(g){I(x),I(p.$$.fragment,g),I(f.$$.fragment,g),I(b.$$.fragment,g),I(w),I(y.$$.fragment,g),z=!1},d:function(g){g&&d(t),x&&x.d(),H(p),H(f),H(b),g&&d(A),w&&w.d(g),g&&d(R),H(y,g)}};return k("SvelteRegisterBlock",{block:nt,id:Xt.name,type:"if",source:"(53:31) ",ctx:o}),nt}function Yt(o){let t,c,r=o[1].error.message+"",n;const e={c:function(){t=D("p"),c=j("Oh no... "),n=j(r),this.h()},l:function(i){t=S(i,"P",{});var a=C(t);c=T(a,"Oh no... "),n=T(a,r),a.forEach(d),this.h()},h:function(){B(t,Q,51,2,1799)},m:function(i,a){P(i,t,a),m(t,c),m(t,n)},p:function(i,a){a&2&&r!==(r=i[1].error.message+"")&&Y(n,r)},i:O,o:O,d:function(i){i&&d(t)}};return k("SvelteRegisterBlock",{block:e,id:Yt.name,type:"if",source:"(51:23) ",ctx:o}),e}function Jt(o){let t,c;const r={c:function(){t=D("p"),c=j("Loading..."),this.h()},l:function(e){t=S(e,"P",{});var s=C(t);c=T(s,"Loading..."),s.forEach(d),this.h()},h:function(){B(t,Q,49,2,1755)},m:function(e,s){P(e,t,s),m(t,c)},p:O,i:O,o:O,d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:r,id:Jt.name,type:"if",source:"(49:0) {#if $guide.fetching}",ctx:o}),r}function kt(o){let t,c,r,n;t=new st({props:{variant:"outlined",$$slots:{default:[Zt]},$$scope:{ctx:o}},$$inline:!0}),t.$on("click",o[11]),r=new st({props:{variant:"outlined",$$slots:{default:[Wt]},$$scope:{ctx:o}},$$inline:!0}),r.$on("click",o[12]);const e={c:function(){V(t.$$.fragment),c=U(),V(r.$$.fragment)},l:function(i){N(t.$$.fragment,i),c=q(i),N(r.$$.fragment,i)},m:function(i,a){M(t,i,a),P(i,c,a),M(r,i,a),n=!0},p:function(i,a){const l={};a&524288&&(l.$$scope={dirty:a,ctx:i}),t.$set(l);const p={};a&524288&&(p.$$scope={dirty:a,ctx:i}),r.$set(p)},i:function(i){n||(E(t.$$.fragment,i),E(r.$$.fragment,i),n=!0)},o:function(i){I(t.$$.fragment,i),I(r.$$.fragment,i),n=!1},d:function(i){H(t,i),i&&d(c),H(r,i)}};return k("SvelteRegisterBlock",{block:e,id:kt.name,type:"if",source:"(59:8) {#if canUserEdit}",ctx:o}),e}function Zt(o){let t;const c={c:function(){t=j("Edit")},l:function(n){t=T(n,"Edit")},m:function(n,e){P(n,t,e)},d:function(n){n&&d(t)}};return k("SvelteRegisterBlock",{block:c,id:Zt.name,type:"slot",source:`(60:10) <Button variant=\\"outlined\\" on:click={() => goto(base + '/guide/' + guideId + '/edit')}>`,ctx:o}),c}function Wt(o){let t;const c={c:function(){t=j("Delete")},l:function(n){t=T(n,"Delete")},m:function(n,e){P(n,t,e)},d:function(n){n&&d(t)}};return k("SvelteRegisterBlock",{block:c,id:Wt.name,type:"slot",source:'(61:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(true)}>',ctx:o}),c}function te(o){const t={c:O,l:O,m:O,p:O,d:O};return k("SvelteRegisterBlock",{block:t,id:te.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:o}),t}function ee(o){let t,c=o[18]+"";const r={c:function(){t=D("p"),this.h()},l:function(e){t=S(e,"P",{});var s=C(t);s.forEach(d),this.h()},h:function(){B(t,Q,69,14,2584)},m:function(e,s){P(e,t,s),t.innerHTML=c},p:function(e,s){s&2&&c!==(c=e[18]+"")&&(t.innerHTML=c)},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:r,id:ee.name,type:"then",source:"(69:76)                <p>{@html guideRendered}",ctx:o}),r}function ne(o){const t={c:O,l:O,m:O,p:O,d:O};return k("SvelteRegisterBlock",{block:t,id:ne.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:o}),t}function oe(o){let t,c,r={ctx:o,current:null,token:null,hasCatch:!1,pending:ne,then:ee,catch:te,value:18};It(c=ht(o[1].data.getGuide.guide),r);const n={c:function(){t=D("div"),r.block.c(),this.h()},l:function(s){t=S(s,"DIV",{class:!0});var i=C(t);r.block.l(i),i.forEach(d),this.h()},h:function(){_(t,"class","markdown-content break-words"),B(t,Q,67,10,2450)},m:function(s,i){P(s,t,i),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null},p:function(s,i){o=s,r.ctx=o,i&2&&c!==(c=ht(o[1].data.getGuide.guide))&&It(c,r)||pe(r,o,i)},d:function(s){s&&d(t),r.block.d(),r.token=null,r=null}};return k("SvelteRegisterBlock",{block:n,id:oe.name,type:"slot",source:"(67:8) <Content>",ctx:o}),n}function ie(o){let t,c;t=new et({props:{$$slots:{default:[oe]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){V(t.$$.fragment)},l:function(e){N(t.$$.fragment,e)},m:function(e,s){M(t,e,s),c=!0},p:function(e,s){const i={};s&524290&&(i.$$scope={dirty:s,ctx:e}),t.$set(i)},i:function(e){c||(E(t.$$.fragment,e),c=!0)},o:function(e){I(t.$$.fragment,e),c=!1},d:function(e){H(t,e)}};return k("SvelteRegisterBlock",{block:r,id:ie.name,type:"slot",source:'(66:6) <Card class=\\"h-fit\\">',ctx:o}),r}function yt(o){let t,c,r;function n(i){o[15](i)}let e={$$slots:{default:[ue]},$$scope:{ctx:o}};o[4]!==void 0&&(e.open=o[4]),t=new Ot({props:e,$$inline:!0}),At.push(()=>Vt(t,"open",n));const s={c:function(){V(t.$$.fragment)},l:function(a){N(t.$$.fragment,a)},m:function(a,l){M(t,a,l),r=!0},p:function(a,l){const p={};l&524288&&(p.$$scope={dirty:l,ctx:a}),!c&&l&16&&(c=!0,p.open=a[4],Nt(()=>c=!1)),t.$set(p)},i:function(a){r||(E(t.$$.fragment,a),r=!0)},o:function(a){I(t.$$.fragment,a),r=!1},d:function(a){H(t,a)}};return k("SvelteRegisterBlock",{block:s,id:yt.name,type:"if",source:"(82:2) {#if canUserEdit}",ctx:o}),s}function ce(o){let t;const c={c:function(){t=j("Delete Guide?")},l:function(n){t=T(n,"Delete Guide?")},m:function(n,e){P(n,t,e)},d:function(n){n&&d(t)}};return k("SvelteRegisterBlock",{block:c,id:ce.name,type:"slot",source:"(84:6) <Title>",ctx:o}),c}function re(o){let t;const c={c:function(){t=j("Cancel")},l:function(n){t=T(n,"Cancel")},m:function(n,e){P(n,t,e)},d:function(n){n&&d(t)}};return k("SvelteRegisterBlock",{block:c,id:re.name,type:"slot",source:'(89:10) <Button variant=\\"outlined\\" on:click={() => deleteDialogOpen.set(false)}>',ctx:o}),c}function se(o){let t;const c={c:function(){t=j("Delete")},l:function(n){t=T(n,"Delete")},m:function(n,e){P(n,t,e)},d:function(n){n&&d(t)}};return k("SvelteRegisterBlock",{block:c,id:se.name,type:"slot",source:'(90:10) <Button variant=\\"outlined\\" on:click={() => deleteGuideFn()}>',ctx:o}),c}function ae(o){let t,c,r,n,e,s,i,a;e=new st({props:{variant:"outlined",$$slots:{default:[re]},$$scope:{ctx:o}},$$inline:!0}),e.$on("click",o[13]),i=new st({props:{variant:"outlined",$$slots:{default:[se]},$$scope:{ctx:o}},$$inline:!0}),i.$on("click",o[14]);const l={c:function(){t=D("div"),c=D("span"),r=j("Are you sure you wish to delete this guide"),n=U(),V(e.$$.fragment),s=U(),V(i.$$.fragment),this.h()},l:function(u){t=S(u,"DIV",{class:!0});var $=C(t);c=S($,"SPAN",{});var f=C(c);r=T(f,"Are you sure you wish to delete this guide"),f.forEach(d),n=q($),N(e.$$.fragment,$),s=q($),N(i.$$.fragment,$),$.forEach(d),this.h()},h:function(){B(c,Q,86,10,3062),_(t,"class","grid grid-flow-row gap-4"),B(t,Q,85,8,3013)},m:function(u,$){P(u,t,$),m(t,c),m(c,r),m(t,n),M(e,t,null),m(t,s),M(i,t,null),a=!0},p:function(u,$){const f={};$&524288&&(f.$$scope={dirty:$,ctx:u}),e.$set(f);const h={};$&524288&&(h.$$scope={dirty:$,ctx:u}),i.$set(h)},i:function(u){a||(E(e.$$.fragment,u),E(i.$$.fragment,u),a=!0)},o:function(u){I(e.$$.fragment,u),I(i.$$.fragment,u),a=!1},d:function(u){u&&d(t),H(e),H(i)}};return k("SvelteRegisterBlock",{block:l,id:ae.name,type:"slot",source:"(85:6) <DialogContent>",ctx:o}),l}function ue(o){let t,c,r,n;t=new jt({props:{$$slots:{default:[ce]},$$scope:{ctx:o}},$$inline:!0}),r=new Tt({props:{$$slots:{default:[ae]},$$scope:{ctx:o}},$$inline:!0});const e={c:function(){V(t.$$.fragment),c=U(),V(r.$$.fragment)},l:function(i){N(t.$$.fragment,i),c=q(i),N(r.$$.fragment,i)},m:function(i,a){M(t,i,a),P(i,c,a),M(r,i,a),n=!0},p:function(i,a){const l={};a&524288&&(l.$$scope={dirty:a,ctx:i}),t.$set(l);const p={};a&524288&&(p.$$scope={dirty:a,ctx:i}),r.$set(p)},i:function(i){n||(E(t.$$.fragment,i),E(r.$$.fragment,i),n=!0)},o:function(i){I(t.$$.fragment,i),I(r.$$.fragment,i),n=!1},d:function(i){H(t,i),i&&d(c),H(r,i)}};return k("SvelteRegisterBlock",{block:e,id:ue.name,type:"slot",source:"(83:4) <Dialog bind:open={$deleteDialogOpen}>",ctx:o}),e}function le(o){let t,c;const r={c:function(){t=D("span"),c=j(o[2]),this.h()},l:function(e){t=S(e,"SPAN",{});var s=C(t);c=T(s,o[2]),s.forEach(d),this.h()},h:function(){B(t,Q,96,4,3404)},m:function(e,s){P(e,t,s),m(t,c)},p:function(e,s){s&4&&Y(c,e[2])},d:function(e){e&&d(t)}};return k("SvelteRegisterBlock",{block:r,id:le.name,type:"slot",source:"(96:2) <Toast bind:running={errorToast}>",ctx:o}),r}function bt(o){let t,c,r,n,e,s,i=!o[1].fetching&&!o[1].error&&o[1].data.getGuide&&xt(o);const a=[Jt,Yt,Xt,Qt],l=[];function p($,f){return $[1].fetching?0:$[1].error?1:$[1].data.getGuide?2:3}r=p(o),n=l[r]=a[r](o);const u={c:function(){i&&i.c(),t=ut(),c=U(),n.c(),e=ut()},l:function(f){const h=de("svelte-bhfvpi",document.head);i&&i.l(h),t=ut(),h.forEach(d),c=q(f),n.l(f),e=ut()},m:function(f,h){i&&i.m(document.head,null),m(document.head,t),P(f,c,h),l[r].m(f,h),P(f,e,h),s=!0},p:function(f,[h]){!f[1].fetching&&!f[1].error&&f[1].data.getGuide?i?(i.p(f,h),h&2&&E(i,1)):(i=xt(f),i.c(),E(i,1),i.m(t.parentNode,t)):i&&($t(),I(i,1,1,()=>{i=null}),ft());let b=r;r=p(f),r===b?l[r].p(f,h):($t(),I(l[b],1,1,()=>{l[b]=null}),ft(),n=l[r],n?n.p(f,h):(n=l[r]=a[r](f),n.c()),E(n,1),n.m(e.parentNode,e))},i:function(f){s||(E(i),E(n),s=!0)},o:function(f){I(i),I(n),s=!1},d:function(f){i&&i.d(f),d(t),f&&d(c),l[r].d(f),f&&d(e)}};return k("SvelteRegisterBlock",{block:u,id:bt.name,type:"component",source:"",ctx:o}),u}function xe(o,t,c){let r,n,e,s;rt(gt,"user"),dt(o,gt,v=>c(10,e=v));let{$$slots:i={},$$scope:a}=t;St("Page",i,[]);let{data:l}=t;const{guideId:p,guide:u}=l;rt(u,"guide"),dt(o,u,v=>c(1,n=v));const $=Bt();let f="",h=!1;const b=Rt(!1);rt(b,"deleteDialogOpen"),dt(o,b,v=>c(4,s=v));const A=()=>{$.mutation(Ct,{guideId:p}).toPromise().then(v=>{v.error?(console.error(v.error.message),c(2,f="Error deleting guide: "+v.error.message),c(0,h=!0)):pt(W+"/guides")})};o.$$.on_mount.push(function(){l===void 0&&!("data"in t||o.$$.bound[o.$$.props.data])&&Pt.warn("<Page> was created without expected prop 'data'")});const R=["data"];Object.keys(t).forEach(v=>{!~R.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&Pt.warn(`<Page> was created with unknown prop '${v}'`)});const y=()=>pt(W+"/guide/"+p+"/edit"),K=()=>b.set(!0),z=()=>b.set(!1),x=()=>A();function w(v){s=v,b.set(s)}function L(v){h=v,c(0,h)}return o.$$set=v=>{"data"in v&&c(9,l=v.data)},o.$capture_state=()=>({DeleteGuideDocument:Ct,GuideInfo:qt,GuideAuthor:Kt,user:gt,goto:pt,writable:Rt,Toast:Mt,markdown:ht,base:W,Dialog:Ot,Title:jt,DialogContent:Tt,MetaDescriptors:Ht,Card:tt,Content:et,Button:st,getContextClient:Bt,data:l,guideId:p,guide:u,client:$,errorMessage:f,errorToast:h,deleteDialogOpen:b,deleteGuideFn:A,canUserEdit:r,$guide:n,$user:e,$deleteDialogOpen:s}),o.$inject_state=v=>{"data"in v&&c(9,l=v.data),"errorMessage"in v&&c(2,f=v.errorMessage),"errorToast"in v&&c(0,h=v.errorToast),"canUserEdit"in v&&c(3,r=v.canUserEdit)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),o.$$.update=()=>{o.$$.dirty&1026&&c(3,r=e?.roles?.deleteContent||e?.id===n?.data?.getGuide?.user?.id),o.$$.dirty&1&&(h||c(2,f=""))},[h,n,f,r,s,p,u,b,A,l,e,y,K,z,x,w,L]}class Ie extends Et{constructor(t){super(t),Gt(this,t,xe,bt,Dt,{data:9}),k("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:bt.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ie as component,Re as universal};
//# sourceMappingURL=11.06bc5e61.js.map
