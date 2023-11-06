import{S as Ke,i as Xe,s as Qe,d as P,v as tn,aK as Xt,Y as ge,aJ as Ue,aL as je,bm as he,k as Qt,l as N,P as K,q as u,aw as ve,x as V,L,y as M,z as R,N as H,ac as S,C as B,ad as f,a6 as F,a9 as T,O as G,r as ct,T as lt,bq as Le,aU as Me,aQ as te,Z as Tn,b9 as Be,aT as Re,$ as de,a$ as He,a8 as q,ab as C,ae as U,D as Nn,ai as at,br as qn,p as _,m as Yt,t as I,n as Gt,aj as j,b0 as Cn}from"./vendor.9e4e80bb.js";import{o as Wt,s as rt,d as Zt,e as Un,l as jn,f as Oe,g as Ln,T as At,V as St,c as ze,v as We,r as Ze,b as en}from"./forms.df145fad.js";import{t as Ye}from"./forms.a26238e3.js";import{m as be}from"./markdown.d8d0e444.js";import{S as Ge,W as me}from"./graphql.04d4ab78.js";import{T as nn}from"./TagList.f5ccc964.js";import{M as on}from"./ModCompatibilityEdit.7905ccdd.js";const pe=Wt({name:rt().min(3).max(32),mod_reference:rt().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:rt().min(16).max(128),full_description:Zt(rt()),logo:Zt(Un().refine(e=>"name"in e&&"size"in e&&"type"in e)),source_url:rt().url().optional().or(jn("")),authors:Zt(Wt({role:rt(),user_id:rt()}).array()),compatibility:Zt(Wt({EA:Wt({state:rt(),note:Oe()}),EXP:Wt({state:rt(),note:Oe()})})),hidden:Ln(),tagIDs:Zt(rt().array())}),Dt="src/lib/components/mods/ModAuthor.svelte";function sn(e){let t,n;const c={c:function(){t=V("p"),n=L("Unknown User ID"),this.h()},l:function(i){t=M(i,"P",{class:!0});var s=R(t);n=H(s,"Unknown User ID"),s.forEach(u),this.h()},h:function(){S(t,"class","mr-2 whitespace-nowrap"),B(t,Dt,28,2,952)},m:function(i,s){N(i,t,s),f(t,n)},p:K,d:function(i){i&&u(t)}};return P("SvelteRegisterBlock",{block:c,id:sn.name,type:"else",source:"(28:0) {:else}",ctx:e}),c}function rn(e){let t,n,c,o,i,s,r=e[2].data.getUser.username+"",l;const x={c:function(){t=V("div"),n=V("div"),o=F(),i=V("div"),s=V("span"),l=L(r),this.h()},l:function($){t=M($,"DIV",{class:!0});var p=R(t);n=M(p,"DIV",{class:!0,style:!0}),R(n).forEach(u),o=T(p),i=M(p,"DIV",{class:!0});var v=R(i);s=M(v,"SPAN",{class:!0});var g=R(s);l=H(g,r),g.forEach(u),v.forEach(u),p.forEach(u),this.h()},h:function(){S(n,"class","rounded-full bg-cover w-7 h-7"),S(n,"style",c=`background-image: url("${e[2].data.getUser.avatar||he+"/images/no_image.webp"}")`),B(n,Dt,20,4,654),S(s,"class","text-yellow-500"),B(s,Dt,24,6,855),S(i,"class","grid grid-flow-row"),B(i,Dt,23,4,816),S(t,"class","grid grid-flow-col auto-cols-max gap-x-2 mr-2"),B(t,Dt,19,2,590)},m:function($,p){N($,t,p),f(t,n),f(t,o),f(t,i),f(i,s),f(s,l)},p:function($,p){p&4&&c!==(c=`background-image: url("${$[2].data.getUser.avatar||he+"/images/no_image.webp"}")`)&&S(n,"style",c),p&4&&r!==(r=$[2].data.getUser.username+"")&&G(l,r)},d:function($){$&&u(t)}};return P("SvelteRegisterBlock",{block:x,id:rn.name,type:"if",source:"(19:29) ",ctx:e}),x}function cn(e){let t,n=e[3]("error.oh-no")+"",c,o,i=e[2].error.message+"",s;const r={c:function(){t=V("p"),c=L(n),o=L("... "),s=L(i),this.h()},l:function(x){t=M(x,"P",{class:!0});var h=R(t);c=H(h,n),o=H(h,"... "),s=H(h,i),h.forEach(u),this.h()},h:function(){S(t,"class","mr-2"),B(t,Dt,17,2,493)},m:function(x,h){N(x,t,h),f(t,c),f(t,o),f(t,s)},p:function(x,h){h&8&&n!==(n=x[3]("error.oh-no")+"")&&G(c,n),h&4&&i!==(i=x[2].error.message+"")&&G(s,i)},d:function(x){x&&u(t)}};return P("SvelteRegisterBlock",{block:r,id:cn.name,type:"if",source:"(17:22) ",ctx:e}),r}function ln(e){let t,n=e[3]("loading")+"",c,o;const i={c:function(){t=V("p"),c=L(n),o=L("..."),this.h()},l:function(r){t=M(r,"P",{class:!0});var l=R(t);c=H(l,n),o=H(l,"..."),l.forEach(u),this.h()},h:function(){S(t,"class","mr-2"),B(t,Dt,15,2,429)},m:function(r,l){N(r,t,l),f(t,c),f(t,o)},p:function(r,l){l&8&&n!==(n=r[3]("loading")+"")&&G(c,n)},d:function(r){r&&u(t)}};return P("SvelteRegisterBlock",{block:i,id:ln.name,type:"if",source:"(15:0) {#if $user.fetching}",ctx:e}),i}function we(e){let t;function n(s,r){return s[2].fetching?ln:s[2].error?cn:s[2].data.getUser?rn:sn}let c=n(e),o=c(e);const i={c:function(){o.c(),t=Qt()},l:function(r){o.l(r),t=Qt()},m:function(r,l){o.m(r,l),N(r,t,l)},p:function(r,[l]){c===(c=n(r))&&o?o.p(r,l):(o.d(1),o=c(r),o&&(o.c(),o.m(t.parentNode,t)))},i:K,o:K,d:function(r){o.d(r),r&&u(t)}};return P("SvelteRegisterBlock",{block:i,id:we.name,type:"component",source:"",ctx:e}),i}function Hn(e,t,n){let c,o,i=K,s=()=>(i(),i=ve(c,d=>n(2,o=d)),c),r,l=K,x=()=>(l(),l=ve(v,d=>n(3,r=d)),v);e.$$.on_destroy.push(()=>i()),e.$$.on_destroy.push(()=>l());let{$$slots:h={},$$scope:$}=t;tn("ModAuthor",h,[]);let{id:p}=t;const{t:v}=Xt();ge(v,"t"),x();const g=Ue();e.$$.on_mount.push(function(){p===void 0&&!("id"in t||e.$$.bound[e.$$.props.id])&&console.warn("<ModAuthor> was created without expected prop 'id'")});const y=["id"];return Object.keys(t).forEach(d=>{!~y.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<ModAuthor> was created with unknown prop '${d}'`)}),e.$$set=d=>{"id"in d&&n(4,p=d.id)},e.$capture_state=()=>({queryStore:je,getContextClient:Ue,GetUserDocument:Ge,assets:he,getTranslate:Xt,id:p,t:v,client:g,user:c,$user:o,$t:r}),e.$inject_state=d=>{"id"in d&&n(4,p=d.id),"user"in d&&s(n(1,c=d.user))},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&16&&s(n(1,c=je({query:Ge,client:g,variables:{user:p}})))},[v,c,o,r,p]}class an extends Ke{constructor(t){super(t),Xe(this,t,Hn,we,Qe,{id:4,t:0}),P("SvelteRegisterComponent",{component:this,tagName:"ModAuthor",options:t,id:we.name})}get id(){throw new Error("<ModAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set id(t){throw new Error("<ModAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<ModAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const A="src/lib/components/mods/ModForm.svelte";function Je(e,t,n){const c=e.slice();return c[27]=t[n],c[28]=t,c[29]=n,c}function fn(e){let t,n=(e[30]||"")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{class:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"class","validation-message"),B(t,A,79,8,2651)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&1073741824&&n!==(n=(s[30]||"")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:fn.name,type:"slot",source:'(79:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:e}),o}function ye(e){let t=e[7]("mod.reference-warning")+"",n;const c={c:function(){n=L(t)},l:function(i){n=H(i,t)},m:function(i,s){N(i,n,s)},p:function(i,s){s[0]&128&&t!==(t=i[7]("mod.reference-warning")+"")&&G(n,t)},d:function(i){i&&u(n)}};return P("SvelteRegisterBlock",{block:c,id:ye.name,type:"if",source:"(87:10) {#if !editing}",ctx:e}),c}function un(e){let t,n=!e[2]&&ye(e);const c={c:function(){n&&n.c(),t=Qt()},l:function(i){n&&n.l(i),t=Qt()},m:function(i,s){n&&n.m(i,s),N(i,t,s)},p:function(i,s){i[2]?n&&(n.d(1),n=null):n?n.p(i,s):(n=ye(i),n.c(),n.m(t.parentNode,t))},d:function(i){n&&n.d(i),i&&u(t)}};return P("SvelteRegisterBlock",{block:c,id:un.name,type:"slot",source:'(86:8) <HelperText persistent={!editing} slot=\\"helper\\">',ctx:e}),c}function $n(e){let t,n;t=new en({props:{persistent:!e[2],slot:"helper",$$slots:{default:[un]},$$scope:{ctx:e}},$$inline:!0});const c={c:function(){q(t.$$.fragment)},l:function(i){C(t.$$.fragment,i)},m:function(i,s){U(t,i,s),n=!0},p:function(i,s){const r={};s[0]&4&&(r.persistent=!i[2]),s[0]&132|s[1]&2&&(r.$$scope={dirty:s,ctx:i}),t.$set(r)},i:function(i){n||(_(t.$$.fragment,i),n=!0)},o:function(i){I(t.$$.fragment,i),n=!1},d:function(i){j(t,i)}};return P("SvelteRegisterBlock",{block:c,id:$n.name,type:"slot",source:"(86:8) ",ctx:e}),c}function dn(e){let t,n=(e[30]||"")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{class:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"class","validation-message"),B(t,A,92,8,3154)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&1073741824&&n!==(n=(s[30]||"")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:dn.name,type:"slot",source:'(92:6) <ValidationMessage for=\\"mod_reference\\" let:messages={message}>',ctx:e}),o}function mn(e){let t,n=(e[30]||"")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{class:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"class","validation-message"),B(t,A,99,8,3477)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&1073741824&&n!==(n=(s[30]||"")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:mn.name,type:"slot",source:'(99:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:e}),o}function pn(e){let t,n=(e[30]||"")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{class:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"class","validation-message"),B(t,A,113,10,3965)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&1073741824&&n!==(n=(s[30]||"")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:pn.name,type:"slot",source:'(113:8) <ValidationMessage for=\\"full_description\\" let:messages={message}>',ctx:e}),o}function gn(e){const t={c:K,l:K,m:K,p:K,d:K};return P("SvelteRegisterBlock",{block:t,id:gn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function hn(e){let t,n=e[31]+"";const c={c:function(){t=V("div"),this.h()},l:function(i){t=M(i,"DIV",{class:!0});var s=R(t);s.forEach(u),this.h()},h:function(){S(t,"class","markdown-content right s-YtrVF1HCE9t3"),B(t,A,119,10,4226)},m:function(i,s){N(i,t,s),t.innerHTML=n},p:function(i,s){s[0]&64&&n!==(n=i[31]+"")&&(t.innerHTML=n)},d:function(i){i&&u(t)}};return P("SvelteRegisterBlock",{block:c,id:hn.name,type:"then",source:'(119:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:e}),c}function vn(e){const t={c:K,l:K,m:K,p:K,d:K};return P("SvelteRegisterBlock",{block:t,id:vn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:e}),t}function bn(e){let t,n=(e[30]||"")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{class:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"class","validation-message"),B(t,A,138,8,4766)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&1073741824&&n!==(n=(s[30]||"")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:bn.name,type:"slot",source:'(138:6) <ValidationMessage for=\\"logo\\" let:messages={message}>',ctx:e}),o}function wn(e){let t,n=(e[30]||"")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{class:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"class","validation-message"),B(t,A,145,8,5059)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&1073741824&&n!==(n=(s[30]||"")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:wn.name,type:"slot",source:'(145:6) <ValidationMessage for=\\"source_url\\" let:messages={message}>',ctx:e}),o}function yn(e){let t,n,c;function o(r){e[21](r)}let i={};e[4].hidden!==void 0&&(i.checked=e[4].hidden),t=new Re({props:i,$$inline:!0}),ct.push(()=>lt(t,"checked",o));const s={c:function(){q(t.$$.fragment)},l:function(l){C(t.$$.fragment,l)},m:function(l,x){U(t,l,x),c=!0},p:function(l,x){const h={};!n&&x[0]&16&&(n=!0,h.checked=l[4].hidden,at(()=>n=!1)),t.$set(h)},i:function(l){c||(_(t.$$.fragment,l),c=!0)},o:function(l){I(t.$$.fragment,l),c=!1},d:function(l){j(t,l)}};return P("SvelteRegisterBlock",{block:s,id:yn.name,type:"slot",source:"(151:6) <FormField>",ctx:e}),s}function xn(e){let t,n=e[7]("entry.hidden")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{slot:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"slot","label"),B(t,A,152,8,5270)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&128&&n!==(n=s[7]("entry.hidden")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:xn.name,type:"slot",source:"(153:8) ",ctx:e}),o}function kn(e){let t,n=(e[30]||"")+"",c;const o={c:function(){t=V("span"),c=L(n),this.h()},l:function(s){t=M(s,"SPAN",{class:!0});var r=R(t);c=H(r,n),r.forEach(u),this.h()},h:function(){S(t,"class","validation-message"),B(t,A,155,8,5406)},m:function(s,r){N(s,t,r),f(t,c)},p:function(s,r){r[0]&1073741824&&n!==(n=(s[30]||"")+"")&&G(c,n)},d:function(s){s&&u(t)}};return P("SvelteRegisterBlock",{block:o,id:kn.name,type:"slot",source:'(155:6) <ValidationMessage for=\\"hidden\\" let:messages={message}>',ctx:e}),o}function xe(e){let t,n,c,o,i,s,r,l=e[7]("authors")+"",x,h,$,p,v;n=new Me({props:{align:"start",$$slots:{default:[_n]},$$scope:{ctx:e}},$$inline:!0});let g=e[5]&&ke(e);$=new te({props:{type:"button",$$slots:{default:[En]},$$scope:{ctx:e}},$$inline:!0}),$.$on("click",e[10]);let y=e[4].authors;He(y);let d=[];for(let D=0;D<y.length;D+=1)d[D]=Ee(Je(e,y,D));const Z=D=>I(d[D],1,1,()=>{d[D]=null}),ft={c:function(){t=V("div"),q(n.$$.fragment),c=F(),g&&g.c(),o=F(),i=V("div"),s=V("div"),r=V("h4"),x=L(l),h=F(),q($.$$.fragment),p=F();for(let b=0;b<d.length;b+=1)d[b].c();this.h()},l:function(b){t=M(b,"DIV",{});var k=R(t);C(n.$$.fragment,k),k.forEach(u),c=T(b),g&&g.l(b),o=T(b),i=M(b,"DIV",{class:!0});var O=R(i);s=M(O,"DIV",{class:!0});var J=R(s);r=M(J,"H4",{class:!0});var z=R(r);x=H(z,l),z.forEach(u),h=T(J),C($.$$.fragment,J),J.forEach(u),p=T(O);for(let Q=0;Q<d.length;Q+=1)d[Q].l(O);O.forEach(u),this.h()},h:function(){B(t,A,159,6,5524),S(r,"class","mr-4"),B(r,A,176,10,6082),S(s,"class","flex items-baseline"),B(s,A,175,8,6038),S(i,"class","grid grid-flow-row gap-2"),B(i,A,174,6,5991)},m:function(b,k){N(b,t,k),U(n,t,null),N(b,c,k),g&&g.m(b,k),N(b,o,k),N(b,i,k),f(i,s),f(s,r),f(r,x),f(s,h),U($,s,null),f(i,p);for(let O=0;O<d.length;O+=1)d[O]&&d[O].m(i,null);v=!0},p:function(b,k){const O={};k[0]&176|k[1]&2&&(O.$$scope={dirty:k,ctx:b}),n.$set(O),b[5]?g?(g.p(b,k),k[0]&32&&_(g,1)):(g=ke(b),g.c(),_(g,1),g.m(o.parentNode,o)):g&&(Yt(),I(g,1,1,()=>{g=null}),Gt()),(!v||k[0]&128)&&l!==(l=b[7]("authors")+"")&&G(x,l);const J={};if(k[0]&128|k[1]&2&&(J.$$scope={dirty:k,ctx:b}),$.$set(J),k[0]&2192){y=b[4].authors,He(y);let z;for(z=0;z<y.length;z+=1){const Q=Je(b,y,z);d[z]?(d[z].p(Q,k),_(d[z],1)):(d[z]=Ee(Q),d[z].c(),_(d[z],1),d[z].m(i,null))}for(Yt(),z=y.length;z<d.length;z+=1)Z(z);Gt()}},i:function(b){if(!v){_(n.$$.fragment,b),_(g),_($.$$.fragment,b);for(let k=0;k<y.length;k+=1)_(d[k]);v=!0}},o:function(b){I(n.$$.fragment,b),I(g),I($.$$.fragment,b),d=d.filter(Boolean);for(let k=0;k<d.length;k+=1)I(d[k]);v=!1},d:function(b){b&&u(t),j(n),b&&u(c),g&&g.d(b),b&&u(o),b&&u(i),j($),Cn(d,b)}};return P("SvelteRegisterBlock",{block:ft,id:xe.name,type:"if",source:"(159:4) {#if editing}",ctx:e}),ft}function _n(e){let t,n,c,o,i=e[7]("compatibility-info.edit")+"",s,r;function l($){e[22]($)}let x={};e[5]!==void 0&&(x.checked=e[5]),t=new Re({props:x,$$inline:!0}),ct.push(()=>lt(t,"checked",l)),t.$on("SMUISwitch:change",e[23]);const h={c:function(){q(t.$$.fragment),c=F(),o=V("span"),s=L(i),this.h()},l:function(p){C(t.$$.fragment,p),c=T(p),o=M(p,"SPAN",{});var v=R(o);s=H(v,i),v.forEach(u),this.h()},h:function(){B(o,A,166,10,5788)},m:function(p,v){U(t,p,v),N(p,c,v),N(p,o,v),f(o,s),r=!0},p:function(p,v){const g={};!n&&v[0]&32&&(n=!0,g.checked=p[5],at(()=>n=!1)),t.$set(g),(!r||v[0]&128)&&i!==(i=p[7]("compatibility-info.edit")+"")&&G(s,i)},i:function(p){r||(_(t.$$.fragment,p),r=!0)},o:function(p){I(t.$$.fragment,p),r=!1},d:function(p){j(t,p),p&&u(c),p&&u(o)}};return P("SvelteRegisterBlock",{block:h,id:_n.name,type:"slot",source:'(161:8) <FormField align=\\"start\\">',ctx:e}),h}function ke(e){let t,n,c;function o(r){e[24](r)}let i={};e[4].compatibility!==void 0&&(i.compatibilityInfo=e[4].compatibility),t=new on({props:i,$$inline:!0}),ct.push(()=>lt(t,"compatibilityInfo",o));const s={c:function(){q(t.$$.fragment)},l:function(l){C(t.$$.fragment,l)},m:function(l,x){U(t,l,x),c=!0},p:function(l,x){const h={};!n&&x[0]&16&&(n=!0,h.compatibilityInfo=l[4].compatibility,at(()=>n=!1)),t.$set(h)},i:function(l){c||(_(t.$$.fragment,l),c=!0)},o:function(l){I(t.$$.fragment,l),c=!1},d:function(l){j(t,l)}};return P("SvelteRegisterBlock",{block:s,id:ke.name,type:"if",source:"(171:6) {#if editCompatibility}",ctx:e}),s}function Sn(e){let t=e[7]("add")+"",n;const c={c:function(){n=L(t)},l:function(i){n=H(i,t)},m:function(i,s){N(i,n,s)},p:function(i,s){s[0]&128&&t!==(t=i[7]("add")+"")&&G(n,t)},d:function(i){i&&u(n)}};return P("SvelteRegisterBlock",{block:c,id:Sn.name,type:"slot",source:"(179:12) <Label>",ctx:e}),c}function En(e){let t,n;t=new Be({props:{$$slots:{default:[Sn]},$$scope:{ctx:e}},$$inline:!0});const c={c:function(){q(t.$$.fragment)},l:function(i){C(t.$$.fragment,i)},m:function(i,s){U(t,i,s),n=!0},p:function(i,s){const r={};s[0]&128|s[1]&2&&(r.$$scope={dirty:s,ctx:i}),t.$set(r)},i:function(i){n||(_(t.$$.fragment,i),n=!0)},o:function(i){I(t.$$.fragment,i),n=!1},d:function(i){j(t,i)}};return P("SvelteRegisterBlock",{block:c,id:En.name,type:"slot",source:'(178:10) <Button type=\\"button\\" on:click={addAuthor}>',ctx:e}),c}function _e(e){let t,n;t=new an({props:{id:e[4].authors[e[29]].user_id},$$inline:!0});const c={c:function(){q(t.$$.fragment)},l:function(i){C(t.$$.fragment,i)},m:function(i,s){U(t,i,s),n=!0},p:function(i,s){const r={};s[0]&16&&(r.id=i[4].authors[i[29]].user_id),t.$set(r)},i:function(i){n||(_(t.$$.fragment,i),n=!0)},o:function(i){I(t.$$.fragment,i),n=!1},d:function(i){j(t,i)}};return P("SvelteRegisterBlock",{block:c,id:_e.name,type:"if",source:"(184:12) {#if $data.authors[i].user_id}",ctx:e}),c}function Se(e){let t,n;function c(){return e[26](e[29])}t=new te({props:{type:"button",variant:"raised",$$slots:{default:[Mn]},$$scope:{ctx:e}},$$inline:!0}),t.$on("click",c);const o={c:function(){q(t.$$.fragment)},l:function(s){C(t.$$.fragment,s)},m:function(s,r){U(t,s,r),n=!0},p:function(s,r){e=s;const l={};r[0]&128|r[1]&2&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i:function(s){n||(_(t.$$.fragment,s),n=!0)},o:function(s){I(t.$$.fragment,s),n=!1},d:function(s){j(t,s)}};return P("SvelteRegisterBlock",{block:o,id:Se.name,type:"if",source:"(192:12) {#if author.role !== 'creator'}",ctx:e}),o}function Vn(e){let t=e[7]("remove")+"",n;const c={c:function(){n=L(t)},l:function(i){n=H(i,t)},m:function(i,s){N(i,n,s)},p:function(i,s){s[0]&128&&t!==(t=i[7]("remove")+"")&&G(n,t)},d:function(i){i&&u(n)}};return P("SvelteRegisterBlock",{block:c,id:Vn.name,type:"slot",source:"(194:16) <Label>",ctx:e}),c}function Mn(e){let t,n;t=new Be({props:{$$slots:{default:[Vn]},$$scope:{ctx:e}},$$inline:!0});const c={c:function(){q(t.$$.fragment)},l:function(i){C(t.$$.fragment,i)},m:function(i,s){U(t,i,s),n=!0},p:function(i,s){const r={};s[0]&128|s[1]&2&&(r.$$scope={dirty:s,ctx:i}),t.$set(r)},i:function(i){n||(_(t.$$.fragment,i),n=!0)},o:function(i){I(t.$$.fragment,i),n=!1},d:function(i){j(t,i)}};return P("SvelteRegisterBlock",{block:c,id:Mn.name,type:"slot",source:'(193:14) <Button type=\\"button\\" on:click={() => removeAuthor(i)} variant=\\"raised\\">',ctx:e}),c}function Ee(e){let t,n,c,o,i,s,r,l=e[4].authors[e[29]].user_id&&_e(e);function x(v){e[25](v,e[29])}let h={label:"User ID",class:"mr-4 w-full",disabled:e[27].role==="creator"};e[4].authors[e[29]].user_id!==void 0&&(h.value=e[4].authors[e[29]].user_id),c=new At({props:h,$$inline:!0}),ct.push(()=>lt(c,"value",x));let $=e[27].role!=="creator"&&Se(e);const p={c:function(){t=V("div"),l&&l.c(),n=F(),q(c.$$.fragment),i=F(),$&&$.c(),s=F(),this.h()},l:function(g){t=M(g,"DIV",{class:!0});var y=R(t);l&&l.l(y),n=T(y),C(c.$$.fragment,y),i=T(y),$&&$.l(y),s=T(y),y.forEach(u),this.h()},h:function(){S(t,"class","flex items-baseline"),B(t,A,182,10,6301)},m:function(g,y){N(g,t,y),l&&l.m(t,null),f(t,n),U(c,t,null),f(t,i),$&&$.m(t,null),f(t,s),r=!0},p:function(g,y){e=g,e[4].authors[e[29]].user_id?l?(l.p(e,y),y[0]&16&&_(l,1)):(l=_e(e),l.c(),_(l,1),l.m(t,n)):l&&(Yt(),I(l,1,1,()=>{l=null}),Gt());const d={};y[0]&16&&(d.disabled=e[27].role==="creator"),!o&&y[0]&16&&(o=!0,d.value=e[4].authors[e[29]].user_id,at(()=>o=!1)),c.$set(d),e[27].role!=="creator"?$?($.p(e,y),y[0]&16&&_($,1)):($=Se(e),$.c(),_($,1),$.m(t,s)):$&&(Yt(),I($,1,1,()=>{$=null}),Gt())},i:function(g){r||(_(l),_(c.$$.fragment,g),_($),r=!0)},o:function(g){I(l),I(c.$$.fragment,g),I($),r=!1},d:function(g){g&&u(t),l&&l.d(),j(c),$&&$.d()}};return P("SvelteRegisterBlock",{block:p,id:Ee.name,type:"each",source:"(182:8) {#each $data.authors as author, i}",ctx:e}),p}function Bn(e){let t;const n={c:function(){t=L(e[1])},l:function(o){t=H(o,e[1])},m:function(o,i){N(o,t,i)},p:function(o,i){i[0]&2&&G(t,o[1])},d:function(o){o&&u(t)}};return P("SvelteRegisterBlock",{block:n,id:Bn.name,type:"slot",source:'(203:6) <Button variant=\\"outlined\\" type=\\"submit\\">',ctx:e}),n}function Ve(e){let t,n,c,o,i,s,r,l,x,h,$,p,v,g,y,d,Z,ft,D,b,k,O,J,z,Q,it,Ut,tt,ut,Et=e[7]("preview")+"",Ft,jt,Lt,Tt,a,et,$t,ee,ne,nt,ht,Ht=e[7]("logo")+"",Jt,ie,oe,ot,se,vt,re,dt,mt,ce,le,bt,ae,pt,wt,fe,yt,ue,Kt,Nt,xt,qt,$e,Ie;function Rn(w){e[15](w)}let Pe={label:e[7]("entry.name"),required:!0};e[4].name!==void 0&&(Pe.value=e[4].name),o=new At({props:Pe,$$inline:!0}),ct.push(()=>lt(o,"value",Rn)),r=new St({props:{for:"name",$$slots:{default:[fn,({messages:w})=>({30:w}),({messages:w})=>[w?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});function In(w){e[16](w)}let Ae={label:e[7]("mod.reference"),required:!0,disabled:e[2],$$slots:{helper:[$n]},$$scope:{ctx:e}};e[4].mod_reference!==void 0&&(Ae.value=e[4].mod_reference),h=new At({props:Ae,$$inline:!0}),ct.push(()=>lt(h,"value",In)),v=new St({props:{for:"mod_reference",$$slots:{default:[dn,({messages:w})=>({30:w}),({messages:w})=>[w?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});function Pn(w){e[17](w)}let De={label:e[7]("entry.short-description"),required:!0};e[4].short_description!==void 0&&(De.value=e[4].short_description),d=new At({props:De,$$inline:!0}),ct.push(()=>lt(d,"value",Pn)),D=new St({props:{for:"short_description",$$slots:{default:[mn,({messages:w})=>({30:w}),({messages:w})=>[w?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});function An(w){e[18](w)}let Fe={textarea:!0,class:"vertical-textarea",label:e[7]("entry.full-description"),required:!0,input$rows:10};e[4].full_description!==void 0&&(Fe.value=e[4].full_description),J=new At({props:Fe,$$inline:!0}),ct.push(()=>lt(J,"value",An)),it=new St({props:{for:"full_description",$$slots:{default:[pn,({messages:w})=>({30:w}),({messages:w})=>[w?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});let X={ctx:e,current:null,token:null,hasCatch:!1,pending:vn,then:hn,catch:gn,value:31};Le(Tt=be(e[6]),X);function Dn(w){e[19](w)}let Te={editable:!0};e[3]!==void 0&&(Te.tags=e[3]),$t=new nn({props:Te,$$inline:!0}),ct.push(()=>lt($t,"tags",Dn)),vt=new St({props:{for:"logo",$$slots:{default:[bn,({messages:w})=>({30:w}),({messages:w})=>[w?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});function Fn(w){e[20](w)}let Ne={label:e[7]("entry.source-url")};e[4].source_url!==void 0&&(Ne.value=e[4].source_url),mt=new At({props:Ne,$$inline:!0}),ct.push(()=>lt(mt,"value",Fn)),bt=new St({props:{for:"source_url",$$slots:{default:[wn,({messages:w})=>({30:w}),({messages:w})=>[w?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0}),wt=new Me({props:{$$slots:{label:[xn],default:[yn]},$$scope:{ctx:e}},$$inline:!0}),yt=new St({props:{for:"hidden",$$slots:{default:[kn,({messages:w})=>({30:w}),({messages:w})=>[w?1073741824:0]]},$$scope:{ctx:e}},$$inline:!0});let Y=e[2]&&xe(e);xt=new te({props:{variant:"outlined",type:"submit",$$slots:{default:[Bn]},$$scope:{ctx:e}},$$inline:!0});const qe={c:function(){t=V("form"),n=V("div"),c=V("div"),q(o.$$.fragment),s=F(),q(r.$$.fragment),l=F(),x=V("div"),q(h.$$.fragment),p=F(),q(v.$$.fragment),g=F(),y=V("div"),q(d.$$.fragment),ft=F(),q(D.$$.fragment),b=F(),k=V("div"),O=V("div"),q(J.$$.fragment),Q=F(),q(it.$$.fragment),Ut=F(),tt=V("div"),ut=V("span"),Ft=L(Et),jt=L(":"),Lt=F(),X.block.c(),a=F(),et=V("div"),q($t.$$.fragment),ne=F(),nt=V("div"),ht=V("label"),Jt=L(Ht),ie=L(":"),oe=F(),ot=V("input"),se=F(),q(vt.$$.fragment),re=F(),dt=V("div"),q(mt.$$.fragment),le=F(),q(bt.$$.fragment),ae=F(),pt=V("div"),q(wt.$$.fragment),fe=F(),q(yt.$$.fragment),ue=F(),Y&&Y.c(),Kt=F(),Nt=V("div"),q(xt.$$.fragment),this.h()},l:function(E){t=M(E,"FORM",{});var m=R(t);n=M(m,"DIV",{class:!0});var W=R(n);c=M(W,"DIV",{class:!0});var Vt=R(c);C(o.$$.fragment,Vt),s=T(Vt),C(r.$$.fragment,Vt),Vt.forEach(u),l=T(W),x=M(W,"DIV",{class:!0});var st=R(x);C(h.$$.fragment,st),p=T(st),C(v.$$.fragment,st),st.forEach(u),g=T(W),y=M(W,"DIV",{class:!0});var Mt=R(y);C(d.$$.fragment,Mt),ft=T(Mt),C(D.$$.fragment,Mt),Mt.forEach(u),b=T(W),k=M(W,"DIV",{class:!0});var kt=R(k);O=M(kt,"DIV",{class:!0});var Bt=R(O);C(J.$$.fragment,Bt),Q=T(Bt),C(it.$$.fragment,Bt),Bt.forEach(u),Ut=T(kt),tt=M(kt,"DIV",{class:!0});var _t=R(tt);ut=M(_t,"SPAN",{});var Ct=R(ut);Ft=H(Ct,Et),jt=H(Ct,":"),Ct.forEach(u),Lt=T(_t),X.block.l(_t),_t.forEach(u),kt.forEach(u),a=T(W),et=M(W,"DIV",{class:!0});var Ot=R(et);C($t.$$.fragment,Ot),Ot.forEach(u),ne=T(W),nt=M(W,"DIV",{class:!0});var gt=R(nt);ht=M(gt,"LABEL",{for:!0});var Rt=R(ht);Jt=H(Rt,Ht),ie=H(Rt,":"),Rt.forEach(u),oe=T(gt),ot=M(gt,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),se=T(gt),C(vt.$$.fragment,gt),gt.forEach(u),re=T(W),dt=M(W,"DIV",{class:!0});var It=R(dt);C(mt.$$.fragment,It),le=T(It),C(bt.$$.fragment,It),It.forEach(u),ae=T(W),pt=M(W,"DIV",{class:!0});var Pt=R(pt);C(wt.$$.fragment,Pt),fe=T(Pt),C(yt.$$.fragment,Pt),Pt.forEach(u),ue=T(W),Y&&Y.l(W),Kt=T(W),Nt=M(W,"DIV",{});var zt=R(Nt);C(xt.$$.fragment,zt),zt.forEach(u),W.forEach(u),m.forEach(u),this.h()},h:function(){S(c,"class","grid grid-flow-row gap-2"),B(c,A,76,4,2466),S(x,"class","grid grid-flow-row gap-2"),B(x,A,83,4,2750),S(y,"class","grid grid-flow-row gap-2"),B(y,A,96,4,3253),S(O,"class","grid grid-flow-row gap-2 auto-rows-max"),B(O,A,104,6,3613),B(ut,A,117,8,4130),S(tt,"class","grid grid-flow-row gap-2 auto-rows-max"),B(tt,A,116,6,4069),S(k,"class","grid gap-6 split s-YtrVF1HCE9t3"),B(k,A,103,4,3576),S(et,"class","grid grid-flow-row gap-2"),B(et,A,124,4,4338),S(ht,"for","logo"),B(ht,A,129,6,4482),S(ot,"id","logo"),S(ot,"class","base-input"),S(ot,"name","logo"),S(ot,"type","file"),S(ot,"accept","image/png,image/jpeg,image/gif"),S(ot,"placeholder","Logo"),B(ot,A,130,6,4528),S(nt,"class","grid grid-flow-row gap-2"),B(nt,A,128,4,4437),S(dt,"class","grid grid-flow-row gap-2"),B(dt,A,142,4,4865),S(pt,"class","grid grid-flow-row gap-2"),B(pt,A,149,4,5158),B(Nt,A,201,4,6927),S(n,"class","grid grid-flow-row gap-6"),B(n,A,75,2,2423),B(t,A,74,0,2405)},m:function(E,m){N(E,t,m),f(t,n),f(n,c),U(o,c,null),f(c,s),U(r,c,null),f(n,l),f(n,x),U(h,x,null),f(x,p),U(v,x,null),f(n,g),f(n,y),U(d,y,null),f(y,ft),U(D,y,null),f(n,b),f(n,k),f(k,O),U(J,O,null),f(O,Q),U(it,O,null),f(k,Ut),f(k,tt),f(tt,ut),f(ut,Ft),f(ut,jt),f(tt,Lt),X.block.m(tt,X.anchor=null),X.mount=()=>tt,X.anchor=null,f(n,a),f(n,et),U($t,et,null),f(n,ne),f(n,nt),f(nt,ht),f(ht,Jt),f(ht,ie),f(nt,oe),f(nt,ot),f(nt,se),U(vt,nt,null),f(n,re),f(n,dt),U(mt,dt,null),f(dt,le),U(bt,dt,null),f(n,ae),f(n,pt),U(wt,pt,null),f(pt,fe),U(yt,pt,null),f(n,ue),Y&&Y.m(n,null),f(n,Kt),f(n,Nt),U(xt,Nt,null),qt=!0,$e||(Ie=Nn(e[8].call(null,t)),$e=!0)},p:function(E,m){e=E;const W={};m[0]&128&&(W.label=e[7]("entry.name")),!i&&m[0]&16&&(i=!0,W.value=e[4].name,at(()=>i=!1)),o.$set(W);const Vt={};m[0]&1073741824|m[1]&2&&(Vt.$$scope={dirty:m,ctx:e}),r.$set(Vt);const st={};m[0]&128&&(st.label=e[7]("mod.reference")),m[0]&4&&(st.disabled=e[2]),m[0]&132|m[1]&2&&(st.$$scope={dirty:m,ctx:e}),!$&&m[0]&16&&($=!0,st.value=e[4].mod_reference,at(()=>$=!1)),h.$set(st);const Mt={};m[0]&1073741824|m[1]&2&&(Mt.$$scope={dirty:m,ctx:e}),v.$set(Mt);const kt={};m[0]&128&&(kt.label=e[7]("entry.short-description")),!Z&&m[0]&16&&(Z=!0,kt.value=e[4].short_description,at(()=>Z=!1)),d.$set(kt);const Bt={};m[0]&1073741824|m[1]&2&&(Bt.$$scope={dirty:m,ctx:e}),D.$set(Bt);const _t={};m[0]&128&&(_t.label=e[7]("entry.full-description")),!z&&m[0]&16&&(z=!0,_t.value=e[4].full_description,at(()=>z=!1)),J.$set(_t);const Ct={};m[0]&1073741824|m[1]&2&&(Ct.$$scope={dirty:m,ctx:e}),it.$set(Ct),(!qt||m[0]&128)&&Et!==(Et=e[7]("preview")+"")&&G(Ft,Et),X.ctx=e,m[0]&64&&Tt!==(Tt=be(e[6]))&&Le(Tt,X)||qn(X,e,m);const Ot={};!ee&&m[0]&8&&(ee=!0,Ot.tags=e[3],at(()=>ee=!1)),$t.$set(Ot),(!qt||m[0]&128)&&Ht!==(Ht=e[7]("logo")+"")&&G(Jt,Ht);const gt={};m[0]&1073741824|m[1]&2&&(gt.$$scope={dirty:m,ctx:e}),vt.$set(gt);const Rt={};m[0]&128&&(Rt.label=e[7]("entry.source-url")),!ce&&m[0]&16&&(ce=!0,Rt.value=e[4].source_url,at(()=>ce=!1)),mt.$set(Rt);const It={};m[0]&1073741824|m[1]&2&&(It.$$scope={dirty:m,ctx:e}),bt.$set(It);const Pt={};m[0]&144|m[1]&2&&(Pt.$$scope={dirty:m,ctx:e}),wt.$set(Pt);const zt={};m[0]&1073741824|m[1]&2&&(zt.$$scope={dirty:m,ctx:e}),yt.$set(zt),e[2]?Y?(Y.p(e,m),m[0]&4&&_(Y,1)):(Y=xe(e),Y.c(),_(Y,1),Y.m(n,Kt)):Y&&(Yt(),I(Y,1,1,()=>{Y=null}),Gt());const Ce={};m[0]&2|m[1]&2&&(Ce.$$scope={dirty:m,ctx:e}),xt.$set(Ce)},i:function(E){qt||(_(o.$$.fragment,E),_(r.$$.fragment,E),_(h.$$.fragment,E),_(v.$$.fragment,E),_(d.$$.fragment,E),_(D.$$.fragment,E),_(J.$$.fragment,E),_(it.$$.fragment,E),_($t.$$.fragment,E),_(vt.$$.fragment,E),_(mt.$$.fragment,E),_(bt.$$.fragment,E),_(wt.$$.fragment,E),_(yt.$$.fragment,E),_(Y),_(xt.$$.fragment,E),qt=!0)},o:function(E){I(o.$$.fragment,E),I(r.$$.fragment,E),I(h.$$.fragment,E),I(v.$$.fragment,E),I(d.$$.fragment,E),I(D.$$.fragment,E),I(J.$$.fragment,E),I(it.$$.fragment,E),I($t.$$.fragment,E),I(vt.$$.fragment,E),I(mt.$$.fragment,E),I(bt.$$.fragment,E),I(wt.$$.fragment,E),I(yt.$$.fragment,E),I(Y),I(xt.$$.fragment,E),qt=!1},d:function(E){E&&u(t),j(o),j(r),j(h),j(v),j(d),j(D),j(J),j(it),X.block.d(),X.token=null,X=null,j($t),j(vt),j(mt),j(bt),j(wt),j(yt),Y&&Y.d(),j(xt),$e=!1,Ie()}};return P("SvelteRegisterBlock",{block:qe,id:Ve.name,type:"component",source:"",ctx:e}),qe}function On(e,t,n){let c,o,i,s=K,r=()=>(s(),s=ve(h,a=>n(7,i=a)),h);e.$$.on_destroy.push(()=>s());let{$$slots:l={},$$scope:x}=t;tn("ModForm",l,[]);const{t:h}=Xt();ge(h,"t"),r();let{onSubmit:$}=t,{initialValues:p={full_description:"",mod_reference:"",name:"",short_description:"",source_url:"",hidden:!1,tagIDs:[],compatibility:{EA:{state:me.Works,note:""},EXP:{state:me.Works,note:""}}}}=t,{submitText:v=i("entry.create")}=t,{editing:g=!1}=t,y=[];const{form:d,data:Z}=ze({initialValues:p,extend:[We({schema:pe}),Ze],onSubmit:a=>$(Ye(a,pe))});ge(Z,"data"),Tn(e,Z,a=>n(4,o=a));const ft=()=>{o.authors.push({role:"editor",user_id:"",key:""}),Z.set(o)},D=a=>{o.authors.splice(a,1),Z.set(o)};let b=!1;const k=o.compatibility;e.$$.on_mount.push(function(){$===void 0&&!("onSubmit"in t||e.$$.bound[e.$$.props.onSubmit])&&console.warn("<ModForm> was created without expected prop 'onSubmit'")});const O=["onSubmit","initialValues","submitText","editing"];Object.keys(t).forEach(a=>{!~O.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<ModForm> was created with unknown prop '${a}'`)});function J(a){e.$$.not_equal(o.name,a)&&(o.name=a,Z.set(o))}function z(a){e.$$.not_equal(o.mod_reference,a)&&(o.mod_reference=a,Z.set(o))}function Q(a){e.$$.not_equal(o.short_description,a)&&(o.short_description=a,Z.set(o))}function it(a){e.$$.not_equal(o.full_description,a)&&(o.full_description=a,Z.set(o))}function Ut(a){y=a,n(3,y),n(4,o)}function tt(a){e.$$.not_equal(o.source_url,a)&&(o.source_url=a,Z.set(o))}function ut(a){e.$$.not_equal(o.hidden,a)&&(o.hidden=a,Z.set(o))}function Et(a){b=a,n(5,b)}const Ft=()=>{de(Z,o.compatibility=b?k:void 0,o)};function jt(a){e.$$.not_equal(o.compatibility,a)&&(o.compatibility=a,Z.set(o))}function Lt(a,et){e.$$.not_equal(o.authors[et].user_id,a)&&(o.authors[et].user_id=a,Z.set(o))}const Tt=a=>D(a);return e.$$set=a=>{"onSubmit"in a&&n(13,$=a.onSubmit),"initialValues"in a&&n(14,p=a.initialValues),"submitText"in a&&n(1,v=a.submitText),"editing"in a&&n(2,g=a.editing)},e.$capture_state=()=>({createForm:ze,validator:We,reporter:Ze,ValidationMessage:St,modSchema:pe,trimNonSchema:Ye,markdown:be,Textfield:At,HelperText:en,Button:te,Label:Be,ModAuthor:an,FormField:Me,Switch:Re,TagList:nn,CompatibilityState:me,ModCompatibility:on,getTranslate:Xt,t:h,onSubmit:$,initialValues:p,submitText:v,editing:g,tags:y,form:d,data:Z,addAuthor:ft,removeAuthor:D,editCompatibility:b,originalCompatibility:k,preview:c,$data:o,$t:i}),e.$inject_state=a=>{"onSubmit"in a&&n(13,$=a.onSubmit),"initialValues"in a&&n(14,p=a.initialValues),"submitText"in a&&n(1,v=a.submitText),"editing"in a&&n(2,g=a.editing),"tags"in a&&n(3,y=a.tags),"editCompatibility"in a&&n(5,b=a.editCompatibility),"preview"in a&&n(6,c=a.preview)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{if(e.$$.dirty[0]&24){const a=o;a.tags&&(n(3,y=a.tags),delete a.tags),de(Z,o.tagIDs=y.map(et=>et.id),o)}e.$$.dirty[0]&16&&de(Z,o.compatibility=o.compatibility?o.compatibility:void 0,o),e.$$.dirty[0]&20&&(g||delete o.compatibility),e.$$.dirty[0]&16&&n(6,c=o.full_description||"")},[h,v,g,y,o,b,c,i,d,Z,ft,D,k,$,p,J,z,Q,it,Ut,tt,ut,Et,Ft,jt,Lt,Tt]}class Xn extends Ke{constructor(t){super(t),Xe(this,t,On,Ve,Qe,{t:0,onSubmit:13,initialValues:14,submitText:1,editing:2},null,[-1,-1]),P("SvelteRegisterComponent",{component:this,tagName:"ModForm",options:t,id:Ve.name})}get t(){return this.$$.ctx[0]}set t(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(t){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Xn as M};
//# sourceMappingURL=ModForm.8f09cdac.js.map
