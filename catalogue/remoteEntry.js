var Catalogue;(()=>{"use strict";var e,r,t,a,n,o,i,l,u,s,f,d,c,h,p={922:(e,r,t)=>{var a={"./Catalogue":()=>Promise.all([t.e(819),t.e(988),t.e(442)]).then((()=>()=>t(7793)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},v={};function m(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return p[e](t,t.exports,m),t.exports}m.m=p,m.c=v,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+".js",m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="catalogue:",m.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+n){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,m.nc&&i.setAttribute("nonce",m.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var d=(r,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var o=m.S[t],i="catalogue",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(l("@material-ui/styles","4.11.5",(()=>Promise.all([m.e(46),m.e(988),m.e(406)]).then((()=>()=>m(1046))))),l("react-dom","17.0.2",(()=>Promise.all([m.e(935),m.e(264)]).then((()=>()=>m(3935))))),l("react-router-dom","5.3.0",(()=>Promise.all([m.e(338),m.e(500),m.e(101)]).then((()=>()=>m(3338))))),l("react","17.0.2",(()=>m.e(976).then((()=>()=>m(7294)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var r=m.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!u||("u"==d?l>a&&!n:""==d!=n);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=a){if(s!=e[l])return!1}else{if(n?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(n||l<=a)return!1;u=!1,l--}else{if(l<=a||f<d!=n)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},l=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",u=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,n,a)),s(e[t][n])},s=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,a,n){var o=m.I(r);return o&&o.then?o.then(e.bind(e,r,m.S[r],t,a,n)):e(0,m.S[r],t,a,n)})(((e,r,t,a,n)=>r&&m.o(r,t)?u(r,0,t,a):n())),d={},c={8988:()=>f("default","react",[,[1,17,0,0],[1,16,8,0],1],(()=>m.e(976).then((()=>()=>m(7294))))),3264:()=>f("default","react",[4,17,0,2],(()=>m.e(294).then((()=>()=>m(7294))))),2878:()=>f("default","react",[,[1,17,0,0],[1,16,0,0],[1,15,0,0],[2,0,14,0],1,1,1],(()=>m.e(976).then((()=>()=>m(7294))))),3410:()=>f("default","react",[0,15],(()=>m.e(976).then((()=>()=>m(7294))))),1734:()=>f("default","react-dom",[,[1,17,0,0],[1,16,8,0],1],(()=>Promise.all([m.e(935),m.e(264)]).then((()=>()=>m(3935))))),2950:()=>f("default","react",[1,17,0,2],(()=>m.e(976).then((()=>()=>m(7294))))),3650:()=>f("default","@material-ui/styles",[1,4,11,5],(()=>Promise.all([m.e(46),m.e(988)]).then((()=>()=>m(1046))))),5055:()=>f("default","react-router-dom",[1,5,3,0],(()=>Promise.all([m.e(338),m.e(500)]).then((()=>()=>m(3338))))),9181:()=>f("default","react",[0,16,6,0],(()=>m.e(976).then((()=>()=>m(7294)))))},h={264:[3264],442:[1734,2950,3650,5055,9181],500:[2878,3410],988:[8988]},m.f.consumes=(e,r)=>{m.o(h,e)&&h[e].forEach((e=>{if(m.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},a=r=>{delete d[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var n=c[e]();n.then?r.push(d[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={13:0};m.f.j=(r,t)=>{var a=m.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(264|500|988)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=m.p+m.u(r),i=new Error;m.l(o,(t=>{if(m.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)m.o(i,a)&&(m.m[a]=i[a]);l&&l(m)}for(r&&r(t);u<o.length;u++)n=o[u],m.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkcatalogue=self.webpackChunkcatalogue||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var g=m(922);Catalogue=g})();