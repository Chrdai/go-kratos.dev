(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[993],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return r?o.createElement(g,l(l({ref:t},u),{},{components:r})):o.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4949:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),l={id:"api-protobuf",title:"Protobuf \u4f7f\u7528\u89c4\u8303",description:"API\u63a5\u53e3\u7edf\u4e00\u4ee5HTTP/GRPC\u4e3a\u57fa\u7840\uff0c\u5e76\u901a\u8fc7Protobuf\u8fdb\u884c\u534f\u8bae\u5b9a\u4e49\uff0c\u5305\u62ec\u5b8c\u6574\u7684Request/Reply\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u63a5\u53e3\u9519\u8bef\u7801\uff08Errors\uff09",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},p={unversionedId:"guide/api-protobuf",id:"guide/api-protobuf",isDocsHomePage:!1,title:"Protobuf \u4f7f\u7528\u89c4\u8303",description:"API\u63a5\u53e3\u7edf\u4e00\u4ee5HTTP/GRPC\u4e3a\u57fa\u7840\uff0c\u5e76\u901a\u8fc7Protobuf\u8fdb\u884c\u534f\u8bae\u5b9a\u4e49\uff0c\u5305\u62ec\u5b8c\u6574\u7684Request/Reply\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u63a5\u53e3\u9519\u8bef\u7801\uff08Errors\uff09",source:"@site/docs/guide/api-protobuf.md",sourceDirName:"guide",slug:"/guide/api-protobuf",permalink:"/docs/guide/api-protobuf",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/guide/api-protobuf.md",version:"current",frontMatter:{id:"api-protobuf",title:"Protobuf \u4f7f\u7528\u89c4\u8303",description:"API\u63a5\u53e3\u7edf\u4e00\u4ee5HTTP/GRPC\u4e3a\u57fa\u7840\uff0c\u5e76\u901a\u8fc7Protobuf\u8fdb\u884c\u534f\u8bae\u5b9a\u4e49\uff0c\u5305\u62ec\u5b8c\u6574\u7684Request/Reply\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u63a5\u53e3\u9519\u8bef\u7801\uff08Errors\uff09",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/getting-started/faq"},next:{title:"OpenAPI Swagger \u4f7f\u7528",permalink:"/docs/guide/openapi"}},i=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u5305\u540d",id:"\u5305\u540d",children:[{value:"go_package",id:"go_package",children:[]},{value:"java_package",id:"java_package",children:[]},{value:"objc_class_prefix",id:"objc_class_prefix",children:[]}]},{value:"Version",id:"version",children:[]},{value:"Import",id:"import",children:[]},{value:"\u547d\u540d\u89c4\u8303",id:"\u547d\u540d\u89c4\u8303",children:[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784-1",children:[]},{value:"\u6587\u4ef6\u7ed3\u6784",id:"\u6587\u4ef6\u7ed3\u6784",children:[]},{value:"Message \u548c \u5b57\u6bb5\u547d\u540d",id:"message-\u548c-\u5b57\u6bb5\u547d\u540d",children:[]},{value:"\u6570\u7ec4 Repeated",id:"\u6570\u7ec4-repeated",children:[]},{value:"\u679a\u4e3e Enums",id:"\u679a\u4e3e-enums",children:[]},{value:"\u670d\u52a1 Services",id:"\u670d\u52a1-services",children:[]}]},{value:"Comment",id:"comment",children:[]},{value:"Examples",id:"examples",children:[]},{value:"References",id:"references",children:[]}],s={toc:i};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u8fdb\u884c\u4fee\u8ba2Proto\u89c4\u8303\u7ea6\u5b9a\u548c\u591a\u8bed\u8a00\u4e4b\u95f4\u7279\u5b9a\u5546\u5b9a\uff0c\u5e2e\u52a9\u5927\u5bb6\u5199\u51fa\u66f4\u6807\u51c6\u7684\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"API\u63a5\u53e3\u7edf\u4e00\u4ee5HTTP/GRPC\u4e3a\u57fa\u7840\uff0c\u5e76\u901a\u8fc7Protobuf\u8fdb\u884c\u534f\u8bae\u5b9a\u4e49\uff0c\u5305\u62ec\u5b8c\u6574\u7684Request/Reply\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u63a5\u53e3\u9519\u8bef\u7801\uff08Errors\uff09\u3002"),(0,a.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("p",null,"API\u63a5\u53e3\u53ef\u4ee5\u5b9a\u4e49\u5230\u9879\u76ee\uff0c\u6216\u8005\u5728\u7edf\u4e00\u4ed3\u5e93\u4e2d\u7ba1\u7406Proto\uff0c\u7c7b\u4f3cgoogleapis\u3001envoy-api\u3001istio-api\uff1b"),(0,a.kt)("p",null,"\u9879\u76ee\u4e2d\u5b9a\u4e49Proto\uff0c\u4ee5api\u4e3a\u5305\u540d\u6839\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kratos-demo\uff1a\n|____api // \u670d\u52a1API\u5b9a\u4e49\n| |____kratos\n| | |____demo\n| | | |____v1\n| | | | |____demo.proto\n")),(0,a.kt)("p",null,"\u5728\u7edf\u4e00\u4ed3\u5e93\u4e2d\u7ba1\u7406Proto\uff0c\u4ee5\u4ed3\u5e93\u4e3a\u5305\u540d\u6839\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kratos-apis:\n|____api // \u670d\u52a1API\u5b9a\u4e49\n| |____kratos\n| | |____demo\n| | | |____v1\n| | | | |____demo.proto\n|____annotations // \u6ce8\u89e3\u5b9a\u4e49options\n|____third_party // \u7b2c\u4e09\u65b9\u5f15\u7528\n")),(0,a.kt)("h2",{id:"\u5305\u540d"},"\u5305\u540d"),(0,a.kt)("p",null,"\u5305\u540d\u4e3a\u5e94\u7528\u7684\u6807\u8bc6\uff08APP_ID\uff09\uff0c\u7528\u4e8e\u751f\u6210gRPC\u8bf7\u6c42\u8def\u5f84\uff0c\u6216\u8005Proto\u4e4b\u95f4\u8fdb\u884c\u5f15\u7528Message\uff1b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"my.package.v1\uff0c\u4e3aAPI\u76ee\u5f55\uff0c\u5b9a\u4e49service\u76f8\u5173\u63a5\u53e3\uff0c\u7528\u4e8e\u63d0\u4f9b\u4e1a\u52a1\u4f7f\u7528")),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// RequestURL: /<package_name>.<version>.<service_name>/{method}\npackage <package_name>.<version>;\n")),(0,a.kt)("h3",{id:"go_package"},"go_package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'option go_package = "github.com/go-kratos/kratos/<package_name>;<version>";\n')),(0,a.kt)("h3",{id:"java_package"},"java_package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'option java_multiple_files = true;\noption java_package = "com.github.kratos.<package_name>.<version>";\n')),(0,a.kt)("h3",{id:"objc_class_prefix"},"objc_class_prefix"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'option objc_class_prefix = "<PackageNameVersion>";\n')),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("p",null,"\u8be5\u7248\u672c\u53f7\u4e3a\u6807\u6ce8\u4e0d\u517c\u5bb9\u7248\u672c\uff0c\u5e76\u4e14\u4f1a\u5728<package_name>\u4e2d\u8fdb\u884c\u533a\u5206\uff0c\u5f53\u63a5\u53e3\u9700\u8981\u91cd\u6784\u65f6\u4e00\u822c\u4f1a\u66f4\u65b0\u4e0d\u517c\u5bb9\u7ed3\u6784\uff1b"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1proto\u4f9d\u8d56\uff0c\u4ee5\u6839\u76ee\u5f55\u8fdb\u884c\u5f15\u5165\u5bf9\u5e94\u4f9d\u8d56\u7684proto\uff1b"),(0,a.kt)("li",{parentName:"ul"},"third_party\uff0c\u4e3b\u8981\u4e3a\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9proto\uff0c\u6bd4\u5982protobuf\u3001google rpc\u3001google apis\u3001gogo\u5b9a\u4e49\uff1b")),(0,a.kt)("h2",{id:"\u547d\u540d\u89c4\u8303"},"\u547d\u540d\u89c4\u8303"),(0,a.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784-1"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("p",null,"\u5305\u540d\u4e3a\u5c0f\u5199\uff0c\u5e76\u4e14\u540c\u76ee\u5f55\u7ed3\u6784\u4e00\u81f4\uff0c\u4f8b\u5982\uff1amy/package/v1/"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"package my.package.v1;\n")),(0,a.kt)("h3",{id:"\u6587\u4ef6\u7ed3\u6784"},"\u6587\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,"\u6587\u4ef6\u5e94\u8be5\u547d\u540d\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"lower_snake_case.proto"),"\n\u6240\u6709Proto\u5e94\u6309\u4e0b\u5217\u65b9\u5f0f\u6392\u5217:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"License header (if applicable)"),(0,a.kt)("li",{parentName:"ol"},"File overview"),(0,a.kt)("li",{parentName:"ol"},"Syntax"),(0,a.kt)("li",{parentName:"ol"},"Package"),(0,a.kt)("li",{parentName:"ol"},"Imports (sorted)"),(0,a.kt)("li",{parentName:"ol"},"File options"),(0,a.kt)("li",{parentName:"ol"},"Everything else")),(0,a.kt)("h3",{id:"message-\u548c-\u5b57\u6bb5\u547d\u540d"},"Message \u548c \u5b57\u6bb5\u547d\u540d"),(0,a.kt)("p",null,"\u4f7f\u7528\u9a7c\u5cf0\u547d\u540d\u6cd5\uff08\u9996\u5b57\u6bcd\u5927\u5199\uff09\u547d\u540d message\uff0c\u4f8b\u5b50\uff1aSongServerRequest\n\u4f7f\u7528\u4e0b\u5212\u7ebf\u547d\u540d\u5b57\u6bb5\uff0c\u6817\u5b50\uff1asong_name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message SongServerRequest {\n  required string song_name = 1;\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0a\u8ff0\u8fd9\u79cd\u5b57\u6bb5\u7684\u547d\u540d\u7ea6\u5b9a\uff0c\u751f\u6210\u7684\u8bbf\u95ee\u5668\u5c06\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C++:\n  const string& song_name() { ... }\n  void set_song_name(const string& x) { ... }\n\nJava:\n  public String getSongName() { ... }\n  public Builder setSongName(String v) { ... }\n")),(0,a.kt)("h3",{id:"\u6570\u7ec4-repeated"},"\u6570\u7ec4 Repeated"),(0,a.kt)("p",null,"\u901a\u8fc7repeated\u5173\u952e\u5b57\u5b9a\u4e49\u6570\u7ec4\uff08List\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"repeated string keys = 1;\n...\nrepeated Account accounts = 17;\n")),(0,a.kt)("h3",{id:"\u679a\u4e3e-enums"},"\u679a\u4e3e Enums"),(0,a.kt)("p",null,"\u4f7f\u7528\u9a7c\u5cf0\u547d\u540d\u6cd5\uff08\u9996\u5b57\u6bcd\u5927\u5199\uff09\u547d\u540d\u679a\u4e3e\u7c7b\u578b\uff0c\u4f7f\u7528 \u201c\u5927\u5199",(0,a.kt)("em",{parentName:"p"},"\u4e0b\u5212\u7ebf"),"\u5927\u5199\u201d \u7684\u65b9\u5f0f\u547d\u540d\u679a\u4e3e\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"enum Foo {\n  FIRST_VALUE = 0;\n  SECOND_VALUE = 1;\n}\n")),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u679a\u4e3e\u503c\u4ee5\u5206\u53f7\u7ed3\u5c3e\uff0c\u800c\u975e\u9017\u53f7\u3002"),(0,a.kt)("h3",{id:"\u670d\u52a1-services"},"\u670d\u52a1 Services"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 .proto \u6587\u4ef6\u4e2d\u5b9a\u4e49 RPC \u670d\u52a1\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u9a7c\u5cf0\u547d\u540d\u6cd5\uff08\u9996\u5b57\u6bcd\u5927\u5199\uff09\u547d\u540d RPC \u670d\u52a1\u4ee5\u53ca\u5176\u4e2d\u7684 RPC \u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"service FooService {\n  rpc GetSomething(FooRequest) returns (FooResponse);\n}\n")),(0,a.kt)("h2",{id:"comment"},"Comment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service\uff0c\u63cf\u8ff0\u6e05\u695a\u670d\u52a1\u7684\u4f5c\u7528"),(0,a.kt)("li",{parentName:"ul"},"Method\uff0c\u63cf\u8ff0\u6e05\u695a\u63a5\u53e3\u7684\u529f\u80fd\u7279\u6027"),(0,a.kt)("li",{parentName:"ul"},"Field\uff0c\u63cf\u8ff0\u6e05\u695a\u5b57\u6bb5\u51c6\u786e\u7684\u4fe1\u606f")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"API Service\u63a5\u53e3\u5b9a\u4e49(demo.proto)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage kratos.demo.v1;\n\n// \u591a\u8bed\u8a00\u7279\u5b9a\u5305\u540d\uff0c\u7528\u4e8e\u6e90\u4ee3\u7801\u5f15\u7528\noption go_package = "github.com/go-kratos/kratos/demo/v1;v1";\noption java_multiple_files = true;\noption java_package = "com.github.kratos.demo.v1";\noption objc_class_prefix = "KratosDemoV1";\n\n// \u63cf\u8ff0\u8be5\u670d\u52a1\u7684\u4fe1\u606f\nservice Greeter {\n    // \u63cf\u8ff0\u8be5\u65b9\u6cd5\u7684\u529f\u80fd\n    rpc SayHello (HelloRequest) returns (HelloReply);\n}\n// Hello\u8bf7\u6c42\u53c2\u6570\nmessage HelloRequest {\n    // \u7528\u6237\u540d\u5b57\n    string name = 1;\n}\n// Hello\u8fd4\u56de\u7ed3\u679c\nmessage HelloReply {\n    // \u7ed3\u679c\u4fe1\u606f\n    string message = 1;\n}\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/style"},"https://developers.google.com/protocol-buffers/docs/style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"https://developers.google.com/protocol-buffers/docs/proto3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://colobu.com/2017/03/16/Protobuf3-language-guide/"},"https://colobu.com/2017/03/16/Protobuf3-language-guide/"))))}u.isMDXComponent=!0}}]);