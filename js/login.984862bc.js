(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-all vh-100 d-flex flex-column justify-content-center align-items-center "},[s("div",{staticClass:"w-25 mx-auto mt-5"},[s("b-row",[s("b-col",{attrs:{sm:"12"}},[s("h1",[t._v("登入")])]),s("b-col",{attrs:{sm:"12"}},[s("b-form",{staticClass:"border border-secondary rounded p-4 mt-4 d-flex flex-column justify-content-center",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[s("b-form-group",{attrs:{label:"信箱","label-for":"input-email",state:t.state.email,"invalid-feedback":"請輸入信箱"}},[s("b-form-input",{attrs:{id:"input-email",type:"email",required:"",state:t.state.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-form-group",{attrs:{label:"密碼","label-for":"input-password",state:t.state.password,"invalid-feedback":"請輸入密碼"}},[s("b-form-input",{attrs:{id:"input-password",type:"password",required:"",state:t.state.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("b-button",{staticClass:"w-100 btn-color",attrs:{type:"submit"}},[t._v("登入")]),s("b-button",{staticClass:"w-100 mt-2 register",attrs:{to:"/Register"}},[t._v("建立帳號")])],1)],1)],1)],1)])},r=[],o=s("f90c"),l=s.n(o),i={data:function(){return{form:{email:"",password:""}}},computed:{state:function(){return{email:0===this.form.email.length?null:l.a.isEmail(this.form.email),password:0===this.form.password.length?null:this.form.password.length>=4&&this.form.password.length<=10}}},methods:{login:function(){this.$store.dispatch("user/login",this.form)}}},n=i,m=s("2877"),u=Object(m["a"])(n,a,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=login.984862bc.js.map