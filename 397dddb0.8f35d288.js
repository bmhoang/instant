(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(6),r=(n(0),n(123)),c={id:"creating-packages",title:"How to create an Instant OpenHIE package",sidebar_label:"Create packages",keywords:["Instant OpenHIE","How to","Creating packages"],description:"How to create an Instant OpenHIE package"},i={id:"how-to/creating-packages",title:"How to create an Instant OpenHIE package",description:"How to create an Instant OpenHIE package",source:"@site/docs/how-to/creating-packages.mdx",permalink:"/instant/docs/how-to/creating-packages",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/how-to/creating-packages.mdx",sidebar_label:"Create packages",sidebar:"docs",previous:{title:"Packages",permalink:"/instant/docs/concepts/package-arch"},next:{title:"How to setup managed Kubernetes in the cloud",permalink:"/instant/docs/how-to/setup-kubernetes-in-cloud"}},s=[{value:"Docker Compose files",id:"docker-compose-files",children:[]},{value:"Kubernetes resources",id:"kubernetes-resources",children:[]},{value:"instant.json",id:"instantjson",children:[]},{value:"Bash scripts",id:"bash-scripts",children:[]},{value:"How to execute your new package",id:"how-to-execute-your-new-package",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),Object(r.b)("p",null,"Packages are a way of allowing a group of applications to be setup and configured to enable a particular set of functionality. Each package ",Object(r.b)("strong",{parentName:"p"},"MUST")," include a the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"docker-compose.*.yml")," files to setup and configure the necessary applications in Docker Compose"),Object(r.b)("li",{parentName:"ol"},"Deployment and service resource files (and any other necessary resource files) to setup and configure the necessary applications in Kubernetes"),Object(r.b)("li",{parentName:"ol"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"instant.json")," file that holds metadata about the package"),Object(r.b)("li",{parentName:"ol"},"Bash scripts that accept a particular set of commands (up, down or destroy) and execute these Docker Compose and Kubernetes infrastructure files and any other necessary processing and configuration to perform the required command.")),Object(r.b)("h2",{id:"docker-compose-files"},"Docker Compose files"),Object(r.b)("p",null,"All Docker Compose files should by convention be contained in a ",Object(r.b)("inlineCode",{parentName:"p"},"./docker")," directory in the root of the package directory. It is often useful to split up Docker Compose files into separate files with different purposes. For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docker-compose.yml")," for the main application setup and orchestration"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docker-compose.config.yml")," for starting short lived containers that configure the applications or add any test data that is necessary"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docker-compose.dev.yml")," for over-ridding options in the main compose file to allow for easier development. For example, to expose all ports to the host even those that should be protected")),Object(r.b)("h2",{id:"kubernetes-resources"},"Kubernetes resources"),Object(r.b)("p",null,"All Kubernetes files should by convention be contained in a ",Object(r.b)("inlineCode",{parentName:"p"},"./kubernetes")," directory in the root of the package directory. It is recommended to use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/"}),"declarative form")," of Kubernetes resources. The key resources to define are deployments and services for each component."),Object(r.b)("p",null,"Config containers can be executed as job resources with an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"}),"init container"),". These temporary containers only configure the main application once the service has started up."),Object(r.b)("h2",{id:"instantjson"},"instant.json"),Object(r.b)("p",null,"This file should be in the root directory of the package and provide metadata about the package itself along with any dependencies:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "abc",\n  "name": "XYZ",\n  "description": "...",\n  "type": "use-case", // options: infrastructure | use-case\n  "version": "v0.0.1",\n  "dependencies": ["core", "healthworkforce"] // list of package ids\n}\n')),Object(r.b)("h2",{id:"bash-scripts"},"Bash scripts"),Object(r.b)("p",null,"Two bash scripts are required in each package:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"./docker/compose.sh")," - to configure, start and stop the applications using Docker Compose"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"./kubernetes/main/k8s.sh")," - to configure, start and stop the applications using Kubernetes")),Object(r.b)("p",null,"Each of these scripts should accept one of the following commands (i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"./compose.sh <command>"),"):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"init")," - start all the applications in this package and performs any necessary pre-processing of the infrastructure files"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"up")," - start all the applications in this package"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"down")," - stop all the applications in this package"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"destroy")," - delete all the application containers in this package and all their stored data")),Object(r.b)("p",null,"For example, a ",Object(r.b)("inlineCode",{parentName:"p"},"compose.sh")," script could look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'composeFilePath=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )\n\nif [ "$1" == "init" ]; then\n    # execute other setup scripts or commands here\n    # ...\n\n    docker-compose -f "$composeFilePath"/docker-compose.yml -f "$composeFilePath"/importer/docker-compose.config.yml up -d\nelif [ "$1" == "up" ]; then\n    docker-compose -f "$composeFilePath"/docker-compose.yml -f "$composeFilePath"/importer/docker-compose.config.yml up -d\nelif [ "$1" == "down" ]; then\n    docker-compose -f "$composeFilePath"/docker-compose.yml -f "$composeFilePath"/importer/docker-compose.config.yml stop\nelif [ "$1" == "destroy" ]; then\n    docker-compose -f "$composeFilePath"/docker-compose.yml  -f "$composeFilePath"/importer/docker-compose.config.yml down -v\nelse\n    echo "Valid options are: init, up, down, or destroy"\nfi\n')),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"k8s.sh")," script could look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'#!/bin/bash\n\nk8sMainRootFilePath=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )\n\nif [ "$1" == "init" ]; then\n    # execute other setup scripts or commands here\n    # ...\n\n    # Create the namespace\n    kubectl apply -f $k8sMainRootFilePath/healthworkforce-namespace.yaml\n    kubectl apply -k $k8sMainRootFilePath\nelif [ "$1" == "up" ]; then\n    # Create the namespace\n    kubectl apply -f $k8sMainRootFilePath/healthworkforce-namespace.yaml\n    kubectl apply -k $k8sMainRootFilePath\nelif [ "$1" == "down" ]; then\n    kubectl delete deployment mapper-deployment\nelif [ "$1" == "destroy" ]; then\n    kubectl delete namespaces hwf-package\nelse\n    echo "Valid options are: up, down, or destroy"\nfi\n')),Object(r.b)("p",null,"The Instant OpenHIE executable will look for these scripts and ensure that they are executed to start-up a package. Packages will be started in their dependency order beginning with the ",Object(r.b)("inlineCode",{parentName:"p"},"core")," package."),Object(r.b)("h2",{id:"how-to-execute-your-new-package"},"How to execute your new package"),Object(r.b)("p",null,"Mount your package into the openhie/instant container when it is run to start the packages. It will automatically detect packages folders in the ",Object(r.b)("inlineCode",{parentName:"p"},"/instant")," folder and will execute them as described above. For a package to be detected it must have an ",Object(r.b)("inlineCode",{parentName:"p"},"instant.json")," file in the root folder of the package."))}l.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||r;return n?o.a.createElement(m,i({ref:t},p,{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);