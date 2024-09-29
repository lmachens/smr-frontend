import{S as we,i as Ee,s as ye,d as O,v as be,aC as q,e as L,X as Q,b as W,g as S,h as C,R as Ce,Y as X,j as $,k as Y,N as E,m as j,aD as le,ak as pe,l as Ie,n as P,U as V,ad as xe,V as Re,Z,aE as Ae,u as J,a0 as He,aF as Oe,aa as ue,H as fe,F as ge,G as de,I as Ve,a as me,aG as ke,aH as De,p as re,t as I,q as ce,r as B,x as _e,y as U,a3 as z,O as he,P as K,Q as ee,T as te,a5 as M,W as ne,f as ve,_ as Fe}from"./vendor.D5QsONp8.js";import{a as $e}from"./graphql.CNu7qPRc.js";const F="src/lib/components/utils/TagDisplay.svelte";function se(s){let e,t,n,a="#",l=s[0].name+"",i,p,g,u,o,f,c,v=s[0].description+"",y,b,R,x;const k={c:function(){e=L("button"),t=L("div"),n=L("span"),n.textContent=a,i=Q(l),o=W(),f=L("div"),c=L("p"),y=Q(v),this.h()},l:function(h){e=S(h,"BUTTON",{class:!0});var m=C(e);t=S(m,"DIV",{class:!0,title:!0});var T=C(t);n=S(T,"SPAN",{class:!0,"data-svelte-h":!0}),Ce(n)!=="svelte-sdcp3o"&&(n.textContent=a),i=X(T,l),T.forEach($),m.forEach($),o=Y(h),f=S(h,"DIV",{class:!0,"data-popup":!0,style:!0});var d=C(f);c=S(d,"P",{class:!0});var w=C(c);y=X(w,v),w.forEach($),d.forEach($),this.h()},h:function(){E(n,"class","text-orange-500 svelte-1c06ml2"),j(n,F,23,4,650),E(t,"class","lowercase text-neutral-300 [&>*]:pointer-events-none svelte-1c06ml2"),E(t,"title",p=s[3]==="click"?"Click for tag information":""),j(t,F,20,2,498),E(e,"class",g=le(s[1]?"chip hover:variant-filled-surface [&:not(:hover)]:variant-soft":"")+" svelte-1c06ml2"),pe(e,"selected",s[2]),j(e,F,15,0,343),E(c,"class","svelte-1c06ml2"),j(c,F,31,2,1084),E(f,"class","card variant-filled-surface p-4 svelte-1c06ml2"),E(f,"data-popup",b=`popupHoverFor${s[0].id}`),Ie(f,"z-index","1000"),j(f,F,30,0,976)},m:function(h,m){P(h,e,m),V(e,t),V(t,n),V(t,i),P(h,o,m),P(h,f,m),V(f,c),V(c,y),R||(x=[xe(u=q.call(null,e,s[4])),Re(e,"click",s[5],!1,!1,!1,!1)],R=!0)},p:function(h,[m]){m&1&&l!==(l=h[0].name+"")&&Z(i,l),m&8&&p!==(p=h[3]==="click"?"Click for tag information":"")&&E(t,"title",p),m&2&&g!==(g=le(h[1]?"chip hover:variant-filled-surface [&:not(:hover)]:variant-soft":"")+" svelte-1c06ml2")&&E(e,"class",g),u&&Ae(u.update)&&m&16&&u.update.call(null,h[4]),m&6&&pe(e,"selected",h[2]),m&1&&v!==(v=h[0].description+"")&&Z(y,v),m&1&&b!==(b=`popupHoverFor${h[0].id}`)&&E(f,"data-popup",b)},i:J,o:J,d:function(h){h&&($(e),$(o),$(f)),R=!1,He(x)}};return O("SvelteRegisterBlock",{block:k,id:se.name,type:"component",source:"",ctx:s}),k}function Ne(s,e,t){let n,{$$slots:a={},$$scope:l}=e;be("TagDisplay",a,[]);let{tag:i}=e,{asButton:p=!1}=e,{selected:g=!1}=e,{popupTriggerEvent:u="click"}=e;s.$$.on_mount.push(function(){i===void 0&&!("tag"in e||s.$$.bound[s.$$.props.tag])&&console.warn("<TagDisplay> was created without expected prop 'tag'")});const o=["tag","asButton","selected","popupTriggerEvent"];Object.keys(e).forEach(c=>{!~o.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<TagDisplay> was created with unknown prop '${c}'`)});function f(c){Oe.call(this,s,c)}return s.$$set=c=>{"tag"in c&&t(0,i=c.tag),"asButton"in c&&t(1,p=c.asButton),"selected"in c&&t(2,g=c.selected),"popupTriggerEvent"in c&&t(3,u=c.popupTriggerEvent)},s.$capture_state=()=>({popup:q,tag:i,asButton:p,selected:g,popupTriggerEvent:u,popupHover:n}),s.$inject_state=c=>{"tag"in c&&t(0,i=c.tag),"asButton"in c&&t(1,p=c.asButton),"selected"in c&&t(2,g=c.selected),"popupTriggerEvent"in c&&t(3,u=c.popupTriggerEvent),"popupHover"in c&&t(4,n=c.popupHover)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&9&&t(4,n={event:u,target:`popupHoverFor${i.id}`,placement:"bottom-start"})},[i,p,g,u,n,f]}class Pe extends we{constructor(e){super(e),Ee(this,e,Ne,se,ye,{tag:0,asButton:1,selected:2,popupTriggerEvent:3}),O("SvelteRegisterComponent",{component:this,tagName:"TagDisplay",options:e,id:se.name})}get tag(){throw new Error("<TagDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tag(e){throw new Error("<TagDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get asButton(){throw new Error("<TagDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set asButton(e){throw new Error("<TagDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get selected(){throw new Error("<TagDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set selected(e){throw new Error("<TagDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get popupTriggerEvent(){throw new Error("<TagDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set popupTriggerEvent(e){throw new Error("<TagDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const N="src/lib/components/utils/TagList.svelte";function Te(s,e,t){const n=s.slice();return n[21]=e[t],n}function Be(s){let e,t=s[7]("mod.tags.title")+"",n,a,l,i,p,g,u,o,f,c,v,y,b;function R(T){s[13](T)}function x(T){s[14](T)}let k={name:"tags",chips:"variant-filled-primary"};s[5]!==void 0&&(k.input=s[5]),s[4]!==void 0&&(k.value=s[4]),i=new De({props:k,$$inline:!0}),U.push(()=>z(i,"input",R)),U.push(()=>z(i,"value",x)),i.$on("remove",s[15]);function D(T){s[17](T)}let h={options:s[6].filter(s[16])};s[5]!==void 0&&(h.input=s[5]),f=new ke({props:h,$$inline:!0}),U.push(()=>z(f,"input",D)),f.$on("selection",s[18]);const m={c:function(){e=L("div"),n=Q(t),a=W(),l=L("div"),K(i.$$.fragment),u=W(),o=L("div"),K(f.$$.fragment),this.h()},l:function(d){e=S(d,"DIV",{class:!0});var w=C(e);n=X(w,t),w.forEach($),a=Y(d),l=S(d,"DIV",{});var A=C(l);ee(i.$$.fragment,A),A.forEach($),u=Y(d),o=S(d,"DIV",{class:!0,tabindex:!0,"data-popup":!0});var H=C(o);ee(f.$$.fragment,H),H.forEach($),this.h()},h:function(){E(e,"class","mb-2"),j(e,N,77,4,1779),j(l,N,79,4,1831),E(o,"class","card max-h-48 w-max max-w-full overflow-y-auto p-4"),E(o,"tabindex","-1"),E(o,"data-popup","popupAutocomplete"),j(o,N,88,4,2078)},m:function(d,w){P(d,e,w),V(e,n),P(d,a,w),P(d,l,w),te(i,l,null),P(d,u,w),P(d,o,w),te(f,o,null),v=!0,y||(b=xe(q.call(null,l,s[9])),y=!0)},p:function(d,w){(!v||w&128)&&t!==(t=d[7]("mod.tags.title")+"")&&Z(n,t);const A={};!p&&w&32&&(p=!0,A.input=d[5],M(()=>p=!1)),!g&&w&16&&(g=!0,A.value=d[4],M(()=>g=!1)),i.$set(A);const H={};w&80&&(H.options=d[6].filter(d[16])),!c&&w&32&&(c=!0,H.input=d[5],M(()=>c=!1)),f.$set(H)},i:function(d){v||(B(i.$$.fragment,d),B(f.$$.fragment,d),v=!0)},o:function(d){I(i.$$.fragment,d),I(f.$$.fragment,d),v=!1},d:function(d){d&&($(e),$(a),$(l),$(u),$(o)),ne(i),ne(f),y=!1,b()}};return O("SvelteRegisterBlock",{block:m,id:Be.name,type:"else",source:"(62:2) {:else}",ctx:s}),m}function Le(s){let e,t,n=s[0].length>0&&oe(s);const a={c:function(){n&&n.c(),e=ve()},l:function(i){n&&n.l(i),e=ve()},m:function(i,p){n&&n.m(i,p),P(i,e,p),t=!0},p:function(i,p){i[0].length>0?n?(n.p(i,p),p&1&&B(n,1)):(n=oe(i),n.c(),B(n,1),n.m(e.parentNode,e)):n&&(re(),I(n,1,1,()=>{n=null}),ce())},i:function(i){t||(B(n),t=!0)},o:function(i){I(n),t=!1},d:function(i){i&&$(e),n&&n.d(i)}};return O("SvelteRegisterBlock",{block:a,id:Le.name,type:"if",source:"(54:2) {#if !editable}",ctx:s}),a}function oe(s){let e,t,n=he(s[0]),a=[];for(let p=0;p<n.length;p+=1)a[p]=ie(Te(s,n,p));const l=p=>I(a[p],1,1,()=>{a[p]=null}),i={c:function(){e=L("div");for(let g=0;g<a.length;g+=1)a[g].c();this.h()},l:function(g){e=S(g,"DIV",{class:!0});var u=C(e);for(let o=0;o<a.length;o+=1)a[o].l(u);u.forEach($),this.h()},h:function(){E(e,"class","text-md flex flex-row flex-wrap gap-1"),j(e,N,70,6,1595)},m:function(g,u){P(g,e,u);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(e,null);t=!0},p:function(g,u){if(u&9){n=he(g[0]);let o;for(o=0;o<n.length;o+=1){const f=Te(g,n,o);a[o]?(a[o].p(f,u),B(a[o],1)):(a[o]=ie(f),a[o].c(),B(a[o],1),a[o].m(e,null))}for(re(),o=n.length;o<a.length;o+=1)l(o);ce()}},i:function(g){if(!t){for(let u=0;u<n.length;u+=1)B(a[u]);t=!0}},o:function(g){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)I(a[u]);t=!1},d:function(g){g&&$(e),Fe(a,g)}};return O("SvelteRegisterBlock",{block:i,id:oe.name,type:"if",source:"(55:4) {#if tags.length > 0}",ctx:s}),i}function ie(s){let e,t;e=new Pe({props:{tag:s[21],popupTriggerEvent:s[3]},$$inline:!0});const n={c:function(){K(e.$$.fragment)},l:function(l){ee(e.$$.fragment,l)},m:function(l,i){te(e,l,i),t=!0},p:function(l,i){const p={};i&1&&(p.tag=l[21]),i&8&&(p.popupTriggerEvent=l[3]),e.$set(p)},i:function(l){t||(B(e.$$.fragment,l),t=!0)},o:function(l){I(e.$$.fragment,l),t=!1},d:function(l){ne(e,l)}};return O("SvelteRegisterBlock",{block:n,id:ie.name,type:"each",source:"(57:8) {#each tags as tag}",ctx:s}),n}function ae(s){let e,t,n,a;const l=[Le,Be],i=[];function p(u,o){return u[2]?1:0}t=p(s),n=i[t]=l[t](s);const g={c:function(){e=L("div"),n.c(),this.h()},l:function(o){e=S(o,"DIV",{class:!0});var f=C(e);n.l(f),f.forEach($),this.h()},h:function(){E(e,"class","tags"),j(e,N,67,0,1526)},m:function(o,f){P(o,e,f),i[t].m(e,null),a=!0},p:function(o,[f]){let c=t;t=p(o),t===c?i[t].p(o,f):(re(),I(i[c],1,1,()=>{i[c]=null}),ce(),n=i[t],n?n.p(o,f):(n=i[t]=l[t](o),n.c()),B(n,1),n.m(e,null))},i:function(o){a||(B(n),a=!0)},o:function(o){I(n),a=!1},d:function(o){o&&$(e),i[t].d()}};return O("SvelteRegisterBlock",{block:g,id:ae.name,type:"component",source:"",ctx:s}),g}function qe(s,e,t){let n,a,l,i=J,p=()=>(i(),i=_e(o,r=>t(7,l=r)),o);s.$$.on_destroy.push(()=>i());let{$$slots:g={},$$scope:u}=e;be("TagList",g,[]);const{t:o}=ue();fe(o,"t"),p();const f=ge(),c=de({query:$e,client:f,variables:{limit:100}});fe(c,"getAllTags"),Ve(s,c,r=>t(12,a=r));let{tags:v=[]}=e,{editable:y=!1}=e,{popupTriggerEvent:b="click"}=e;const R={event:"focus-click",target:"popupAutocomplete",placement:"bottom-start"};let x=[];const k=()=>t(4,x=v.map(r=>r.name));me(k);const D=r=>{const _=a.data?.getTags?.find(G=>G.id==r.value);t(0,v=[...v,{id:r.value,name:_?.name,description:_?.description}]),k()},h=r=>{const _=v.findIndex(G=>G.name===r);t(0,v=[...v.slice(0,_),...v.slice(_+1)]),k()};let m="";const T=["tags","editable","popupTriggerEvent"];Object.keys(e).forEach(r=>{!~T.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<TagList> was created with unknown prop '${r}'`)});function d(r){m=r,t(5,m)}function w(r){x=r,t(4,x)}const A=r=>h(r.detail.chipValue),H=r=>x.indexOf(r.name)<0;function Se(r){m=r,t(5,m)}const je=r=>D(r.detail);return s.$$set=r=>{"tags"in r&&t(0,v=r.tags),"editable"in r&&t(2,y=r.editable),"popupTriggerEvent"in r&&t(3,b=r.popupTriggerEvent)},s.$capture_state=()=>({GetTagsDocument:$e,queryStore:de,getContextClient:ge,Autocomplete:ke,InputChip:De,popup:q,onMount:me,TagDisplay:Pe,getTranslate:ue,t:o,client:f,getAllTags:c,tags:v,editable:y,popupTriggerEvent:b,popupSettings:R,tagList:x,loadTagList:k,addTag:D,removeTag:h,inputTag:m,allTags:n,$getAllTags:a,$t:l}),s.$inject_state=r=>{"tags"in r&&t(0,v=r.tags),"editable"in r&&t(2,y=r.editable),"popupTriggerEvent"in r&&t(3,b=r.popupTriggerEvent),"tagList"in r&&t(4,x=r.tagList),"inputTag"in r&&t(5,m=r.inputTag),"allTags"in r&&t(6,n=r.allTags)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&4096&&t(6,n=a.data?.getTags?.map(r=>({label:`${r.name} - ${r.description}`,value:r.id,name:r.name}))||[])},[v,o,y,b,x,m,n,l,c,R,D,h,a,d,w,A,H,Se,je]}class ze extends we{constructor(e){super(e),Ee(this,e,qe,ae,ye,{t:1,tags:0,editable:2,popupTriggerEvent:3}),O("SvelteRegisterComponent",{component:this,tagName:"TagList",options:e,id:ae.name})}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get tags(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tags(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editable(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editable(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get popupTriggerEvent(){throw new Error("<TagList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set popupTriggerEvent(e){throw new Error("<TagList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ze as T,Pe as a};
//# sourceMappingURL=TagList.CZNGmsqp.js.map
