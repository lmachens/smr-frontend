import{S as L,i as z,s as F,d as b,v as G,k as E,l as y,L as d,q as $,x as I,y as j,z as R,a8 as M,b0 as v,B as T,aa as O,ab as _,a7 as V,ac as lt,bi as H,p as k,m as rt,t as x,n as ft,a2 as C,a0 as D,a3 as S,a1 as W,a4 as B,a6 as P,bj as pt,bp as mt,bq as ut,aG as $t,aN as dt,aM as bt,aO as yt,r as jt,a9 as Rt,al as at,ad as Xt}from"./vendor.3b08e99d.js";import{T as w}from"./graphql.769656ab.js";import{m as q}from"./markdown.623802d0.js";const Tt="src/lib/components/mods/compatibility/OutdatedBanner.svelte";function ht(o){let t;const a={c:function(){t=I("div"),this.h()},l:function(s){t=j(s,"DIV",{class:!0}),R(t).forEach($),this.h()},h:function(){M(t,"class","mod-outdated-stripe"),v(t,"mod-damaged",o[1]===w.Damaged),v(t,"mod-broken",o[1]===w.Broken),v(t,"mod-logo-outdated",o[0]),T(t,Tt,26,2,733)},m:function(s,n){y(s,t,n)},p:function(s,n){n&2&&v(t,"mod-damaged",s[1]===w.Damaged),n&2&&v(t,"mod-broken",s[1]===w.Broken),n&1&&v(t,"mod-logo-outdated",s[0])},d:function(s){s&&$(t)}};return b("SvelteRegisterBlock",{block:a,id:ht.name,type:"if",source:"(26:0) {#if !works}",ctx:o}),a}function K(o){let t,a=!o[2]&&ht(o);const i={c:function(){a&&a.c(),t=E()},l:function(n){a&&a.l(n),t=E()},m:function(n,e){a&&a.m(n,e),y(n,t,e)},p:function(n,[e]){n[2]||a.p(n,e)},i:d,o:d,d:function(n){a&&a.d(n),n&&$(t)}};return b("SvelteRegisterBlock",{block:i,id:K.name,type:"component",source:"",ctx:o}),i}function Ot(o,t,a){let{$$slots:i={},$$scope:s}=t;G("OutdatedBanner",i,[]);let{compatibility:n}=t,{logo:e=!1}=t;function c(r){const u=r.EA.state;return u==w.Broken?u:u==w.Works||r.EXP.state!=w.Works?r.EXP.state:u}let l=w.Works;n&&(l=c(n));const m=l===w.Works;o.$$.on_mount.push(function(){n===void 0&&!("compatibility"in t||o.$$.bound[o.$$.props.compatibility])&&console.warn("<OutdatedBanner> was created without expected prop 'compatibility'")});const p=["compatibility","logo"];return Object.keys(t).forEach(r=>{!~p.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<OutdatedBanner> was created with unknown prop '${r}'`)}),o.$$set=r=>{"compatibility"in r&&a(3,n=r.compatibility),"logo"in r&&a(0,e=r.logo)},o.$capture_state=()=>({CompatibilityState:w,compatibility:n,logo:e,Worst:c,worst:l,works:m}),o.$inject_state=r=>{"compatibility"in r&&a(3,n=r.compatibility),"logo"in r&&a(0,e=r.logo),"worst"in r&&a(1,l=r.worst)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[e,l,m,n]}class Ft extends L{constructor(t){super(t),z(this,t,Ot,K,F,{compatibility:3,logo:0}),b("SvelteRegisterComponent",{component:this,tagName:"OutdatedBanner",options:t,id:K.name})}get compatibility(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const _t="src/lib/components/mods/compatibility/CompatibilityStateText.svelte";function Q(o){let t,a,i;const s={c:function(){t=I("p"),a=O(o[0]),this.h()},l:function(e){t=j(e,"P",{class:!0});var c=R(t);a=_(c,o[0]),c.forEach($),this.h()},h:function(){M(t,"class",i=o[1](o[0])+" mod-state"),T(t,_t,4,0,119)},m:function(e,c){y(e,t,c),V(t,a)},p:function(e,[c]){c&1&&lt(a,e[0]),c&1&&i!==(i=e[1](e[0])+" mod-state")&&M(t,"class",i)},i:d,o:d,d:function(e){e&&$(t)}};return b("SvelteRegisterBlock",{block:s,id:Q.name,type:"component",source:"",ctx:o}),s}function Nt(o,t,a){let{$$slots:i={},$$scope:s}=t;G("CompatibilityStateText",i,[]);let{state:n}=t;const e=l=>`mod-state-${l.toString().toLowerCase()}`;o.$$.on_mount.push(function(){n===void 0&&!("state"in t||o.$$.bound[o.$$.props.state])&&console.warn("<CompatibilityStateText> was created without expected prop 'state'")});const c=["state"];return Object.keys(t).forEach(l=>{!~c.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<CompatibilityStateText> was created with unknown prop '${l}'`)}),o.$$set=l=>{"state"in l&&a(0,n=l.state)},o.$capture_state=()=>({state:n,classForState:e}),o.$inject_state=l=>{"state"in l&&a(0,n=l.state)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[n,e]}class U extends L{constructor(t){super(t),z(this,t,Nt,Q,F,{state:0}),b("SvelteRegisterComponent",{component:this,tagName:"CompatibilityStateText",options:t,id:Q.name})}get state(){throw new Error("<CompatibilityStateText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set state(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const J="src/lib/components/mods/compatibility/CompatibilityInfo.svelte";function Y(o){let t,a,i,s,n,e,c,l,m,p,r;i=new U({props:{state:o[0].EA.state},$$inline:!0});let u=o[0].EA.note&&Z(o);l=new U({props:{state:o[0].EXP.state},$$inline:!0});let h=o[0].EXP.note&&tt(o);const N={c:function(){t=I("div"),a=O("Early Access: "),C(i.$$.fragment),s=D(),u&&u.c(),n=D(),e=I("div"),c=O("Experimental: "),C(l.$$.fragment),m=D(),h&&h.c(),p=E(),this.h()},l:function(f){t=j(f,"DIV",{});var g=R(t);a=_(g,"Early Access: "),S(i.$$.fragment,g),g.forEach($),s=W(f),u&&u.l(f),n=W(f),e=j(f,"DIV",{});var A=R(e);c=_(A,"Experimental: "),S(l.$$.fragment,A),A.forEach($),m=W(f),h&&h.l(f),p=E(),this.h()},h:function(){T(t,J,6,2,232),T(e,J,14,2,483)},m:function(f,g){y(f,t,g),V(t,a),B(i,t,null),y(f,s,g),u&&u.m(f,g),y(f,n,g),y(f,e,g),V(e,c),B(l,e,null),y(f,m,g),h&&h.m(f,g),y(f,p,g),r=!0},p:function(f,g){const A={};g&1&&(A.state=f[0].EA.state),i.$set(A),f[0].EA.note?u?u.p(f,g):(u=Z(f),u.c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null);const st={};g&1&&(st.state=f[0].EXP.state),l.$set(st),f[0].EXP.note?h?h.p(f,g):(h=tt(f),h.c(),h.m(p.parentNode,p)):h&&(h.d(1),h=null)},i:function(f){r||(k(i.$$.fragment,f),k(l.$$.fragment,f),r=!0)},o:function(f){x(i.$$.fragment,f),x(l.$$.fragment,f),r=!1},d:function(f){f&&$(t),P(i),f&&$(s),u&&u.d(f),f&&$(n),f&&$(e),P(l),f&&$(m),h&&h.d(f),f&&$(p)}};return b("SvelteRegisterBlock",{block:N,id:Y.name,type:"if",source:"(6:0) {#if compatibility}",ctx:o}),N}function Z(o){let t,a,i,s={ctx:o,current:null,token:null,hasCatch:!1,pending:kt,then:wt,catch:gt,value:1};H(i=q(o[0].EA.note),s);const n={c:function(){t=I("div"),a=O("Note: "),s.block.c(),this.h()},l:function(c){t=j(c,"DIV",{});var l=R(t);a=_(l,"Note: "),s.block.l(l),l.forEach($),this.h()},h:function(){T(t,J,8,4,349)},m:function(c,l){y(c,t,l),V(t,a),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p:function(c,l){o=c,s.ctx=o,l&1&&i!==(i=q(o[0].EA.note))&&H(i,s)||pt(s,o,l)},d:function(c){c&&$(t),s.block.d(),s.token=null,s=null}};return b("SvelteRegisterBlock",{block:n,id:Z.name,type:"if",source:"(8:2) {#if compatibility.EA.note}",ctx:o}),n}function gt(o){const t={c:d,l:d,m:d,p:d,d};return b("SvelteRegisterBlock",{block:t,id:gt.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:o}),t}function wt(o){let t,a=o[1]+"",i;const s={c:function(){t=new mt(!1),i=E(),this.h()},l:function(e){t=ut(e,!1),i=E(),this.h()},h:function(){t.a=i},m:function(e,c){t.m(a,e,c),y(e,i,c)},p:function(e,c){c&1&&a!==(a=e[1]+"")&&t.p(a)},d:function(e){e&&$(i),e&&t.d()}};return b("SvelteRegisterBlock",{block:s,id:wt.name,type:"then",source:"(10:66)          {@html rendered}",ctx:o}),s}function kt(o){const t={c:d,l:d,m:d,p:d,d};return b("SvelteRegisterBlock",{block:t,id:kt.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:o}),t}function tt(o){let t,a,i,s={ctx:o,current:null,token:null,hasCatch:!1,pending:Et,then:vt,catch:xt,value:1};H(i=q(o[0].EXP.note),s);const n={c:function(){t=I("div"),a=O("Note: "),s.block.c(),this.h()},l:function(c){t=j(c,"DIV",{});var l=R(t);a=_(l,"Note: "),s.block.l(l),l.forEach($),this.h()},h:function(){T(t,J,16,4,602)},m:function(c,l){y(c,t,l),V(t,a),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p:function(c,l){o=c,s.ctx=o,l&1&&i!==(i=q(o[0].EXP.note))&&H(i,s)||pt(s,o,l)},d:function(c){c&&$(t),s.block.d(),s.token=null,s=null}};return b("SvelteRegisterBlock",{block:n,id:tt.name,type:"if",source:"(16:2) {#if compatibility.EXP.note}",ctx:o}),n}function xt(o){const t={c:d,l:d,m:d,p:d,d};return b("SvelteRegisterBlock",{block:t,id:xt.name,type:"catch",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:o}),t}function vt(o){let t,a=o[1]+"",i;const s={c:function(){t=new mt(!1),i=E(),this.h()},l:function(e){t=ut(e,!1),i=E(),this.h()},h:function(){t.a=i},m:function(e,c){t.m(a,e,c),y(e,i,c)},p:function(e,c){c&1&&a!==(a=e[1]+"")&&t.p(a)},d:function(e){e&&$(i),e&&t.d()}};return b("SvelteRegisterBlock",{block:s,id:vt.name,type:"then",source:"(18:67)          {@html rendered}",ctx:o}),s}function Et(o){const t={c:d,l:d,m:d,p:d,d};return b("SvelteRegisterBlock",{block:t,id:Et.name,type:"pending",source:`(1:0) <script lang=\\"ts\\">import CompatibilityStateText from '$lib/components/mods/compatibility/CompatibilityStateText.svelte'; import { markdown }`,ctx:o}),t}function et(o){let t,a,i=o[0]&&Y(o);const s={c:function(){i&&i.c(),t=E()},l:function(e){i&&i.l(e),t=E()},m:function(e,c){i&&i.m(e,c),y(e,t,c),a=!0},p:function(e,[c]){e[0]?i?(i.p(e,c),c&1&&k(i,1)):(i=Y(e),i.c(),k(i,1),i.m(t.parentNode,t)):i&&(rt(),x(i,1,1,()=>{i=null}),ft())},i:function(e){a||(k(i),a=!0)},o:function(e){x(i),a=!1},d:function(e){i&&i.d(e),e&&$(t)}};return b("SvelteRegisterBlock",{block:s,id:et.name,type:"component",source:"",ctx:o}),s}function At(o,t,a){let{$$slots:i={},$$scope:s}=t;G("CompatibilityInfo",i,[]);let{compatibility:n}=t;o.$$.on_mount.push(function(){n===void 0&&!("compatibility"in t||o.$$.bound[o.$$.props.compatibility])&&console.warn("<CompatibilityInfo> was created without expected prop 'compatibility'")});const e=["compatibility"];return Object.keys(t).forEach(c=>{!~e.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<CompatibilityInfo> was created with unknown prop '${c}'`)}),o.$$set=c=>{"compatibility"in c&&a(0,n=c.compatibility)},o.$capture_state=()=>({CompatibilityStateText:U,markdown:q,compatibility:n}),o.$inject_state=c=>{"compatibility"in c&&a(0,n=c.compatibility)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[n]}class Ct extends L{constructor(t){super(t),z(this,t,At,et,F,{compatibility:0}),b("SvelteRegisterComponent",{component:this,tagName:"CompatibilityInfo",options:t,id:et.name})}get compatibility(){throw new Error("<CompatibilityInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Dt="src/lib/components/mods/compatibility/CompatibilityIcon.svelte";function ot(o){let t,a;const i={c:function(){t=I("p"),a=O(o[1]),this.h()},l:function(n){t=j(n,"P",{class:!0});var e=R(t);a=_(e,o[1]),e.forEach($),this.h()},h:function(){M(t,"class","material-icons text-base"),v(t,"mod-state-works",o[0].state===w.Works),v(t,"mod-state-damaged",o[0].state===w.Damaged),v(t,"mod-state-broken",o[0].state===w.Broken),T(t,Dt,9,0,203)},m:function(n,e){y(n,t,e),V(t,a)},p:function(n,[e]){e&2&&lt(a,n[1]),e&1&&v(t,"mod-state-works",n[0].state===w.Works),e&1&&v(t,"mod-state-damaged",n[0].state===w.Damaged),e&1&&v(t,"mod-state-broken",n[0].state===w.Broken)},i:d,o:d,d:function(n){n&&$(t)}};return b("SvelteRegisterBlock",{block:i,id:ot.name,type:"component",source:"",ctx:o}),i}function Wt(o,t,a){let{$$slots:i={},$$scope:s}=t;G("CompatibilityIcon",i,[]);let{compatibility:n}=t,{EXP:e=!1}=t,c="rocket_launch";e&&(c="science"),o.$$.on_mount.push(function(){n===void 0&&!("compatibility"in t||o.$$.bound[o.$$.props.compatibility])&&console.warn("<CompatibilityIcon> was created without expected prop 'compatibility'")});const l=["compatibility","EXP"];return Object.keys(t).forEach(m=>{!~l.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<CompatibilityIcon> was created with unknown prop '${m}'`)}),o.$$set=m=>{"compatibility"in m&&a(0,n=m.compatibility),"EXP"in m&&a(2,e=m.EXP)},o.$capture_state=()=>({CompatibilityState:w,compatibility:n,EXP:e,iconText:c}),o.$inject_state=m=>{"compatibility"in m&&a(0,n=m.compatibility),"EXP"in m&&a(2,e=m.EXP),"iconText"in m&&a(1,c=m.iconText)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[n,c,e]}class it extends L{constructor(t){super(t),z(this,t,Wt,ot,F,{compatibility:0,EXP:2}),b("SvelteRegisterComponent",{component:this,tagName:"CompatibilityIcon",options:t,id:ot.name})}get compatibility(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get EXP(){throw new Error("<CompatibilityIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set EXP(t){throw new Error("<CompatibilityIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function nt(o){let t,a,i,s,n,e;t=new yt({props:{class:"min-w-0 m-0",title:"Compatibility information",$$slots:{default:[St]},$$scope:{ctx:o}},$$inline:!0}),t.$on("click",o[2]);function c(p){o[3](p)}let l={$$slots:{default:[It]},$$scope:{ctx:o}};o[1]!==void 0&&(l.open=o[1]),s=new $t({props:l,$$inline:!0}),jt.push(()=>Rt(s,"open",c));const m={c:function(){a=I("div"),C(t.$$.fragment),i=D(),C(s.$$.fragment),this.h()},l:function(r){a=j(r,"DIV",{style:!0});var u=R(a);S(t.$$.fragment,u),i=W(r),S(s.$$.fragment,r),this.h()},h:function(){at(a,"display","contents"),at(a,"--mdc-text-button-container-height","20px")},m:function(r,u){y(r,a,u),B(t,a,null),y(r,i,u),B(s,r,u),e=!0},p:function(r,u){const h={};u&17&&(h.$$scope={dirty:u,ctx:r}),t.$set(h);const N={};u&17&&(N.$$scope={dirty:u,ctx:r}),!n&&u&2&&(n=!0,N.open=r[1],Xt(()=>n=!1)),s.$set(N)},i:function(r){e||(k(t.$$.fragment,r),k(s.$$.fragment,r),e=!0)},o:function(r){x(t.$$.fragment,r),x(s.$$.fragment,r),e=!1},d:function(r){r&&t&&$(a),P(t,r),r&&$(i),P(s,r)}};return b("SvelteRegisterBlock",{block:m,id:nt.name,type:"if",source:"(9:0) {#if compatibility}",ctx:o}),m}function St(o){let t,a,i,s;t=new it({props:{compatibility:o[0].EA},$$inline:!0}),i=new it({props:{compatibility:o[0].EXP,EXP:!0},$$inline:!0});const n={c:function(){C(t.$$.fragment),a=D(),C(i.$$.fragment)},l:function(c){S(t.$$.fragment,c),a=W(c),S(i.$$.fragment,c)},m:function(c,l){B(t,c,l),y(c,a,l),B(i,c,l),s=!0},p:function(c,l){const m={};l&1&&(m.compatibility=c[0].EA),t.$set(m);const p={};l&1&&(p.compatibility=c[0].EXP),i.$set(p)},i:function(c){s||(k(t.$$.fragment,c),k(i.$$.fragment,c),s=!0)},o:function(c){x(t.$$.fragment,c),x(i.$$.fragment,c),s=!1},d:function(c){P(t,c),c&&$(a),P(i,c)}};return b("SvelteRegisterBlock",{block:n,id:St.name,type:"slot",source:'(10:2) <Button     --mdc-text-button-container-height=\\"20px\\"     class=\\"min-w-0 m-0\\"     title=\\"Compatibility information\\"     on:click={() => {       open = true;     }}>',ctx:o}),n}function Bt(o){let t;const a={c:function(){t=O("Compatibility Information")},l:function(s){t=_(s,"Compatibility Information")},m:function(s,n){y(s,t,n)},d:function(s){s&&$(t)}};return b("SvelteRegisterBlock",{block:a,id:Bt.name,type:"slot",source:"(22:4) <Title>",ctx:o}),a}function Pt(o){let t,a;t=new Ct({props:{compatibility:o[0]},$$inline:!0});const i={c:function(){C(t.$$.fragment)},l:function(n){S(t.$$.fragment,n)},m:function(n,e){B(t,n,e),a=!0},p:function(n,e){const c={};e&1&&(c.compatibility=n[0]),t.$set(c)},i:function(n){a||(k(t.$$.fragment,n),a=!0)},o:function(n){x(t.$$.fragment,n),a=!1},d:function(n){P(t,n)}};return b("SvelteRegisterBlock",{block:i,id:Pt.name,type:"slot",source:"(23:4) <Content>",ctx:o}),i}function It(o){let t,a,i,s;t=new bt({props:{$$slots:{default:[Bt]},$$scope:{ctx:o}},$$inline:!0}),i=new dt({props:{$$slots:{default:[Pt]},$$scope:{ctx:o}},$$inline:!0});const n={c:function(){C(t.$$.fragment),a=D(),C(i.$$.fragment)},l:function(c){S(t.$$.fragment,c),a=W(c),S(i.$$.fragment,c)},m:function(c,l){B(t,c,l),y(c,a,l),B(i,c,l),s=!0},p:function(c,l){const m={};l&16&&(m.$$scope={dirty:l,ctx:c}),t.$set(m);const p={};l&17&&(p.$$scope={dirty:l,ctx:c}),i.$set(p)},i:function(c){s||(k(t.$$.fragment,c),k(i.$$.fragment,c),s=!0)},o:function(c){x(t.$$.fragment,c),x(i.$$.fragment,c),s=!1},d:function(c){P(t,c),c&&$(a),P(i,c)}};return b("SvelteRegisterBlock",{block:n,id:It.name,type:"slot",source:"(21:2) <Dialog bind:open>",ctx:o}),n}function ct(o){let t,a,i=o[0]&&nt(o);const s={c:function(){i&&i.c(),t=E()},l:function(e){i&&i.l(e),t=E()},m:function(e,c){i&&i.m(e,c),y(e,t,c),a=!0},p:function(e,[c]){e[0]?i?(i.p(e,c),c&1&&k(i,1)):(i=nt(e),i.c(),k(i,1),i.m(t.parentNode,t)):i&&(rt(),x(i,1,1,()=>{i=null}),ft())},i:function(e){a||(k(i),a=!0)},o:function(e){x(i),a=!1},d:function(e){i&&i.d(e),e&&$(t)}};return b("SvelteRegisterBlock",{block:s,id:ct.name,type:"component",source:"",ctx:o}),s}function Vt(o,t,a){let{$$slots:i={},$$scope:s}=t;G("CompatibilityButton",i,[]);let n=!1,{compatibility:e}=t;o.$$.on_mount.push(function(){e===void 0&&!("compatibility"in t||o.$$.bound[o.$$.props.compatibility])&&console.warn("<CompatibilityButton> was created without expected prop 'compatibility'")});const c=["compatibility"];Object.keys(t).forEach(p=>{!~c.indexOf(p)&&p.slice(0,2)!=="$$"&&p!=="slot"&&console.warn(`<CompatibilityButton> was created with unknown prop '${p}'`)});const l=()=>{a(1,n=!0)};function m(p){n=p,a(1,n)}return o.$$set=p=>{"compatibility"in p&&a(0,e=p.compatibility)},o.$capture_state=()=>({Dialog:$t,Content:dt,Title:bt,CompatibilityInfo:Ct,Button:yt,CompatibilityIcon:it,open:n,compatibility:e}),o.$inject_state=p=>{"open"in p&&a(1,n=p.open),"compatibility"in p&&a(0,e=p.compatibility)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[e,n,l,m]}class Gt extends L{constructor(t){super(t),z(this,t,Vt,ct,F,{compatibility:0}),b("SvelteRegisterComponent",{component:this,tagName:"CompatibilityButton",options:t,id:ct.name})}get compatibility(){throw new Error("<CompatibilityButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Gt as C,Ft as O};
//# sourceMappingURL=CompatibilityButton.7a34b0bb.js.map
