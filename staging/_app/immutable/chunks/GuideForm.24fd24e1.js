import{S as Ue,i as Xe,s as ze,d as B,r as pe,T as ge,bq as Fe,aQ as qe,v as Ke,aK as Te,Y as Ge,Z as Ye,x as v,a8 as C,a6 as I,L as Z,y as b,z as w,ab as L,a9 as M,q as $,N as J,ac as G,C as x,l as W,ad as m,ae as H,D as Ze,ai as he,O as oe,br as Je,p as Q,t as U,aj as X,P as E,aw as We}from"./vendor.e8e74389.js";import{o as et,s as ve,T as ce,V as le,c as Pe,v as Be,r as Re}from"./forms.e749ddeb.js";import{t as De}from"./forms.636dc03f.js";import{m as we}from"./markdown.6d1dfb9a.js";const be=et({name:ve().min(3).max(32),short_description:ve().min(16).max(128),guide:ve()});const S="src/lib/components/guides/GuideForm.svelte";function Ie(t){let e,n=(t[13]||"")+"",r;const s={c:function(){e=v("span"),r=Z(n),this.h()},l:function(a){e=b(a,"SPAN",{class:!0});var c=w(e);r=J(c,n),c.forEach($),this.h()},h:function(){G(e,"class","validation-message"),x(e,S,30,8,1134)},m:function(a,c){W(a,e,c),m(e,r)},p:function(a,c){c&8192&&n!==(n=(a[13]||"")+"")&&oe(r,n)},d:function(a){a&&$(e)}};return B("SvelteRegisterBlock",{block:s,id:Ie.name,type:"slot",source:'(30:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:t}),s}function Me(t){let e,n=(t[13]||"")+"",r;const s={c:function(){e=v("span"),r=Z(n),this.h()},l:function(a){e=b(a,"SPAN",{class:!0});var c=w(e);r=J(c,n),c.forEach($),this.h()},h:function(){G(e,"class","validation-message"),x(e,S,37,8,1457)},m:function(a,c){W(a,e,c),m(e,r)},p:function(a,c){c&8192&&n!==(n=(a[13]||"")+"")&&oe(r,n)},d:function(a){a&&$(e)}};return B("SvelteRegisterBlock",{block:s,id:Me.name,type:"slot",source:'(37:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:t}),s}function Ne(t){let e,n=(t[13]||"")+"",r;const s={c:function(){e=v("span"),r=Z(n),this.h()},l:function(a){e=b(a,"SPAN",{class:!0});var c=w(e);r=J(c,n),c.forEach($),this.h()},h:function(){G(e,"class","validation-message"),x(e,S,51,10,1906)},m:function(a,c){W(a,e,c),m(e,r)},p:function(a,c){c&8192&&n!==(n=(a[13]||"")+"")&&oe(r,n)},d:function(a){a&&$(e)}};return B("SvelteRegisterBlock",{block:s,id:Ne.name,type:"slot",source:'(51:8) <ValidationMessage for=\\"guide\\" let:messages={message}>',ctx:t}),s}function je(t){const e={c:E,l:E,m:E,p:E,d:E};return B("SvelteRegisterBlock",{block:e,id:je.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Ae(t){let e,n=t[12]+"";const r={c:function(){e=v("div"),this.h()},l:function(o){e=b(o,"DIV",{class:!0});var a=w(e);a.forEach($),this.h()},h:function(){G(e,"class","markdown-content right s-pSUceh_9Xnkb"),x(e,S,57,10,2167)},m:function(o,a){W(o,e,a),e.innerHTML=n},p:function(o,a){a&8&&n!==(n=o[12]+"")&&(e.innerHTML=n)},d:function(o){o&&$(e)}};return B("SvelteRegisterBlock",{block:r,id:Ae.name,type:"then",source:'(57:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:t}),r}function Oe(t){const e={c:E,l:E,m:E,p:E,d:E};return B("SvelteRegisterBlock",{block:e,id:Oe.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Ce(t){let e;const n={c:function(){e=Z(t[1])},l:function(s){e=J(s,t[1])},m:function(s,o){W(s,e,o)},p:function(s,o){o&2&&oe(e,s[1])},d:function(s){s&&$(e)}};return B("SvelteRegisterBlock",{block:n,id:Ce.name,type:"slot",source:'(64:6) <Button variant=\\"outlined\\" type=\\"submit\\">',ctx:t}),n}function xe(t){let e,n,r,s,o,a,c,ee,_,p,F,P,g,z,d,k,V,te,ne,i,ue,T,N,se=t[4]("preview")+"",re,fe,me,ae,$e,K,R,ie,de,Se;function Le(l){t[9](l)}let ye={label:t[4]("entry.name"),required:!0};t[2].name!==void 0&&(ye.value=t[2].name),s=new ce({props:ye,$$inline:!0}),pe.push(()=>ge(s,"value",Le)),c=new le({props:{for:"name",$$slots:{default:[Ie,({messages:l})=>({13:l}),({messages:l})=>l?8192:0]},$$scope:{ctx:t}},$$inline:!0});function He(l){t[10](l)}let ke={label:t[4]("entry.short-description"),required:!0};t[2].short_description!==void 0&&(ke.value=t[2].short_description),p=new ce({props:ke,$$inline:!0}),pe.push(()=>ge(p,"value",He)),g=new le({props:{for:"short_description",$$slots:{default:[Me,({messages:l})=>({13:l}),({messages:l})=>l?8192:0]},$$scope:{ctx:t}},$$inline:!0});function Qe(l){t[11](l)}let Ve={textarea:!0,class:"vertical-textarea",label:t[4]("guide"),required:!0,input$rows:10};t[2].guide!==void 0&&(Ve.value=t[2].guide),V=new ce({props:Ve,$$inline:!0}),pe.push(()=>ge(V,"value",Qe)),i=new le({props:{for:"guide",$$slots:{default:[Ne,({messages:l})=>({13:l}),({messages:l})=>l?8192:0]},$$scope:{ctx:t}},$$inline:!0});let h={ctx:t,current:null,token:null,hasCatch:!1,pending:Oe,then:Ae,catch:je,value:12};Fe(ae=we(t[3]),h),R=new qe({props:{variant:"outlined",type:"submit",$$slots:{default:[Ce]},$$scope:{ctx:t}},$$inline:!0});const Ee={c:function(){e=v("form"),n=v("div"),r=v("div"),C(s.$$.fragment),a=I(),C(c.$$.fragment),ee=I(),_=v("div"),C(p.$$.fragment),P=I(),C(g.$$.fragment),z=I(),d=v("div"),k=v("div"),C(V.$$.fragment),ne=I(),C(i.$$.fragment),ue=I(),T=v("div"),N=v("span"),re=Z(se),fe=Z(":"),me=I(),h.block.c(),$e=I(),K=v("div"),C(R.$$.fragment),this.h()},l:function(u){e=b(u,"FORM",{});var f=w(e);n=b(f,"DIV",{class:!0});var y=w(n);r=b(y,"DIV",{class:!0});var j=w(r);L(s.$$.fragment,j),a=M(j),L(c.$$.fragment,j),j.forEach($),ee=M(y),_=b(y,"DIV",{class:!0});var D=w(_);L(p.$$.fragment,D),P=M(D),L(g.$$.fragment,D),D.forEach($),z=M(y),d=b(y,"DIV",{class:!0});var A=w(d);k=b(A,"DIV",{class:!0});var q=w(k);L(V.$$.fragment,q),ne=M(q),L(i.$$.fragment,q),q.forEach($),ue=M(A),T=b(A,"DIV",{class:!0});var O=w(T);N=b(O,"SPAN",{});var Y=w(N);re=J(Y,se),fe=J(Y,":"),Y.forEach($),me=M(O),h.block.l(O),O.forEach($),A.forEach($),$e=M(y),K=b(y,"DIV",{});var _e=w(K);L(R.$$.fragment,_e),_e.forEach($),y.forEach($),f.forEach($),this.h()},h:function(){G(r,"class","grid grid-flow-row gap-2"),x(r,S,27,4,949),G(_,"class","grid grid-flow-row gap-2"),x(_,S,34,4,1233),G(k,"class","grid grid-flow-row gap-2 auto-rows-max"),x(k,S,42,6,1593),x(N,S,55,8,2071),G(T,"class","grid grid-flow-row gap-2 auto-rows-max"),x(T,S,54,6,2010),G(d,"class","grid gap-6 split s-pSUceh_9Xnkb"),x(d,S,41,4,1556),x(K,S,62,4,2279),G(n,"class","grid grid-flow-row gap-6"),x(n,S,26,2,906),x(e,S,25,0,888)},m:function(u,f){W(u,e,f),m(e,n),m(n,r),H(s,r,null),m(r,a),H(c,r,null),m(n,ee),m(n,_),H(p,_,null),m(_,P),H(g,_,null),m(n,z),m(n,d),m(d,k),H(V,k,null),m(k,ne),H(i,k,null),m(d,ue),m(d,T),m(T,N),m(N,re),m(N,fe),m(T,me),h.block.m(T,h.anchor=null),h.mount=()=>T,h.anchor=null,m(n,$e),m(n,K),H(R,K,null),ie=!0,de||(Se=Ze(t[5].call(null,e)),de=!0)},p:function(u,[f]){t=u;const y={};f&16&&(y.label=t[4]("entry.name")),!o&&f&4&&(o=!0,y.value=t[2].name,he(()=>o=!1)),s.$set(y);const j={};f&24576&&(j.$$scope={dirty:f,ctx:t}),c.$set(j);const D={};f&16&&(D.label=t[4]("entry.short-description")),!F&&f&4&&(F=!0,D.value=t[2].short_description,he(()=>F=!1)),p.$set(D);const A={};f&24576&&(A.$$scope={dirty:f,ctx:t}),g.$set(A);const q={};f&16&&(q.label=t[4]("guide")),!te&&f&4&&(te=!0,q.value=t[2].guide,he(()=>te=!1)),V.$set(q);const O={};f&24576&&(O.$$scope={dirty:f,ctx:t}),i.$set(O),(!ie||f&16)&&se!==(se=t[4]("preview")+"")&&oe(re,se),h.ctx=t,f&8&&ae!==(ae=we(t[3]))&&Fe(ae,h)||Je(h,t,f);const Y={};f&16386&&(Y.$$scope={dirty:f,ctx:t}),R.$set(Y)},i:function(u){ie||(Q(s.$$.fragment,u),Q(c.$$.fragment,u),Q(p.$$.fragment,u),Q(g.$$.fragment,u),Q(V.$$.fragment,u),Q(i.$$.fragment,u),Q(R.$$.fragment,u),ie=!0)},o:function(u){U(s.$$.fragment,u),U(c.$$.fragment,u),U(p.$$.fragment,u),U(g.$$.fragment,u),U(V.$$.fragment,u),U(i.$$.fragment,u),U(R.$$.fragment,u),ie=!1},d:function(u){u&&$(e),X(s),X(c),X(p),X(g),X(V),X(i),h.block.d(),h.token=null,h=null,X(R),de=!1,Se()}};return B("SvelteRegisterBlock",{block:Ee,id:xe.name,type:"component",source:"",ctx:t}),Ee}function tt(t,e,n){let r,s,o,a=E,c=()=>(a(),a=We(p,i=>n(4,o=i)),p);t.$$.on_destroy.push(()=>a());let{$$slots:ee={},$$scope:_}=e;Ke("GuideForm",ee,[]);const{t:p}=Te();Ge(p,"t"),c();let{onSubmit:F}=e,{initialValues:P={name:"",guide:"",short_description:""}}=e,{submitText:g=o("entry.create")}=e;const{form:z,data:d}=Pe({initialValues:P,extend:[Be({schema:be}),Re],onSubmit:i=>F(De(i,be))});Ge(d,"data"),Ye(t,d,i=>n(2,s=i)),t.$$.on_mount.push(function(){F===void 0&&!("onSubmit"in e||t.$$.bound[t.$$.props.onSubmit])&&console.warn("<GuideForm> was created without expected prop 'onSubmit'")});const k=["onSubmit","initialValues","submitText"];Object.keys(e).forEach(i=>{!~k.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<GuideForm> was created with unknown prop '${i}'`)});function V(i){t.$$.not_equal(s.name,i)&&(s.name=i,d.set(s))}function te(i){t.$$.not_equal(s.short_description,i)&&(s.short_description=i,d.set(s))}function ne(i){t.$$.not_equal(s.guide,i)&&(s.guide=i,d.set(s))}return t.$$set=i=>{"onSubmit"in i&&n(7,F=i.onSubmit),"initialValues"in i&&n(8,P=i.initialValues),"submitText"in i&&n(1,g=i.submitText)},t.$capture_state=()=>({createForm:Pe,validator:Be,reporter:Re,ValidationMessage:le,guideSchema:be,trimNonSchema:De,markdown:we,Textfield:ce,Button:qe,getTranslate:Te,t:p,onSubmit:F,initialValues:P,submitText:g,form:z,data:d,preview:r,$data:s,$t:o}),t.$inject_state=i=>{"onSubmit"in i&&n(7,F=i.onSubmit),"initialValues"in i&&n(8,P=i.initialValues),"submitText"in i&&n(1,g=i.submitText),"preview"in i&&n(3,r=i.preview)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&4&&n(3,r=s.guide||"")},[p,g,s,r,o,z,d,F,P,V,te,ne]}class rt extends Ue{constructor(e){super(e),Xe(this,e,tt,xe,ze,{t:0,onSubmit:7,initialValues:8,submitText:1}),B("SvelteRegisterComponent",{component:this,tagName:"GuideForm",options:e,id:xe.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<GuideForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<GuideForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{rt as G};
//# sourceMappingURL=GuideForm.24fd24e1.js.map
