(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(57)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);a(26),a(27),a(28),a(29),a(30);var n=a(1),r=a.n(n),c=a(13),l=a.n(c),s=a(4),o=a(5),i=a(8),d=a(6),m=a(7),u=(a(35),a(19)),h=a(11),p=a(14),f=a(24),b=(a(42),a(23)),v=a.n(b),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleChangeIncome=function(e){var t=parseInt(e.target.value,10)||"";t=t||0,a.props.writeToState({field:"income",value:t})},a.handleChangeDays=function(e){var t=parseInt(e.target.value,10)||"";t=t||0,a.props.writeToState({field:"days",value:t})},a.percentStorageSelect=function(e){var t=parseInt(e.target.value,10);a.props.writeToState({field:"percentStorage",value:t})},a.handleStartDaySelect=function(e){e=e||null,a.props.writeToState({field:"startDay",value:e})},a.handleClickCalendarIcon=function(){a.datePick.current.onInputClick()},a.datePick=r.a.createRef(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.income,a=e.startDay,n=e.days,c=e.percentStorage;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md m-2"},r.a.createElement("label",{className:"text-light",htmlFor:"income"},"\u0414\u043e\u0445\u043e\u0434:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"income",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043e\u0445\u043e\u0434\u0430",onChange:this.handleChangeIncome,value:t}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{style:{width:"4rem"},className:"input-group-text justify-content-center"},"RUB")))),r.a.createElement("div",{className:"calendar col-md m-2"},r.a.createElement("label",{className:"text-light",htmlFor:"days"},"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430:"),r.a.createElement("div",{className:"input-group"},r.a.createElement(f.a,{ref:this.datePick,selected:a,onChange:this.handleStartDaySelect,dateFormat:"d MMMM yyyy",placeholderText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0430\u0447\u0430\u043b\u0430",locale:v.a}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{style:{width:"4rem",cursor:"pointer"},className:"input-group-text justify-content-center",onClick:this.handleClickCalendarIcon},r.a.createElement("i",{className:"fa fa-calendar",alt:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"}))))),r.a.createElement("div",{className:"col-md m-2"},r.a.createElement("label",{className:"text-light",htmlFor:"days"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"days",placeholder:"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439",onChange:this.handleChangeDays,value:n}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{style:{width:"4rem"},className:"input-group-text justify-content-center"},"\u0414\u043d\u0435\u0439")))),r.a.createElement("div",{className:"col-md m-2"},r.a.createElement("label",{className:"text-light",htmlFor:"percent"},"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0439:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control custom-select",id:"percent",value:c,onChange:this.percentStorageSelect},r.a.createElement("option",{value:"0"},"0"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"30"},"30")),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{style:{width:"4rem"},className:"input-group-text justify-content-center"},"%")))))}}]),t}(n.Component),E=function e(t){Object(s.a)(this,e),this.id=t,this.text="",this.value=0},y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).addNewCost=function(){var e=Object(h.a)(a.props.costs);e.push(new E((new Date).getTime())),a.props.writeToState({field:"costs",value:e})},a.deleteCost=function(e){var t=+e.target.id,n=Object(h.a)(a.props.costs);n=n.filter(function(e){return e.id!==t}),a.props.writeToState({field:"costs",value:n})},a.handleChangeCostText=function(e){var t=+e.target.id,n=e.target.value,r=Object(h.a)(a.props.costs);r.forEach(function(e){e.id===t&&(e.text=n)}),a.props.writeToState({field:"costs",value:r})},a.handleChangeCostValue=function(e){var t=+e.target.id,n=parseInt(e.target.value,10)||"",r=Object(h.a)(a.props.costs);r.forEach(function(e){e.id===t&&(e.value=n)}),a.props.writeToState({field:"costs",value:r})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.costs;return r.a.createElement("div",{className:"card text-white bg-primary mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b"),t.map(function(t){return r.a.createElement("div",{key:t.id,className:"input-group mb-2"},r.a.createElement("input",Object.assign({},t,{type:"text",className:"form-control",onChange:e.handleChangeCostValue,value:t.value,placeholder:"\u0421\u0443\u043c\u043c\u0430","aria-label":"\u0421\u0443\u043c\u043c\u0430","aria-describedby":"button-addon4"})),r.a.createElement("input",Object.assign({},t,{type:"text",className:"form-control",onChange:e.handleChangeCostText,value:t.text,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-label":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-describedby":"button-addon4"})),r.a.createElement("div",{className:"input-group-append",id:"button-addon4"},r.a.createElement("button",Object.assign({},t,{onClick:e.deleteCost,className:"border-left btn btn-dark",type:"button"}),"x")))}),r.a.createElement("div",{className:"d-flex mt-2 justify-content-center"},r.a.createElement("button",{type:"button",className:"mr-2 text-right btn btn-light",onClick:this.addNewCost},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(n.Component),w=(a(56),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={edit:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.state.edit;return r.a.createElement("div",{class:"card bg-secondary"},r.a.createElement("div",{className:"delete"},r.a.createElement("button",{class:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-pencil"}))),r.a.createElement("div",{class:"card-body row"},r.a.createElement("div",{className:"first col-12 col-lg-6"},r.a.createElement("h5",{class:"card-title"},"30.04.2019"),r.a.createElement("p",{class:"card-text"},"\u0422\u0440\u0430\u0442\u044b: 2000 \u0440\u0443\u0431."),r.a.createElement("p",{class:"card-text"},"With supporting text below as a natural lead-in to additional content.")),r.a.createElement("div",{className:"second col-12 col-lg-6 d-flex flex-column justify-content-end"},r.a.createElement("div",null,r.a.createElement("h6",{class:"card-title"},"\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u0431\u044e\u0434\u0436\u0435\u0442: 3000 \u0440\u0443\u0431."),r.a.createElement("h6",{class:"card-title"},"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u044f: 3000 \u0440\u0443\u0431.")))))}}]),t}(n.Component)),N={width:"0.8rem",cursor:"pointer"},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).hadnleSwitchDetailShow=function(){a.setState({showDetail:!a.state.showDetail})},a.state={showDetail:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.showDetail?"show":"",t=this.props,a=t.dailyCosts,n=t.writeToState;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex mt-2 justify-content-center"},r.a.createElement("button",{type:"button",className:" w-100 text-center btn btn-primary",onClick:this.hadnleSwitchDetailShow},r.a.createElement("i",{style:N,className:"mr-4 fa "+(this.state.showDetail?"fa-arrow-up":"fa-arrow-down"),alt:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}),"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u043f\u043e \u0434\u043d\u044f\u043c",r.a.createElement("i",{style:N,className:"ml-4 fa "+(this.state.showDetail?"fa-arrow-up":"fa-arrow-down"),alt:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}))),r.a.createElement("div",{className:"daily text-white bg-primary collapse"+e},r.a.createElement("h5",null,"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b"),a.map(function(e){return r.a.createElement(w,{cost:e,writeToState:n})})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._addZero=function(e){return 1===(e=e.toString()||"").length&&(e="0"+e),e},a.transformDate=function(e,t){var n=new Date(e);n.setDate(n.getDate()+t);var r=a._addZero(n.getDate()),c=a._addZero(n.getMonth()+1),l=n.getFullYear().toString();return"(\u0434\u043e ".concat(r,".").concat(c,".").concat(l,")")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.storage,a=e.balance,n=e.budget,c=e.startDay,l=e.days,s=e.percentStorage;return r.a.createElement("div",{className:"mt-2 text-white card-group text-center"},r.a.createElement("div",{className:"card bg-primary border-secondary rounded-lg"},r.a.createElement("h4",{className:"pb-3 mt-3"},t," RUB"),r.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},r.a.createElement("h5",{className:"card-title"},"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f (",s,"%)"),r.a.createElement("p",{className:"card-text"},"\u0421\u0443\u043c\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043b\u043e\u0436\u0438\u0442\u044c \u0432 \u041d/\u0417."))),r.a.createElement("div",{className:"card bg-primary border-secondary rounded-lg"},r.a.createElement("h4",{className:"pb-3 mt-3"},a," RUB"),r.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},r.a.createElement("h5",{className:"card-title "},"\u041e\u0441\u0442\u0430\u0442\u043e\u043a ",c?this.transformDate(c,l):""),r.a.createElement("p",{className:"card-text"},"\u0421\u0443\u043c\u043c\u0430 \u043d\u0430 \u0440\u0430\u0441\u0445\u043e\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0437\u0430 ",l," \u0434\u043d\u0435\u0439."))),r.a.createElement("div",{className:"card bg-primary border-secondary rounded-lg"},r.a.createElement("h4",{className:"pb-3 mt-3"},n," RUB"),r.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},r.a.createElement("h5",{className:"card-title "},"\u0432 \u0434\u0435\u043d\u044c"),r.a.createElement("p",{className:"card-text"},"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0431\u044e\u0434\u0436\u0435\u0442  ",c?this.transformDate(c,l):"","."))))}}]),t}(n.Component),O=function e(t,a){Object(s.a)(this,e),this.id=t,this.date=a,this.spended=0,this.available=0,this.saved=0},x=function e(){Object(s.a)(this,e),this.isLoaded=!0,this.income=0,this.startDay=new Date,this.days=0,this.percentStorage=10,this.costs=[new E((new Date).getTime())],this.dailyCosts=[new O((new Date).getTime(),new Date)],this.total={storage:0,balance:0,budget:0}},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){var e,t=localStorage.getItem("finData");if(t){var n=JSON.parse(t);n.startDay=n.startDay?new Date(n.startDay):null,a.setState(n)}else e=3e3,a.setState({isLoaded:!1}),setTimeout(function(){a.setState({isLoaded:!0})},e)},a.handleClearStateStorage=function(){a.setState(new x,function(){this._updateTotal()})},a._updateTotal=function(){var e=a.state.income,t=a.state.days,n=Object(h.a)(a.state.costs),r=a.state.percentStorage/100,c=a.state.total,l=a._countRequiredCost(n);c.storage=parseInt(e*r,10)||0,c.balance=parseInt(e-c.storage,10)-l||0,c.budget=parseInt(c.balance/t,10)||0,a.setState({total:c},function(){this._writeToLocal(this.state)}.bind(Object(p.a)(a)))},a._countRequiredCost=function(e){return e.reduce(function(e,t){return e+t.value},0)},a._writeToState=function(e){a.setState(Object(u.a)({},e.field,e.value),function(){this._updateTotal()})},a._writeToLocal=function(e){localStorage.setItem("finData",JSON.stringify(e))},a.state=new x,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.isLoaded;return r.a.createElement("section",{className:"m-2 text-left"},!e&&r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",style:{height:"85vh"}},r.a.createElement("div",{className:"loader-wrapper",id:"loader-1"},r.a.createElement("h3",{className:"font-weight-lighter",style:{textAlign:"Center"}},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),r.a.createElement("div",{id:"loader"})))),e&&r.a.createElement(g,{income:this.state.income,startDay:this.state.startDay,days:this.state.days,percentStorage:this.state.percentStorage,writeToState:this._writeToState}),e&&r.a.createElement(y,{costs:this.state.costs,writeToState:this._writeToState}),e&&r.a.createElement(j,{dailyCosts:this.state.dailyCosts,writeToState:this._writeToState}),e&&r.a.createElement(S,{storage:this.state.total.storage,balance:this.state.total.balance,budget:this.state.total.budget,startDay:this.state.startDay,days:this.state.days,percentStorage:this.state.percentStorage}),e&&r.a.createElement("div",{className:"m-2 d-flex justify-content-center"},r.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.handleClearStateStorage},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h3",{className:"text-light"},"\u0420\u0430\u0441\u0447\u0451\u0442 \u0431\u044e\u0434\u0436\u0435\u0442\u0430")),r.a.createElement(C,null),r.a.createElement("footer",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.3c3f18d9.chunk.js.map