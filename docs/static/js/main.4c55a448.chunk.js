(this["webpackJsonphero-app"]=this["webpackJsonphero-app"]||[]).push([[0],Array(28).concat([function(e,t,a){},,,,,,,function(e,t,a){var r={"./dc-arrow.jpg":36,"./dc-batman.jpg":37,"./dc-black.jpg":38,"./dc-blue.jpg":39,"./dc-flash.jpg":40,"./dc-green.jpg":41,"./dc-martian.jpg":42,"./dc-robin.jpg":43,"./dc-superman.jpg":44,"./dc-wonder.jpg":45,"./marvel-captain.jpg":46,"./marvel-cyclops.jpg":47,"./marvel-daredevil.jpg":48,"./marvel-hawkeye.jpg":49,"./marvel-hulk.jpg":50,"./marvel-iron.jpg":51,"./marvel-silver.jpg":52,"./marvel-spider.jpg":53,"./marvel-thor.jpg":54,"./marvel-wolverine.jpg":55};function c(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=s,e.exports=c,c.id=35},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-arrow.15b27bc2.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-batman.ab9eadc3.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-black.3747c663.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-blue.cc8169a3.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-flash.b3922f25.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-green.01c54ee1.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-martian.78565f7d.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-robin.ea4afe99.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-superman.e9391474.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-wonder.970ba2d6.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-captain.d2c7774d.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-cyclops.f1442408.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-hawkeye.1f78e874.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-hulk.d1af5fe5.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-iron.b394df11.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-silver.1d43a08b.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-spider.054016b4.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-thor.c63e651c.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-wolverine.ee676488.jpg"},function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(21),s=a.n(c),n=a(9),i=Object(r.createContext)(),l=a(3),o="[auth] login",d="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(l.a)(Object(l.a)({},t.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},m=a(5),j=a(2),p=a(11),h=(a(28),a.p+"static/media/wonderwoman.aba0154d.png"),b=a(0),f=function(){var e=Object(j.g)(),t=Object(r.useContext)(i).dispatch,a=Object(r.useState)({username:"",password:""}),c=Object(n.a)(a,2),s=c[0],d=c[1],u=s.username,m=s.password;Object(r.useEffect)((function(){}),[s]);var f=function(e){var t=e.target;d(Object(l.a)(Object(l.a)({},s),{},Object(p.a)({},t.name,t.value)))};return Object(b.jsx)("div",{className:"d-flex flex-column flex-root login bg-login animate__animated animate__fadeIn",children:Object(b.jsx)("div",{className:"d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed bg-img-login ",children:Object(b.jsx)("div",{className:"d-flex flex-center flex-column flex-column-fluid pb-lg-20",children:Object(b.jsx)("div",{className:"w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto",children:Object(b.jsxs)("form",{className:"form w-100",noValidate:"noValidate",onSubmit:function(a){a.preventDefault();var r=localStorage.getItem("lastPath")||"/";u.length>=2&&m.length>=6&&(t({type:o,payload:{name:u}}),e.replace(r))},children:[Object(b.jsxs)("div",{className:"text-center mb-10",children:[Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{srcSet:h}),Object(b.jsx)("img",{src:h,width:"400",height:"150",alt:"Wonder Woman Antifaz"})]}),Object(b.jsx)("h1",{className:"text-dark mb-3",children:"Sign In"})]}),Object(b.jsxs)("div",{className:"fv-row mb-10",children:[Object(b.jsx)("label",{className:"form-label fs-6 fw-bolder text-dark",children:"Username"}),Object(b.jsx)("input",{className:"form-control form-control-lg form-control-solid",type:"text",name:"username",autoComplete:"off",value:u,onChange:f})]}),Object(b.jsxs)("div",{className:"fv-row mb-10",children:[Object(b.jsx)("div",{className:"d-flex flex-stack mb-2",children:Object(b.jsx)("label",{className:"form-label fw-bolder text-dark fs-6 mb-0",children:"Password"})}),Object(b.jsx)("input",{className:"form-control form-control-lg form-control-solid",type:"password",name:"password",autoComplete:"off",value:m,onChange:f})]}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-lg btn-primary w-100 mb-5",children:Object(b.jsx)("span",{className:"indicator-label",children:"Continue"})})})]})})})})})},x=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],g=a(35),v=(a(56),function(e){var t=e.id,a=e.superhero,r=e.publisher,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"card col-lg-4 col-sm-12 col-xs-12 ",children:[Object(b.jsx)("img",{src:g("./".concat(t,".jpg")).default,className:"card-img-top",alt:a}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title text-white",children:a}),Object(b.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:r}),Object(b.jsx)("p",{className:"card-text text-white",children:c}),c!==n&&Object(b.jsx)("p",{className:"card-text text-white",children:n}),Object(b.jsx)("p",{children:Object(b.jsx)("small",{className:"card-text text-white",children:s})}),Object(b.jsx)(m.b,{to:"./hero/".concat(t),children:Object(b.jsx)("button",{className:"btn btn-warning",children:Object(b.jsx)("span",{className:"card-text",children:" Read More..."})})})]})]})})}),O=function(e){var t=e.publisher,a=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" does not exist'));return x.filter((function(t){return t.publisher===e}))}(t)}),[t]);return Object(b.jsx)("div",{className:"card-columns row animate__animated animate__fadeIn",children:a.map((function(e){return Object(b.jsx)(v,Object(l.a)({},e),e.id)}))})},C=function(){var e="DC Comics";return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"title-agency text-center",children:e}),Object(b.jsx)(O,{publisher:e})]})},N=function(e){var t=e.history,a=Object(j.i)().heroId,c=Object(r.useMemo)((function(){return e=a,x.find((function(t){return t.id===e}));var e}),[a]);if(!c)return Object(b.jsx)(j.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(b.jsxs)("div",{className:"row hero-screen",children:[Object(b.jsx)("div",{className:"col-lg-4 col-md-4 col-xs-12 col-sm-12 d-flex justify-content-center",children:Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{type:"image/jpg"}),Object(b.jsx)("img",{src:g("./".concat(a,".jpg")).default,className:"img-fluid rounded animate__animated animate__fadeInLeft",alt:s})]})}),Object(b.jsxs)("div",{className:"col-lg-8 col-md-8 col-xs-12 col-sm-12 py-5 animate__animated animate__fadeInRight",children:[Object(b.jsx)("h2",{children:s}),Object(b.jsxs)("ul",{className:"list-group list-group-flush my-5",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"Alter ego:"})," ",i]}),Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"Publisher:"})," ",n]}),Object(b.jsxs)("li",{className:"list-group-item",children:[" ",Object(b.jsx)("b",{children:"First Appearence:"})," ",l]})]}),Object(b.jsx)("h5",{children:"Characters "}),Object(b.jsx)("p",{children:o}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){t.length<2?t.push("/"):t.goBack()},children:Object(b.jsx)("span",{className:"card-text text-white",children:" Return"})})]})]})},_=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"title-agency text-center",children:"Marvel"}),Object(b.jsx)(O,{publisher:"Marvel Comics"})]})},y=a(23),w=a.n(y),k=function(e){var t=e.history,a=Object(j.h)(),c=w.a.parse(a.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],s=a[1];return[c,function(e){var t=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(p.a)({},t.name,t.value)))},function(){s(e)}]}({searchText:s}),o=Object(n.a)(i,2),d=o[0],u=o[1],m=d.searchText,h=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),x.filter((function(t){return t.superhero.toLowerCase().includes(e)})))}(s)}),[s]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"title-agency text-center",children:"Search"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-sm-3",children:[Object(b.jsx)("h4",{children:"Search Form"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.push("?q=".concat(m))},children:[Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Find your hero",name:"searchText",value:m,onChange:u}),Object(b.jsx)("button",{type:"submit",className:"btn btn-lg btn-outline-primary w-100 my-3",children:"Search..."})]})]}),Object(b.jsxs)("div",{className:"col-sm-9",children:[Object(b.jsx)("h4",{children:"Results"}),Object(b.jsx)("hr",{}),""===s&&Object(b.jsx)("div",{className:"alert alert-danger",children:"Search a hero"}),""!==s&&0===h.length&&Object(b.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s]}),Object(b.jsx)("div",{className:"card-columns row animate__animated animate__fadeIn",children:h.map((function(e){return Object(b.jsx)(v,Object(l.a)({},e),e.id)}))})]})]})]})},S=(a(71),function(){var e=Object(r.useContext)(i),t=e.user.name,a=e.dispatch,c=Object(j.g)();return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm bg-navbar ps-5 py-0",children:[Object(b.jsx)(m.b,{className:"navbar-brand",to:"/",children:"Super Heroes"}),Object(b.jsx)("div",{className:"navbar-collapse",children:Object(b.jsxs)("div",{className:"navbar-nav ",children:[Object(b.jsx)(m.c,{activeClassName:"active",className:"nav-item nav-link px-4",exact:!0,to:"/marvel",children:"Marvel"}),Object(b.jsx)(m.c,{activeClassName:"active",className:"nav-item nav-link px-4",exact:!0,to:"/dc",children:"DC"}),Object(b.jsx)(m.c,{activeClassName:"active",className:"nav-item nav-link px-4",exact:!0,to:"/search",children:"Search"})]})}),Object(b.jsx)("p",{className:"nav-item text-white align-middle py-auto mb-0 mx-3 fs-4 fw-bold ",children:t}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){a({type:d}),c.replace("/login")},children:"Logout"})})]})}),M=(a(72),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)("div",{className:"container-fluid mt-2 content ",children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/marvel",component:_}),Object(b.jsx)(j.b,{exact:!0,path:"/hero/:heroId",component:N}),Object(b.jsx)(j.b,{exact:!0,path:"/dc",component:C}),Object(b.jsx)(j.b,{exact:!0,path:"/search",component:k}),Object(b.jsx)(j.a,{to:"/marvel"})]})})]})}),D=a(13),A=["isAuth","component"],B=function(e){var t=e.isAuth,a=e.component,r=Object(D.a)(e,A);return localStorage.setItem("lastPath",r.location.pathname),Object(b.jsx)(j.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(b.jsx)(a,Object(l.a)({},e)):Object(b.jsx)(j.a,{to:"/login"})}}))},I=["isAuth","component"],T=function(e){var t=e.isAuth,a=e.component,r=Object(D.a)(e,I);return Object(b.jsx)(j.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(b.jsx)(j.a,{to:"/"}):Object(b.jsx)(a,Object(l.a)({},e))}}))},F=function(){var e=Object(r.useContext)(i).user;return Object(b.jsx)(m.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(T,{exact:!0,path:"/login",component:f,isAuth:e.logged}),Object(b.jsx)(B,{path:"/",component:M,isAuth:e.logged})]})})})},J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},P=function(){var e=Object(r.useReducer)(u,{},J),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){return localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(b.jsx)(i.Provider,{value:{user:a,dispatch:c},children:Object(b.jsx)(F,{})})};s.a.render(Object(b.jsx)(P,{}),document.getElementById("root"))}]),[[73,1,2]]]);
//# sourceMappingURL=main.4c55a448.chunk.js.map