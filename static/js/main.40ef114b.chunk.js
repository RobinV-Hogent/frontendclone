(this["webpackJsonprobin-quizzes"]=this["webpackJsonprobin-quizzes"]||[]).push([[0],{138:function(e,t,n){},16:function(e,t,n){"use strict";(function(e){n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return g}));var r=n(5),c=n.n(r),a=n(11),i=n(6),s=n(1),o=n(96),l=n(84),u=n(20),d=n(2),j=l.token_key,b=Object(s.createContext)();function h(t){if(!t)return{};var n=t.split(".")[1],r=e.from(n,"base64").toString("ascii");return JSON.parse(r)}function O(e){return e?("number"!==typeof e&&(e=Number(e)),isNaN(e)?null:new Date(1e3*e)):null}var x=function(){return Object(s.useContext)(b)},m=function(){var e=x(),t=e.loading,n=e.error,r=e.token;return{loading:t,error:n,token:r,user:e.user,ready:e.ready,isAuthed:Boolean(r)}},p=function(){return x().register},f=function(){return x().login},v=function(){return x().logout},g=function(e){var t=e.children,n=Object(s.useState)(!1),r=Object(i.a)(n,2),l=r[0],x=r[1],m=Object(s.useState)(!1),p=Object(i.a)(m,2),f=p[0],v=p[1],g=Object(s.useState)(""),y=Object(i.a)(g,2),w=y[0],q=y[1],z=Object(s.useState)(localStorage.getItem(j)),N=Object(i.a)(z,2),k=N[0],S=N[1],C=Object(s.useState)(null),B=Object(i.a)(C,2),F=B[0],I=B[1],D=Object(s.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(F),r=h(t),a=r.exp,i=r.userId,s=O(a),(l=s>=new Date)?localStorage.setItem(j,t):(localStorage.removeItem(j),t=null),Object(u.b)(t),S(t),x(l&&t),F||!l){e.next=12;break}return e.next=11,o.a(i);case 11:n=e.sent;case 12:I(n);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]);Object(s.useEffect)((function(){D(k)}),[k,D]);var L=Object(s.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),q(""),e.next=5,o.b(t,n);case 5:return r=e.sent,a=r.token,i=r.user,D(a,i),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),q("Login failed try again."),e.abrupt("return",!1);case 17:return e.prev=17,v(!1),console.log(F),e.finish(17);case 21:case"end":return e.stop()}}),e,null,[[0,12,17,21]])})));return function(t,n){return e.apply(this,arguments)}}(),[D,F]),A=Object(s.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,i,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,a=t.password,e.prev=1,v(!0),q(""),e.next=6,o.c({name:n,email:r,password:a});case 6:return i=e.sent,s=i.token,l=i.user,D(s,l),e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(1),console.log(e.t0),q("Something went wrong, try again."),e.abrupt("return",!1);case 18:return e.prev=18,v(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,13,18,21]])})));return function(t){return e.apply(this,arguments)}}(),[D]),E=Object(s.useCallback)((function(){D(null,null)}),[D]),Q=Object(s.useMemo)((function(){return{loading:f,error:w,token:k,user:F,login:L,logout:E,ready:l,register:A}}),[f,w,k,F,l,L,E,A]);return Object(d.jsx)(b.Provider,{value:Q,children:t})}}).call(this,n(163).Buffer)},169:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(35),i=n.n(a),s=(n(138),n(15)),o=n(17),l=n(3),u=n(2),d=function(e){var t=e.id,n=e.img,r=e.title;e.description,e.category;return Object(u.jsxs)("div",{className:"quiz-item",children:[Object(u.jsx)("img",{src:n,alt:"",className:"card-image"}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("div",{className:"card-title",children:r}),Object(u.jsx)("div",{className:"card-description",children:Object(u.jsx)(s.b,{to:"/quizzes/detail/".concat(t),children:Object(u.jsx)("button",{className:"sbutton noborder",children:"Play Quiz"})})})]})]})},j=function(e){var t=e.cat,n=e.quizzes;return Object(u.jsx)(u.Fragment,{children:n.filter((function(e){return e.category===t})).map((function(e){return Object(u.jsx)(d,Object(l.a)(Object(l.a)({},e),{},{className:"quiz-item"}),e.id)}))})},b=[{id:1,cat_name:"Cities"},{id:2,cat_name:"Games"},{id:3,cat_name:"Buildings"},{id:4,cat_name:"Animals"},{id:5,cat_name:"Languages"},{id:6,cat_name:"Music"},{id:7,cat_name:"Maths"},{id:8,cat_name:"Sports"}],h=n(177),O=n(56),x=n(23),m=n(5),p=n.n(m),f=n(11),v=n(20),g=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("quizzes").then((function(e){return e.data}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)({method:"delete",url:"quizzes/quiz/".concat(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("quizzes/quiz/id/".concat(t)).then((function(e){return e.data})).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(f.a)(p.a.mark((function e(t,n){var r,c,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.title,c=n.description,a=n.img,i=n.category,e.next=3,v.a.put("quizzes/quiz/".concat(t),{title:r,description:c,img:a,category:i});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function z(){var e=Object(x.useQuery)("quizzes",g,{refetchOnMount:!0}),t=e.data,n=e.isLoading,r=e.isError;return n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h.a,{animation:"border",variant:"primary"})," Loading"]}):r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:'"Error: Something went wrong try again later."'}),Object(u.jsx)(O.b,{className:"error-img"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),b.map((function(e){return Boolean(t.quizzes.find((function(t){return t.category===e.id})))?Object(u.jsxs)("div",{className:"quiz-slider",children:[Object(u.jsx)("h1",{id:e.cat_name,children:e.cat_name}),Object(u.jsx)("div",{className:"quiz-list",children:Object(u.jsx)(j,{cat:e.id,quizzes:t.quizzes})})]},e.id):Object(u.jsx)(u.Fragment,{})}))]})}var N=n(6),k=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("scores").then((function(e){return e.data.data}));case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.quiz,r=t.user,c=t.score,v.a.post("scores",{quiz:n,user:r,score:c});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)({method:"delete",url:"scores/score/".concat(t.id)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("scores/user/id/".concat(t)).then((function(e){return e.data}));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=n(181),I=n(122),D=n(178),L=n(16),A=n(67);function E(){var e=Object(r.useState)(0),t=Object(N.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(N.a)(a,2),l=i[0],d=i[1],j=Object(r.useState)(0),m=Object(N.a)(j,2),v=m[0],g=m[1],q=Object(r.useState)(!1),z=Object(N.a)(q,2),k=z[0],E=z[1],Q=function(){return E(!1)},_=Object(o.g)(),T=Object(o.i)().id,V=Object(L.e)().user,M=Object(x.useQuery)(["quiz",T],(function(){return w(T)}),{refetchOnMount:!0}),P=M.data,R=M.isLoading,U=M.isError,H=Object(x.useQuery)(["quizUserScore"],(function(){return B(null===V||void 0===V?void 0:V.id)}),{refetchOnMount:!0}).data,J=Object(x.useMutation)(S).mutate,G=Object(x.useMutation)(C).mutate;if(R)return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h.a,{animation:"border",variant:"primary"}),"Loading"]});if(U)return"Error: Something went wrong try again later.";var Y=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(null===P||void 0===P?void 0:P.id);case 2:_.replace("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){e&&g(v+1);var t=n+1;t<P.questions.length?c(t):d(!0)};return Object(u.jsxs)(u.Fragment,{children:[(null===V||void 0===V?void 0:V.roles.includes("admin"))?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"actionButtons",children:[Object(u.jsx)(s.b,{"data-cy":"quizDetailsEdit",to:"/quiz/edit/".concat(P.id),children:Object(u.jsx)(O.a,{className:"editbutton"})}),Object(u.jsx)(A.a,{"data-cy":"quizDetailsRemove",className:"removebutton",onClick:Y})]}),Object(u.jsxs)(F.a,{show:k,onHide:Q,children:[Object(u.jsx)(F.a.Header,{closeButton:!0,children:Object(u.jsx)(F.a.Title,{children:"Are you sure you want to delete this quiz"})}),Object(u.jsx)(F.a.Body,{children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Title: ",P.title]}),Object(u.jsxs)("li",{children:["Description: ",P.description]}),Object(u.jsxs)("li",{children:["Img: ",P.img]}),Object(u.jsxs)("li",{children:["Category:","",b.filter((function(e){return e.id===P.category}))[0].cat_name]})]})}),Object(u.jsxs)(F.a.Footer,{children:[Object(u.jsx)(I.a,{variant:"light",onClick:Q,children:"Close"}),Object(u.jsx)(I.a,{variant:"danger",onClick:Z,children:"Delete Quiz"})]})]})]}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)("img",{className:"banner",src:P.img,alt:"Not Available","data-cy":"quizDetailsImg"}),Object(u.jsx)("p",{className:"light",children:P.id}),Object(u.jsx)("h1",{className:"quiz-title","data-cy":"quizDetailsTitle",children:P.title}),Object(u.jsx)("p",{className:"quiz-description","data-cy":"quizDetailsDescription",children:P.description}),l?Object(u.jsxs)("div",{className:"question-all",children:[Object(u.jsxs)("div",{className:"quiz-end",children:["Quiz has ended: ",v," / ",P.questions.length]}),Object(u.jsx)("div",{className:"score-section",children:Object(u.jsx)("button",{"data-cy":"quizDetailsSubmitScore",className:"shadowBox noborder m-2",onClick:function(e){J({quiz:P.id,user:V.id,score:v}),_.replace("/")},children:"Save Score"})})]}):Object(u.jsxs)(u.Fragment,{children:[0===P.questions.length?Object(u.jsx)("p",{className:"danger",children:"There are no questions available for this quiz"}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"question-all",children:[Object(u.jsxs)("div",{className:"question-section",children:[Object(u.jsxs)("div",{className:"question-number",children:["Question ",n+1,"/",P.questions.length]}),Object(u.jsx)("div",{className:"question-part m-2",children:P.questions[n].question})]}),Object(u.jsxs)("div",{className:"answer-section",children:[Object(u.jsx)("button",{"data-cy":"quizDetailsAnswer1",className:"shadowBox noborder m-2",onClick:function(){return $(P.questions[n].answer1===P.questions[n].correctAnswer)},children:P.questions[n].answer1}),Object(u.jsx)("button",{"data-cy":"quizDetailsAnswer2",className:"shadowBox noborder m-2",onClick:function(){return $(P.questions[n].answer2===P.questions[n].correctAnswer)},children:P.questions[n].answer2}),Object(u.jsx)("button",{"data-cy":"quizDetailsAnswer3",className:"shadowBox noborder m-2",onClick:function(){return $(P.questions[n].answer3===P.questions[n].correctAnswer)},children:P.questions[n].answer3})]})]})}),Object(u.jsxs)("div",{className:"scores",children:[Object(u.jsx)("h2",{children:"Your scores"}),console.log(H),0===(null===H||void 0===H?void 0:H.length)?Object(u.jsx)("p",{children:"No scores yet for this quiz."}):Object(u.jsx)("div",{className:"shadowBox",children:Object(u.jsxs)(D.a,{responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Score"}),Object(u.jsx)("th",{children:"Date"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsx)("tbody",{children:null===H||void 0===H?void 0:H.map((function(e){return Object(u.jsx)(u.Fragment,{children:(null===e||void 0===e?void 0:e.quiz_id)===(null===P||void 0===P?void 0:P.id)?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.id}),Object(u.jsxs)("td",{children:[e.score,"/",P.questions.length]}),Object(u.jsx)("td",{children:new Date(e.date).toLocaleString()}),Object(u.jsx)("td",{children:Object(u.jsx)(A.a,{"cy-data":"quizDetailsDelete",className:"error-text",onClick:function(){return function(e){var t=e.id;G({id:t}),_.replace("/")}({id:e.id})}})})]},e.id)}):Object(u.jsx)(u.Fragment,{})})}))})]})})]})]})]})}var Q=n(182),_=n(179),T=n(183),V=n(180);function M(){var e=Object(L.e)(),t=e.isAuthed,n=e.user,c=Object(L.c)(),a=Object(r.useCallback)((function(){c()}),[c]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Q.a,{className:"shadowBoxNav",collapseOnSelect:!0,expand:"lg",children:Object(u.jsxs)(_.a,{children:[Object(u.jsx)(Q.a.Brand,{children:"Robin Quizzes"}),Object(u.jsx)(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(Q.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsxs)(T.a,{className:"me-auto",children:[Object(u.jsx)(s.b,{to:"/",children:"Home"}),(null===n||void 0===n?void 0:n.roles.includes("admin"))?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(V.a,{title:"Lists",children:[Object(u.jsx)(V.a.Item,{children:Object(u.jsx)(s.b,{to:"/quiz/list","data-cy":"navScoreList",children:"Quiz List"})}),Object(u.jsx)(V.a.Divider,{}),Object(u.jsx)(V.a.Item,{children:Object(u.jsx)(s.b,{to:"/category/list","data-cy":"navScoreList",children:"Category List"})}),Object(u.jsx)(V.a.Divider,{}),Object(u.jsx)(V.a.Item,{children:Object(u.jsx)(s.b,{to:"/score/list","data-cy":"navScoreList",children:"Score List"})})]})}):null]}),Object(u.jsx)(T.a,{children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.b,{to:"/userdata/".concat(null===n||void 0===n?void 0:n.id),"data-cy":"quizNavUsername",children:null===n||void 0===n?void 0:n.name}),Object(u.jsx)(s.b,{variant:"primary",onClick:a,children:"Sign out"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.b,{to:"/login",children:"Sign in"}),Object(u.jsx)(s.b,{to:"/register",children:"Register"})]})})]})]})})})}function P(){return Object(u.jsx)("div",{className:"shadowBox",children:Object(u.jsxs)(D.a,{responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Name"})]})}),Object(u.jsx)("tbody",{children:b.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.cat_name})]},e.cat_id)}))})]})})}function R(){var e=Object(L.e)().user,t=Object(o.g)();return Boolean(e)&&((null===e||void 0===e?void 0:e.roles.includes("admin"))||t.replace("/")),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Categories"}),Object(u.jsx)(P,{})]})}var U=n(125);function H(){var e,t=Object(r.useState)(!1),n=Object(N.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)({}),l=Object(N.a)(i,2),d=l[0],j=l[1],h=Object(o.g)(),m=function(e){j(e),a(!0)},p=Object(x.useQuery)("quizIndex",g),f=p.data,v=p.isLoading,y=p.isError,w=Object(L.e)().user;return Boolean(w)&&((null===w||void 0===w?void 0:w.roles.includes("admin"))||h.replace("/")),v?"Loading...":y?"Error: Something went wrong try again later.":Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Quizzes"}),Object(u.jsx)("div",{className:"shadowBox",children:Object(u.jsxs)(D.a,{responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:"Category"})]})}),Object(u.jsx)("tbody",{children:f.quizzes.map((function(e){return Object(u.jsx)(q,{item:e},e.id)}))})]})}),Object(u.jsxs)(U.a,{className:"shadowBox m-5",show:c,onHide:function(){return a(!1)},children:[Object(u.jsx)(U.a.Header,{closeButton:!0,children:Object(u.jsx)(U.a.Title,{children:null===d||void 0===d?void 0:d.title})}),Object(u.jsxs)(U.a.Body,{children:[Object(u.jsx)("p",{children:null===d||void 0===d?void 0:d.id}),Object(u.jsx)("img",{src:null===d||void 0===d?void 0:d.img,className:"canvas-img",alt:""}),Object(u.jsx)("p",{children:null===d||void 0===d?void 0:d.description}),Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:"Questions:"})}),Object(u.jsx)("ul",{children:null===d||void 0===d||null===(e=d.questions)||void 0===e?void 0:e.map((function(e){return Object(u.jsx)("li",{children:e.question},e.id)}))}),Object(u.jsx)("br",{}),Object(u.jsx)(s.b,{"data-cy":"quizIndexEdit",to:"/quiz/edit/".concat(d.id),children:Object(u.jsx)(O.a,{className:"editbutton"})})]})]})]});function q(e){var t=e.item;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{onClick:function(){return m(t)},className:"pointer changeRed","data-cy":"quizListItem",children:[Object(u.jsx)("td",{"data-cy":"quizListItemId",children:t.id}),Object(u.jsx)("td",{"data-cy":"quizListItemTitle",children:t.title}),Object(u.jsx)("td",{"data-cy":"quizListItemCategory",children:b.filter((function(e){return e.id===t.category}))[0].cat_name})]})})}}var J=n(40),G=n(7),Y=function(e){var t=e.label,n=e.type,r=e.defaultValue,c=e.validation,a=(e.isActive,Object(G.a)(e,["label","type","defaultValue","validation","isActive"])),i=Object(J.c)(),s=i.register,o=i.formState.errors;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{className:"lbl",htmlFor:t,children:t}),Object(u.jsx)("input",Object(l.a)(Object(l.a)({},s(t,c)),{},{defaultValue:r,placeholder:t,type:n,id:t,name:t},a))]}),o[t]&&Object(u.jsx)("p",{className:"validationmsg",children:o[t].message})]})},Z={email:{required:"Both fields must be filled in"},password:{required:"Both fields must be filled in"}};function $(){var e=Object(L.e)(),t=e.loading,n=e.error,c=e.isAuthed,a=Object(o.g)(),i=Object(L.b)(),s=Object(J.b)(),d=s.handleSubmit,j=s.reset;Object(r.useEffect)((function(){c&&a.replace("/")}));var b=Object(r.useCallback)((function(){j()}),[j]),h=Object(r.useCallback)(function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.next=3,i(n,r);case 3:e.sent&&a.replace("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[i,a]);return Object(u.jsx)("div",{children:Object(u.jsxs)(J.a,Object(l.a)(Object(l.a)({},s),{},{children:[Object(u.jsx)("h1",{children:"Sign in"}),Object(u.jsxs)("form",{onSubmit:d(h),children:[n?Object(u.jsx)("p",{className:"error-text",children:n}):Object(u.jsx)("p",{}),Object(u.jsx)(Y,{label:"email",type:"text",defaultValue:"",placeholder:"your@email.com",validation:Z.email,"data-cy":"emailInput"}),Object(u.jsx)(Y,{label:"password",type:"password",defaultValue:"",placeholder:"password",validation:Z.password,"data-cy":"passwordInput"}),Object(u.jsx)(I.a,{variant:"primary",type:"submit",disabled:t,"data-cy":"loginButton",children:"Sign in"}),Object(u.jsx)(I.a,{variant:"danger",className:"m-1",onClick:b,children:"Cancel"})]})]}))})}function K(){var e=Object(L.e)(),t=e.loading,n=(e.error,e.isAuthed),c=Object(o.g)(),a=Object(L.d)(),i=Object(J.b)(),s=i.reset,d=i.getValues,j=i.handleSubmit;Object(r.useEffect)((function(){n&&c.replace("/")}),[c,n]);var b=Object(r.useMemo)((function(){return{email:{required:"Email is required",pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"This email is not valid"}},name:{required:"Name is required",minLength:{value:3,message:"Name should be at least 3 characters long"}},password:{required:!0,minLength:{value:5,message:"Password should be at least 5 characters long"}},confirmPassword:{required:!0,validate:{notIdentical:function(e){return d("password")===e?null:"both password need to be identical"}}}}}),[d]),h=Object(r.useCallback)(function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,i=t.password,e.next=3,a({name:n,email:r,password:i});case 3:e.sent&&c.replace("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,c]),O=Object(r.useCallback)((function(){s()}),[s]);return Object(u.jsxs)(J.a,Object(l.a)(Object(l.a)({},i),{},{children:[Object(u.jsx)("h1",{children:"Register"}),Object(u.jsxs)("form",{onSubmit:j(h),children:[Object(u.jsx)(Y,{label:"email",type:"text",defaultValue:"",placeholder:"your@email.com",validation:b.email}),Object(u.jsx)(Y,{label:"name",type:"text",defaultValue:"",placeholder:"name",validation:b.name}),Object(u.jsx)(Y,{label:"password",type:"password",defaultValue:"",placeholder:"password",validation:b.password}),Object(u.jsx)(Y,{label:"confirmPassword",type:"password",defaultValue:"",placeholder:"comfirm password",validation:b.confirmPassword}),Object(u.jsx)(I.a,{variant:"primary",type:"submit",disabled:t,children:"Register"}),Object(u.jsx)(I.a,{variant:"danger",className:"m-1",onClick:O,children:"Cancel"})]})]}))}function W(e){var t=e.children,n=(e.role,Object(G.a)(e,["children","role"])),r=Object(L.e)().isAuthed,c=Object(o.h)().pathname;return Object(u.jsx)(o.b,Object(l.a)(Object(l.a)({},n),{},{children:r?t:Object(u.jsx)(o.a,{from:c,to:"/login"})}))}function X(){var e=Object(x.useQuery)("scoreIndex",k),t=e.data,n=e.isLoading,r=e.isError,c=Object(L.e)().user,a=Object(x.useMutation)(C).mutate,i=Object(o.g)();if(Boolean(c)&&((null===c||void 0===c?void 0:c.roles.includes("admin"))||i.replace("/")),n)return"Loading...";if(r)return"Error: Something went wrong try again later.";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Scores"}),Object(u.jsx)("div",{className:"shadowBox",children:Object(u.jsxs)(D.a,{responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Quiz"}),Object(u.jsx)("th",{children:"User"}),Object(u.jsx)("th",{children:"Score"}),Object(u.jsx)("th",{children:"Date"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{"data-cy":"scoreIndexTitle",children:e.title}),Object(u.jsx)("td",{"data-cy":"scoreIndexName",children:e.name}),Object(u.jsx)("td",{"data-cy":"scoreIndexScore",children:e.score}),Object(u.jsx)("td",{"data-cy":"scoreIndexDate",children:new Date(e.date).toLocaleDateString()}),Object(u.jsx)("td",{children:Object(u.jsx)(A.a,{"data-cy":"scoreIndexDelete",className:"error-text",onClick:function(){return function(e){var t=e.id;a({id:t}),i.replace("/")}({id:e.id})}})})]})}))})]})})]})}var ee={title:{required:"Title is required",minLength:{value:3,message:"Title should have at least 3 characters"}},description:{required:"The quiz needs a description"},img:{required:"Img is required"},category:{required:"You need to enter a number for the category",min:{value:1,message:"lowest value is 1"},max:{value:b.length,message:"highest values is ".concat(b.length)}}};function te(){var e=Object(o.i)().id,t=Object(L.e)(),n=(t.error,t.user);console.log(n);var c=Object(x.useQuery)(["quizEdit",e],(function(){return w(e)}),{refetchOnMount:!0}),a=c.data,i=c.isLoading,s=c.isError,d=Object(o.g)(),j=Object(J.b)(),h=j.handleSubmit,O=Object(r.useCallback)((function(){d.replace("/quizzes/detail/".concat(e))}),[d]);if(i)return"Loading...";if(s)return"Error: Something went wrong try again later";var m=function(){var t=Object(f.a)(p.a.mark((function t(n){var r,c,a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.title,c=n.description,a=n.img,i=n.category,console.log({title:r,description:c,img:a,category:i}),t.next=4,q(e,{title:r,description:c,img:a,category:i});case 4:d.replace("/quizzes/detail/".concat(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:(null===n||void 0===n?void 0:n.roles.includes("admin"))?Object(u.jsx)(u.Fragment,{children:Boolean(a)?Object(u.jsxs)(J.a,Object(l.a)(Object(l.a)({},j),{},{children:[Object(u.jsxs)("h1",{children:["Edit Quiz: ",null===a||void 0===a?void 0:a.title]}),Object(u.jsxs)("form",{onSubmit:h(m),children:[Object(u.jsxs)("div",{className:"shadowBox p-5 fit-content",children:[Object(u.jsx)(Y,{label:"title",type:"text",defaultValue:"",placeholder:"Title",validation:ee.title,"data-cy":"editTitle"}),Object(u.jsx)(Y,{label:"description",type:"text",defaultValue:"",placeholder:"Description",validation:ee.description,"data-cy":"editDescription"}),Object(u.jsx)(Y,{label:"img",type:"text",defaultValue:"",placeholder:"Img (URL)",validation:ee.img,"data-cy":"editImg"}),Object(u.jsx)(Y,{label:"category",type:"text",defaultValue:"",placeholder:"Category Id: 1 - ".concat(b.length),validation:ee.category,"data-cy":"editCategory"}),Object(u.jsx)("button",{variant:"primary",className:"shadowBox noborder",type:"submit","data-cy":"editSubmit",children:"Update Quiz"}),Object(u.jsx)("button",{className:"shadowBox noborder m-1",onClick:O,children:"Go Back To Details Page"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"Categories"}),Object(u.jsx)(P,{})]})]})):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"error-text",children:["Quiz with Id: ",e," could not be found"]}),Object(u.jsx)("button",{className:"info-button",onClick:O,children:"Go back to the homepage"})]})}):d.replace("/")})}function ne(){var e=Object(L.e)().user;return Object(u.jsxs)("div",{className:"shadowBox p-5",children:[Object(u.jsx)("h1",{children:"User Data"}),Object(u.jsxs)("p",{children:["Naam: ",null===e||void 0===e?void 0:e.name]}),Object(u.jsxs)("p",{children:["Email: ",null===e||void 0===e?void 0:e.email]}),Object(u.jsxs)("p",{children:["Roles:",Object(u.jsx)("ul",{children:null===e||void 0===e?void 0:e.roles.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("li",{children:e})})}))})]})]})}var re=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(M,{}),Object(u.jsx)("main",{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/login",exact:!0,children:Object(u.jsx)($,{})}),Object(u.jsx)(o.b,{path:"/register",exact:!0,children:Object(u.jsx)(K,{})}),Object(u.jsx)(W,{path:"/",exact:!0,children:Object(u.jsx)(o.a,{to:"/quizzes"})}),Object(u.jsx)(W,{PrivateRoute:!0,path:"/frontendweb-karine-2122-RobinV-Hogent/",exact:!0,children:Object(u.jsx)(o.a,{to:"/quizzes"})}),Object(u.jsx)(W,{path:"/quizzes",exact:!0,children:Object(u.jsx)(z,{})}),Object(u.jsx)(W,{path:"/quizzes/detail/:id",exact:!0,children:Object(u.jsx)(E,{})}),Object(u.jsx)(W,{path:"/quiz/list",exact:!0,children:Object(u.jsx)(H,{})}),Object(u.jsx)(W,{path:"/category/list",exact:!0,children:Object(u.jsx)(R,{})}),Object(u.jsx)(W,{path:"/score/list",exact:!0,children:Object(u.jsx)(X,{})}),Object(u.jsx)(W,{path:"/quiz/edit/:id",exact:!0,children:Object(u.jsx)(te,{})}),Object(u.jsx)(W,{path:"/userdata/:id",exact:!0,children:Object(u.jsx)(ne,{})})]})})})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},ae=new x.QueryClient;i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(L.a,{children:Object(u.jsx)(x.QueryClientProvider,{client:ae,children:Object(u.jsx)(re,{})})})}),document.getElementById("root")),ce()},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(121),c=n.n(r),a=n(84),i=c.a.create({baseURL:"https://robin-quizzes.herokuapp.com/api/",headers:{Authorization:"Bearer ".concat(localStorage.getItem(a.token_key))}}),s=function(e){e?i.defaults.headers.Authorization="Bearer ".concat(e):delete i.defaults.headers.Authorization}},84:function(e){e.exports=JSON.parse('{"base_url":"http://localhost:9000/api/","token_key":"auth_token"}')},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(5),c=n.n(r),a=n(11),i=n(20),s=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("users/login",{email:t,password:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,a=t.password,e.next=3,i.a.post("users/register",{name:n,email:r,password:a});case 3:return s=e.sent,o=s.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("users/user/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},[[169,1,2]]]);
//# sourceMappingURL=main.40ef114b.chunk.js.map