import{S as K,i as X,s as Z,aD as ge,G as q,H as A,I as B,m as p,t as $,L as N,aE as he,e as k,B as I,a as V,c as U,d as w,C,f as m,g as S,A as E,j,a3 as g,D as x,an as re,r as M,_ as pe,b as R,ai as $e,l as Q,Y as ve,q as be,k as W,a4 as se,aa as ae}from"../../../chunks/vendor-556bddb0.js";import{M as ke}from"../../../chunks/MetaDescriptors-27aa6f3e.js";import{l as Ue}from"../../../chunks/gql-65574325.js";import{h as je}from"../../../chunks/graphql-4793b2e5.js";import{p as we}from"../../../chunks/routing-689f9c1f.js";import{a as ne}from"../../../chunks/formatting-24701f16.js";import{a as Ee,b as De}from"../../../chunks/paths-396f020f.js";import{M as Ie}from"../../../chunks/ModCard-9d29a8be.js";import{G as Ce}from"../../../chunks/GuideCard-9e530ec3.js";import{a as Ge}from"../../../chunks/user-d1f56c1d.js";import"../../../chunks/stores-e6767543.js";import"../../../chunks/global-75c7043e.js";import"../../../chunks/FicsitCard-b29bd3cd.js";import"../../../chunks/navigation-d7362a67.js";import"../../../chunks/singletons-d19c42e4.js";import"../../../chunks/launcher-fdfa7847.js";import"../../../chunks/mod-ac31d2fd.js";function Me(n){let e,r,t,a,s,f,l,i,c=ne(n[0].created_at)+"",o,u;return{c(){e=k("div"),r=k("h3"),t=I("Info"),a=V(),s=k("span"),f=k("strong"),l=I("Created:"),i=V(),o=I(c),u=k("br"),this.h()},l(d){e=U(d,"DIV",{class:!0});var h=w(e);r=U(h,"H3",{class:!0});var L=w(r);t=C(L,"Info"),L.forEach(m),a=S(h),s=U(h,"SPAN",{});var D=w(s);f=U(D,"STRONG",{});var G=w(f);l=C(G,"Created:"),G.forEach(m),i=S(D),o=C(D,c),D.forEach(m),u=U(h,"BR",{}),h.forEach(m),this.h()},h(){E(r,"class","text-2xl my-4 font-bold"),E(e,"class","text-lg")},m(d,h){j(d,e,h),g(e,r),g(r,t),g(e,a),g(e,s),g(s,f),g(f,l),g(s,i),g(s,o),g(e,u)},p(d,h){h&1&&c!==(c=ne(d[0].created_at)+"")&&x(o,c)},d(d){d&&m(e)}}}function Ve(n){let e,r;return e=new he({props:{$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const s={};a&3&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Se(n){let e,r;return e=new ge({props:{$$slots:{default:[Ve]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,[a]){const s={};a&3&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function qe(n,e,r){let{user:t}=e;return n.$$set=a=>{"user"in a&&r(0,t=a.user)},[t]}class Ae extends K{constructor(e){super();X(this,e,qe,Se,Z,{user:0})}}function Be(n){let e,r,t,a;return{c(){e=k("div"),r=k("img"),this.h()},l(s){e=U(s,"DIV",{});var f=w(e);r=U(f,"IMG",{class:!0,src:!0,alt:!0}),f.forEach(m),this.h()},h(){E(r,"class","rounded-lg sm:max-w-lg max-w-full w-full"),re(r.src,t=n[1])||E(r,"src",t),E(r,"alt",a="Avatar for "+n[0])},m(s,f){j(s,e,f),g(e,r)},p(s,[f]){f&2&&!re(r.src,t=s[1])&&E(r,"src",t),f&1&&a!==(a="Avatar for "+s[0])&&E(r,"alt",a)},i:M,o:M,d(s){s&&m(e)}}}function Ne(n,e,r){let t,{avatar:a}=e,{username:s}=e;return n.$$set=f=>{"avatar"in f&&r(2,a=f.avatar),"username"in f&&r(0,s=f.username)},n.$$.update=()=>{n.$$.dirty&4&&r(1,t=a||Ee+"/images/no_image.png")},[s,t,a]}class Pe extends K{constructor(e){super();X(this,e,Ne,Be,Z,{avatar:2,username:0})}}function le(n,e,r){const t=n.slice();return t[8]=e[r],t}function oe(n,e,r){const t=n.slice();return t[5]=e[r],t}function ie(n){let e,r;return e=new ke({props:{description:""+(n[2].data.getUser.username+" profile"),title:""+(n[2].data.getUser.username+" profile")}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.description=""+(t[2].data.getUser.username+" profile")),a&4&&(s.title=""+(t[2].data.getUser.username+" profile")),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Fe(n){let e;return{c(){e=I("404")},l(r){e=C(r,"404")},m(r,t){j(r,e,t)},p:M,i:M,o:M,d(r){r&&m(e)}}}function He(n){let e,r,t,a=n[2].data.getUser.username+"",s,f,l,i,c,o,u,d,h,L,D,G,J,P,Y,v=n[3]&&n[2].data.getUser.id===n[3].id&&ce(n);c=new se({props:{variant:"outlined",$$slots:{default:[Qe]},$$scope:{ctx:n}}}),c.$on("click",n[4]);const ee=[Ye,We],F=[];function te(_,b){return _[1]?1:0}return d=te(n),h=F[d]=ee[d](n),G=new Pe({props:{avatar:n[2].data.getUser.avatar,username:n[2].data.getUser.username}}),P=new Ae({props:{user:n[2].data.getUser}}),{c(){e=k("div"),r=k("div"),t=k("h1"),s=I(a),f=V(),l=k("div"),v&&v.c(),i=V(),q(c.$$.fragment),o=V(),u=k("div"),h.c(),L=V(),D=k("div"),q(G.$$.fragment),J=V(),q(P.$$.fragment),this.h()},l(_){e=U(_,"DIV",{class:!0});var b=w(e);r=U(b,"DIV",{class:!0});var O=w(r);t=U(O,"H1",{class:!0});var y=w(t);s=C(y,a),y.forEach(m),f=S(O),l=U(O,"DIV",{});var H=w(l);v&&v.l(H),i=S(H),A(c.$$.fragment,H),H.forEach(m),O.forEach(m),o=S(b),u=U(b,"DIV",{class:!0});var T=w(u);h.l(T),L=S(T),D=U(T,"DIV",{class:!0});var z=w(D);A(G.$$.fragment,z),J=S(z),A(P.$$.fragment,z),z.forEach(m),T.forEach(m),b.forEach(m),this.h()},h(){E(t,"class","text-4xl font-bold"),E(r,"class","flex flex-wrap h-auto justify-between items-center"),E(D,"class","grid grid-cols-1 auto-rows-min gap-8"),E(u,"class","grid grid-auto-max auto-cols-fr gap-4"),E(e,"class","grid gap-6 xlx:grid-flow-row")},m(_,b){j(_,e,b),g(e,r),g(r,t),g(t,s),g(r,f),g(r,l),v&&v.m(l,null),g(l,i),B(c,l,null),g(e,o),g(e,u),F[d].m(u,null),g(u,L),g(u,D),B(G,D,null),g(D,J),B(P,D,null),Y=!0},p(_,b){(!Y||b&4)&&a!==(a=_[2].data.getUser.username+"")&&x(s,a),_[3]&&_[2].data.getUser.id===_[3].id?v?(v.p(_,b),b&12&&p(v,1)):(v=ce(_),v.c(),p(v,1),v.m(l,i)):v&&(W(),$(v,1,1,()=>{v=null}),Q());const O={};b&2050&&(O.$$scope={dirty:b,ctx:_}),c.$set(O);let y=d;d=te(_),d===y?F[d].p(_,b):(W(),$(F[y],1,1,()=>{F[y]=null}),Q(),h=F[d],h?h.p(_,b):(h=F[d]=ee[d](_),h.c()),p(h,1),h.m(u,L));const H={};b&4&&(H.avatar=_[2].data.getUser.avatar),b&4&&(H.username=_[2].data.getUser.username),G.$set(H);const T={};b&4&&(T.user=_[2].data.getUser),P.$set(T)},i(_){Y||(p(v),p(c.$$.fragment,_),p(h),p(G.$$.fragment,_),p(P.$$.fragment,_),Y=!0)},o(_){$(v),$(c.$$.fragment,_),$(h),$(G.$$.fragment,_),$(P.$$.fragment,_),Y=!1},d(_){_&&m(e),v&&v.d(),N(c),F[d].d(),N(G),N(P)}}}function Le(n){let e,r,t=n[2].error.message+"",a;return{c(){e=k("p"),r=I("Oh no... "),a=I(t)},l(s){e=U(s,"P",{});var f=w(e);r=C(f,"Oh no... "),a=C(f,t),f.forEach(m)},m(s,f){j(s,e,f),g(e,r),g(e,a)},p(s,f){f&4&&t!==(t=s[2].error.message+"")&&x(a,t)},i:M,o:M,d(s){s&&m(e)}}}function Oe(n){let e,r;return{c(){e=k("p"),r=I("Loading...")},l(t){e=U(t,"P",{});var a=w(e);r=C(a,"Loading..."),a.forEach(m)},m(t,a){j(t,e,a),g(e,r)},p:M,i:M,o:M,d(t){t&&m(e)}}}function ce(n){let e,r;return e=new se({props:{variant:"outlined",href:""+(De+"/settings"),$$slots:{default:[Te]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const s={};a&2048&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Te(n){let e;return{c(){e=I("Settings")},l(r){e=C(r,"Settings")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function ye(n){let e;return{c(){e=I("Mods")},l(r){e=C(r,"Mods")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function Re(n){let e;return{c(){e=I("Guides")},l(r){e=C(r,"Guides")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function Qe(n){let e;function r(s,f){return s[1]?ye:Re}let t=r(n),a=t(n);return{c(){a.c(),e=R()},l(s){a.l(s),e=R()},m(s,f){a.m(s,f),j(s,e,f)},p(s,f){t!==(t=r(s))&&(a.d(1),a=t(s),a&&(a.c(),a.m(e.parentNode,e)))},d(s){a.d(s),s&&m(e)}}}function We(n){let e,r,t,a=n[2].data.getUser.guides,s=[];for(let i=0;i<a.length;i+=1)s[i]=fe(le(n,a,i));const f=i=>$(s[i],1,1,()=>{s[i]=null});let l=n[2].data.getUser.guides.length===0&&ue();return{c(){e=k("div");for(let i=0;i<s.length;i+=1)s[i].c();r=V(),l&&l.c(),this.h()},l(i){e=U(i,"DIV",{class:!0});var c=w(e);for(let o=0;o<s.length;o+=1)s[o].l(c);r=S(c),l&&l.l(c),c.forEach(m),this.h()},h(){E(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit")},m(i,c){j(i,e,c);for(let o=0;o<s.length;o+=1)s[o].m(e,null);g(e,r),l&&l.m(e,null),t=!0},p(i,c){if(c&4){a=i[2].data.getUser.guides;let o;for(o=0;o<a.length;o+=1){const u=le(i,a,o);s[o]?(s[o].p(u,c),p(s[o],1)):(s[o]=fe(u),s[o].c(),p(s[o],1),s[o].m(e,r))}for(W(),o=a.length;o<s.length;o+=1)f(o);Q()}i[2].data.getUser.guides.length===0?l||(l=ue(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(i){if(!t){for(let c=0;c<a.length;c+=1)p(s[c]);t=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$(s[c]);t=!1},d(i){i&&m(e),ae(s,i),l&&l.d()}}}function Ye(n){let e,r,t,a=n[2].data.getUser.mods,s=[];for(let i=0;i<a.length;i+=1)s[i]=de(oe(n,a,i));const f=i=>$(s[i],1,1,()=>{s[i]=null});let l=n[2].data.getUser.mods.length===0&&me();return{c(){e=k("div");for(let i=0;i<s.length;i+=1)s[i].c();r=V(),l&&l.c(),this.h()},l(i){e=U(i,"DIV",{class:!0});var c=w(e);for(let o=0;o<s.length;o+=1)s[o].l(c);r=S(c),l&&l.l(c),c.forEach(m),this.h()},h(){E(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit")},m(i,c){j(i,e,c);for(let o=0;o<s.length;o+=1)s[o].m(e,null);g(e,r),l&&l.m(e,null),t=!0},p(i,c){if(c&4){a=i[2].data.getUser.mods;let o;for(o=0;o<a.length;o+=1){const u=oe(i,a,o);s[o]?(s[o].p(u,c),p(s[o],1)):(s[o]=de(u),s[o].c(),p(s[o],1),s[o].m(e,r))}for(W(),o=a.length;o<s.length;o+=1)f(o);Q()}i[2].data.getUser.mods.length===0?l||(l=me(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(i){if(!t){for(let c=0;c<a.length;c+=1)p(s[c]);t=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$(s[c]);t=!1},d(i){i&&m(e),ae(s,i),l&&l.d()}}}function fe(n){let e,r;return e=new Ce({props:{guide:n[8],logo:n[2].data.getUser.avatar}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.guide=t[8]),a&4&&(s.logo=t[2].data.getUser.avatar),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function ue(n){let e;return{c(){e=I("User has no guides")},l(r){e=C(r,"User has no guides")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function de(n){let e,r;return e=new Ie({props:{mod:n[5].mod}}),{c(){q(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){B(e,t,a),r=!0},p(t,a){const s={};a&4&&(s.mod=t[5].mod),e.$set(s)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function me(n){let e;return{c(){e=I("User has no mods")},l(r){e=C(r,"User has no mods")},m(r,t){j(r,e,t)},d(r){r&&m(e)}}}function ze(n){let e,r,t,a,s,f,l=!n[2].fetching&&!n[2].error&&n[2].data.getUser&&ie(n);const i=[Oe,Le,He,Fe],c=[];function o(u,d){return u[2].fetching?0:u[2].error?1:u[2].data.getUser?2:3}return t=o(n),a=c[t]=i[t](n),{c(){l&&l.c(),e=R(),r=V(),a.c(),s=R()},l(u){const d=$e('[data-svelte="svelte-10jr2sa"]',document.head);l&&l.l(d),e=R(),d.forEach(m),r=S(u),a.l(u),s=R()},m(u,d){l&&l.m(document.head,null),g(document.head,e),j(u,r,d),c[t].m(u,d),j(u,s,d),f=!0},p(u,[d]){!u[2].fetching&&!u[2].error&&u[2].data.getUser?l?(l.p(u,d),d&4&&p(l,1)):(l=ie(u),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(W(),$(l,1,1,()=>{l=null}),Q());let h=t;t=o(u),t===h?c[t].p(u,d):(W(),$(c[h],1,1,()=>{c[h]=null}),Q(),a=c[t],a?a.p(u,d):(a=c[t]=i[t](u),a.c()),p(a,1),a.m(s.parentNode,s))},i(u){f||(p(l),p(a),f=!0)},o(u){$(l),$(a),f=!1},d(u){l&&l.d(u),m(e),u&&m(r),c[t].d(u),u&&m(s)}}}const _e=pe(je,{user:void 0}),mt=we(async n=>(_e.variables.user=n.params.userId,Ue({user:_e})(n)));function Je(n,e,r){let t,a=M,s=()=>(a(),a=be(l,o=>r(2,t=o)),l),f;ve(n,Ge,o=>r(3,f=o)),n.$$.on_destroy.push(()=>a());let{user:l}=e;s();let i=!1;const c=()=>r(1,i=!i);return n.$$set=o=>{"user"in o&&s(r(0,l=o.user))},[l,i,t,f,c]}class _t extends K{constructor(e){super();X(this,e,Je,ze,Z,{user:0})}}export{_t as default,mt as load};
//# sourceMappingURL=index.svelte-39a8fa17.js.map
