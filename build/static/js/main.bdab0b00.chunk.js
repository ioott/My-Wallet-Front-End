(this["webpackJsonpmy-wallet"]=this["webpackJsonpmy-wallet"]||[]).push([[0],{39:function(e,t,n){e.exports=n(57)},48:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a,r,o,l,i,c,d,u,s,p,m,b,E,h,f,x,g,v,y,j=n(0),O=n.n(j),k=n(21),w=n.n(k),S=n(16),B=n(22),I=(n(48),n(10)),C=n(34),R=n(35),A=n(6),T={email:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_EMAIL":return Object(A.a)(Object(A.a)({},e),{},{email:t.payload});default:return e}},N=n(19),F={currencies:[],expenses:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENCIES":return Object(A.a)(Object(A.a)({},e),{},{currencies:t.payload});case"SAVE_USER_EXPENSES":return Object(A.a)(Object(A.a)({},e),{},{expenses:[].concat(Object(N.a)(e.expenses),[t.payload])});case"REMOVE_EXPENSES":return Object(A.a)(Object(A.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"EDIT_EXPENSE":Object(N.a)(document.getElementsByClassName("checkbox")).filter((function(e){return!1===e.checked})).forEach((function(e){return e.setAttribute("hidden","true")}));var n=e.expenses.find((function(e){return e.id===t.payload}));return document.getElementById("edit-id").value=n.id,document.getElementById("edit-date").value=n.date,document.getElementById("edit-expense").value=n.value,document.getElementById("edit-description").value=n.description,document.getElementById("edit-coin").value=n.currency,document.getElementById("edit-method").value=n.method,document.getElementById("edit-tag").value=n.tag,document.getElementById("edit-rates").value=JSON.stringify(n.exchangeRates),Object(A.a)(Object(A.a)({},e),{},{expenses:Object(N.a)(e.expenses)});case"EDIT_SAVED_EXPENSE":var a=e.expenses.map((function(e){return e.id===t.payload.id?t.payload:e}));return Object(A.a)(Object(A.a)({},e),{},{expenses:a});default:return e}},_=Object(I.combineReducers)({user:D,wallet:z}),U=Object(I.createStore)(_,Object(C.composeWithDevTools)(Object(I.applyMiddleware)(R.a))),M=n(14),V=n(15),L=n(18),P=n(17),q=n(2),X=n(4),G=n(3),J=n(23),W=n(12),$=n.n(W),H=n(20),K=G.b.div(a||(a=Object(q.a)(["\n  display:flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin: 15vh auto 2vh auto;\n  width: 300px;\n  height: 400px;\n  background-color: #221007;\n  box-shadow: 2px 2px 20px #191919,\n             -2px -2px 20px #292929;\n  transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,\n              transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;\n  :hover {\n    border-bottom-right-radius: 50px;\n    border-top-left-radius: 50px;\n    transform: scale(1.05);\n  }\n"]))),Q=G.b.img(r||(r=Object(q.a)(["\n  max-width:60px;\n  max-height:65px;\n  width: auto;\n  height: auto;\n"]))),Y=G.b.form(o||(o=Object(q.a)(["\n  flex-direction: column;\n  --width-of-input: 230px;\n  --border-height: 1px;\n  --border-before-color: #f18f01;\n  --border-after-color: f5f1ed;\n  --input-hovered-color: #4985e01f;\n  position: relative;\n  width: var(--width-of-input);\n\n"]))),Z=G.b.input(l||(l=Object(q.a)(["\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  background-color: transparent;\n  border-radius: 10px;\n  width: 100%;\n  box-sizing: border-box;\n  padding-inline: 0.5em;\n  padding-block: 0.7em;\n  border: none;\n  border-top: var(--border-height) solid var(--border-before-color);\n  :hover {\n    background: var(--input-hovered-color);\n  }\n  margin-bottom: 50px;\n  ::placeholder {\n    color: #ffffff;\n    font-size: 16px;\n  }\n"]))),ee=G.b.button(i||(i=Object(q.a)(["\n  text-transform: uppercase;\n  color: #221007;\n  padding: 0.6em 1.3em;\n  font-size: 13px;\n  font-weight: bold;\n  border-radius: 0.5em;\n  background: #ffedd8;\n  border: 2px solid #221007;\n  box-shadow: 3px 3px 8px #c5c5c5,\n             -3px -3px 8px #ffffff;\n  :active {\n    box-shadow: 4px 4px 12px #c5c5c5,\n               -4px -4px 12px #ffffff;\n  }\n  margin: 10px 67px 20px 67px;\n"]))),te=G.b.div(c||(c=Object(q.a)(["\n  width: 300px;\n  margin: 0 40vw 0 40vw;\n"]))),ne=G.b.p(d||(d=Object(q.a)(["\n  color: #221007;\n  font-size: 10px;\n  letter-spacing: 1px;\n  line-height: 15px;\n  text-align: center;\n"]))),ae=function(e){Object(L.a)(n,e);var t=Object(P.a)(n);function n(){var e;return Object(M.a)(this,n),(e=t.call(this)).onInputChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(J.a)({},a,r),(function(){var t=e.state,n=t.userPassword,a=t.userEmail;n.length>5&&!0===/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(a)?e.setState({userPassword:"",isButtonDisabled:!1}):e.setState({isButtonDisabled:!0})}))},e.onClickFunction=function(){var t=e.props.setUserEmail,n=e.state.userEmail;e.setState({userEmail:n,loginOk:!0}),t(n)},e.state={userPassword:"",userEmail:"",isButtonDisabled:!0,loginOk:!1},e}return Object(V.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isButtonDisabled,n=e.loginOk;return O.a.createElement("main",null,O.a.createElement(K,null,O.a.createElement(Q,{src:"https://www.seekpng.com/png/full/332-3321868_jewelry-for-charismatic-appearance-wallets-organised-black-and.png"}),O.a.createElement(Y,null,O.a.createElement(Z,{placeholder:"e-mail",id:"userEmail",name:"userEmail",onChange:this.onInputChange}),O.a.createElement(Z,{placeholder:"senha",type:"password",id:"userPassword",name:"userPassword",onChange:this.onInputChange}),!0===t?null:O.a.createElement(ee,{id:"btn",type:"button",disabled:t,onClick:this.onClickFunction,autofocus:"true"},"Entrar")),n&&O.a.createElement(X.a,{to:"/carteira"})),O.a.createElement(te,null,O.a.createElement(ne,null,"- desenvolvido por vania ioott -",O.a.createElement("br",null),"com js, html, react, redux e styled components")))}}]),n}(O.a.Component),re=Object(S.b)(null,(function(e){return{setUserEmail:function(t){return e({type:"SET_USER_EMAIL",payload:t})}}}))(ae),oe=G.b.div(u||(u=Object(q.a)(["\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  width: 1400px;\n  justify-content: center;\n  display:\n"]))),le=G.b.header(s||(s=Object(q.a)(["\n  display: flex;\n  color: white;\n  height: 70px;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 80px;\n  padding-left: 30px;\n  background-color: #221007;\n\n"]))),ie=G.b.p(p||(p=Object(q.a)(["\n  font-size: 14px;\n  line-height: 20px;\n"]))),ce=G.b.h1(m||(m=Object(q.a)(["\n  padding: 30px;\n  font-size: 28px;\n  color: #221007;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]))),de=G.b.form(b||(b=Object(q.a)(["\n  color: white;\n  height: 72px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 40px 20px 30px;\n  background-color: #8b5e34;\n  line-height: 25px;\n"]))),ue=G.b.select(E||(E=Object(q.a)(["\n  width: 80%;\n  font-size: 15px;\n  padding: 10px 10px;\n  border: none;\n  border-radius: 4px;\n  background-color: #ffedd8;\n  :focus {\n  border: 2px solid #221007;\n  }\n  margin-right: 30px;\n"]))),se=G.b.input(h||(h=Object(q.a)(["\n  width: 80%;\n  font-size: 18px;\n  padding: 12px 10px;\n  border: none;\n  border-radius: 4px;\n  background-color: #ffedd8;\n  :focus {\n  border: 2px solid #221007;\n  }\n  margin-right: 30px;\n"]))),pe=G.b.div(f||(f=Object(q.a)(["\n  display: flex;\n  align-items: center;\n"]))),me=G.b.img(x||(x=Object(q.a)(["\n  height: 40px;\n  width: 50px;\n  margin-left: 30px;\n"]))),be=G.b.button(g||(g=Object(q.a)(["\n  text-transform: uppercase;\n  color: #221007;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 12px 12px;\n  border: none;\n  border-radius: 4px;\n  background-color: #ffedd8;\n  :focus {\n  border: 2px solid #221007;\n  }\n  margin-right: 20px;\n  margin-top: 20px;\n"]))),Ee=G.b.table(v||(v=Object(q.a)(["\n  margin-top: 20px;\n  overflow-x:auto;\n  width: 100%;\n  border-collapse: collapse;\n  td {\n  border: 1px solid #ddd;\n  padding: 8px;\n  }\n  th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #d4a276;\n  color: #221007;\n  font-weight: bold;\n  text-align: center;\n  }\n  tr{\n    text-align: center;\n  :nth-child(even){background-color: #f3d5b5;}\n  :hover {\n    background-color: #8b5e34;\n    color: white;\n    }\n  }\n"]))),he=function(e){Object(L.a)(n,e);var t=Object(P.a)(n);function n(){var e;return Object(M.a)(this,n),(e=t.call(this)).fetchExchange=Object(H.a)($.a.mark((function e(){var t,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://economia.awesomeapi.com.br/json/all",e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),e.addTotalUpdate=function(){var t=e.props.expenses,n=e.state.totalExpenses,a=document.getElementById("coin"),r=document.getElementById("expense"),o=Object.values(t[0].exchangeRates).filter((function(e){return"BRLT"!==e.codein})).filter((function(e){return e.code===a.value}))[0].ask,l=r.value*o;e.setState({totalExpenses:n+l})},e.editTotalUpdate=function(){var t=e.props.expenses,n=e.state.totalExpenses,a=document.getElementById("edit-coin"),r=document.getElementById("edit-expense"),o=Object.values(t[0].exchangeRates).filter((function(e){return"BRLT"!==e.codein})).filter((function(e){return e.code===a.value}))[0].ask,l=r.value*o;e.setState({totalExpenses:n+l})},e.saveButtonClick=function(){var t=Object(H.a)($.a.mark((function t(n){var a,r,o,l,i,c,d,u,s,p,m;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.props,r=a.dispatchSaveExpenses,o=a.expenses,l=o.length,i=document.getElementById("date"),c=document.getElementById("expense"),d=document.getElementById("description"),u=document.getElementById("coin"),s=document.getElementById("method"),p=document.getElementById("tag"),t.next=11,e.fetchExchange();case 11:m=t.sent,r({id:l,date:i.value,value:c.value,description:d.value,currency:u.value,method:s.value,tag:p.value,exchangeRates:m}),e.addTotalUpdate(),c.value="",d.value="";case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editButtonClick=function(){var t=e.props.dispatchEditSavedExpenses,n=document.getElementById("add-form"),a=document.getElementById("edit-form");a.removeAttribute("style"),a.setAttribute("hidden","true"),n.setAttribute("style","display: flex"),t({id:Number(document.getElementById("edit-id").value),date:document.getElementById("edit-date").value,value:document.getElementById("edit-expense").value,description:document.getElementById("edit-description").value,currency:document.getElementById("edit-coin").value,method:document.getElementById("edit-method").value,tag:document.getElementById("edit-tag").value,exchangeRates:JSON.parse(document.getElementById("edit-rates").value)});var r=document.getElementsByClassName("checkbox");(r=Array.from(r)).forEach((function(e){e.checked=!1})),document.getElementById("add-form").hasAttribute("hidden")&&(document.getElementById("edit-form").setAttribute("hidden","true"),document.getElementById("add-form").removeAttribute("hidden")),Object(N.a)(document.getElementsByClassName("checkbox")).forEach((function(e){return e.removeAttribute("hidden")})),e.editTotalUpdate()},e.convertedValue=function(t){var n=e.state.totalExpenses;e.setState({totalExpenses:n-t})},e.state={totalExpenses:0},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatchGetCurrencies)(),document.getElementById("add-form").setAttribute("style","display: flex")}},{key:"render",value:function(){var e=this,t=this.props,n=t.userEmail,a=t.currencies,r=t.expenses,o=t.dispatchRemoveExpense,l=t.dispatchEditExpense,i=this.state.totalExpenses,c=document.getElementById("edit-form"),d=document.getElementById("add-form");return O.a.createElement(oe,null,O.a.createElement(le,null,O.a.createElement("p",null,"Total: ",O.a.createElement("strong",null,"R$ ",i.toFixed(2))),O.a.createElement(ie,null,"Usu\xe1rio:"," ",O.a.createElement("br",null),O.a.createElement("strong",null,n))),O.a.createElement(pe,null,O.a.createElement(me,{src:"https://cdn-icons-png.flaticon.com/512/1077/1077974.png"}),O.a.createElement(ce,null,"Minhas despesas")),O.a.createElement(de,{id:"add-form"},O.a.createElement("label",{htmlFor:"date"},"Data:",O.a.createElement(se,{type:"date",id:"date",name:"date"})),O.a.createElement("label",{htmlFor:"expense"},"Valor:",O.a.createElement(se,{type:"number",id:"expense",name:"expense",required:!0})),O.a.createElement("label",{htmlFor:"coin"},"Moeda",O.a.createElement(ue,{id:"coin"},a.map((function(e){return O.a.createElement("option",{key:e.code},e)})))),O.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",O.a.createElement(se,{"data-testid":"description-input",type:"text",id:"description",name:"description"})),O.a.createElement("label",{htmlFor:"tag"},"Tag",O.a.createElement(ue,{id:"tag"},O.a.createElement("option",null,"Selecione"),O.a.createElement("option",null,"Alimenta\xe7\xe3o"),O.a.createElement("option",null,"Lazer"),O.a.createElement("option",null,"Trabalho"),O.a.createElement("option",null,"Transporte"),O.a.createElement("option",null,"Sa\xfade"))),O.a.createElement("label",{htmlFor:"method"},"M\xe9todo de pagamento",O.a.createElement(ue,{"data-testid":"method-input",id:"method"},O.a.createElement("option",null,"Selecione"),O.a.createElement("option",null,"Dinheiro"),O.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),O.a.createElement("option",null,"Cart\xe3o de d\xe9bito"))),O.a.createElement(be,{type:"submit",onClick:this.saveButtonClick},"Adicionar")),O.a.createElement(de,{id:"edit-form",hidden:!0},O.a.createElement("input",{id:"edit-id",hidden:!0}),O.a.createElement("input",{id:"edit-rates",hidden:!0}),O.a.createElement("label",{htmlFor:"date"},"Data:",O.a.createElement(se,{type:"date",id:"edit-date",name:"date",autofocus:"true"})),O.a.createElement("label",{htmlFor:"expense"},"Valor:",O.a.createElement(se,{type:"text",id:"edit-expense",name:"expense",required:!0})),O.a.createElement("label",{htmlFor:"coin"},"Moeda",O.a.createElement(ue,{id:"edit-coin"},a.map((function(e){return O.a.createElement("option",{key:e.code},e)})))),O.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",O.a.createElement(se,{"data-testid":"description-input",type:"text",id:"edit-description",name:"description"})),O.a.createElement("label",{htmlFor:"edit-tag"},"Tag",O.a.createElement(ue,{id:"edit-tag"},O.a.createElement("option",null,"Selecione"),O.a.createElement("option",null,"Alimenta\xe7\xe3o"),O.a.createElement("option",null,"Lazer"),O.a.createElement("option",null,"Trabalho"),O.a.createElement("option",null,"Transporte"),O.a.createElement("option",null,"Sa\xfade"))),O.a.createElement("label",{htmlFor:"edit-method"},"M\xe9todo de pagamento",O.a.createElement(ue,{"data-testid":"method-input",id:"edit-method"},O.a.createElement("option",null,"Selecione"),O.a.createElement("option",null,"Dinheiro"),O.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),O.a.createElement("option",null,"Cart\xe3o de d\xe9bito"))),O.a.createElement(be,{type:"button",onClick:this.editButtonClick},"Conclu\xeddo")),O.a.createElement(Ee,null,O.a.createElement("tr",null,O.a.createElement("th",null,"Data"),O.a.createElement("th",null,"Valor"),O.a.createElement("th",null,"Moeda"),O.a.createElement("th",null,"Descri\xe7\xe3o"),O.a.createElement("th",null,"Tag"),O.a.createElement("th",null,"M\xe9todo de pagamento"),O.a.createElement("th",null,"C\xe2mbio utilizado"),O.a.createElement("th",null,"Moeda de convers\xe3o"),O.a.createElement("th",null,"Valor convertido"),O.a.createElement("th",null,"Editar"),O.a.createElement("th",null)),r.map((function(t){var n=Object.entries(t.exchangeRates).find((function(e){return e[0]===t.currency}));return O.a.createElement("tr",{key:t.id},O.a.createElement("td",null,t.date.split("-").reverse().join("/")),O.a.createElement("td",null,Number(t.value).toFixed(2)),O.a.createElement("td",null,n[1].name.split("/",1)),O.a.createElement("td",null,t.description),O.a.createElement("td",null,t.tag),O.a.createElement("td",null,t.method),O.a.createElement("td",null,Number(n[1].ask).toFixed(2)),O.a.createElement("td",null,"Real"),O.a.createElement("td",null,Number(t.value*n[1].ask).toFixed(2)),O.a.createElement("td",null,O.a.createElement("input",{type:"checkbox",className:"checkbox",onChange:function(){return l(t.id),e.convertedValue(Number(t.value*n[1].ask).toFixed(2)),c.removeAttribute("hidden"),c.setAttribute("style","display: flex"),d.setAttribute("hidden","true"),d.removeAttribute("style")}})),O.a.createElement("td",null,O.a.createElement("button",{type:"button",onClick:function(){return o(t.id),e.convertedValue(Number(t.value*n[1].ask).toFixed(2))}},"Apagar")))}))))}}]),n}(O.a.Component),fe=Object(S.b)((function(e){return{userEmail:e.user.email,currencies:e.wallet.currencies,expenses:e.wallet.expenses}}),(function(e){return{dispatchGetCurrencies:function(){return e(function(){var e=Object(H.a)($.a.mark((function e(t){var n,a,r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=Object.keys(a).filter((function(e){return"USDT"!==e})),t({type:"SET_CURRENCIES",payload:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())},dispatchSaveExpenses:function(t){return e(function(e){return{type:"SAVE_USER_EXPENSES",payload:e}}(t))},dispatchRemoveExpense:function(t){return e({type:"REMOVE_EXPENSES",payload:t})},dispatchEditExpense:function(t){return e(function(e){return{type:"EDIT_EXPENSE",payload:e}}(t))},dispatchEditSavedExpenses:function(t){return e(function(e){return{type:"EDIT_SAVED_EXPENSE",payload:e}}(t))}}}))(he),xe=Object(G.a)(y||(y=Object(q.a)(["\n* {\n    body {\n      background-color: #ffedd8;\n      display: flex;\n    }\n    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, b, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline;\n    }\n\n    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n      display: block;\n    }\n\n    body {\n      line-height: 1;\n    }\n\n    ol, ul {\n      list-style: none;\n    }\n\n    blockquote, q {\n      quotes: none;\n    }\n\n    blockquote:before, blockquote:after, q:before, q:after {\n      content: '';\n      content: none;\n    }\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n}\n"]))),ge=function(e){Object(L.a)(n,e);var t=Object(P.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return document.title="Despesas",O.a.createElement(O.a.Fragment,null,O.a.createElement(xe,null),O.a.createElement(X.d,null,O.a.createElement(X.b,{exact:!0,path:"/",component:re}),O.a.createElement(X.b,{path:"/carteira",component:fe})))}}]),n}(O.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.render(O.a.createElement(B.a,{basename:"/my-wallet"},O.a.createElement(S.a,{store:U},O.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.bdab0b00.chunk.js.map