(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function i(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"9f4a986e","chunk-a5624d06":"59780306"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-todo/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-navbar"),a("router-view")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sticky-top"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Vue App")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/users"}},[t._v("Users")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"VNavbar"},c=l,u=a("2877"),d=Object(u["a"])(c,i,o,!1,null,null,null),p=d.exports,f={name:"App",components:{VNavbar:p}},m=f,v=(a("034f"),Object(u["a"])(m,n,s,!1,null,null,null)),b=v.exports,h=(a("d3b7"),a("8c4f")),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"w-100 py-5 bg-light"},[a("div",{staticClass:"container text-center"},[a("h1",{staticClass:"font-weight-bold"},[t._v("Let's find posts!")]),a("p",{staticClass:"text-muted"},[t._v("Sorry about the color theme lol")]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:"/users"}},[t._v("Users")]),a("button",{staticClass:"btn btn-dark"},[t._v("Write")])],1)]),t._m(0),a("div",{staticClass:"w-100 pb-5 pt-1"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row pb-4"},[a("div",{staticClass:"col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filtrar"},domProps:{value:t.filter},on:{input:[function(e){e.target.composing||(t.filter=e.target.value)},t.filterPosts]}})])]),a("div",{staticClass:"row"},t._l(t.filterResult,(function(e){return a("div",{key:e.id,staticClass:"col-lg-4 mb-3"},[a("v-post",{attrs:{title:e.title,userId:e.userId,body:t._.truncate(e.body),id:e.id.toString()},on:{selected:t.selectPost}})],1)})),0)])]),a("v-modal",{attrs:{title:t.selected.title}},[a("p",{staticClass:"text-primary font-weight-bold"},[t._v("Author")]),a("p",[t._v(" "+t._s(t.selected.user.name)+" "),a("span",{staticClass:"text-muted"},[t._v("@"+t._s(t.selected.user.username))])]),a("p",[t._v(t._s(t.selected.user.email))]),a("hr",{staticClass:"mb-5"}),a("p",[t._v(t._s(t.selected.body))]),a("hr",{staticClass:"mt-5"}),a("p",{staticClass:"text-primary font-weight-bold"},[t._v(" Comments "),a("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.selected.comments.length))])]),t._l(t.selected.comments,(function(e){return a("div",{key:e.id},[a("p",[t._v(t._s(e.body))]),a("p",{staticClass:"text-muted"},[t._v(t._s(e.email))]),a("hr")])})),t._v(" // TODO: add comment input ")],2)],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-8 text-left"},[a("h2",[t._v("JSON placeholder")]),a("p",{staticClass:"text-muted"},[t._v("This posts come from a fake api")])]),a("div",{staticClass:"col-sm-12 col-lg-4"},[a("div",{staticClass:"btn-group float-lg-right mt-2",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("View")]),a("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("Axios")])])])])])}],C=(a("4de4"),a("7db0"),a("d81d"),a("4d63"),a("ac1f"),a("25f0"),a("96cf"),a("1da1")),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.title))]),a("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("@"+t._s(t.userId))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.body))]),a("a",{staticClass:"text-primary",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:t.clickSelectPost}},[t._v("See more")])])])},x=[],w={name:"VPost",props:["title","userId","body","id"],methods:{clickSelectPost:function(){this.$emit("selected",this.id)}}},k=w,O=Object(u["a"])(k,y,x,!1,null,null,null),j=O.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._t("default")],2),t._m(1)])])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],E={name:"VModal",props:["title"]},M=E,S=Object(u["a"])(M,P,R,!1,null,null,null),$=S.exports,T=a("c1fb"),V=a("2ef0"),A=a.n(V),N={name:"Home",components:{VPost:j,VModal:$},created:function(){this.findPosts(),this._=A.a},data:function(){return{posts:[],filterResult:[],filter:"",selected:{user:{},comments:[]}}},methods:{findPosts:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T["a"].find("posts");case 3:t.posts=e.sent,t.filterResult=t.posts,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},filterPosts:function(){var t=new RegExp(this.filter,"i"),e=A.a.map(this.posts,(function(e){if(t.test(e.title))return e}));this.filterResult=A.a.filter(e,(function(t){return void 0!=t}))},selectPost:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.posts.find((function(e){return e.id==t})),a.next=3,T["a"].findOne("users",r.userId);case 3:return n=a.sent,a.next=6,T["a"].findPopulate("post",r.userId,"comments");case 6:s=a.sent,r.user=n,r.comments=s,e.selected=r;case 10:case"end":return a.stop()}}),a)})))()}}},I=N,L=Object(u["a"])(I,_,g,!1,null,null,null),U=L.exports;r["a"].use(h["a"]);var H=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/users",name:"Users",component:function(){return a.e("chunk-a5624d06").then(a.bind(null,"ed81"))}}],J=new h["a"]({mode:"history",base:"/vue-todo/",routes:H}),q=J;a("1157"),a("4989"),a("845f");r["a"].config.productionTip=!1,new r["a"]({router:q,render:function(t){return t(b)}}).$mount("#app")},"845f":function(t,e,a){},"85ec":function(t,e,a){},c1fb:function(t,e,a){"use strict";a("99af"),a("d3b7"),a("96cf");var r=a("1da1"),n=a("bc3a"),s=a.n(n),i=s.a.create({baseURL:"https://jsonplaceholder.typicode.com"});e["a"]={find:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}throw"Must send model param";case 3:return e.next=5,i.get("/".concat(t));case 5:return a=e.sent,r=a.data,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e["catch"](0),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},findOne:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,t&&e){a.next=3;break}throw"Must send model and id params";case 3:return a.next=5,i.get("/".concat(t,"/").concat(e));case 5:return r=a.sent,n=r.data,a.abrupt("return",n);case 10:return a.prev=10,a.t0=a["catch"](0),a.abrupt("return",Promise.reject(a.t0));case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},findPopulate:function(t,e,a){return Object(r["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t&&e&&a){r.next=3;break}throw"Missing params";case 3:return r.next=5,i.get("/".concat(t,"/").concat(e,"/").concat(a));case 5:return n=r.sent,s=n.data,r.abrupt("return",s);case 10:return r.prev=10,r.t0=r["catch"](0),r.abrupt("return",Promise.reject(r.t0));case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}}});
//# sourceMappingURL=app.283185f3.js.map