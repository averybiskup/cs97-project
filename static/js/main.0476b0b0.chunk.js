(this.webpackJsonpcoursereview=this.webpackJsonpcoursereview||[]).push([[0],{10:function(e,t,c){},35:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),s=c.n(r),a=c(27),i=c.n(a),o=(c(35),c(7)),u=c.n(o),d=c(11),j=c(9),l=(c(10),c(6)),h=function(e){var t="/cs97-project/course/"+e.course_id;return Object(n.jsxs)("div",{className:"course-card",children:[Object(n.jsx)("div",{children:e.name}),Object(n.jsx)("div",{children:"COURSE IMAGE"}),Object(n.jsx)(l.b,{to:t,children:"Course Page"})]})},p=c(29),b=function(e){var t=Object(r.useState)(""),c=Object(j.a)(t,2),s=c[0],a=c[1],i=e.courses,o=function(e,t){if(!t)return e;var c=new p.a("id");c.addIndex("title"),c.addIndex("tags"),c.addDocuments(e);var n=c.search(t);return e.filter((function(e){return n.includes(e)}))}(Object.keys(i).map((function(e){return i[e]})),s);return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",id:"course-search",placeholder:"search",name:"s",onChange:function(e){return a(e.target.value)}}),o.map((function(e){return Object(n.jsx)(h,{name:e.title,course_id:e.id},e.id)}))]})},O=function(){return console.log("test"),{0:{id:0,title:"React Native",author:"Joe",tags:["React","React Native"]},1:{id:1,title:"Python",author:"Spud",tags:["Python"]},2:{id:2,title:"Node.js",author:"Natalie",tags:["Node","Node.js","Javascript"]}}},f=c(12),x=c.n(f),v=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object({NODE_ENV:"production",PUBLIC_URL:"/cs97-project",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_KEY,e.next=3,x.a.get("/api/getcourses").then((function(e){return 200==e.status?e.data:O()}));case 3:return e.sent,console.log("test"),e.abrupt("return",O());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.useState)(!0),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)({}),i=Object(j.a)(a,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),s(!1)}),[]),c?Object(n.jsx)("div",{children:"Loading Courses..."}):0==Object.keys(o).length?(l(O()),Object(n.jsx)("div",{children:"No Courses Loaded... Server is likely down."})):Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(b,{courses:o})})})},g=c(2),S=function(){var e=Object(g.f)(),t=e.pathname.split("/")[e.pathname.split("/").length-1];return Object(n.jsxs)("div",{className:"course-page",children:[Object(n.jsx)(l.b,{className:"home-button",to:"/cs97-project/",children:"Home"}),Object(n.jsxs)("div",{children:["This is course: ",t]})]})},N=function(){return Object(n.jsx)("div",{className:"course-page",children:Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){x.a.get("/api/addcourse")},children:"add course"})})})},E=function(){return Object(n.jsx)("div",{className:"Router",children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{exact:!0,path:"/cs97-project/",component:m}),Object(n.jsx)(g.a,{exact:!0,path:"/cs97-project/course/:id",component:S}),Object(n.jsx)(g.a,{exact:!0,path:"/cs97-project/addcourse",component:N})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),C()}},[[60,1,2]]]);
//# sourceMappingURL=main.0476b0b0.chunk.js.map