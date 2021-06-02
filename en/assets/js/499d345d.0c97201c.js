(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[336],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7957:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={id:"wire",title:"Dependency Injection"},c={unversionedId:"guide/wire",id:"guide/wire",isDocsHomePage:!1,title:"Dependency Injection",description:"Wire is a compile-time dependency injection tool.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/wire.md",sourceDirName:"guide",slug:"/guide/wire",permalink:"/en/docs/guide/wire",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/guide/wire.md",version:"current",frontMatter:{id:"wire",title:"Dependency Injection"},sidebar:"docs",previous:{title:"OpenAPI Swagger \u4f7f\u7528",permalink:"/en/docs/guide/openapi"},next:{title:"Ent",permalink:"/en/docs/guide/ent"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Terms",id:"terms",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Component Initialization",id:"component-initialization",children:[]},{value:"References",id:"references",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wire")," is a compile-time dependency injection tool."),(0,o.kt)("p",null,"It is recommended that doing explicit initialization rather than using global variables."),(0,o.kt)("p",null,"Generating the initialization codes by ",(0,o.kt)("em",{parentName:"p"},"Wire")," can reduce the coupling among components and increase the maintainability of the project."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/google/wire/cmd/wire\n")),(0,o.kt)("h3",{id:"terms"},"Terms"),(0,o.kt)("p",null,"There are two basic terms in wire, ",(0,o.kt)("em",{parentName:"p"},"Provider")," and ",(0,o.kt)("em",{parentName:"p"},"Injector"),"."),(0,o.kt)("p",null,"Provider is a ",(0,o.kt)("em",{parentName:"p"},"Go Func"),", it can also receive the values from other ",(0,o.kt)("em",{parentName:"p"},"Provider"),"s for dependency injection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// provides a config file\nfunc NewConfig() *conf.Data {...}\n\n// provides the data component (the initialization of database, cache and etc.) which depends on the data config.\nfunc NewData(c *conf.Data) (*Data, error) {...}\n\n// provides persistence components (implementation of CRUD persistence) which depends on the data component.\nfunc NewUserRepo(d *data.Data) (*UserRepo, error) {...}\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In Kratos project, there are four major modules, ",(0,o.kt)("em",{parentName:"p"},"server, service, biz and data"),". They will be initialized by ",(0,o.kt)("em",{parentName:"p"},"Wire"),"."),(0,o.kt)("img",{src:"/images/wire.png",alt:"kratos ddd",width:"650px"}),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"ProviderSet")," should be provided in every module so that wire could scan them and generate the DI codes."),(0,o.kt)("p",null,"First, you should define ProviderSet in the entry of every module.\nThe "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"-data\n--data.go    // var ProviderSet = wire.NewSet(NewData, NewGreeterRepo)\n--greeter.go // func NewGreeterRepo(data *Data, logger log.Logger) biz.GreeterRepo {...}\n")),(0,o.kt)("p",null,"Then put these ",(0,o.kt)("em",{parentName:"p"},"ProviderSet")," in the ",(0,o.kt)("em",{parentName:"p"},"wire.go")," for DI configuration."),(0,o.kt)("h3",{id:"component-initialization"},"Component Initialization"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wire.go")," is required for DI. The kratos application is for lifecycle management."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// the entry point of the application\ncmd\n-main.go\n-wire.go\n-wire_gen.go\n\n// main.go creates the kratos application for lifecycle management.\nfunc newApp(logger log.Logger, hs *http.Server, gs *grpc.Server, greeter *service.GreeterService) *kratos.App {\n    pb.RegisterGreeterServer(gs, greeter)\n    pb.RegisterGreeterHTTPServer(hs, greeter)\n    return kratos.New(\n        kratos.Name(Name),\n        kratos.Version(Version),\n        kratos.Logger(logger),\n        kratos.Server(\n            hs,\n            gs,\n        ),\n    )\n}\n\n// wire.go initialization\nfunc initApp(*conf.Server, *conf.Data, log.Logger) (*kratos.App, error) {\n    //  builds ProviderSet in every modules, for the generation of wire_gen.go\n    panic(wire.Build(server.ProviderSet, data.ProviderSet, biz.ProviderSet, service.ProviderSet, newApp))\n}\n")),(0,o.kt)("p",null,"run ",(0,o.kt)("inlineCode",{parentName:"p"},"go generate")," command in main directory to generate DI codes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go generate ./...\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.golang.org/wire"},"https://blog.golang.org/wire")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/wire"},"https://github.com/google/wire")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@dche423/master-wire-cn-d57de86caa1b"},"https://medium.com/@dche423/master-wire-cn-d57de86caa1b"))))}s.isMDXComponent=!0}}]);