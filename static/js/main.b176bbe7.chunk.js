(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),l=(a(16),a(6)),o=a(1),i=a(2),u=a(4),m=a(3),d=a(5),p=(a(17),a(18),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"d-flex flex-wrap"},c.a.createElement("div",{className:"m-2"},c.a.createElement("label",{htmlFor:"income"},"\u0414\u043e\u0445\u043e\u0434:"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number",className:"form-control",id:"income",onChange:this.props.handleChangeIncome,value:this.props.income}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text"},"RUB")))),c.a.createElement("div",{className:"m-2"},c.a.createElement("label",{htmlFor:"days"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439:"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"number",className:"form-control",id:"days",onChange:this.props.handleChangeDays,value:this.props.days}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text"},"\u0414\u043d\u0435\u0439")))),c.a.createElement("div",{className:"m-2"},c.a.createElement("label",{htmlFor:"days"},"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0439:"),c.a.createElement("div",{className:"input-group"},c.a.createElement("select",{class:"custom-select",id:"inputGroupSelect01",defaultValue:this.props.percentStorage,onChange:this.props.percentStorageSelect},c.a.createElement("option",{value:"0"},"0"),c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"15"},"15"),c.a.createElement("option",{value:"20"},"20"),c.a.createElement("option",{value:"25"},"25"),c.a.createElement("option",{value:"30"},"30")),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text"},"%")))))}}]),t}(n.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.costs,a=e.addCost,n=e.deleteCost,s=e.changeText,r=e.changeValue;return c.a.createElement("div",{className:"card text-white bg-info mt-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b"),t.map(function(e){return c.a.createElement("div",{key:e.id,className:"input-group mb-2"},c.a.createElement("input",Object.assign({},e,{type:"text",className:"w-50 form-control",onChange:s,value:e.text,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-label":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-describedby":"button-addon4"})),c.a.createElement("input",Object.assign({},e,{type:"text",className:"form-control",onChange:r,value:e.value,placeholder:"\u0421\u0443\u043c\u043c\u0430","aria-label":"\u0421\u0443\u043c\u043c\u0430","aria-describedby":"button-addon4"})),c.a.createElement("div",{className:"input-group-append",id:"button-addon4"},c.a.createElement("button",Object.assign({},e,{onClick:n,className:"border-left btn btn-dark",type:"button"}),"x")))}),c.a.createElement("div",{className:"d-flex mt-2 justify-content-end"},c.a.createElement("button",{type:"button",className:"text-right btn btn-light",onClick:a},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.storage,a=e.balance,n=e.budget,s=e.days,r=e.percentStorage;return c.a.createElement("div",{className:"mt-2 card-group text-center"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"pb-3 mt-3"},t," RUB"),c.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},c.a.createElement("h5",{className:"card-title"},"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f (",r,"%)"),c.a.createElement("p",{className:"card-text"},"\u0421\u0443\u043c\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043b\u043e\u0436\u0438\u0442\u044c \u0432 \u041d/\u0417."))),c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"pb-3 mt-3"},a," RUB"),c.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},c.a.createElement("h5",{className:"card-title "},"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"),c.a.createElement("p",{className:"card-text"},"\u0421\u0443\u043c\u043c\u0430 \u043d\u0430 \u0440\u0430\u0441\u0445\u043e\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0437\u0430 ",s," \u0434\u043d\u0435\u0439."))),c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"pb-3 mt-3"},n," RUB"),c.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},c.a.createElement("h5",{className:"card-title "},"\u0432 \u0434\u0435\u043d\u044c"),c.a.createElement("p",{className:"card-text"},"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0431\u044e\u0434\u0436\u0435\u0442."))))}}]),t}(n.Component),b=function e(t){Object(o.a)(this,e),this.id=t,this.text="",this.value=0},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChangeIncome=function(e){var t=parseInt(e.target.value,10);e.target.value=+e.target.value,t=t||0,a.setState({income:t},function(){this._updateTotal()})},a.handleChangeDays=function(e){var t=parseInt(e.target.value,10);e.target.value=+e.target.value,t=t||0,a.setState({days:t},function(){this._updateTotal()})},a.percentStorageSelect=function(e){var t=parseInt(e.target.value,10);a.setState({percentStorage:t},function(){this._updateTotal()})},a.addCost=function(){var e=Object(l.a)(a.state.costs);e.unshift(new b((new Date).getTime())),a.setState({costs:e},function(){this._updateTotal()})},a.deleteCost=function(e){var t=+e.target.id,n=Object(l.a)(a.state.costs);n=n.filter(function(e){return e.id!==t}),a.setState({costs:n},function(){this._updateTotal()})},a.handleChangeCostText=function(e){var t=+e.target.id,n=e.target.value,c=Object(l.a)(a.state.costs);c.forEach(function(e){e.id===t&&(e.text=n)}),a.setState({costs:c},function(){this._updateTotal()})},a.handleChangeCostValue=function(e){var t=+e.target.id,n=parseInt(e.target.value,10);e.target.value=+e.target.value;var c=Object(l.a)(a.state.costs);c.forEach(function(e){e.id===t&&(e.value=n)}),a.setState({costs:c},function(){this._updateTotal()})},a._updateTotal=function(){var e=a.state.income,t=a.state.days,n=Object(l.a)(a.state.costs),c=a.state.percentStorage/100,s=a.state.total,r=a._countRequiredCost(n);s.storage=parseInt(e*c,10)||0,s.balance=parseInt(e-s.storage,10)-r||0,s.budget=parseInt(s.balance/t,10)||0,a.setState({total:s})},a._countRequiredCost=function(e){return e.reduce(function(e,t){return e+t.value},0)},a.state={income:0,days:0,percentStorage:10,costs:[new b((new Date).getTime())],total:{storage:0,balance:0,budget:0}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h3",{className:""},"\u0420\u0430\u0441\u0447\u0451\u0442 \u0431\u044e\u0434\u0436\u0435\u0442\u0430")),c.a.createElement("section",{className:"m-3 text-left"},c.a.createElement(p,{income:this.state.income,days:this.state.days,percentStorage:this.state.percentStorage,percentStorageSelect:this.percentStorageSelect,handleChangeIncome:this.handleChangeIncome,handleChangeDays:this.handleChangeDays}),c.a.createElement(h,{costs:this.state.costs,addCost:this.addCost,deleteCost:this.deleteCost,changeText:this.handleChangeCostText,changeValue:this.handleChangeCostValue}),c.a.createElement(g,{storage:this.state.total.storage,balance:this.state.total.balance,budget:this.state.total.budget,days:this.state.days,percentStorage:this.state.percentStorage})),c.a.createElement("footer",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.b176bbe7.chunk.js.map