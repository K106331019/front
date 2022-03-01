(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({accessories:"accessories",admin:"admin",cart:"cart",flower:"flower",home:"home","login~register":"login~register",login:"login",register:"register",orders:"orders",share:"share",story:"story",wedding:"wedding"}[e]||e)+"."+{accessories:"2823ccb8",admin:"5dd7ffc0",cart:"5057f0f2",flower:"c8059bff",home:"8c803a34","login~register":"d6dd9075",login:"984862bc",register:"edc276a1",orders:"c154237e",share:"aecca06d",story:"e27dc379",wedding:"3d8cbcf8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",(function(){return M})),n.d(r,"logout",(function(){return F})),n.d(r,"getInfo",(function(){return N})),n.d(r,"addCart",(function(){return q}));var a={};n.r(a),n.d(a,"user",(function(){return H}));var o={};n.r(o),n.d(o,"login",(function(){return U})),n.d(o,"logout",(function(){return W})),n.d(o,"getInfo",(function(){return G})),n.d(o,"extend",(function(){return K})),n.d(o,"updateCart",(function(){return Q}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var i=n("2b0e"),s=n("5f5b");n("ab8b"),n("2dd8");i["default"].use(s["b"]);n("d3b7"),n("caad"),n("2532");var c=n("bc3a"),u=n.n(c),l=n("130e"),d=n("2f62"),f=n("0e44"),m=function(){return{_id:"",token:"",role:0,email:"",cart:0,likes:[]}},p=n("1da1"),h=(n("96cf"),n("3d20")),g=n.n(h),b=(n("3ca3"),n("ddb0"),n("8c4f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("headers"),n("router-view",{key:e.$route.fullPath}),n("footers")],1)},w=[],x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"header"}},[r("b-navbar",{staticClass:"shadow w-100 mt-5",attrs:{toggleable:"lg"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("b-img",{staticClass:"flower",attrs:{src:n("a1d8")}})],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"nav-list ml-auto"},[r("b-nav-item",{staticClass:"mx-3 text-dark",attrs:{to:"/about"}},[e._v("關於我們")]),r("b-nav-item",{staticClass:"mx-3 text-dark",attrs:{to:"/flower"}},[e._v("經典花禮")]),r("b-nav-item",{staticClass:"mx-3 text-dark",attrs:{to:"/wedding"}},[e._v("婚禮系列")]),r("b-nav-item",{staticClass:"mx-3 text-dark",attrs:{to:"/Accessories"}},[e._v("花藝飾品")]),e.user.isLogin?e._e():r("b-nav-item",{attrs:{to:"/Login"}},[r("b-icon",{attrs:{icon:"person-fill",variant:"dark","font-scale":"1"}})],1),r("b-nav-item",{staticClass:"mx-1 text-dark",attrs:{to:"/cart"}},[r("b-icon",{attrs:{icon:"cart4","font-scale":"1",variant:"dark"}})],1),e.user.isLogin?r("b-nav-item",{staticClass:"mx-1",attrs:{to:"/orderDetails"}},[r("b-icon",{attrs:{icon:"clipboard-check",variant:"dark"}})],1):e._e(),e.user.isLogin?r("b-nav-item",{staticClass:"mx-1",attrs:{to:"/like"}},[r("b-icon",{attrs:{icon:"heart",variant:"dark","font-scale":"1"}})],1):e._e(),e.user.isAdmin?r("b-nav-item",{staticClass:"mx-1",attrs:{to:"/admin/products"}},[r("b-icon",{attrs:{icon:"gear",variant:"dark"}})],1):e._e(),e.user.isLogin?r("b-nav-item",{staticClass:"mx-1"},[r("b-icon",{attrs:{icon:"box-arrow-right",variant:"dark"},on:{click:e.logout}})],1):e._e()],1)],1)],1)],1)},k=[],y={data:function(){return{placements:"bottom"}},computed:{user:function(){return this.$store.getters["user/user"]}},methods:{logout:function(){this.$store.dispatch("user/logout")},onOver:function(e){this.$refs[e].visible=!0},onLeave:function(e){this.$refs[e].visible=!1}}},_=y,O=n("2877"),C=Object(O["a"])(_,x,k,!1,null,null,null),j=C.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer-all w-100"},[n("p",{staticClass:" text-center  pt-4"},[e._v("花研院 - 乾燥花 | 新娘捧花")]),n("div",{staticClass:"mt-5 d-flex justify-content-center"},[n("a",{attrs:{href:"https://www.facebook.com/tearflowerdesign"}},[n("b-icon",{staticClass:"mx-3",attrs:{icon:"facebook","font-scale":"2",variant:"dark"}})],1),n("a",{attrs:{href:"https://www.instagram.com/flower.institute/"}},[n("b-icon",{staticClass:"mx-3",attrs:{icon:"instagram","font-scale":"2",variant:"dark"}})],1)]),e._m(0)])},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-end w-100"},[n("p",{staticClass:"text-center text-light"},[e._v("@所有圖片皆來自於網路僅為練習用")])])}],L={},R=Object(O["a"])(L,P,A,!1,null,null,null),$=R.exports,E={name:"app",components:{headers:j,footers:$}},S=E,B=Object(O["a"])(S,v,w,!1,null,null,null),I=B.exports;i["default"].use(b["a"]);var T=[{path:"/",name:"All",component:I,children:[{path:"",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))},meta:{title:"花研院"}},{path:"about",name:"About",component:function(){return n.e("story").then(n.bind(null,"f820"))},meta:{title:"花研院"}},{path:"flower",name:"Flower",component:function(){return n.e("flower").then(n.bind(null,"4043"))},meta:{title:"花研院"}},{path:"flowerProduct/:id",name:"FlowerProduct",component:function(){return n.e("flower").then(n.bind(null,"1307"))},meta:{title:"花研院"}},{path:"cart",name:"Cart",component:function(){return n.e("cart").then(n.bind(null,"b789"))},meta:{title:"花研院",login:!0}},{path:"checkout",name:"Checkout",component:function(){return n.e("cart").then(n.bind(null,"7cb4"))},meta:{title:"花研院",login:!0}},{path:"orders",name:"Orders",component:function(){return n.e("orders").then(n.bind(null,"159d"))},meta:{title:"花研院",login:!0}},{path:"orderDetails",name:"OrderDetails",component:function(){return n.e("orders").then(n.bind(null,"35aa"))},meta:{title:"花研院",login:!0}},{path:"wedding",name:"Wedding",component:function(){return n.e("wedding").then(n.bind(null,"f3f6"))},meta:{title:"花研院"}},{path:"accessories",name:"Accessories",component:function(){return n.e("accessories").then(n.bind(null,"245e"))},meta:{title:"花研院"}},{path:"like",name:"Like",component:function(){return n.e("share").then(n.bind(null,"7c2a"))},meta:{title:"花研院",login:!0}},{path:"login",name:"Login",component:function(){return Promise.all([n.e("login~register"),n.e("login")]).then(n.bind(null,"a55b"))},meta:{title:"花研院"}},{path:"register",name:"Register",component:function(){return Promise.all([n.e("login~register"),n.e("register")]).then(n.bind(null,"73cf"))},meta:{title:" 花研院"}}]},{path:"/admin",name:"Admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))},meta:{title:"後臺管理"},children:[{path:"products",name:"AdminProducts",component:function(){return n.e("admin").then(n.bind(null,"aa93"))},meta:{login:!0,admin:!0,title:"商品管理-花研院"}},{path:"orders",name:"AdminOrders",component:function(){return n.e("admin").then(n.bind(null,"ec5c"))},meta:{login:!0,admin:!0,title:"訂單管理-花研院"}},{path:"servers",name:"AdminServer",component:function(){return n.e("admin").then(n.bind(null,"331e"))},meta:{login:!0,admin:!0,title:"客製化管理-花研院"}}]},{path:"*",name:"NotFound",redirect:"/"}],z=new b["a"]({routes:T});z.beforeEach((function(e,t,n){var r=X.getters["user/user"];!e.meta.login||r.isLogin||e.path.includes("admin")?!e.meta.admin||r.isAdmin||e.path.includes("admin")?n():n("/"):(g.a.fire({icon:"error",text:"請先登入"}),n("/login"))})),z.afterEach((function(e,t){document.title=e.meta.title}));var D=z,M=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Y.post("/users/login",n);case 4:a=e.sent,o=a.data,r("login",o.result),D.push("/").catch((function(){})),g.a.fire({icon:"success",title:"成功",message:"登入成功"}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),g.a.fire({icon:"error",title:"失敗",message:e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,e.prev=1,e.next=4,Y.delete("/users/logout",{headers:{authorization:"Bearer "+r.token}});case 4:n("logout"),D.push("/").catch((function(){})),g.a.fire({icon:"success",title:"成功",message:"登出成功"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),g.a.fire({icon:"error",title:"失敗",message:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,0!==r.token.length){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,Y.get("/users/me",{headers:{authorization:"Bearer "+r.token}});case 6:a=e.sent,o=a.data,n("getInfo",o.result),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](3),console.log(e.t0),n("logout");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.state,0!==a.token.length){e.next=5;break}return g.a.fire({icon:"error",title:"錯誤",text:"請先登入"}),D.push("/login"),e.abrupt("return");case 5:if(!(n.quantity<=0)){e.next=8;break}return g.a.fire({icon:"error",title:"錯誤",text:"請輸入正確數量"}),e.abrupt("return");case 8:return e.prev=8,e.next=11,Y.post("/users/me/cart",n,{headers:{authorization:"Bearer "+a.token}});case 11:o=e.sent,i=o.data,r("updateCart",i.result),g.a.fire({icon:"success",title:"成功",text:"加入購物車成功"}),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](8),g.a.fire({icon:"error",title:"錯誤",text:"加入購物車失敗"});case 20:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t,n){return e.apply(this,arguments)}}(),J=n("5530"),H=function(e){return Object(J["a"])({isLogin:e.token.length>0,isAdmin:1===e.role},e)},U=function(e,t){e.token=t.token,e.role=t.role,e.email=t.email,e.cart=t.cart,e._id=t._id},W=function(e,t){e.token="",e.role=0,e.email="",e.cart=0},G=function(e,t){e.role=t.role,e.email=t.email,e.cart=t.cart,e.likes=t.likes},K=function(e,t){e.token=t},Q=function(e,t){e.cart=t},V={namespaced:!0,state:m,actions:r,getters:a,mutations:o};i["default"].use(d["a"]);var X=new d["a"].Store({state:{},mutations:{},actions:{},modules:{user:V},plugins:[Object(f["a"])({})]}),Y=u.a.create({baseURL:""});Y.interceptors.response.use((function(e){return e}),(function(e){if(e.response){if(401===e.response.status&&"/users/extend"!==e.config.url){var t=e.config;return Y.post("/users/extend",{},{headers:{authorization:"Bearer "+X.state.user.token}}).then((function(e){var n=e.data;return X.commit("user/extend",n.result.token),t.headers.authorization="Bearer "+X.state.user.token,u()(t)})).catch((function(e){return X.commit("user/logout"),D.push("/login"),Promise.reject(e)}))}}else"ECONNABORTED"===e.code&&e.message.includes("timeout")?g.a.fire({icon:"error",title:"錯誤",text:"請求逾時"}):g.a.fire({icon:"error",title:"錯誤",text:"網路不穩定"});return Promise.reject(e)})),i["default"].use(l["a"],{axios:u.a,api:Y});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},ee=[],te={created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("user/getInfo");case 1:case"end":return t.stop()}}),t)})))()}},ne=te,re=Object(O["a"])(ne,Z,ee,!1,null,null,null),ae=re.exports,oe=(n("a480"),n("b1e0")),ie=n("7212"),se=n.n(ie),ce=(n("a7a3"),{computed:{user:function(){return this.$store.getters["user/user"]}}}),ue=n("f9d5"),le=n.n(ue),de=(n("4413"),n("657c"));n("2bd9");i["default"].use(le.a),i["default"].use(se.a),i["default"].use(s["a"]),i["default"].use(oe["a"]),i["default"].component("ImgInputer",de["a"]),i["default"].mixin(ce),i["default"].config.productionTip=!1,new i["default"]({router:D,store:X,render:function(e){return e(ae)}}).$mount("#app")},a1d8:function(e,t,n){e.exports=n.p+"img/logo.9898c1ae.png"},a480:function(e,t,n){}});
//# sourceMappingURL=app.da11cd54.js.map