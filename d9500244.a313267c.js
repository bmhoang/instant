(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(6),c=(a(0),a(123)),o=a(124),i={id:"package-arch",title:"Packages",sidebar_label:"Packages",keywords:["Instant OpenHIE","Packages","Architecture"],description:"A description of the instant OpenHIE package architecture"},s={id:"concepts/package-arch",title:"Packages",description:"A description of the instant OpenHIE package architecture",source:"@site/docs/concepts/package-arch.mdx",permalink:"/instant/docs/concepts/package-arch",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/concepts/package-arch.mdx",sidebar_label:"Packages",sidebar:"docs",previous:{title:"Overview",permalink:"/instant/docs/concepts/overview"},next:{title:"How to create an Instant OpenHIE package",permalink:"/instant/docs/how-to/creating-packages"}},p=[],u={rightToc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),Object(c.b)("p",null,"The fundamental concept of Instant OpenHIE is that it can be extended to support additional use cases and workflows. This is achieved through packages. A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/instant/docs/packages/core"}),"core package")," has been produced from which all other packages will be derived. A package will either extend directly from the core package or from another existing package."),Object(c.b)("p",null,"A package is intended to encompass a set of functionality rather than just setup generic applications. Packages are expected to configure the applications so that they may enact a particular functional role with the HIE. This may include setting up test data and pre-configuring applications."),Object(c.b)("p",null,"Packages can be one of two different types. An ",Object(c.b)("strong",{parentName:"p"},"infrastructural package")," and a ",Object(c.b)("strong",{parentName:"p"},"use case package"),". Infrastructural packages setup and configure particular applications or sets of applications that may be grouped together. By themselves, these packages only start the applications and they aren't configured for a particular use case. On the other hand, use case packages rely on infrastructural packages and configure the applications set up by them and setup additional mediators that allow applications to work together. They do this to enable a particular use case to be enacted. You can think of use case packages as adding features for the end-user whereas infrastructural packages provide the dependencies to the use case packages that enable the feature to work."),Object(c.b)("p",null,"Each package will contain the following types of technical artefacts:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Docker Compose scripts for setting up the applications required for this package\u2019s use cases and workflows"),Object(c.b)("li",{parentName:"ul"},"Kubernetes scripts for setting up the applications required for this package\u2019s use cases and workflows"),Object(c.b)("li",{parentName:"ul"},"Configuration scripts to setup required configuration metadata"),Object(c.b)("li",{parentName:"ul"},"Extensions to the test harness to test the added use cases with test data")),Object(c.b)("p",null,"The below diagram shows how packages will extend off of each other to add use cases of increasing complexity."),Object(c.b)("div",{class:"text--center"},Object(c.b)("img",{alt:"Package architecture",src:Object(o.a)("img/instant-openhie-package-arch.png")})),Object(c.b)("p",null,"Several essential packages are bundled with Instant OpenHIE. However, it is designed to be extended for implementation-specific needs. See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/instant/docs/how-to/creating-packages"}),"creating packages")," for more information on how to create your own packages to extend Instant OpenHIE."))}l.isMDXComponent=!0},122:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(a),b=n,f=l["".concat(o,".").concat(b)]||l[b]||d[b]||c;return a?r.a.createElement(f,i({ref:t},p,{components:a})):r.a.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(122);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);