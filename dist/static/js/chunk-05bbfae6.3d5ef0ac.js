(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05bbfae6"],{"16d8":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:t.id}})},i=[],n=e("db72"),l=(e("a7be"),e("44f8"),e("a6e0"),e("2c43"),e("bff0"),e("1487"),e("547e")),r=e.n(l),o={minHeight:"500px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,viewer:!0,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]},c={name:"MarkdownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return o}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=Object.assign({},o,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,a){t!==a&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new r.a(Object(n["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",(function(){t.$emit("input",t.editor.getValue())}))},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},d=c,u=e("2877"),g=Object(u["a"])(d,s,i,!1,null,null,null);a["a"]=g.exports},"395b":function(t,a,e){"use strict";e("5698")},5698:function(t,a,e){},6143:function(t,a,e){"use strict";e("a839")},"8e5f":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:t.id}})},i=[],n=e("db72"),l=(e("a7be"),e("44f8"),e("a6e0"),e("2c43"),e("16d8"),e("bff0")),r=e.n(l),o=e("1487"),c=e.n(o),d=e("547e"),u=e.n(d),g={minHeight:"500px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,viewer:!0,plugins:[[r.a,{hljs:c.a}]],toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]},h={name:"ViewerEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-viewer-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return g}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=Object.assign({},g,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,a){t!==a&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new u.a.factory(Object(n["a"])({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",(function(){t.$emit("input",t.editor.getValue())}))},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},p=h,v=e("2877"),_=Object(v["a"])(p,s,i,!1,null,null,null);a["a"]=_.exports},"905e":function(t,a,e){"use strict";e.d(a,"d",(function(){return i})),e.d(a,"e",(function(){return n})),e.d(a,"a",(function(){return l})),e.d(a,"g",(function(){return r})),e.d(a,"i",(function(){return o})),e.d(a,"h",(function(){return c})),e.d(a,"j",(function(){return d})),e.d(a,"c",(function(){return u})),e.d(a,"f",(function(){return g})),e.d(a,"b",(function(){return h}));var s=e("b775");function i(t){return Object(s["a"])({url:"/time/",method:"post",data:t})}function n(){return Object(s["a"])({url:"/time/",method:"delete"})}function l(){return Object(s["a"])({url:"/time/",method:"get"})}function r(t){return Object(s["a"])({url:"/timetemp/",method:"post",data:t})}function o(t){var a="";!0===t&&(a="flag"),"temp"===t&&(a="temp");var e="/timetemp/?query=&flag="+a;return Object(s["a"])({url:e,method:"get"})}function c(t){return Object(s["a"])({url:"/timetemp/"+t+"/",method:"delete",data:{id:t}})}function d(t){return void 0!==t&&null!==t||(t=1),Object(s["a"])({url:"/rank/user/?page="+t,method:"get"})}function u(t){return Object(s["a"])({url:"/time/"+t+"/get/",method:"get"})}function g(t,a){return void 0!==a&&null!==a||(a=1),Object(s["a"])({url:"/timerank/?value="+t+"&page="+a,method:"get"})}var h={getTimestamp:function(t){return new Date(t).getTime()/1e3}}},9406:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-container"},[s("el-dialog",{attrs:{visible:t.centerDialogVisible,title:"镜像信息"},on:{"update:visible":function(a){t.centerDialogVisible=a},close:t.handleDialogClose}},[0===this.countlist.length?s("i",{staticClass:"el-icon-reading",staticStyle:{position:"absolute","z-index":"9999",color:"rgb(140, 197, 255)",left:"100px",top:"21px","font-size":"20px"},on:{click:t.openDrawer},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}}):t._e(),t._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.startCon,expression:"startCon"}],staticClass:"text item",attrs:{"element-loading-text":"环境启动中"}},[s("div",{staticClass:"text item"},[t._v("\n        访问地址: "+t._s(t.vul_host)+"\n      ")]),t._v(" "),s("div",{staticClass:"text item"},[t._v("\n        映射端口：\n        "),t._l(t.vul_port,(function(a,e){return s("el-tag",{key:e,staticStyle:{"margin-right":"5px"}},[t._v("\n          "+t._s(e)+":"+t._s(a)+"\n        ")])}))],2),t._v(" "),s("div",{staticClass:"text item"},[t._v("\n        名称: "+t._s(t.images_name)+"\n      ")]),t._v(" "),s("div",{staticClass:"text item"},[t._v("\n        描述: "+t._s(t.images_desc)+"\n      ")]),t._v(" "),!0===t.is_flag?s("el-form",[s("el-form-item",{attrs:{label:"Flag"}},[s("el-input",{attrs:{placeholder:"请输入Flag：格式flag-{xxxxxxxx}"},model:{value:t.input,callback:function(a){t.input=a},expression:"input"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",disabled:t.cStatus},on:{click:function(a){t.subFlag(t.container_id,t.input.trim())}}},[t._v("提 交")])],1)],1):t._e(),t._v(" "),s("div",[s("el-drawer",{attrs:{title:t.images_name+" writeup",visible:t.drawer,size:"50%",direction:t.derection,modal:"false","append-to-body":"true","before-close":t.closeDrawer}},[s("div",[s("el-row",[s("el-col",{attrs:{span:1}}),t._v(" "),s("el-col",{attrs:{span:22}},[!1===t.drawerFlag&&""!==t.writeup_date?s("div",{staticClass:"container"},[s("ViewerEditor",{ref:"myset",attrs:{height:"600px"},model:{value:t.writeup_date,callback:function(a){t.writeup_date=a},expression:"writeup_date"}})],1):!1===t.drawerFlag&&""===t.writeup_date?s("div",{staticClass:"container"},[s("ViewerEditor",{ref:"myset",attrs:{height:"600px"},model:{value:t.writeup_date,callback:function(a){t.writeup_date=a},expression:"writeup_date"}}),t._v(" "),s("el-empty",{attrs:{description:"当前环境还没有writeup，赶紧去官网发表解题思路吧"}})],1):t._e()])],1)],1)])],1)],1)]),t._v(" "),0===this.countlist.length?s("el-card",{staticClass:"box-card"},[s("div",{staticStyle:{"margin-left":"10px"}},[s("el-input",{staticStyle:{width:"230px","margin-left":"6px"},attrs:{size:"medium"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleQuery(1)}},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),t._v(" "),s("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:function(a){return t.handleQuery(1)}}},[t._v("\n          查询\n        ")]),t._v(" "),s("el-button",{ref:"showTips",staticStyle:{left:"10px",display:"none"},attrs:{id:"first-bmh",type:"primary",size:"medium"},on:{click:t.showTips}},[t._v("新手引导")])],1),t._v(" "),s("div",{staticClass:"filter-line"},[s("div",{staticClass:"filter-name",staticStyle:{width:"150px"}},[t._v("\n        难易程度\n      ")]),t._v(" "),s("div",{staticClass:"filter-content"},t._l(t.DifficultyList,(function(a,e){return s("span",{class:t.activeClass1===e?"current":"",on:{click:function(s){return t.selectDiff(e,a)}}},[t._v(t._s(a.lable))])})),0)]),t._v(" "),s("div",{staticClass:"filter-line"},[s("div",{staticClass:"filter-name"},[t._v("\n        开发语言\n      ")]),t._v(" "),s("div",{staticClass:"filter-content"},[t._l(t.languageList,(function(a,e){return e<=t.taglength2?s("span",{class:t.activeClass2===e?"current":"",on:{click:function(s){return t.selectLan(e,a)}}},[t._v(t._s(a.value))]):t._e()})),t._v(" "),t.languageList.length>10?s("span",{staticStyle:{color:"#36a3f7"},on:{click:function(a){return t.showactive("taglength2")}}},[t._v(t._s(t.showBtnTag2?"更多...":"收起"))]):t._e()],2)]),t._v(" "),s("div",{staticClass:"filter-line"},[s("div",{staticClass:"filter-name"},[t._v("\n        漏洞类型\n      ")]),t._v(" "),s("div",{staticClass:"filter-content"},[t._l(t.degreeList,(function(a,e){return e<=t.taglength3?s("span",{class:t.activeClass3===e?"current":"",on:{click:function(s){return t.selectDeg(e,a)}}},[t._v(t._s(a.value))]):t._e()})),t._v(" "),t.degreeList.length>10?s("span",{staticStyle:{color:"#36a3f7"},on:{click:function(a){return t.showactive("taglength3")}}},[t._v(t._s(t.showBtnTag3?"更多...":"收起"))]):t._e()],2)]),t._v(" "),s("div",{staticClass:"filter-line"},[s("div",{staticClass:"filter-name"},[t._v("\n        数据库\n      ")]),t._v(" "),s("div",{staticClass:"filter-content"},[t._l(t.databaseList,(function(a,e){return e<=t.taglength5?s("span",{class:t.activeClass5===e?"current":"",on:{click:function(s){return t.selectSql(e,a)}}},[t._v(t._s(a.value))]):t._e()})),t._v(" "),t.databaseList.length>10?s("span",{staticStyle:{color:"#36a3f7"},on:{click:function(a){return t.showactive("taglength5")}}},[t._v(t._s(t.showBtnTag5?"更多...":"收起"))]):t._e()],2)]),t._v(" "),s("div",{staticClass:"filter-line"},[s("div",{staticClass:"filter-name"},[t._v("\n        框架\n      ")]),t._v(" "),s("div",{staticClass:"filter-content"},[t._l(t.classifyList,(function(a,e){return e<=t.taglength4?s("span",{class:t.activeClass4===e?"current":"",on:{click:function(s){return t.selectIfy(e,a)}}},[t._v(t._s(a.value))]):t._e()})),t._v(" "),t.classifyList.length>10?s("span",{staticStyle:{color:"#36a3f7"},on:{click:function(a){return t.showactive("taglength4")}}},[t._v(t._s(t.showBtnTag4?"更多...":"收起"))]):t._e()],2)])]):t._e(),t._v(" "),s("el-divider",{staticStyle:{"margin-top":"1px"}}),t._v(" "),s("el-tabs",{staticStyle:{"margin-top":"10px"},on:{"tab-click":t.currentTabs},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"全部",name:"all"}},[s("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:24,id:"first-bmh3"}},t._l(t.listdata,(function(a,i){return s("el-col",{key:i,staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[s("el-card",{attrs:{"body-style":{padding:"8px"},shadow:"hover"},nativeOn:{click:function(e){"running"===a.status.status&&t.open(a.image_id,a.image_vul_name,a.image_desc,a.status.status,a.status.container_id,a)}}},[s("div",{staticClass:"clearfix",staticStyle:{position:"relative"}},[s("div",{staticStyle:{position:"absolute",right:"0",top:"0"}},[!0===a.status.is_check?s("img",{staticStyle:{width:"60%",height:"60%",float:"right"},attrs:{src:e("c11c")}}):t._e()]),t._v(" "),s("div",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px","min-height":"20px","max-height":"20px"}},[s("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"bug"}}),t._v(" "),"stop"!==a.status.status&&"delete"!==a.status.status||!0!==a.status.is_check?"running"===a.status.status?s("el-tooltip",{attrs:{content:"运行中",placement:"top"}},[s("i",{staticClass:"el-icon-loading",staticStyle:{color:"#20a0ff"}})]):"stop"===a.status.status&&!1===a.status.is_check?s("el-tooltip",{attrs:{content:"暂停中",placement:"top"}},[s("svg-icon",{staticStyle:{color:"#20a0ff"},attrs:{"icon-class":"stop"}})],1):t._e():s("el-tooltip",{attrs:{content:"已通过",placement:"top"}}),t._v(" "),"running"===a.status.status&&null!==a.status.start_date&&""!==a.status.start_date&&null!==a.status.end_date&&""!==a.status.end_date&&0!==a.status.end_date?s("div",{staticStyle:{display:"inline-block",margin:"0"}},[s("el-tooltip",{attrs:{content:"容器剩余时间，0 为用不过期",placement:"top"}},[s("i",{staticClass:"el-icon-time"})]),t._v(" "),s("count-down",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px",size:"20px","margin-block-start":"0em","margin-block-end":"0em"},attrs:{currentTime:a.status.now,startTime:a.status.now,endTime:a.status.end_date,secondsTxt:""},on:{end_callback:function(e){return t.stop(a.status.container_id,a,t.expire)}}})],1):"running"===a.status.status&&null!==a.status.start_date&&""!==a.status.start_date&&null!==a.status.end_date&&""!==a.status.end_date&&0===a.status.end_date?s("div",{staticStyle:{display:"inline-block"}},[s("el-tooltip",{attrs:{content:"容器剩余时间，0 为用不过期",placement:"top"}},[s("i",{staticClass:"el-icon-time"})]),t._v(" "),s("p",{staticStyle:{display:"inline-block"}},[t._v("-1")])],1):s("div",{staticStyle:{display:"inline-block"}},[s("p",{staticStyle:{display:"inline-block","margin-block-start":"1em","margin-block-end":"1em"}})])],1),t._v(" "),s("div",{staticStyle:{"margin-top":"7px"}},[s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:a.rank,callback:function(e){t.$set(a,"rank",e)},expression:"item.rank"}})],1)]),t._v(" "),s("div",{staticStyle:{padding:"5px"}},[s("div",{staticClass:"container-title"},[s("span",[t._v(t._s(a.image_vul_name))])]),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("div",{staticClass:"time container-title"},[t._v(t._s(a.image_desc))])]),t._v(" "),s("el-row",["running"===a.status.status?s("el-button",{attrs:{type:"primary",disabled:a.status.stop_flag,size:"mini"},on:{click:function(e){return e.stopPropagation(),t.stop(a.status.container_id,a)}}},[t._v("停止")]):s("el-button",{attrs:{type:"primary",disabled:a.status.start_flag,size:"mini"},on:{click:function(e){return e.stopPropagation(),t.open(a.image_id,a.image_vul_name,a.image_desc,a.status.status,a.status.container_id,a)}}},[t._v("启动")]),t._v(" "),"running"===a.status.status||"stop"===a.status.status?s("el-button",{attrs:{type:"primary",disabled:a.status.delete_flag,size:"mini",icon:"el-icon-stopwatch"},on:{click:function(e){return e.stopPropagation(),t.deleteContainer(a.status.container_id,a)}}},[t._v("删除")]):t._e()],1)],1)])],1)})),1),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total1},on:{"current-change":t.handleQuery}})],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"已启动",name:"started"}},[s("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:24}},t._l(t.startedlistdata,(function(a,i){return s("el-col",{key:i,staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[s("el-card",{attrs:{"body-style":{padding:"8px"},shadow:"hover"},nativeOn:{click:function(e){"running"===a.status.status&&t.open(a.image_id,a.image_vul_name,a.image_desc,a.status.status,a.status.container_id,a)}}},[s("div",{staticClass:"clearfix",staticStyle:{position:"relative"}},[s("div",{staticStyle:{position:"absolute",right:"0",top:"0"}},[!0===a.status.is_check?s("img",{staticStyle:{width:"60%",height:"60%",float:"right"},attrs:{src:e("c11c")}}):t._e()]),t._v(" "),s("div",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px","min-height":"20px","max-height":"20px"}},[s("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"bug"}}),t._v(" "),"stop"!==a.status.status&&"delete"!==a.status.status||!0!==a.status.is_check?"running"===a.status.status?s("el-tooltip",{attrs:{content:"运行中",placement:"top"}},[s("i",{staticClass:"el-icon-loading",staticStyle:{color:"#20a0ff"}})]):"stop"===a.status.status&&!1===a.status.is_check?s("el-tooltip",{attrs:{content:"暂停中",placement:"top"}},[s("svg-icon",{staticStyle:{color:"#20a0ff"},attrs:{"icon-class":"stop"}})],1):t._e():s("el-tooltip",{attrs:{content:"已通过",placement:"top"}}),t._v(" "),"running"===a.status.status&&null!==a.status.start_date&&""!==a.status.start_date&&null!==a.status.end_date&&""!==a.status.end_date&&0!==a.status.end_date?s("div",{staticStyle:{display:"inline-block",margin:"0"}},[s("el-tooltip",{attrs:{content:"容器剩余时间，0 为用不过期",placement:"top"}},[s("i",{staticClass:"el-icon-time"})]),t._v(" "),s("count-down",{staticStyle:{display:"inline-block",height:"20px","line-height":"20px",size:"20px","margin-block-start":"0em","margin-block-end":"0em"},attrs:{currentTime:a.status.now,startTime:a.status.now,endTime:a.status.end_date,secondsTxt:""},on:{end_callback:function(e){return t.stop(a.status.container_id,a,t.expire)}}})],1):"running"===a.status.status&&null!==a.status.start_date&&""!==a.status.start_date&&null!==a.status.end_date&&""!==a.status.end_date&&0===a.status.end_date?s("div",{staticStyle:{display:"inline-block"}},[s("el-tooltip",{attrs:{content:"容器剩余时间，0 为用不过期",placement:"top"}},[s("i",{staticClass:"el-icon-time"})]),t._v(" "),s("p",{staticStyle:{display:"inline-block"}},[t._v("-1")])],1):s("div",{staticStyle:{display:"inline-block"}},[s("p",{staticStyle:{display:"inline-block","margin-block-start":"1em","margin-block-end":"1em"}})])],1),t._v(" "),s("div",{staticStyle:{"margin-top":"7px"}},[s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:a.rank,callback:function(e){t.$set(a,"rank",e)},expression:"item.rank"}})],1)]),t._v(" "),s("div",{staticStyle:{padding:"5px"}},[s("div",{staticClass:"container-title"},[s("span",[t._v(t._s(a.image_vul_name))])]),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("div",{staticClass:"time container-title"},[t._v(t._s(a.image_desc))])]),t._v(" "),s("el-row",["running"===a.status.status?s("el-button",{attrs:{type:"primary",disabled:a.status.stop_flag,size:"mini"},on:{click:function(e){return e.stopPropagation(),t.stop(a.status.container_id,a)}}},[t._v("停止")]):s("el-button",{attrs:{type:"primary",disabled:a.status.start_flag,size:"mini"},on:{click:function(e){return e.stopPropagation(),t.open(a.image_id,a.image_vul_name,a.image_desc,a.status.status,a.status.container_id,a)}}},[t._v("启动")]),t._v(" "),"running"===a.status.status||"stop"===a.status.status?s("el-button",{attrs:{type:"primary",disabled:a.status.delete_flag,size:"mini",icon:"el-icon-stopwatch"},on:{click:function(e){return e.stopPropagation(),t.deleteContainer(a.status.container_id,a)}}},[t._v("删除")]):t._e()],1)],1)])],1)})),1),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total2},on:{"current-change":t.handleQuery}})],1)],1)],1)],1)},i=[],n=(e("7f7f"),e("386d"),e("db72")),l=e("3007"),r=e("905e"),o=e("ea7f"),c=e("0dec"),d=e.n(c),u=e("5c96"),g=e("c24c"),h=e.n(g),p=(e("01d7"),e("16d8")),v=e("8e5f"),_=(e("a7be"),e("44f8"),e("a6e0"),e("2f62")),m=(e("bff0"),e("1487"),e("547e"),{inject:["reload"],name:"Dashboard",components:{CountDown:d.a,MarkdownEditor:p["a"],ViewerEditor:v["a"]},replace:!0,data:function(){return{page:{total1:0,total2:0,size:20},activeClass1:0,activeClass2:0,activeClass3:0,activeClass4:0,activeClass5:0,taglength2:10,taglength3:10,taglength4:10,taglength5:10,showBtnTag2:!0,showBtnTag3:!0,showBtnTag4:!0,showBtnTag5:!0,DifficultyList:[{value:0,lable:"全部"},{value:.5,lable:"入门"},{value:2,lable:"初级"},{value:3.5,lable:"中级"},{value:5,lable:"高级"}],drawerFlag:!1,drawer:!1,derection:"btt",listdata:[],startedlistdata:[],vul_host:"",radioStatus:!1,centerDialogVisible:!1,startCon:!1,startTime:(new Date).getTime(),input:"",images_id:"",container_id:"",images_name:"",writeup_date_name:"",images_desc:"",writeup_date:"",is_flag:!0,expire:!0,is_docker_compose:!1,item_raw_data:"",cStatus:!0,search:"",searchForm:{time_img_type:"",rank_range:0},user:{greenhand:!1},vul_port:{},countlist:[],notifications:{},degreeList:[{value:"全部"}],languageList:[{value:"全部"}],databaseList:[{value:"全部"}],classifyList:[{value:"全部"}],allTag:[],allTag2:[],allTag3:[],allTag4:[],allTag5:[],searchRank:0,loading:!0,firstLogin:!1,current_page:1,open_flag:!1,activeName:"all"}},created:function(){this.listData(1),this.timeData(),this.getUser()},beforeDestroy:function(){u["Notification"].closeAll()},computed:Object(n["a"])({},Object(_["b"])(["name","avatar","roles","rank","email","greenhand"])),methods:{timeData:function(){var t=this,a=this.$createElement;Object(r["a"])().then((function(e){t.countlist=e.data.results,0===t.countlist.length||(t.countlist[0].end_date=r["b"].getTimestamp(t.countlist[0].end_date),t.countlist[0].start_date=r["b"].getTimestamp(t.get_time),t.$notify({title:"计时模式",message:a("count-down",{attrs:{currentTime:t.countlist[0].start_date,startTime:t.countlist[0].start_date,endTime:t.countlist[0].end_date,dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒"}}),duration:0,position:"bottom-right",showClose:!1,dangerouslyUseHTMLString:!0}))}))},changetableinit:function(){this.current_page=1,this.loading=!0,this.listdata=[],this.page.total=0},listData:function(){var t=this;Object(l["e"])().then((function(a){t.listdata=a.data.results,t.page.total=a.data.count,t.degreeList=[{value:"全部"}],t.languageList=[{value:"全部"}],t.databaseList=[{value:"全部"}],t.classifyList=[{value:"全部"}];for(var e=0;e<a.data.degree["HoleType"].length;e++)t.degreeList.push({value:a.data.degree["HoleType"][e]});for(var s=0;s<a.data.degree["devLanguage"].length;s++)t.languageList.push({value:a.data.degree["devLanguage"][s]});for(var i=0;i<a.data.degree["devDatabase"].length;i++)t.databaseList.push({value:a.data.degree["devDatabase"][i]});for(var n=0;n<a.data.degree["devClassify"].length;n++)t.classifyList.push({value:a.data.degree["devClassify"][n]});for(var l=0;l<t.listdata.length;l++)t.listdata[l].status.start_flag=!1,t.listdata[l].status.stop_flag=!1,t.listdata[l].status.delete_flag=!1;t.loading=!1,!0===t.user.greenhand&&(0===t.page.total&&t.$message({message:"当前没有入门镜像，请联系管理员",type:"warning"}),!1===t.loading&&!1===t.firstLogin&&t.$nextTick((function(){t.showTips(),t.firstLogin=!0})))}))},getselectdata:function(){var t=this,a=this.$loading({lock:!0,text:"Loading",background:"rgba(255,255,255,0.4)",target:document.querySelector("#first-bmh3")}),e=[];e=e.concat(this.allTag5,this.allTag2,this.allTag3,this.allTag4),this.search="",Object(l["e"])(this.search,void 0,void 0,!0,e,this.searchRank,this.activeName).then((function(e){if(a.close(),"started"===t.activeName){t.startedlistdata=e.data.results,t.page.total2=e.data.count;for(var s=0;s<t.startedlistdata.length;s++)t.listdata[s].status.start_flag=!1,t.listdata[s].status.stop_flag=!1,t.listdata[s].status.delete_flag=!1}else{t.listdata=e.data.results,t.page.total1=e.data.count;for(var i=0;i<t.listdata.length;i++)t.listdata[i].status.start_flag=!1,t.listdata[i].status.stop_flag=!1,t.listdata[i].status.delete_flag=!1}})).catch((function(t){}))},open:function(t,a,e,s,i,n){var r=this;this.images_id="",this.images_name="",this.images_desc="",this.container_id="",this.item_raw_data="",this.vul_host="",this.startCon="loading",this.cStatus=!0,this.item_raw_data=n,this.images_id=t,this.images_name=a,this.images_desc=e,this.is_flag=n.is_flag,this.writeup_date=n.writeup_date,this.writeup_date_name=n.writeup_date_name,this.centerDialogVisible=!0,this.open_flag=!1,!1===this.open_flag&&this.$set(n.status,"start_flag",!0),this.$forceUpdate(),!0===n.status.is_check&&this.$message({message:"该题目已经通过，重复答题分数不会累计",type:"success"}),"running"===n.status.status?(this.images_id=n.image_id,this.vul_host=n.status.host,this.vul_port=JSON.parse(n.status.port),this.container_id=n.status.container_id,this.startCon=!1,this.cStatus=!1,this.writeup_date=n.writeup_date,this.is_docker_compose=n.is_docker_compose,this.is_flag=n.is_flag,!0===this.user.greenhand&&this.$nextTick((function(){r.openDrawer()}))):Object(l["c"])(t).then((function(t){var a=t.data["data"],e=window.setInterval((function(){setTimeout((function(){Object(o["b"])(a).then((function(t){var a=t.data["status"],s=t.data;1001===a||(clearInterval(e),n.status.start_flag=!1,200===a?(i=s["data"]["id"],r.container_id=i,r.vul_host=s["data"]["host"],r.vul_port=s["data"]["port"],n.status.now=s["data"]["_now"],n.status.start_date=s["data"]["start_date"],n.status.end_date=s["data"]["end_date"],n.status.status=s["data"]["status"],n.status.container_id=i,r.startCon=!1,r.cStatus=!1,r.images_id=n.image_id,!0===r.user.greenhand&&r.$nextTick((function(){r.openDrawer()}))):(r.$message({message:t.data["msg"],type:"error"}),r.listData(1),r.timeData(),r.centerDialogVisible=!1))}))}),1)}),2e3)}))},subFlag:function(t,a){var e=this;Object(l["g"])(t,a).then((function(t){e.input="";var a=t.data;200===a["status"]?(e.$message({message:"恭喜！通过",type:"success"}),e.$store.state.user.greenhand=!1,e.open_flag=!0,e.centerDialogVisible=!1):(a.status,e.$message({message:a["msg"],type:"error"})),e.item_raw_data.status.status="stop",e.item_raw_data.status.start_flag=!1}))},stop:function(t,a,e){var s=this;this.$set(a.status,"stop_flag",!0),this.$forceUpdate(),Object(l["i"])(t).then((function(i){if(200===i.data.code&&"stop"===i.data.status){s.$message({message:"停止成功",type:"success"}),a.status.stop_flag=!1,a.status.start_date="",a.status.end_date="";var n=[];if(n=n.concat(s.allTag5,s.allTag2,s.allTag3,s.allTag4),n.length>0||0!==s.searchRank||""!==s.search){var r=parseInt(s.page.total/s.page.size);1===s.listdata.length&&s.current_page==r+1&&s.current_page>1?(s.current_page-=1,Object(l["e"])(s.search,void 0,s.current_page,!0,n,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))):Object(l["e"])(s.search,void 0,s.current_page,!0,n,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))}else{var c=parseInt(s.page.total/s.page.size);1===s.listdata.length&&s.current_page===c+1&&s.current_page>1?(s.current_page-=1,Object(l["e"])(void 0,void 0,s.current_page,void 0,n,void 0,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))):Object(l["e"])(void 0,void 0,s.current_page,void 0,n,void 0,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))}}else if(200===i.data.code&&"delete"===i.data.status){s.$message({message:"停止成功",type:"success"}),a.status.stop_flag=!1,a.status.start_date="",a.status.end_date="",a.status.delete_flag=!1;var d=[];if(d=d.concat(s.allTag5,s.allTag2,s.allTag3,s.allTag4),d.length>0||0!==s.searchRank||""!==s.search){var u=parseInt(s.page.total/s.page.size);1===s.listdata.length&&s.current_page===u+1&&s.current_page>1?(s.current_page-=1,Object(l["e"])(s.search,void 0,s.current_page,!0,d,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))):Object(l["e"])(s.search,void 0,s.current_page,!0,d,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))}else{var g=parseInt(s.page.total/s.page.size);1===s.listdata.length&&s.current_page===g+1&&s.current_page>1?(s.current_page-=1,Object(l["e"])(void 0,void 0,s.current_page,void 0,d,void 0,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))):Object(l["e"])(void 0,void 0,s.current_page,void 0,d,void 0,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))}}else 200===i.data.code&&"running"===i.data.status&&Object(l["d"])(t,e).then((function(t){var e=t.data["data"],i=window.setInterval((function(){setTimeout((function(){Object(o["b"])(e).then((function(t){var e=t.data["status"],n=t.data;if(1001===e);else if(clearInterval(i),200===e){s.$message({message:n["msg"],type:"success"}),a.status.status="stop",a.status.start_date="",a.status.end_date="",a.status.stop_flag=!1;var r=[];if(r=r.concat(s.allTag5,s.allTag2,s.allTag3,s.allTag4),r.length>0||0!==s.searchRank||""!==s.search){var o=parseInt(s.page.total/s.page.size);1===s.listdata.length&&s.current_page===o&&s.current_page>1?(s.current_page-=1,Object(l["e"])(s.search,void 0,s.current_page,!0,r,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))):Object(l["e"])(s.search,void 0,s.current_page,!0,r,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))}else{var c=parseInt(s.page.total/s.page.size);1===s.listdata.length&&s.current_page==c&&s.current_page>1?(s.current_page-=1,Object(l["e"])(s.search,void 0,s.current_page,!0,r,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))):Object(l["e"])(s.search,void 0,s.current_page,!0,r,s.searchRank,s.activeName).then((function(t){"started"===s.activeName?(s.startedlistdata=t.data.results,s.page.total2=t.data.count):(s.listdata=t.data.results,s.page.total1=t.data.count)}))}}else s.$message({message:n["msg"],type:"error"})}))}),1)}),2e3)}))}))},deleteContainer:function(t,a){var e=this;this.$set(a.status,"delete_flag",!0),this.$set(a.status,"stop_flag",!0),this.$forceUpdate(),Object(l["a"])(t).then((function(t){var s=t.data["data"],i=window.setInterval((function(){setTimeout((function(){Object(o["b"])(s).then((function(t){var s=t.data["status"],n=t.data;if(1001===s);else if(clearInterval(i),a.status.delete_flag=!1,200===s){a.status.status="",e.images_id="",e.images_name="",e.images_desc="",e.container_id="",e.item_raw_data="",a.status.container_id="",e.$message({message:n["msg"],type:"success"});var r=[];if(r=r.concat(e.allTag5,e.allTag2,e.allTag3,e.allTag4),r.length>0||0!==e.searchRank||""!==e.search){var o=parseInt(e.page.total/e.page.size);1===e.listdata.length&&e.current_page===o+1&&e.current_page>1?(e.current_page-=1,Object(l["e"])(e.search,void 0,e.current_page,!0,r,e.searchRank,e.activeName).then((function(t){"started"===e.activeName?(e.startedlistdata=t.data.results,e.page.total2=t.data.count):(e.listdata=t.data.results,e.page.total1=t.data.count)}))):Object(l["e"])(e.search,void 0,e.current_page,!0,r,e.searchRank,e.activeName).then((function(t){"started"===e.activeName?(e.startedlistdata=t.data.results,e.page.total2=t.data.count):(e.listdata=t.data.results,e.page.total1=t.data.count)}))}else{var c=parseInt(e.page.total/e.page.size);1===e.listdata.length&&e.current_page===c+1&&e.current_page>1?(e.current_page-=1,Object(l["e"])(void 0,void 0,e.current_page,void 0,r,void 0,e.activeName).then((function(t){"started"===e.activeName?(e.startedlistdata=t.data.results,e.page.total2=t.data.count):(e.listdata=t.data.results,e.page.total1=t.data.count)}))):Object(l["e"])(void 0,void 0,e.current_page,void 0,r,void 0,e.activeName).then((function(t){"started"===e.activeName?(e.startedlistdata=t.data.results,e.page.total2=t.data.count):(e.listdata=t.data.results,e.page.total1=t.data.count)}))}}else e.$message({message:n["msg"],type:"error"})}))}),1)}),2e3)}))},handleQuery:function(t){var a=this,e=this.$loading({lock:!0,text:"Loading",background:"rgba(255,255,255,255.4)",target:document.querySelector("#first-bmh3")});this.current_page=t;var s=[];s=s.concat(this.allTag5,this.allTag2,this.allTag3,this.allTag4),Object(l["e"])(this.search,!1,t,!0,s,this.searchRank,this.activeName).then((function(t){e.close(),"started"===a.activeName?(a.startedlistdata=t.data.results,a.page.total2=t.data.count):(a.listdata=t.data.results,a.page.total1=t.data.count)}))},autoStop:function(){var t=this;Object(r["e"])().then((function(a){var e=a.data,s="success",i="";"2000"===e.code?i="计时模式已经关闭！":(s="error",i="关闭失败,内部错误"),t.$message({type:s,message:i})}))},handleDialogClose:function(){var t=this;if(!0!==this.open_flag){var a=[];a=a.concat(this.allTag5,this.allTag2,this.allTag3,this.allTag4),a.length>0||0!=this.searchRank||""!=this.search?Object(l["e"])(this.search,void 0,this.current_page,!0,a,this.searchRank,this.activeName).then((function(a){"started"===t.activeName?(t.startedlistdata=a.data.results,t.page.total2=a.data.count):(t.listdata=a.data.results,t.page.total1=a.data.count),t.page.total=a.data.count})):Object(l["e"])(void 0,void 0,this.current_page,void 0,a,void 0,this.activeName).then((function(a){"started"===t.activeName?(t.startedlistdata=a.data.results,t.page.total2=a.data.count):(t.listdata=a.data.results,t.page.total1=a.data.count)}))}},closeDrawer:function(t){this.drawer=!1},openDrawer:function(){var t=this;Object(l["h"])(this.images_id).then((function(a){200===a.data.code&&(t.writeup_date=a.data.data.writeup_date,t.writeup_date_name=a.data.data.username,t.drawer=!0)}))},editorButton:function(){this.drawerFlag=!0},closeEditorButton:function(){this.drawerFlag=!1},showTips:function(){var t=new h.a({prevBtnText:"上一步",nextBtnText:"下一步",doneBtnText:"完成",closeBtnText:"关闭",allowClose:!1}),a=[{element:"#first-bmh3",popover:{title:"提示",description:'启动入门镜像,启动后可以点击镜像信息旁的<i  class="el-icon-reading"  style="color: rgb(140, 197, 255);font-size: 20px"></i>了解漏洞镜像！成功提交flag后可以解除新手模式，查看所有漏洞环境',position:"top"}}];t.defineSteps(a),t.start()},startloading:function(){this.$loading({lock:!0,text:"Loading",background:"rgba(0,0,0,0.7)",target:document.querySelector("#first-bmh3")})},getUser:function(){this.user={greenhand:this.greenhand}},showactive:function(t){var a=t;"taglength2"===a&&(this.showBtnTag2?this.taglength2=this.languageList.length:this.taglength2=10,this.showBtnTag2=!this.showBtnTag2),"taglength3"===a&&(this.showBtnTag3?this.taglength3=this.degreeList.length:this.taglength3=10,this.showBtnTag3=!this.showBtnTag3),"taglength4"===a&&(this.showBtnTag4?this.taglength4=this.classifyList.length:this.taglength4=10,this.showBtnTag4=!this.showBtnTag4),"taglength5"===a&&(this.showBtnTag5?this.taglength5=this.databaseList.length:this.taglength5=10,this.showBtnTag5=!this.showBtnTag5)},selectLan:function(t,a){this.current_page=1,this.activeClass2=t,this.allTag2.splice(0,1),"全部"===a.value||this.allTag2.push(a.value),this.getselectdata()},selectIfy:function(t,a){this.current_page=1,this.activeClass4=t,this.allTag4.splice(0,1),"全部"===a.value||this.allTag4.push(a.value),this.getselectdata()},selectDiff:function(t,a){this.current_page=1,this.activeClass1=t,this.searchRank=a.value,this.getselectdata()},selectDeg:function(t,a){this.current_page=1,this.activeClass3=t,this.allTag3.splice(0,1),"全部"===a.value||this.allTag3.push(a.value),this.getselectdata()},selectSql:function(t,a){this.current_page=1,this.activeClass5=t,this.allTag5.splice(0,1),"全部"===a.value||this.allTag5.push(a.value),this.getselectdata()},currentTabs:function(t,a){var e=this;this.activeName=t.name,this.changetableinit();var s=[];s=s.concat(this.allTag5,this.allTag2,this.allTag3,this.allTag4),s.length>0||0!=this.searchRank||""!=this.search?Object(l["e"])(this.search,void 0,this.current_page,!0,s,this.searchRank,this.activeName).then((function(t){"started"===e.activeName?(e.startedlistdata=t.data.results,e.page.total2=t.data.count):(e.listdata=t.data.results,e.page.total1=t.data.count),e.loading=!1})):Object(l["e"])(void 0,void 0,this.current_page,void 0,s,void 0,this.activeName).then((function(t){"started"===e.activeName?(e.startedlistdata=t.data.results,e.page.total2=t.data.count):(e.listdata=t.data.results,e.page.total1=t.data.count),e.loading=!1}))}},mounted:function(){var t=this,a=(new Date).getFullYear(),e=(new Date).getMonth()+1,s=(new Date).getDate(),i=(new Date).getHours(),n=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),l=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();t.get_time=a+"-"+e+"-"+s+" "+i+":"+n+":"+l}}),f=m,b=(e("6143"),e("395b"),e("2877")),y=Object(b["a"])(f,s,i,!1,null,"bde1f1be",null);a["default"]=y.exports},a839:function(t,a,e){},c11c:function(t,a,e){t.exports=e.p+"static/img/Customs.323bde27.png"},ea7f:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"a",(function(){return n})),e.d(a,"d",(function(){return l})),e.d(a,"c",(function(){return r}));var s=e("b775");function i(t){return Object(s["a"])({url:"/tasks/"+t+"/get/",method:"get"})}function n(t){return Object(s["a"])({url:"/tasks/batch/batch/",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/tasks/"+t+"/progress/",method:"get"})}function r(t){return Object(s["a"])({url:"/tasks/layout_batch/layout_batch/",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-05bbfae6.3d5ef0ac.js.map