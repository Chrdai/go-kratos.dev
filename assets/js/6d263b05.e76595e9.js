"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3072],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,_=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(_,a(a({ref:t},c),{},{components:r})):n.createElement(_,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3184:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var n=r(3117),o=r(102),l=(r(7294),r(3905)),a=["components"],p={id:"usage",title:"\u6784\u5efa\u5de5\u5177",description:"Kratos \u5de5\u5177\u4f7f\u7528\uff0c\u521b\u5efa Protobuf \u6a21\u677f\uff0c\u521b\u5efa Go \u5de5\u7a0b\u9879\u76ee\uff0c\u521b\u5efa Service \u6a21\u677f",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},s=void 0,i={unversionedId:"getting-started/usage",id:"getting-started/usage",title:"\u6784\u5efa\u5de5\u5177",description:"Kratos \u5de5\u5177\u4f7f\u7528\uff0c\u521b\u5efa Protobuf \u6a21\u677f\uff0c\u521b\u5efa Go \u5de5\u7a0b\u9879\u76ee\uff0c\u521b\u5efa Service \u6a21\u677f",source:"@site/docs/getting-started/02-usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/docs/getting-started/usage",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/getting-started/02-usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"usage",title:"\u6784\u5efa\u5de5\u5177",description:"Kratos \u5de5\u5177\u4f7f\u7528\uff0c\u521b\u5efa Protobuf \u6a21\u677f\uff0c\u521b\u5efa Go \u5de5\u7a0b\u9879\u76ee\uff0c\u521b\u5efa Service \u6a21\u677f",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/docs/getting-started/start"},next:{title:"\u793e\u533a\u63d2\u4ef6",permalink:"/docs/getting-started/plugin"}},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:3},{value:"\u5de5\u5177\u4f7f\u7528",id:"\u5de5\u5177\u4f7f\u7528",children:[{value:"\u7248\u672c",id:"\u7248\u672c",children:[],level:4}],level:3},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[],level:3},{value:"\u6dfb\u52a0 Proto \u6587\u4ef6",id:"\u6dfb\u52a0-proto-\u6587\u4ef6",children:[],level:3},{value:"\u751f\u6210 Proto \u4ee3\u7801",id:"\u751f\u6210-proto-\u4ee3\u7801",children:[],level:3},{value:"\u751f\u6210 Service \u4ee3\u7801",id:"\u751f\u6210-service-\u4ee3\u7801",children:[],level:3}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/go-kratos/kratos/cmd/kratos/v2@latest\n")),(0,l.kt)("h3",{id:"\u5de5\u5177\u4f7f\u7528"},"\u5de5\u5177\u4f7f\u7528"),(0,l.kt)("h4",{id:"\u7248\u672c"},"\u7248\u672c"),(0,l.kt)("p",null,"\u67e5\u770b\u5de5\u5177\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kratos -v\n")),(0,l.kt)("p",null,"\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kratos version v2.0.0\n")),(0,l.kt)("h3",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,l.kt)("p",null,"\u901a\u8fc7 kratos \u547d\u4ee4\u521b\u5efa\u9879\u76ee\u6a21\u677f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kratos new helloworld\n")),(0,l.kt)("p",null,"\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helloworld\n|____api\n| |____helloworld\n| | |____v1\n| | | |____helloworld_grpc.pb.go\n| | | |____helloworld.proto\n| | | |____helloworld.pb.go\n| | | |____helloworld_http.pb.go\n| | |____errors\n| | | |____helloworld_errors.pb.go\n| | | |____helloworld.proto\n| | | |____helloworld.pb.go\n|____cmd\n| |____helloworld\n| | |____main.go\n|____internal\n| |____biz\n| | |____README.md\n| |____service\n| | |____README.md\n| | |____greeter.go\n| |____data\n| | |____README.md\n|____README.md\n|____Makefile\n|____LICENSE\n|____go.mod\n|____go.sum\n")),(0,l.kt)("h3",{id:"\u6dfb\u52a0-proto-\u6587\u4ef6"},"\u6dfb\u52a0 Proto \u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kratos proto add api/helloworld/demo.proto\n")),(0,l.kt)("p",null,"\u8f93\u51fa:"),(0,l.kt)("p",null,"api/helloworld/demo.proto"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage api.helloworld;\n\noption go_package = "helloworld/api/api/helloworld;helloworld";\noption java_multiple_files = true;\noption java_package = "api.helloworld";\n\nservice Demo {\n    rpc CreateDemo (CreateDemoRequest) returns (CreateDemoReply);\n    rpc UpdateDemo (UpdateDemoRequest) returns (UpdateDemoReply);\n    rpc DeleteDemo (DeleteDemoRequest) returns (DeleteDemoReply);\n    rpc GetDemo (GetDemoRequest) returns (GetDemoReply);\n    rpc ListDemo (ListDemoRequest) returns (ListDemoReply);\n}\n\nmessage CreateDemoRequest {}\nmessage CreateDemoReply {}\n\nmessage UpdateDemoRequest {}\nmessage UpdateDemoReply {}\n\nmessage DeleteDemoRequest {}\nmessage DeleteDemoReply {}\n\nmessage GetDemoRequest {}\nmessage GetDemoReply {}\n\nmessage ListDemoRequest {}\nmessage ListDemoReply {}\n')),(0,l.kt)("h3",{id:"\u751f\u6210-proto-\u4ee3\u7801"},"\u751f\u6210 Proto \u4ee3\u7801"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 make api \u76f4\u63a5\u751f\u6210\uff0c\u6216\u8005\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kratos proto client api/helloworld/demo.proto\n")),(0,l.kt)("p",null,"\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"api/helloworld/demo.pb.go\napi/helloworld/demo_grpc.pb.go\n# \u6ce8\u610f http \u4ee3\u7801\u53ea\u4f1a\u5728 proto \u6587\u4ef6\u4e2d\u58f0\u660e\u4e86 http \u65f6\u624d\u4f1a\u751f\u6210\napi/helloworld/demo_http.pb.go\n")),(0,l.kt)("h3",{id:"\u751f\u6210-service-\u4ee3\u7801"},"\u751f\u6210 Service \u4ee3\u7801"),(0,l.kt)("p",null,"\u901a\u8fc7 proto\u6587\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u751f\u6210\u5bf9\u5e94\u7684 Service \u5b9e\u73b0\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kratos proto server api/helloworld/demo.proto -t internal/service\n")),(0,l.kt)("p",null,"\u8f93\u51fa:",(0,l.kt)("br",{parentName:"p"}),"\n","internal/service/demo.go"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package service\n\nimport (\n    "context"\n\n    pb "helloworld/api/helloworld"\n)\n\ntype DemoService struct {\n    pb.UnimplementedDemoServer\n}\n\nfunc NewDemoService() pb.DemoServer {\n    return &DemoService{}\n}\n\nfunc (s *DemoService) CreateDemo(ctx context.Context, req *pb.CreateDemoRequest) (*pb.CreateDemoReply, error) {\n    return &pb.CreateDemoReply{}, nil\n}\nfunc (s *DemoService) UpdateDemo(ctx context.Context, req *pb.UpdateDemoRequest) (*pb.UpdateDemoReply, error) {\n    return &pb.UpdateDemoReply{}, nil\n}\nfunc (s *DemoService) DeleteDemo(ctx context.Context, req *pb.DeleteDemoRequest) (*pb.DeleteDemoReply, error) {\n    return &pb.DeleteDemoReply{}, nil\n}\nfunc (s *DemoService) GetDemo(ctx context.Context, req *pb.GetDemoRequest) (*pb.GetDemoReply, error) {\n    return &pb.GetDemoReply{}, nil\n}\nfunc (s *DemoService) ListDemo(ctx context.Context, req *pb.ListDemoRequest) (*pb.ListDemoReply, error) {\n    return &pb.ListDemoReply{}, nil\n}\n')))}m.isMDXComponent=!0}}]);