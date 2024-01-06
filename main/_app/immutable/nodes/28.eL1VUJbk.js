import{S as j,i as I,s as R,A as S,D as w,H as x,m,t as y,J as z,e as b,T as F,c as k,d as $,U as P,f as d,G as v,j as g,I as A,V as U,Q as C,a as E,C as V,g as T,F as B,l as H,R as X,q,k as K}from"../chunks/vendor.SWZNLjM7.js";import{F as L}from"../chunks/FicsitCard.vIf3vevE.js";import{M as N}from"../chunks/MetaDescriptors.pGERfFUb.js";function Q(n){let o,e,t=n[0].author+"",r;return{c(){o=b("div"),e=b("span"),r=F(t),this.h()},l(l){o=k(l,"DIV",{slot:!0});var f=$(o);e=k(f,"SPAN",{});var h=$(e);r=P(h,t),h.forEach(d),f.forEach(d),this.h()},h(){v(o,"slot","stats")},m(l,f){g(l,o,f),A(o,e),A(e,r)},p(l,f){f&1&&t!==(t=l[0].author+"")&&U(r,t)},d(l){l&&d(o)}}}function J(n){let o,e;return o=new L({props:{name:n[0].name,link:n[0].link,logo:n[0].logo,description:n[0].description,$$slots:{stats:[Q]},$$scope:{ctx:n}}}),{c(){S(o.$$.fragment)},l(t){w(o.$$.fragment,t)},m(t,r){x(o,t,r),e=!0},p(t,[r]){const l={};r&1&&(l.name=t[0].name),r&1&&(l.link=t[0].link),r&1&&(l.logo=t[0].logo),r&1&&(l.description=t[0].description),r&3&&(l.$$scope={dirty:r,ctx:t}),o.$set(l)},i(t){e||(m(o.$$.fragment,t),e=!0)},o(t){y(o.$$.fragment,t),e=!1},d(t){z(o,t)}}}function O(n,o,e){let{tool:t}=o;return n.$$set=r=>{"tool"in r&&e(0,t=r.tool)},[t]}class W extends j{constructor(o){super(),I(this,o,O,J,R,{tool:0})}}function D(n,o,e){const t=n.slice();return t[1]=o[e],t}function M(n){let o,e;return o=new W({props:{tool:n[1]}}),{c(){S(o.$$.fragment)},l(t){w(o.$$.fragment,t)},m(t,r){x(o,t,r),e=!0},p:q,i(t){e||(m(o.$$.fragment,t),e=!0)},o(t){y(o.$$.fragment,t),e=!1},d(t){z(o,t)}}}function _(n){let o,e,t,r="Tools",l,f,h;o=new N({props:{description:"A collection of useful tools for Satisfactory, such as recipe calculators and save editors",title:"Tools"}});let u=C(n[0]),i=[];for(let a=0;a<u.length;a+=1)i[a]=M(D(n,u,a));const G=a=>y(i[a],1,1,()=>{i[a]=null});return{c(){S(o.$$.fragment),e=E(),t=b("h1"),t.textContent=r,l=E(),f=b("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){const c=V("svelte-5zkdli",document.head);w(o.$$.fragment,c),c.forEach(d),e=T(a),t=k(a,"H1",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-qmswt0"&&(t.textContent=r),l=T(a),f=k(a,"DIV",{class:!0});var s=$(f);for(let p=0;p<i.length;p+=1)i[p].l(s);s.forEach(d),this.h()},h(){document.title="Tools - SMR",v(t,"class","my-4 text-4xl font-bold"),v(f,"class","grid grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3")},m(a,c){x(o,document.head,null),g(a,e,c),g(a,t,c),g(a,l,c),g(a,f,c);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(f,null);h=!0},p(a,[c]){if(c&1){u=C(a[0]);let s;for(s=0;s<u.length;s+=1){const p=D(a,u,s);i[s]?(i[s].p(p,c),m(i[s],1)):(i[s]=M(p),i[s].c(),m(i[s],1),i[s].m(f,null))}for(K(),s=u.length;s<i.length;s+=1)G(s);H()}},i(a){if(!h){m(o.$$.fragment,a);for(let c=0;c<u.length;c+=1)m(i[c]);h=!0}},o(a){y(o.$$.fragment,a),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)y(i[c]);h=!1},d(a){a&&(d(e),d(t),d(l),d(f)),z(o),X(i,a)}}}function Y(n){return[[{name:"Save Editor",author:"Goz3rr",logo:"https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png",description:"A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.",link:"https://github.com/Goz3rr/SatisfactorySaveEditor"},{name:"Satisfactory Tools",author:"greeny",logo:"https://i.imgur.com/WQEHo26.png",description:"A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!",link:"https://www.satisfactorytools.com/"},{name:"Recipe Calculator",author:"KirkMcDonald",logo:"",description:"Recipe calculator using sankey diagrams.",link:"https://kirkmcdonald.github.io/satisfactory-calculator/calc.html"},{name:"Map",author:"Cornik and S4XXX",logo:"",description:"Satisfactory map based on in-game coordinates.",link:"https://www.satisfactorymap.com/"},{name:"SatisGraphtory",author:"tehalexf and thinkaliker",logo:"https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png",description:"This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!",link:"https://satisgraphtory.com/"},{name:"Satisfactory Calculator",author:"Anthor",logo:"",description:"Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)",link:"https://satisfactory-calculator.com/"},{name:"Savegame Tool",author:"SillyBits",logo:"",description:"Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities",link:"https://github.com/SillyBits/satisfactory-savegame-tool-ng"},{name:"Satisfactory UI Kit",author:"Deantendo",logo:"",description:"A UI kit for Satisfactory mods",link:"https://github.com/deantendo/sfuikit"},{name:"Ficsit.info",author:"Nevir",logo:"https://github.com/ficsit/ficsit.info/blob/master/web/assets/site-icons/maskable-512.png?raw=true",description:"Production line optimization tool, and game info database",link:"https://ficsit.info/"},{name:"Daniel's Satisfactory Tools",author:"DanielTheProgrammer",logo:"https://i.imgur.com/Ogt0r9k.png",description:"Visualize production chains, and browse items and recipes!",link:"https://daniel2013.github.io/satisfactory/"},{name:"Satisfactory Toolbox",author:"Lucek",logo:"",description:'Factory tool collection, with main tool called "factory planner" with detailed, realtime stats for production and consumption, overclocking and much more.',link:"https://toolbox.satisfactory.lucek.io/"},{name:"Satisfactory 3D Map",author:"Moritz",logo:"",description:"Shows all objects within a savegame in 3D and provides a simple version of the game world for spatial context. Additionally, all properties and values of objects are shown.",link:"https://github.com/moritz-h/satisfactory-3d-map"}]]}class at extends j{constructor(o){super(),I(this,o,Y,_,R,{})}}export{at as component};
//# sourceMappingURL=28.eL1VUJbk.js.map
