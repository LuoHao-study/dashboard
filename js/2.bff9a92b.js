webpackJsonp([2],{"7Vjb":function(t,e){},B1PU:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("n12u"),s("qwQ3"),s("uDYd");var a={name:"users",data:function(){var t={status:[{text:"已激活",value:"activated"},{text:"邮箱未激活",value:"email-unactivated"},{text:"手机未激活",value:"phone-unactivated"},{text:"已禁用",value:"forbidden"}],roles:[{text:"管理员",value:"administrator"},{text:"作者",value:"author"},{text:"编辑",value:"editor"},{text:"协同者",value:"contributor"},{text:"订阅者",value:"subscriber"}]};return{users:[],selections:[],total:0,size:20,page:1,search:"",sort:"",order:"",filter:{},filters:t,loading:!1}},created:function(){this.loadUsers()},methods:{loadUsers:function(){var t=this;this.loading=!0;var e={_page:this.page,_limit:this.size};return this.sort&&(e._sort=this.sort),this.order&&(e._order=this.order),this.search&&(e.q=this.search),Object.assign(e,this.filter),this.$services.user.get({params:e}).then(function(e){t.users=e.data,t.total=e.headers["x-total-count"]-0,t.loading=!1}).catch(function(e){console.error(e),t.loading=!1})},handleCurrentPageChange:function(t){this.page=t,this.loadUsers()},handlePageSizeChange:function(t){this.size=t,this.loadUsers()},handleSortChange:function(t){this.sort=t.prop,t.order&&(this.order="ascending"===t.order?"ASC":"DESC"),this.loadUsers()},handleFilterChange:function(t){Object.assign(this.filter,t),this.loadUsers()},handleSearch:function(){this.loadUsers()},handleToggleStatus:function(t){var e="forbidden"===t.status?"activated":"forbidden";this.$services.user.patch(t.id,{status:e}).then(function(e){return Object.assign(t,e.data)})},handleDeleteSelection:function(){var t=this;this.$confirm("此操作将永久删除选中用户, 是否继续?").then(function(){return t.selections.map(function(e){return t.$services.user.delete(e.id)})}).then(function(){return t.loadUsers()}).catch(function(t){return console.info(t)})},handleToggleSelection:function(t){var e=this,s=t?"activated":"forbidden";this.selections.forEach(function(t){return e.$services.user.patch(t.id,{status:s}).then(function(e){return Object.assign(t,e.data)})})},handleSelectionChange:function(t){this.selections=t}}},n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"heading"},[t.selections.length?s("h1",{staticClass:"title"},[t._v(t._s(t.selections.length)+"个被选中")]):s("h1",{staticClass:"title"},[t._v(t._s(t.total)+"个用户")]),s("transition",{attrs:{name:"fade"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.selections.length,expression:"selections.length"}],staticClass:"action"},[s("li",[s("a",{staticClass:"icon-before icon-checkmark",attrs:{href:"#"},on:{click:function(e){t.handleToggleSelection(!0)}}})]),s("li",[s("a",{staticClass:"icon-before icon-blocked",attrs:{href:"#"},on:{click:function(e){t.handleToggleSelection(!1)}}})]),s("li",[s("a",{staticClass:"icon-before icon-bin",attrs:{href:"#"},on:{click:t.handleDeleteSelection}})])])]),s("form",{staticClass:"search icon-before icon-search",on:{submit:function(e){return e.preventDefault(),t.handleSearch(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),s("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"}},[t._v("Add")])],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.users,"element-loading-text":"Loading..."},on:{"selection-change":t.handleSelectionChange,"filter-change":t.handleFilterChange,"sort-change":t.handleSortChange}},[s("el-table-column",{attrs:{type:"selection"}}),s("el-table-column",{attrs:{prop:"username",label:"Username","min-width":"180",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"user-info"},[s("img",{attrs:{src:e.row.meta.avatar,alt:"scope.row.name"}}),s("div",{staticClass:"names"},[s("router-link",{attrs:{to:"/"}},[t._v(t._s(e.row.username))]),s("span",[t._v(t._s(e.row.name))])],1)])]}}])}),s("el-table-column",{attrs:{prop:"status",label:"Status",width:"120",align:"center",filters:t.filters.status,"column-key":"status"},scopedSlots:t._u([{key:"default",fn:function(e){return["activated"===e.row.status?s("i",{staticClass:"status status-primary",attrs:{title:"Activated"},on:{click:function(s){t.handleToggleStatus(e.row)}}}):"email-unactivated"===e.row.status?s("i",{staticClass:"status status-warning",attrs:{title:"Email Unactivated"}}):"phone-unactivated"===e.row.status?s("i",{staticClass:"status status-warning",attrs:{title:"Phone Unactivated"}}):"forbidden"===e.row.status?s("i",{staticClass:"status status-danger",attrs:{title:"Forbidden"},on:{click:function(s){t.handleToggleStatus(e.row)}}}):t._e()]}}])}),s("el-table-column",{attrs:{prop:"email",label:"Email",width:"200",sortable:"custom"}}),s("el-table-column",{attrs:{prop:"phone",label:"Mobile",width:"140",sortable:"custom"}}),s("el-table-column",{attrs:{prop:"roles",label:"Role",width:"240",filters:t.filters.roles,"column-key":"roles"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.roles,function(e){return s("el-tag",{key:e,attrs:{type:"success"}},[t._v(t._s(e))])})}}])})],1),s("el-pagination",{attrs:{total:t.total,"page-size":t.size,"current-page":t.page,"page-sizes":[20,30,50],layout:"total, sizes, prev, pager, next"},on:{"size-change":t.handlePageSizeChange,"current-change":t.handleCurrentPageChange}})],1)},i=[],l=s("XyMi");function r(t){s("OoXd")}var o=!1,c=r,u=null,h=null,d=Object(l["a"])(a,n,i,o,c,u,h);e["default"]=d.exports},Jmrq:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"permissions"},n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"heading"},[s("h1",{staticClass:"title"},[t._v("Permissions")])])])}],l=s("XyMi"),r=!1,o=null,c=null,u=null,h=Object(l["a"])(a,n,i,r,o,c,u);e["default"]=h.exports},NNrz:function(t,e,s){"use strict";var a=s("zgIt");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},OoXd:function(t,e){},gHWw:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"roles"},n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"heading"},[s("h1",{staticClass:"title"},[t._v("Roles")])])])}],l=s("XyMi"),r=!1,o=null,c=null,u=null,h=Object(l["a"])(a,n,i,r,o,c,u);e["default"]=h.exports},qwQ3:function(t,e,s){s("Vg1y")("search",1,function(t,e,s){return[function(s){"use strict";var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a):new RegExp(s)[e](String(a))},s]})},rRYe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"profile"},n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page"},[s("hgroup",[s("h1",{staticClass:"title"},[s("a",{attrs:{href:"#",title:"我的个人资料"}},[t._v("我的个人资料")])]),s("h2",{staticClass:"heading"},[t._v("十年专业锅炉工程师（请勿当真，just for fun！）")])]),s("section",{staticClass:"panel"},[s("h2",{staticClass:"heading"},[t._v("基本资料")]),s("div",{staticClass:"content"},[s("ul",{staticClass:"two-column"},[s("li",[t._v("姓名：汪磊")]),s("li",[t._v("工作经验：十年")]),s("li",[t._v("联系邮箱："),s("a",{attrs:{href:"mailto:w@zce.me"}},[t._v("w@zce.me")])]),s("li",[t._v("联系电话：138-8888-8888")])])])]),s("section",{staticClass:"panel"},[s("h2",{staticClass:"heading"},[t._v("专业技能")]),s("div",{staticClass:"content"},[s("ol",[s("li",[t._v("精通 Firework、Dreamweaver、Illustrator 、Photoshop、Flash 等设计相关软件；")]),s("li",[t._v("精通 W3C 标准及规范，熟练使用 XHTML / CSS 独立完成整站开发；")])])])]),s("section",{staticClass:"panel"},[s("h2",{staticClass:"heading"},[t._v("项目经验")]),s("div",{staticClass:"content"},[s("ol",[s("li",[s("h3",[t._v("XXX项目（"),s("time",[t._v("2014/03--2014/04")]),t._v("）")]),s("ul",[s("li",[s("h5",[t._v("项目介绍")]),s("p",[t._v("很牛叉的项目，翔天商贸是国际物流行业一家专门从事进出口服饰贸易的公司。公司总部位香港，业务遍及欧美。随着公司不断发展壮大，旧的信息系统已无法满足公司的快速发展需求，妨碍公司成长，在此背景下，公司领导决定研发《翔天商贸综合管理平台》。 《翔天商贸综合管理平台》分三期完成。一期完成仓储管理（包括：采购单、仓库、货物、条形码、入库、出库、退货、盘点、库存、库存上限报警、统计查询）和展会管理（包括：展会管理、出单管理），形成货物统一数字化管理。二期完成货运全流程管理，包括购销合同、出货表统计、出口报运单、装箱单、委托书、发票、财务统计等。三期完成决策分析（包括：成本分析图、销售情况统计、重点客户、经营情况同期比对统计、工作绩效），为公司经营决策提供数据支持。 ")])]),s("li",[s("h5",[t._v("开发环境")]),s("p",[t._v("Windows 7、Visual Studio 2010、MySQL、SVN、NuGet")])]),s("li",[s("h5",[t._v("技术选型")]),s("p",[t._v("ASP.NET MVC、Unity、Entity Framework、NLog、Memcache、WCF、WebAPI、SignalR、Dapper、HTML5、ZeptoJS、jQuery、AngularJS")])]),s("li",[s("h5",[t._v("职责领域")]),s("ul",[s("li",[t._v("锅炉1")]),s("li",[t._v("锅炉2")]),s("li",[t._v("锅炉3")]),s("li",[t._v("锅炉4")]),s("li",[t._v("锅炉5")])])]),s("li",[s("h5",[t._v("相关链接")]),s("p",[t._v("项目线上地址：http://www.wedn.net")])])])])])])]),s("section",{staticClass:"panel"},[s("h2",{staticClass:"heading"},[t._v("工作经历")]),s("div",{staticClass:"content"},[s("ol",[s("li",[s("span",[t._v("2012/05 -- 至今")]),s("span",[t._v("阿里巴巴")]),s("span",[t._v("烧锅炉")])]),s("li",[s("span",[t._v("2011/07 -- 2012/04")]),s("span",[t._v("腾讯")]),s("span",[t._v("保安")])]),s("li",[s("span",[t._v("2000/01 -- 2005/01")]),s("span",[t._v("百度")]),s("span",[t._v("保洁")])])])])]),s("section",{staticClass:"panel"},[s("h2",{staticClass:"heading"},[t._v("Follow me")]),s("div",{staticClass:"content"},[s("ul",[s("li",[s("strong",[t._v("GitHub")]),t._v("：https://github.com/zce")]),s("li",[s("strong",[t._v("Blog")]),t._v("：https://blog.zce.me")]),s("li",[s("strong",[t._v("etc...")])])])])]),s("section",{staticClass:"panel"},[s("h2",{staticClass:"heading"},[t._v("我的态度")]),s("div",{staticClass:"content"},[s("p",[t._v("致力于简单、高效、易上手框架的开发等等一系列 致力于简单、高效、易上手框架的开发等等一系列 致力于简单、高效、易上手框架的开发等等一系列...")])])]),s("section",{staticClass:"panel"},[s("h2",{staticClass:"heading"},[t._v("最想做的事儿")]),s("div",{staticClass:"content"},[s("ol",[s("li",[t._v("个人知识体系建设及分享；")]),s("li",[t._v("放开视野，提高层面，为未来投资；")])])])])])}],l=s("XyMi");function r(t){s("7Vjb")}var o=!1,c=r,u=null,h=null,d=Object(l["a"])(a,n,i,o,c,u,h);e["default"]=d.exports},uDYd:function(t,e,s){"use strict";var a=s("Ds5P"),n=s("XSOZ"),i=s("FryR"),l=s("zgIt"),r=[].sort,o=[1,2,3];a(a.P+a.F*(l(function(){o.sort(void 0)})||!l(function(){o.sort(null)})||!s("NNrz")(r)),"Array",{sort:function(t){return void 0===t?r.call(i(this)):r.call(i(this),n(t))}})}});
//# sourceMappingURL=2.bff9a92b.js.map