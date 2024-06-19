import{S as Lt,i as zt,s as Wt,d as G,a7 as at,v as Gt,ab as ft,a1 as Ge,a2 as ut,w as mt,U as Ie,e as $,W as k,b as N,J as Ue,g as w,h as E,X as R,j as p,k as B,M as pe,L as qe,m as y,a5 as be,N as j,am as Ut,n as O,Q as s,an as dt,O as Qe,Z as pt,ad as qt,Y as F,r as de,p as Qt,t as $e,q as Jt,a8 as Kt,ax as Ht,R as Je,a6 as Xt,u as te,x as Yt,ao as Zt,f as ht,V as Pt,a9 as en,aa as tn}from"./vendor.R_-Wpdv2.js";import{o as nn,a as sn,b as on,f as gt,s as vt,V as Te,c as bt,v as $t,r as wt}from"./forms.NqkVakJZ.js";import{J as ln}from"./jszip.9OPoAcsg.js";import{v as rn}from"./uplugin.SFPeEEW-.js";import{T as yt,V as St}from"./graphql.NT0BIh3j.js";import{t as xt}from"./forms.3QbRW0hj.js";import{m as Ke}from"./markdown.hLecXwmz.js";import{b as He}from"./formatting.GdW8kOxI.js";const cn=Object.keys(yt).map(n=>yt[n]).filter(n=>typeof n=="string"),Et=async(n,e)=>{const t=await rn(n);if(t.length!=0)return{message:`invalid ${e}.uplugin`,extended:t};const i=JSON.parse(n);let o=!1;for(const l of i.Plugins)if(l.Name==="SML"){o=!0;break}return o?i:{message:"mod must depend on SML"}};function an(n){const e=n.split("/");return e[e.length-1]}function fn(n){const e=n.split("/");return e.slice(0,e.length-1).join("/")}const un=async(n,e)=>new ln().loadAsync(n).then(async i=>{const o=i.filter(u=>an(u)==e+".uplugin");if(o.length===0)return{message:"Mod does not contain any "+e+".uplugin files"};if(o.length===1&&o[0].name===e+".uplugin"){const u=await Et(await o[0].async("string"),e);return"message"in u?u:{uplugin:u,objects:Object.keys(i.files).filter(m=>m.endsWith(".so")||m.endsWith(".dll")||m.endsWith(".pak")),targets:["Windows"]}}if(o.some(u=>u.name===e+".uplugin"))return{message:"Mod contains "+e+".uplugin files in the root directory. New uploads must use the multi-target format. Read more on the docs: https://docs.ficsit.app/satisfactory-modding/latest/Development/UpdatingToDedi.html"};const l=o.map(u=>fn(u.name)),r=l.filter(u=>!cn.includes(u));if(r.length!==0)return{message:`invalid target(s): ${r.join(", ")}`};const c=i.filter(u=>!l.some(m=>u.startsWith(m+"/")));if(c.length!==0)return{message:`file(s) outside target directories: ${c.map(u=>u.name).join(", ")}`};const g=await Promise.all(o.map(u=>u.async("string").catch(m=>{throw new Error(`invalid ${e}.uplugin: ${m}`)})));if(!g.every(u=>u===g[0]))return{message:"Mod contains "+e+".uplugin files with different contents"};const f=await Et(g[0],e);return"message"in f?f:{uplugin:f,objects:Object.keys(i.files).filter(u=>u.endsWith(".so")||u.endsWith(".dll")||u.endsWith(".pak")),targets:l}}).catch(i=>({message:"invalid zip/smod file: "+i})),Vt=(n,e)=>nn({file:sn(on().superRefine(async(t,i)=>{if(!("name"in t&&"size"in t&&"type"in t)){i.addIssue({message:"Unknown file error",code:gt.custom});return}const o=await un(t,n);if("message"in o){i.addIssue({message:o.message,code:gt.custom});return}e.set(o)})),changelog:vt(),stability:vt()}),S="src/lib/components/versions/VersionForm.svelte";function kt(n,e,t){const i=n.slice();return i[20]=e[t],i}function Rt(n,e,t){const i=n.slice();return i[23]=e[t],i}function Nt(n){let e,t=(n[19]||"")+"",i;const o={c:function(){e=$("span"),i=k(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=E(e);i=R(c,t),c.forEach(p),this.h()},h:function(){j(e,"class","validation-message"),y(e,S,55,8,1733)},m:function(r,c){O(r,e,c),s(e,i)},p:function(r,c){c&524288&&t!==(t=(r[19]||"")+"")&&F(i,t)},d:function(r){r&&p(e)}};return G("SvelteRegisterBlock",{block:o,id:Nt.name,type:"slot",source:'(46:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:n}),o}function Xe(n){let e,t,i=n[7]("file")+"",o,l,r,c,g,f,u,m,v,d;f=new Te({props:{for:"file",$$slots:{default:[Bt,({messages:I})=>({19:I}),({messages:I})=>I?524288:0]},$$scope:{ctx:n}},$$inline:!0});let a=n[4].file&&Ye(n),b=n[8]&&Ze(n);const Q={c:function(){e=$("div"),t=$("label"),o=k(i),l=k(" *"),r=N(),c=$("input"),g=N(),Ue(f.$$.fragment),u=N(),a&&a.c(),m=N(),b&&b.c(),v=ht(),this.h()},l:function(x){e=w(x,"DIV",{class:!0});var V=E(e);t=w(V,"LABEL",{for:!0});var _=E(t);o=R(_,i),l=R(_," *"),_.forEach(p),r=B(V),c=w(V,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),g=B(V),qe(f.$$.fragment,V),V.forEach(p),u=B(x),a&&a.l(x),m=B(x),b&&b.l(x),v=ht(),this.h()},h:function(){j(t,"for","file"),y(t,S,61,8,1900),j(c,"id","file"),j(c,"class","base-input"),j(c,"name","file"),j(c,"type","file"),j(c,"accept",".zip,.smod"),j(c,"placeholder","File"),y(c,S,62,8,1949),j(e,"class","grid grid-flow-row gap-2"),y(e,S,60,6,1853)},m:function(x,V){O(x,e,V),s(e,t),s(t,o),s(t,l),s(e,r),s(e,c),s(e,g),Qe(f,e,null),O(x,u,V),a&&a.m(x,V),O(x,m,V),b&&b.m(x,V),O(x,v,V),d=!0},p:function(x,V){(!d||V&128)&&i!==(i=x[7]("file")+"")&&F(o,i);const _={};V&67633152&&(_.$$scope={dirty:V,ctx:x}),f.$set(_),x[4].file?a?a.p(x,V):(a=Ye(x),a.c(),a.m(m.parentNode,m)):a&&(a.d(1),a=null),x[8]?b?b.p(x,V):(b=Ze(x),b.c(),b.m(v.parentNode,v)):b&&(b.d(1),b=null)},i:function(x){d||(de(f.$$.fragment,x),d=!0)},o:function(x){$e(f.$$.fragment,x),d=!1},d:function(x){x&&(p(e),p(u),p(m),p(v)),Je(f),a&&a.d(x),b&&b.d(x)}};return G("SvelteRegisterBlock",{block:Q,id:Xe.name,type:"if",source:"(51:4) {#if !editing}",ctx:n}),Q}function Bt(n){let e,t=(n[19]||"")+"",i;const o={c:function(){e=$("span"),i=k(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=E(e);i=R(c,t),c.forEach(p),this.h()},h:function(){j(e,"class","validation-message"),y(e,S,64,10,2123)},m:function(r,c){O(r,e,c),s(e,i)},p:function(r,c){c&524288&&t!==(t=(r[19]||"")+"")&&F(i,t)},d:function(r){r&&p(e)}};return G("SvelteRegisterBlock",{block:o,id:Bt.name,type:"slot",source:'(55:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),o}function Ye(n){let e,t,i,o=n[7]("file-type")+"",l,r,c,g=(n[4].file.type||"Unknown")+"",f,u,m,v,d,a=n[7]("file-size")+"",b,Q,I,x=He(n[4].file.size)+"",V;const _={c:function(){e=$("div"),t=$("span"),i=$("strong"),l=k(o),r=k(":"),c=N(),f=k(g),u=$("br"),m=N(),v=$("span"),d=$("strong"),b=k(a),Q=k(":"),I=N(),V=k(x),this.h()},l:function(P){e=w(P,"DIV",{});var A=E(e);t=w(A,"SPAN",{});var U=E(t);i=w(U,"STRONG",{});var C=E(i);l=R(C,o),r=R(C,":"),C.forEach(p),c=B(U),f=R(U,g),U.forEach(p),u=w(A,"BR",{}),m=B(A),v=w(A,"SPAN",{});var h=E(v);d=w(h,"STRONG",{});var ie=E(d);b=R(ie,a),Q=R(ie,":"),ie.forEach(p),I=B(h),V=R(h,x),h.forEach(p),A.forEach(p),this.h()},h:function(){y(i,S,70,16,2275),y(t,S,70,10,2269),y(u,S,70,89,2348),y(d,S,71,16,2371),y(v,S,71,10,2365),y(e,S,69,8,2253)},m:function(P,A){O(P,e,A),s(e,t),s(t,i),s(i,l),s(i,r),s(t,c),s(t,f),s(e,u),s(e,m),s(e,v),s(v,d),s(d,b),s(d,Q),s(v,I),s(v,V)},p:function(P,A){A&128&&o!==(o=P[7]("file-type")+"")&&F(l,o),A&16&&g!==(g=(P[4].file.type||"Unknown")+"")&&F(f,g),A&128&&a!==(a=P[7]("file-size")+"")&&F(b,a),A&16&&x!==(x=He(P[4].file.size)+"")&&F(V,x)},d:function(P){P&&p(e)}};return G("SvelteRegisterBlock",{block:_,id:Ye.name,type:"if",source:"(60:6) {#if $data.file}",ctx:n}),_}function Ze(n){let e,t,i,o,l=n[7]("version")+"",r,c,g,f=n[8].uplugin.Version+"",u,m,v,d,a,b,Q="Targets:",I,x=n[8].targets.join(", ")+"",V,_,z,P;function A(q,M){return q[8].uplugin.SemVersion!==void 0?It:jt}let U=A(n),C=U(n),h=n[8].uplugin.Plugins!==void 0&&et(n);function ie(q,M){return q[8].objects&&q[8].objects.length>0?Ot:Ft}let le=ie(n),D=le(n);const ue={c:function(){e=$("div"),t=$("p"),i=$("span"),o=$("strong"),r=k(l),c=k(":"),g=N(),u=k(f),m=$("br"),v=N(),C.c(),d=N(),a=$("span"),b=$("strong"),b.textContent=Q,I=N(),V=k(x),_=$("br"),z=N(),h&&h.c(),P=N(),D.c(),this.h()},l:function(M){e=w(M,"DIV",{});var T=E(e);t=w(T,"P",{class:!0});var Y=E(t);i=w(Y,"SPAN",{});var ne=E(i);o=w(ne,"STRONG",{});var re=E(o);r=R(re,l),c=R(re,":"),re.forEach(p),g=B(ne),u=R(ne,f),m=w(ne,"BR",{}),ne.forEach(p),v=B(Y),C.l(Y),Y.forEach(p),d=B(T),a=w(T,"SPAN",{});var oe=E(a);b=w(oe,"STRONG",{"data-svelte-h":!0}),pe(b)!=="svelte-8zo0qs"&&(b.textContent=Q),I=B(oe),V=R(oe,x),_=w(oe,"BR",{}),oe.forEach(p),z=B(T),h&&h.l(T),P=B(T),D.l(T),T.forEach(p),this.h()},h:function(){y(o,S,78,18,2553),y(m,S,78,78,2613),y(i,S,78,12,2547),j(t,"class","mb-4"),y(t,S,77,10,2518),y(b,S,90,16,3021),y(_,S,90,71,3076),y(a,S,90,10,3015),y(e,S,76,8,2502)},m:function(M,T){O(M,e,T),s(e,t),s(t,i),s(i,o),s(o,r),s(o,c),s(i,g),s(i,u),s(i,m),s(t,v),C.m(t,null),s(e,d),s(e,a),s(a,b),s(a,I),s(a,V),s(a,_),s(e,z),h&&h.m(e,null),s(e,P),D.m(e,null)},p:function(M,T){T&128&&l!==(l=M[7]("version")+"")&&F(r,l),T&256&&f!==(f=M[8].uplugin.Version+"")&&F(u,f),U===(U=A(M))&&C?C.p(M,T):(C.d(1),C=U(M),C&&(C.c(),C.m(t,null))),T&256&&x!==(x=M[8].targets.join(", ")+"")&&F(V,x),M[8].uplugin.Plugins!==void 0?h?h.p(M,T):(h=et(M),h.c(),h.m(e,P)):h&&(h.d(1),h=null),le===(le=ie(M))&&D?D.p(M,T):(D.d(1),D=le(M),D&&(D.c(),D.m(e,null)))},d:function(M){M&&p(e),C.d(),h&&h.d(),D.d()}};return G("SvelteRegisterBlock",{block:ue,id:Ze.name,type:"if",source:"(67:6) {#if $modMeta}",ctx:n}),ue}function jt(n){let e,t=n[7]("version-form.missing-sem-version")+"",i,o,l=n[8].uplugin.Version+"",r,c;const g={c:function(){e=$("span"),i=k(t),o=N(),r=k(l),c=k(".0.0"),this.h()},l:function(u){e=w(u,"SPAN",{class:!0});var m=E(e);i=R(m,t),o=B(m),r=R(m,l),c=R(m,".0.0"),m.forEach(p),this.h()},h:function(){j(e,"class","text-yellow-600"),y(e,S,83,14,2814)},m:function(u,m){O(u,e,m),s(e,i),s(e,o),s(e,r),s(e,c)},p:function(u,m){m&128&&t!==(t=u[7]("version-form.missing-sem-version")+"")&&F(i,t),m&256&&l!==(l=u[8].uplugin.Version+"")&&F(r,l)},d:function(u){u&&p(e)}};return G("SvelteRegisterBlock",{block:g,id:jt.name,type:"else",source:"(74:12) {:else}",ctx:n}),g}function It(n){let e,t,i="SemVersion:",o,l=n[8].uplugin.SemVersion+"",r,c;const g={c:function(){e=$("span"),t=$("strong"),t.textContent=i,o=N(),r=k(l),c=$("br"),this.h()},l:function(u){e=w(u,"SPAN",{});var m=E(e);t=w(m,"STRONG",{"data-svelte-h":!0}),pe(t)!=="svelte-1q9kpdp"&&(t.textContent=i),o=B(m),r=R(m,l),c=w(m,"BR",{}),m.forEach(p),this.h()},h:function(){y(t,S,81,20,2708),y(c,S,81,78,2766),y(e,S,81,14,2702)},m:function(u,m){O(u,e,m),s(e,t),s(e,o),s(e,r),s(e,c)},p:function(u,m){m&256&&l!==(l=u[8].uplugin.SemVersion+"")&&F(r,l)},d:function(u){u&&p(e)}};return G("SvelteRegisterBlock",{block:g,id:It.name,type:"if",source:"(72:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),g}function et(n){let e,t,i=n[7]("dependencies")+"",o,l,r,c,g=Ie(n[8].uplugin.Plugins),f=[];for(let m=0;m<g.length;m+=1)f[m]=tt(Rt(n,g,m));const u={c:function(){e=$("p"),t=$("strong"),o=k(i),l=k(":"),r=$("br"),c=N();for(let v=0;v<f.length;v+=1)f[v].c();this.h()},l:function(v){e=w(v,"P",{});var d=E(e);t=w(d,"STRONG",{});var a=E(t);o=R(a,i),l=R(a,":"),a.forEach(p),r=w(d,"BR",{}),c=B(d);for(let b=0;b<f.length;b+=1)f[b].l(d);d.forEach(p),this.h()},h:function(){y(t,S,94,14,3176),y(r,S,94,52,3214),y(e,S,93,12,3158)},m:function(v,d){O(v,e,d),s(e,t),s(t,o),s(t,l),s(e,r),s(e,c);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(e,null)},p:function(v,d){if(d&128&&i!==(i=v[7]("dependencies")+"")&&F(o,i),d&256){g=Ie(v[8].uplugin.Plugins);let a;for(a=0;a<g.length;a+=1){const b=Rt(v,g,a);f[a]?f[a].p(b,d):(f[a]=tt(b),f[a].c(),f[a].m(e,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=g.length}},d:function(v){v&&p(e),Pt(f,v)}};return G("SvelteRegisterBlock",{block:u,id:et.name,type:"if",source:"(84:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),u}function Tt(n){let e,t="*";const i={c:function(){e=$("span"),e.textContent=t,this.h()},l:function(l){e=w(l,"SPAN",{"data-svelte-h":!0}),pe(e)!=="svelte-140b0co"&&(e.textContent=t),this.h()},h:function(){y(e,S,100,18,3476)},m:function(l,r){O(l,e,r)},p:te,d:function(l){l&&p(e)}};return G("SvelteRegisterBlock",{block:i,id:Tt.name,type:"else",source:"(91:16) {:else}",ctx:n}),i}function At(n){let e,t=n[23].SemVersion+"",i;const o={c:function(){e=$("span"),i=k(t),this.h()},l:function(r){e=w(r,"SPAN",{});var c=E(e);i=R(c,t),c.forEach(p),this.h()},h:function(){y(e,S,98,18,3397)},m:function(r,c){O(r,e,c),s(e,i)},p:function(r,c){c&256&&t!==(t=r[23].SemVersion+"")&&F(i,t)},d:function(r){r&&p(e)}};return G("SvelteRegisterBlock",{block:o,id:At.name,type:"if",source:"(89:16) {#if dependency.SemVersion}",ctx:n}),o}function tt(n){let e,t=n[23].Name+"",i,o,l,r,c;function g(v,d){return v[23].SemVersion?At:Tt}let f=g(n),u=f(n);const m={c:function(){e=$("strong"),i=k(t),o=k(":"),l=N(),u.c(),r=N(),c=$("br"),this.h()},l:function(d){e=w(d,"STRONG",{});var a=E(e);i=R(a,t),o=R(a,":"),a.forEach(p),l=B(d),u.l(d),r=B(d),c=w(d,"BR",{}),this.h()},h:function(){y(e,S,96,16,3298),y(c,S,102,16,3529)},m:function(d,a){O(d,e,a),s(e,i),s(e,o),O(d,l,a),u.m(d,a),O(d,r,a),O(d,c,a)},p:function(d,a){a&256&&t!==(t=d[23].Name+"")&&F(i,t),f===(f=g(d))&&u?u.p(d,a):(u.d(1),u=f(d),u&&(u.c(),u.m(r.parentNode,r)))},d:function(d){d&&(p(e),p(l),p(r),p(c)),u.d(d)}};return G("SvelteRegisterBlock",{block:m,id:tt.name,type:"each",source:"(87:14) {#each $modMeta.uplugin.Plugins as dependency}",ctx:n}),m}function Ft(n){let e,t,i=n[7]("version-form.missing-sem-version")+"",o;const l={c:function(){e=$("p"),t=$("span"),o=k(i),this.h()},l:function(c){e=w(c,"P",{});var g=E(e);t=w(g,"SPAN",{class:!0});var f=E(t);o=R(f,i),f.forEach(p),g.forEach(p),this.h()},h:function(){j(t,"class","text-yellow-600"),y(t,S,117,14,3923),y(e,S,116,12,3905)},m:function(c,g){O(c,e,g),s(e,t),s(t,o)},p:function(c,g){g&128&&i!==(i=c[7]("version-form.missing-sem-version")+"")&&F(o,i)},d:function(c){c&&p(e)}};return G("SvelteRegisterBlock",{block:l,id:Ft.name,type:"else",source:"(107:10) {:else}",ctx:n}),l}function Ot(n){let e,t,i=n[7]("objects")+"",o,l,r,c,g=Ie(n[8].objects),f=[];for(let m=0;m<g.length;m+=1)f[m]=nt(kt(n,g,m));const u={c:function(){e=$("p"),t=$("strong"),o=k(i),l=k(":"),r=$("br"),c=N();for(let v=0;v<f.length;v+=1)f[v].c();this.h()},l:function(v){e=w(v,"P",{});var d=E(e);t=w(d,"STRONG",{});var a=E(t);o=R(a,i),l=R(a,":"),a.forEach(p),r=w(d,"BR",{}),c=B(d);for(let b=0;b<f.length;b+=1)f[b].l(d);d.forEach(p),this.h()},h:function(){y(t,S,109,14,3686),y(r,S,109,47,3719),y(e,S,108,12,3668)},m:function(v,d){O(v,e,d),s(e,t),s(t,o),s(t,l),s(e,r),s(e,c);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(e,null)},p:function(v,d){if(d&128&&i!==(i=v[7]("objects")+"")&&F(o,i),d&256){g=Ie(v[8].objects);let a;for(a=0;a<g.length;a+=1){const b=kt(v,g,a);f[a]?f[a].p(b,d):(f[a]=nt(b),f[a].c(),f[a].m(e,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=g.length}},d:function(v){v&&p(e),Pt(f,v)}};return G("SvelteRegisterBlock",{block:u,id:Ot.name,type:"if",source:"(99:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),u}function nt(n){let e,t=n[20]+"",i,o,l;const r={c:function(){e=$("span"),i=k(t),o=N(),l=$("br"),this.h()},l:function(g){e=w(g,"SPAN",{});var f=E(e);i=R(f,t),f.forEach(p),o=B(g),l=w(g,"BR",{}),this.h()},h:function(){y(e,S,111,16,3791),y(l,S,112,16,3829)},m:function(g,f){O(g,e,f),s(e,i),O(g,o,f),O(g,l,f)},p:function(g,f){f&256&&t!==(t=g[20]+"")&&F(i,t)},d:function(g){g&&(p(e),p(o),p(l))}};return G("SvelteRegisterBlock",{block:r,id:nt.name,type:"each",source:"(102:14) {#each $modMeta.objects as object}",ctx:n}),r}function Mt(n){let e,t=(n[19]||"")+"",i;const o={c:function(){e=$("span"),i=k(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=E(e);i=R(c,t),c.forEach(p),this.h()},h:function(){j(e,"class","validation-message"),y(e,S,133,10,4475)},m:function(r,c){O(r,e,c),s(e,i)},p:function(r,c){c&524288&&t!==(t=(r[19]||"")+"")&&F(i,t)},d:function(r){r&&p(e)}};return G("SvelteRegisterBlock",{block:o,id:Mt.name,type:"slot",source:'(124:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),o}function _t(n){const e={c:te,l:te,m:te,p:te,d:te};return G("SvelteRegisterBlock",{block:e,id:_t.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function Ct(n){let e,t,i=n[18]+"";const o={c:function(){e=$("div"),t=new en(!1),this.h()},l:function(r){e=w(r,"DIV",{class:!0});var c=E(e);t=tn(c,!1),c.forEach(p),this.h()},h:function(){t.a=null,j(e,"class","markdown-content right s-Aj89xH93RQKp"),y(e,S,140,10,4770)},m:function(r,c){O(r,e,c),t.m(i,e)},p:function(r,c){c&64&&i!==(i=r[18]+"")&&t.p(i)},d:function(r){r&&p(e)}};return G("SvelteRegisterBlock",{block:o,id:Ct.name,type:"then",source:'(130:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),o}function Dt(n){const e={c:te,l:te,m:te,p:te,d:te};return G("SvelteRegisterBlock",{block:e,id:Dt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function it(n){let e,t,i,o,l,r=n[7]("stability")+"",c,g,f,u,m,v="Alpha",d,a="Beta",b,Q="Release",I,x,V,_,z,P,A,U,C=n[7]("changelog")+"",h,ie,le,D,ue,q,M,T,Y,ne=n[7]("preview")+"",re,oe,Ae,we,Fe,se,he=n[7]("version-form.agreement-to")+"",ye,Oe,ce,ge=n[7]("content-policy")+"",Se,Me,_e,me,Z,ae,xe,Ce,Ee,ee,De,st;x=new Te({props:{for:"stability",$$slots:{default:[Nt,({messages:J})=>({19:J}),({messages:J})=>J?524288:0]},$$scope:{ctx:n}},$$inline:!0});let W=!n[3]&&Xe(n);q=new Te({props:{for:"changelog",$$slots:{default:[Mt,({messages:J})=>({19:J}),({messages:J})=>J?524288:0]},$$scope:{ctx:n}},$$inline:!0});let K={ctx:n,current:null,token:null,hasCatch:!1,pending:Dt,then:Ct,catch:_t,value:18};at(we=Ke(n[6]),K);const ot={c:function(){e=$("form"),t=$("div"),i=$("div"),o=$("label"),l=$("span"),c=k(r),g=k(" *"),f=N(),u=$("select"),m=$("option"),m.textContent=v,d=$("option"),d.textContent=a,b=$("option"),b.textContent=Q,I=N(),Ue(x.$$.fragment),V=N(),W&&W.c(),_=N(),z=$("div"),P=$("div"),A=$("label"),U=$("span"),h=k(C),ie=k(" *"),le=N(),D=$("textarea"),ue=N(),Ue(q.$$.fragment),M=N(),T=$("div"),Y=$("span"),re=k(ne),oe=k(":"),Ae=N(),K.block.c(),Fe=N(),se=$("div"),ye=k(he),Oe=N(),ce=$("a"),Se=k(ge),Me=k("."),_e=N(),me=$("div"),Z=$("button"),ae=$("span"),xe=k(n[1]),Ce=N(),Ee=k(n[2]),this.h()},l:function(H){e=w(H,"FORM",{});var L=E(e);t=w(L,"DIV",{class:!0});var X=E(t);i=w(X,"DIV",{class:!0});var fe=E(i);o=w(fe,"LABEL",{class:!0});var Ve=E(o);l=w(Ve,"SPAN",{});var Le=E(l);c=R(Le,r),g=R(Le," *"),Le.forEach(p),f=B(Ve),u=w(Ve,"SELECT",{class:!0});var ke=E(u);m=w(ke,"OPTION",{"data-svelte-h":!0}),pe(m)!=="svelte-4emh7a"&&(m.textContent=v),d=w(ke,"OPTION",{"data-svelte-h":!0}),pe(d)!=="svelte-14mt04m"&&(d.textContent=a),b=w(ke,"OPTION",{"data-svelte-h":!0}),pe(b)!=="svelte-zdik1o"&&(b.textContent=Q),ke.forEach(p),Ve.forEach(p),I=B(fe),qe(x.$$.fragment,fe),fe.forEach(p),V=B(X),W&&W.l(X),_=B(X),z=w(X,"DIV",{class:!0});var Re=E(z);P=w(Re,"DIV",{class:!0});var Pe=E(P);A=w(Pe,"LABEL",{class:!0});var Ne=E(A);U=w(Ne,"SPAN",{});var ze=E(U);h=R(ze,C),ie=R(ze," *"),ze.forEach(p),le=B(Ne),D=w(Ne,"TEXTAREA",{class:!0,rows:!0}),E(D).forEach(p),Ne.forEach(p),ue=B(Pe),qe(q.$$.fragment,Pe),Pe.forEach(p),M=B(Re),T=w(Re,"DIV",{class:!0});var Be=E(T);Y=w(Be,"SPAN",{});var We=E(Y);re=R(We,ne),oe=R(We,":"),We.forEach(p),Ae=B(Be),K.block.l(Be),Be.forEach(p),Re.forEach(p),Fe=B(X),se=w(X,"DIV",{class:!0});var ve=E(se);ye=R(ve,he),Oe=B(ve),ce=w(ve,"A",{href:!0,class:!0});var lt=E(ce);Se=R(lt,ge),lt.forEach(p),Me=R(ve,"."),ve.forEach(p),_e=B(X),me=w(X,"DIV",{});var rt=E(me);Z=w(rt,"BUTTON",{class:!0,type:!0});var je=E(Z);ae=w(je,"SPAN",{class:!0});var ct=E(ae);xe=R(ct,n[1]),ct.forEach(p),Ce=B(je),Ee=R(je,n[2]),je.forEach(p),rt.forEach(p),X.forEach(p),L.forEach(p),this.h()},h:function(){y(l,S,47,8,1390),m.__value="alpha",be(m,m.__value),y(m,S,49,10,1494),d.__value="beta",be(d,d.__value),y(d,S,50,10,1541),b.__value="release",be(b,b.__value),y(b,S,51,10,1586),j(u,"class","select"),n[4].stability===void 0&&Ut(()=>n[15].call(u)),y(u,S,48,8,1431),j(o,"class","label"),y(o,S,46,6,1360),j(i,"class","grid grid-flow-row gap-2"),y(i,S,45,4,1315),y(U,S,129,10,4238),j(D,"class","vertical-textarea textarea p-2"),D.required=!0,j(D,"rows",10),y(D,S,130,10,4281),j(A,"class","label"),y(A,S,128,8,4206),j(P,"class","grid grid-flow-row auto-rows-max gap-2"),y(P,S,127,6,4145),y(Y,S,137,8,4640),j(T,"class","grid grid-flow-row auto-rows-max gap-2"),y(T,S,136,6,4579),j(z,"class","split grid gap-6 s-Aj89xH93RQKp"),y(z,S,126,4,4108),j(ce,"href","/content-policy"),j(ce,"class","s-Aj89xH93RQKp"),y(ce,S,146,40,4947),j(se,"class","text-muted"),y(se,S,145,4,4882),j(ae,"class","material-icons pr-2"),y(ae,S,151,8,5105),j(Z,"class","variant-ghost-primary btn"),j(Z,"type","submit"),Z.disabled=n[5],y(Z,S,150,6,5029),y(me,S,149,4,5017),j(t,"class","grid grid-flow-row gap-6"),y(t,S,44,2,1272),y(e,S,43,0,1254)},m:function(H,L){O(H,e,L),s(e,t),s(t,i),s(i,o),s(o,l),s(l,c),s(l,g),s(o,f),s(o,u),s(u,m),s(u,d),s(u,b),dt(u,n[4].stability,!0),s(i,I),Qe(x,i,null),s(t,V),W&&W.m(t,null),s(t,_),s(t,z),s(z,P),s(P,A),s(A,U),s(U,h),s(U,ie),s(A,le),s(A,D),be(D,n[4].changelog),s(P,ue),Qe(q,P,null),s(z,M),s(z,T),s(T,Y),s(Y,re),s(Y,oe),s(T,Ae),K.block.m(T,K.anchor=null),K.mount=()=>T,K.anchor=null,s(t,Fe),s(t,se),s(se,ye),s(se,Oe),s(se,ce),s(ce,Se),s(se,Me),s(t,_e),s(t,me),s(me,Z),s(Z,ae),s(ae,xe),s(Z,Ce),s(Z,Ee),ee=!0,De||(st=[pt(u,"change",n[15]),pt(D,"input",n[16]),qt(n[10].call(null,e))],De=!0)},p:function(H,[L]){n=H,(!ee||L&128)&&r!==(r=n[7]("stability")+"")&&F(c,r),L&16&&dt(u,n[4].stability);const X={};L&67633152&&(X.$$scope={dirty:L,ctx:n}),x.$set(X),n[3]?W&&(Qt(),$e(W,1,1,()=>{W=null}),Jt()):W?(W.p(n,L),L&8&&de(W,1)):(W=Xe(n),W.c(),de(W,1),W.m(t,_)),(!ee||L&128)&&C!==(C=n[7]("changelog")+"")&&F(h,C),L&16&&be(D,n[4].changelog);const fe={};L&67633152&&(fe.$$scope={dirty:L,ctx:n}),q.$set(fe),(!ee||L&128)&&ne!==(ne=n[7]("preview")+"")&&F(re,ne),K.ctx=n,L&64&&we!==(we=Ke(n[6]))&&at(we,K)||Kt(K,n,L),(!ee||L&128)&&he!==(he=n[7]("version-form.agreement-to")+"")&&F(ye,he),(!ee||L&128)&&ge!==(ge=n[7]("content-policy")+"")&&F(Se,ge),(!ee||L&2)&&F(xe,n[1]),(!ee||L&4)&&F(Ee,n[2]),(!ee||L&32)&&Ht(Z,"disabled",n[5])},i:function(H){ee||(de(x.$$.fragment,H),de(W),de(q.$$.fragment,H),ee=!0)},o:function(H){$e(x.$$.fragment,H),$e(W),$e(q.$$.fragment,H),ee=!1},d:function(H){H&&p(e),Je(x),W&&W.d(),Je(q),K.block.d(),K.token=null,K=null,De=!1,Xt(st)}};return G("SvelteRegisterBlock",{block:ot,id:it.name,type:"component",source:"",ctx:n}),ot}function mn(n,e,t){let i,o,l,r=te,c=()=>(r(),r=Yt(m,h=>t(7,l=h)),m),g;n.$$.on_destroy.push(()=>r());let{$$slots:f={},$$scope:u}=e;Gt("VersionForm",f,[]);const{t:m}=ft();Ge(m,"t"),c();let{modReference:v}=e,{onSubmit:d}=e,{initialValues:a={changelog:"",stability:St.Release}}=e,{submitIcon:b}=e,{submitText:Q=l("entry.create")}=e,{editing:I=!1}=e;const x=mt();Ge(x,"modMeta"),ut(n,x,h=>t(8,g=h));let V=!1;const _=Vt(v,x),{form:z,data:P}=bt({initialValues:a,extend:[$t({schema:_}),wt],onSubmit:h=>{t(5,V=!0),d(xt(h,_)).then(()=>t(5,V=!1))}});Ge(P,"data"),ut(n,P,h=>t(4,o=h)),n.$$.on_mount.push(function(){v===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),d===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'"),b===void 0&&!("submitIcon"in e||n.$$.bound[n.$$.props.submitIcon])&&console.warn("<VersionForm> was created without expected prop 'submitIcon'")});const A=["modReference","onSubmit","initialValues","submitIcon","submitText","editing"];Object.keys(e).forEach(h=>{!~A.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${h}'`)});function U(){o.stability=Zt(this),P.set(o)}function C(){o.changelog=this.value,P.set(o)}return n.$$set=h=>{"modReference"in h&&t(12,v=h.modReference),"onSubmit"in h&&t(13,d=h.onSubmit),"initialValues"in h&&t(14,a=h.initialValues),"submitIcon"in h&&t(1,b=h.submitIcon),"submitText"in h&&t(2,Q=h.submitText),"editing"in h&&t(3,I=h.editing)},n.$capture_state=()=>({createForm:bt,validator:$t,reporter:wt,ValidationMessage:Te,constructVersionSchema:Vt,trimNonSchema:xt,markdown:Ke,writable:mt,VersionStabilities:St,prettyBytes:He,getTranslate:ft,t:m,modReference:v,onSubmit:d,initialValues:a,submitIcon:b,submitText:Q,editing:I,modMeta:x,disabled:V,versionSchema:_,form:z,data:P,preview:i,$data:o,$t:l,$modMeta:g}),n.$inject_state=h=>{"modReference"in h&&t(12,v=h.modReference),"onSubmit"in h&&t(13,d=h.onSubmit),"initialValues"in h&&t(14,a=h.initialValues),"submitIcon"in h&&t(1,b=h.submitIcon),"submitText"in h&&t(2,Q=h.submitText),"editing"in h&&t(3,I=h.editing),"disabled"in h&&t(5,V=h.disabled),"preview"in h&&t(6,i=h.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&16&&t(6,i=o.changelog||"")},[m,b,Q,I,o,V,i,l,g,x,z,P,v,d,a,U,C]}class yn extends Lt{constructor(e){super(e),zt(this,e,mn,it,Wt,{t:0,modReference:12,onSubmit:13,initialValues:14,submitIcon:1,submitText:2,editing:3}),G("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:it.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitIcon(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitIcon(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{yn as V};
//# sourceMappingURL=VersionForm.UG2JuPJn.js.map
