import{S as Nt,i as Ot,d as k,s as Tt,bg as ut,v as qt,aI as it,aJ as ct,aY as Y,bh as tt,aO as M,a2 as w,a0 as S,k as I,ba as Ht,a3 as B,q as p,a1 as V,a4 as b,l as v,p as d,t as g,n as U,a6 as R,L as Lt,am as zt,x as A,y as N,z as O,B as T,a8 as et,a7 as j,m as q,aZ as rt,aa as D,ab as C,ac as z,a_ as Gt}from"../chunks/vendor.3b08e99d.js";import{o as st,p as ft,q as lt}from"../chunks/graphql.769656ab.js";import{P as nt}from"../chunks/PageControls.585fec0d.js";import{a as Z}from"../chunks/api.736caaaa.js";import"../chunks/user.65736ff2.js";import{M as at}from"../chunks/MetaDescriptors.2bca5674.js";import{D as mt,H as pt,B as dt,R as ot,C as P}from"../chunks/forms.d7818631.js";import{p as F}from"../chunks/formatting.6f84ef8f.js";const H="src/routes/admin/unapproved-versions/+page.svelte";function $t(r,t,o){const i=r.slice();return i[8]=t[o],i}function K(r){let t,o,i,e;i=new nt({props:{totalPages:Math.ceil(r[2]/_),currentPage:L},$$inline:!0});const n={c:function(){t=A("div"),o=A("div"),w(i.$$.fragment),this.h()},l:function(s){t=N(s,"DIV",{class:!0});var l=O(t);o=N(l,"DIV",{});var $=O(o);B(i.$$.fragment,$),$.forEach(p),l.forEach(p),this.h()},h:function(){T(o,H,51,4,1598),et(t,"class","mb-5 ml-auto flex justify-end"),T(t,H,50,2,1550)},m:function(s,l){v(s,t,l),j(t,o),b(i,o,null),e=!0},p:function(s,l){const $={};l&4&&($.totalPages=Math.ceil(s[2]/_)),i.$set($)},i:function(s){e||(d(i.$$.fragment,s),e=!0)},o:function(s){g(i.$$.fragment,s),e=!1},d:function(s){s&&p(t),R(i)}};return k("SvelteRegisterBlock",{block:n,id:K.name,type:"if",source:"(50:0) {#if totalVersions}",ctx:r}),n}function gt(r){let t,o;t=new mt({props:{class:"max-w-full",$$slots:{default:[Mt]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){B(t.$$.fragment,n)},m:function(n,c){b(t,n,c),o=!0},p:function(n,c){const s={};c&2049&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(d(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:gt.name,type:"else",source:"(63:2) {:else}",ctx:r}),i}function vt(r){let t,o;t=new tt({props:{$$slots:{default:[jt]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){B(t.$$.fragment,n)},m:function(n,c){b(t,n,c),o=!0},p:function(n,c){const s={};c&2049&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(d(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:vt.name,type:"if",source:"(61:28) ",ctx:r}),i}function xt(r){let t,o;t=new tt({props:{$$slots:{default:[Ut]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){B(t.$$.fragment,n)},m:function(n,c){b(t,n,c),o=!0},p:function(n,c){const s={};c&2048&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(d(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:xt.name,type:"if",source:"(59:2) {#if $versions.fetching}",ctx:r}),i}function yt(r){let t;const o={c:function(){t=D("Mod")},l:function(e){t=C(e,"Mod")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:yt.name,type:"slot",source:"(67:10) <Cell>",ctx:r}),o}function kt(r){let t;const o={c:function(){t=D("Version")},l:function(e){t=C(e,"Version")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:kt.name,type:"slot",source:"(68:10) <Cell>",ctx:r}),o}function ht(r){let t;const o={c:function(){t=D("Release Date")},l:function(e){t=C(e,"Release Date")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:ht.name,type:"slot",source:"(69:10) <Cell>",ctx:r}),o}function wt(r){let t,o,i,e,n,c,s,l;t=new P({props:{$$slots:{default:[yt]},$$scope:{ctx:r}},$$inline:!0}),i=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:r}},$$inline:!0}),n=new P({props:{$$slots:{default:[ht]},$$scope:{ctx:r}},$$inline:!0}),s=new P({$$inline:!0});const $={c:function(){w(t.$$.fragment),o=S(),w(i.$$.fragment),e=S(),w(n.$$.fragment),c=S(),w(s.$$.fragment)},l:function(u){B(t.$$.fragment,u),o=V(u),B(i.$$.fragment,u),e=V(u),B(n.$$.fragment,u),c=V(u),B(s.$$.fragment,u)},m:function(u,f){b(t,u,f),v(u,o,f),b(i,u,f),v(u,e,f),b(n,u,f),v(u,c,f),b(s,u,f),l=!0},p:function(u,f){const m={};f&2048&&(m.$$scope={dirty:f,ctx:u}),t.$set(m);const y={};f&2048&&(y.$$scope={dirty:f,ctx:u}),i.$set(y);const x={};f&2048&&(x.$$scope={dirty:f,ctx:u}),n.$set(x)},i:function(u){l||(d(t.$$.fragment,u),d(i.$$.fragment,u),d(n.$$.fragment,u),d(s.$$.fragment,u),l=!0)},o:function(u){g(t.$$.fragment,u),g(i.$$.fragment,u),g(n.$$.fragment,u),g(s.$$.fragment,u),l=!1},d:function(u){R(t,u),u&&p(o),R(i,u),u&&p(e),R(n,u),u&&p(c),R(s,u)}};return k("SvelteRegisterBlock",{block:$,id:wt.name,type:"slot",source:"(66:8) <Row>",ctx:r}),$}function Bt(r){let t,o;t=new ot({props:{$$slots:{default:[wt]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){B(t.$$.fragment,n)},m:function(n,c){b(t,n,c),o=!0},p:function(n,c){const s={};c&2048&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(d(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:Bt.name,type:"slot",source:"(65:6) <Head>",ctx:r}),i}function bt(r){let t=r[8].mod.name+"",o;const i={c:function(){o=D(t)},l:function(n){o=C(n,t)},m:function(n,c){v(n,o,c)},p:function(n,c){c&1&&t!==(t=n[8].mod.name+"")&&z(o,t)},d:function(n){n&&p(o)}};return k("SvelteRegisterBlock",{block:i,id:bt.name,type:"slot",source:"(76:12) <Cell>",ctx:r}),i}function Rt(r){let t=r[8].version+"",o;const i={c:function(){o=D(t)},l:function(n){o=C(n,t)},m:function(n,c){v(n,o,c)},p:function(n,c){c&1&&t!==(t=n[8].version+"")&&z(o,t)},d:function(n){n&&p(o)}};return k("SvelteRegisterBlock",{block:i,id:Rt.name,type:"slot",source:"(77:12) <Cell>",ctx:r}),i}function St(r){let t=F(r[8].created_at)+"",o;const i={c:function(){o=D(t)},l:function(n){o=C(n,t)},m:function(n,c){v(n,o,c)},p:function(n,c){c&1&&t!==(t=F(n[8].created_at)+"")&&z(o,t)},d:function(n){n&&p(o)}};return k("SvelteRegisterBlock",{block:i,id:St.name,type:"slot",source:"(78:12) <Cell>",ctx:r}),i}function Vt(r){let t;const o={c:function(){t=D("Approve")},l:function(e){t=C(e,"Approve")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:Vt.name,type:"slot",source:'(81:16) <Button variant=\\"outlined\\" on:click={() => approveVersion(version.id)}>',ctx:r}),o}function Dt(r){let t;const o={c:function(){t=D("Deny")},l:function(e){t=C(e,"Deny")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:Dt.name,type:"slot",source:'(82:16) <Button variant=\\"outlined\\" on:click={() => denyVersion(version.id)}>',ctx:r}),o}function Ct(r){let t;const o={c:function(){t=D("Download")},l:function(e){t=C(e,"Download")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:Ct.name,type:"slot",source:`(83:16) <Button                   variant=\\"outlined\\"                   href={API_REST + '/mod/' + version.mod_id + '/versions/' + version.id + '/download'}>`,ctx:r}),o}function Pt(r){let t;const o={c:function(){t=D("View")},l:function(e){t=C(e,"View")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:Pt.name,type:"slot",source:`(88:16) <Button variant=\\"outlined\\" href={base + '/mod/' + version.mod_id + '/version/' + version.id}>`,ctx:r}),o}function _t(r){let t,o,i,e,n,c,s,l,$;function a(){return r[5](r[8])}o=new M({props:{variant:"outlined",$$slots:{default:[Vt]},$$scope:{ctx:r}},$$inline:!0}),o.$on("click",a);function u(){return r[6](r[8])}e=new M({props:{variant:"outlined",$$slots:{default:[Dt]},$$scope:{ctx:r}},$$inline:!0}),e.$on("click",u),c=new M({props:{variant:"outlined",href:Z+"/mod/"+r[8].mod_id+"/versions/"+r[8].id+"/download",$$slots:{default:[Ct]},$$scope:{ctx:r}},$$inline:!0}),l=new M({props:{variant:"outlined",href:Y+"/mod/"+r[8].mod_id+"/version/"+r[8].id,$$slots:{default:[Pt]},$$scope:{ctx:r}},$$inline:!0});const f={c:function(){t=A("div"),w(o.$$.fragment),i=S(),w(e.$$.fragment),n=S(),w(c.$$.fragment),s=S(),w(l.$$.fragment),this.h()},l:function(y){t=N(y,"DIV",{class:!0});var x=O(t);B(o.$$.fragment,x),i=V(x),B(e.$$.fragment,x),n=V(x),B(c.$$.fragment,x),s=V(x),B(l.$$.fragment,x),x.forEach(p),this.h()},h:function(){et(t,"class","grid grid-flow-col gap-4"),T(t,H,79,14,2391)},m:function(y,x){v(y,t,x),b(o,t,null),j(t,i),b(e,t,null),j(t,n),b(c,t,null),j(t,s),b(l,t,null),$=!0},p:function(y,x){r=y;const h={};x&2048&&(h.$$scope={dirty:x,ctx:r}),o.$set(h);const E={};x&2048&&(E.$$scope={dirty:x,ctx:r}),e.$set(E);const G={};x&1&&(G.href=Z+"/mod/"+r[8].mod_id+"/versions/"+r[8].id+"/download"),x&2048&&(G.$$scope={dirty:x,ctx:r}),c.$set(G);const J={};x&1&&(J.href=Y+"/mod/"+r[8].mod_id+"/version/"+r[8].id),x&2048&&(J.$$scope={dirty:x,ctx:r}),l.$set(J)},i:function(y){$||(d(o.$$.fragment,y),d(e.$$.fragment,y),d(c.$$.fragment,y),d(l.$$.fragment,y),$=!0)},o:function(y){g(o.$$.fragment,y),g(e.$$.fragment,y),g(c.$$.fragment,y),g(l.$$.fragment,y),$=!1},d:function(y){y&&p(t),R(o),R(e),R(c),R(l)}};return k("SvelteRegisterBlock",{block:f,id:_t.name,type:"slot",source:"(79:12) <Cell>",ctx:r}),f}function It(r){let t,o,i,e,n,c,s,l,$;t=new P({props:{$$slots:{default:[bt]},$$scope:{ctx:r}},$$inline:!0}),i=new P({props:{$$slots:{default:[Rt]},$$scope:{ctx:r}},$$inline:!0}),n=new P({props:{$$slots:{default:[St]},$$scope:{ctx:r}},$$inline:!0}),s=new P({props:{$$slots:{default:[_t]},$$scope:{ctx:r}},$$inline:!0});const a={c:function(){w(t.$$.fragment),o=S(),w(i.$$.fragment),e=S(),w(n.$$.fragment),c=S(),w(s.$$.fragment),l=S()},l:function(f){B(t.$$.fragment,f),o=V(f),B(i.$$.fragment,f),e=V(f),B(n.$$.fragment,f),c=V(f),B(s.$$.fragment,f),l=V(f)},m:function(f,m){b(t,f,m),v(f,o,m),b(i,f,m),v(f,e,m),b(n,f,m),v(f,c,m),b(s,f,m),v(f,l,m),$=!0},p:function(f,m){const y={};m&2049&&(y.$$scope={dirty:m,ctx:f}),t.$set(y);const x={};m&2049&&(x.$$scope={dirty:m,ctx:f}),i.$set(x);const h={};m&2049&&(h.$$scope={dirty:m,ctx:f}),n.$set(h);const E={};m&2049&&(E.$$scope={dirty:m,ctx:f}),s.$set(E)},i:function(f){$||(d(t.$$.fragment,f),d(i.$$.fragment,f),d(n.$$.fragment,f),d(s.$$.fragment,f),$=!0)},o:function(f){g(t.$$.fragment,f),g(i.$$.fragment,f),g(n.$$.fragment,f),g(s.$$.fragment,f),$=!1},d:function(f){R(t,f),f&&p(o),R(i,f),f&&p(e),R(n,f),f&&p(c),R(s,f),f&&p(l)}};return k("SvelteRegisterBlock",{block:a,id:It.name,type:"slot",source:"(75:10) <Row>",ctx:r}),a}function Q(r){let t,o;t=new ot({props:{$$slots:{default:[It]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(n){B(t.$$.fragment,n)},m:function(n,c){b(t,n,c),o=!0},p:function(n,c){const s={};c&2049&&(s.$$scope={dirty:c,ctx:n}),t.$set(s)},i:function(n){o||(d(t.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),o=!1},d:function(n){R(t,n)}};return k("SvelteRegisterBlock",{block:i,id:Q.name,type:"each",source:"(74:8) {#each $versions.data.getUnapprovedVersions.versions as version}",ctx:r}),i}function Et(r){let t,o,i=r[0].data.getUnapprovedVersions.versions;rt(i);let e=[];for(let s=0;s<i.length;s+=1)e[s]=Q($t(r,i,s));const n=s=>g(e[s],1,1,()=>{e[s]=null}),c={c:function(){for(let l=0;l<e.length;l+=1)e[l].c();t=I()},l:function(l){for(let $=0;$<e.length;$+=1)e[$].l(l);t=I()},m:function(l,$){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,$);v(l,t,$),o=!0},p:function(l,$){if($&25){i=l[0].data.getUnapprovedVersions.versions,rt(i);let a;for(a=0;a<i.length;a+=1){const u=$t(l,i,a);e[a]?(e[a].p(u,$),d(e[a],1)):(e[a]=Q(u),e[a].c(),d(e[a],1),e[a].m(t.parentNode,t))}for(q(),a=i.length;a<e.length;a+=1)n(a);U()}},i:function(l){if(!o){for(let $=0;$<i.length;$+=1)d(e[$]);o=!0}},o:function(l){e=e.filter(Boolean);for(let $=0;$<e.length;$+=1)g(e[$]);o=!1},d:function(l){Gt(e,l),l&&p(t)}};return k("SvelteRegisterBlock",{block:c,id:Et.name,type:"slot",source:"(73:6) <Body>",ctx:r}),c}function Mt(r){let t,o,i,e;t=new pt({props:{$$slots:{default:[Bt]},$$scope:{ctx:r}},$$inline:!0}),i=new dt({props:{$$slots:{default:[Et]},$$scope:{ctx:r}},$$inline:!0});const n={c:function(){w(t.$$.fragment),o=S(),w(i.$$.fragment)},l:function(s){B(t.$$.fragment,s),o=V(s),B(i.$$.fragment,s)},m:function(s,l){b(t,s,l),v(s,o,l),b(i,s,l),e=!0},p:function(s,l){const $={};l&2048&&($.$$scope={dirty:l,ctx:s}),t.$set($);const a={};l&2049&&(a.$$scope={dirty:l,ctx:s}),i.$set(a)},i:function(s){e||(d(t.$$.fragment,s),d(i.$$.fragment,s),e=!0)},o:function(s){g(t.$$.fragment,s),g(i.$$.fragment,s),e=!1},d:function(s){R(t,s),s&&p(o),R(i,s)}};return k("SvelteRegisterBlock",{block:n,id:Mt.name,type:"slot",source:'(64:4) <DataTable class=\\"max-w-full\\">',ctx:r}),n}function jt(r){let t,o=r[0].error.message+"",i;const e={c:function(){t=D("Oh no... "),i=D(o)},l:function(c){t=C(c,"Oh no... "),i=C(c,o)},m:function(c,s){v(c,t,s),v(c,i,s)},p:function(c,s){s&1&&o!==(o=c[0].error.message+"")&&z(i,o)},d:function(c){c&&p(t),c&&p(i)}};return k("SvelteRegisterBlock",{block:e,id:jt.name,type:"slot",source:"(62:4) <Content>",ctx:r}),e}function Ut(r){let t;const o={c:function(){t=D("Loading...")},l:function(e){t=C(e,"Loading...")},m:function(e,n){v(e,t,n)},d:function(e){e&&p(t)}};return k("SvelteRegisterBlock",{block:o,id:Ut.name,type:"slot",source:"(60:4) <Content>",ctx:r}),o}function At(r){let t,o,i,e;const n=[xt,vt,gt],c=[];function s($,a){return $[0].fetching?0:$[0].error?1:2}t=s(r),o=c[t]=n[t](r);const l={c:function(){o.c(),i=I()},l:function(a){o.l(a),i=I()},m:function(a,u){c[t].m(a,u),v(a,i,u),e=!0},p:function(a,u){let f=t;t=s(a),t===f?c[t].p(a,u):(q(),g(c[f],1,1,()=>{c[f]=null}),U(),o=c[t],o?o.p(a,u):(o=c[t]=n[t](a),o.c()),d(o,1),o.m(i.parentNode,i))},i:function(a){e||(d(o),e=!0)},o:function(a){g(o),e=!1},d:function(a){c[t].d(a),a&&p(i)}};return k("SvelteRegisterBlock",{block:l,id:At.name,type:"slot",source:"(58:0) <Card>",ctx:r}),l}function W(r){let t,o,i;o=new nt({props:{totalPages:Math.ceil(r[2]/_),currentPage:L},$$inline:!0});const e={c:function(){t=A("div"),w(o.$$.fragment),this.h()},l:function(c){t=N(c,"DIV",{class:!0});var s=O(t);B(o.$$.fragment,s),s.forEach(p),this.h()},h:function(){et(t,"class","mt-5 ml-auto flex justify-end"),T(t,H,100,2,3153)},m:function(c,s){v(c,t,s),b(o,t,null),i=!0},p:function(c,s){const l={};s&4&&(l.totalPages=Math.ceil(c[2]/_)),o.$set(l)},i:function(c){i||(d(o.$$.fragment,c),i=!0)},o:function(c){g(o.$$.fragment,c),i=!1},d:function(c){c&&p(t),R(o)}};return k("SvelteRegisterBlock",{block:e,id:W.name,type:"if",source:"(100:0) {#if totalVersions}",ctx:r}),e}function X(r){let t,o,i,e,n,c,s;t=new at({props:{description:"Unapproved mod versions",title:"Admin: Unapproved Versions"},$$inline:!0});let l=r[2]&&K(r);e=new ut({props:{$$slots:{default:[At]},$$scope:{ctx:r}},$$inline:!0});let $=r[2]&&W(r);const a={c:function(){w(t.$$.fragment),o=S(),l&&l.c(),i=S(),w(e.$$.fragment),n=S(),$&&$.c(),c=I()},l:function(f){const m=Ht("svelte-c87g9p",document.head);B(t.$$.fragment,m),m.forEach(p),o=V(f),l&&l.l(f),i=V(f),B(e.$$.fragment,f),n=V(f),$&&$.l(f),c=I()},m:function(f,m){b(t,document.head,null),v(f,o,m),l&&l.m(f,m),v(f,i,m),b(e,f,m),v(f,n,m),$&&$.m(f,m),v(f,c,m),s=!0},p:function(f,[m]){f[2]?l?(l.p(f,m),m&4&&d(l,1)):(l=K(f),l.c(),d(l,1),l.m(i.parentNode,i)):l&&(q(),g(l,1,1,()=>{l=null}),U());const y={};m&2049&&(y.$$scope={dirty:m,ctx:f}),e.$set(y),f[2]?$?($.p(f,m),m&4&&d($,1)):($=W(f),$.c(),d($,1),$.m(c.parentNode,c)):$&&(q(),g($,1,1,()=>{$=null}),U())},i:function(f){s||(d(t.$$.fragment,f),d(l),d(e.$$.fragment,f),d($),s=!0)},o:function(f){g(t.$$.fragment,f),g(l),g(e.$$.fragment,f),g($),s=!1},d:function(f){R(t),f&&p(o),l&&l.d(f),f&&p(i),R(e,f),f&&p(n),$&&$.d(f),f&&p(c)}};return k("SvelteRegisterBlock",{block:a,id:X.name,type:"component",source:"",ctx:r}),a}const _=20,L=1;function Jt(r,t,o){let i,e,n,c=Lt,s=()=>(c(),c=zt(i,h=>o(0,n=h)),i);r.$$.on_destroy.push(()=>c());let{$$slots:l={},$$scope:$}=t;qt("Page",l,[]);const a=it(),u=h=>{a.mutation(st,{versionId:h}).toPromise().then(()=>{i.pause(),i.resume()})},f=h=>{a.mutation(ft,{versionId:h}).toPromise().then(()=>{i.pause(),i.resume()})},m=[];Object.keys(t).forEach(h=>{!~m.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<Page> was created with unknown prop '${h}'`)});const y=h=>u(h.id),x=h=>f(h.id);return r.$capture_state=()=>({ApproveVersionDocument:st,DenyVersionDocument:ft,GetUnapprovedVersionsDocument:lt,getContextClient:it,queryStore:ct,PageControls:nt,API_REST:Z,base:Y,MetaDescriptors:at,Card:ut,Content:tt,DataTable:mt,Head:pt,Body:dt,Row:ot,Cell:P,Button:M,prettyDate:F,client:a,perPage:_,page:L,approveVersion:u,denyVersion:f,versions:i,totalVersions:e,$versions:n}),r.$inject_state=h=>{"versions"in h&&s(o(1,i=h.versions)),"totalVersions"in h&&o(2,e=h.totalVersions)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),r.$$.update=()=>{r.$$.dirty&1&&o(2,e=n?.data?.getUnapprovedVersions?.count)},s(o(1,i=ct({query:lt,client:a,variables:{filter:{offset:(L-1)*_,limit:_}}}))),[n,i,e,u,f,y,x]}class ee extends Nt{constructor(t){super(t),Ot(this,t,Jt,X,Tt,{}),k("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:X.name})}}export{ee as component};
//# sourceMappingURL=9.559351ad.js.map
