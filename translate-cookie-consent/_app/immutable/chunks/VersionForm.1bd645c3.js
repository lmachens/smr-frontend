import{S as Vt,i as Et,s as Pt,d as F,r as Ie,T as De,bq as ze,aQ as it,v as Bt,aK as Ge,Y as Se,X as We,Z as Le,a$ as be,x as y,a8 as le,a6 as B,L as R,y as w,z as x,ab as re,a9 as N,q as $,N as V,ac as I,C as S,l as j,ad as u,ae as ce,D as Nt,ai as _e,p as Y,m as jt,t as oe,n as Tt,O,br as At,aj as ae,P as ee,aw as Ft,k as qe,b0 as ot}from"./vendor.11f0c349.js";import{o as Mt,d as Ot,e as It,Z as He,s as Ue,S as st,V as ye,T as lt,c as Ke,v as Qe,r as Ce,O as ve}from"./forms.c7fe8319.js";import{J as Dt}from"./jszip.44fb5653.js";import{v as zt}from"./uplugin.bffd899a.js";import{T as Je,V as Ze}from"./graphql.04d4ab78.js";import{t as Xe}from"./forms.0fb17bbc.js";import{m as ke}from"./markdown.252827fe.js";import{b as xe}from"./formatting.730f0615.js";const Gt=Object.keys(Je).map(n=>Je[n]).filter(n=>typeof n=="string"),Ye=async(n,e)=>{const t=await zt(n);if(t.length!=0)return{message:`invalid ${e}.uplugin`,extended:t};const i=JSON.parse(n);let o=!1;for(const l of i.Plugins)if(l.Name==="SML"){o=!0;break}return o?i:{message:"mod must depend on SML"}};function Wt(n){const e=n.split("/");return e[e.length-1]}function Lt(n){const e=n.split("/");return e.slice(0,e.length-1).join("/")}const _t=async(n,e)=>new Dt().loadAsync(n).then(async i=>{const o=i.filter(f=>Wt(f)==e+".uplugin");if(o.length===0)return{message:"Mod does not contain any "+e+".uplugin files"};if(o.length===1&&o[0].name===e+".uplugin"){const f=await Ye(await o[0].async("string"),e);return"message"in f?f:{uplugin:f,objects:Object.keys(i.files).filter(m=>m.endsWith(".so")||m.endsWith(".dll")||m.endsWith(".pak")),targets:["Windows"]}}if(o.some(f=>f.name===e+".uplugin"))return{message:"Mod contains "+e+".uplugin files in the root directory. New uploads must use the multi-target format. Read more on the docs: https://docs.ficsit.app/satisfactory-modding/latest/Development/UpdatingToDedi.html"};const l=o.map(f=>Lt(f.name)),r=l.filter(f=>!Gt.includes(f));if(r.length!==0)return{message:`invalid target(s): ${r.join(", ")}`};const c=i.filter(f=>!l.some(m=>f.startsWith(m+"/")));if(c.length!==0)return{message:`file(s) outside target directories: ${c.map(f=>f.name).join(", ")}`};const p=await Promise.all(o.map(f=>f.async("string").catch(m=>{throw new Error(`invalid ${e}.uplugin: ${m}`)})));if(!p.every(f=>f===p[0]))return{message:"Mod contains "+e+".uplugin files with different contents"};const s=await Ye(p[0],e);return"message"in s?s:{uplugin:s,objects:Object.keys(i.files).filter(f=>f.endsWith(".so")||f.endsWith(".dll")||f.endsWith(".pak")),targets:l}}).catch(i=>({message:"invalid zip/smod file: "+i})),et=(n,e)=>Mt({file:Ot(It().superRefine(async(t,i)=>{if(!("name"in t&&"size"in t&&"type"in t)){i.addIssue({message:"Unknown file error",code:He.custom});return}const o=await _t(t,n);if("message"in o){i.addIssue({message:o.message,code:He.custom});return}e.set(o)})),changelog:Ue(),stability:Ue()});const k="src/lib/components/versions/VersionForm.svelte";function tt(n,e,t){const i=n.slice();return i[19]=e[t],i}function nt(n,e,t){const i=n.slice();return i[22]=e[t],i}function rt(n){let e;const t={c:function(){e=R("Alpha")},l:function(o){e=V(o,"Alpha")},m:function(o,l){j(o,e,l)},d:function(o){o&&$(e)}};return F("SvelteRegisterBlock",{block:t,id:rt.name,type:"slot",source:'(41:8) <Option value=\\"alpha\\">',ctx:n}),t}function ct(n){let e;const t={c:function(){e=R("Beta")},l:function(o){e=V(o,"Beta")},m:function(o,l){j(o,e,l)},d:function(o){o&&$(e)}};return F("SvelteRegisterBlock",{block:t,id:ct.name,type:"slot",source:'(42:8) <Option value=\\"beta\\">',ctx:n}),t}function at(n){let e;const t={c:function(){e=R("Release")},l:function(o){e=V(o,"Release")},m:function(o,l){j(o,e,l)},d:function(o){o&&$(e)}};return F("SvelteRegisterBlock",{block:t,id:at.name,type:"slot",source:'(43:8) <Option value=\\"release\\">',ctx:n}),t}function ft(n){let e,t,i,o,l,r;e=new ve({props:{value:"alpha",$$slots:{default:[rt]},$$scope:{ctx:n}},$$inline:!0}),i=new ve({props:{value:"beta",$$slots:{default:[ct]},$$scope:{ctx:n}},$$inline:!0}),l=new ve({props:{value:"release",$$slots:{default:[at]},$$scope:{ctx:n}},$$inline:!0});const c={c:function(){le(e.$$.fragment),t=B(),le(i.$$.fragment),o=B(),le(l.$$.fragment)},l:function(s){re(e.$$.fragment,s),t=N(s),re(i.$$.fragment,s),o=N(s),re(l.$$.fragment,s)},m:function(s,f){ce(e,s,f),j(s,t,f),ce(i,s,f),j(s,o,f),ce(l,s,f),r=!0},p:function(s,f){const m={};f&33554432&&(m.$$scope={dirty:f,ctx:s}),e.$set(m);const d={};f&33554432&&(d.$$scope={dirty:f,ctx:s}),i.$set(d);const g={};f&33554432&&(g.$$scope={dirty:f,ctx:s}),l.$set(g)},i:function(s){r||(Y(e.$$.fragment,s),Y(i.$$.fragment,s),Y(l.$$.fragment,s),r=!0)},o:function(s){oe(e.$$.fragment,s),oe(i.$$.fragment,s),oe(l.$$.fragment,s),r=!1},d:function(s){ae(e,s),s&&$(t),ae(i,s),s&&$(o),ae(l,s)}};return F("SvelteRegisterBlock",{block:c,id:ft.name,type:"slot",source:"(40:6) <Select bind:value={$data.stability} label={$t('stability')}>",ctx:n}),c}function ut(n){let e,t=(n[18]||"")+"",i;const o={c:function(){e=y("span"),i=R(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=x(e);i=V(c,t),c.forEach($),this.h()},h:function(){I(e,"class","validation-message"),S(e,k,45,8,1746)},m:function(r,c){j(r,e,c),u(e,i)},p:function(r,c){c&262144&&t!==(t=(r[18]||"")+"")&&O(i,t)},d:function(r){r&&$(e)}};return F("SvelteRegisterBlock",{block:o,id:ut.name,type:"slot",source:'(45:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:n}),o}function Re(n){let e,t,i=n[6]("file")+"",o,l,r,c,p,s,f,m,d,g;s=new ye({props:{for:"file",$$slots:{default:[mt,({messages:P})=>({18:P}),({messages:P})=>P?262144:0]},$$scope:{ctx:n}},$$inline:!0});let a=n[3].file&&Ve(n),b=n[7]&&Ee(n);const H={c:function(){e=y("div"),t=y("label"),o=R(i),l=R(":"),r=B(),c=y("input"),p=B(),le(s.$$.fragment),f=B(),a&&a.c(),m=B(),b&&b.c(),d=qe(),this.h()},l:function(v){e=w(v,"DIV",{class:!0});var E=x(e);t=w(E,"LABEL",{for:!0});var D=x(t);o=V(D,i),l=V(D,":"),D.forEach($),r=N(E),c=w(E,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),p=N(E),re(s.$$.fragment,E),E.forEach($),f=N(v),a&&a.l(v),m=N(v),b&&b.l(v),d=qe(),this.h()},h:function(){I(t,"for","file"),S(t,k,51,8,1913),I(c,"id","file"),I(c,"class","base-input"),I(c,"name","file"),I(c,"type","file"),I(c,"accept",".zip,.smod"),I(c,"placeholder","File"),S(c,k,52,8,1961),I(e,"class","grid grid-flow-row gap-2"),S(e,k,50,6,1866)},m:function(v,E){j(v,e,E),u(e,t),u(t,o),u(t,l),u(e,r),u(e,c),u(e,p),ce(s,e,null),j(v,f,E),a&&a.m(v,E),j(v,m,E),b&&b.m(v,E),j(v,d,E),g=!0},p:function(v,E){(!g||E&64)&&i!==(i=v[6]("file")+"")&&O(o,i);const D={};E&33816576&&(D.$$scope={dirty:E,ctx:v}),s.$set(D),v[3].file?a?a.p(v,E):(a=Ve(v),a.c(),a.m(m.parentNode,m)):a&&(a.d(1),a=null),v[7]?b?b.p(v,E):(b=Ee(v),b.c(),b.m(d.parentNode,d)):b&&(b.d(1),b=null)},i:function(v){g||(Y(s.$$.fragment,v),g=!0)},o:function(v){oe(s.$$.fragment,v),g=!1},d:function(v){v&&$(e),ae(s),v&&$(f),a&&a.d(v),v&&$(m),b&&b.d(v),v&&$(d)}};return F("SvelteRegisterBlock",{block:H,id:Re.name,type:"if",source:"(50:4) {#if !editing}",ctx:n}),H}function mt(n){let e,t=(n[18]||"")+"",i;const o={c:function(){e=y("span"),i=R(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=x(e);i=V(c,t),c.forEach($),this.h()},h:function(){I(e,"class","validation-message"),S(e,k,54,10,2135)},m:function(r,c){j(r,e,c),u(e,i)},p:function(r,c){c&262144&&t!==(t=(r[18]||"")+"")&&O(i,t)},d:function(r){r&&$(e)}};return F("SvelteRegisterBlock",{block:o,id:mt.name,type:"slot",source:'(54:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),o}function Ve(n){let e,t,i,o=n[6]("file-type")+"",l,r,c,p=(n[3].file.type||"Unknown")+"",s,f,m,d,g,a=n[6]("file-size")+"",b,H,P,v=xe(n[3].file.size)+"",E;const D={c:function(){e=y("div"),t=y("span"),i=y("strong"),l=R(o),r=R(":"),c=B(),s=R(p),f=y("br"),m=B(),d=y("span"),g=y("strong"),b=R(a),H=R(":"),P=B(),E=R(v),this.h()},l:function(G){e=w(G,"DIV",{});var z=x(e);t=w(z,"SPAN",{});var Q=x(t);i=w(Q,"STRONG",{});var h=x(i);l=V(h,o),r=V(h,":"),h.forEach($),c=N(Q),s=V(Q,p),Q.forEach($),f=w(z,"BR",{}),m=N(z),d=w(z,"SPAN",{});var T=x(d);g=w(T,"STRONG",{});var te=x(g);b=V(te,a),H=V(te,":"),te.forEach($),P=N(T),E=V(T,v),T.forEach($),z.forEach($),this.h()},h:function(){S(i,k,60,16,2287),S(t,k,60,10,2281),S(f,k,60,89,2360),S(g,k,61,16,2383),S(d,k,61,10,2377),S(e,k,59,8,2265)},m:function(G,z){j(G,e,z),u(e,t),u(t,i),u(i,l),u(i,r),u(t,c),u(t,s),u(e,f),u(e,m),u(e,d),u(d,g),u(g,b),u(g,H),u(d,P),u(d,E)},p:function(G,z){z&64&&o!==(o=G[6]("file-type")+"")&&O(l,o),z&8&&p!==(p=(G[3].file.type||"Unknown")+"")&&O(s,p),z&64&&a!==(a=G[6]("file-size")+"")&&O(b,a),z&8&&v!==(v=xe(G[3].file.size)+"")&&O(E,v)},d:function(G){G&&$(e)}};return F("SvelteRegisterBlock",{block:D,id:Ve.name,type:"if",source:"(59:6) {#if $data.file}",ctx:n}),D}function Ee(n){let e,t,i,o,l=n[6]("version")+"",r,c,p,s=n[7].uplugin.Version+"",f,m,d,g,a,b,H,P,v=n[7].targets.join(", ")+"",E,D,L,G;function z(C,M){return C[7].uplugin.SemVersion!==void 0?dt:pt}let Q=z(n),h=Q(n),T=n[7].uplugin.Plugins!==void 0&&Pe(n);function te(C,M){return C[7].objects&&C[7].objects.length>0?vt:$t}let fe=te(n),_=fe(n);const ue={c:function(){e=y("div"),t=y("p"),i=y("span"),o=y("strong"),r=R(l),c=R(":"),p=B(),f=R(s),m=y("br"),d=B(),h.c(),g=B(),a=y("span"),b=y("strong"),H=R("Targets:"),P=B(),E=R(v),D=y("br"),L=B(),T&&T.c(),G=B(),_.c(),this.h()},l:function(M){e=w(M,"DIV",{});var W=x(e);t=w(W,"P",{class:!0});var ne=x(t);i=w(ne,"SPAN",{});var Z=x(i);o=w(Z,"STRONG",{});var ie=x(o);r=V(ie,l),c=V(ie,":"),ie.forEach($),p=N(Z),f=V(Z,s),m=w(Z,"BR",{}),Z.forEach($),d=N(ne),h.l(ne),ne.forEach($),g=N(W),a=w(W,"SPAN",{});var se=x(a);b=w(se,"STRONG",{});var he=x(b);H=V(he,"Targets:"),he.forEach($),P=N(se),E=V(se,v),D=w(se,"BR",{}),se.forEach($),L=N(W),T&&T.l(W),G=N(W),_.l(W),W.forEach($),this.h()},h:function(){S(o,k,68,18,2565),S(m,k,68,78,2625),S(i,k,68,12,2559),I(t,"class","mb-4"),S(t,k,67,10,2530),S(b,k,80,16,3033),S(D,k,80,71,3088),S(a,k,80,10,3027),S(e,k,66,8,2514)},m:function(M,W){j(M,e,W),u(e,t),u(t,i),u(i,o),u(o,r),u(o,c),u(i,p),u(i,f),u(i,m),u(t,d),h.m(t,null),u(e,g),u(e,a),u(a,b),u(b,H),u(a,P),u(a,E),u(a,D),u(e,L),T&&T.m(e,null),u(e,G),_.m(e,null)},p:function(M,W){W&64&&l!==(l=M[6]("version")+"")&&O(r,l),W&128&&s!==(s=M[7].uplugin.Version+"")&&O(f,s),Q===(Q=z(M))&&h?h.p(M,W):(h.d(1),h=Q(M),h&&(h.c(),h.m(t,null))),W&128&&v!==(v=M[7].targets.join(", ")+"")&&O(E,v),M[7].uplugin.Plugins!==void 0?T?T.p(M,W):(T=Pe(M),T.c(),T.m(e,G)):T&&(T.d(1),T=null),fe===(fe=te(M))&&_?_.p(M,W):(_.d(1),_=fe(M),_&&(_.c(),_.m(e,null)))},d:function(M){M&&$(e),h.d(),T&&T.d(),_.d()}};return F("SvelteRegisterBlock",{block:ue,id:Ee.name,type:"if",source:"(66:6) {#if $modMeta}",ctx:n}),ue}function pt(n){let e,t=n[6]("version-form.missing-sem-version")+"",i,o,l=n[7].uplugin.Version+"",r,c;const p={c:function(){e=y("span"),i=R(t),o=B(),r=R(l),c=R(".0.0"),this.h()},l:function(f){e=w(f,"SPAN",{class:!0});var m=x(e);i=V(m,t),o=N(m),r=V(m,l),c=V(m,".0.0"),m.forEach($),this.h()},h:function(){I(e,"class","text-yellow-600"),S(e,k,73,14,2826)},m:function(f,m){j(f,e,m),u(e,i),u(e,o),u(e,r),u(e,c)},p:function(f,m){m&64&&t!==(t=f[6]("version-form.missing-sem-version")+"")&&O(i,t),m&128&&l!==(l=f[7].uplugin.Version+"")&&O(r,l)},d:function(f){f&&$(e)}};return F("SvelteRegisterBlock",{block:p,id:pt.name,type:"else",source:"(73:12) {:else}",ctx:n}),p}function dt(n){let e,t,i,o,l=n[7].uplugin.SemVersion+"",r,c;const p={c:function(){e=y("span"),t=y("strong"),i=R("SemVersion:"),o=B(),r=R(l),c=y("br"),this.h()},l:function(f){e=w(f,"SPAN",{});var m=x(e);t=w(m,"STRONG",{});var d=x(t);i=V(d,"SemVersion:"),d.forEach($),o=N(m),r=V(m,l),c=w(m,"BR",{}),m.forEach($),this.h()},h:function(){S(t,k,71,20,2720),S(c,k,71,78,2778),S(e,k,71,14,2714)},m:function(f,m){j(f,e,m),u(e,t),u(t,i),u(e,o),u(e,r),u(e,c)},p:function(f,m){m&128&&l!==(l=f[7].uplugin.SemVersion+"")&&O(r,l)},d:function(f){f&&$(e)}};return F("SvelteRegisterBlock",{block:p,id:dt.name,type:"if",source:"(71:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),p}function Pe(n){let e,t,i=n[6]("dependencies")+"",o,l,r,c,p=n[7].uplugin.Plugins;be(p);let s=[];for(let m=0;m<p.length;m+=1)s[m]=Be(nt(n,p,m));const f={c:function(){e=y("p"),t=y("strong"),o=R(i),l=R(":"),r=y("br"),c=B();for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l:function(d){e=w(d,"P",{});var g=x(e);t=w(g,"STRONG",{});var a=x(t);o=V(a,i),l=V(a,":"),a.forEach($),r=w(g,"BR",{}),c=N(g);for(let b=0;b<s.length;b+=1)s[b].l(g);g.forEach($),this.h()},h:function(){S(t,k,84,14,3188),S(r,k,84,52,3226),S(e,k,83,12,3170)},m:function(d,g){j(d,e,g),u(e,t),u(t,o),u(t,l),u(e,r),u(e,c);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p:function(d,g){if(g&64&&i!==(i=d[6]("dependencies")+"")&&O(o,i),g&128){p=d[7].uplugin.Plugins,be(p);let a;for(a=0;a<p.length;a+=1){const b=nt(d,p,a);s[a]?s[a].p(b,g):(s[a]=Be(b),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=p.length}},d:function(d){d&&$(e),ot(s,d)}};return F("SvelteRegisterBlock",{block:f,id:Pe.name,type:"if",source:"(83:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),f}function gt(n){let e,t;const i={c:function(){e=y("span"),t=R("*"),this.h()},l:function(l){e=w(l,"SPAN",{});var r=x(e);t=V(r,"*"),r.forEach($),this.h()},h:function(){S(e,k,90,18,3488)},m:function(l,r){j(l,e,r),u(e,t)},p:ee,d:function(l){l&&$(e)}};return F("SvelteRegisterBlock",{block:i,id:gt.name,type:"else",source:"(90:16) {:else}",ctx:n}),i}function ht(n){let e,t=n[22].SemVersion+"",i;const o={c:function(){e=y("span"),i=R(t),this.h()},l:function(r){e=w(r,"SPAN",{});var c=x(e);i=V(c,t),c.forEach($),this.h()},h:function(){S(e,k,88,18,3409)},m:function(r,c){j(r,e,c),u(e,i)},p:function(r,c){c&128&&t!==(t=r[22].SemVersion+"")&&O(i,t)},d:function(r){r&&$(e)}};return F("SvelteRegisterBlock",{block:o,id:ht.name,type:"if",source:"(88:16) {#if dependency.SemVersion}",ctx:n}),o}function Be(n){let e,t=n[22].Name+"",i,o,l,r,c;function p(d,g){return d[22].SemVersion?ht:gt}let s=p(n),f=s(n);const m={c:function(){e=y("strong"),i=R(t),o=R(":"),l=B(),f.c(),r=B(),c=y("br"),this.h()},l:function(g){e=w(g,"STRONG",{});var a=x(e);i=V(a,t),o=V(a,":"),a.forEach($),l=N(g),f.l(g),r=N(g),c=w(g,"BR",{}),this.h()},h:function(){S(e,k,86,16,3310),S(c,k,92,16,3541)},m:function(g,a){j(g,e,a),u(e,i),u(e,o),j(g,l,a),f.m(g,a),j(g,r,a),j(g,c,a)},p:function(g,a){a&128&&t!==(t=g[22].Name+"")&&O(i,t),s===(s=p(g))&&f?f.p(g,a):(f.d(1),f=s(g),f&&(f.c(),f.m(r.parentNode,r)))},d:function(g){g&&$(e),g&&$(l),f.d(g),g&&$(r),g&&$(c)}};return F("SvelteRegisterBlock",{block:m,id:Be.name,type:"each",source:"(86:14) {#each $modMeta.uplugin.Plugins as dependency}",ctx:n}),m}function $t(n){let e,t,i=n[6]("version-form.missing-sem-version")+"",o;const l={c:function(){e=y("p"),t=y("span"),o=R(i),this.h()},l:function(c){e=w(c,"P",{});var p=x(e);t=w(p,"SPAN",{class:!0});var s=x(t);o=V(s,i),s.forEach($),p.forEach($),this.h()},h:function(){I(t,"class","text-yellow-600"),S(t,k,107,14,3935),S(e,k,106,12,3917)},m:function(c,p){j(c,e,p),u(e,t),u(t,o)},p:function(c,p){p&64&&i!==(i=c[6]("version-form.missing-sem-version")+"")&&O(o,i)},d:function(c){c&&$(e)}};return F("SvelteRegisterBlock",{block:l,id:$t.name,type:"else",source:"(106:10) {:else}",ctx:n}),l}function vt(n){let e,t,i=n[6]("objects")+"",o,l,r,c,p=n[7].objects;be(p);let s=[];for(let m=0;m<p.length;m+=1)s[m]=Ne(tt(n,p,m));const f={c:function(){e=y("p"),t=y("strong"),o=R(i),l=R(":"),r=y("br"),c=B();for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l:function(d){e=w(d,"P",{});var g=x(e);t=w(g,"STRONG",{});var a=x(t);o=V(a,i),l=V(a,":"),a.forEach($),r=w(g,"BR",{}),c=N(g);for(let b=0;b<s.length;b+=1)s[b].l(g);g.forEach($),this.h()},h:function(){S(t,k,99,14,3698),S(r,k,99,47,3731),S(e,k,98,12,3680)},m:function(d,g){j(d,e,g),u(e,t),u(t,o),u(t,l),u(e,r),u(e,c);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p:function(d,g){if(g&64&&i!==(i=d[6]("objects")+"")&&O(o,i),g&128){p=d[7].objects,be(p);let a;for(a=0;a<p.length;a+=1){const b=tt(d,p,a);s[a]?s[a].p(b,g):(s[a]=Ne(b),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=p.length}},d:function(d){d&&$(e),ot(s,d)}};return F("SvelteRegisterBlock",{block:f,id:vt.name,type:"if",source:"(98:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),f}function Ne(n){let e,t=n[19]+"",i,o,l;const r={c:function(){e=y("span"),i=R(t),o=B(),l=y("br"),this.h()},l:function(p){e=w(p,"SPAN",{});var s=x(e);i=V(s,t),s.forEach($),o=N(p),l=w(p,"BR",{}),this.h()},h:function(){S(e,k,101,16,3803),S(l,k,102,16,3841)},m:function(p,s){j(p,e,s),u(e,i),j(p,o,s),j(p,l,s)},p:function(p,s){s&128&&t!==(t=p[19]+"")&&O(i,t)},d:function(p){p&&$(e),p&&$(o),p&&$(l)}};return F("SvelteRegisterBlock",{block:r,id:Ne.name,type:"each",source:"(101:14) {#each $modMeta.objects as object}",ctx:n}),r}function bt(n){let e,t=(n[18]||"")+"",i;const o={c:function(){e=y("span"),i=R(t),this.h()},l:function(r){e=w(r,"SPAN",{class:!0});var c=x(e);i=V(c,t),c.forEach($),this.h()},h:function(){I(e,"class","validation-message"),S(e,k,126,10,4482)},m:function(r,c){j(r,e,c),u(e,i)},p:function(r,c){c&262144&&t!==(t=(r[18]||"")+"")&&O(i,t)},d:function(r){r&&$(e)}};return F("SvelteRegisterBlock",{block:o,id:bt.name,type:"slot",source:'(126:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),o}function yt(n){const e={c:ee,l:ee,m:ee,p:ee,d:ee};return F("SvelteRegisterBlock",{block:e,id:yt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function wt(n){let e,t=n[17]+"";const i={c:function(){e=y("div"),this.h()},l:function(l){e=w(l,"DIV",{class:!0});var r=x(e);r.forEach($),this.h()},h:function(){I(e,"class","markdown-content right s-Aj89xH93RQKp"),S(e,k,132,10,4743)},m:function(l,r){j(l,e,r),e.innerHTML=t},p:function(l,r){r&32&&t!==(t=l[17]+"")&&(e.innerHTML=t)},d:function(l){l&&$(e)}};return F("SvelteRegisterBlock",{block:i,id:wt.name,type:"then",source:'(132:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),i}function St(n){const e={c:ee,l:ee,m:ee,p:ee,d:ee};return F("SvelteRegisterBlock",{block:e,id:St.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function kt(n){let e;const t={c:function(){e=R(n[1])},l:function(o){e=V(o,n[1])},m:function(o,l){j(o,e,l)},p:function(o,l){l&2&&O(e,o[1])},d:function(o){o&&$(e)}};return F("SvelteRegisterBlock",{block:t,id:kt.name,type:"slot",source:'(143:6) <Button variant=\\"outlined\\" type=\\"submit\\" {disabled}>',ctx:n}),t}function je(n){let e,t,i,o,l,r,c,p,s,f,m,d,g,a,b,H,P,v,E=n[6]("preview")+"",D,L,G,z,Q,h,T=n[6]("version-form.agreement-to")+"",te,fe,_,ue=n[6]("content-policy")+"",C,M,W,ne,Z,ie,se,he;function xt(U){n[14](U)}let Te={label:n[6]("stability"),$$slots:{default:[ft]},$$scope:{ctx:n}};n[3].stability!==void 0&&(Te.value=n[3].stability),o=new st({props:Te,$$inline:!0}),Ie.push(()=>De(o,"value",xt)),c=new ye({props:{for:"stability",$$slots:{default:[ut,({messages:U})=>({18:U}),({messages:U})=>U?262144:0]},$$scope:{ctx:n}},$$inline:!0});let q=!n[2]&&Re(n);function Rt(U){n[15](U)}let Ae={textarea:!0,class:"vertical-textarea",label:n[6]("changelog"),required:!0,input$rows:10};n[3].changelog!==void 0&&(Ae.value=n[3].changelog),d=new lt({props:Ae,$$inline:!0}),Ie.push(()=>De(d,"value",Rt)),b=new ye({props:{for:"changelog",$$slots:{default:[bt,({messages:U})=>({18:U}),({messages:U})=>U?262144:0]},$$scope:{ctx:n}},$$inline:!0});let X={ctx:n,current:null,token:null,hasCatch:!1,pending:St,then:wt,catch:yt,value:17};ze(z=ke(n[5]),X),Z=new it({props:{variant:"outlined",type:"submit",disabled:n[4],$$slots:{default:[kt]},$$scope:{ctx:n}},$$inline:!0});const Fe={c:function(){e=y("form"),t=y("div"),i=y("div"),le(o.$$.fragment),r=B(),le(c.$$.fragment),p=B(),q&&q.c(),s=B(),f=y("div"),m=y("div"),le(d.$$.fragment),a=B(),le(b.$$.fragment),H=B(),P=y("div"),v=y("span"),D=R(E),L=R(":"),G=B(),X.block.c(),Q=B(),h=y("div"),te=R(T),fe=B(),_=y("a"),C=R(ue),M=R("."),W=B(),ne=y("div"),le(Z.$$.fragment),this.h()},l:function(K){e=w(K,"FORM",{});var A=x(e);t=w(A,"DIV",{class:!0});var J=x(t);i=w(J,"DIV",{class:!0});var de=x(i);re(o.$$.fragment,de),r=N(de),re(c.$$.fragment,de),de.forEach($),p=N(J),q&&q.l(J),s=N(J),f=w(J,"DIV",{class:!0});var me=x(f);m=w(me,"DIV",{class:!0});var ge=x(m);re(d.$$.fragment,ge),a=N(ge),re(b.$$.fragment,ge),ge.forEach($),H=N(me),P=w(me,"DIV",{class:!0});var pe=x(P);v=w(pe,"SPAN",{});var we=x(v);D=V(we,E),L=V(we,":"),we.forEach($),G=N(pe),X.block.l(pe),pe.forEach($),me.forEach($),Q=N(J),h=w(J,"DIV",{class:!0});var $e=x(h);te=V($e,T),fe=N($e),_=w($e,"A",{href:!0,class:!0});var Me=x(_);C=V(Me,ue),Me.forEach($),M=V($e,"."),$e.forEach($),W=N(J),ne=w(J,"DIV",{});var Oe=x(ne);re(Z.$$.fragment,Oe),Oe.forEach($),J.forEach($),A.forEach($),this.h()},h:function(){I(i,"class","grid grid-flow-row gap-2"),S(i,k,38,4,1413),I(m,"class","grid grid-flow-row gap-2 auto-rows-max"),S(m,k,117,6,4157),S(v,k,130,8,4647),I(P,"class","grid grid-flow-row gap-2 auto-rows-max"),S(P,k,129,6,4586),I(f,"class","grid gap-6 split s-Aj89xH93RQKp"),S(f,k,116,4,4120),I(_,"href","/content-policy"),I(_,"class","s-Aj89xH93RQKp"),S(_,k,138,40,4920),I(h,"class","text-muted"),S(h,k,137,4,4855),S(ne,k,141,4,4990),I(t,"class","grid grid-flow-row gap-6"),S(t,k,37,2,1370),S(e,k,36,0,1352)},m:function(K,A){j(K,e,A),u(e,t),u(t,i),ce(o,i,null),u(i,r),ce(c,i,null),u(t,p),q&&q.m(t,null),u(t,s),u(t,f),u(f,m),ce(d,m,null),u(m,a),ce(b,m,null),u(f,H),u(f,P),u(P,v),u(v,D),u(v,L),u(P,G),X.block.m(P,X.anchor=null),X.mount=()=>P,X.anchor=null,u(t,Q),u(t,h),u(h,te),u(h,fe),u(h,_),u(_,C),u(h,M),u(t,W),u(t,ne),ce(Z,ne,null),ie=!0,se||(he=Nt(n[9].call(null,e)),se=!0)},p:function(K,[A]){n=K;const J={};A&64&&(J.label=n[6]("stability")),A&33554432&&(J.$$scope={dirty:A,ctx:n}),!l&&A&8&&(l=!0,J.value=n[3].stability,_e(()=>l=!1)),o.$set(J);const de={};A&33816576&&(de.$$scope={dirty:A,ctx:n}),c.$set(de),n[2]?q&&(jt(),oe(q,1,1,()=>{q=null}),Tt()):q?(q.p(n,A),A&4&&Y(q,1)):(q=Re(n),q.c(),Y(q,1),q.m(t,s));const me={};A&64&&(me.label=n[6]("changelog")),!g&&A&8&&(g=!0,me.value=n[3].changelog,_e(()=>g=!1)),d.$set(me);const ge={};A&33816576&&(ge.$$scope={dirty:A,ctx:n}),b.$set(ge),(!ie||A&64)&&E!==(E=n[6]("preview")+"")&&O(D,E),X.ctx=n,A&32&&z!==(z=ke(n[5]))&&ze(z,X)||At(X,n,A),(!ie||A&64)&&T!==(T=n[6]("version-form.agreement-to")+"")&&O(te,T),(!ie||A&64)&&ue!==(ue=n[6]("content-policy")+"")&&O(C,ue);const pe={};A&16&&(pe.disabled=n[4]),A&33554434&&(pe.$$scope={dirty:A,ctx:n}),Z.$set(pe)},i:function(K){ie||(Y(o.$$.fragment,K),Y(c.$$.fragment,K),Y(q),Y(d.$$.fragment,K),Y(b.$$.fragment,K),Y(Z.$$.fragment,K),ie=!0)},o:function(K){oe(o.$$.fragment,K),oe(c.$$.fragment,K),oe(q),oe(d.$$.fragment,K),oe(b.$$.fragment,K),oe(Z.$$.fragment,K),ie=!1},d:function(K){K&&$(e),ae(o),ae(c),q&&q.d(),ae(d),ae(b),X.block.d(),X.token=null,X=null,ae(Z),se=!1,he()}};return F("SvelteRegisterBlock",{block:Fe,id:je.name,type:"component",source:"",ctx:n}),Fe}function qt(n,e,t){let i,o,l,r=ee,c=()=>(r(),r=Ft(m,h=>t(6,l=h)),m),p;n.$$.on_destroy.push(()=>r());let{$$slots:s={},$$scope:f}=e;Bt("VersionForm",s,[]);const{t:m}=Ge();Se(m,"t"),c();let{modReference:d}=e,{onSubmit:g}=e,{initialValues:a={changelog:"",stability:Ze.Alpha}}=e,{submitText:b=l("entry.create")}=e,{editing:H=!1}=e;const P=We();Se(P,"modMeta"),Le(n,P,h=>t(7,p=h));let v=!1;const E=et(d,P),{form:D,data:L}=Ke({initialValues:a,extend:[Qe({schema:E}),Ce],onSubmit:h=>{t(4,v=!0),g(Xe(h,E)).then(()=>t(4,v=!1))}});Se(L,"data"),Le(n,L,h=>t(3,o=h)),n.$$.on_mount.push(function(){d===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),g===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'")});const G=["modReference","onSubmit","initialValues","submitText","editing"];Object.keys(e).forEach(h=>{!~G.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${h}'`)});function z(h){n.$$.not_equal(o.stability,h)&&(o.stability=h,L.set(o))}function Q(h){n.$$.not_equal(o.changelog,h)&&(o.changelog=h,L.set(o))}return n.$$set=h=>{"modReference"in h&&t(11,d=h.modReference),"onSubmit"in h&&t(12,g=h.onSubmit),"initialValues"in h&&t(13,a=h.initialValues),"submitText"in h&&t(1,b=h.submitText),"editing"in h&&t(2,H=h.editing)},n.$capture_state=()=>({createForm:Ke,validator:Qe,reporter:Ce,ValidationMessage:ye,constructVersionSchema:et,trimNonSchema:Xe,markdown:ke,writable:We,Textfield:lt,Button:it,VersionStabilities:Ze,Select:st,Option:ve,prettyBytes:xe,getTranslate:Ge,t:m,modReference:d,onSubmit:g,initialValues:a,submitText:b,editing:H,modMeta:P,disabled:v,versionSchema:E,form:D,data:L,preview:i,$data:o,$t:l,$modMeta:p}),n.$inject_state=h=>{"modReference"in h&&t(11,d=h.modReference),"onSubmit"in h&&t(12,g=h.onSubmit),"initialValues"in h&&t(13,a=h.initialValues),"submitText"in h&&t(1,b=h.submitText),"editing"in h&&t(2,H=h.editing),"disabled"in h&&t(4,v=h.disabled),"preview"in h&&t(5,i=h.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&8&&t(5,i=o.changelog||"")},[m,b,H,o,v,i,l,p,P,D,L,d,g,a,z,Q]}class Yt extends Vt{constructor(e){super(e),Et(this,e,qt,je,Pt,{t:0,modReference:11,onSubmit:12,initialValues:13,submitText:1,editing:2}),F("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:je.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Yt as V};
//# sourceMappingURL=VersionForm.1bd645c3.js.map
