(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(6),i=(n(0),n(112)),a={id:"vision",title:"Vision",sidebar_label:"Vision",keywords:["InstantHIE","Vision"],description:"The vision of Instant OpenHIE"},s={id:"introduction/vision",title:"Vision",description:"The vision of Instant OpenHIE",source:"@site/docs/introduction/vision.md",permalink:"/instant/docs/introduction/vision",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction/vision.md",sidebar_label:"Vision",sidebar:"docs",previous:{title:"Overview",permalink:"/instant/docs/introduction/overview"},next:{title:"Running Instant OpenHIE",permalink:"/instant/docs/introduction/running"}},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"At maturity, Instant OpenHIE activities will provide portable, launchable versions of multiple OpenHIE components to facilitate:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Demonstrable reference products -- those that align with the OpenHIE Community's vision for low resource contexts"),Object(i.b)("li",{parentName:"ul"},"Rapid software development of mediators and point-of-service systems by making it possible to launch several applications easily so the developer can focus on their task"),Object(i.b)("li",{parentName:"ul"},"Reproducible, version-controlled infrastructure for user-contributed tests of the OpenHIE Architecture profiles, workflows, and use cases."),Object(i.b)("li",{parentName:"ul"},"Production-ready containers and orchestratable components that are deployable in any context.")),Object(i.b)("p",null,"The first phase of activities addresses items 1-2 while production-ready deployments and infrastructure for testing will be built incrementally upon the innovations and lessons learnt from the efforts of the earlier phase."),Object(i.b)("p",null,"Deploying and managing private health information on patients and providers is among the most sensitive of any data. It is critical to ensure security and privacy, backups and data recovery, authentication, authorization and other enterprise standards. At maturity, Instant OpenHIE would provide production-ready containers and some orchestration assets, such as Kubernetes manifests, but these would be borrowed from Instant OpenHIE and still managed by implementers, who are responsible for databases, upgrades, privacy, security, backups and recovery, authentication, authorization, and other production-ready concerns. Instant OpenHIE would be a way for implementers to develop their tooling around the OpenHIE Architecture and the versions of it, rather than as a substitute for enterprise HIS implementation, support and management."))}l.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(b,s({ref:t},u,{components:n})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);