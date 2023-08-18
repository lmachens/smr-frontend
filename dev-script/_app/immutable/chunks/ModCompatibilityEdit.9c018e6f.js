import{S as J,i as Q,s as U,d as m,r as O,T as I,v as V,aK as A,Y as Z,ao as gt,a8 as y,a6 as P,x as yt,ab as h,a9 as j,y as ht,C as xt,ae as x,l as d,ai as T,p,t as g,aj as v,q as b,P as K,aw as tt,a$ as D,k as F,m as vt,n as wt,b0 as kt,L as C,N as S,O as _,bt as et,bv as L,bu as q,bw as Y}from"./vendor.b99d6c4c.js";import{T as R}from"./graphql.cb6ec208.js";import{S as nt,T as ot,b as it,O as ct}from"./forms.e4b6192d.js";const{Object:Et}=gt,Ct="src/lib/components/mods/compatibility/CompatibilityEdit.svelte";function G(l,t,s){const i=l.slice();return i[5]=t[s],i}function st(l){let t=l[5]+"",s;const i={c:function(){s=C(t)},l:function(c){s=S(c,t)},m:function(c,r){d(c,s,r)},p:K,d:function(c){c&&b(s)}};return m("SvelteRegisterBlock",{block:i,id:st.name,type:"slot",source:"(14:4) <Option value={state}>",ctx:l}),i}function H(l){let t,s;t=new ct({props:{value:l[5],$$slots:{default:[st]},$$scope:{ctx:l}},$$inline:!0});const i={c:function(){y(t.$$.fragment)},l:function(c){h(t.$$.fragment,c)},m:function(c,r){x(t,c,r),s=!0},p:function(c,r){const n={};r&256&&(n.$$scope={dirty:r,ctx:c}),t.$set(n)},i:function(c){s||(p(t.$$.fragment,c),s=!0)},o:function(c){g(t.$$.fragment,c),s=!1},d:function(c){v(t,c)}};return m("SvelteRegisterBlock",{block:i,id:H.name,type:"each",source:"(13:2) {#each Object.values(CompatibilityState) as state}",ctx:l}),i}function lt(l){let t,s,i=Object.values(R);D(i);let o=[];for(let n=0;n<i.length;n+=1)o[n]=H(G(l,i,n));const c=n=>g(o[n],1,1,()=>{o[n]=null}),r={c:function(){for(let e=0;e<o.length;e+=1)o[e].c();t=F()},l:function(e){for(let a=0;a<o.length;a+=1)o[a].l(e);t=F()},m:function(e,a){for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,a);d(e,t,a),s=!0},p:function(e,a){if(a&0){i=Object.values(R),D(i);let f;for(f=0;f<i.length;f+=1){const E=G(e,i,f);o[f]?(o[f].p(E,a),p(o[f],1)):(o[f]=H(E),o[f].c(),p(o[f],1),o[f].m(t.parentNode,t))}for(vt(),f=i.length;f<o.length;f+=1)c(f);wt()}},i:function(e){if(!s){for(let a=0;a<i.length;a+=1)p(o[a]);s=!0}},o:function(e){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)g(o[a]);s=!1},d:function(e){kt(o,e),e&&b(t)}};return m("SvelteRegisterBlock",{block:r,id:lt.name,type:"slot",source:'(12:0) <Select style=\\"margin-bottom: 10px\\" bind:value={compatibility.state} label=\\"Compatibility State\\">',ctx:l}),r}function rt(l){let t=l[2]("compatibility-info.notes")+"",s;const i={c:function(){s=C(t)},l:function(c){s=S(c,t)},m:function(c,r){d(c,s,r)},p:function(c,r){r&4&&t!==(t=c[2]("compatibility-info.notes")+"")&&_(s,t)},d:function(c){c&&b(s)}};return m("SvelteRegisterBlock",{block:i,id:rt.name,type:"slot",source:'(19:2) <HelperText slot=\\"helper\\">',ctx:l}),i}function at(l){let t,s;t=new it({props:{slot:"helper",$$slots:{default:[rt]},$$scope:{ctx:l}},$$inline:!0});const i={c:function(){y(t.$$.fragment)},l:function(c){h(t.$$.fragment,c)},m:function(c,r){x(t,c,r),s=!0},p:function(c,r){const n={};r&260&&(n.$$scope={dirty:r,ctx:c}),t.$set(n)},i:function(c){s||(p(t.$$.fragment,c),s=!0)},o:function(c){g(t.$$.fragment,c),s=!1},d:function(c){v(t,c)}};return m("SvelteRegisterBlock",{block:i,id:at.name,type:"slot",source:"(19:2) ",ctx:l}),i}function N(l){let t,s,i,o,c,r,n,e;function a(k){l[3](k)}let f={style:"margin-bottom: 10px",label:"Compatibility State",$$slots:{default:[lt]},$$scope:{ctx:l}};l[0].state!==void 0&&(f.value=l[0].state),t=new nt({props:f,$$inline:!0}),O.push(()=>I(t,"value",a));function E(k){l[4](k)}let B={textarea:!0,label:"Note",$$slots:{helper:[at]},$$scope:{ctx:l}};l[0].note!==void 0&&(B.value=l[0].note),r=new ot({props:B,$$inline:!0}),O.push(()=>I(r,"value",E));const $={c:function(){y(t.$$.fragment),i=P(),o=yt("br"),c=P(),y(r.$$.fragment),this.h()},l:function(u){h(t.$$.fragment,u),i=j(u),o=ht(u,"BR",{}),c=j(u),h(r.$$.fragment,u),this.h()},h:function(){xt(o,Ct,16,0,590)},m:function(u,w){x(t,u,w),d(u,i,w),d(u,o,w),d(u,c,w),x(r,u,w),e=!0},p:function(u,[w]){const M={};w&256&&(M.$$scope={dirty:w,ctx:u}),!s&&w&1&&(s=!0,M.value=u[0].state,T(()=>s=!1)),t.$set(M);const X={};w&260&&(X.$$scope={dirty:w,ctx:u}),!n&&w&1&&(n=!0,X.value=u[0].note,T(()=>n=!1)),r.$set(X)},i:function(u){e||(p(t.$$.fragment,u),p(r.$$.fragment,u),e=!0)},o:function(u){g(t.$$.fragment,u),g(r.$$.fragment,u),e=!1},d:function(u){v(t,u),u&&b(i),u&&b(o),u&&b(c),v(r,u)}};return m("SvelteRegisterBlock",{block:$,id:N.name,type:"component",source:"",ctx:l}),$}function St(l,t,s){let i,o=K,c=()=>(o(),o=tt(a,$=>s(2,i=$)),a);l.$$.on_destroy.push(()=>o());let{$$slots:r={},$$scope:n}=t;V("CompatibilityEdit",r,[]);let{compatibility:e={state:R.Works}}=t;const{t:a}=A();Z(a,"t"),c();const f=["compatibility"];Et.keys(t).forEach($=>{!~f.indexOf($)&&$.slice(0,2)!=="$$"&&$!=="slot"&&console.warn(`<CompatibilityEdit> was created with unknown prop '${$}'`)});function E($){l.$$.not_equal(e.state,$)&&(e.state=$,s(0,e))}function B($){l.$$.not_equal(e.note,$)&&(e.note=$,s(0,e))}return l.$$set=$=>{"compatibility"in $&&s(0,e=$.compatibility)},l.$capture_state=()=>({Textfield:ot,HelperText:it,Select:nt,Option:ct,CompatibilityState:R,getTranslate:A,compatibility:e,t:a,$t:i}),l.$inject_state=$=>{"compatibility"in $&&s(0,e=$.compatibility)},t&&"$$inject"in t&&l.$inject_state(t.$$inject),[e,a,i,E,B]}class z extends J{constructor(t){super(t),Q(this,t,St,N,U,{compatibility:0,t:1}),m("SvelteRegisterComponent",{component:this,tagName:"CompatibilityEdit",options:t,id:N.name})}get compatibility(){throw new Error("<CompatibilityEdit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function ft(l){let t=l[2]("early-access")+"",s,i,o=l[2]("compatibility")+"",c;const r={c:function(){s=C(t),i=C(" - "),c=C(o)},l:function(e){s=S(e,t),i=S(e," - "),c=S(e,o)},m:function(e,a){d(e,s,a),d(e,i,a),d(e,c,a)},p:function(e,a){a&4&&t!==(t=e[2]("early-access")+"")&&_(s,t),a&4&&o!==(o=e[2]("compatibility")+"")&&_(c,o)},d:function(e){e&&b(s),e&&b(i),e&&b(c)}};return m("SvelteRegisterBlock",{block:r,id:ft.name,type:"slot",source:"(23:4) <Header>",ctx:l}),r}function $t(l){let t,s,i;function o(n){l[3](n)}let c={};l[0].EA!==void 0&&(c.compatibility=l[0].EA),t=new z({props:c,$$inline:!0}),O.push(()=>I(t,"compatibility",o));const r={c:function(){y(t.$$.fragment)},l:function(e){h(t.$$.fragment,e)},m:function(e,a){x(t,e,a),i=!0},p:function(e,a){const f={};!s&&a&1&&(s=!0,f.compatibility=e[0].EA,T(()=>s=!1)),t.$set(f)},i:function(e){i||(p(t.$$.fragment,e),i=!0)},o:function(e){g(t.$$.fragment,e),i=!1},d:function(e){v(t,e)}};return m("SvelteRegisterBlock",{block:r,id:$t.name,type:"slot",source:"(24:4) <Content>",ctx:l}),r}function ut(l){let t,s,i,o;t=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:l}},$$inline:!0}),i=new Y({props:{$$slots:{default:[$t]},$$scope:{ctx:l}},$$inline:!0});const c={c:function(){y(t.$$.fragment),s=P(),y(i.$$.fragment)},l:function(n){h(t.$$.fragment,n),s=j(n),h(i.$$.fragment,n)},m:function(n,e){x(t,n,e),d(n,s,e),x(i,n,e),o=!0},p:function(n,e){const a={};e&36&&(a.$$scope={dirty:e,ctx:n}),t.$set(a);const f={};e&33&&(f.$$scope={dirty:e,ctx:n}),i.$set(f)},i:function(n){o||(p(t.$$.fragment,n),p(i.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),g(i.$$.fragment,n),o=!1},d:function(n){v(t,n),n&&b(s),v(i,n)}};return m("SvelteRegisterBlock",{block:c,id:ut.name,type:"slot",source:"(22:2) <Panel>",ctx:l}),c}function pt(l){let t=l[2]("experimental")+"",s,i,o=l[2]("compatibility")+"",c;const r={c:function(){s=C(t),i=C(" - "),c=C(o)},l:function(e){s=S(e,t),i=S(e," - "),c=S(e,o)},m:function(e,a){d(e,s,a),d(e,i,a),d(e,c,a)},p:function(e,a){a&4&&t!==(t=e[2]("experimental")+"")&&_(s,t),a&4&&o!==(o=e[2]("compatibility")+"")&&_(c,o)},d:function(e){e&&b(s),e&&b(i),e&&b(c)}};return m("SvelteRegisterBlock",{block:r,id:pt.name,type:"slot",source:"(29:4) <Header>",ctx:l}),r}function mt(l){let t,s,i;function o(n){l[4](n)}let c={};l[0].EXP!==void 0&&(c.compatibility=l[0].EXP),t=new z({props:c,$$inline:!0}),O.push(()=>I(t,"compatibility",o));const r={c:function(){y(t.$$.fragment)},l:function(e){h(t.$$.fragment,e)},m:function(e,a){x(t,e,a),i=!0},p:function(e,a){const f={};!s&&a&1&&(s=!0,f.compatibility=e[0].EXP,T(()=>s=!1)),t.$set(f)},i:function(e){i||(p(t.$$.fragment,e),i=!0)},o:function(e){g(t.$$.fragment,e),i=!1},d:function(e){v(t,e)}};return m("SvelteRegisterBlock",{block:r,id:mt.name,type:"slot",source:"(30:4) <Content>",ctx:l}),r}function dt(l){let t,s,i,o;t=new L({props:{$$slots:{default:[pt]},$$scope:{ctx:l}},$$inline:!0}),i=new Y({props:{$$slots:{default:[mt]},$$scope:{ctx:l}},$$inline:!0});const c={c:function(){y(t.$$.fragment),s=P(),y(i.$$.fragment)},l:function(n){h(t.$$.fragment,n),s=j(n),h(i.$$.fragment,n)},m:function(n,e){x(t,n,e),d(n,s,e),x(i,n,e),o=!0},p:function(n,e){const a={};e&36&&(a.$$scope={dirty:e,ctx:n}),t.$set(a);const f={};e&33&&(f.$$scope={dirty:e,ctx:n}),i.$set(f)},i:function(n){o||(p(t.$$.fragment,n),p(i.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),g(i.$$.fragment,n),o=!1},d:function(n){v(t,n),n&&b(s),v(i,n)}};return m("SvelteRegisterBlock",{block:c,id:dt.name,type:"slot",source:"(28:2) <Panel>",ctx:l}),c}function bt(l){let t,s,i,o;t=new q({props:{$$slots:{default:[ut]},$$scope:{ctx:l}},$$inline:!0}),i=new q({props:{$$slots:{default:[dt]},$$scope:{ctx:l}},$$inline:!0});const c={c:function(){y(t.$$.fragment),s=P(),y(i.$$.fragment)},l:function(n){h(t.$$.fragment,n),s=j(n),h(i.$$.fragment,n)},m:function(n,e){x(t,n,e),d(n,s,e),x(i,n,e),o=!0},p:function(n,e){const a={};e&37&&(a.$$scope={dirty:e,ctx:n}),t.$set(a);const f={};e&37&&(f.$$scope={dirty:e,ctx:n}),i.$set(f)},i:function(n){o||(p(t.$$.fragment,n),p(i.$$.fragment,n),o=!0)},o:function(n){g(t.$$.fragment,n),g(i.$$.fragment,n),o=!1},d:function(n){v(t,n),n&&b(s),v(i,n)}};return m("SvelteRegisterBlock",{block:c,id:bt.name,type:"slot",source:"(21:0) <Accordion>",ctx:l}),c}function W(l){let t,s;t=new et({props:{$$slots:{default:[bt]},$$scope:{ctx:l}},$$inline:!0});const i={c:function(){y(t.$$.fragment)},l:function(c){h(t.$$.fragment,c)},m:function(c,r){x(t,c,r),s=!0},p:function(c,[r]){const n={};r&37&&(n.$$scope={dirty:r,ctx:c}),t.$set(n)},i:function(c){s||(p(t.$$.fragment,c),s=!0)},o:function(c){g(t.$$.fragment,c),s=!1},d:function(c){v(t,c)}};return m("SvelteRegisterBlock",{block:i,id:W.name,type:"component",source:"",ctx:l}),i}function Rt(l,t,s){let i,o=K,c=()=>(o(),o=tt(a,$=>s(2,i=$)),a);l.$$.on_destroy.push(()=>o());let{$$slots:r={},$$scope:n}=t;V("ModCompatibilityEdit",r,[]);let{compatibilityInfo:e=void 0}=t;e==null&&(e={EA:{state:R.Works,note:""},EXP:{state:R.Works,note:""}});const{t:a}=A();Z(a,"t"),c();const f=["compatibilityInfo"];Object.keys(t).forEach($=>{!~f.indexOf($)&&$.slice(0,2)!=="$$"&&$!=="slot"&&console.warn(`<ModCompatibilityEdit> was created with unknown prop '${$}'`)});function E($){l.$$.not_equal(e.EA,$)&&(e.EA=$,s(0,e))}function B($){l.$$.not_equal(e.EXP,$)&&(e.EXP=$,s(0,e))}return l.$$set=$=>{"compatibilityInfo"in $&&s(0,e=$.compatibilityInfo)},l.$capture_state=()=>({Accordion:et,Header:L,Panel:q,Content:Y,CompatibilityState:R,CompatibilityEdit:z,getTranslate:A,compatibilityInfo:e,t:a,$t:i}),l.$inject_state=$=>{"compatibilityInfo"in $&&s(0,e=$.compatibilityInfo)},t&&"$$inject"in t&&l.$inject_state(t.$$inject),[e,a,i,E,B]}class _t extends J{constructor(t){super(t),Q(this,t,Rt,W,U,{compatibilityInfo:0,t:1}),m("SvelteRegisterComponent",{component:this,tagName:"ModCompatibilityEdit",options:t,id:W.name})}get compatibilityInfo(){throw new Error("<ModCompatibilityEdit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibilityInfo(t){throw new Error("<ModCompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<ModCompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{_t as M};
//# sourceMappingURL=ModCompatibilityEdit.9c018e6f.js.map
