(this.webpackJsonpgrocerwes=this.webpackJsonpgrocerwes||[]).push([[0],{93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n.n(c),a=n(36),s=n.n(a),i=n(54),o=(Object(i.a)({apiKey:"AIzaSyDca6FZnMHcWozVNc6zBceLxXkT4KG0Hx4",authDomain:"grocerwes.firebaseapp.com",projectId:"grocerwes",storageBucket:"grocerwes.appspot.com",messagingSenderId:"874487437075",appId:"1:874487437075:web:1547724ac7eb979d9eece6",measurementId:"G-5SR9QNYJVM"}),n(16)),u=n(1),l=n.n(u),j=n(3),b=n(9),d=n(42),O=n(27),h=n(33),x=n(5),p=function(e){var t=e.id,n=e.value,r=e.completed,a=e.toggleCompleted,s=e.removeListItem,i=e.updateListItem,o=Object(c.useState)(!1),u=Object(b.a)(o,2),l=u[0],j=u[1],p=Object(c.useState)(n),f=Object(b.a)(p,2),m=f[0],v=f[1],g=(r?"completed":"")?Object(x.jsx)(d.a,{className:"list-row-checkmark",onClick:function(){return a(t)}}):Object(x.jsx)(d.b,{className:"list-row-checkmark",onClick:function(){return a(t)}}),k=function(){l&&n!==m&&i(t,m),j(!l)};return Object(x.jsxs)("div",{className:"list-row-container",children:[Object(x.jsxs)("div",{children:[g,l?Object(x.jsx)("input",{type:"text",value:m,onChange:function(e){v(e.target.value)}}):n]}),Object(x.jsxs)("div",{className:"list-row-options",children:[Object(x.jsx)(O.c,{onClick:function(){return s(t)}}),l?Object(x.jsx)(O.a,{onClick:function(){return k()}}):Object(x.jsx)(h.a,{onClick:function(){return k()}})]})]})},f=function(e){var t=e.addListItem,n=e.list,r=Object(c.useState)(""),a=Object(b.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)("1"===n.id?"Quick List":n.name),u=Object(b.a)(o,2),l=u[0],j=(u[1],function(e){e.preventDefault(),t(s),i("")});return Object(x.jsxs)("div",{className:"list-form-container",children:[l,Object(x.jsxs)("form",{onSubmit:j,className:"list-form",children:[Object(x.jsx)("input",{type:"text",value:s,onChange:function(e){i(e.target.value)},placeholder:"Name of item"}),Object(x.jsx)(O.b,{onClick:j})]})]})},m=n(97),v=n(15),g=n(55),k=n(24),w=r.a.createContext(),C=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(b.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!0),o=Object(b.a)(i,2),u=o[0],l=o[1];return Object(c.useEffect)((function(){Object(k.b)().onAuthStateChanged((function(e){console.log(e),s(e),l(!1)}))}),[]),u?Object(x.jsx)("h1",{children:"Loading..."}):Object(x.jsx)(w.Provider,{value:{currentUser:a},children:t})},N=n(28),S=n.n(N),L="https://grocerwes.herokuapp.com/",y=function(e){var t=e.closeList,n=e.list,r=void 0===n?{id:"1",rows:[]}:n,a=Object(c.useState)(r.rows||[]),s=Object(b.a)(a,2),i=s[0],u=s[1],d=Object(c.useContext)(w).currentUser,O="1"===r.id;Object(c.useEffect)((function(){if(O){var e=JSON.parse(localStorage.getItem("quick-list-items"));e&&u(e)}}),[]),Object(c.useEffect)((function(){Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=4;break}localStorage.setItem("quick-list-items",JSON.stringify(i)),e.next=14;break;case 4:return e.prev=4,console.log("hello?"),console.log(L),e.next=9,S()({method:"PUT",url:"".concat(L,"api/lists/").concat(r.id),headers:{Authorization:"Bearer "+d.accessToken},data:{rows:i}});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),v.b.error(e.t0.response.data.errorText);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))()}),[i]);var h=function(e){u(i.filter((function(t){return t.id!==e})))},k=function(e,t){var n=Object(o.a)(i);u(n.map((function(n){return n.id===e&&(n.value=t),n})))},C=function(e){var t=Object(o.a)(i);u(t.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))};return Object(x.jsxs)("div",{className:"list-container",children:[!O&&Object(x.jsx)("div",{className:"back-button",onClick:function(){t&&t()},children:Object(x.jsx)(g.a,{})}),Object(x.jsx)(f,{list:r,addListItem:function(e){e.trim()?u([].concat(Object(o.a)(i),[{value:e,id:Object(m.a)(),completed:!1}])):v.b.error("List item cannot be empty!")}}),i.length>0&&Object(x.jsx)("ul",{className:"list-items",children:i.map((function(e){var t=e.value,n=e.id,c=e.completed;return Object(x.jsx)("li",{children:Object(x.jsx)(p,{id:n,value:t,completed:c,toggleCompleted:C,removeListItem:h,updateListItem:k})},n)}))})]})},I=n(56),T=function(e){var t=e.history;Object(c.useContext)(w);return Object(x.jsxs)("div",{className:"login-page",children:[Object(x.jsx)("h1",{children:"Log in with Google"}),Object(x.jsx)(I.a,{onClick:function(){var e=Object(k.b)(),n=new k.a;Object(k.c)(e,n).then((function(e){k.a.credentialFromResult(e).accessToken,e.user;t.push("/")})).catch((function(e){e.code,e.message,e.email}))},children:"Login with google"})]})},D=n(57),A=n(38),E=function(e){var t=e.closeModal,n=e.handleNewList,r=Object(c.useState)(""),a=Object(b.a)(r,2),s=a[0],i=a[1],o=function(){var e=Object(j.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""===s){e.next=7;break}return e.next=4,n(s,"");case 4:t(),e.next=8;break;case 7:v.b.error("Name cannot be empty!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"modal",children:Object(x.jsxs)("form",{onSubmit:o,children:[Object(x.jsx)(A.a,{onClick:t}),Object(x.jsx)("h1",{children:"Create List"}),Object(x.jsxs)("div",{className:"modal-actions",children:[Object(x.jsx)("input",{type:"text",placeholder:"Enter name...",value:s,onChange:function(e){return i(e.target.value)}}),Object(x.jsx)("button",{children:"Create"})]})]})})},P=function(e){var t=e.closeModal,n=e.handleNewList,r=Object(c.useState)(""),a=Object(b.a)(r,2),s=a[0],i=a[1],o=function(){var e=Object(j.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""===s){e.next=7;break}return e.next=4,n("",s);case 4:t(),e.next=8;break;case 7:v.b.error("List ID cannot be empty!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"modal",children:Object(x.jsxs)("form",{onSubmit:o,children:[Object(x.jsx)("h1",{children:"Import List"}),Object(x.jsxs)("div",{className:"modal-actions",children:[Object(x.jsx)("input",{type:"text",placeholder:"Enter list ID...",value:s,onChange:function(e){return i(e.target.value)}}),Object(x.jsx)("button",{children:"Import"})]}),Object(x.jsx)(A.a,{onClick:t})]})})},U=function(e){var t=e.id,n=e.name,r=e.listLength,a=e.handleNameChange,s=e.handleDelete,i=Object(c.useState)(n),o=Object(b.a)(i,2),u=o[0],l=o[1],j=Object(c.useState)(!1),d=Object(b.a)(j,2),p=d[0],f=d[1],m=Object(c.useState)(!1),g=Object(b.a)(m,2),k=g[0],w=g[1],C=function(e){e.stopPropagation(),p&&n!==u&&a(t,u),f(!p)};return Object(x.jsxs)("div",{className:"my-list-row-container",children:[Object(x.jsx)("div",{children:p?Object(x.jsx)("input",{type:"text",value:u,onChange:function(e){return l(e.target.value)},onClick:function(e){return e.stopPropagation()}}):Object(x.jsxs)(x.Fragment,{children:[n," ",Object(x.jsxs)("span",{className:"list-length",children:["(",r,")"]})]})}),Object(x.jsxs)("div",{className:"action-buttons",children:[Object(x.jsx)(h.b,{onClick:function(e){return function(e){e.stopPropagation(),navigator.clipboard.writeText(t).then((function(){})),v.b.success("List ID copied to the clipboard!")}(e)}}),Object(x.jsx)(O.c,{onClick:function(e){e.stopPropagation(),w(!0),k||s(t)}}),p?Object(x.jsx)(O.a,{onClick:function(e){return C(e)}}):Object(x.jsx)(h.a,{onClick:function(e){return C(e)}})]})]})},z=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({}),s=Object(b.a)(a,2),i=s[0],u=s[1],d=Object(c.useState)(!1),O=Object(b.a)(d,2),h=O[0],p=O[1],f=Object(c.useState)(!1),m=Object(b.a)(f,2),g=m[0],k=m[1],C=Object(c.useState)(!1),N=Object(b.a)(C,2),I=N[0],T=N[1],A=Object(c.useState)(!1),z=Object(b.a)(A,2),B=z[0],M=z[1],F=Object(c.useContext)(w).currentUser,J=function(){var e=Object(c.useRef)(!1);return Object(c.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),H=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,a,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",c=s.length>1&&void 0!==s[1]?s[1]:"",e.prev=2,e.next=5,S()({method:"POST",url:"".concat(L,"api/lists"),headers:{Authorization:"Bearer "+F.accessToken},data:{name:t,listId:c}});case 5:(a=e.sent).data.list&&r([].concat(Object(o.a)(n),[a.data.list])),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v.b.error(e.t0.response.data.errorText);case 12:k(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(j.a)(l.a.mark((function e(t,c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S()({method:"PUT",url:"".concat(L,"api/lists/").concat(t),headers:{Authorization:"Bearer "+F.accessToken},data:{name:c}});case 3:200===e.sent.status&&J.current&&r(Object(o.a)(n.map((function(e){return e.id===t&&(e.name=c),e})))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v.b.error(e.t0.response.data.errorText);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S()({method:"DELETE",url:"".concat(L,"api/lists/").concat(t),headers:{Authorization:"Bearer "+F.accessToken}});case 3:J.current&&r(n.filter((function(e){return e.id!==t}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),v.b.error(e.t0.response.data.errorText);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){k(!g)},K=function(){M(!B)},Q=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),console.log(L),e.next=5,S.a.get("".concat(L,"api/lists"),{headers:{Authorization:"Bearer "+F.accessToken}});case 5:(t=e.sent).data.lists&&J.current&&(T(!1),r(Object(o.a)(t.data.lists))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){Q()}),[]),Object(x.jsxs)("div",{className:"my-lists-container",children:[g&&Object(x.jsx)(E,{closeModal:q,handleNewList:H}),B&&Object(x.jsx)(P,{closeModal:K,handleNewList:H}),h?Object(x.jsx)(y,{list:i,closeList:function(){p(!1),Q()}}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsx)("button",{onClick:q,children:"Add new"}),Object(x.jsx)("button",{onClick:K,children:"Import"})]}),Object(x.jsxs)("ul",{className:"lists-container",children:[I&&Object(x.jsx)(D.a,{className:"loading"}),!I&&n.map((function(e){return Object(x.jsx)("li",{className:"list-row",onClick:function(){return function(e){h?(p(!1),u({})):(u(e),p(!0))}(e)},children:Object(x.jsx)(U,{id:e.id,name:e.name,listLength:e.rows.length,handleNameChange:G,handleDelete:R})},e.id)}))]})]})]})},B=n(21),M=function(){var e=Object(c.useContext)(w).currentUser;return Object(x.jsx)("div",{className:"avatar",children:e&&Object(x.jsx)(B.b,{to:"/profile",children:function(t){console.log(e);var n=t.split(" ");return n.length>=2?n[0].charAt(0)+n[1].charAt(0):n[0].charAt(0)}(e.displayName)})})},F=function(e){e.isSignedIn;var t=e.handleLogout,n=Object(c.useContext)(w).currentUser,r=Object(c.useState)(""),a=Object(b.a)(r,2),s=a[0],i=a[1],o=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{onClick:t,children:"Logout"})}),Object(x.jsx)(M,{})]}),u=function(e){return e===s?"selected":""};return Object(x.jsxs)("nav",{className:"header",children:[Object(x.jsx)("div",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(B.b,{to:"/",className:u("/"),onClick:function(){return i("/")},children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(B.b,{to:"/lists",className:u("/lists"),onClick:function(){return i("/lists")},children:"Lists"})}),Object(x.jsx)("li",{children:Object(x.jsx)(B.b,{to:"/homes",className:u("/homes"),onClick:function(){return i("/homes")},children:"Homes"})})]})}),Object(x.jsx)("div",{children:Object(x.jsx)("ul",{children:n?o:Object(x.jsx)("li",{children:Object(x.jsx)(B.b,{to:"/login",children:"Login"})})})})]})},J=n(39),H=n(61),G=n(12),R=["component"],q=function(e){var t=e.component,n=Object(H.a)(e,R),r=Object(c.useContext)(w).currentUser;return Object(x.jsx)(G.b,Object(J.a)(Object(J.a)({},n),{},{render:function(e){return r?Object(x.jsx)(t,Object(J.a)({},e)):Object(x.jsx)(G.a,{to:"/login"})}}))};function K(){return Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(y,{})})}function Q(){return Object(x.jsx)("h2",{children:"Users"})}function V(){return Object(x.jsx)("h2",{children:"Profile"})}var W=function(){return Object(x.jsx)(C,{children:Object(x.jsx)(B.a,{children:Object(x.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(x.jsx)(F,{handleLogout:function(){Object(k.b)().signOut()}}),Object(x.jsx)(q,{exact:!0,path:"/lists",component:z}),Object(x.jsx)(q,{exact:!0,path:"/homes",component:Q}),Object(x.jsx)(q,{exact:!0,path:"/profile",component:V}),Object(x.jsx)(G.b,{exact:!0,path:"/login",component:T}),Object(x.jsx)(G.b,{exact:!0,path:"/",component:K}),Object(x.jsx)(v.a,{position:"bottom-right"})]})})})};n(93),n(94);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.438c3d62.chunk.js.map