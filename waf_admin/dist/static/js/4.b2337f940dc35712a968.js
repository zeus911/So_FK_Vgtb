webpackJsonp([4],{"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.4427a53.png"},SBI6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("mtWM"),a("QmSG");var s={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("el-menu",{staticClass:"el-menu-demo",attrs:{router:"true","default-active":this.$router.path,mode:"horizontal","background-color":"rgb(255,255,255)"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"/"}},[t._v("Home")]),t._v(" "),s("el-menu-item",{attrs:{index:"/about"}},[t._v("about")])],1),t._v(" "),s("el-container",{staticStyle:{height:"800px",border:"1px solid #eee"}},[s("el-aside",{staticStyle:{"background-color":"rgb(255,255,255)"},attrs:{width:"200px"}},[s("el-menu",{attrs:{"default-openeds":["1","3"]}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-message"}),t._v("导航一")]),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes",data:t.s1}},[t._v("总开关")]),t._v(" "),s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.waf_status()}},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("url白名单")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.url_whitelist()}},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("url过滤")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.url_filter()}},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("ip黑名单")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.ip_blacklist()}},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("ip白名单")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.ip_whitelist()}},model:{value:t.value11,callback:function(e){t.value11=e},expression:"value11"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("GET参数过滤")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.get_args_check()}},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("POST参数过滤")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.post_args_check()}},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("Cookie检查")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.cookie_safe_check()}},model:{value:t.value8,callback:function(e){t.value8=e},expression:"value8"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("UA检查")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.ua_safe_check()}},model:{value:t.value9,callback:function(e){t.value9=e},expression:"value9"}})],1),t._v(" "),s("br"),s("br"),t._v(" "),s("el-menu-item-group",[s("el-tag",{staticStyle:{width:"100px"},attrs:{type:"succes"}},[t._v("CC攻击防御")]),t._v(" "),s("el-switch",{staticStyle:{display:""},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"","inactive-text":""},on:{change:function(e){return t.cc_defense()}},model:{value:t.value10,callback:function(e){t.value10=e},expression:"value10"}})],1)],2)],1),t._v(" "),s("el-main",[s("br"),s("br"),t._v(" "),s("br"),s("br"),t._v(" "),s("img",{attrs:{src:a("7Otq")}}),t._v(" "),s("br"),s("br"),t._v(" "),s("br"),s("br"),t._v(" "),s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[s("el-form-item",{attrs:{label:"ip"}},[s("el-input",{attrs:{placeholder:"ip"},model:{value:t.formInline.ip,callback:function(e){t.$set(t.formInline,"ip",e)},expression:"formInline.ip"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"type"}},[s("el-select",{attrs:{placeholder:"type"},model:{value:t.formInline.type,callback:function(e){t.$set(t.formInline,"type",e)},expression:"formInline.type"}},[s("el-option",{attrs:{label:"ip_blacklist",value:"ip_blacklist"}}),t._v(" "),s("el-option",{attrs:{label:"ip_whitelist",value:"ip_whitelist"}}),t._v(" "),s("el-option",{attrs:{label:"ip_blacklist_remove",value:"ip_blacklist_remove"}}),t._v(" "),s("el-option",{attrs:{label:"ip_whitelist_remove",value:"ip_whitelist_remove"}})],1)],1),t._v(" "),s("el-form-item",[[s("el-button",{attrs:{plain:!0},nativeOn:{click:function(e){return t.submit()}}},[t._v("submit")])]],2)],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"Home",created:function(){this.GET_DATA()},data:function(){return{value2:!1,value3:!1,value4:!1,value5:!1,value6:!1,value7:!1,value8:!1,value9:!1,value10:!1,value11:!1,formInline:{ip:"",type:""}}},methods:{GET_DATA:function(){var t=this;this.$axios.get("http://192.168.2.219/switch_api").then(function(e){var a=e.data;"true"==a.waf_status?t.value2=!0:"false"==a.waf_status&&(t.value2=!1),"true"==a.url_whitelist?t.value3=!0:"false"==a.url_whitelist&&(t.value3=!1),"true"==a.url_filter?t.value4=!0:"false"==a.url_filter&&(t.value4=!1),"true"==a.ip_blacklist?t.value5=!0:"false"==a.ip_blacklist&&(t.value5=!1),"true"==a.ip_whitelist?t.value11=!0:"false"==a.ip_whitelist&&(t.value11=!1),"true"==a.get_args_check?t.value6=!0:"false"==a.get_args_check&&(t.value6=!1),"true"==a.post_args_check?t.value7=!0:"false"==a.post_args_check&&(t.value7=!1),"true"==a.cookie_safe_check?t.value8=!0:"false"==a.cookie_safe_check&&(t.value8=!1),"true"==a.ua_safe_check?t.value9=!0:"false"==a.ua_safe_check&&(t.value9=!1),"true"==a.cc_defense?t.value10=!0:"false"==a.cc_defense&&(t.value10=!1)})},submit:function(){var t=this,e={ip:this.formInline.ip,type:this.formInline.type};this.$axios.post("http://192.168.2.219/api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},waf_status:function(){var t=this,e={moudle:"waf_status",status:this.value2};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},url_whitelist:function(){var t=this,e={moudle:"url_whitelist",status:this.value3};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},url_filter:function(){var t=this,e={moudle:"url_filter",status:this.value4};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},ip_blacklist:function(){var t=this,e={moudle:"ip_blacklist",status:this.value5};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},get_args_check:function(){var t=this,e={moudle:"get_args_check",status:this.value6};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},post_args_check:function(){var t=this,e={moudle:"post_args_check",status:this.value7};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},cookie_safe_check:function(){var t=this,e={moudle:"cookie_safe_check",status:this.value8};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},ua_safe_check:function(){var t=this,e={moudle:"ua_safe_check",status:this.value9};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},cc_defense:function(){var t=this,e={moudle:"cc_defense",status:this.value10};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})},ip_whitelist:function(){var t=this,e={moudle:"ip_whitelist",status:this.value11};this.$axios.post("http://192.168.2.219/switch_api",this.$qs.stringify(e)).then(function(e){var a=e.data;t.$message({message:a,type:"success"})})}}},s,!1,function(t){a("lfVj")},null,null);e.default=i.exports},lfVj:function(t,e){}});
//# sourceMappingURL=4.b2337f940dc35712a968.js.map