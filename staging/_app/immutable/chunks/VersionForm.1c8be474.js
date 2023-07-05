import{S as ft,i as ut,s as mt,d as M,r as xe,a9 as ke,bi as Ve,aO as Le,v as dt,ae as Re,af as Ee,ag as Be,aZ as le,x as v,a2 as Q,a0 as A,aa as P,y as w,z as V,a3 as Y,a1 as j,q as h,ab as N,a8 as D,B as y,l as R,a7 as p,a4 as Z,C as pt,ad as Pe,p as W,m as ht,t as J,n as gt,bj as $t,a6 as X,ac as U,k as Ne,a_ as _e,L as H}from"./vendor.2dadc702.js";import{o as bt,d as vt,e as wt,Z as Fe,s as Ae,S as Ce,V as ce,T as qe,c as je,v as Me,r as Te,O as se}from"./forms.032aefcd.js";import{J as yt}from"./jszip.3769576e.js";import{v as St}from"./uplugin.dc05efb2.js";import{t as Oe}from"./forms.30c79ce1.js";import{m as re}from"./markdown.623802d0.js";import{V as Ie}from"./graphql.769656ab.js";import{b as ae}from"./formatting.6f84ef8f.js";const xt=async(n,e,t)=>e.async("string").then(async o=>{const i=await St(o);if(i.length!=0)return{message:`invalid ${t}.uplugin`,extended:i};const l=JSON.parse(o);let c=!1;for(const s of l.Plugins)if(s.Name==="SML"){c=!0;break}return c?{uplugin:l,objects:Object.keys(n.files).filter(s=>s.endsWith(".so")||s.endsWith(".dll")||s.endsWith(".pak"))}:{message:"mod must depend on SML"}}).catch(o=>({message:`invalid ${t}.uplugin: ${o}`})),kt=async(n,e)=>new yt().loadAsync(n).then(o=>{const i=o.file("WindowsNoEditor/"+e+".uplugin");return i?xt(o,i,e):{message:"WindowsNoEditor/"+e+".uplugin missing from mod"}}).catch(o=>({message:"invalid zip/smod file: "+o})),De=(n,e)=>bt({file:vt(wt().superRefine(async(t,o)=>{if(!("name"in t&&"size"in t&&"type"in t)){o.addIssue({message:"Unknown file error",code:Fe.custom});return}const i=await kt(t,n);if("message"in i){o.addIssue({message:i.message,code:Fe.custom});return}e.set(i)})),changelog:Ae(),stability:Ae()});const S="src/lib/components/versions/VersionForm.svelte";function ze(n,e,t){const o=n.slice();return o[17]=e[t],o}function Ge(n,e,t){const o=n.slice();return o[20]=e[t],o}function We(n){let e;const t={c:function(){e=P("Alpha")},l:function(i){e=N(i,"Alpha")},m:function(i,l){R(i,e,l)},d:function(i){i&&h(e)}};return M("SvelteRegisterBlock",{block:t,id:We.name,type:"slot",source:'(40:8) <Option value=\\"alpha\\">',ctx:n}),t}function He(n){let e;const t={c:function(){e=P("Beta")},l:function(i){e=N(i,"Beta")},m:function(i,l){R(i,e,l)},d:function(i){i&&h(e)}};return M("SvelteRegisterBlock",{block:t,id:He.name,type:"slot",source:'(41:8) <Option value=\\"beta\\">',ctx:n}),t}function Ue(n){let e;const t={c:function(){e=P("Release")},l:function(i){e=N(i,"Release")},m:function(i,l){R(i,e,l)},d:function(i){i&&h(e)}};return M("SvelteRegisterBlock",{block:t,id:Ue.name,type:"slot",source:'(42:8) <Option value=\\"release\\">',ctx:n}),t}function Je(n){let e,t,o,i,l,c;e=new se({props:{value:"alpha",$$slots:{default:[We]},$$scope:{ctx:n}},$$inline:!0}),o=new se({props:{value:"beta",$$slots:{default:[He]},$$scope:{ctx:n}},$$inline:!0}),l=new se({props:{value:"release",$$slots:{default:[Ue]},$$scope:{ctx:n}},$$inline:!0});const s={c:function(){Q(e.$$.fragment),t=A(),Q(o.$$.fragment),i=A(),Q(l.$$.fragment)},l:function(r){Y(e.$$.fragment,r),t=j(r),Y(o.$$.fragment,r),i=j(r),Y(l.$$.fragment,r)},m:function(r,a){Z(e,r,a),R(r,t,a),Z(o,r,a),R(r,i,a),Z(l,r,a),c=!0},p:function(r,a){const d={};a&8388608&&(d.$$scope={dirty:a,ctx:r}),e.$set(d);const f={};a&8388608&&(f.$$scope={dirty:a,ctx:r}),o.$set(f);const u={};a&8388608&&(u.$$scope={dirty:a,ctx:r}),l.$set(u)},i:function(r){c||(W(e.$$.fragment,r),W(o.$$.fragment,r),W(l.$$.fragment,r),c=!0)},o:function(r){J(e.$$.fragment,r),J(o.$$.fragment,r),J(l.$$.fragment,r),c=!1},d:function(r){X(e,r),r&&h(t),X(o,r),r&&h(i),X(l,r)}};return M("SvelteRegisterBlock",{block:s,id:Je.name,type:"slot",source:'(39:6) <Select bind:value={$data.stability} label=\\"Stability\\">',ctx:n}),s}function Ke(n){let e,t=(n[16]||"")+"",o;const i={c:function(){e=v("span"),o=P(t),this.h()},l:function(c){e=w(c,"SPAN",{class:!0});var s=V(e);o=N(s,t),s.forEach(h),this.h()},h:function(){D(e,"class","validation-message"),y(e,S,44,8,1724)},m:function(c,s){R(c,e,s),p(e,o)},p:function(c,s){s&65536&&t!==(t=(c[16]||"")+"")&&U(o,t)},d:function(c){c&&h(e)}};return M("SvelteRegisterBlock",{block:i,id:Ke.name,type:"slot",source:'(44:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:n}),i}function fe(n){let e,t,o,i,l,c,s,m,r,a,d;s=new ce({props:{for:"file",$$slots:{default:[Qe,({messages:x})=>({16:x}),({messages:x})=>x?65536:0]},$$scope:{ctx:n}},$$inline:!0});let f=n[2].file&&ue(n),u=n[5]&&me(n);const k={c:function(){e=v("div"),t=v("label"),o=P("File:"),i=A(),l=v("input"),c=A(),Q(s.$$.fragment),m=A(),f&&f.c(),r=A(),u&&u.c(),a=Ne(),this.h()},l:function($){e=w($,"DIV",{class:!0});var b=V(e);t=w(b,"LABEL",{for:!0});var E=V(t);o=N(E,"File:"),E.forEach(h),i=j(b),l=w(b,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),c=j(b),Y(s.$$.fragment,b),b.forEach(h),m=j($),f&&f.l($),r=j($),u&&u.l($),a=Ne(),this.h()},h:function(){D(t,"for","file"),y(t,S,50,8,1891),D(l,"id","file"),D(l,"class","base-input"),D(l,"name","file"),D(l,"type","file"),D(l,"accept",".zip,.smod"),D(l,"placeholder","File"),y(l,S,51,8,1931),D(e,"class","grid grid-flow-row gap-2"),y(e,S,49,6,1844)},m:function($,b){R($,e,b),p(e,t),p(t,o),p(e,i),p(e,l),p(e,c),Z(s,e,null),R($,m,b),f&&f.m($,b),R($,r,b),u&&u.m($,b),R($,a,b),d=!0},p:function($,b){const E={};b&8454144&&(E.$$scope={dirty:b,ctx:$}),s.$set(E),$[2].file?f?f.p($,b):(f=ue($),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),$[5]?u?u.p($,b):(u=me($),u.c(),u.m(a.parentNode,a)):u&&(u.d(1),u=null)},i:function($){d||(W(s.$$.fragment,$),d=!0)},o:function($){J(s.$$.fragment,$),d=!1},d:function($){$&&h(e),X(s),$&&h(m),f&&f.d($),$&&h(r),u&&u.d($),$&&h(a)}};return M("SvelteRegisterBlock",{block:k,id:fe.name,type:"if",source:"(49:4) {#if !editing}",ctx:n}),k}function Qe(n){let e,t=(n[16]||"")+"",o;const i={c:function(){e=v("span"),o=P(t),this.h()},l:function(c){e=w(c,"SPAN",{class:!0});var s=V(e);o=N(s,t),s.forEach(h),this.h()},h:function(){D(e,"class","validation-message"),y(e,S,53,10,2105)},m:function(c,s){R(c,e,s),p(e,o)},p:function(c,s){s&65536&&t!==(t=(c[16]||"")+"")&&U(o,t)},d:function(c){c&&h(e)}};return M("SvelteRegisterBlock",{block:i,id:Qe.name,type:"slot",source:'(53:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),i}function ue(n){let e,t,o,i,l,c=(n[2].file.type||"Unknown")+"",s,m,r,a,d,f,u,k=ae(n[2].file.size)+"",x;const $={c:function(){e=v("div"),t=v("span"),o=v("strong"),i=P("File Type:"),l=A(),s=P(c),m=v("br"),r=A(),a=v("span"),d=v("strong"),f=P("File Size:"),u=A(),x=P(k),this.h()},l:function(E){e=w(E,"DIV",{});var B=V(e);t=w(B,"SPAN",{});var L=V(t);o=w(L,"STRONG",{});var g=V(o);i=N(g,"File Type:"),g.forEach(h),l=j(L),s=N(L,c),L.forEach(h),m=w(B,"BR",{}),r=j(B),a=w(B,"SPAN",{});var F=V(a);d=w(F,"STRONG",{});var T=V(d);f=N(T,"File Size:"),T.forEach(h),u=j(F),x=N(F,k),F.forEach(h),B.forEach(h),this.h()},h:function(){y(o,S,59,16,2257),y(t,S,59,10,2251),y(m,S,59,81,2322),y(d,S,60,16,2345),y(a,S,60,10,2339),y(e,S,58,8,2235)},m:function(E,B){R(E,e,B),p(e,t),p(t,o),p(o,i),p(t,l),p(t,s),p(e,m),p(e,r),p(e,a),p(a,d),p(d,f),p(a,u),p(a,x)},p:function(E,B){B&4&&c!==(c=(E[2].file.type||"Unknown")+"")&&U(s,c),B&4&&k!==(k=ae(E[2].file.size)+"")&&U(x,k)},d:function(E){E&&h(e)}};return M("SvelteRegisterBlock",{block:$,id:ue.name,type:"if",source:"(58:6) {#if $data.file}",ctx:n}),$}function me(n){let e,t,o,i,l,c,s=n[5].uplugin.Version+"",m,r,a,d,f;function u(g,F){return g[5].uplugin.SemVersion!==void 0?Ze:Ye}let k=u(n),x=k(n),$=n[5].uplugin.Plugins!==void 0&&de(n);function b(g,F){return g[5].objects&&g[5].objects.length>0?nt:tt}let E=b(n),B=E(n);const L={c:function(){e=v("div"),t=v("p"),o=v("span"),i=v("strong"),l=P("Version:"),c=A(),m=P(s),r=v("br"),a=A(),x.c(),d=A(),$&&$.c(),f=A(),B.c(),this.h()},l:function(F){e=w(F,"DIV",{});var T=V(e);t=w(T,"P",{class:!0});var _=V(t);o=w(_,"SPAN",{});var K=V(o);i=w(K,"STRONG",{});var ie=V(i);l=N(ie,"Version:"),ie.forEach(h),c=j(K),m=N(K,s),r=w(K,"BR",{}),K.forEach(h),a=j(_),x.l(_),_.forEach(h),d=j(T),$&&$.l(T),f=j(T),B.l(T),T.forEach(h),this.h()},h:function(){y(i,S,67,18,2519),y(r,S,67,70,2571),y(o,S,67,12,2513),D(t,"class","mb-4"),y(t,S,66,10,2484),y(e,S,65,8,2468)},m:function(F,T){R(F,e,T),p(e,t),p(t,o),p(o,i),p(i,l),p(o,c),p(o,m),p(o,r),p(t,a),x.m(t,null),p(e,d),$&&$.m(e,null),p(e,f),B.m(e,null)},p:function(F,T){T&32&&s!==(s=F[5].uplugin.Version+"")&&U(m,s),k===(k=u(F))&&x?x.p(F,T):(x.d(1),x=k(F),x&&(x.c(),x.m(t,null))),F[5].uplugin.Plugins!==void 0?$?$.p(F,T):($=de(F),$.c(),$.m(e,f)):$&&($.d(1),$=null),E===(E=b(F))&&B?B.p(F,T):(B.d(1),B=E(F),B&&(B.c(),B.m(e,null)))},d:function(F){F&&h(e),x.d(),$&&$.d(),B.d()}};return M("SvelteRegisterBlock",{block:L,id:me.name,type:"if",source:"(65:6) {#if $modMeta}",ctx:n}),L}function Ye(n){let e,t,o=n[5].uplugin.Version+"",i,l;const c={c:function(){e=v("span"),t=P("Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),i=P(o),l=P(".0.0"),this.h()},l:function(m){e=w(m,"SPAN",{class:!0});var r=V(e);t=N(r,"Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),i=N(r,o),l=N(r,".0.0"),r.forEach(h),this.h()},h:function(){D(e,"class","text-yellow-600"),y(e,S,72,14,2772)},m:function(m,r){R(m,e,r),p(e,t),p(e,i),p(e,l)},p:function(m,r){r&32&&o!==(o=m[5].uplugin.Version+"")&&U(i,o)},d:function(m){m&&h(e)}};return M("SvelteRegisterBlock",{block:c,id:Ye.name,type:"else",source:"(72:12) {:else}",ctx:n}),c}function Ze(n){let e,t,o,i,l=n[5].uplugin.SemVersion+"",c,s;const m={c:function(){e=v("span"),t=v("strong"),o=P("SemVersion:"),i=A(),c=P(l),s=v("br"),this.h()},l:function(a){e=w(a,"SPAN",{});var d=V(e);t=w(d,"STRONG",{});var f=V(t);o=N(f,"SemVersion:"),f.forEach(h),i=j(d),c=N(d,l),s=w(d,"BR",{}),d.forEach(h),this.h()},h:function(){y(t,S,70,20,2666),y(s,S,70,78,2724),y(e,S,70,14,2660)},m:function(a,d){R(a,e,d),p(e,t),p(t,o),p(e,i),p(e,c),p(e,s)},p:function(a,d){d&32&&l!==(l=a[5].uplugin.SemVersion+"")&&U(c,l)},d:function(a){a&&h(e)}};return M("SvelteRegisterBlock",{block:m,id:Ze.name,type:"if",source:"(70:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),m}function de(n){let e,t,o,i,l,c=n[5].uplugin.Plugins;le(c);let s=[];for(let r=0;r<c.length;r+=1)s[r]=pe(Ge(n,c,r));const m={c:function(){e=v("p"),t=v("strong"),o=P("Dependencies:"),i=v("br"),l=A();for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l:function(a){e=w(a,"P",{});var d=V(e);t=w(d,"STRONG",{});var f=V(t);o=N(f,"Dependencies:"),f.forEach(h),i=w(d,"BR",{}),l=j(d);for(let u=0;u<s.length;u+=1)s[u].l(d);d.forEach(h),this.h()},h:function(){y(t,S,81,14,3106),y(i,S,81,44,3136),y(e,S,80,12,3088)},m:function(a,d){R(a,e,d),p(e,t),p(t,o),p(e,i),p(e,l);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(e,null)},p:function(a,d){if(d&32){c=a[5].uplugin.Plugins,le(c);let f;for(f=0;f<c.length;f+=1){const u=Ge(a,c,f);s[f]?s[f].p(u,d):(s[f]=pe(u),s[f].c(),s[f].m(e,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=c.length}},d:function(a){a&&h(e),_e(s,a)}};return M("SvelteRegisterBlock",{block:m,id:de.name,type:"if",source:"(80:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),m}function Xe(n){let e,t;const o={c:function(){e=v("span"),t=P("*"),this.h()},l:function(l){e=w(l,"SPAN",{});var c=V(e);t=N(c,"*"),c.forEach(h),this.h()},h:function(){y(e,S,87,18,3398)},m:function(l,c){R(l,e,c),p(e,t)},p:H,d:function(l){l&&h(e)}};return M("SvelteRegisterBlock",{block:o,id:Xe.name,type:"else",source:"(87:16) {:else}",ctx:n}),o}function et(n){let e,t=n[20].SemVersion+"",o;const i={c:function(){e=v("span"),o=P(t),this.h()},l:function(c){e=w(c,"SPAN",{});var s=V(e);o=N(s,t),s.forEach(h),this.h()},h:function(){y(e,S,85,18,3319)},m:function(c,s){R(c,e,s),p(e,o)},p:function(c,s){s&32&&t!==(t=c[20].SemVersion+"")&&U(o,t)},d:function(c){c&&h(e)}};return M("SvelteRegisterBlock",{block:i,id:et.name,type:"if",source:"(85:16) {#if dependency.SemVersion}",ctx:n}),i}function pe(n){let e,t=n[20].Name+"",o,i,l,c,s;function m(f,u){return f[20].SemVersion?et:Xe}let r=m(n),a=r(n);const d={c:function(){e=v("strong"),o=P(t),i=P(":"),l=A(),a.c(),c=A(),s=v("br"),this.h()},l:function(u){e=w(u,"STRONG",{});var k=V(e);o=N(k,t),i=N(k,":"),k.forEach(h),l=j(u),a.l(u),c=j(u),s=w(u,"BR",{}),this.h()},h:function(){y(e,S,83,16,3220),y(s,S,89,16,3451)},m:function(u,k){R(u,e,k),p(e,o),p(e,i),R(u,l,k),a.m(u,k),R(u,c,k),R(u,s,k)},p:function(u,k){k&32&&t!==(t=u[20].Name+"")&&U(o,t),r===(r=m(u))&&a?a.p(u,k):(a.d(1),a=r(u),a&&(a.c(),a.m(c.parentNode,c)))},d:function(u){u&&h(e),u&&h(l),a.d(u),u&&h(c),u&&h(s)}};return M("SvelteRegisterBlock",{block:d,id:pe.name,type:"each",source:"(83:14) {#each $modMeta.uplugin.Plugins as dependency}",ctx:n}),d}function tt(n){let e,t,o;const i={c:function(){e=v("p"),t=v("span"),o=P("Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),this.h()},l:function(c){e=w(c,"P",{});var s=V(e);t=w(s,"SPAN",{class:!0});var m=V(t);o=N(m,"Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),m.forEach(h),s.forEach(h),this.h()},h:function(){D(t,"class","text-yellow-600"),y(t,S,104,14,3837),y(e,S,103,12,3819)},m:function(c,s){R(c,e,s),p(e,t),p(t,o)},p:H,d:function(c){c&&h(e)}};return M("SvelteRegisterBlock",{block:i,id:tt.name,type:"else",source:"(103:10) {:else}",ctx:n}),i}function nt(n){let e,t,o,i,l,c=n[5].objects;le(c);let s=[];for(let r=0;r<c.length;r+=1)s[r]=he(ze(n,c,r));const m={c:function(){e=v("p"),t=v("strong"),o=P("Objects:"),i=v("br"),l=A();for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l:function(a){e=w(a,"P",{});var d=V(e);t=w(d,"STRONG",{});var f=V(t);o=N(f,"Objects:"),f.forEach(h),i=w(d,"BR",{}),l=j(d);for(let u=0;u<s.length;u+=1)s[u].l(d);d.forEach(h),this.h()},h:function(){y(t,S,96,14,3608),y(i,S,96,39,3633),y(e,S,95,12,3590)},m:function(a,d){R(a,e,d),p(e,t),p(t,o),p(e,i),p(e,l);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(e,null)},p:function(a,d){if(d&32){c=a[5].objects,le(c);let f;for(f=0;f<c.length;f+=1){const u=ze(a,c,f);s[f]?s[f].p(u,d):(s[f]=he(u),s[f].c(),s[f].m(e,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=c.length}},d:function(a){a&&h(e),_e(s,a)}};return M("SvelteRegisterBlock",{block:m,id:nt.name,type:"if",source:"(95:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),m}function he(n){let e,t=n[17]+"",o,i,l;const c={c:function(){e=v("span"),o=P(t),i=A(),l=v("br"),this.h()},l:function(m){e=w(m,"SPAN",{});var r=V(e);o=N(r,t),r.forEach(h),i=j(m),l=w(m,"BR",{}),this.h()},h:function(){y(e,S,98,16,3705),y(l,S,99,16,3743)},m:function(m,r){R(m,e,r),p(e,o),R(m,i,r),R(m,l,r)},p:function(m,r){r&32&&t!==(t=m[17]+"")&&U(o,t)},d:function(m){m&&h(e),m&&h(i),m&&h(l)}};return M("SvelteRegisterBlock",{block:c,id:he.name,type:"each",source:"(98:14) {#each $modMeta.objects as object}",ctx:n}),c}function ot(n){let e,t=(n[16]||"")+"",o;const i={c:function(){e=v("span"),o=P(t),this.h()},l:function(c){e=w(c,"SPAN",{class:!0});var s=V(e);o=N(s,t),s.forEach(h),this.h()},h:function(){D(e,"class","validation-message"),y(e,S,123,10,4410)},m:function(c,s){R(c,e,s),p(e,o)},p:function(c,s){s&65536&&t!==(t=(c[16]||"")+"")&&U(o,t)},d:function(c){c&&h(e)}};return M("SvelteRegisterBlock",{block:i,id:ot.name,type:"slot",source:'(123:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),i}function it(n){const e={c:H,l:H,m:H,p:H,d:H};return M("SvelteRegisterBlock",{block:e,id:it.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function st(n){let e,t=n[15]+"";const o={c:function(){e=v("div"),this.h()},l:function(l){e=w(l,"DIV",{class:!0});var c=V(e);c.forEach(h),this.h()},h:function(){D(e,"class","markdown-content right s-Aj89xH93RQKp"),y(e,S,129,10,4663)},m:function(l,c){R(l,e,c),e.innerHTML=t},p:function(l,c){c&16&&t!==(t=l[15]+"")&&(e.innerHTML=t)},d:function(l){l&&h(e)}};return M("SvelteRegisterBlock",{block:o,id:st.name,type:"then",source:'(129:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),o}function lt(n){const e={c:H,l:H,m:H,p:H,d:H};return M("SvelteRegisterBlock",{block:e,id:lt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function ct(n){let e;const t={c:function(){e=P(n[0])},l:function(i){e=N(i,n[0])},m:function(i,l){R(i,e,l)},p:function(i,l){l&1&&U(e,i[0])},d:function(i){i&&h(e)}};return M("SvelteRegisterBlock",{block:t,id:ct.name,type:"slot",source:'(136:6) <Button variant=\\"outlined\\" type=\\"submit\\" {disabled}>',ctx:n}),t}function ge(n){let e,t,o,i,l,c,s,m,r,a,d,f,u,k,x,$,b,E,B,L,g,F,T,_,K,ie,$e;function rt(z){n[12](z)}let be={label:"Stability",$$slots:{default:[Je]},$$scope:{ctx:n}};n[2].stability!==void 0&&(be.value=n[2].stability),i=new Ce({props:be,$$inline:!0}),xe.push(()=>ke(i,"value",rt)),s=new ce({props:{for:"stability",$$slots:{default:[Ke,({messages:z})=>({16:z}),({messages:z})=>z?65536:0]},$$scope:{ctx:n}},$$inline:!0});let O=!n[1]&&fe(n);function at(z){n[13](z)}let ve={textarea:!0,class:"vertical-textarea",label:"Changelog",required:!0,input$rows:10};n[2].changelog!==void 0&&(ve.value=n[2].changelog),f=new qe({props:ve,$$inline:!0}),xe.push(()=>ke(f,"value",at)),x=new ce({props:{for:"changelog",$$slots:{default:[ot,({messages:z})=>({16:z}),({messages:z})=>z?65536:0]},$$scope:{ctx:n}},$$inline:!0});let C={ctx:n,current:null,token:null,hasCatch:!1,pending:lt,then:st,catch:it,value:15};Ve(g=re(n[4]),C),_=new Le({props:{variant:"outlined",type:"submit",disabled:n[3],$$slots:{default:[ct]},$$scope:{ctx:n}},$$inline:!0});const we={c:function(){e=v("form"),t=v("div"),o=v("div"),Q(i.$$.fragment),c=A(),Q(s.$$.fragment),m=A(),O&&O.c(),r=A(),a=v("div"),d=v("div"),Q(f.$$.fragment),k=A(),Q(x.$$.fragment),$=A(),b=v("div"),E=v("span"),B=P("Preview:"),L=A(),C.block.c(),F=A(),T=v("div"),Q(_.$$.fragment),this.h()},l:function(G){e=w(G,"FORM",{});var I=V(e);t=w(I,"DIV",{class:!0});var q=V(t);o=w(q,"DIV",{class:!0});var te=V(o);Y(i.$$.fragment,te),c=j(te),Y(s.$$.fragment,te),te.forEach(h),m=j(q),O&&O.l(q),r=j(q),a=w(q,"DIV",{class:!0});var ne=V(a);d=w(ne,"DIV",{class:!0});var oe=V(d);Y(f.$$.fragment,oe),k=j(oe),Y(x.$$.fragment,oe),oe.forEach(h),$=j(ne),b=w(ne,"DIV",{class:!0});var ee=V(b);E=w(ee,"SPAN",{});var ye=V(E);B=N(ye,"Preview:"),ye.forEach(h),L=j(ee),C.block.l(ee),ee.forEach(h),ne.forEach(h),F=j(q),T=w(q,"DIV",{});var Se=V(T);Y(_.$$.fragment,Se),Se.forEach(h),q.forEach(h),I.forEach(h),this.h()},h:function(){D(o,"class","grid grid-flow-row gap-2"),y(o,S,37,4,1397),D(d,"class","grid grid-flow-row gap-2 auto-rows-max"),y(d,S,114,6,4091),y(E,S,127,8,4575),D(b,"class","grid grid-flow-row gap-2 auto-rows-max"),y(b,S,126,6,4514),D(a,"class","grid gap-6 split s-Aj89xH93RQKp"),y(a,S,113,4,4054),y(T,S,134,4,4775),D(t,"class","grid grid-flow-row gap-6"),y(t,S,36,2,1354),y(e,S,35,0,1336)},m:function(G,I){R(G,e,I),p(e,t),p(t,o),Z(i,o,null),p(o,c),Z(s,o,null),p(t,m),O&&O.m(t,null),p(t,r),p(t,a),p(a,d),Z(f,d,null),p(d,k),Z(x,d,null),p(a,$),p(a,b),p(b,E),p(E,B),p(b,L),C.block.m(b,C.anchor=null),C.mount=()=>b,C.anchor=null,p(t,F),p(t,T),Z(_,T,null),K=!0,ie||($e=pt(n[7].call(null,e)),ie=!0)},p:function(G,[I]){n=G;const q={};I&8388608&&(q.$$scope={dirty:I,ctx:n}),!l&&I&4&&(l=!0,q.value=n[2].stability,Pe(()=>l=!1)),i.$set(q);const te={};I&8454144&&(te.$$scope={dirty:I,ctx:n}),s.$set(te),n[1]?O&&(ht(),J(O,1,1,()=>{O=null}),gt()):O?(O.p(n,I),I&2&&W(O,1)):(O=fe(n),O.c(),W(O,1),O.m(t,r));const ne={};!u&&I&4&&(u=!0,ne.value=n[2].changelog,Pe(()=>u=!1)),f.$set(ne);const oe={};I&8454144&&(oe.$$scope={dirty:I,ctx:n}),x.$set(oe),C.ctx=n,I&16&&g!==(g=re(n[4]))&&Ve(g,C)||$t(C,n,I);const ee={};I&8&&(ee.disabled=n[3]),I&8388609&&(ee.$$scope={dirty:I,ctx:n}),_.$set(ee)},i:function(G){K||(W(i.$$.fragment,G),W(s.$$.fragment,G),W(O),W(f.$$.fragment,G),W(x.$$.fragment,G),W(_.$$.fragment,G),K=!0)},o:function(G){J(i.$$.fragment,G),J(s.$$.fragment,G),J(O),J(f.$$.fragment,G),J(x.$$.fragment,G),J(_.$$.fragment,G),K=!1},d:function(G){G&&h(e),X(i),X(s),O&&O.d(),X(f),X(x),C.block.d(),C.token=null,C=null,X(_),ie=!1,$e()}};return M("SvelteRegisterBlock",{block:we,id:ge.name,type:"component",source:"",ctx:n}),we}function Vt(n,e,t){let o,i,l,{$$slots:c={},$$scope:s}=e;dt("VersionForm",c,[]);let{modReference:m}=e,{onSubmit:r}=e,{initialValues:a={arch:[{ModVersionID:"",platform:"",asset:"",hash:"",size:0}],changelog:"",stability:Ie.Alpha}}=e,{submitText:d="Create"}=e,{editing:f=!1}=e;const u=Re();Ee(u,"modMeta"),Be(n,u,g=>t(5,l=g));let k=!1;const x=De(m,u),{form:$,data:b}=je({initialValues:a,extend:[Me({schema:x}),Te],onSubmit:g=>{t(3,k=!0),r(Oe(g,x)).then(()=>t(3,k=!1))}});Ee(b,"data"),Be(n,b,g=>t(2,i=g)),n.$$.on_mount.push(function(){m===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),r===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'")});const E=["modReference","onSubmit","initialValues","submitText","editing"];Object.keys(e).forEach(g=>{!~E.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${g}'`)});function B(g){n.$$.not_equal(i.stability,g)&&(i.stability=g,b.set(i))}function L(g){n.$$.not_equal(i.changelog,g)&&(i.changelog=g,b.set(i))}return n.$$set=g=>{"modReference"in g&&t(9,m=g.modReference),"onSubmit"in g&&t(10,r=g.onSubmit),"initialValues"in g&&t(11,a=g.initialValues),"submitText"in g&&t(0,d=g.submitText),"editing"in g&&t(1,f=g.editing)},n.$capture_state=()=>({createForm:je,validator:Me,reporter:Te,ValidationMessage:ce,constructVersionSchema:De,trimNonSchema:Oe,markdown:re,writable:Re,Textfield:qe,Button:Le,VersionStabilities:Ie,Select:Ce,Option:se,prettyBytes:ae,modReference:m,onSubmit:r,initialValues:a,submitText:d,editing:f,modMeta:u,disabled:k,versionSchema:x,form:$,data:b,preview:o,$data:i,$modMeta:l}),n.$inject_state=g=>{"modReference"in g&&t(9,m=g.modReference),"onSubmit"in g&&t(10,r=g.onSubmit),"initialValues"in g&&t(11,a=g.initialValues),"submitText"in g&&t(0,d=g.submitText),"editing"in g&&t(1,f=g.editing),"disabled"in g&&t(3,k=g.disabled),"preview"in g&&t(4,o=g.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&4&&t(4,o=i.changelog||"")},[d,f,i,k,o,l,u,$,b,m,r,a,B,L]}class Mt extends ft{constructor(e){super(e),ut(this,e,Vt,ge,mt,{modReference:9,onSubmit:10,initialValues:11,submitText:0,editing:1}),M("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:ge.name})}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Mt as V};
//# sourceMappingURL=VersionForm.1c8be474.js.map
