(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects.others.settings"],{3613:function(t,e,r){},"49fc":function(t,e,r){"use strict";var a=r("3613"),s=r.n(a);s.a},f34b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-overview"},["undefined"!==typeof t.getActiveUserData.user&&Object.keys(t.getActiveUserData.user).length?r("div",["admin"==t.getActiveUserData.userRoles||"salesteamlead"==t.getActiveUserData.userRoles||"salesperson"==t.getActiveUserData.userRoles?r("adminvue-projects-settings-vue"):r("div",[r("p",[t._v("You dont have permision to access this page.")])])],1):r("div",{staticClass:"white-row loader-route"},[t._m(0)])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-sub-ripple"},[r("div"),r("div")])}],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-invoice-section"},[r("section",{staticClass:"project-status"},[t.project_status_loader?r("div",{staticClass:"white-row loader-route"},[t._m(0)]):t._e(),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"status-left-side"},[r("h5",{staticClass:"sub-heading"},[t._v(" Project Status : "+t._s(t.project_status_name)+" ")])])]),r("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"stauts-form form-area rel"},[r("form",{staticClass:"project-status-form",on:{submit:function(e){return e.preventDefault(),t.onUpdateStatus(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label",attrs:{for:"gender"}}),r("Select2",{attrs:{options:t.project_status_category,settings:{placeholder:"Update Status"}},model:{value:t.project_status_val,callback:function(e){t.project_status_val=e},expression:"project_status_val"}})],1)]),r("div",{staticClass:"form-actions"},[r("button",{staticClass:"default-global-btn",attrs:{disabled:t.disableSubmitBtnProjectStatus,type:"submit",id:"save-form"}},[t._v(" Update ")]),t.disableSubmitBtnProjectStatus?r("div",{staticClass:"form_submit_loader"},[t._m(1)]):t._e()])])])])])])]),r("section",{staticClass:"project-member"},[t.project_member_loader?r("div",{staticClass:"white-row loader-route"},[t._m(2)]):t._e(),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"status-left-side"},[r("h5",{staticClass:"sub-heading"},[t._v("Project Members :")]),r("div",{},[r("div",{staticClass:"member-form form-area"},[r("form",{staticClass:"add-members-form",on:{submit:function(e){return e.preventDefault(),t.onAddProjectMembers(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label",attrs:{for:"gender"}}),r("Select2",{class:{"input-border-errors":t.$v.project_member_option_val.$dirty&&!t.$v.project_member_option_val.required},attrs:{options:t.project_member_options,settings:{placeholder:"Update Members",multiple:!0}},model:{value:t.project_member_option_val,callback:function(e){t.project_member_option_val=e},expression:"project_member_option_val"}})],1)]),r("div",{staticClass:"form-actions"},[r("button",{staticClass:"default-global-btn",attrs:{disabled:t.disableSubmitBtnMem,type:"submit",id:"save-form"}},[t._v(" Add Member ")]),t.disableSubmitBtnMem?r("div",{staticClass:"form_submit_loader"},[t._m(3)]):t._e()])])])])]),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table"},[t._m(4),"undefined"!==typeof t.project_members.data&&Object.keys(t.project_members.data).length?r("tbody",t._l(t.project_members.data,(function(e,a){return r("tr",{key:a},[r("td",[t._v(" "+t._s(e.name)+" ")]),r("td",[r("p",{staticClass:"invoice-total bold-cls"},[t._v(" "+t._s(e.email)+" ")])]),r("td",[r("div",{staticClass:"download-box text-right"},[r("a",{directives:[{name:"confirm",rawName:"v-confirm",value:{loader:!0,ok:function(e){return t.onDeleteProjectMember(e,a)},cancel:t.doNothing,message:"Are you sure? you want to remove."},expression:"{\n                          loader: true,\n                          ok: dialog =>\n                            onDeleteProjectMember(dialog, pm_index),\n                          cancel: doNothing,\n                          message: 'Are you sure? you want to remove.'\n                        }"}],staticClass:"invoice-icon",attrs:{"data-toggle":"tooltip",title:"Delete!","data-placement":"top",href:"#"}},[t._m(5,!0)])])])])})),0):r("tbody",[t._m(6)])])])])])])]),r("section",{staticClass:"project-am"},[t.project_am_loader?r("div",{staticClass:"white-row loader-route"},[t._m(7)]):t._e(),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"status-left-side"},[r("h5",{staticClass:"sub-heading"},[t._v("Project Accoun Manager :")]),r("div",{},[r("div",{staticClass:"stauts-form form-area"},[r("form",{staticClass:"am-form",on:{submit:function(e){return e.preventDefault(),t.onAddProjectAccountManager(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label",attrs:{for:"gender"}}),r("Select2",{class:{"input-border-errors":t.$v.project_am_option_val.$dirty&&!t.$v.project_am_option_val.required},attrs:{options:t.project_am_options,settings:{placeholder:"Add Account Manager",multiple:!0}},model:{value:t.project_am_option_val,callback:function(e){t.project_am_option_val=e},expression:"project_am_option_val"}})],1)]),r("div",{staticClass:"form-actions"},[r("button",{staticClass:"default-global-btn",attrs:{disabled:t.disableSubmitBtnAm,type:"submit",id:"save-form"}},[t._v(" Add AM ")]),t.disableSubmitBtnAm?r("div",{staticClass:"form_submit_loader"},[t._m(8)]):t._e()])])])])]),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table"},[t._m(9),"undefined"!==typeof t.project_am.data&&Object.keys(t.project_am.data).length?r("tbody",t._l(t.project_am.data,(function(e,a){return r("tr",{key:a},[r("td",[t._v(" "+t._s(e.name)+" ")]),r("td",[r("p",{staticClass:"invoice-total bold-cls"},[t._v(" "+t._s(e.email)+" ")])]),r("td",[r("div",{staticClass:"download-box text-right"},[r("a",{directives:[{name:"confirm",rawName:"v-confirm",value:{loader:!0,ok:function(e){return t.onDeleteAccountManager(e,a)},cancel:t.doNothing,message:"Are you sure, you want to delete ?"},expression:"{\n                          loader: true,\n                          ok: dialog =>\n                            onDeleteAccountManager(dialog, am_index),\n                          cancel: doNothing,\n                          message: 'Are you sure, you want to delete ?'\n                        }"}],staticClass:"invoice-icon",attrs:{"data-toggle":"tooltip",title:"Delete!","data-placement":"top",href:"#"}},[t._m(10,!0)])])])])})),0):r("tbody",[t._m(11)])])])])])])]),r("section",{staticClass:"project-client"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12"},[r("div",{staticClass:"status-left-side"},[r("h5",{staticClass:"sub-heading"},[t._v("Project Client :")]),r("div",{},[r("div",{staticClass:"stauts-form form-area"},[r("form",{staticClass:"client-form",on:{submit:function(e){return e.preventDefault(),t.onAddProjectClient(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label",attrs:{for:"gender"}}),r("Select2",{class:{"input-border-errors":t.$v.project_client_option_val.$dirty&&!t.$v.project_client_option_val.required},attrs:{options:t.project_client_options,settings:{placeholder:"Add Client",multiple:!0}},model:{value:t.project_client_option_val,callback:function(e){t.project_client_option_val=e},expression:"project_client_option_val"}})],1)]),r("div",{staticClass:"form-actions"},[r("button",{staticClass:"default-global-btn",attrs:{disabled:t.disableSubmitBtnClient,type:"submit",id:"save-form"}},[t._v(" Add Client ")]),t.disableSubmitBtnClient?r("div",{staticClass:"form_submit_loader"},[t._m(12)]):t._e()])])])])]),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table"},[t._m(13),"undefined"!==typeof t.project_client.data&&Object.keys(t.project_client.data).length?r("tbody",t._l(t.project_client.data,(function(e,a){return r("tr",{key:a},[r("td",[t._v(" "+t._s(e.name)+" ")]),r("td",[r("p",{staticClass:"invoice-total bold-cls"},[t._v(" "+t._s(e.email)+" ")])]),r("td",[r("div",{staticClass:"download-box text-right"},[r("a",{directives:[{name:"confirm",rawName:"v-confirm",value:{loader:!0,ok:function(e){return t.onDeleteClient(e,a)},cancel:t.doNothing,message:"Are you sure, you want to delete ?"},expression:"{\n                          loader: true,\n                          ok: dialog => onDeleteClient(dialog, cl_index),\n                          cancel: doNothing,\n                          message: 'Are you sure, you want to delete ?'\n                        }"}],staticClass:"invoice-icon",attrs:{"data-toggle":"tooltip",title:"Delete!","data-placement":"top",href:"#"}},[t._m(14,!0)])])])])})),0):r("tbody",[t._m(15)])])])])])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-sub-ripple"},[r("div"),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ellipsis"},[r("div"),r("div"),r("div"),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-sub-ripple"},[r("div"),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ellipsis"},[r("div"),r("div"),r("div"),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Member Name")]),r("th",[t._v("Member Email")]),r("th",{staticClass:"text-right"},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"invoice-icon"},[r("i",{staticClass:"fas fa-times"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",{attrs:{colspan:"3"}},[t._v(" No Record Found. ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-sub-ripple"},[r("div"),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ellipsis"},[r("div"),r("div"),r("div"),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("AM Name")]),r("th",[t._v("AM Email")]),r("th",{staticClass:"text-right"},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"invoice-icon"},[r("i",{staticClass:"fas fa-times"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",{attrs:{colspan:"3"}},[t._v(" No Data Found. ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-ellipsis"},[r("div"),r("div"),r("div"),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Client Name")]),r("th",[t._v("Client Email")]),r("th",{staticClass:"text-right"},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"invoice-icon"},[r("i",{staticClass:"fas fa-times"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",{attrs:{colspan:"3"}},[t._v(" Data Not Found. ")])])}],n=(r("96cf"),r("1da1")),c=r("3f5b"),l=r("1dce"),u=r("b5ae"),d=u.required,p=(u.minLength,u.email,u.numeric,u.url,{mixins:[l["validationMixin"]],name:"projects.tools",components:{Select2:c["a"]},computed:{},validations:{project_member_option_val:{required:d},project_am_option_val:{required:d},project_client_option_val:{required:d}},data:function(){return{disableSubmitBtnProjectStatus:!1,disableSubmitBtnMem:!1,disableSubmitBtnAm:!1,disableSubmitBtn:!1,project_id:this.$route.params.project_id,user_gender:[],project_status_category:null,project_status_val:null,project_status_name:null,project_status_loader:!0,project_members:{},project_member_options:null,project_member_option_val:null,project_member_loader:!0,project_am:{},project_am_options:null,project_am_option_val:null,project_am_loader:!0,project_client:{},project_client_options:null,project_client_option_val:null,project_client_loader:!0,disableSubmitBtnClient:!1}},mounted:function(){this.getprojectstatuscategory(),this.getprojectstatuscategoryData(),this.getprojectmem(),this.getprojectam(),this.getprojectclient(),this.getprojectmemberfileter(),this.getprojectaccountmanagerfileter(),this.getprojectclientfileter()},methods:{onUpdateStatus:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e,a.disableSubmitBtnProjectStatus=!0,s=a.$store.dispatch("postHttp",{url:"projects/update-project-status/"+a.$route.params.project_id,formDetails:{project_status:e.project_status_val},formEvent:t.target}),r.next=5,s.then((function(e){"undefined"!==typeof e&&(a.$store.dispatch("displayMessageErrors",{response:e,formEvent:t.target}),a.disableSubmitBtnProjectStatus=!1)}));case 5:a.disableSubmitBtnProjectStatus=!1;case 6:case"end":return r.stop()}}),r)})))()},getprojectstatuscategory:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/filters/get-project-status-category"}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_status_category=t.data.data),r.loader=!1}));case 4:case"end":return e.stop()}}),e)})))()},getprojectmemberfileter:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/filters/get-sales-team-for-members?project_id="+r.$route.params.project_id}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_member_options=t.data.data)}));case 4:case"end":return e.stop()}}),e)})))()},onAddProjectMembers:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e,a.disableSubmitBtnMem=!0,a.$v.project_member_option_val.$touch(),!a.$v.project_member_option_val.$invalid){r.next=7;break}return a.$store.dispatch("showtostrMessageNotifications",{message:"Please fill all the fields to proceed form!",type:"error"}),a.disableSubmitBtnMem=!1,r.abrupt("return");case 7:return s=a.$store.dispatch("postHttp",{url:"projects/update-project-members/"+a.$route.params.project_id,formDetails:{project_members:a.project_member_option_val,action:"add-member"},formEvent:t.target}),r.next=10,s.then((function(e){"undefined"!==typeof e&&(a.$store.dispatch("displayMessageErrors",{response:e,formEvent:t.target}),a.getprojectmem(),a.getprojectmemberfileter(),a.$v.project_member_option_val.$reset(),a.project_member_option_val=null,a.disableSubmitBtnMem=!1)}));case 10:a.disableSubmitBtnMem=!1;case 11:case"end":return r.stop()}}),r)})))()},onDeleteProjectMember:function(t,e){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=r,o=r.project_members.data[e].id,i=s.$store.dispatch("postHttp",{url:"projects/update-project-members/"+s.$route.params.project_id,formDetails:{project_members:o,action:"remove-member"},formEvent:""}),a.next=5,i.then((function(t){"undefined"!==typeof t&&(s.$store.dispatch("showtostrMessageNotifications",{message:t.data.message,type:"success"}),s.project_member_option_val=null,s.getprojectmem(),s.getprojectmemberfileter(),s.disableSubmitBtnMem=!1)}));case 5:s.disableSubmitBtnMem=!1,t.close();case 7:case"end":return a.stop()}}),a)})))()},getprojectaccountmanagerfileter:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/filters/update-project-am?project_id="+t.$route.params.project_id}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_am_options=t.data.data)}));case 4:case"end":return e.stop()}}),e)})))()},onAddProjectAccountManager:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e,a.disableSubmitBtnAm=!0,a.$v.project_am_option_val.$touch(),!a.$v.project_am_option_val.$invalid){r.next=7;break}return a.$store.dispatch("showtostrMessageNotifications",{message:"Please fill all the fields to proceed form!",type:"error"}),a.disableSubmitBtnAm=!1,r.abrupt("return");case 7:return s=a.$store.dispatch("postHttp",{url:"projects/update-project-am/"+a.$route.params.project_id,formDetails:{project_am:a.project_am_option_val,action:"add-am"},formEvent:t.target}),r.next=10,s.then((function(e){"undefined"!==typeof e&&(a.$store.dispatch("displayMessageErrors",{response:e,formEvent:t.target}),a.getprojectam(),a.getprojectaccountmanagerfileter(),a.$v.project_am_option_val.$reset(),a.project_am_option_val=null,a.disableSubmitBtnAm=!1)}));case 10:a.disableSubmitBtnMem=!1;case 11:case"end":return r.stop()}}),r)})))()},onDeleteAccountManager:function(t,e){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=r,o=r.project_am.data[e].id,console.log(o),i=s.$store.dispatch("postHttp",{url:"projects/update-project-am/"+s.$route.params.project_id,formDetails:{project_am:o,action:"remove-am"},formEvent:""}),a.next=6,i.then((function(t){"undefined"!==typeof t&&(s.$store.dispatch("showtostrMessageNotifications",{message:t.data.message,type:"success"}),s.project_am_option_val=null,s.getprojectam(),s.getprojectaccountmanagerfileter())}));case 6:t.close();case 7:case"end":return a.stop()}}),a)})))()},getprojectclientfileter:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/filters/get-project-clients?project_id="+r.$route.params.project_id}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_client_options=t.data.data)}));case 4:case"end":return e.stop()}}),e)})))()},onAddProjectClient:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e,a.disableSubmitBtnClient=!0,a.$v.project_client_option_val.$touch(),!a.$v.project_client_option_val.$invalid){r.next=7;break}return a.$store.dispatch("showtostrMessageNotifications",{message:"Please fill all the fields to proceed form!",type:"error"}),a.disableSubmitBtnClient=!1,r.abrupt("return");case 7:return s=a.$store.dispatch("postHttp",{url:"projects/update-project-client/"+a.$route.params.project_id,formDetails:{project_client:a.project_client_option_val,action:"add-client"},formEvent:t.target}),r.next=10,s.then((function(e){"undefined"!==typeof e&&(a.$store.dispatch("displayMessageErrors",{response:e,formEvent:t.target}),a.getprojectclient(),a.getprojectclientfileter(),a.$v.project_client_option_val.$reset(),a.project_client_option_val=null,a.disableSubmitBtnClient=!1)}));case 10:a.disableSubmitBtnClient=!1;case 11:case"end":return r.stop()}}),r)})))()},onDeleteClient:function(t,e){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=r,o=r.project_client.data[e].id,i=s.$store.dispatch("postHttp",{url:"projects/update-project-client/"+s.$route.params.project_id,formDetails:{project_client:o,action:"remove-client"},formEvent:""}),a.next=5,i.then((function(t){"undefined"!==typeof t&&(s.$store.dispatch("showtostrMessageNotifications",{message:t.data.message,type:"success"}),s.project_client_option_val=null,s.getprojectclient(),s.getprojectclientfileter())}));case 5:t.close();case 6:case"end":return a.stop()}}),a)})))()},getprojectstatuscategoryData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/projects/get-project-tools-data/"+t.$route.params.project_id+"?action=project_status"}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_status_val=t.data.data.id,r.project_status_name=t.data.data.status_name,r.project_status_loader=!1),r.loader=!1}));case 4:case"end":return e.stop()}}),e)})))()},getprojectmem:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/projects/get-project-tools-data/"+t.$route.params.project_id+"?action=project_mem"}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_members=t.data),r.project_member_loader=!1}));case 4:case"end":return e.stop()}}),e)})))()},getprojectam:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/projects/get-project-tools-data/"+t.$route.params.project_id+"?action=project_am"}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_am=t.data),r.project_am_loader=!1}));case 4:case"end":return e.stop()}}),e)})))()},getprojectclient:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,a=r.$store.dispatch("getHttp",{url:"/projects/get-project-tools-data/"+t.$route.params.project_id+"?action=project_client"}),e.next=4,a.then((function(t){"undefined"!==typeof t&&(r.project_client=t.data),r.project_client_loader=!1}));case 4:case"end":return e.stop()}}),e)})))()},doNothing:function(){}}}),m=p,_=(r("49fc"),r("2877")),v=Object(_["a"])(m,o,i,!1,null,"2db8bc0a",null),f=v.exports,j={components:{"adminvue-projects-settings-vue":f},computed:{getActiveUserData:function(){return this.$store.state.auth}}},b=j,g=Object(_["a"])(b,a,s,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=projects.others.settings.7af12e2c.js.map