(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25509dc8"],{"1da1":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("d3b7"),a("e6cf");function r(e,t,a,r,s,n,i){try{var o=e[n](i),l=o.value}catch(c){return void a(c)}o.done?t(l):Promise.resolve(l).then(r,s)}function s(e){return function(){var t=this,a=arguments;return new Promise((function(s,n){var i=e.apply(t,a);function o(e){r(i,s,n,o,l,"next",e)}function l(e){r(i,s,n,o,l,"throw",e)}o(void 0)}))}}},"2e0a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline",form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"手机号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telephone",{rules:[{required:!1,message:"请输入手机号"}]}],expression:"[\n                'telephone',\n                {rules: [{ required: false, message: '请输入手机号' }]}\n              ]"}],attrs:{placeholder:"输入手机号查找"}})],1)],1),a("a-col",{attrs:{md:4,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary",htmlType:"submit"}},[e._v("搜索")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.handleReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.createModal.add()}}},[e._v("添加员工")])],1),a("a-table",{attrs:{loading:e.loading,columns:e.columns,pagination:e.pagination,rowKey:"id",dataSource:e.data},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"avatar",fn:function(e){return a("span",{},[a("img",{style:{width:"38px",height:"38px",borderRadius:"100px"},attrs:{src:e,alt:""}})])}},{key:"action",fn:function(t){return a("span",{},[[a("a",{on:{click:function(a){return e.$refs.createModal.edit(t)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.onDelete(t.id)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])]],2)}}])}),a("personnel-add",{ref:"createModal",on:{ok:e.handleOk}})],1)},s=[],n=a("5530"),i=(a("96cf"),a("1da1")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:640,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"头像","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"decorator",rawName:"v-decorator",value:["imageAddress",{rules:[{required:!0,message:"请上传头像"}]}],expression:"['imageAddress', {rules: [{required: true, message: '请上传头像'}]}]"}],attrs:{placeholder:"请输入账户名称"}}),a("a-upload",{staticClass:"avatar-uploader",attrs:{name:"file",listType:"picture-card",showUploadList:!1,action:e.UPLOAD_HOST},on:{change:e.handleChange}},[e.imageUrl?a("img",{staticStyle:{width:"100px"},attrs:{src:e.imageUrl,alt:"avatar"}}):a("div",[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("上传")])],1)])],1),a("a-form-item",{attrs:{label:"账户名称","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:"请输入账户名称"}]}],expression:"['account', {rules: [{required: true, message: '请输入账户名称'}]}]"}],attrs:{placeholder:"请输入账户名称"}})],1),a("a-form-item",{attrs:{label:"姓名","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入姓名"}]}],expression:"['name', {rules: [{required: true, message: '请输入姓名'}]}]"}],attrs:{placeholder:"请输入姓名"}})],1),a("a-form-item",{attrs:{label:"账户密码","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入账户密码"}]}],expression:"['password', {rules: [{required: true, message: '请输入账户密码'}]}]"}],attrs:{type:"password",placeholder:"请输入账户密码"}})],1),a("a-form-item",{attrs:{label:"性别","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{rules:[{required:!0,message:"请选择"}]}],expression:"['sex', {rules: [{ required: true, message: '请选择' }]}]"}],attrs:{placeholder:"请选择"}},[a("a-select-option",{key:1,attrs:{value:"MAN"}},[e._v("男")]),a("a-select-option",{key:2,attrs:{value:"WOMAN"}},[e._v("女")])],1)],1),a("a-form-item",{attrs:{label:"住址","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{rules:[{required:!0,message:"请输入住址"}]}],expression:"['address', {rules: [{required: true, message: '请输入住址'}]}]"}],attrs:{placeholder:"请输入住址"}})],1),a("a-form-item",{attrs:{label:"联系方式","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telephone",{rules:[{required:!0,message:"请输入手机号"}]}],expression:"['telephone', {rules: [{required: true, message: '请输入手机号'}]}]"}],attrs:{placeholder:"请输入手机号"}})],1),a("a-form-item",{attrs:{label:"入职时间","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["entryTime",{rules:[{required:!0,message:"请输入员工入职时间"}]}],expression:"['entryTime', {rules: [{required: true, message: '请输入员工入职时间'}]}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD HH:mm:ss",placeholder:"请输入员工入职时间"}})],1),a("a-form-item",{attrs:{label:"账号角色","label-col":{span:5},"wrapper-col":{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleListids",{rules:[{required:!0,message:"请选择账号角色"}]}],expression:"[ 'roleListids', {rules: [{ required: true, message: '请选择账号角色' }]}]"}],attrs:{mode:"multiple",placeholder:"请选择账号角色"}},e._l(e.selectList,(function(t,r){return a("a-select-option",{key:r,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1)],1)],1)],1)},l=[],c=(a("b0c0"),a("d3b7"),a("25f0"),a("da71")),d=a("c1df"),u=a.n(d),m=a("365c"),p={data:function(){return{UPLOAD_HOST:c["d"],moment:u.a,visible:!1,confirmLoading:!1,form:this.$form.createForm(this),title:null,roleList:[],selectList:[],record:{},loading:!1,imageUrl:"",id:null}},created:function(){this.getRole()},methods:{handleChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&(this.imageUrl=e.file.response.result.fileName,this.form.setFieldsValue({imageAddress:this.imageUrl}),this.loading=!1):this.loading=!0},getRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["W"])({});case 2:a=t.sent,r=a.result,s=a.httpCode,n=a.message,console.log(n),200===s&&(e.selectList=r);case 8:case"end":return t.stop()}}),t)})))()},add:function(){this.form.resetFields(),this.imageUrl="",this.id=null,this.title="新增员工账户",this.visible=!0},edit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.title="修改员工账户",console.log(e),t.visible=!0,a.next=5,t.editList({id:e.id});case 5:t.$nextTick((function(){t.imageUrl=t.record.imageAddress,t.id=t.record.id,t.form.setFieldsValue({imageAddress:t.record.imageAddress,account:t.record.account,name:t.record.name,password:t.record.password,sex:t.record.sex,address:t.record.address,telephone:t.record.telephone,entryTime:t.record.entryTime?u()(t.record.entryTime,"YYYY-MM-DD HH:mm:ss"):"",roleListids:t.record.roleList})}));case 6:case"end":return a.stop()}}),a)})))()},handleSubmit:function(){var e=this;this.confirmLoading=!0,this.form.validateFields((function(t,a){console.log(a),t?e.confirmLoading=!1:(console.log("values",a),a.entryTime=u()(a.entryTime).format("YYYY-MM-DD HH:mm:ss"),a.roleListids=a.roleListids.toString(),a.imageAddress=e.imageUrl,a=e.id?Object.assign({},a,{id:e.id}):a,e.$emit("ok",a))}))},handleCancel:function(){this.visible=!1},editList:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,Object(m["U"])(e);case 3:r=a.sent,s=r.result,n=r.httpCode,i=r.message,200===n?t.record=s:t.$message.error(i);case 8:case"end":return a.stop()}}),a)})))()}}},g=p,f=a("2877"),h=Object(f["a"])(g,o,l,!1,null,null,null),v=h.exports,b=[{title:"员工头像",dataIndex:"imageAddress",scopedSlots:{customRender:"avatar"}},{title:"员工名",key:"name",dataIndex:"name"},{title:"性别",key:"sexName",dataIndex:"sexName"},{title:"手机号",key:"telephone",dataIndex:"telephone"},{title:"住址",key:"address",dataIndex:"address"},{title:"考勤打卡",key:"signInCount",dataIndex:"signInCount"},{title:"入职时间",key:"entryTime",dataIndex:"entryTime"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],w={current:1,defaultPageSize:5,total:0,pageSizeOptions:["5","10","50","100"],showSizeChanger:!0,showQuickJumper:!0},x={name:"PersonnelList",components:{PersonnelAdd:v},data:function(){return{form:this.$form.createForm(this),columns:b,data:[],pagination:w,selectedRowKeys:[],selectedRows:[],loading:!1}},created:function(){this.getList()},methods:{handleOk:function(e){this.addList(e),console.log(e)},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||(t.pagination.current=1,t.getList(a))}))},handleTableChange:function(e){this.getList({pageIndex:e.current,pageSize:e.pageSize}),this.pagination.current=e.current,this.pagination.pageSize=e.pageSize,this.pagination.defaultPageSize=e.pageSize,console.log(e)},handleReset:function(){this.form.resetFields(),this.getList()},onDelete:function(e){this.delList(e),console.log(e)},delList:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(m["T"])({id:e});case 2:r=a.sent,s=r.result,n=r.httpCode,i=r.message,200===n?(t.getList(),t.$message.success(i),console.log(s)):t.$message.error(i);case 7:case"end":return a.stop()}}),a)})))()},addList:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.id){a.next=6;break}return a.next=3,Object(m["X"])(e);case 3:a.t0=a.sent,a.next=9;break;case 6:return a.next=8,Object(m["S"])(e);case 8:a.t0=a.sent;case 9:r=a.t0,s=r.result,n=r.httpCode,i=r.message,200===n?(t.getList(),t.$message.success(i),console.log(s)):t.$message.error(i),t.$refs.createModal.visible=!1,t.$refs.createModal.confirmLoading=!1;case 16:case"end":return a.stop()}}),a)})))()},getList:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s,i,o,l,c,d,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.loading=!0,r=t.pagination,s=r.current,i=r.defaultPageSize,o=Object.assign({},Object(n["a"])({pageIndex:s,pageSize:i},t.form.getFieldsValue()),e),a.next=5,Object(m["V"])(o);case 5:l=a.sent,c=l.result,d=l.httpCode,u=l.message,200===d?(t.data=c.list,t.pagination.total=c.totalSize):t.$message.error(u),t.loading=!1;case 11:case"end":return a.stop()}}),a)})))()}}},y=x,k=Object(f["a"])(y,r,s,!1,null,null,null);t["default"]=k.exports}}]);