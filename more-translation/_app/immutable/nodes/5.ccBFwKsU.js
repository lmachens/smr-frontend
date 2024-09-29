import{S as Tt,i as kt,d as P,s as bt,v as Nt,F as W,G as X,H as St,I as wt,J as Y,K as ot,L as ct,M as Ct,e as x,g as T,h as A,j as h,N as w,m as k,n as b,t as O,q as lt,r as I,y as Dt,O as Z,p as rt,P as ut,b as R,Q as ft,k as E,R as F,T as gt,U as D,V as B,W as dt,X as G,Y as L,Z as mt,u as j,f as tt,_ as Pt,$ as Q,a0 as It}from"../chunks/vendor.D5QsONp8.js";import{a as et,b as nt,c as at,d as st}from"../chunks/graphql.CNu7qPRc.js";const{console:Bt}=Ct,N="src/routes/admin/tag-manager/+page.svelte";function it(s,t,e){const a=s.slice();return a[18]=t[e],a[19]=t,a[20]=e,a}function pt(s){let t,e,a,n,o,f="Add new tag",c,r,u="add",l,d,$;t=new ot({props:{$$slots:{default:[xt]},$$scope:{ctx:s}},$$inline:!0});const C={c:function(){ut(t.$$.fragment),e=R(),a=x("section"),n=x("button"),o=x("span"),o.textContent=f,c=R(),r=x("span"),r.textContent=u,this.h()},l:function(m){ft(t.$$.fragment,m),e=E(m),a=T(m,"SECTION",{class:!0});var y=A(a);n=T(y,"BUTTON",{class:!0});var S=A(n);o=T(S,"SPAN",{"data-svelte-h":!0}),F(o)!=="svelte-haz7sd"&&(o.textContent=f),c=E(S),r=T(S,"SPAN",{class:!0,"data-svelte-h":!0}),F(r)!=="svelte-99y27o"&&(r.textContent=u),S.forEach(h),y.forEach(h),this.h()},h:function(){k(o,N,172,8,4952),w(r,"class","material-icons"),k(r,N,173,8,4985),w(n,"class","variant-ghost-primary btn"),k(n,N,171,6,4883),w(a,"class","p-4"),k(a,N,170,4,4855)},m:function(m,y){gt(t,m,y),b(m,e,y),b(m,a,y),D(a,n),D(n,o),D(n,c),D(n,r),l=!0,d||($=B(n,"click",s[4],!1,!1,!1,!1),d=!0)},p:function(m,y){const S={};y&2097158&&(S.$$scope={dirty:y,ctx:m}),t.$set(S)},i:function(m){l||(I(t.$$.fragment,m),l=!0)},o:function(m){O(t.$$.fragment,m),l=!1},d:function(m){m&&(h(e),h(a)),dt(t,m),d=!1,$()}};return P("SvelteRegisterBlock",{block:C,id:pt.name,type:"else",source:"(128:2) {:else}",ctx:s}),C}function ht(s){let t,e,a=s[0].error.message+"",n;const o={c:function(){t=x("h1"),e=G("Failed to load tags: "),n=G(a),this.h()},l:function(c){t=T(c,"H1",{});var r=A(t);e=L(r,"Failed to load tags: "),n=L(r,a),r.forEach(h),this.h()},h:function(){k(t,N,137,4,3747)},m:function(c,r){b(c,t,r),D(t,e),D(t,n)},p:function(c,r){r&1&&a!==(a=c[0].error.message+"")&&mt(n,a)},i:j,o:j,d:function(c){c&&h(t)}};return P("SvelteRegisterBlock",{block:o,id:ht.name,type:"if",source:"(126:29) ",ctx:s}),o}function $t(s){let t,e="Loading tags...";const a={c:function(){t=x("h1"),t.textContent=e,this.h()},l:function(o){t=T(o,"H1",{"data-svelte-h":!0}),F(t)!=="svelte-ud4eq5"&&(t.textContent=e),this.h()},h:function(){k(t,N,135,4,3688)},m:function(o,f){b(o,t,f)},p:j,i:j,o:j,d:function(o){o&&h(t)}};return P("SvelteRegisterBlock",{block:a,id:$t.name,type:"if",source:"(124:2) {#if $tagsQuery.fetching}",ctx:s}),a}function vt(s){let t=s[18].name+"",e;const a={c:function(){e=G(t)},l:function(o){e=L(o,t)},m:function(o,f){b(o,e,f)},p:function(o,f){f&2&&t!==(t=o[18].name+"")&&mt(e,t)},d:function(o){o&&h(e)}};return P("SvelteRegisterBlock",{block:a,id:vt.name,type:"slot",source:'(132:10) <svelte:fragment slot=\\"summary\\">',ctx:s}),a}function yt(s){let t,e,a=s[18],n,o,f,c,r="Human-Readable name and description of the tag that is shown in UI",u,l,d,$="Delete",C,v,m;function y(){s[7].call(e,s[19],s[20])}const S=()=>s[8](e,a),U=()=>s[8](null,a);function H(){return s[9](s[18])}function _(){s[10].call(o,s[19],s[20])}function V(){return s[11](s[18])}function z(...i){return s[12](s[18],...i)}const q={c:function(){t=x("div"),e=x("input"),n=R(),o=x("input"),f=R(),c=x("span"),c.textContent=r,u=R(),l=x("button"),d=x("span"),d.textContent=$,C=R(),this.h()},l:function(g){t=T(g,"DIV",{});var p=A(t);e=T(p,"INPUT",{type:!0,class:!0,placeholder:!0}),n=E(p),o=T(p,"INPUT",{type:!0,class:!0,placeholder:!0}),p.forEach(h),f=E(g),c=T(g,"SPAN",{slot:!0,"data-svelte-h":!0}),F(c)!=="svelte-2kgxo4"&&(c.textContent=r),u=E(g),l=T(g,"BUTTON",{class:!0});var M=A(l);d=T(M,"SPAN",{"data-svelte-h":!0}),F(d)!=="svelte-gz26bx"&&(d.textContent=$),M.forEach(h),C=E(g),this.h()},h:function(){w(e,"type","text"),w(e,"class","input p-2"),w(e,"placeholder","Name"),k(e,N,145,14,4026),w(o,"type","text"),w(o,"class","input p-2"),w(o,"placeholder","Description"),k(o,N,153,14,4282),k(t,N,144,12,4006),w(c,"slot","helper"),k(c,N,160,12,4521),k(d,N,163,14,4723),w(l,"class","variant-ghost-error btn"),k(l,N,162,12,4628)},m:function(g,p){b(g,t,p),D(t,e),Q(e,s[18].name),S(),D(t,n),D(t,o),Q(o,s[18].description),b(g,f,p),b(g,c,p),b(g,u,p),b(g,l,p),D(l,d),b(g,C,p),v||(m=[B(e,"input",y),B(e,"change",H,!1,!1,!1,!1),B(o,"input",_),B(o,"change",V,!1,!1,!1,!1),B(l,"click",z,!1,!1,!1,!1)],v=!0)},p:function(g,p){s=g,p&2&&e.value!==s[18].name&&Q(e,s[18].name),a!==s[18]&&(U(),a=s[18],S()),p&2&&o.value!==s[18].description&&Q(o,s[18].description)},d:function(g){g&&(h(t),h(f),h(c),h(u),h(l),h(C)),U(),v=!1,It(m)}};return P("SvelteRegisterBlock",{block:q,id:yt.name,type:"slot",source:'(133:10) <svelte:fragment slot=\\"content\\">',ctx:s}),q}function J(s){let t,e;t=new ct({props:{$$slots:{content:[yt],summary:[vt]},$$scope:{ctx:s}},$$inline:!0});const a={c:function(){ut(t.$$.fragment)},l:function(o){ft(t.$$.fragment,o)},m:function(o,f){gt(t,o,f),e=!0},p:function(o,f){const c={};f&2097158&&(c.$$scope={dirty:f,ctx:o}),t.$set(c)},i:function(o){e||(I(t.$$.fragment,o),e=!0)},o:function(o){O(t.$$.fragment,o),e=!1},d:function(o){dt(t,o)}};return P("SvelteRegisterBlock",{block:a,id:J.name,type:"each",source:"(130:6) {#each tags as tag}",ctx:s}),a}function xt(s){let t,e,a=Z(s[1]),n=[];for(let c=0;c<a.length;c+=1)n[c]=J(it(s,a,c));const o=c=>O(n[c],1,1,()=>{n[c]=null}),f={c:function(){for(let r=0;r<n.length;r+=1)n[r].c();t=tt()},l:function(r){for(let u=0;u<n.length;u+=1)n[u].l(r);t=tt()},m:function(r,u){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(r,u);b(r,t,u),e=!0},p:function(r,u){if(u&102){a=Z(r[1]);let l;for(l=0;l<a.length;l+=1){const d=it(r,a,l);n[l]?(n[l].p(d,u),I(n[l],1)):(n[l]=J(d),n[l].c(),I(n[l],1),n[l].m(t.parentNode,t))}for(rt(),l=a.length;l<n.length;l+=1)o(l);lt()}},i:function(r){if(!e){for(let u=0;u<a.length;u+=1)I(n[u]);e=!0}},o:function(r){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)O(n[u]);e=!1},d:function(r){r&&h(t),Pt(n,r)}};return P("SvelteRegisterBlock",{block:f,id:xt.name,type:"slot",source:"(129:4) <Accordion>",ctx:s}),f}function K(s){let t,e,a,n;const o=[$t,ht,pt],f=[];function c(u,l){return u[0].fetching?0:u[0].error?1:2}e=c(s),a=f[e]=o[e](s);const r={c:function(){t=x("div"),a.c(),this.h()},l:function(l){t=T(l,"DIV",{class:!0});var d=A(t);a.l(d),d.forEach(h),this.h()},h:function(){w(t,"class","card"),k(t,N,133,0,3637)},m:function(l,d){b(l,t,d),f[e].m(t,null),n=!0},p:function(l,[d]){let $=e;e=c(l),e===$?f[e].p(l,d):(rt(),O(f[$],1,1,()=>{f[$]=null}),lt(),a=f[e],a?a.p(l,d):(a=f[e]=o[e](l),a.c()),I(a,1),a.m(t,null))},i:function(l){n||(I(a),n=!0)},o:function(l){O(a),n=!1},d:function(l){l&&h(t),f[e].d()}};return P("SvelteRegisterBlock",{block:r,id:K.name,type:"component",source:"",ctx:s}),r}function Rt(s,t,e){let a,{$$slots:n={},$$scope:o}=t;Nt("Page",n,[]);const f=W();let c=[];const r={},u={};let l=-1;const d=X({query:et,client:f,variables:{limit:100}});St(d,"tagsQuery"),wt(s,d,i=>e(0,a=i));const $=Y();function C(){if(c.find(i=>i.name=="New Tag"))r[c[c.length-1].id].setOpen(!0),u[c[c.length-1].id].focus();else{const i={id:l--,name:"New Tag",description:"Description"};c.push(i),e(1,c),e(0,a),setTimeout(()=>{r[i.id].setOpen(!0);const g=u[i.id];g.focus(),g.getElement().querySelectorAll("input")[0].select()},0)}}async function v(i){if(i.name=="New Tag")return;let g=!1;if(i.id<0){try{const p=await f.mutation(nt,{tagName:i.name,description:i.description}).toPromise();p.data&&(i.id=p.data.createTag.id,g=!0)}catch(p){console.log(p)}if(!g){$.trigger({message:`Failed to create Tag '${i.name}'!`,background:"variant-filled-error",timeout:2e3});return}}else{try{g=(await f.mutation(st,{tagID:i.id,tagName:i.name,description:i.description}).toPromise()).data.updateTag!=null}catch{}if(!g){$.trigger({message:`Failed to update Tag '${i.name}'!`,background:"variant-filled-error",timeout:2e3});return}}$.trigger({message:`Tag '${i.name}' saved!`,background:"variant-filled-success",timeout:2e3})}async function m(i){if(i.name!="New Tag"){let g=!1;try{g=(await f.mutation(at,{tagID:i.id}).toPromise()).data.deleteTag}catch{g=!1}if(!g){$.trigger({message:`Failed to remove Tag '${i.name}'!`,background:"variant-filled-error",timeout:2e3});return}}$.trigger({message:`Tag '${i.name}' removed!`,background:"variant-filled-success",timeout:2e3})}function y(i,g){i.stopPropagation(),m(g)}const S=[];Object.keys(t).forEach(i=>{!~S.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&Bt.warn(`<Page> was created with unknown prop '${i}'`)});function U(i,g){i[g].name=this.value,e(1,c),e(0,a)}function H(i,g){Dt[i?"unshift":"push"](()=>{u[g.id]=i,e(2,u)})}const _=i=>v(i);function V(i,g){i[g].description=this.value,e(1,c),e(0,a)}const z=i=>v(i),q=(i,g)=>y(g,i);return s.$capture_state=()=>({getContextClient:W,queryStore:X,CreateTagDocument:nt,DeleteTagDocument:at,GetTagsDocument:et,UpdateTagDocument:st,Accordion:ot,AccordionItem:ct,getToastStore:Y,client:f,tags:c,panels:r,nameFields:u,tagNegativeID:l,tagsQuery:d,toastStore:$,newTag:C,tagChange:v,deleteTag:m,onDeleteClick:y,$tagsQuery:a}),s.$inject_state=i=>{"tags"in i&&e(1,c=i.tags),"tagNegativeID"in i&&(l=i.tagNegativeID)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&1&&e(1,c=a.data?.getTags||[])},[a,c,u,d,C,v,y,U,H,_,V,z,q]}class Ot extends Tt{constructor(t){super(t),kt(this,t,Rt,K,bt,{}),P("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:K.name})}}export{Ot as component};
//# sourceMappingURL=5.ccBFwKsU.js.map
