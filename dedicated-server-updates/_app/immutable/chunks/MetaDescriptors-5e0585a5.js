import{S as N,i as j,s as v,a as g,e as h,g as M,c as y,a7 as l,j as m,q as E,f as u,al as x,aa as T,d as $,ab as A,a5 as S,ac as q}from"./vendor-5faff0be.js";import{p as I}from"./stores-a6f790a9.js";import{b as L}from"./paths-1c47712a.js";function R(a){let e,t,f,p,r;return{c(){e=h("meta"),t=g(),f=h("meta"),p=g(),r=h("meta"),this.h()},l(n){e=y(n,"META",{name:!0,content:!0}),t=M(n),f=y(n,"META",{property:!0,content:!0}),p=M(n),r=y(n,"META",{property:!0,content:!0}),this.h()},h(){l(e,"name","description"),l(e,"content",a[0]),l(f,"property","description"),l(f,"content",a[0]),l(r,"property","og:description"),l(r,"content",a[0])},m(n,o){m(n,e,o),m(n,t,o),m(n,f,o),m(n,p,o),m(n,r,o)},p(n,o){o&1&&l(e,"content",n[0]),o&1&&l(f,"content",n[0]),o&1&&l(r,"content",n[0])},d(n){n&&u(e),n&&u(t),n&&u(f),n&&u(p),n&&u(r)}}}function k(a){let e;return{c(){e=h("meta"),this.h()},l(t){e=y(t,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property","og:image"),l(e,"content",L+"/assets/favicon.ico")},m(t,f){m(t,e,f)},p:E,d(t){t&&u(e)}}}function w(a){let e;return{c(){e=h("meta"),this.h()},l(t){e=y(t,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property","og:image"),l(e,"content",a[1])},m(t,f){m(t,e,f)},p(t,f){f&2&&l(e,"content",t[1])},d(t){t&&u(e)}}}function b(a){let e,t,f,p,r,n;return{c(){e=h("title"),t=T(a[2]),f=T(" - SMR"),p=g(),r=h("meta"),this.h()},l(o){e=y(o,"TITLE",{});var s=$(e);t=A(s,a[2]),f=A(s," - SMR"),s.forEach(u),p=M(o),r=y(o,"META",{property:!0,content:!0}),this.h()},h(){l(r,"property","og:title"),l(r,"content",n=a[2]+" - SMR")},m(o,s){m(o,e,s),S(e,t),S(e,f),m(o,p,s),m(o,r,s)},p(o,s){s&4&&q(t,o[2]),s&4&&n!==(n=o[2]+" - SMR")&&l(r,"content",n)},d(o){o&&u(e),o&&u(p),o&&u(r)}}}function z(a){let e,t,f,p,r=a[0]&&R(a);function n(i,d){return i[1]?w:k}let o=n(a),s=o(a),c=a[2]&&b(a);return{c(){r&&r.c(),e=g(),s.c(),t=g(),c&&c.c(),f=g(),p=h("meta"),this.h()},l(i){r&&r.l(i),e=M(i),s.l(i),t=M(i),c&&c.l(i),f=M(i),p=y(i,"META",{property:!0,content:!0}),this.h()},h(){l(p,"property","og:url"),l(p,"content",""+(a[3]+a[4]))},m(i,d){r&&r.m(i,d),m(i,e,d),s.m(i,d),m(i,t,d),c&&c.m(i,d),m(i,f,d),m(i,p,d)},p(i,[d]){i[0]?r?r.p(i,d):(r=R(i),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o===(o=n(i))&&s?s.p(i,d):(s.d(1),s=o(i),s&&(s.c(),s.m(t.parentNode,t))),i[2]?c?c.p(i,d):(c=b(i),c.c(),c.m(f.parentNode,f)):c&&(c.d(1),c=null)},i:E,o:E,d(i){r&&r.d(i),i&&u(e),s.d(i),i&&u(t),c&&c.d(i),i&&u(f),i&&u(p)}}}function B(a,e,t){let f;x(a,I,c=>t(5,f=c));const p=f.url.host,r=f.url.pathname;let{description:n=void 0}=e,{image:o=void 0}=e,{title:s=void 0}=e;return a.$$set=c=>{"description"in c&&t(0,n=c.description),"image"in c&&t(1,o=c.image),"title"in c&&t(2,s=c.title)},[n,o,s,p,r]}class G extends N{constructor(e){super(),j(this,e,B,z,v,{description:0,image:1,title:2})}}export{G as M};
//# sourceMappingURL=MetaDescriptors-5e0585a5.js.map
