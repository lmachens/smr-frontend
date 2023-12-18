import{S as Ze,i as _e,s as Oe,d as _,z as te,v as Qe,ac as fe,$ as $e,aq as Ee,e as b,b as A,W as Ce,g as y,h as D,j as g,k as R,X as De,N as a,m as $,l as Y,ar as W,n as Z,Q as m,Z as z,Y as Fe,A as se,C as ne,D as oe,r as H,p as We,t as q,q as qe,a6 as Me,y as Te,f as Ve,M as Be,as as Ne,u as Ye}from"./vendor.31aa86e7.js";const E="src/lib/components/general/FicsitCard.svelte",ze=t=>({}),Pe=t=>({}),Ge=t=>({}),Se=t=>({}),Xe=t=>({}),Ie=t=>({}),Je=t=>({}),je=t=>({});function Le(t){let e,s,f;const i={c:function(){e=b("img"),this.h()},l:function(l){e=y(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){Ne(e.src,s=t[5])||a(e,"src",s),a(e,"alt",f=t[4]+" Logo"),a(e,"class","logo max-w-full max-h-full min-w-full min-h-full s-ZL2maQw1Napu"),$(e,E,58,10,1364)},m:function(l,d){Z(l,e,d)},p:function(l,d){d&32&&!Ne(e.src,s=l[5])&&a(e,"src",s),d&16&&f!==(f=l[4]+" Logo")&&a(e,"alt",f)},d:function(l){l&&g(e)}};return _("SvelteRegisterBlock",{block:i,id:Le.name,type:"else",source:"(50:8) {:else}",ctx:t}),i}function Ae(t){let e;const s={c:function(){e=b("div"),this.h()},l:function(i){e=y(i,"DIV",{class:!0}),D(e).forEach(g),this.h()},h:function(){a(e,"class","bg-gray-500 logo min-w-full min-h-full max-w-full max-h-full s-ZL2maQw1Napu"),$(e,E,56,10,1261)},m:function(i,r){Z(i,e,r)},p:Ye,d:function(i){i&&g(e)}};return _("SvelteRegisterBlock",{block:s,id:Ae.name,type:"if",source:"(48:8) {#if fake}",ctx:t}),s}function ue(t){let e,s="Card stats";const f={c:function(){e=b("span"),e.textContent=s,this.h()},l:function(r){e=y(r,"SPAN",{class:!0,"data-svelte-h":!0}),Be(e)!=="svelte-1e5l8mc"&&(e.textContent=s),this.h()},h:function(){a(e,"class","font-flow"),$(e,E,72,16,1889)},m:function(r,l){Z(r,e,l)},d:function(r){r&&g(e)}};return _("SvelteRegisterBlock",{block:f,id:ue.name,type:"if",source:"(64:14) {#if fake}",ctx:t}),f}function Re(t){let e,s=t[1]&&ue(t);const f={c:function(){s&&s.c(),e=Ve()},l:function(r){s&&s.l(r),e=Ve()},m:function(r,l){s&&s.m(r,l),Z(r,e,l)},p:function(r,l){r[1]?s||(s=ue(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d:function(r){r&&g(e),s&&s.d(r)}};return _("SvelteRegisterBlock",{block:f,id:Re.name,type:"fallback",source:"(63:31)                ",ctx:t}),f}function de(t){let e,s,f="info",i,r,l,d;const w=t[12].actions,u=te(w,t,t[11],Se),C={c:function(){e=b("a"),s=b("span"),s.textContent=f,l=A(),u&&u.c(),this.h()},l:function(c){e=y(c,"A",{href:!0,class:!0,"aria-label":!0,title:!0});var h=D(e);s=y(h,"SPAN",{class:!0,"data-svelte-h":!0}),Be(s)!=="svelte-j9s9eb"&&(s.textContent=f),h.forEach(g),l=R(c),u&&u.l(c),this.h()},h:function(){a(s,"class","material-icons"),$(s,E,97,12,2730),a(e,"href",t[0]),a(e,"class","btn btn-sm variant-soft-surface"),a(e,"aria-label",i="View "+t[4]),a(e,"title",r="View "+t[4]),$(e,E,92,10,2553)},m:function(c,h){Z(c,e,h),m(e,s),Z(c,l,h),u&&u.m(c,h),d=!0},p:function(c,h){(!d||h&1)&&a(e,"href",c[0]),(!d||h&16&&i!==(i="View "+c[4]))&&a(e,"aria-label",i),(!d||h&16&&r!==(r="View "+c[4]))&&a(e,"title",r),u&&u.p&&(!d||h&2048)&&se(u,w,c,c[11],d?oe(w,c[11],h,Ge):ne(c[11]),Se)},i:function(c){d||(H(u,c),d=!0)},o:function(c){q(u,c),d=!1},d:function(c){c&&(g(e),g(l)),u&&u.d(c)}};return _("SvelteRegisterBlock",{block:C,id:de.name,type:"if",source:"(84:8) {#if !fake}",ctx:t}),C}function pe(t){let e,s,f,i,r,l,d,w,u,C,x,c,h,L,O,F,j,M,S,T,n,ie,v,re,he;function me(B,o){return B[1]?Ae:Le}let G=me(t),I=G(t);const ce=t[12].stats,X=te(ce,t,t[11],je),V=X||Re(t),le=t[12].tags,N=te(le,t,t[11],Ie);let k=!t[1]&&de(t);const ae=t[12].outer,P=te(ae,t,t[11],Pe),ge={c:function(){e=b("div"),s=b("div"),f=b("div"),i=b("a"),I.c(),r=A(),l=b("div"),d=b("div"),w=b("div"),u=b("a"),C=b("span"),x=Ce(t[4]),c=A(),h=b("h5"),V&&V.c(),L=A(),N&&N.c(),O=A(),F=b("div"),j=Ce(t[3]),M=A(),S=b("div"),T=A(),n=b("div"),k&&k.c(),ie=A(),P&&P.c(),this.h()},l:function(o){e=y(o,"DIV",{class:!0,role:!0});var p=D(e);s=y(p,"DIV",{class:!0});var J=D(s);f=y(J,"DIV",{class:!0});var we=D(f);i=y(we,"A",{href:!0,tabindex:!0});var ve=D(i);I.l(ve),ve.forEach(g),we.forEach(g),r=R(J),l=y(J,"DIV",{class:!0});var K=D(l);d=y(K,"DIV",{class:!0});var U=D(d);w=y(U,"DIV",{class:!0});var Q=D(w);u=y(Q,"A",{href:!0,class:!0});var ke=D(u);C=y(ke,"SPAN",{class:!0});var xe=D(C);x=De(xe,t[4]),xe.forEach(g),ke.forEach(g),c=R(Q),h=y(Q,"H5",{class:!0});var be=D(h);V&&V.l(be),be.forEach(g),L=R(Q),N&&N.l(Q),Q.forEach(g),O=R(U),F=y(U,"DIV",{style:!0});var ee=D(F);j=De(ee,t[3]),M=R(ee),S=y(ee,"DIV",{class:!0,style:!0});var He=D(S);He.forEach(g),ee.forEach(g),U.forEach(g),T=R(K),n=y(K,"DIV",{class:!0});var ye=D(n);k&&k.l(ye),ye.forEach(g),K.forEach(g),J.forEach(g),ie=R(p),P&&P.l(p),p.forEach(g),this.h()},h:function(){a(i,"href",t[0]),a(i,"tabindex","0"),$(i,E,52,6,1160),a(f,"class","cursor-pointer card-image-container"),$(f,E,49,4,1091),a(C,"class","text-xl break-words"),$(C,E,66,12,1709),a(u,"href",t[0]),a(u,"class","text-white"),$(u,E,65,10,1662),a(h,"class","text-sm m-0"),$(h,E,69,10,1791),a(w,"class","mb-1.5"),$(w,E,64,8,1631),a(S,"class","float-right"),Y(S,"width",(t[2]?.clientWidth||0)-8+"px"),Y(S,"height",(t[2]?.clientHeight||0)-8+"px"),$(S,E,83,10,2143),Y(F,"word-wrap","anywhere"),W(F,"font-flow",t[1]),$(F,E,80,8,2043),a(d,"class","flex flex-col px-3 py-2 pb-0"),$(d,E,63,6,1580),a(n,"class","self-end py-2 px-2 flex flex-row items-center text-lg gap-1 absolute bottom-0 right-0"),$(n,E,90,6,2397),a(l,"class","w-full flex flex-col justify-between relative"),$(l,E,62,4,1514),a(s,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center s-ZL2maQw1Napu"),W(s,"text-gray-500",t[1]),W(s,"font-flow",t[1]),$(s,E,45,2,944),a(e,"class","card h-full overflow-hidden relative"),a(e,"role","none"),$(e,E,38,0,791)},m:function(o,p){Z(o,e,p),m(e,s),m(s,f),m(f,i),I.m(i,null),m(s,r),m(s,l),m(l,d),m(d,w),m(w,u),m(u,C),m(C,x),m(w,c),m(w,h),V&&V.m(h,null),m(w,L),N&&N.m(w,null),m(d,O),m(d,F),m(F,j),m(F,M),m(F,S),m(l,T),m(l,n),k&&k.m(n,null),t[14](n),m(e,ie),P&&P.m(e,null),v=!0,re||(he=[z(i,"keypress",t[13],!1,!1,!1,!1),z(e,"mouseover",t[6],!1,!1,!1,!1),z(e,"mouseout",t[7],!1,!1,!1,!1),z(e,"focus",t[6],!1,!1,!1,!1),z(e,"blur",t[7],!1,!1,!1,!1)],re=!0)},p:function(o,[p]){G===(G=me(o))&&I?I.p(o,p):(I.d(1),I=G(o),I&&(I.c(),I.m(i,null))),(!v||p&1)&&a(i,"href",o[0]),(!v||p&16)&&Fe(x,o[4]),(!v||p&1)&&a(u,"href",o[0]),X?X.p&&(!v||p&2048)&&se(X,ce,o,o[11],v?oe(ce,o[11],p,Je):ne(o[11]),je):V&&V.p&&(!v||p&2)&&V.p(o,v?p:-1),N&&N.p&&(!v||p&2048)&&se(N,le,o,o[11],v?oe(le,o[11],p,Xe):ne(o[11]),Ie),(!v||p&8)&&Fe(j,o[3]),(!v||p&4)&&Y(S,"width",(o[2]?.clientWidth||0)-8+"px"),(!v||p&4)&&Y(S,"height",(o[2]?.clientHeight||0)-8+"px"),(!v||p&2)&&W(F,"font-flow",o[1]),o[1]?k&&(We(),q(k,1,1,()=>{k=null}),qe()):k?(k.p(o,p),p&2&&H(k,1)):(k=de(o),k.c(),H(k,1),k.m(n,null)),(!v||p&2)&&W(s,"text-gray-500",o[1]),(!v||p&2)&&W(s,"font-flow",o[1]),P&&P.p&&(!v||p&2048)&&se(P,ae,o,o[11],v?oe(ae,o[11],p,ze):ne(o[11]),Pe)},i:function(o){v||(H(V,o),H(N,o),H(k),H(P,o),v=!0)},o:function(o){q(V,o),q(N,o),q(k),q(P,o),v=!1},d:function(o){o&&g(e),I.d(),V&&V.d(o),N&&N.d(o),k&&k.d(),t[14](null),P&&P.d(o),re=!1,Me(he)}};return _("SvelteRegisterBlock",{block:ge,id:pe.name,type:"component",source:"",ctx:t}),ge}function Ke(t,e,s){let f,i,r,{$$slots:l={},$$scope:d}=e;Qe("FicsitCard",l,["stats","tags","actions","outer"]);let{name:w=""}=e,{logo:u=fe+"/images/no_image.webp"}=e,{description:C=""}=e,{link:x="/"}=e,{fake:c=!1}=e,h=!1,L;const O=()=>{h||(L=setTimeout(()=>{h=!0,Ee(x)},250))},F=()=>{h||clearTimeout(L)};let j;const M=["name","logo","description","link","fake"];Object.keys(e).forEach(n=>{!~M.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<FicsitCard> was created with unknown prop '${n}'`)});const S=()=>$e(x);function T(n){Te[n?"unshift":"push"](()=>{j=n,s(2,j)})}return t.$$set=n=>{"name"in n&&s(8,w=n.name),"logo"in n&&s(9,u=n.logo),"description"in n&&s(10,C=n.description),"link"in n&&s(0,x=n.link),"fake"in n&&s(1,c=n.fake),"$$scope"in n&&s(11,d=n.$$scope)},t.$capture_state=()=>({assets:fe,goto:$e,preloadData:Ee,name:w,logo:u,description:C,link:x,fake:c,preloaded:h,timeoutHandle:L,onOver:O,onOut:F,actionButtons:j,renderedDescription:r,renderedName:i,renderedLogo:f}),t.$inject_state=n=>{"name"in n&&s(8,w=n.name),"logo"in n&&s(9,u=n.logo),"description"in n&&s(10,C=n.description),"link"in n&&s(0,x=n.link),"fake"in n&&s(1,c=n.fake),"preloaded"in n&&(h=n.preloaded),"timeoutHandle"in n&&(L=n.timeoutHandle),"actionButtons"in n&&s(2,j=n.actionButtons),"renderedDescription"in n&&s(3,r=n.renderedDescription),"renderedName"in n&&s(4,i=n.renderedName),"renderedLogo"in n&&s(5,f=n.renderedLogo)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&512&&s(5,f=u||fe+"/images/no_image.webp"),t.$$.dirty&258&&s(4,i=w||c&&"Card Name"),t.$$.dirty&1026&&s(3,r=C||c&&"Short card description")},[x,c,j,r,i,f,O,F,w,u,C,d,l,S,T]}class et extends Ze{constructor(e){super(e),_e(this,e,Ke,pe,Oe,{name:8,logo:9,description:10,link:0,fake:1}),_("SvelteRegisterComponent",{component:this,tagName:"FicsitCard",options:e,id:pe.name})}get name(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get description(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set description(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get link(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set link(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fake(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fake(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{et as F};
//# sourceMappingURL=FicsitCard.692dea2b.js.map
