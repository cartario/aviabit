(this.webpackJsonpaviabit=this.webpackJsonpaviabit||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(25),r=a.n(l),c=a(10),s=a(29),o=a(72),m=a(18),u=["dateFlight","timeWork","timeFlight","timeBlock","timeNight","timeBiologicalNight","flight","pinType","pin","type","takeoff","landing"],g=function(e,t){return Object.assign({},e,t)},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.map((function(e){return t?e.dateFlight.getFullYear():e.dateFlight.getMonth()}));return Object(m.a)(new Set(a))},d=function(e){return["\u042f\u041d\u0412","\u0424\u0415\u0412","\u041c\u0410\u0420","\u0410\u041f\u0420","\u041c\u0410\u0419","\u0418\u042e\u041d","\u0418\u042e\u041b","\u0410\u0412\u0413","\u0421\u0415\u041d","\u041e\u041a\u0422","\u041d\u041e\u042f","\u0414\u0415\u041a"][e]},_=function(e,t){return Math.floor(e+Math.random()*(t+1-e))};function f(e,t){return Math.floor(e+Math.random()*(t+1-e))}var p,F=function(){return{dateFlight:(e=new Date(2010,0,1),t=new Date,new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))),flight:"AB-33".concat(f(10,80)),pinType:"B-757-".concat(f(100,200)),pin:"XXXAK",timeFlight:f(25e3,26e3),timeBlock:f(27e3,28e3),timeNight:f(15e3,16e3),timeBiologicalNight:f(28e3,29e3),timeWork:f(37e3,38e3),type:f(0,1),takeoff:{name:"\u0422\u043e\u043c\u0441\u043a(\u0411\u043e\u0433\u0430\u0448\u0435\u0432\u043e)-".concat(f(1,9)),lat:56.55,long:85.2},landing:{name:"\u041d\u044f\u0447\u0430\u043d\u0433(\u041a\u0430\u043c\u0440\u0430\u043d\u044c \u0418\u043d\u0442\u043b)",lat:11.99805555,long:109.21944444}};var e,t},E=(p=20,new Array(p).fill("").map(F)).sort((function(e,t){return t.dateFlight-e.dateFlight})),v=function(e,t,a){var n=e.filter((function(e){return a?0===e.type:1===e.type})),i=n.slice(),l=n.filter((function(e){return e.dateFlight.getFullYear()===Number(t)})),r=function(e,a){return("\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===t?i:l).filter((function(t){return(e>12?t.dateFlight.getFullYear():t.dateFlight.getMonth())===e})).map((function(e){return e[a]})).reduce((function(e,t){return e+t}))},c=function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e=t?i:l,Array.from(h(e,t)).map((function(a){return{dateFlight:e.find((function(e){return(t?e.dateFlight.getFullYear():e.dateFlight.getMonth())===a})).dateFlight,timeWork:r(a,"timeWork"),timeFlight:r(a,"timeFlight"),timeBlock:r(a,"timeBlock")}}))};return"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===t?c(!0):c(!1).reverse()},N={flights:E,activeFlight:{year:"",value:"",isFactData:""},currentFlights:[]},y="LOAD_FLIGHTS",k="SET_ACTIVE_FLIGHT",b="SET_CURRENT_FLIGHTS",D=function(e){return{type:"LOAD_FLIGHTS",payload:e}},w=function(e,t,a){return{type:"SET_ACTIVE_FLIGHT",payload:{value:e,year:t,isFactData:a}}},T=function(e,t,a){return{type:b,payload:{year:e,value:t,isFactData:a}}},O=function(){return function(e,t,a){return a.get("/users?page=2").then((function(t){e(D((t.data.data,{dateFlight:new Date,flight:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",pinType:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",pin:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",timeFlight:11111,timeBlock:11111,timeNight:11111,timeBiologicalNight:11111,timeWork:11111,type:0,takeoff:{name:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",lat:56.55,long:85.2},landing:{name:"\u041e\u0422\u0412\u0415\u0422_\u041e\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",lat:11.99805555,long:109.21944444}})))})).catch((function(e){throw e}))}},H=Object(c.c)({FLIGHTS:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return g(e,{flights:[].concat(Object(m.a)(e.flights),[t.payload])});case k:return g(e,{activeFlight:t.payload});case b:if("\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===t.payload.value){var a=e.flights.filter((function(e){return e.dateFlight.getFullYear()===Number(t.payload.year)&&e.type===(t.payload.isFactData?0:1)}));return g(e,{currentFlights:a})}var n=e.flights.filter((function(e){return e.dateFlight.getFullYear()===Number(t.payload.value)&&d(e.dateFlight.getMonth())===t.payload.year&&e.type===(t.payload.isFactData?0:1)}));return g(e,{currentFlights:n});default:return e}}}),S=(a(84),a(14)),j=a(2),B=(a(85),function(){return i.a.createElement("header",{className:"header"},i.a.createElement("nav",{className:"nav"},i.a.createElement("div",{className:"nav__logo"},"[Logo]"),i.a.createElement("div",{className:"nav__menu"},"[Menu]")))}),C=a(27),L=a(28),A=a(13),I=a(31),M=a(30),W=function(e){var t=e.data,a=e.activeYear,n=t.dateFlight,l=t.timeWork,r=t.timeFlight,c=t.timeBlock;return i.a.createElement("ul",{className:"main__card card"},i.a.createElement("li",{className:"card__item"},i.a.createElement(S.b,{onClick:function(t){e.clickHandler(t.target.textContent)},to:"/details"},"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===a?n.getFullYear():d(n.getMonth()))),i.a.createElement("li",{className:"card__item"},l),i.a.createElement("li",{className:"card__item"},r),i.a.createElement("li",{className:"card__item"},c))},Y=function(e){var t=e.isFactData;return i.a.createElement("div",null,i.a.createElement("input",{className:"checkbox",type:"checkbox",id:"checkbox",onChange:e.toggleHandler,autoFocus:!0,checked:t}),i.a.createElement("label",{className:"checkbox__label",htmlFor:"checkbox"},"\u041f\u043e \u0444\u0430\u043a\u0442\u0443"))},x=function(e){Object(I.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={value:"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"},n._clickHandler=n._clickHandler.bind(Object(A.a)(n)),n}return Object(L.a)(a,[{key:"_clickHandler",value:function(e){this.props.setActiveFlight(e,this.state.value,this.props.isFactData),this.props.setCurrentFlights(e,this.state.value,this.props.isFactData)}},{key:"render",value:function(){var e,t,a=this;return i.a.createElement("main",{className:"main"},i.a.createElement("h1",{className:"main__title"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043d\u0430\u043b\u0435\u0442\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u043e\u0433\u043e \u0441\u0443\u0434\u043d\u0430 \u0437\u0430","\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===this.state.value?" \u0432\u0441\xeb \u0432\u0440\u0435\u043c\u044f":" ".concat(this.state.value," \u0433\u043e\u0434"),i.a.createElement("div",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e ",this.props.isFactData?"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u043c":"\u043f\u043b\u0430\u043d\u043e\u0432\u044b\u043c"," \u0440\u0435\u0439\u0441\u0430\u043c")),i.a.createElement(Y,{toggleHandler:this.props.toggleHandler,isFactData:this.props.isFactData}),i.a.createElement("div",{className:"main__container"},i.a.createElement("select",{value:this.state.value,className:"main__select",onChange:function(e){a.setState({value:e.target.value})}},i.a.createElement("option",null,"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"),(e=this.props.flights,t=this.props.isFactData,Object(m.a)(new Set(e.filter((function(e){return t?0===e.type:1===e.type})).map((function(e){return e.dateFlight.getFullYear()})).sort((function(e,t){return t-e}))))).map((function(e){return i.a.createElement("option",{key:e},e)}))),i.a.createElement("ul",{className:"main__list"},i.a.createElement("li",{className:"main__item"},"TimeWork, \u0441"),i.a.createElement("li",{className:"main__item"},"TimeFlight, \u0441"),i.a.createElement("li",{className:"main__item"},"TimeBlock"))),v(this.props.flights,this.state.value,this.props.isFactData).sort((function(e,t){return t.dateFlight-e.dateFlight})).map((function(e){return i.a.createElement(W,{key:e.dateFlight,data:e,activeYear:a.state.value,clickHandler:a._clickHandler})})),!v(this.props.flights,this.state.value,this.props.isFactData).length&&i.a.createElement("div",null,"\u0422\u0430\u043a\u0438\u0445 \u0440\u0435\u0439\u0441\u043e\u0432 \u043d\u0435\u0442!"))}}]),a}(i.a.Component),G=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("ul",{className:"footer__list"},i.a.createElement("li",{className:"footer__item"},"[Copyright]"),i.a.createElement("li",{className:"footer__item"},"[\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438]"),i.a.createElement("li",{className:"footer__item"},"[\u0410\u0434\u0440\u0435\u0441]")))},X=a(73),R=function(e){var t=e.currentFlights,a={labels:["timeWork","timeFlight","timeBlock","timeNight","timeBiologicalNight"],datasets:[{barPercentage:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:u.slice(1,6).map((function(e){return t.map((function(t){return t[e]})).reduce((function(e,t){return e+t}),0)}))}]};return i.a.createElement("div",{className:"chart-container"},i.a.createElement(X.Bar,{data:a,options:{title:{display:!0,text:"\u0421\u0432\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434",fontSize:20},legend:{display:!1}}}))},U=function(e){var t=e.currentFlights,a=u.slice(1,6).map((function(e){return t.map((function(t){return t[e]})).reduce((function(e,t){return e+t}),0)}));return i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item"},"\u0418\u0442\u043e\u0433\u043e"),a.map((function(e){return i.a.createElement("td",{key:e.toString(),className:"details__item"},e)})),[1,2,3,4,5,6].map((function(e){return i.a.createElement("td",{key:e,className:"details__item"},"___")})))},V=function(e){var t,a=e.flight;return i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item"},(t=a.dateFlight,"".concat(t.getDate()," ").concat(d(t.getMonth())," ").concat(t.getFullYear()))),i.a.createElement("td",{className:"details__item"},a.timeWork),i.a.createElement("td",{className:"details__item"},a.timeFlight),i.a.createElement("td",{className:"details__item"},a.timeBlock),i.a.createElement("td",{className:"details__item"},a.timeNight),i.a.createElement("td",{className:"details__item"},a.timeBiologicalNight),i.a.createElement("td",{className:"details__item"},a.flight),i.a.createElement("td",{className:"details__item"},a.pinType),i.a.createElement("td",{className:"details__item"},a.pin),i.a.createElement("td",{className:"details__item"},a.type),i.a.createElement("td",{className:"details__item"},a.takeoff.name),i.a.createElement("td",{className:"details__item"},a.landing.name))},J=function(e){var t=e.flights,a=e.activeFlight,n=e.isFactData,l=e.currentFlights,r=a.value,c=a.year;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S.b,{className:"go-back",to:"/"},"< \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"),i.a.createElement("h2",{className:"details-header"},"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","".concat(r?" \u0437\u0430 ".concat(r):""," ").concat("\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===c?"":c," . \u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e ").concat(n?"\u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c":"\u043f\u043b\u0430\u043d\u043e\u0432\u044b\u043c"," \u0440\u0435\u0439\u0441\u0430\u043c")),i.a.createElement(R,{currentFlights:l}),i.a.createElement("div",{className:"details-container"},i.a.createElement("table",{className:"details",border:"1"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"details__row"},u.map((function(e){return i.a.createElement("th",{className:"details__title",key:e},e)}))),i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item details__item--section",colSpan:u.length},"\u041f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443")),l.map((function(e){return i.a.createElement(V,{key:_(1,100).toString(),flight:e})})),i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item details__item--section",colSpan:u.length},"\u0421\u0443\u043c\u043c\u0430\u0440\u043d\u043e \u0437\u0430 ",r)),i.a.createElement(U,{currentFlights:l}),i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item details__item--section",colSpan:u.length},"\u041f\u043e \u0432\u0441\u0435\u043c \u043f\u043e\u043b\u0435\u0442\u0430\u043c")),t.sort((function(e,t){return t.dateFlight-e.dateFlight})).map((function(e){return i.a.createElement(V,{key:_(200,300).toString(),flight:e})}))))))},q=function(e){return function(t){Object(I.a)(n,t);var a=Object(M.a)(n);function n(e){var t;return Object(C.a)(this,n),(t=a.call(this,e)).state={value:"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430",isFactData:!1},t._toggleHandler=t._toggleHandler.bind(Object(A.a)(t)),t}return Object(L.a)(n,[{key:"_toggleHandler",value:function(){this.setState({isFactData:!this.state.isFactData})}},{key:"render",value:function(){return i.a.createElement(e,Object.assign({},this.props,{toggleHandler:this._toggleHandler,isFactData:this.state.isFactData}))}}]),n}(i.a.Component)},z=Object(s.b)((function(e){return{flights:e.FLIGHTS.flights,activeFlight:e.FLIGHTS.activeFlight,currentFlights:e.FLIGHTS.currentFlights}}),(function(e){return{setActiveFlight:function(t,a,n){e(w(t,a,n))},setCurrentFlights:function(t,a,n){e(T(t,a,n))}}}))(q((function(e){var t=e.flights,a=e.activeFlight,n=e.setActiveFlight,l=e.toggleHandler,r=e.isFactData,c=e.setCurrentFlights,s=e.currentFlights;return i.a.createElement("div",{className:"App"},i.a.createElement(S.a,null,i.a.createElement(B,null),i.a.createElement(j.a,{exact:!0,path:"/"},i.a.createElement(x,{setActiveFlight:n,toggleHandler:l,isFactData:r,flights:t,setCurrentFlights:c})),i.a.createElement(j.a,{path:"/details"},i.a.createElement(J,{flights:t,activeFlight:a,isFactData:r,currentFlights:s})),i.a.createElement(G,null)))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(74),P=a.n(K).a.create({baseURL:"https://reqres.in/api",timeout:5e3,withCredentials:!1}),$=Object(c.e)(H,Object(c.d)(Object(c.a)(o.a.withExtraArgument(P)),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));$.dispatch(O()),r.a.render(i.a.createElement(s.a,{store:$},i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a(197)},84:function(e,t,a){},85:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.b0059c49.chunk.js.map