(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(7),c=a(4),o=a(1),l=(a(14),a(0)),u=function(e){var t=e.onSubmit,a=e.users,n=Object(o.useState)(""),i=Object(r.a)(n,2),s=i[0],c=i[1],u=Object(o.useState)(!1),d=Object(r.a)(u,2),m=d[0],j=d[1],b=Object(o.useState)(0),h=Object(r.a)(b,2),O=h[0],f=h[1],p=Object(o.useState)(!1),x=Object(r.a)(p,2),v=x[0],S=x[1];return Object(l.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),j(!s),S(!O),s&&O&&(c(""),f(0),t({title:s,completed:!1,userId:O}))},children:[Object(l.jsxs)("label",{className:"field",children:["Title: ",Object(l.jsx)("input",{type:"text","data-cy":"titleInput",value:s,onChange:function(e){c(e.target.value),j(!1)},placeholder:"Enter a title"}),m&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"user-id",children:"User: "}),Object(l.jsxs)("select",{id:"user-id","data-cy":"userSelect",value:O,onChange:function(e){f(+e.target.value),S(!1)},required:!0,children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),a.map((function(e){var t=e.id,a=e.name;return Object(l.jsx)("option",{value:t,children:a},t)}))]}),v&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},d=a(9),m=a.n(d),j=function(e){var t=e.user;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},b=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(l.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(l.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(b,{todo:e},e.id)}))})},O=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function f(e){return O.find((function(t){return e===t.id}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:f(e.userId)})}));function x(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id?e.id:0}))))+1}var v=function(){var e=Object(o.useState)(p),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsx)(u,{onSubmit:function(e){var t=Object(c.a)(Object(c.a)({},e),{},{id:x(a),user:f(e.userId)});n((function(e){return[].concat(Object(s.a)(e),[t])}))},users:O}),Object(l.jsx)(h,{todos:a})]})};i.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4efcd483.chunk.js.map