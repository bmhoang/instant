(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return h}));var n=a(1),r=a(6),i=(a(0),a(123)),o=a(124),c={id:"health-workforce",title:"Health-Workforce",sidebar_label:"Health-Workforce",keywords:["Instant OpenHIE","Health","Workforce","Package"],description:"The health-workforce package of the Instant OpenHIE"},s={id:"packages/health-workforce",title:"Health-Workforce",description:"The health-workforce package of the Instant OpenHIE",source:"@site/docs/packages/health-workforce.mdx",permalink:"/instant/docs/packages/health-workforce",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/packages/health-workforce.mdx",sidebar_label:"Health-Workforce",sidebar:"docs",previous:{title:"Core Package",permalink:"/instant/docs/packages/core"},next:{title:"Architecture",permalink:"/instant/docs/more-info/architecture"}},p=[{value:"Package functionality",id:"package-functionality",children:[]},{value:"Deployment strategy",id:"deployment-strategy",children:[]}],l={rightToc:p};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This package is still under development"))),Object(i.b)("h2",{id:"package-functionality"},"Package functionality"),Object(i.b)("p",null,"This package sets up the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ihris.org/"}),"iHRIS")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://facility-recon.readthedocs.io/en/latest/"}),"GOFR")," applications which act as a Provider and Facility registry respectively.\nThey are able to be queried for facility and practitioner information using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.ihe.net/index.php/Mobile_Care_Services_Discovery_(mCSD)"}),"mCSD IHE profile"),"."),Object(i.b)("p",null,"It also sets up a mediator that synchronises (using mCSD) practitioner and facility data with the central FHIR store that is provided by the core package.\nThis allows the user of the HIE to query this interlinked data from a single location.\nThe end goal is to enable answering questions such as the one in the following scenario:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"A doctor, Joseph, at a rural clinic wants to refer a patient, Mousa, to an Oncologist because of a lump that they suspect may be cancerous.\nThey are able to look up a list of specialists that offer that service in their EMR system.\nThey choose a particular specialist and find out the facilities in which they work.\nA referral can now be produced by the EMR for the patient and they can be sent to that facility for their visit.")),Object(i.b)("p",null,"An example of what the Health-Workforce package includes and how it interacts with components of the core package is shown below."),Object(i.b)("div",{class:"text--center"},Object(i.b)("img",{alt:"Package architecture",src:Object(o.a)("img/instant-ohie-generic-arch.png")})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"PractitionerRole -> Practitioner -> Facility")),Object(i.b)("p",null,"This package aims to enable the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.ohie.org/pages/viewpage.action?pageId=22053221"}),"Query health worker and/or facility records workflow")," using the newer ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.ihe.net/index.php/Mobile_Care_Services_Discovery_(mCSD)"}),"mCSD IHE profile"),"."),Object(i.b)("h2",{id:"deployment-strategy"},"Deployment strategy"),Object(i.b)("p",null,"TODO"))}h.isMDXComponent=!0},122:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},h=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=n,u=h["".concat(o,".").concat(d)]||h[d]||b[d]||i;return a?r.a.createElement(u,c({ref:t},p,{components:a})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(122);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);