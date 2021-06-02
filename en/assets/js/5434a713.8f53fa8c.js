(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4289:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i={id:"api-protobuf",title:"Protobuf Guideline"},l={unversionedId:"guide/api-protobuf",id:"guide/api-protobuf",isDocsHomePage:!1,title:"Protobuf Guideline",description:"This documentation is the guideline of Protobuf definition which recommended in Kratos project.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/api-protobuf.md",sourceDirName:"guide",slug:"/guide/api-protobuf",permalink:"/en/docs/guide/api-protobuf",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/guide/api-protobuf.md",version:"current",frontMatter:{id:"api-protobuf",title:"Protobuf Guideline"},sidebar:"docs",previous:{title:"FAQ",permalink:"/en/docs/getting-started/faq"},next:{title:"OpenAPI Swagger \u4f7f\u7528",permalink:"/en/docs/guide/openapi"}},s=[{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Package",id:"package",children:[{value:"go_package",id:"go_package",children:[]},{value:"java_package",id:"java_package",children:[]},{value:"objc_class_prefix",id:"objc_class_prefix",children:[]}]},{value:"Version",id:"version",children:[]},{value:"Import",id:"import",children:[]},{value:"Naming Convention",id:"naming-convention",children:[{value:"Directory Structure",id:"directory-structure-1",children:[]},{value:"File Structure",id:"file-structure",children:[]},{value:"Message &amp; Field Naming",id:"message--field-naming",children:[]},{value:"Repeated",id:"repeated",children:[]},{value:"Enums",id:"enums",children:[]},{value:"Services",id:"services",children:[]}]},{value:"Comment",id:"comment",children:[]},{value:"Examples",id:"examples",children:[]},{value:"References",id:"references",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This documentation is the guideline of Protobuf definition which recommended in Kratos project."),(0,a.kt)("p",null,"The API definition is based on HTTP and gRPC, written with Protobuf format They should includes all the Request, Reply and the corresponding Errors."),(0,a.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("p",null,"The definition of Proto could be either in ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," directory of the project or in a unified repository, likes googleapis, envoy-api,istio-api."),(0,a.kt)("p",null,"For the proto in project, the api should be used as the root of package name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos-demo\uff1a\n|____api // The definition of service's API\n| |____kratos\n| | |____demo\n| | | |____v1\n| | | | |____demo.proto\n")),(0,a.kt)("p",null,"For the proto in unified repository, the repository name should be used as the root of package name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kratos-apis:\n|____api // The definition of service's API\n| |____kratos\n| | |____demo\n| | | |____v1\n| | | | |____demo.proto\n|____annotations // the options annotations\n|____third_party // third-party protos\n")),(0,a.kt)("h2",{id:"package"},"Package"),(0,a.kt)("p",null,"The name of the package (APP_ID) will be used for generate the request path of gRPC API or the path for proto importing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"my.package.v1 is the API's directory, which defines the API of the services.")),(0,a.kt)("p",null,"For example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// RequestURL: /<package_name>.<version>.<service_name>/{method}\npackage <package_name>.<version>;\n")),(0,a.kt)("h3",{id:"go_package"},"go_package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'option go_package = "github.com/go-kratos/kratos/<package_name>;<version>";\n')),(0,a.kt)("h3",{id:"java_package"},"java_package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'option java_multiple_files = true;\noption java_package = "com.github.kratos.<package_name>.<version>";\n')),(0,a.kt)("h3",{id:"objc_class_prefix"},"objc_class_prefix"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'option objc_class_prefix = "<PackageNameVersion>";\n')),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("p",null,"This version is for incompatible version and always used with ",(0,a.kt)("inlineCode",{parentName:"p"},"<package_name>"),". It should be modified for API breaking changes."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the proto dependencies' import path should be started from root path."),(0,a.kt)("li",{parentName:"ul"},"third_party, includes the proto from third-party such as protobuf, google rpc,google apis, gogo etc.")),(0,a.kt)("h2",{id:"naming-convention"},"Naming Convention"),(0,a.kt)("h3",{id:"directory-structure-1"},"Directory Structure"),(0,a.kt)("p",null,"The package name should be lower-case, consist with the project directory structure, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"my/package/v1/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"package my.package.v1;\n")),(0,a.kt)("h3",{id:"file-structure"},"File Structure"),(0,a.kt)("p",null,"The name of proto files should be ",(0,a.kt)("inlineCode",{parentName:"p"},"lower_snake_case.proto"),"\nThe contents of proto file should be arranged as follows."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"License header (if applicable)"),(0,a.kt)("li",{parentName:"ol"},"File overview"),(0,a.kt)("li",{parentName:"ol"},"Syntax"),(0,a.kt)("li",{parentName:"ol"},"Package"),(0,a.kt)("li",{parentName:"ol"},"Imports (sorted)"),(0,a.kt)("li",{parentName:"ol"},"File options"),(0,a.kt)("li",{parentName:"ol"},"Everything else")),(0,a.kt)("h3",{id:"message--field-naming"},"Message & Field Naming"),(0,a.kt)("p",null,"The name of message should be PascalCase, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"SongServerRequest"),".\nThe name of field should be snake_case, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"song_name")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message SongServerRequest {\n  required string song_name = 1;\n}\n")),(0,a.kt)("p",null,"Corresponding with the definitions which mentioned above, the generated code can be shown as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C++:\n  const string& song_name() { ... }\n  void set_song_name(const string& x) { ... }\n\nJava:\n  public String getSongName() { ... }\n  public Builder setSongName(String v) { ... }\n")),(0,a.kt)("h3",{id:"repeated"},"Repeated"),(0,a.kt)("p",null,"Using keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"repeated")," to define an array(List):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"repeated string keys = 1;\n...\nrepeated Account accounts = 17;\n")),(0,a.kt)("h3",{id:"enums"},"Enums"),(0,a.kt)("p",null,"The name of enums should be PascalCase, and the enum values' name should be UPPER_CASE_SNAKE_CASE."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"enum Foo {\n  FIRST_VALUE = 0;\n  SECOND_VALUE = 1;\n}\n")),(0,a.kt)("p",null,"Every line must be end with a semicolon (;) rather than comma."),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("p",null,"In the .proto file, PascalCase should be applied on names of RPC services and the methods of the services."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"service FooService {\n  rpc GetSomething(FooRequest) returns (FooResponse);\n}\n")),(0,a.kt)("h2",{id:"comment"},"Comment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service describes the functions of this service."),(0,a.kt)("li",{parentName:"ul"},"Method describe the functions of this API. "),(0,a.kt)("li",{parentName:"ul"},"Field describe the information of this field.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Service API Definition (demo.proto)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage kratos.demo.v1;\n\n// specifying the package names for importing from multiple programming language\noption go_package = "github.com/go-kratos/kratos/demo/v1;v1";\noption java_multiple_files = true;\noption java_package = "com.github.kratos.demo.v1";\noption objc_class_prefix = "KratosDemoV1";\n\n// Definition of the service\nservice Greeter {\n    // definition the function of API\n    rpc SayHello (HelloRequest) returns (HelloReply);\n}\n// the request of Hello\nmessage HelloRequest {\n    // user\'s name\n    string name = 1;\n}\n// the response of Hello \nmessage HelloReply {\n    // result data\n    string message = 1;\n}\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/style"},"https://developers.google.com/protocol-buffers/docs/style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"https://developers.google.com/protocol-buffers/docs/proto3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://colobu.com/2017/03/16/Protobuf3-language-guide/"},"https://colobu.com/2017/03/16/Protobuf3-language-guide/"))))}c.isMDXComponent=!0}}]);