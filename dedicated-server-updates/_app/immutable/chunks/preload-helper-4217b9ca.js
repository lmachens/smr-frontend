const l="modulepreload",o={},a="/smr-frontend/dedicated-server-updates/_app/",f=function(s,n){return!n||n.length===0?s():Promise.all(n.map(e=>{if(e=`${a}${e}`,e in o)return;o[e]=!0;const t=e.endsWith(".css"),d=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${d}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":l,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t)return new Promise((i,c)=>{r.addEventListener("load",i),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};export{f as _};
//# sourceMappingURL=preload-helper-4217b9ca.js.map
