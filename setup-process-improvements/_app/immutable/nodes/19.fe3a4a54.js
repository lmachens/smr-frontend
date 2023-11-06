import{S as ue,i as le,d as V,s as de,bo as K,r as $e,T as me,v as pe,aJ as A,aL as F,Y as ge,Z as he,aN as G,a_ as H,bp as Q,ao as ve,k as B,a6 as z,x as C,L as E,a8 as P,bi as be,q as m,a9 as D,y as I,z as M,N as R,ab as _,ac as Ve,C as O,ad as k,l as y,ae as T,p as h,t as b,n as W,ai as ye,aj as j,m as X,O as ee,P as S}from"../chunks/vendor.9e4e80bb.js";import{J as U,P as Y}from"../chunks/graphql.04d4ab78.js";import{T as te}from"../chunks/Toast.eb4eb2e1.js";import{V as ne}from"../chunks/VersionForm.6b069d27.js";import{M as oe}from"../chunks/MetaDescriptors.6b3b353a.js";const xe=async({params:o})=>({...o}),_e=Object.freeze(Object.defineProperty({__proto__:null,load:xe},Symbol.toStringTag,{value:"Module"})),{console:Z}=ve,N="src/routes/mod/[modId]/version/[versionId]/edit/+page.svelte";function q(o){let e,n;e=new oe({props:{description:"Editing mod version "+o[1].data.getVersion.mod.name+" "+o[1].data.getVersion.version,title:"Edit mod version "+o[1].data.getVersion.mod.name+" "+o[1].data.getVersion.version},$$inline:!0});const s={c:function(){P(e.$$.fragment)},l:function(t){_(e.$$.fragment,t)},m:function(t,r){T(e,t,r),n=!0},p:function(t,r){const f={};r&2&&(f.description="Editing mod version "+t[1].data.getVersion.mod.name+" "+t[1].data.getVersion.version),r&2&&(f.title="Edit mod version "+t[1].data.getVersion.mod.name+" "+t[1].data.getVersion.version),e.$set(f)},i:function(t){n||(h(e.$$.fragment,t),n=!0)},o:function(t){b(e.$$.fragment,t),n=!1},d:function(t){j(e,t)}};return V("SvelteRegisterBlock",{block:s,id:q.name,type:"if",source:"(48:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:o}),s}function ie(o){let e,n;e=new ne({props:{onSubmit:o[5],initialValues:o[3],modReference:o[1].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save"},$$inline:!0});const s={c:function(){P(e.$$.fragment)},l:function(t){_(e.$$.fragment,t)},m:function(t,r){T(e,t,r),n=!0},p:function(t,r){const f={};r&8&&(f.initialValues=t[3]),r&2&&(f.modReference=t[1].data.getVersion.mod.mod_reference),e.$set(f)},i:function(t){n||(h(e.$$.fragment,t),n=!0)},o:function(t){b(e.$$.fragment,t),n=!1},d:function(t){j(e,t)}};return V("SvelteRegisterBlock",{block:s,id:ie.name,type:"else",source:"(63:4) {:else}",ctx:o}),s}function re(o){let e,n,s=o[1].error.message+"",i;const t={c:function(){e=C("p"),n=E("Oh no... "),i=E(s),this.h()},l:function(f){e=I(f,"P",{});var d=M(e);n=R(d,"Oh no... "),i=R(d,s),d.forEach(m),this.h()},h:function(){O(e,N,61,6,1906)},m:function(f,d){y(f,e,d),k(e,n),k(e,i)},p:function(f,d){d&2&&s!==(s=f[1].error.message+"")&&ee(i,s)},i:S,o:S,d:function(f){f&&m(e)}};return V("SvelteRegisterBlock",{block:t,id:re.name,type:"if",source:"(61:29) ",ctx:o}),t}function se(o){let e,n;const s={c:function(){e=C("p"),n=E("Loading..."),this.h()},l:function(t){e=I(t,"P",{});var r=M(e);n=R(r,"Loading..."),r.forEach(m),this.h()},h:function(){O(e,N,59,6,1852)},m:function(t,r){y(t,e,r),k(e,n)},p:S,i:S,o:S,d:function(t){t&&m(e)}};return V("SvelteRegisterBlock",{block:s,id:se.name,type:"if",source:"(59:4) {#if $version.fetching}",ctx:o}),s}function ae(o){let e,n,s,i;const t=[se,re,ie],r=[];function f($,l){return $[1].fetching?0:$[1].error?1:2}e=f(o),n=r[e]=t[e](o);const d={c:function(){n.c(),s=B()},l:function(l){n.l(l),s=B()},m:function(l,u){r[e].m(l,u),y(l,s,u),i=!0},p:function(l,u){let p=e;e=f(l),e===p?r[e].p(l,u):(X(),b(r[p],1,1,()=>{r[p]=null}),W(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),h(n,1),n.m(s.parentNode,s))},i:function(l){i||(h(n),i=!0)},o:function(l){b(n),i=!1},d:function(l){r[e].d(l),l&&m(s)}};return V("SvelteRegisterBlock",{block:d,id:ae.name,type:"slot",source:"(58:2) <Content>",ctx:o}),d}function ce(o){let e,n;e=new Q({props:{$$slots:{default:[ae]},$$scope:{ctx:o}},$$inline:!0});const s={c:function(){P(e.$$.fragment)},l:function(t){_(e.$$.fragment,t)},m:function(t,r){T(e,t,r),n=!0},p:function(t,r){const f={};r&2058&&(f.$$scope={dirty:r,ctx:t}),e.$set(f)},i:function(t){n||(h(e.$$.fragment,t),n=!0)},o:function(t){b(e.$$.fragment,t),n=!1},d:function(t){j(e,t)}};return V("SvelteRegisterBlock",{block:s,id:ce.name,type:"slot",source:"(57:0) <Card>",ctx:o}),s}function fe(o){let e,n;const s={c:function(){e=C("span"),n=E(o[2]),this.h()},l:function(t){e=I(t,"SPAN",{});var r=M(e);n=R(r,o[2]),r.forEach(m),this.h()},h:function(){O(e,N,74,2,2207)},m:function(t,r){y(t,e,r),k(e,n)},p:function(t,r){r&4&&ee(n,t[2])},d:function(t){t&&m(e)}};return V("SvelteRegisterBlock",{block:s,id:fe.name,type:"slot",source:"(74:0) <Toast bind:running={errorToast}>",ctx:o}),s}function J(o){let e,n,s,i,t,r,f,d,$,l,u=!o[1].fetching&&!o[1].error&&o[1].data.getVersion&&q(o);r=new K({props:{$$slots:{default:[ce]},$$scope:{ctx:o}},$$inline:!0});function p(g){o[7](g)}let x={$$slots:{default:[fe]},$$scope:{ctx:o}};o[0]!==void 0&&(x.running=o[0]),d=new te({props:x,$$inline:!0}),$e.push(()=>me(d,"running",p));const w={c:function(){u&&u.c(),e=B(),n=z(),s=C("h1"),i=E("Edit Version"),t=z(),P(r.$$.fragment),f=z(),P(d.$$.fragment),this.h()},l:function(c){const a=be("svelte-wzsk0g",document.head);u&&u.l(a),e=B(),a.forEach(m),n=D(c),s=I(c,"H1",{class:!0});var v=M(s);i=R(v,"Edit Version"),v.forEach(m),t=D(c),_(r.$$.fragment,c),f=D(c),_(d.$$.fragment,c),this.h()},h:function(){Ve(s,"class","text-4xl my-4 font-bold"),O(s,N,54,0,1744)},m:function(c,a){u&&u.m(document.head,null),k(document.head,e),y(c,n,a),y(c,s,a),k(s,i),y(c,t,a),T(r,c,a),y(c,f,a),T(d,c,a),l=!0},p:function(c,[a]){!c[1].fetching&&!c[1].error&&c[1].data.getVersion?u?(u.p(c,a),a&2&&h(u,1)):(u=q(c),u.c(),h(u,1),u.m(e.parentNode,e)):u&&(X(),b(u,1,1,()=>{u=null}),W());const v={};a&2058&&(v.$$scope={dirty:a,ctx:c}),r.$set(v);const L={};a&2052&&(L.$$scope={dirty:a,ctx:c}),!$&&a&1&&($=!0,L.running=c[0],ye(()=>$=!1)),d.$set(L)},i:function(c){l||(h(u),h(r.$$.fragment,c),h(d.$$.fragment,c),l=!0)},o:function(c){b(u),b(r.$$.fragment,c),b(d.$$.fragment,c),l=!1},d:function(c){u&&u.d(c),m(e),c&&m(n),c&&m(s),c&&m(t),j(r,c),c&&m(f),j(d,c)}};return V("SvelteRegisterBlock",{block:w,id:J.name,type:"component",source:"",ctx:o}),w}function ke(o,e,n){let s,i,{$$slots:t={},$$scope:r}=e;pe("Page",t,[]);let{data:f}=e;const{modId:d,versionId:$}=f,l=A();let u="",p=!1;const x=F({query:U,client:l,variables:{version:$}});ge(x,"version"),he(o,x,a=>n(1,i=a));const w=async a=>l.mutation(Y,{versionId:$,version:a}).toPromise().then(v=>{if(v.error)console.error(v.error.message),n(2,u="Error editing version: "+v.error.message),n(0,p=!0);else return G(H+"/mod/"+d+"/version/"+$)});o.$$.on_mount.push(function(){f===void 0&&!("data"in e||o.$$.bound[o.$$.props.data])&&Z.warn("<Page> was created without expected prop 'data'")});const g=["data"];Object.keys(e).forEach(a=>{!~g.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&Z.warn(`<Page> was created with unknown prop '${a}'`)});function c(a){p=a,n(0,p)}return o.$$set=a=>{"data"in a&&n(6,f=a.data)},o.$capture_state=()=>({queryStore:F,getContextClient:A,GetModVersionDocument:U,UpdateVersionDocument:Y,Toast:te,goto:G,VersionForm:ne,base:H,MetaDescriptors:oe,Card:K,Content:Q,data:f,modId:d,versionId:$,client:l,errorMessage:u,errorToast:p,version:x,onSubmit:w,initialValues:s,$version:i}),o.$inject_state=a=>{"data"in a&&n(6,f=a.data),"errorMessage"in a&&n(2,u=a.errorMessage),"errorToast"in a&&n(0,p=a.errorToast),"initialValues"in a&&n(3,s=a.initialValues)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&1&&(p||n(2,u="")),o.$$.dirty&2&&n(3,s=i.data?{...i.data.getVersion,logo:void 0}:void 0)},[p,i,u,s,x,w,f,c]}class Te extends ue{constructor(e){super(e),le(this,e,ke,J,de,{data:6}),V("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:J.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Te as component,_e as universal};
//# sourceMappingURL=19.fe3a4a54.js.map
