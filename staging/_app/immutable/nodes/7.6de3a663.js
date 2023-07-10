import{S as Qt,i as Ut,d,s as Mt,bs as tt,v as zt,aJ as G,aL as J,Y as Gt,Z as Jt,bt as et,bu as O,bv as Q,bw as nt,aQ as ot,b9 as U,b1 as H,b8 as ct,P as D,ao as Yt,a6 as _,a8 as k,a9 as E,ab as v,l as w,ae as y,t as x,n as it,p as h,q as T,aj as b,r as L,a$ as Y,m as at,x as st,L as C,y as rt,z as lt,N as I,C as ft,ad as A,O as M,b0 as Zt,T as Kt,ai as Vt}from"../chunks/vendor.e8e74389.js";import{T as ut,b as $t}from"../chunks/forms.e749ddeb.js";import{i as Z,C as K,j as V,k as W}from"../chunks/graphql.cb6ec208.js";const{console:Wt}=Yt,gt="src/routes/admin/tag-manager/+page.svelte";function X(a,t,o){const i=a.slice();return i[19]=t[o],i[20]=t,i[21]=o,i}function mt(a){let t,o;t=new et({props:{$$slots:{default:[Nt]},$$scope:{ctx:a}},$$inline:!0});const i={c:function(){k(t.$$.fragment)},l:function(e){v(t.$$.fragment,e)},m:function(e,s){y(t,e,s),o=!0},p:function(e,s){const c={};s&4194318&&(c.$$scope={dirty:s,ctx:e}),t.$set(c)},i:function(e){o||(h(t.$$.fragment,e),o=!0)},o:function(e){x(t.$$.fragment,e),o=!1},d:function(e){b(t,e)}};return d("SvelteRegisterBlock",{block:i,id:mt.name,type:"else",source:"(150:0) {:else}",ctx:a}),i}function dt(a){let t,o,i=a[0].error.message+"",n;const e={c:function(){t=st("h1"),o=C("Failed to load tags: "),n=C(i),this.h()},l:function(c){t=rt(c,"H1",{});var r=lt(t);o=I(r,"Failed to load tags: "),n=I(r,i),r.forEach(T),this.h()},h:function(){ft(t,gt,148,2,5027)},m:function(c,r){w(c,t,r),A(t,o),A(t,n)},p:function(c,r){r&1&&i!==(i=c[0].error.message+"")&&M(n,i)},i:D,o:D,d:function(c){c&&T(t)}};return d("SvelteRegisterBlock",{block:e,id:dt.name,type:"if",source:"(148:27) ",ctx:a}),e}function pt(a){let t,o;const i={c:function(){t=st("h1"),o=C("Loading tags..."),this.h()},l:function(e){t=rt(e,"H1",{});var s=lt(t);o=I(s,"Loading tags..."),s.forEach(T),this.h()},h:function(){ft(t,gt,146,2,4972)},m:function(e,s){w(e,t,s),A(t,o)},p:D,i:D,o:D,d:function(e){e&&T(t)}};return d("SvelteRegisterBlock",{block:i,id:pt.name,type:"if",source:"(146:0) {#if $tagsQuery.fetching}",ctx:a}),i}function ht(a){let t=a[19].name+"",o;const i={c:function(){o=C(t)},l:function(e){o=I(e,t)},m:function(e,s){w(e,o,s)},p:function(e,s){s&2&&t!==(t=e[19].name+"")&&M(o,t)},d:function(e){e&&T(o)}};return d("SvelteRegisterBlock",{block:i,id:ht.name,type:"slot",source:"(154:8) <Header>",ctx:a}),i}function xt(a){let t;const o={c:function(){t=C("delete_forever")},l:function(n){t=I(n,"delete_forever")},m:function(n,e){w(n,t,e)},d:function(n){n&&T(t)}};return d("SvelteRegisterBlock",{block:o,id:xt.name,type:"slot",source:'(157:12) <ButtonIcon class=\\"material-icons\\">',ctx:a}),o}function kt(a){let t,o;t=new H({props:{class:"material-icons",$$slots:{default:[xt]},$$scope:{ctx:a}},$$inline:!0});const i={c:function(){k(t.$$.fragment)},l:function(e){v(t.$$.fragment,e)},m:function(e,s){y(t,e,s),o=!0},p:function(e,s){const c={};s&4194304&&(c.$$scope={dirty:s,ctx:e}),t.$set(c)},i:function(e){o||(h(t.$$.fragment,e),o=!0)},o:function(e){x(t.$$.fragment,e),o=!1},d:function(e){b(t,e)}};return d("SvelteRegisterBlock",{block:i,id:kt.name,type:"slot",source:'(156:10) <IconButton slot=\\"icon\\" on:click={(e) => onDeleteClick(e, tag)}>',ctx:a}),i}function vt(a){let t,o;function i(...e){return a[10](a[19],...e)}t=new ct({props:{slot:"icon",$$slots:{default:[kt]},$$scope:{ctx:a}},$$inline:!0}),t.$on("click",i);const n={c:function(){k(t.$$.fragment)},l:function(s){v(t.$$.fragment,s)},m:function(s,c){y(t,s,c),o=!0},p:function(s,c){a=s;const r={};c&4194304&&(r.$$scope={dirty:c,ctx:a}),t.$set(r)},i:function(s){o||(h(t.$$.fragment,s),o=!0)},o:function(s){x(t.$$.fragment,s),o=!1},d:function(s){b(t,s)}};return d("SvelteRegisterBlock",{block:n,id:vt.name,type:"slot",source:"(156:10) ",ctx:a}),n}function yt(a){let t;const o={c:function(){t=C("Human-Readable name of the tag that is shown in UI")},l:function(n){t=I(n,"Human-Readable name of the tag that is shown in UI")},m:function(n,e){w(n,t,e)},d:function(n){n&&T(t)}};return d("SvelteRegisterBlock",{block:o,id:yt.name,type:"slot",source:'(166:12) <HelperText slot=\\"helper\\">',ctx:a}),o}function bt(a){let t,o;t=new $t({props:{slot:"helper",$$slots:{default:[yt]},$$scope:{ctx:a}},$$inline:!0});const i={c:function(){k(t.$$.fragment)},l:function(e){v(t.$$.fragment,e)},m:function(e,s){y(t,e,s),o=!0},p:function(e,s){const c={};s&4194304&&(c.$$scope={dirty:s,ctx:e}),t.$set(c)},i:function(e){o||(h(t.$$.fragment,e),o=!0)},o:function(e){x(t.$$.fragment,e),o=!1},d:function(e){b(t,e)}};return d("SvelteRegisterBlock",{block:i,id:bt.name,type:"slot",source:"(166:12) ",ctx:a}),i}function Tt(a){let t,o,i=a[19],n;function e(g){a[11](g,a[19])}const s=()=>a[12](t,i),c=()=>a[12](null,i);function r(){return a[13](a[19])}let f={label:"Tag-Name",$$slots:{helper:[bt]},$$scope:{ctx:a}};a[19].name!==void 0&&(f.value=a[19].name),t=new ut({props:f,$$inline:!0}),L.push(()=>Kt(t,"value",e)),s(),t.$on("change",r);const $={c:function(){k(t.$$.fragment)},l:function(u){v(t.$$.fragment,u)},m:function(u,m){y(t,u,m),n=!0},p:function(u,m){a=u,i!==a[19]&&(c(),i=a[19],s());const B={};m&4194304&&(B.$$scope={dirty:m,ctx:a}),!o&&m&2&&(o=!0,B.value=a[19].name,Vt(()=>o=!1)),t.$set(B)},i:function(u){n||(h(t.$$.fragment,u),n=!0)},o:function(u){x(t.$$.fragment,u),n=!1},d:function(u){c(),b(t,u)}};return d("SvelteRegisterBlock",{block:$,id:Tt.name,type:"slot",source:"(160:8) <Content>",ctx:a}),$}function St(a){let t,o,i,n;t=new Q({props:{$$slots:{icon:[vt],default:[ht]},$$scope:{ctx:a}},$$inline:!0}),i=new nt({props:{$$slots:{default:[Tt]},$$scope:{ctx:a}},$$inline:!0});const e={c:function(){k(t.$$.fragment),o=_(),k(i.$$.fragment)},l:function(c){v(t.$$.fragment,c),o=E(c),v(i.$$.fragment,c)},m:function(c,r){y(t,c,r),w(c,o,r),y(i,c,r),n=!0},p:function(c,r){const f={};r&4194306&&(f.$$scope={dirty:r,ctx:c}),t.$set(f);const $={};r&4194314&&($.$$scope={dirty:r,ctx:c}),i.$set($)},i:function(c){n||(h(t.$$.fragment,c),h(i.$$.fragment,c),n=!0)},o:function(c){x(t.$$.fragment,c),x(i.$$.fragment,c),n=!1},d:function(c){b(t,c),c&&T(o),b(i,c)}};return d("SvelteRegisterBlock",{block:e,id:St.name,type:"slot",source:"(153:6) <Panel bind:this={panels[tag.id]}>",ctx:a}),e}function F(a){let t,o=a[19],i;const n=()=>a[14](t,o),e=()=>a[14](null,o);let s={$$slots:{default:[St]},$$scope:{ctx:a}};t=new O({props:s,$$inline:!0}),n();const c={c:function(){k(t.$$.fragment)},l:function(f){v(t.$$.fragment,f)},m:function(f,$){y(t,f,$),i=!0},p:function(f,$){o!==f[19]&&(e(),o=f[19],n());const g={};$&4194314&&(g.$$scope={dirty:$,ctx:f}),t.$set(g)},i:function(f){i||(h(t.$$.fragment,f),i=!0)},o:function(f){x(t.$$.fragment,f),i=!1},d:function(f){e(),b(t,f)}};return d("SvelteRegisterBlock",{block:c,id:F.name,type:"each",source:"(152:4) {#each tags as tag}",ctx:a}),c}function wt(a){let t;const o={c:function(){t=C("Add new tag")},l:function(n){t=I(n,"Add new tag")},m:function(n,e){w(n,t,e)},d:function(n){n&&T(t)}};return d("SvelteRegisterBlock",{block:o,id:wt.name,type:"slot",source:"(174:10) <Label>",ctx:a}),o}function Bt(a){let t;const o={c:function(){t=C("add")},l:function(n){t=I(n,"add")},m:function(n,e){w(n,t,e)},d:function(n){n&&T(t)}};return d("SvelteRegisterBlock",{block:o,id:Bt.name,type:"slot",source:'(175:10) <Icon class=\\"material-icons\\">',ctx:a}),o}function Rt(a){let t,o,i,n;t=new U({props:{$$slots:{default:[wt]},$$scope:{ctx:a}},$$inline:!0}),i=new H({props:{class:"material-icons",$$slots:{default:[Bt]},$$scope:{ctx:a}},$$inline:!0});const e={c:function(){k(t.$$.fragment),o=_(),k(i.$$.fragment)},l:function(c){v(t.$$.fragment,c),o=E(c),v(i.$$.fragment,c)},m:function(c,r){y(t,c,r),w(c,o,r),y(i,c,r),n=!0},p:function(c,r){const f={};r&4194304&&(f.$$scope={dirty:r,ctx:c}),t.$set(f);const $={};r&4194304&&($.$$scope={dirty:r,ctx:c}),i.$set($)},i:function(c){n||(h(t.$$.fragment,c),h(i.$$.fragment,c),n=!0)},o:function(c){x(t.$$.fragment,c),x(i.$$.fragment,c),n=!1},d:function(c){b(t,c),c&&T(o),b(i,c)}};return d("SvelteRegisterBlock",{block:e,id:Rt.name,type:"slot",source:'(173:8) <Button variant=\\"outlined\\" on:click={newTag}>',ctx:a}),e}function Ct(a){let t,o;t=new ot({props:{variant:"outlined",$$slots:{default:[Rt]},$$scope:{ctx:a}},$$inline:!0}),t.$on("click",a[7]);const i={c:function(){k(t.$$.fragment)},l:function(e){v(t.$$.fragment,e)},m:function(e,s){y(t,e,s),o=!0},p:function(e,s){const c={};s&4194304&&(c.$$scope={dirty:s,ctx:e}),t.$set(c)},i:function(e){o||(h(t.$$.fragment,e),o=!0)},o:function(e){x(t.$$.fragment,e),o=!1},d:function(e){b(t,e)}};return d("SvelteRegisterBlock",{block:i,id:Ct.name,type:"slot",source:"(172:6) <Header ripple={false}>",ctx:a}),i}function It(a){let t,o;t=new Q({props:{ripple:!1,$$slots:{default:[Ct]},$$scope:{ctx:a}},$$inline:!0});const i={c:function(){k(t.$$.fragment)},l:function(e){v(t.$$.fragment,e)},m:function(e,s){y(t,e,s),o=!0},p:function(e,s){const c={};s&4194304&&(c.$$scope={dirty:s,ctx:e}),t.$set(c)},i:function(e){o||(h(t.$$.fragment,e),o=!0)},o:function(e){x(t.$$.fragment,e),o=!1},d:function(e){b(t,e)}};return d("SvelteRegisterBlock",{block:i,id:It.name,type:"slot",source:"(171:4) <Panel nonInteractive>",ctx:a}),i}function Nt(a){let t,o,i,n=a[1];Y(n);let e=[];for(let r=0;r<n.length;r+=1)e[r]=F(X(a,n,r));const s=r=>x(e[r],1,1,()=>{e[r]=null});o=new O({props:{nonInteractive:!0,$$slots:{default:[It]},$$scope:{ctx:a}},$$inline:!0});const c={c:function(){for(let f=0;f<e.length;f+=1)e[f].c();t=_(),k(o.$$.fragment)},l:function(f){for(let $=0;$<e.length;$+=1)e[$].l(f);t=E(f),v(o.$$.fragment,f)},m:function(f,$){for(let g=0;g<e.length;g+=1)e[g]&&e[g].m(f,$);w(f,t,$),y(o,f,$),i=!0},p:function(f,$){if($&782){n=f[1],Y(n);let u;for(u=0;u<n.length;u+=1){const m=X(f,n,u);e[u]?(e[u].p(m,$),h(e[u],1)):(e[u]=F(m),e[u].c(),h(e[u],1),e[u].m(t.parentNode,t))}for(at(),u=n.length;u<e.length;u+=1)s(u);it()}const g={};$&4194304&&(g.$$scope={dirty:$,ctx:f}),o.$set(g)},i:function(f){if(!i){for(let $=0;$<n.length;$+=1)h(e[$]);h(o.$$.fragment,f),i=!0}},o:function(f){e=e.filter(Boolean);for(let $=0;$<e.length;$+=1)x(e[$]);x(o.$$.fragment,f),i=!1},d:function(f){Zt(e,f),f&&T(t),b(o,f)}};return d("SvelteRegisterBlock",{block:c,id:Nt.name,type:"slot",source:"(151:2) <Accordion>",ctx:a}),c}function Pt(a){let t;const o={c:function(){t=C(a[4])},l:function(n){t=I(n,a[4])},m:function(n,e){w(n,t,e)},p:function(n,e){e&16&&M(t,n[4])},d:function(n){n&&T(t)}};return d("SvelteRegisterBlock",{block:o,id:Pt.name,type:"slot",source:"(183:2) <Label>",ctx:a}),o}function Dt(a){let t,o;t=new U({props:{$$slots:{default:[Pt]},$$scope:{ctx:a}},$$inline:!0});const i={c:function(){k(t.$$.fragment)},l:function(e){v(t.$$.fragment,e)},m:function(e,s){y(t,e,s),o=!0},p:function(e,s){const c={};s&4194320&&(c.$$scope={dirty:s,ctx:e}),t.$set(c)},i:function(e){o||(h(t.$$.fragment,e),o=!0)},o:function(e){x(t.$$.fragment,e),o=!1},d:function(e){b(t,e)}};return d("SvelteRegisterBlock",{block:i,id:Dt.name,type:"slot",source:"(182:0) <Snackbar bind:this={snackbarTagChangeSaved} timeoutMs={4000}>",ctx:a}),i}function q(a){let t,o,i,n,e;const s=[pt,dt,mt],c=[];function r(g,u){return g[0].fetching?0:g[0].error?1:2}t=r(a),o=c[t]=s[t](a);let f={timeoutMs:4e3,$$slots:{default:[Dt]},$$scope:{ctx:a}};n=new tt({props:f,$$inline:!0}),a[15](n);const $={c:function(){o.c(),i=_(),k(n.$$.fragment)},l:function(u){o.l(u),i=E(u),v(n.$$.fragment,u)},m:function(u,m){c[t].m(u,m),w(u,i,m),y(n,u,m),e=!0},p:function(u,[m]){let B=t;t=r(u),t===B?c[t].p(u,m):(at(),x(c[B],1,1,()=>{c[B]=null}),it(),o=c[t],o?o.p(u,m):(o=c[t]=s[t](u),o.c()),h(o,1),o.m(i.parentNode,i));const N={};m&4194320&&(N.$$scope={dirty:m,ctx:u}),n.$set(N)},i:function(u){e||(h(o),h(n.$$.fragment,u),e=!0)},o:function(u){x(o),x(n.$$.fragment,u),e=!1},d:function(u){c[t].d(u),u&&T(i),a[15](null),b(n,u)}};return d("SvelteRegisterBlock",{block:$,id:q.name,type:"component",source:"",ctx:a}),$}function Xt(a,t,o){let i,{$$slots:n={},$$scope:e}=t;zt("Page",n,[]);const s=G();let c=[];const r={},f={};let $="",g,u=-1;const m=J({query:Z,client:s,variables:{}});Gt(m,"tagsQuery"),Jt(a,m,l=>o(0,i=l));function B(){if(c.find(l=>l.name=="New Tag"))r[c[c.length-1].id].setOpen(!0),f[c[c.length-1].id].focus();else{const l={id:u--,name:"New Tag"};c.push(l),o(1,c),o(0,i),setTimeout(()=>{r[l.id].setOpen(!0);const p=f[l.id];p.focus(),p.getElement().querySelectorAll("input")[0].select()},0)}}async function N(l){if(l.name=="New Tag")return;let p=!1;if(l.id<0){try{const R=await s.mutation(K,{tagName:l.name}).toPromise();R.data&&(l.id=R.data.createTag.id,p=!0)}catch(R){console.log(R)}if(!p){o(4,$=`Failed to create Tag '${l.name}'!`),g.open(),setTimeout(()=>g.close(),2e3);return}}else{try{p=(await s.mutation(W,{tagID:l.id,tagName:l.name}).toPromise()).data.updateTag!=null}catch{}if(!p){o(4,$=`Failed to update Tag '${l.name}'!`),g.open(),setTimeout(()=>g.close(),2e3);return}}o(4,$=`Tag '${l.name}' saved!`),g.open(),setTimeout(()=>g.close(),2e3)}async function z(l){if(l.name!="New Tag"){let S=!1;try{S=(await s.mutation(V,{tagID:l.id}).toPromise()).data.deleteTag}catch{S=!1}if(!S){o(4,$=`Failed to remove Tag '${l.name}'!`),g.open(),setTimeout(()=>g.close(),2e3);return}}const p=()=>{const S=r[l.id].getElement(),P=S.scrollHeight;S.classList.add("smui-accordion__panel--removed"),S.style.height=P+"px",requestAnimationFrame(()=>S.style.height="0px"),S.addEventListener("transitionend",qt=>{qt.propertyName=="height"&&(S.classList.remove("smui-accordion__panel--removed"),S.style.height="auto",o(1,c=c.filter(Ot=>Ot.id!=l.id)))})};let R=!1;for(const S in r){const P=r[S];P?.isOpen()&&(P.setOpen(!1),R||P.getElement().addEventListener("SMUIAccordionPanel:closed",()=>{p()},{once:!0}),R=!0)}R||p(),o(4,$=`Tag '${l.name}' removed!`),g.open(),setTimeout(()=>g.close(),2e3)}function j(l,p){l.stopPropagation(),z(p)}const Lt=[];Object.keys(t).forEach(l=>{!~Lt.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&Wt.warn(`<Page> was created with unknown prop '${l}'`)});const Ht=(l,p)=>j(p,l);function _t(l,p){a.$$.not_equal(p.name,l)&&(p.name=l,o(1,c),o(0,i))}function Et(l,p){L[l?"unshift":"push"](()=>{f[p.id]=l,o(3,f)})}const jt=l=>N(l);function At(l,p){L[l?"unshift":"push"](()=>{r[p.id]=l,o(2,r)})}function Ft(l){L[l?"unshift":"push"](()=>{g=l,o(5,g)})}return a.$capture_state=()=>({Accordion:et,Panel:O,Header:Q,Content:nt,Textfield:ut,HelperText:$t,Button:ot,Label:U,Icon:H,Snackbar:tt,IconButton:ct,ButtonIcon:H,getContextClient:G,queryStore:J,noop:D,CreateTagDocument:K,DeleteTagDocument:V,GetTagsDocument:Z,UpdateTagDocument:W,client:s,tags:c,panels:r,nameFields:f,snackbarTagChangeSavedText:$,snackbarTagChangeSaved:g,tagNegativeID:u,tagsQuery:m,newTag:B,tagChange:N,deleteTag:z,onDeleteClick:j,$tagsQuery:i}),a.$inject_state=l=>{"tags"in l&&o(1,c=l.tags),"snackbarTagChangeSavedText"in l&&o(4,$=l.snackbarTagChangeSavedText),"snackbarTagChangeSaved"in l&&o(5,g=l.snackbarTagChangeSaved),"tagNegativeID"in l&&(u=l.tagNegativeID)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),a.$$.update=()=>{a.$$.dirty&1&&o(1,c=i.data?.getTags||[])},[i,c,r,f,$,g,m,B,N,j,Ht,_t,Et,jt,At,Ft]}class oe extends Qt{constructor(t){super(t),Ut(this,t,Xt,q,Mt,{}),d("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:q.name})}}export{oe as component};
//# sourceMappingURL=7.6de3a663.js.map
