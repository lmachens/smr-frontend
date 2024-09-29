import{S as St,i as kt,d as B,s as xt,v as Vt,F as K,G as M,H as bt,I as Ct,J as W,K as ot,L as it,M as _t,e as S,g as k,h as T,j as p,N as C,m as x,n as _,t as A,q as rt,r as D,y as wt,O as X,p as at,P as ct,b as I,Q as lt,k as O,R as Q,T as ft,U as w,V as R,W as ut,X as G,Y as L,Z as dt,u as F,f as Y,_ as Pt,$ as j,a0 as Nt}from"../chunks/vendor.D5QsONp8.js";import{G as Z,C as tt,D as et,U as nt}from"../chunks/graphql.CNu7qPRc.js";const{console:Bt}=_t,V="src/routes/admin/satisfactory-versions/+page.svelte";function st(i,t,n){const s=i.slice();return s[17]=t[n],s[18]=t,s[19]=n,s}function gt(i){let t,n,s,e,r,u="Add new Satisfactory version",c,l,f="add",a,d,$;t=new ot({props:{$$slots:{default:[yt]},$$scope:{ctx:i}},$$inline:!0});const P={c:function(){ct(t.$$.fragment),n=I(),s=S("section"),e=S("button"),r=S("span"),r.textContent=u,c=I(),l=S("span"),l.textContent=f,this.h()},l:function(v){lt(t.$$.fragment,v),n=O(v),s=k(v,"SECTION",{class:!0});var y=T(s);e=k(y,"BUTTON",{class:!0});var b=T(e);r=k(b,"SPAN",{"data-svelte-h":!0}),Q(r)!=="svelte-d9orn3"&&(r.textContent=u),c=O(b),l=k(b,"SPAN",{class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-99y27o"&&(l.textContent=f),b.forEach(p),y.forEach(p),this.h()},h:function(){x(r,V,190,8,6534),C(l,"class","material-icons"),x(l,V,191,8,6584),C(e,"class","variant-ghost-primary btn"),x(e,V,189,6,6449),C(s,"class","p-4"),x(s,V,188,4,6421)},m:function(v,y){ft(t,v,y),_(v,n,y),_(v,s,y),w(s,e),w(e,r),w(e,c),w(e,l),a=!0,d||($=R(e,"click",i[4],!1,!1,!1,!1),d=!0)},p:function(v,y){const b={};y&1048582&&(b.$$scope={dirty:y,ctx:v}),t.$set(b)},i:function(v){a||(D(t.$$.fragment,v),a=!0)},o:function(v){A(t.$$.fragment,v),a=!1},d:function(v){v&&(p(n),p(s)),ut(t,v),d=!1,$()}};return B("SvelteRegisterBlock",{block:P,id:gt.name,type:"else",source:"(139:2) {:else}",ctx:i}),P}function vt(i){let t,n,s=i[0].error.message+"",e;const r={c:function(){t=S("h1"),n=G("Failed to load satisfactory versions: "),e=G(s),this.h()},l:function(c){t=k(c,"H1",{});var l=T(t);n=L(l,"Failed to load satisfactory versions: "),e=L(l,s),l.forEach(p),this.h()},h:function(){x(t,V,156,4,5192)},m:function(c,l){_(c,t,l),w(t,n),w(t,e)},p:function(c,l){l&1&&s!==(s=c[0].error.message+"")&&dt(e,s)},i:F,o:F,d:function(c){c&&p(t)}};return B("SvelteRegisterBlock",{block:r,id:vt.name,type:"if",source:"(137:45) ",ctx:i}),r}function pt(i){let t,n="Loading satisfactory versions...";const s={c:function(){t=S("h1"),t.textContent=n,this.h()},l:function(r){t=k(r,"H1",{"data-svelte-h":!0}),Q(t)!=="svelte-kaw34n"&&(t.textContent=n),this.h()},h:function(){x(t,V,154,4,5100)},m:function(r,u){_(r,t,u)},p:F,i:F,o:F,d:function(r){r&&p(t)}};return B("SvelteRegisterBlock",{block:s,id:pt.name,type:"if",source:"(135:2) {#if $satisfactoryVersionsQuery.fetching}",ctx:i}),s}function mt(i){let t=i[17].version+"",n;const s={c:function(){n=G(t)},l:function(r){n=L(r,t)},m:function(r,u){_(r,n,u)},p:function(r,u){u&4&&t!==(t=r[17].version+"")&&dt(n,t)},d:function(r){r&&p(n)}};return B("SvelteRegisterBlock",{block:s,id:mt.name,type:"slot",source:'(143:10) <svelte:fragment slot=\\"summary\\">',ctx:i}),s}function ht(i){let t,n,s=i[17],e,r,u,c,l,f="Delete",a,d,$;function P(){i[7].call(n,i[18],i[19])}const h=()=>i[8](n,s),v=()=>i[8](null,s);function y(){return i[9](i[17])}function b(){i[10].call(r,i[18],i[19])}function q(){return i[11](i[17])}function H(...N){return i[12](i[17],...N)}const U={c:function(){t=S("div"),n=S("input"),e=I(),r=S("input"),u=I(),c=S("button"),l=S("span"),l.textContent=f,a=I(),this.h()},l:function(m){t=k(m,"DIV",{});var o=T(t);n=k(o,"INPUT",{type:!0,class:!0,placeholder:!0}),e=O(o),r=k(o,"INPUT",{type:!0,class:!0,placeholder:!0}),o.forEach(p),u=O(m),c=k(m,"BUTTON",{class:!0});var g=T(c);l=k(g,"SPAN",{"data-svelte-h":!0}),Q(l)!=="svelte-gz26bx"&&(l.textContent=f),g.forEach(p),a=O(m),this.h()},h:function(){C(n,"type","text"),C(n,"class","input p-2"),C(n,"placeholder","Version"),x(n,V,164,14,5555),C(r,"type","text"),C(r,"class","input p-2"),C(r,"placeholder","Engine version"),x(r,V,172,14,5884),x(t,V,163,12,5535),x(l,V,181,14,6289),C(c,"class","variant-ghost-error btn"),x(c,V,180,12,6178)},m:function(m,o){_(m,t,o),w(t,n),j(n,i[17].version),h(),w(t,e),w(t,r),j(r,i[17].engine_version),_(m,u,o),_(m,c,o),w(c,l),_(m,a,o),d||($=[R(n,"input",P),R(n,"change",y,!1,!1,!1,!1),R(r,"input",b),R(r,"change",q,!1,!1,!1,!1),R(c,"click",H,!1,!1,!1,!1)],d=!0)},p:function(m,o){i=m,o&4&&n.value!==i[17].version&&j(n,i[17].version),s!==i[17]&&(v(),s=i[17],h()),o&4&&r.value!==i[17].engine_version&&j(r,i[17].engine_version)},d:function(m){m&&(p(t),p(u),p(c),p(a)),v(),d=!1,Nt($)}};return B("SvelteRegisterBlock",{block:U,id:ht.name,type:"slot",source:'(144:10) <svelte:fragment slot=\\"content\\">',ctx:i}),U}function z(i){let t,n;t=new it({props:{$$slots:{content:[ht],summary:[mt]},$$scope:{ctx:i}},$$inline:!0});const s={c:function(){ct(t.$$.fragment)},l:function(r){lt(t.$$.fragment,r)},m:function(r,u){ft(t,r,u),n=!0},p:function(r,u){const c={};u&1048582&&(c.$$scope={dirty:u,ctx:r}),t.$set(c)},i:function(r){n||(D(t.$$.fragment,r),n=!0)},o:function(r){A(t.$$.fragment,r),n=!1},d:function(r){ut(t,r)}};return B("SvelteRegisterBlock",{block:s,id:z.name,type:"each",source:"(141:6) {#each satisfactoryVersions as satisfactoryVersion}",ctx:i}),s}function yt(i){let t,n,s=X(i[2]),e=[];for(let c=0;c<s.length;c+=1)e[c]=z(st(i,s,c));const r=c=>A(e[c],1,1,()=>{e[c]=null}),u={c:function(){for(let l=0;l<e.length;l+=1)e[l].c();t=Y()},l:function(l){for(let f=0;f<e.length;f+=1)e[f].l(l);t=Y()},m:function(l,f){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,f);_(l,t,f),n=!0},p:function(l,f){if(f&102){s=X(l[2]);let a;for(a=0;a<s.length;a+=1){const d=st(l,s,a);e[a]?(e[a].p(d,f),D(e[a],1)):(e[a]=z(d),e[a].c(),D(e[a],1),e[a].m(t.parentNode,t))}for(at(),a=s.length;a<e.length;a+=1)r(a);rt()}},i:function(l){if(!n){for(let f=0;f<s.length;f+=1)D(e[f]);n=!0}},o:function(l){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)A(e[f]);n=!1},d:function(l){l&&p(t),Pt(e,l)}};return B("SvelteRegisterBlock",{block:u,id:yt.name,type:"slot",source:"(140:4) <Accordion>",ctx:i}),u}function J(i){let t,n,s,e;const r=[pt,vt,gt],u=[];function c(f,a){return f[0].fetching?0:f[0].error?1:2}n=c(i),s=u[n]=r[n](i);const l={c:function(){t=S("div"),s.c(),this.h()},l:function(a){t=k(a,"DIV",{class:!0});var d=T(t);s.l(d),d.forEach(p),this.h()},h:function(){C(t,"class","card"),x(t,V,152,0,5033)},m:function(a,d){_(a,t,d),u[n].m(t,null),e=!0},p:function(a,[d]){let $=n;n=c(a),n===$?u[n].p(a,d):(at(),A(u[$],1,1,()=>{u[$]=null}),rt(),s=u[n],s?s.p(a,d):(s=u[n]=r[n](a),s.c()),D(s,1),s.m(t,null))},i:function(a){e||(D(s),e=!0)},o:function(a){A(s),e=!1},d:function(a){a&&p(t),u[n].d()}};return B("SvelteRegisterBlock",{block:l,id:J.name,type:"component",source:"",ctx:i}),l}function Dt(i,t,n){let s,e,{$$slots:r={},$$scope:u}=t;Vt("Page",r,[]);const c=K(),l={},f={},a=M({query:Z,client:c});bt(a,"satisfactoryVersionsQuery"),Ct(i,a,o=>n(0,e=o));const d=W();function $(){if(s.find(o=>o.id<0))l[s[s.length-1].id].setOpen(!0),f[s[s.length-1].id].focus();else{const o={id:-1,version:0,engine_version:"4.26"};s.push(o),n(2,s),n(0,e),setTimeout(()=>{l[o.id].setOpen(!0);const g=f[o.id];g.focus(),g.getElement().querySelectorAll("input")[0].select()},0)}}async function P(o){if(o.version===0)return;console.log(o);let g=!1;if(o.id<0){try{const E=await c.mutation(tt,{satisfactoryVersion:{version:o.version,engine_version:o.engine_version}}).toPromise();E.data&&(o.id=E.data.createSatisfactoryVersion.id,g=!0)}catch(E){console.log(E)}if(!g){d.trigger({message:`Failed to create Satisfactory version '${o.version}'!`,background:"variant-filled-error",timeout:2e3});return}}else{try{g=(await c.mutation(nt,{id:o.id,satisfactoryVersion:{version:o.version,engine_version:o.engine_version}}).toPromise()).data.updateSatisfactoryVersion!=null}catch{}if(!g){d.trigger({message:`Failed to update Satisfactory version '${o.version}'!`,background:"variant-filled-error",timeout:2e3});return}}d.trigger({message:`Satisfactory version '${o.version}' saved!`,background:"variant-filled-success",timeout:2e3})}async function h(o){if(!(o.id<0)){let g=!1;try{g=(await c.mutation(et,{satisfactoryVersionID:o.id}).toPromise()).data.deleteSatisfactoryVersion,g&&n(2,s=s.filter($t=>$t.id!==o.id))}catch{g=!1}if(!g){d.trigger({message:`Failed to remove Satisfactory version '${o.version}'!`,background:"variant-filled-error",timeout:2e3});return}}d.trigger({message:`Satisfactory version '${o.version}' removed!`,background:"variant-filled-success",timeout:2e3})}function v(o,g){o.stopPropagation(),h(g)}const y=[];Object.keys(t).forEach(o=>{!~y.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&Bt.warn(`<Page> was created with unknown prop '${o}'`)});function b(o,g){o[g].version=this.value,n(2,s),n(0,e)}function q(o,g){wt[o?"unshift":"push"](()=>{f[g.id]=o,n(1,f)})}const H=o=>P(o);function U(o,g){o[g].engine_version=this.value,n(2,s),n(0,e)}const N=o=>P(o),m=(o,g)=>v(g,o);return i.$capture_state=()=>({getContextClient:K,queryStore:M,CreateSatisfactoryVersionDocument:tt,DeleteSatisfactoryVersionDocument:et,GetSatisfactoryVersionsDocument:Z,UpdateSatisfactoryVersionDocument:nt,Accordion:ot,AccordionItem:it,getToastStore:W,client:c,panels:l,versionFields:f,satisfactoryVersionsQuery:a,toastStore:d,newSatisfactoryVersion:$,satisfactoryVersionChange:P,deleteSatisfactoryVersion:h,onDeleteClick:v,satisfactoryVersions:s,$satisfactoryVersionsQuery:e}),i.$inject_state=o=>{"satisfactoryVersions"in o&&n(2,s=o.satisfactoryVersions)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&1&&n(2,s=e.data?.getSatisfactoryVersions||[])},[e,f,s,a,$,P,v,b,q,H,U,N,m]}class Tt extends St{constructor(t){super(t),kt(this,t,Dt,J,xt,{}),B("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:J.name})}}export{Tt as component};
//# sourceMappingURL=4.CPQzjGJQ.js.map
