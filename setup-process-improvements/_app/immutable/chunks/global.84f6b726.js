import{X as s}from"./vendor.9e4e80bb.js";const h=s(!1);let r;r=window.matchMedia("(min-width: 1280px)");const f=s(r&&!r.matches),i=s(!1),w=s(!1),l=s(!1);r.addEventListener("change",e=>{f&&f.set(!e.matches)});{const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA","Space"],t=[];window.onkeyup=n=>{if(t.push(n.code),t.length>e.length&&t.shift(),t.length==e.length){let a=!0;for(let o=0;o<e.length;o++)if(e[o]!==t[o]){a=!1;break}a&&w.set(!0)}n.code=="KeyD"&&i.set(!0)}}export{i as d,w as e,h as l,f as o,l as s};
//# sourceMappingURL=global.84f6b726.js.map
