(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(35),i=n(10),u=n(14),l=n(17),j=n.n(l),d=(n(73),n(53)),b=n(12),m=n.n(b),O=n(21),p=n(18),f=n.n(p),v="https://mern-calendar-marcoscianzio.herokuapp.com/api/",h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(v,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(v,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},g="[ui] Open Modal",y="[ui] Close Modal",N="[event] Set Active",w="[event] Event logout",E="[event] Add new",k="[event] Clear active event",S="[event] Event updated",C="[event] Event deleted",D="[event] Event loaded",T="[auth] Finish checking login state",P="[auth] Login",I="[auth] Logout",A=function(){return{type:T}},_=function(e){return{type:P,payload:e}},L=function(){return{type:I}},R=n(5),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{end:j()(e.end).toDate(),start:j()(e.start).toDate()})}))},M=function(e){return{type:E,payload:e}},F=function(){return{type:k}},V=function(e){return{type:S,payload:e}},H=function(){return{type:C}},J=function(e){return{type:D,payload:e}},U=n(2),z=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(U.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(U.jsx)("span",{className:"navbar-brand",children:e}),Object(U.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t({type:w}),t((function(e){localStorage.clear(),e(L())}))},children:[Object(U.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(U.jsx)("span",{children:" Salir"})]})]})},B=(n(76),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),X=function(e){var t=e.event,n=t.title,a=t.user;return Object(U.jsxs)("div",{children:[Object(U.jsxs)("strong",{children:[n," - "]}),Object(U.jsx)("span",{children:a.name})]})},q=n(25),K=n(48),Q=n.n(K),W=n(49),Y=n.n(W),Z=function(){return{type:g}},$={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Q.a.setAppElement("#root");var ee=j()().minutes(0).seconds(0).add(1,"hours"),te=ee.clone().add(1,"hours"),ne={title:"",notes:"",start:ee.toDate(),end:te.toDate()},ae=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(ee.toDate()),c=Object(u.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(te.toDate()),d=Object(u.a)(l,2),b=d[0],p=d[1],v=Object(a.useState)(!0),h=Object(u.a)(v,2),g=h[0],N=h[1],w=Object(a.useState)(ne),E=Object(u.a)(w,2),k=E[0],S=E[1],C=k.title,D=k.notes,T=k.start,P=k.end;Object(a.useEffect)((function(){S(t||ne)}),[t,S]);var I=function(e){var t=e.target;S(Object(R.a)(Object(R.a)({},k),{},Object(q.a)({},t.name,t.value)))},A=function(){n({type:y}),n(F()),S(ne)};return Object(U.jsxs)(Q.a,{isOpen:e,onRequestClose:A,style:$,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(U.jsxs)("h1",{children:[" ",t?"Editar Evento":"Crear Evento"," "]}),Object(U.jsx)("hr",{}),Object(U.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=j()(T),c=j()(P);return r.isSameOrAfter(c)?f.a.fire("Error","La fehca fin debe ser mayor a la fecha de inicio","error"):C.trim().length<2?N(!1):(n(t?(a=k,function(){var e=Object(O.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(V(a)):f.a.fire("Error",r.msg,"error"),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(O.a)(m.a.mark((function t(n,a){var r,c,o,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,x("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={__id:c,name:o},n(M(e))),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(k)),N(!0),void A())},children:[Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{children:"Fecha y hora inicio"}),Object(U.jsx)(Y.a,{onChange:function(e){i(e),S(Object(R.a)(Object(R.a)({},k),{},{start:e}))},value:s,className:"form-control"})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{children:"Fecha y hora fin"}),Object(U.jsx)(Y.a,{onChange:function(e){p(e),S(Object(R.a)(Object(R.a)({},k),{},{end:e}))},value:b,className:"form-control",minDate:s})]}),Object(U.jsx)("hr",{}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{children:"Titulo y notas"}),Object(U.jsx)("input",{type:"text",className:"form-control ".concat(!g&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:C,onChange:I}),Object(U.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:D,onChange:I}),Object(U.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(U.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(U.jsx)("i",{className:"far fa-save"}),Object(U.jsx)("span",{children:" Guardar"})]})]})]})},re=function(){var e=Object(o.b)();return Object(U.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(Z())},children:Object(U.jsx)("i",{className:"fas fa-plus"})})},ce=function(){var e=Object(o.b)();return Object(U.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(O.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,console.log(a),e.prev=2,e.next=5,x("events/".concat(a),{},"DELETE");case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).ok?t(H()):f.a.fire("Error",c.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(U.jsx)("i",{className:"fas fa-trash mr-2"}),Object(U.jsx)("span",{children:"Borrar evento"})]})};j.a.locale("es");var oe=Object(d.b)(j.a),se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid;Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=G(a.eventos),t(J(r)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(u.a)(s,2),l=i[0],j=i[1];return Object(U.jsxs)("div",{className:"calendar-screen",children:[Object(U.jsx)(z,{}),Object(U.jsx)(d.a,{selectable:!0,localizer:oe,events:n,startAccessor:"start",endAccessor:"end",messages:B,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:"0.8",display:"block",color:"white"}}},components:{event:X},onDoubleClickEvent:function(t){e(Z())},onSelectEvent:function(t){e({type:N,payload:t})},onView:function(e){j(j(e)),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(F())},view:l}),r&&Object(U.jsx)(ce,{}),Object(U.jsx)(re,{}),Object(U.jsx)(ae,{})]})},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(R.a)(Object(R.a)({},r),{},Object(q.a)({},t.name,t.value)))};return[r,s,o]},ue=(n(105),function(){var e=Object(o.b)(),t=ie({lEmail:"marcos@gmail.com",lPassword:"1234567"}),n=Object(u.a)(t,2),a=n[0],r=n[1],c=a.lEmail,s=a.lPassword,i=ie({rName:"Nando",rEmail:"nando@gmail.com",rPassword1:"1234567",rPassword2:"1234567"}),l=Object(u.a)(i,2),j=l[0],d=l[1],b=j.rName,p=j.rEmail,v=j.rPassword1,x=j.rPassword2;return Object(U.jsx)("div",{className:"container login-container",children:Object(U.jsxs)("div",{className:"row",children:[Object(U.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(U.jsx)("h3",{children:"Ingreso"}),Object(U.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=s,function(){var e=Object(O.a)(m.a.mark((function e(t){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:c.uid,name:c.name}))):f.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:c,onChange:r})}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:r})}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(U.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(U.jsx)("h3",{children:"Registro"}),Object(U.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==x)return f.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=p,a=v,r=b,function(){var e=Object(O.a)(m.a.mark((function e(t){var c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:o.uid,name:o.name}))):f.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:b,onChange:d})}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:p,onChange:d})}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:d})}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:x,onChange:d})}),Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),le=n(38),je=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return Object(U.jsx)(i.b,Object(R.a)(Object(R.a)({},a),{},{component:function(e){return t?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsx)(n,Object(R.a)({},e))}}))},de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return Object(U.jsx)(i.b,Object(R.a)(Object(R.a)({},a),{},{component:function(e){return t?Object(U.jsx)(n,Object(R.a)({},e)):Object(U.jsx)(i.a,{to:"/login"})}}))},be=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(_({uid:a.uid,name:a.name}))):t(A());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(U.jsx)("h5",{children:"Espere..."}):Object(U.jsx)(s.a,{children:Object(U.jsx)("div",{children:Object(U.jsxs)(i.d,{children:[Object(U.jsx)(de,{exact:!0,path:"/",isAuthenticated:!!r,component:se}),Object(U.jsx)(je,{exact:!0,path:"/login",isAuthenticated:!!r,component:ue}),Object(U.jsx)(i.a,{to:"/"})]})})})},me=n(22),Oe=n(64),pe={checking:!0},fe=n(54),ve={events:[],activeEvent:null},he={modalOpen:!1},xe=Object(me.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(R.a)(Object(R.a)({},e),{},{modalOpen:!0});case y:return Object(R.a)(Object(R.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(R.a)(Object(R.a)({},e),{},{activeEvent:t.payload});case E:return Object(R.a)(Object(R.a)({},e),{},{events:[].concat(Object(fe.a)(e.events),[t.payload])});case k:return Object(R.a)(Object(R.a)({},e),{},{activeEvent:null});case S:return Object(R.a)(Object(R.a)({},e),{},{events:e.events.map((function(e){return e.id==t.payload.id?t.payload:e}))});case C:return Object(R.a)(Object(R.a)({},e),{},{events:e.events.filter((function(t){return t.id!=e.activeEvent.id})),activeEvent:null});case D:return Object(R.a)(Object(R.a)({},e),{},{events:Object(fe.a)(t.payload)});case w:return Object(R.a)({},ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(R.a)(Object(R.a)({},e),{},{checking:!1},t.payload);case T:return Object(R.a)(Object(R.a)({},e),{},{checking:!1});case I:return{checking:!1};default:return e}}}),ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,ye=Object(me.e)(xe,ge(Object(me.a)(Oe.a))),Ne=function(){return Object(U.jsx)(o.a,{store:ye,children:Object(U.jsx)(be,{})})};n(107);c.a.render(Object(U.jsx)(Ne,{}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.3a2020da.chunk.js.map