(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(59)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);a(26),a(27),a(28),a(29),a(30);var n=a(1),l=a.n(n),r=a(13),c=a.n(r),s=a(3),i=a(5),o=a(8),d=a(6),m=a(7),u=(a(35),a(9)),h=a(21),p=a(14),g=a(18),f=(a(42),a(17)),b=a.n(f),v=function e(t){Object(s.a)(this,e),this.id=t,this.text="",this.value=0,this.isloss=!0},y=new Date,E=function e(t,a){Object(s.a)(this,e),this.id=t,this.date=a,this.spended=0,this.comment="",this.available=0,this.saved=0,this.budget=0,this.spending=[new v(y.getTime())]},C=function(e){return 1===(e=e.toString()||"").length&&(e="0"+e),e},w=function(e){e=new Date(e);var t=C(e.getDate()),a=C(e.getMonth()+1),n=e.getFullYear().toString();return"".concat(t,".").concat(a,".").concat(n)},N=function(e,t){var a,n=Math.abs(t.getTime()-e.getTime());return a=n,Math.ceil(a/864e5)},j=function e(t,a,n){var l=this;Object(s.a)(this,e),this.handleChangeIncome=function(e){var t=parseInt(e.target.value,10)||"";t=t||0,l.getProps().writeToState({field:"income",value:t})},this.percentStorageSelect=function(e){var t=parseInt(e.target.value,10);l.getProps().writeToState({field:"percentStorage",value:t})},this.handleStartDaySelect=function(e){e=e||null;var t=l.getProps().endDay;if(e.setHours(0,0,0,0),t.setHours(0,0,0,0),!(e.getTime()>t.getTime())){var a=N(e,t)+1;l.getProps().writeToState({field:"days",value:a}),l.getProps().writeToState({field:"startDay",value:e}),l._updateDailyCosts(e,t,a)}},this.handleEndDaySelect=function(e){e=e||null;var t=l.getProps().startDay;if(console.log(l.getProps(),t),e.setHours(0,0,0,0),t.setHours(0,0,0,0),!(t.getTime()>e.getTime())){var a=N(t,e)+1;l.getProps().writeToState({field:"days",value:a}),l.getProps().writeToState({field:"endDay",value:e}),l._updateDailyCosts(t,e,a)}},this._updateDailyCosts=function(e,t,a){for(var n=[],r=e.getDate(),c=e.getMonth(),s=e.getFullYear(),i=0;i<a;i++){var o=new Date(s,c,r+i),d=o.getTime(),m=new E(d,o);n.push(m)}l.getProps().writeToState({field:"dailyCosts",value:n})},this.handleClickCalendarIcon=function(e){console.log("this: ",l),"SD"===e.currentTarget.attributes.name.value?l.startDatePick.current.onInputClick():l.endDatePick.current.onInputClick()},this.getProps=t,this.startDatePick=a,this.endDatePick=n},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).getProps=function(){return a.props},a.startDatePick=l.a.createRef(),a.endDatePick=l.a.createRef(),a.IncomeController=new j(a.getProps,a.startDatePick,a.endDatePick),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.income,a=e.startDay,n=e.endDay,r=e.percentStorage;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md m-2"},l.a.createElement("label",{className:"text-light",htmlFor:"income"},"\u0414\u043e\u0445\u043e\u0434:"),l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"income",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043e\u0445\u043e\u0434\u0430",onChange:this.IncomeController.handleChangeIncome,value:t}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{style:{width:"4rem"},className:"input-group-text justify-content-center"},"RUB")))),l.a.createElement("div",{className:"calendar col-md m-2"},l.a.createElement("label",{className:"text-light",htmlFor:"days"},"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430:"),l.a.createElement("div",{className:"input-group"},l.a.createElement(g.a,{ref:this.IncomeController.startDatePick,selected:a,onChange:this.IncomeController.handleStartDaySelect,dateFormat:"d MMMM yyyy",placeholderText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043d\u0430\u0447\u0430\u043b\u0430",locale:b.a}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{style:{width:"4rem",cursor:"pointer"},name:"SD",className:"input-group-text justify-content-center",onClick:this.IncomeController.handleClickCalendarIcon},l.a.createElement("i",{className:"fa fa-calendar",alt:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"}))))),l.a.createElement("div",{className:"calendar col-md m-2"},l.a.createElement("label",{className:"text-light",htmlFor:"days"},"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f:"),l.a.createElement("div",{className:"input-group"},l.a.createElement(g.a,{ref:this.IncomeController.endDatePick,selected:n,onChange:this.IncomeController.handleEndDaySelect,dateFormat:"d MMMM yyyy",placeholderText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",locale:b.a}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{style:{width:"4rem",cursor:"pointer"},name:"ED",className:"input-group-text justify-content-center",onClick:this.IncomeController.handleClickCalendarIcon},l.a.createElement("i",{className:"fa fa-calendar",alt:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"}))))),l.a.createElement("div",{className:"col-md m-2"},l.a.createElement("label",{className:"text-light",htmlFor:"percent"},"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0439:"),l.a.createElement("div",{className:"input-group"},l.a.createElement("select",{className:"form-control custom-select",id:"percent",value:r,onChange:this.IncomeController.percentStorageSelect},l.a.createElement("option",{value:"0"},"0"),l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"15"},"15"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"30"},"30"),l.a.createElement("option",{value:"35"},"35"),l.a.createElement("option",{value:"40"},"40"),l.a.createElement("option",{value:"45"},"45"),l.a.createElement("option",{value:"50"},"50")),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{style:{width:"4rem"},className:"input-group-text justify-content-center"},"%")))))}}]),t}(n.Component),D=function e(t){Object(s.a)(this,e),this.id=t,this.text="",this.value=0,this.checked=!1},S=(a(56),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).addNewCost=function(){var e=Object(u.a)(a.props.mandatoryCosts);e.push(new D((new Date).getTime())),a.props.writeToState({field:"mandatoryCosts",value:e})},a.handleChangeCostChecked=function(e){var t=+e.target.id,n=e.target.checked,l=Object(u.a)(a.props.mandatoryCosts);l.forEach(function(e){e.id===t&&(e.checked=n)}),a.props.writeToState({field:"mandatoryCosts",value:l})},a.deleteCost=function(e){var t=+e.target.id,n=Object(u.a)(a.props.mandatoryCosts);n=n.filter(function(e){return e.id!==t}),a.props.writeToState({field:"mandatoryCosts",value:n})},a.handleChangeCostText=function(e){var t=+e.target.id,n=e.target.value,l=Object(u.a)(a.props.mandatoryCosts);l.forEach(function(e){e.id===t&&(e.text=n)}),a.props.writeToState({field:"mandatoryCosts",value:l})},a.handleChangeCostValue=function(e){var t=+e.target.id,n=parseInt(e.target.value,10)||"",l=Object(u.a)(a.props.mandatoryCosts);l.forEach(function(e){e.id===t&&(e.value=n)}),a.props.writeToState({field:"mandatoryCosts",value:l})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.mandatoryCosts;return l.a.createElement("div",{className:"card text-white bg-primary mt-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b"),t.map(function(t){return l.a.createElement("div",{key:t.id,className:"input-group m-0 mb-2"},l.a.createElement("div",{className:t.checked?"checked":"d-none"}),l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("div",{class:"input-group-text"},l.a.createElement("input",{id:t.id,style:{width:"1.5rem",height:"1.2rem"},defaultChecked:t.checked,onClick:e.handleChangeCostChecked,type:"checkbox","aria-label":"Checkbox for following text input"}))),l.a.createElement("input",{id:t.id,type:"text",className:"form-control",onChange:e.handleChangeCostValue,value:t.value,placeholder:"\u0421\u0443\u043c\u043c\u0430","aria-label":"\u0421\u0443\u043c\u043c\u0430","aria-describedby":"button-addon4"}),l.a.createElement("input",{id:t.id,type:"text",className:"form-control",onChange:e.handleChangeCostText,value:t.text,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-label":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-describedby":"button-addon4"}),l.a.createElement("div",{className:"input-group-append",id:"button-addon4"},l.a.createElement("button",{id:t.id,onClick:e.deleteCost,className:"border-left btn btn-dark",type:"button"},"x")))}),l.a.createElement("div",{className:"d-flex mt-2 justify-content-center"},l.a.createElement("button",{type:"button",className:"mr-2 text-right btn btn-light",onClick:this.addNewCost},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(n.Component)),O=(a(57),a(58),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).isToday=function(e){var t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cost,a=e.switchEditMode,n=t.date.getTime(),r=(new Date).getTime(),c=this.isToday(t.date);return l.a.createElement("div",{className:"card-body row"},l.a.createElement("div",{className:"col-12 col-lg-4"},l.a.createElement("h5",{className:"card-title"},t.date?w(t.date)+(c?" (\u0421\u0435\u0433\u043e\u0434\u043d\u044f)":""):""),l.a.createElement("div",null,l.a.createElement("span",{className:"card-text"},"\u0422\u0440\u0430\u0442\u044b: ",t.spended<0?"0":t.spended," \u0440\u0443\u0431.")),l.a.createElement("div",null,l.a.createElement("span",{className:"card-text"},t.comment))),l.a.createElement("div",{className:"col-12 col-lg-4"}),l.a.createElement("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-end align-items-end"},l.a.createElement("div",{className:"d-flex flex-column flex-grow-1 w-100"},l.a.createElement("h6",{className:"card-title"},"\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u0431\u044e\u0434\u0436\u0435\u0442: ",t.budget," \u0440\u0443\u0431."),l.a.createElement("h6",{className:"card-title"},"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",t.available," \u0440\u0443\u0431."),n<r&&l.a.createElement("span",null,l.a.createElement("h6",{className:"card-title mb-0"},"\u0421\u044d\u043a\u043e\u043d\u043e\u043c\u043b\u0435\u043d\u043e: ",t.saved," \u0440\u0443\u0431."),l.a.createElement("h6",{className:"card-title font-weight-normal"},l.a.createElement("i",null,"(\u0421 \u0443\u0447\u0451\u0442\u043e\u043c \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u0437\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0434\u0435\u043d\u044c)"))))),l.a.createElement("div",{className:"col-12 col-lg-1 d-flex align-items-center justify-content-end"},l.a.createElement("button",{className:"btn btn-secondary border border-success w-100",onClick:a},l.a.createElement("i",{className:"fa fa-pencil"}))))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).addNewSpend=function(){var e=a.props.cost,t=Object(u.a)(e.spending);t.push(new v((new Date).getTime())),a.props.changeCostValue(e.id,t)},a.deleteSpend=function(e){var t=+e.target.id,n=a.props.cost,l=Object(u.a)(n.spending);l=l.filter(function(e){return e.id!==t}),a.props.changeCostValue(n.id,l)},a.handleChangeSpendValue=function(e){var t,n=a.props.cost,l=Object(u.a)(n.spending),r=e.currentTarget,c=r.id,s=r.name,i=l.findIndex(function(e,t){return+e.id===+c});switch(s){case"value":t=(t=parseInt(e.target.value,10)||"")||0;break;case"isloss":t=!l[i].isloss;break;case"comment":default:t=e.target.value}l[i][s]=t,a.props.changeCostValue(n.id,l)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.cost,n=t.switchEditMode,r=(t.changeCostValue,a.date.getTime()),c=(new Date).getTime();return l.a.createElement("div",{className:"card-body row"},l.a.createElement("div",{className:"col-12 col-lg-4"},l.a.createElement("h5",{className:"card-title"},a.date?w(a.date):""),l.a.createElement("div",null,l.a.createElement("span",{className:"card-text"},"\u0422\u0440\u0430\u0442\u044b: ",a.spended<0?"0":a.spended," \u0440\u0443\u0431.")),l.a.createElement("div",null,l.a.createElement("span",{className:"card-text"},a.comment))),l.a.createElement("div",{className:"col-12 col-lg-4"},l.a.createElement("h6",{className:"card-title mb-3"},"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u0434\u043e\u0445\u043e\u0434\u044b/\u0440\u0430\u0441\u0445\u043e\u0434\u044b"),a.spending.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement("div",{className:"input-group-sm d-flex m-0 mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("button",{id:t.id,name:"isloss",className:"btn btn-warning",onClick:e.handleChangeSpendValue},t.isloss?l.a.createElement("i",{className:"fa fa-minus",alt:"\u0412 \u043c\u0438\u043d\u0443\u0441"}):l.a.createElement("i",{className:"fa fa-plus",alt:"\u0412 \u043f\u043b\u044e\u0441"}))),l.a.createElement("input",{id:t.id,type:"text",name:"value",className:"form-control",onChange:e.handleChangeSpendValue,value:t.value,placeholder:"\u0421\u0443\u043c\u043c\u0430","aria-label":"\u0421\u0443\u043c\u043c\u0430","aria-describedby":"button-addon4"}),l.a.createElement("input",{id:t.id,type:"text",name:"text",className:"form-control",onChange:e.handleChangeSpendValue,value:t.text,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-label":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438","aria-describedby":"button-addon4"}),l.a.createElement("div",{className:"input-group-append",id:"button-addon4"},l.a.createElement("button",{id:t.id,onClick:e.deleteSpend,className:"border-left btn btn-dark",type:"button"},"x"))))}),l.a.createElement("div",{className:"d-flex mt-2 justify-content-end"},l.a.createElement("button",{type:"button",className:"text-right btn-sm btn-light",onClick:this.addNewSpend},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))),l.a.createElement("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-end align-items-end"},l.a.createElement("div",{className:"d-flex flex-column flex-grow-1 w-100"},l.a.createElement("h6",{className:"card-title"},"\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u0431\u044e\u0434\u0436\u0435\u0442: ",a.budget," \u0440\u0443\u0431."),l.a.createElement("h6",{className:"card-title"},"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",a.available," \u0440\u0443\u0431."),c<r&&l.a.createElement("span",null,l.a.createElement("h6",{className:"card-title mb-0"},"\u0421\u044d\u043a\u043e\u043d\u043e\u043c\u043b\u0435\u043d\u043e: ",a.saved," \u0440\u0443\u0431."),l.a.createElement("h6",{className:"card-title font-weight-normal"},l.a.createElement("i",null,"(\u0421 \u0443\u0447\u0451\u0442\u043e\u043c \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u0437\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0434\u0435\u043d\u044c)"))))),l.a.createElement("div",{className:"col-12 col-lg-1 d-flex align-items-center justify-content-end"},l.a.createElement("button",{className:"btn btn-secondary border border-success w-100",onClick:n},l.a.createElement("i",{className:"fa fa-check"}))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).switchEditMode=function(){var e=a.state.editMode;a.setState({editMode:!e})},a.state={editMode:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.editMode,t=this.props,a=t.cost,n=t.changeCostValue;return l.a.createElement("div",{className:"day card bg-secondary mb-1 "+(e?"day-selected":"")},e?l.a.createElement(k,{changeCostValue:n,cost:a,switchEditMode:this.switchEditMode}):l.a.createElement(O,{cost:a,switchEditMode:this.switchEditMode}))}}]),t}(n.Component),I={width:"0.8rem",cursor:"pointer"},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleSwitchDetailShow=function(){a.setState({showDetail:!a.state.showDetail})},a.handleChangeCostValue=function(e,t){var n=Object(u.a)(a.props.dailyCosts),l=n.findIndex(function(t,a){return+t.id===+e});n[l].spending=t,n[l].spended=t.reduce(function(e,t){return t.isloss?e+t.value:e-t.value},0),a.props.writeToState({field:"dailyCosts",value:n})},a.state={showDetail:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetail?"show":"",a="fa "+(this.state.showDetail?"fa-arrow-up":"fa-arrow-down"),n=this.props.dailyCosts;return l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex mt-2 justify-content-center"},l.a.createElement("button",{type:"button",className:" w-100 text-center btn btn-primary",onClick:this.handleSwitchDetailShow},l.a.createElement("i",{style:I,className:"mr-4 "+a}),"\u0414\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432 \u043f\u043e \u0434\u043d\u044f\u043c",l.a.createElement("i",{style:I,className:"ml-4 "+a}))),l.a.createElement("div",{className:"daily text-white bg-primary collapse"+t},n.map(function(t){return l.a.createElement(T,{key:t.id,cost:t,changeCostValue:e.handleChangeCostValue})})))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.storage,a=e.balance,n=e.budget,r=e.endDay,c=e.days,s=e.percentStorage;return l.a.createElement("div",{className:"mt-2 text-white card-group text-center"},l.a.createElement("div",{className:"card bg-primary border-secondary rounded-lg"},l.a.createElement("h4",{className:"pb-3 mt-3"},t," RUB"),l.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},l.a.createElement("h5",{className:"card-title"},"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f (",s,"%)"),l.a.createElement("p",{className:"card-text"},"\u0421\u0443\u043c\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043b\u043e\u0436\u0438\u0442\u044c \u0432 \u041d/\u0417."))),l.a.createElement("div",{className:"card bg-primary border-secondary rounded-lg"},l.a.createElement("h4",{className:"pb-3 mt-3"},a," RUB"),l.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},l.a.createElement("h5",{className:"card-title "},"\u041e\u0441\u0442\u0430\u0442\u043e\u043a ",r?"(\u0434\u043e ".concat(w(r),")"):""),l.a.createElement("p",{className:"card-text"},"\u0421\u0443\u043c\u043c\u0430 \u043d\u0430 \u0440\u0430\u0441\u0445\u043e\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0437\u0430 ",c," \u0434\u043d\u0435\u0439."))),l.a.createElement("div",{className:"card bg-primary border-secondary rounded-lg"},l.a.createElement("h4",{className:"pb-3 mt-3"},n," RUB"),l.a.createElement("div",{className:"pt-0 card-body d-flex flex-column justify-content-between"},l.a.createElement("h5",{className:"card-title "},"\u0432 \u0434\u0435\u043d\u044c"),l.a.createElement("p",{className:"card-text"},"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0431\u044e\u0434\u0436\u0435\u0442  ",r?"(\u0434\u043e ".concat(w(r),")"):"","."))))}}]),t}(n.Component),V=new Date,_=new Date;_.setDate(V.getDate()+1);var F=function e(){Object(s.a)(this,e),this.isLoaded=!0,this.income=0,this.startDay=V,this.endDay=_,this.days=2,this.percentStorage=10,this.mandatoryCosts=[new D(V.getTime())],this.dailyCosts=[new E(V.getTime(),V),new E(_.getTime(),_)],this.total={storage:0,balance:0,budget:0}},B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){var e=localStorage.getItem("finData"),t=function(e){a.setState({isLoaded:!1}),setTimeout(function(){a.setState({isLoaded:!0})},e)};if(e){var n=JSON.parse(e);n.startDay=n.startDay?new Date(n.startDay):null,n.endDay=n.endDay?new Date(n.endDay):null,n.dailyCosts=n.dailyCosts.map(function(e){return e.date=new Date(e.date),e}),a.setState(n),t(1200)}else t(3e3)},a._writeToState=function(e){a.setState(Object(h.a)({},e.field,e.value),function(){this._updateTotal()})},a._writeToLocal=function(e){localStorage.setItem("finData",JSON.stringify(e))},a.handleClearStateStorage=function(){a.setState(new F,function(){this._updateTotal()})},a._updateTotal=function(){var e=a.state.income,t=a.state.days,n=Object(u.a)(a.state.mandatoryCosts),l=Object(u.a)(a.state.dailyCosts),r=l.reduce(function(e,t){return e+t.spended},0),c=a.state.percentStorage/100,s=a.state.total,i=function(e){return e.reduce(function(e,t){return e+t.value},0)}(n);s.storage=parseInt(e*c,10)||0,s.balance=parseInt(e-s.storage,10)-i-r||0,s.budget=parseInt(s.balance/t,10)||0,l=a._reCalcDailyCosts(l,s.budget),a.setState({total:s,dailyCosts:l},function(){this._writeToLocal(this.state)}.bind(Object(p.a)(a)))},a._reCalcDailyCosts=function(e,t){return e.reduce(function(a,n,l){return n.budget=t,0===l?(n.available=t-n.spended,n.saved=n.available):(n.available=t-n.spended,n.saved=n.available+e[l-1].saved),a.push(n),a},[])},a.state=new F,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isLoaded;return l.a.createElement("section",{className:"m-2 text-left"},!e&&l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",style:{height:"85vh"}},l.a.createElement("div",{className:"loader-wrapper",id:"loader-1"},l.a.createElement("h3",{className:"font-weight-lighter",style:{textAlign:"Center"}},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),l.a.createElement("div",{id:"loader"})))),e&&l.a.createElement(x,{income:this.state.income,startDay:this.state.startDay,endDay:this.state.endDay,dailyCosts:this.state.dailyCosts,percentStorage:this.state.percentStorage,writeToState:this._writeToState}),e&&l.a.createElement(S,{mandatoryCosts:this.state.mandatoryCosts,writeToState:this._writeToState}),e&&l.a.createElement(M,{dailyCosts:this.state.dailyCosts,writeToState:this._writeToState}),e&&l.a.createElement(P,{storage:this.state.total.storage,balance:this.state.total.balance,budget:this.state.total.budget,startDay:this.state.startDay,endDay:this.state.endDay,days:this.state.days,percentStorage:this.state.percentStorage}),e&&l.a.createElement("div",{className:"m-2 d-flex justify-content-center"},l.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.handleClearStateStorage},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c")))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h3",{className:"text-light"},"\u0420\u0430\u0441\u0447\u0451\u0442 \u0431\u044e\u0434\u0436\u0435\u0442\u0430")),l.a.createElement(B,null),l.a.createElement("footer",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.86bc99ed.chunk.js.map