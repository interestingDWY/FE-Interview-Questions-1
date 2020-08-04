(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{736:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"n-api简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#n-api简介"}},[t._v("#")]),t._v(" N-API简介")]),t._v(" "),a("p",[t._v("Node.js 8.0 在2017年6月份发布，升级的特性中，包含了N-API。编写过或者使用过 node扩展的同学，不少都遇到过升级node版本，node扩展编译失败的情况。因为node扩展严重依赖于V8暴露的API，而node不同版本依赖的V8版本可能不同，一旦升级node版本，原先运行正常的node扩展就编译失败了。")]),t._v(" "),a("p",[t._v("这种情况对node生态圈无疑是不利的，N-API的引入正是试图改善这种情况的一种尝试。它跟底层JS引擎无关，只要N-API暴露的API足够稳定，那么node扩展的编写者就不用过分担忧node的升级问题。")]),t._v(" "),a("h2",{attrs:{id:"如何使用n-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用n-api"}},[t._v("#")]),t._v(" 如何使用N-API")]),t._v(" "),a("p",[t._v("先强调一点，N-API并不是对原有node扩展实现方式的替代，它只是提供了一系列底层无关的API，来帮助开发者编写跨版本的node扩展。至于如何编写、编译、使用扩展，跟原来的差不多。")]),t._v(" "),a("p",[t._v("本文会从一个超级简单的例子，简单介绍N-API的使用，包括环境准备、编写扩展、编译、运行几个步骤。")]),t._v(" "),a("blockquote",[a("p",[t._v("备注：当前N-API还处于试验阶段，官方文档提供的例子都是有问题的，如用于生产环境需格外谨慎。")])]),t._v(" "),a("h2",{attrs:{id:"_1、环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、环境准备"}},[t._v("#")]),t._v(" 1、环境准备")]),t._v(" "),a("p",[t._v("首先，N-API是8.0版本引入的，首先确保本地安装了8.0版本。笔者用的是"),a("code",[t._v("nvm")]),t._v("，读者可自行选择安装方式。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nvm i "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v("\nnvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v("\n")])])]),a("p",[t._v("然后，安装"),a("code",[t._v("node-gyp")]),t._v("，编译扩展会用到。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g node-gyp\n")])])]),a("p",[t._v("创建项目目录，并初始化"),a("code",[t._v("package.json")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" hello "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录名随便起")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -f\n")])])]),a("h2",{attrs:{id:"_2、编写扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、编写扩展"}},[t._v("#")]),t._v(" 2、编写扩展")]),t._v(" "),a("p",[t._v("创建"),a("code",[t._v("hello.cc")]),t._v("作为扩展的源文件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" src/hello.cc\n")])])]),a("p",[t._v("编辑"),a("code",[t._v("hello.cc")]),t._v("，输入如下内容。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<node_api.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际暴露的方法，这里只是简单返回一个字符串")]),t._v("\nnapi_value HelloMethod "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("napi_env env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" napi_callback_info info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    napi_value world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("napi_create_string_utf8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩展的初始化方法，其中 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// env：环境变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exports、module：node模块中对外暴露的对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" Init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("napi_env env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" napi_value exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" napi_value module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" priv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// napi_property_descriptor 为结构体，作用是描述扩展暴露的 属性/方法 的描述")]),t._v("\n    napi_property_descriptor desc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HelloMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" napi_default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("napi_define_properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义暴露的方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NAPI_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册扩展，扩展名叫做hello，Init为扩展的初始化方法")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3、编译扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、编译扩展"}},[t._v("#")]),t._v(" 3、编译扩展")]),t._v(" "),a("p",[t._v("首先，创建编译描述文件"),a("code",[t._v("binding.gyp")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"targets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sources"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/hello.cc"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后，运行如下命令进行编译。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("node-gyp rebuild\n")])])]),a("h2",{attrs:{id:"_4、调用扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、调用扩展"}},[t._v("#")]),t._v(" 4、调用扩展")]),t._v(" "),a("p",[t._v("未方便调用扩展，先安装"),a("code",[t._v("bindings")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save bindings\n")])])]),a("p",[t._v("然后，创建"),a("code",[t._v("app.js")]),t._v("，调用刚编译的扩展。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bindings'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" addon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// world")]),t._v("\n")])])]),a("p",[t._v("运行代码，由于N-API当前尚处于Experimental阶段，记得加上"),a("code",[t._v("--napi-modules")]),t._v("标记。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("node --napi-modules app.js\n")])])]),a("p",[t._v("输出如下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/github/abi-stable-node-addon-examples/1_hello_world/napi/build/Release/hello.node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nworld\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node:6500"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Warning: N-API is an experimental feature and could change at any time.\n")])])]),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("p",[t._v("N-API：https://nodejs.org/api/n-api.html")]),t._v(" "),a("p",[t._v("C++ Addons：https://nodejs.org/api/addons.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);