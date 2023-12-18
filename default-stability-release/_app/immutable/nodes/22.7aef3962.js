import{S as B,i as J,d as I,s as K,v as L,_ as k,F as C,$ as E,H as G,a0 as Q,J as N,b as O,e as p,K as V,L as D,j as l,k as P,g as h,M as z,h as y,N as R,m as v,O as j,n as f,Q as A,u as U,r as q,t as F,R as M}from"../chunks/vendor.ae0ae710.js";import{h as H}from"../chunks/graphql.80ff4abf.js";import{G as T}from"../chunks/GuideForm.ff348eaa.js";import{M as _}from"../chunks/MetaDescriptors.58d5a826.js";const{console:W}=Q,w="src/routes/new-guide/+page.svelte";function b(d){let t,g,a,$="New Guide",i,s,r,o,n;t=new _({props:{description:"Creating a new guide",title:"New guide"},$$inline:!0}),o=new T({props:{onSubmit:d[0]},$$inline:!0});const c={c:function(){N(t.$$.fragment),g=O(),a=p("h1"),a.textContent=$,i=O(),s=p("div"),r=p("section"),N(o.$$.fragment),this.h()},l:function(e){const u=V("svelte-u6ds2",document.head);D(t.$$.fragment,u),u.forEach(l),g=P(e),a=h(e,"H1",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-hqqpl"&&(a.textContent=$),i=P(e),s=h(e,"DIV",{class:!0});var x=y(s);r=h(x,"SECTION",{});var S=y(r);D(o.$$.fragment,S),S.forEach(l),x.forEach(l),this.h()},h:function(){R(a,"class","text-4xl my-4 font-bold"),v(a,w,44,0,1296),v(r,w,47,2,1373),R(s,"class","card p-4"),v(s,w,46,0,1348)},m:function(e,u){j(t,document.head,null),f(e,g,u),f(e,a,u),f(e,i,u),f(e,s,u),A(s,r),j(o,r,null),n=!0},p:U,i:function(e){n||(q(t.$$.fragment,e),q(o.$$.fragment,e),n=!0)},o:function(e){F(t.$$.fragment,e),F(o.$$.fragment,e),n=!1},d:function(e){e&&(l(g),l(a),l(i),l(s)),M(t),M(o)}};return I("SvelteRegisterBlock",{block:c,id:b.name,type:"component",source:"",ctx:d}),c}function X(d,t,g){let{$$slots:a={},$$scope:$}=t;L("Page",a,[]);const i=k(),s=C(),r=n=>{s.mutation(H,{guide:n}).toPromise().then(c=>{c.error?(console.error(c.error.message),i.trigger({message:"Error creating guide: "+c.error.message,background:"variant-filled-error",autohide:!1})):(i.trigger({message:"Guide created",background:"variant-filled-success",timeout:5e3}),E(G+"/guide/"+c.data.createGuide.id))})},o=[];return Object.keys(t).forEach(n=>{!~o.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&W.warn(`<Page> was created with unknown prop '${n}'`)}),d.$capture_state=()=>({getContextClient:C,NewGuideDocument:H,goto:E,GuideForm:T,base:G,MetaDescriptors:_,getToastStore:k,toastStore:i,client:s,onSubmit:r}),[r]}class ae extends B{constructor(t){super(t),J(this,t,X,b,K,{}),I("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:b.name})}}export{ae as component};
//# sourceMappingURL=22.7aef3962.js.map
