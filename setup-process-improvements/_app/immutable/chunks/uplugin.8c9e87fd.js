import{f as a}from"./api.44414049.js";import"./user.8a06633c.js";import"./vendor.9e4e80bb.js";import{V as l}from"./extras.d8b81759.js";let i;const f=new Promise(e=>i=e);fetch(a+"/static/uplugin-json-schema.json").then(e=>e.json()).then(e=>i(new l(e)));const m=(e,o)=>{const r=new RegExp("\\['?(.+?)'?\\]|\\.([^\\.\\[\\]]+)","gm");try{let n=e,t=r.exec(o);for(;t!==null;)n=n[t[1]||t[2]],t=r.exec(o);return n}catch{}},v=async e=>{const o=await f;try{const r=JSON.parse(e),n=o.validate(r);return n.valid?[]:n.errors.map(t=>{if(t.keyword==="$ref")return;let c="`"+t.instanceLocation+"`";const s=m(r,t.instanceLocation);return typeof s!="object"&&(c+=' **"'+s+'"**'),c+=": "+t.error,c}).filter(t=>!!t)}catch{return["Invalid JSON"]}};export{v};
//# sourceMappingURL=uplugin.8c9e87fd.js.map
