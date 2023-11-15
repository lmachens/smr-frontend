import{S as It,i as _t,s as Ct,d as G,a7 as ot,v as Dt,ak as lt,a1 as De,a2 as rt,w as ct,U as Ne,e as $,W as k,b as P,J as Le,g as w,h as E,X as V,j as d,k as N,M as pe,L as ze,m as y,a5 as ve,N as B,am as Lt,n as _,Q as o,an as at,O as We,Z as ft,ab as zt,Y as I,r as me,p as Wt,t as be,q as Gt,a8 as Ut,ay as qt,R as Ge,a6 as Qt,u as Z,x as Ht,ao as Jt,f as ut,V as Et,a9 as Kt,aa as Xt}from"./vendor.9aada3e0.js";import{o as Yt,a as Zt,b as en,f as mt,s as pt,V as Be,c as dt,v as ht,r as gt}from"./forms.250a3be5.js";import{J as tn}from"./jszip.ad0e74f9.js";import{v as nn}from"./uplugin.6911ef0a.js";import{T as vt,V as bt}from"./graphql.80ff4abf.js";import{t as $t}from"./forms.7da85533.js";import{m as Ue}from"./markdown.4d31d067.js";import{b as qe}from"./formatting.c598e8b5.js";const sn=Object.keys(vt).map(n=>vt[n]).filter(n=>typeof n=="string"),wt=async(n,e)=>{const t=await nn(n);if(t.length!=0)return{message:`invalid ${e}.uplugin`,extended:t};const s=JSON.parse(n);let i=!1;for(const l of s.Plugins)if(l.Name==="SML"){i=!0;break}return i?s:{message:"mod must depend on SML"}};function on(n){const e=n.split("/");return e[e.length-1]}function ln(n){const e=n.split("/");return e.slice(0,e.length-1).join("/")}const rn=async(n,e)=>new tn().loadAsync(n).then(async s=>{const i=s.filter(u=>on(u)==e+".uplugin");if(i.length===0)return{message:"Mod does not contain any "+e+".uplugin files"};if(i.length===1&&i[0].name===e+".uplugin"){const u=await wt(await i[0].async("string"),e);return"message"in u?u:{uplugin:u,objects:Object.keys(s.files).filter(m=>m.endsWith(".so")||m.endsWith(".dll")||m.endsWith(".pak")),targets:["Windows"]}}if(i.some(u=>u.name===e+".uplugin"))return{message:"Mod contains "+e+".uplugin files in the root directory. New uploads must use the multi-target format. Read more on the docs: https://docs.ficsit.app/satisfactory-modding/latest/Development/UpdatingToDedi.html"};const l=i.map(u=>ln(u.name)),r=l.filter(u=>!sn.includes(u));if(r.length!==0)return{message:`invalid target(s): ${r.join(", ")}`};const c=s.filter(u=>!l.some(m=>u.startsWith(m+"/")));if(c.length!==0)return{message:`file(s) outside target directories: ${c.map(u=>u.name).join(", ")}`};const h=await Promise.all(i.map(u=>u.async("string").catch(m=>{throw new Error(`invalid ${e}.uplugin: ${m}`)})));if(!h.every(u=>u===h[0]))return{message:"Mod contains "+e+".uplugin files with different contents"};const f=await wt(h[0],e);return"message"in f?f:{uplugin:f,objects:Object.keys(s.files).filter(u=>u.endsWith(".so")||u.endsWith(".dll")||u.endsWith(".pak")),targets:l}}).catch(s=>({message:"invalid zip/smod file: "+s})),yt=(n,e)=>Yt({file:Zt(en().superRefine(async(t,s)=>{if(!("name"in t&&"size"in t&&"type"in t)){s.addIssue({message:"Unknown file error",code:mt.custom});return}const i=await rn(t,n);if("message"in i){s.addIssue({message:i.message,code:mt.custom});return}e.set(i)})),changelog:pt(),stability:pt()});const S="src/lib/components/versions/VersionForm.svelte";function St(n,e,t){const s=n.slice();return s[19]=e[t],s}function xt(n,e,t){const s=n.slice();return s[22]=e[t],s}function kt(n){let e,t=(n[18]||"")+"",s;const i={c:function(){e=$("span"),s=k(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=E(e);s=V(c,t),c.forEach(d),this.h()},h:function(){B(e,"class","validation-message"),y(e,S,54,8,1708)},m:function(r,c){_(r,e,c),o(e,s)},p:function(r,c){c&262144&&t!==(t=(r[18]||"")+"")&&I(s,t)},d:function(r){r&&d(e)}};return G("SvelteRegisterBlock",{block:i,id:kt.name,type:"slot",source:'(45:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:n}),i}function Qe(n){let e,t,s=n[6]("file")+"",i,l,r,c,h,f,u,m,g,p;f=new Be({props:{for:"file",$$slots:{default:[Vt,({messages:j})=>({18:j}),({messages:j})=>j?262144:0]},$$scope:{ctx:n}},$$inline:!0});let a=n[3].file&&He(n),b=n[7]&&Je(n);const Q={c:function(){e=$("div"),t=$("label"),i=k(s),l=k(" *"),r=P(),c=$("input"),h=P(),Le(f.$$.fragment),u=P(),a&&a.c(),m=P(),b&&b.c(),g=ut(),this.h()},l:function(x){e=w(x,"DIV",{class:!0});var R=E(e);t=w(R,"LABEL",{for:!0});var L=E(t);i=V(L,s),l=V(L," *"),L.forEach(d),r=N(R),c=w(R,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),h=N(R),ze(f.$$.fragment,R),R.forEach(d),u=N(x),a&&a.l(x),m=N(x),b&&b.l(x),g=ut(),this.h()},h:function(){B(t,"for","file"),y(t,S,60,8,1875),B(c,"id","file"),B(c,"class","base-input"),B(c,"name","file"),B(c,"type","file"),B(c,"accept",".zip,.smod"),B(c,"placeholder","File"),y(c,S,61,8,1924),B(e,"class","grid grid-flow-row gap-2"),y(e,S,59,6,1828)},m:function(x,R){_(x,e,R),o(e,t),o(t,i),o(t,l),o(e,r),o(e,c),o(e,h),We(f,e,null),_(x,u,R),a&&a.m(x,R),_(x,m,R),b&&b.m(x,R),_(x,g,R),p=!0},p:function(x,R){(!p||R&64)&&s!==(s=x[6]("file")+"")&&I(i,s);const L={};R&33816576&&(L.$$scope={dirty:R,ctx:x}),f.$set(L),x[3].file?a?a.p(x,R):(a=He(x),a.c(),a.m(m.parentNode,m)):a&&(a.d(1),a=null),x[7]?b?b.p(x,R):(b=Je(x),b.c(),b.m(g.parentNode,g)):b&&(b.d(1),b=null)},i:function(x){p||(me(f.$$.fragment,x),p=!0)},o:function(x){be(f.$$.fragment,x),p=!1},d:function(x){x&&(d(e),d(u),d(m),d(g)),Ge(f),a&&a.d(x),b&&b.d(x)}};return G("SvelteRegisterBlock",{block:Q,id:Qe.name,type:"if",source:"(50:4) {#if !editing}",ctx:n}),Q}function Vt(n){let e,t=(n[18]||"")+"",s;const i={c:function(){e=$("span"),s=k(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=E(e);s=V(c,t),c.forEach(d),this.h()},h:function(){B(e,"class","validation-message"),y(e,S,63,10,2098)},m:function(r,c){_(r,e,c),o(e,s)},p:function(r,c){c&262144&&t!==(t=(r[18]||"")+"")&&I(s,t)},d:function(r){r&&d(e)}};return G("SvelteRegisterBlock",{block:i,id:Vt.name,type:"slot",source:'(54:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),i}function He(n){let e,t,s,i=n[6]("file-type")+"",l,r,c,h=(n[3].file.type||"Unknown")+"",f,u,m,g,p,a=n[6]("file-size")+"",b,Q,j,x=qe(n[3].file.size)+"",R;const L={c:function(){e=$("div"),t=$("span"),s=$("strong"),l=k(i),r=k(":"),c=P(),f=k(h),u=$("br"),m=P(),g=$("span"),p=$("strong"),b=k(a),Q=k(":"),j=P(),R=k(x),this.h()},l:function(A){e=w(A,"DIV",{});var O=E(e);t=w(O,"SPAN",{});var U=E(t);s=w(U,"STRONG",{});var v=E(s);l=V(v,i),r=V(v,":"),v.forEach(d),c=N(U),f=V(U,h),U.forEach(d),u=w(O,"BR",{}),m=N(O),g=w(O,"SPAN",{});var M=E(g);p=w(M,"STRONG",{});var ne=E(p);b=V(ne,a),Q=V(ne,":"),ne.forEach(d),j=N(M),R=V(M,x),M.forEach(d),O.forEach(d),this.h()},h:function(){y(s,S,69,16,2250),y(t,S,69,10,2244),y(u,S,69,89,2323),y(p,S,70,16,2346),y(g,S,70,10,2340),y(e,S,68,8,2228)},m:function(A,O){_(A,e,O),o(e,t),o(t,s),o(s,l),o(s,r),o(t,c),o(t,f),o(e,u),o(e,m),o(e,g),o(g,p),o(p,b),o(p,Q),o(g,j),o(g,R)},p:function(A,O){O&64&&i!==(i=A[6]("file-type")+"")&&I(l,i),O&8&&h!==(h=(A[3].file.type||"Unknown")+"")&&I(f,h),O&64&&a!==(a=A[6]("file-size")+"")&&I(b,a),O&8&&x!==(x=qe(A[3].file.size)+"")&&I(R,x)},d:function(A){A&&d(e)}};return G("SvelteRegisterBlock",{block:L,id:He.name,type:"if",source:"(59:6) {#if $data.file}",ctx:n}),L}function Je(n){let e,t,s,i,l=n[6]("version")+"",r,c,h,f=n[7].uplugin.Version+"",u,m,g,p,a,b,Q="Targets:",j,x=n[7].targets.join(", ")+"",R,L,F,A;function O(q,C){return q[7].uplugin.SemVersion!==void 0?Pt:Rt}let U=O(n),v=U(n),M=n[7].uplugin.Plugins!==void 0&&Ke(n);function ne(q,C){return q[7].objects&&q[7].objects.length>0?Tt:jt}let le=ne(n),D=le(n);const fe={c:function(){e=$("div"),t=$("p"),s=$("span"),i=$("strong"),r=k(l),c=k(":"),h=P(),u=k(f),m=$("br"),g=P(),v.c(),p=P(),a=$("span"),b=$("strong"),b.textContent=Q,j=P(),R=k(x),L=$("br"),F=P(),M&&M.c(),A=P(),D.c(),this.h()},l:function(C){e=w(C,"DIV",{});var T=E(e);t=w(T,"P",{class:!0});var Y=E(t);s=w(Y,"SPAN",{});var ee=E(s);i=w(ee,"STRONG",{});var re=E(i);r=V(re,l),c=V(re,":"),re.forEach(d),h=N(ee),u=V(ee,f),m=w(ee,"BR",{}),ee.forEach(d),g=N(Y),v.l(Y),Y.forEach(d),p=N(T),a=w(T,"SPAN",{});var oe=E(a);b=w(oe,"STRONG",{"data-svelte-h":!0}),pe(b)!=="svelte-8zo0qs"&&(b.textContent=Q),j=N(oe),R=V(oe,x),L=w(oe,"BR",{}),oe.forEach(d),F=N(T),M&&M.l(T),A=N(T),D.l(T),T.forEach(d),this.h()},h:function(){y(i,S,77,18,2528),y(m,S,77,78,2588),y(s,S,77,12,2522),B(t,"class","mb-4"),y(t,S,76,10,2493),y(b,S,89,16,2996),y(L,S,89,71,3051),y(a,S,89,10,2990),y(e,S,75,8,2477)},m:function(C,T){_(C,e,T),o(e,t),o(t,s),o(s,i),o(i,r),o(i,c),o(s,h),o(s,u),o(s,m),o(t,g),v.m(t,null),o(e,p),o(e,a),o(a,b),o(a,j),o(a,R),o(a,L),o(e,F),M&&M.m(e,null),o(e,A),D.m(e,null)},p:function(C,T){T&64&&l!==(l=C[6]("version")+"")&&I(r,l),T&128&&f!==(f=C[7].uplugin.Version+"")&&I(u,f),U===(U=O(C))&&v?v.p(C,T):(v.d(1),v=U(C),v&&(v.c(),v.m(t,null))),T&128&&x!==(x=C[7].targets.join(", ")+"")&&I(R,x),C[7].uplugin.Plugins!==void 0?M?M.p(C,T):(M=Ke(C),M.c(),M.m(e,A)):M&&(M.d(1),M=null),le===(le=ne(C))&&D?D.p(C,T):(D.d(1),D=le(C),D&&(D.c(),D.m(e,null)))},d:function(C){C&&d(e),v.d(),M&&M.d(),D.d()}};return G("SvelteRegisterBlock",{block:fe,id:Je.name,type:"if",source:"(66:6) {#if $modMeta}",ctx:n}),fe}function Rt(n){let e,t=n[6]("version-form.missing-sem-version")+"",s,i,l=n[7].uplugin.Version+"",r,c;const h={c:function(){e=$("span"),s=k(t),i=P(),r=k(l),c=k(".0.0"),this.h()},l:function(u){e=w(u,"SPAN",{class:!0});var m=E(e);s=V(m,t),i=N(m),r=V(m,l),c=V(m,".0.0"),m.forEach(d),this.h()},h:function(){B(e,"class","text-yellow-600"),y(e,S,82,14,2789)},m:function(u,m){_(u,e,m),o(e,s),o(e,i),o(e,r),o(e,c)},p:function(u,m){m&64&&t!==(t=u[6]("version-form.missing-sem-version")+"")&&I(s,t),m&128&&l!==(l=u[7].uplugin.Version+"")&&I(r,l)},d:function(u){u&&d(e)}};return G("SvelteRegisterBlock",{block:h,id:Rt.name,type:"else",source:"(73:12) {:else}",ctx:n}),h}function Pt(n){let e,t,s="SemVersion:",i,l=n[7].uplugin.SemVersion+"",r,c;const h={c:function(){e=$("span"),t=$("strong"),t.textContent=s,i=P(),r=k(l),c=$("br"),this.h()},l:function(u){e=w(u,"SPAN",{});var m=E(e);t=w(m,"STRONG",{"data-svelte-h":!0}),pe(t)!=="svelte-1q9kpdp"&&(t.textContent=s),i=N(m),r=V(m,l),c=w(m,"BR",{}),m.forEach(d),this.h()},h:function(){y(t,S,80,20,2683),y(c,S,80,78,2741),y(e,S,80,14,2677)},m:function(u,m){_(u,e,m),o(e,t),o(e,i),o(e,r),o(e,c)},p:function(u,m){m&128&&l!==(l=u[7].uplugin.SemVersion+"")&&I(r,l)},d:function(u){u&&d(e)}};return G("SvelteRegisterBlock",{block:h,id:Pt.name,type:"if",source:"(71:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),h}function Ke(n){let e,t,s=n[6]("dependencies")+"",i,l,r,c,h=Ne(n[7].uplugin.Plugins),f=[];for(let m=0;m<h.length;m+=1)f[m]=Xe(xt(n,h,m));const u={c:function(){e=$("p"),t=$("strong"),i=k(s),l=k(":"),r=$("br"),c=P();for(let g=0;g<f.length;g+=1)f[g].c();this.h()},l:function(g){e=w(g,"P",{});var p=E(e);t=w(p,"STRONG",{});var a=E(t);i=V(a,s),l=V(a,":"),a.forEach(d),r=w(p,"BR",{}),c=N(p);for(let b=0;b<f.length;b+=1)f[b].l(p);p.forEach(d),this.h()},h:function(){y(t,S,93,14,3151),y(r,S,93,52,3189),y(e,S,92,12,3133)},m:function(g,p){_(g,e,p),o(e,t),o(t,i),o(t,l),o(e,r),o(e,c);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(e,null)},p:function(g,p){if(p&64&&s!==(s=g[6]("dependencies")+"")&&I(i,s),p&128){h=Ne(g[7].uplugin.Plugins);let a;for(a=0;a<h.length;a+=1){const b=xt(g,h,a);f[a]?f[a].p(b,p):(f[a]=Xe(b),f[a].c(),f[a].m(e,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=h.length}},d:function(g){g&&d(e),Et(f,g)}};return G("SvelteRegisterBlock",{block:u,id:Ke.name,type:"if",source:"(83:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),u}function Nt(n){let e,t="*";const s={c:function(){e=$("span"),e.textContent=t,this.h()},l:function(l){e=w(l,"SPAN",{"data-svelte-h":!0}),pe(e)!=="svelte-140b0co"&&(e.textContent=t),this.h()},h:function(){y(e,S,99,18,3451)},m:function(l,r){_(l,e,r)},p:Z,d:function(l){l&&d(e)}};return G("SvelteRegisterBlock",{block:s,id:Nt.name,type:"else",source:"(90:16) {:else}",ctx:n}),s}function Bt(n){let e,t=n[22].SemVersion+"",s;const i={c:function(){e=$("span"),s=k(t),this.h()},l:function(r){e=w(r,"SPAN",{});var c=E(e);s=V(c,t),c.forEach(d),this.h()},h:function(){y(e,S,97,18,3372)},m:function(r,c){_(r,e,c),o(e,s)},p:function(r,c){c&128&&t!==(t=r[22].SemVersion+"")&&I(s,t)},d:function(r){r&&d(e)}};return G("SvelteRegisterBlock",{block:i,id:Bt.name,type:"if",source:"(88:16) {#if dependency.SemVersion}",ctx:n}),i}function Xe(n){let e,t=n[22].Name+"",s,i,l,r,c;function h(g,p){return g[22].SemVersion?Bt:Nt}let f=h(n),u=f(n);const m={c:function(){e=$("strong"),s=k(t),i=k(":"),l=P(),u.c(),r=P(),c=$("br"),this.h()},l:function(p){e=w(p,"STRONG",{});var a=E(e);s=V(a,t),i=V(a,":"),a.forEach(d),l=N(p),u.l(p),r=N(p),c=w(p,"BR",{}),this.h()},h:function(){y(e,S,95,16,3273),y(c,S,101,16,3504)},m:function(p,a){_(p,e,a),o(e,s),o(e,i),_(p,l,a),u.m(p,a),_(p,r,a),_(p,c,a)},p:function(p,a){a&128&&t!==(t=p[22].Name+"")&&I(s,t),f===(f=h(p))&&u?u.p(p,a):(u.d(1),u=f(p),u&&(u.c(),u.m(r.parentNode,r)))},d:function(p){p&&(d(e),d(l),d(r),d(c)),u.d(p)}};return G("SvelteRegisterBlock",{block:m,id:Xe.name,type:"each",source:"(86:14) {#each $modMeta.uplugin.Plugins as dependency}",ctx:n}),m}function jt(n){let e,t,s=n[6]("version-form.missing-sem-version")+"",i;const l={c:function(){e=$("p"),t=$("span"),i=k(s),this.h()},l:function(c){e=w(c,"P",{});var h=E(e);t=w(h,"SPAN",{class:!0});var f=E(t);i=V(f,s),f.forEach(d),h.forEach(d),this.h()},h:function(){B(t,"class","text-yellow-600"),y(t,S,116,14,3898),y(e,S,115,12,3880)},m:function(c,h){_(c,e,h),o(e,t),o(t,i)},p:function(c,h){h&64&&s!==(s=c[6]("version-form.missing-sem-version")+"")&&I(i,s)},d:function(c){c&&d(e)}};return G("SvelteRegisterBlock",{block:l,id:jt.name,type:"else",source:"(106:10) {:else}",ctx:n}),l}function Tt(n){let e,t,s=n[6]("objects")+"",i,l,r,c,h=Ne(n[7].objects),f=[];for(let m=0;m<h.length;m+=1)f[m]=Ye(St(n,h,m));const u={c:function(){e=$("p"),t=$("strong"),i=k(s),l=k(":"),r=$("br"),c=P();for(let g=0;g<f.length;g+=1)f[g].c();this.h()},l:function(g){e=w(g,"P",{});var p=E(e);t=w(p,"STRONG",{});var a=E(t);i=V(a,s),l=V(a,":"),a.forEach(d),r=w(p,"BR",{}),c=N(p);for(let b=0;b<f.length;b+=1)f[b].l(p);p.forEach(d),this.h()},h:function(){y(t,S,108,14,3661),y(r,S,108,47,3694),y(e,S,107,12,3643)},m:function(g,p){_(g,e,p),o(e,t),o(t,i),o(t,l),o(e,r),o(e,c);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(e,null)},p:function(g,p){if(p&64&&s!==(s=g[6]("objects")+"")&&I(i,s),p&128){h=Ne(g[7].objects);let a;for(a=0;a<h.length;a+=1){const b=St(g,h,a);f[a]?f[a].p(b,p):(f[a]=Ye(b),f[a].c(),f[a].m(e,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=h.length}},d:function(g){g&&d(e),Et(f,g)}};return G("SvelteRegisterBlock",{block:u,id:Tt.name,type:"if",source:"(98:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),u}function Ye(n){let e,t=n[19]+"",s,i,l;const r={c:function(){e=$("span"),s=k(t),i=P(),l=$("br"),this.h()},l:function(h){e=w(h,"SPAN",{});var f=E(e);s=V(f,t),f.forEach(d),i=N(h),l=w(h,"BR",{}),this.h()},h:function(){y(e,S,110,16,3766),y(l,S,111,16,3804)},m:function(h,f){_(h,e,f),o(e,s),_(h,i,f),_(h,l,f)},p:function(h,f){f&128&&t!==(t=h[19]+"")&&I(s,t)},d:function(h){h&&(d(e),d(i),d(l))}};return G("SvelteRegisterBlock",{block:r,id:Ye.name,type:"each",source:"(101:14) {#each $modMeta.objects as object}",ctx:n}),r}function At(n){let e,t=(n[18]||"")+"",s;const i={c:function(){e=$("span"),s=k(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=E(e);s=V(c,t),c.forEach(d),this.h()},h:function(){B(e,"class","validation-message"),y(e,S,132,10,4450)},m:function(r,c){_(r,e,c),o(e,s)},p:function(r,c){c&262144&&t!==(t=(r[18]||"")+"")&&I(s,t)},d:function(r){r&&d(e)}};return G("SvelteRegisterBlock",{block:i,id:At.name,type:"slot",source:'(123:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),i}function Ot(n){const e={c:Z,l:Z,m:Z,p:Z,d:Z};return G("SvelteRegisterBlock",{block:e,id:Ot.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function Ft(n){let e,t,s=n[17]+"";const i={c:function(){e=$("div"),t=new Kt(!1),this.h()},l:function(r){e=w(r,"DIV",{class:!0});var c=E(e);t=Xt(c,!1),c.forEach(d),this.h()},h:function(){t.a=null,B(e,"class","markdown-content right s-Aj89xH93RQKp"),y(e,S,139,10,4745)},m:function(r,c){_(r,e,c),t.m(s,e)},p:function(r,c){c&32&&s!==(s=r[17]+"")&&t.p(s)},d:function(r){r&&d(e)}};return G("SvelteRegisterBlock",{block:i,id:Ft.name,type:"then",source:'(129:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),i}function Mt(n){const e={c:Z,l:Z,m:Z,p:Z,d:Z};return G("SvelteRegisterBlock",{block:e,id:Mt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function Ze(n){let e,t,s,i,l,r=n[6]("stability")+"",c,h,f,u,m,g="Alpha",p,a="Beta",b,Q="Release",j,x,R,L,F,A,O,U,v=n[6]("changelog")+"",M,ne,le,D,fe,q,C,T,Y,ee=n[6]("preview")+"",re,oe,je,$e,Te,se,de=n[6]("version-form.agreement-to")+"",we,Ae,ce,he=n[6]("content-policy")+"",ye,Oe,Fe,ue,ie,Se,te,Me,et;x=new Be({props:{for:"stability",$$slots:{default:[kt,({messages:H})=>({18:H}),({messages:H})=>H?262144:0]},$$scope:{ctx:n}},$$inline:!0});let W=!n[2]&&Qe(n);q=new Be({props:{for:"changelog",$$slots:{default:[At,({messages:H})=>({18:H}),({messages:H})=>H?262144:0]},$$scope:{ctx:n}},$$inline:!0});let J={ctx:n,current:null,token:null,hasCatch:!1,pending:Mt,then:Ft,catch:Ot,value:17};ot($e=Ue(n[5]),J);const tt={c:function(){e=$("form"),t=$("div"),s=$("div"),i=$("label"),l=$("span"),c=k(r),h=k(" *"),f=P(),u=$("select"),m=$("option"),m.textContent=g,p=$("option"),p.textContent=a,b=$("option"),b.textContent=Q,j=P(),Le(x.$$.fragment),R=P(),W&&W.c(),L=P(),F=$("div"),A=$("div"),O=$("label"),U=$("span"),M=k(v),ne=k(" *"),le=P(),D=$("textarea"),fe=P(),Le(q.$$.fragment),C=P(),T=$("div"),Y=$("span"),re=k(ee),oe=k(":"),je=P(),J.block.c(),Te=P(),se=$("div"),we=k(de),Ae=P(),ce=$("a"),ye=k(he),Oe=k("."),Fe=P(),ue=$("div"),ie=$("button"),Se=k(n[1]),this.h()},l:function(K){e=w(K,"FORM",{});var z=E(e);t=w(z,"DIV",{class:!0});var X=E(t);s=w(X,"DIV",{class:!0});var ae=E(s);i=w(ae,"LABEL",{class:!0});var xe=E(i);l=w(xe,"SPAN",{});var Ie=E(l);c=V(Ie,r),h=V(Ie," *"),Ie.forEach(d),f=N(xe),u=w(xe,"SELECT",{class:!0});var Ee=E(u);m=w(Ee,"OPTION",{"data-svelte-h":!0}),pe(m)!=="svelte-4emh7a"&&(m.textContent=g),p=w(Ee,"OPTION",{"data-svelte-h":!0}),pe(p)!=="svelte-14mt04m"&&(p.textContent=a),b=w(Ee,"OPTION",{"data-svelte-h":!0}),pe(b)!=="svelte-zdik1o"&&(b.textContent=Q),Ee.forEach(d),xe.forEach(d),j=N(ae),ze(x.$$.fragment,ae),ae.forEach(d),R=N(X),W&&W.l(X),L=N(X),F=w(X,"DIV",{class:!0});var ke=E(F);A=w(ke,"DIV",{class:!0});var Ve=E(A);O=w(Ve,"LABEL",{class:!0});var Re=E(O);U=w(Re,"SPAN",{});var _e=E(U);M=V(_e,v),ne=V(_e," *"),_e.forEach(d),le=N(Re),D=w(Re,"TEXTAREA",{class:!0,rows:!0}),E(D).forEach(d),Re.forEach(d),fe=N(Ve),ze(q.$$.fragment,Ve),Ve.forEach(d),C=N(ke),T=w(ke,"DIV",{class:!0});var Pe=E(T);Y=w(Pe,"SPAN",{});var Ce=E(Y);re=V(Ce,ee),oe=V(Ce,":"),Ce.forEach(d),je=N(Pe),J.block.l(Pe),Pe.forEach(d),ke.forEach(d),Te=N(X),se=w(X,"DIV",{class:!0});var ge=E(se);we=V(ge,de),Ae=N(ge),ce=w(ge,"A",{href:!0,class:!0});var nt=E(ce);ye=V(nt,he),nt.forEach(d),Oe=V(ge,"."),ge.forEach(d),Fe=N(X),ue=w(X,"DIV",{});var st=E(ue);ie=w(st,"BUTTON",{class:!0,type:!0});var it=E(ie);Se=V(it,n[1]),it.forEach(d),st.forEach(d),X.forEach(d),z.forEach(d),this.h()},h:function(){y(l,S,46,8,1365),m.__value="alpha",ve(m,m.__value),y(m,S,48,10,1469),p.__value="beta",ve(p,p.__value),y(p,S,49,10,1516),b.__value="release",ve(b,b.__value),y(b,S,50,10,1561),B(u,"class","select"),n[3].stability===void 0&&Lt(()=>n[14].call(u)),y(u,S,47,8,1406),B(i,"class","label"),y(i,S,45,6,1335),B(s,"class","grid grid-flow-row gap-2"),y(s,S,44,4,1290),y(U,S,128,10,4213),B(D,"class","vertical-textarea textarea p-2"),D.required=!0,B(D,"rows",10),y(D,S,129,10,4256),B(O,"class","label"),y(O,S,127,8,4181),B(A,"class","grid grid-flow-row gap-2 auto-rows-max"),y(A,S,126,6,4120),y(Y,S,136,8,4615),B(T,"class","grid grid-flow-row gap-2 auto-rows-max"),y(T,S,135,6,4554),B(F,"class","grid gap-6 split s-Aj89xH93RQKp"),y(F,S,125,4,4083),B(ce,"href","/content-policy"),B(ce,"class","s-Aj89xH93RQKp"),y(ce,S,145,40,4922),B(se,"class","text-muted"),y(se,S,144,4,4857),B(ie,"class","btn variant-ghost-primary"),B(ie,"type","submit"),ie.disabled=n[4],y(ie,S,149,6,5004),y(ue,S,148,4,4992),B(t,"class","grid grid-flow-row gap-6"),y(t,S,43,2,1247),y(e,S,42,0,1229)},m:function(K,z){_(K,e,z),o(e,t),o(t,s),o(s,i),o(i,l),o(l,c),o(l,h),o(i,f),o(i,u),o(u,m),o(u,p),o(u,b),at(u,n[3].stability,!0),o(s,j),We(x,s,null),o(t,R),W&&W.m(t,null),o(t,L),o(t,F),o(F,A),o(A,O),o(O,U),o(U,M),o(U,ne),o(O,le),o(O,D),ve(D,n[3].changelog),o(A,fe),We(q,A,null),o(F,C),o(F,T),o(T,Y),o(Y,re),o(Y,oe),o(T,je),J.block.m(T,J.anchor=null),J.mount=()=>T,J.anchor=null,o(t,Te),o(t,se),o(se,we),o(se,Ae),o(se,ce),o(ce,ye),o(se,Oe),o(t,Fe),o(t,ue),o(ue,ie),o(ie,Se),te=!0,Me||(et=[ft(u,"change",n[14]),ft(D,"input",n[15]),zt(n[9].call(null,e))],Me=!0)},p:function(K,[z]){n=K,(!te||z&64)&&r!==(r=n[6]("stability")+"")&&I(c,r),z&8&&at(u,n[3].stability);const X={};z&33816576&&(X.$$scope={dirty:z,ctx:n}),x.$set(X),n[2]?W&&(Wt(),be(W,1,1,()=>{W=null}),Gt()):W?(W.p(n,z),z&4&&me(W,1)):(W=Qe(n),W.c(),me(W,1),W.m(t,L)),(!te||z&64)&&v!==(v=n[6]("changelog")+"")&&I(M,v),z&8&&ve(D,n[3].changelog);const ae={};z&33816576&&(ae.$$scope={dirty:z,ctx:n}),q.$set(ae),(!te||z&64)&&ee!==(ee=n[6]("preview")+"")&&I(re,ee),J.ctx=n,z&32&&$e!==($e=Ue(n[5]))&&ot($e,J)||Ut(J,n,z),(!te||z&64)&&de!==(de=n[6]("version-form.agreement-to")+"")&&I(we,de),(!te||z&64)&&he!==(he=n[6]("content-policy")+"")&&I(ye,he),(!te||z&2)&&I(Se,n[1]),(!te||z&16)&&qt(ie,"disabled",n[4])},i:function(K){te||(me(x.$$.fragment,K),me(W),me(q.$$.fragment,K),te=!0)},o:function(K){be(x.$$.fragment,K),be(W),be(q.$$.fragment,K),te=!1},d:function(K){K&&d(e),Ge(x),W&&W.d(),Ge(q),J.block.d(),J.token=null,J=null,Me=!1,Qt(et)}};return G("SvelteRegisterBlock",{block:tt,id:Ze.name,type:"component",source:"",ctx:n}),tt}function cn(n,e,t){let s,i,l,r=Z,c=()=>(r(),r=Ht(m,v=>t(6,l=v)),m),h;n.$$.on_destroy.push(()=>r());let{$$slots:f={},$$scope:u}=e;Dt("VersionForm",f,[]);const{t:m}=lt();De(m,"t"),c();let{modReference:g}=e,{onSubmit:p}=e,{initialValues:a={changelog:"",stability:bt.Alpha}}=e,{submitText:b=l("entry.create")}=e,{editing:Q=!1}=e;const j=ct();De(j,"modMeta"),rt(n,j,v=>t(7,h=v));let x=!1;const R=yt(g,j),{form:L,data:F}=dt({initialValues:a,extend:[ht({schema:R}),gt],onSubmit:v=>{t(4,x=!0),p($t(v,R)).then(()=>t(4,x=!1))}});De(F,"data"),rt(n,F,v=>t(3,i=v)),n.$$.on_mount.push(function(){g===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),p===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'")});const A=["modReference","onSubmit","initialValues","submitText","editing"];Object.keys(e).forEach(v=>{!~A.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${v}'`)});function O(){i.stability=Jt(this),F.set(i)}function U(){i.changelog=this.value,F.set(i)}return n.$$set=v=>{"modReference"in v&&t(11,g=v.modReference),"onSubmit"in v&&t(12,p=v.onSubmit),"initialValues"in v&&t(13,a=v.initialValues),"submitText"in v&&t(1,b=v.submitText),"editing"in v&&t(2,Q=v.editing)},n.$capture_state=()=>({createForm:dt,validator:ht,reporter:gt,ValidationMessage:Be,constructVersionSchema:yt,trimNonSchema:$t,markdown:Ue,writable:ct,VersionStabilities:bt,prettyBytes:qe,getTranslate:lt,t:m,modReference:g,onSubmit:p,initialValues:a,submitText:b,editing:Q,modMeta:j,disabled:x,versionSchema:R,form:L,data:F,preview:s,$data:i,$t:l,$modMeta:h}),n.$inject_state=v=>{"modReference"in v&&t(11,g=v.modReference),"onSubmit"in v&&t(12,p=v.onSubmit),"initialValues"in v&&t(13,a=v.initialValues),"submitText"in v&&t(1,b=v.submitText),"editing"in v&&t(2,Q=v.editing),"disabled"in v&&t(4,x=v.disabled),"preview"in v&&t(5,s=v.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&8&&t(5,s=i.changelog||"")},[m,b,Q,i,x,s,l,h,j,L,F,g,p,a,O,U]}class vn extends It{constructor(e){super(e),_t(this,e,cn,Ze,Ct,{t:0,modReference:11,onSubmit:12,initialValues:13,submitText:1,editing:2}),G("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:Ze.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{vn as V};
//# sourceMappingURL=VersionForm.14da731b.js.map
