import{a as i}from"./api.853e29e3.js";import"./user.9e10729f.js";import{V as l}from"./extras.c417106d.js";let a;const u=new Promise(e=>a=e);fetch(i+"/static/uplugin-json-schema.json").then(e=>e.json()).then(e=>a(new l(e)));const f=(e,o)=>{const r=new RegExp("\\['?(.+?)'?\\]|\\.([^\\.\\[\\]]+)","gm");try{let n=e,t=r.exec(o);for(;t!==null;)n=n[t[1]||t[2]],t=r.exec(o);return n}catch{}},d=async e=>{const o=await u;try{const r=JSON.parse(e),n=o.validate(r);return n.valid?[]:n.errors.map(t=>{if(t.keyword==="$ref")return;let c="`"+t.instanceLocation+"`";const s=f(r,t.instanceLocation);return typeof s!="object"&&(c+=' **"'+s+'"**'),c+=": "+t.error,c}).filter(t=>!!t)}catch{return["Invalid JSON"]}};export{d as v};
//# sourceMappingURL=uplugin.6911ef0a.js.map
