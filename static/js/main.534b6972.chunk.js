(this.webpackJsonpfinanceapp=this.webpackJsonpfinanceapp||[]).push([[0],{170:function(t,e,a){},171:function(t,e,a){},172:function(t,e,a){},174:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(28),l=a.n(o),u=(a(67),a(68),a(15)),p=a(2),c=a(4),s=a(5),i=a(7),m=a(6),y=a(14),g="MORTGAGE_UPDATE_PROPERTY_VALUE",h="MORTGAGE_UPDATE_INTEREST_RATE",d="MORTGAGE_UPDATE_TOTAL_DURATION",f="MORTGAGE_UPDATE_MONTHLY_PAYMENTS",O="MORTGAGE_UPDATE_TOTAL_PAYMENT",b="MORTGAGE_UPDATE_TOTAL_INTEREST",E="MORTGAGE_UPDATE_MONTHLY_HOA",T="MORTGAGE_UPDATE_PROPERTY_TAX_RATE",v="MORTGAGE_UPDATE_ANNUAL_INSURANCE_COST";var I={updatePropertyValue:function(t){return{type:g,payload:{propertyValue:t}}},updateInterestRate:function(t){return{type:h,payload:{interestRate:t}}},updateTotalDuration:function(t){return{type:d,payload:{totalDuration:t}}},updateMonthlyPayments:function(){return{type:f}},updateTotalPayment:function(){return{type:O}},updateTotalInterest:function(){return{type:b}},updateMonthlyHOA:function(t){return{type:E,payload:{monthlyHOA:t}}},updatePropertyTaxRate:function(t){return{type:T,payload:{propertyTaxRate:t}}},updateAnnualInsuranceCost:function(t){return{type:v,payload:{annualInsuranceCost:t}}}},A=(a(73),function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).StartingAmountOnChange=function(e){t.props.updatePropertyValue(parseFloat(e.target.value)),t.props.updateMonthlyPayments(),t.props.updateTotalPayment(),t.props.updateTotalInterest()},t.InterestRateOnChange=function(e){e.target.value<100&&e.target.value>0?t.props.updateInterestRate(parseFloat(e.target.value)):e.target.value<=0?t.props.updateInterestRate(0):t.props.updateInterestRate(100),t.props.updateMonthlyPayments(),t.props.updateTotalPayment(),t.props.updateTotalInterest()},t.TotalDurationOnChange=function(e){console.log(t.props.mortgageInfo),t.props.updateTotalDuration(parseFloat(e.target.value)),t.props.updateMonthlyPayments(),t.props.updateTotalPayment(),t.props.updateTotalInterest()},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BasicInputWidget"},r.a.createElement("label",{htmlFor:"mortgage-amount"},"Mortgage Amount"),r.a.createElement("span",{className:"basic-input-input"},"$",r.a.createElement("input",{type:"number",name:"mortgage-amount",className:"mortgage-amount-input",step:"10000",min:"0",value:this.props.mortgageInfo.propertyValue,onChange:this.StartingAmountOnChange})),r.a.createElement("label",{htmlFor:"interest-rate"},"Interest Rate (%)"),r.a.createElement("span",{className:"basic-input-input"},r.a.createElement("input",{type:"number",name:"interest-rate",step:"1",max:"100",min:"0",value:this.props.mortgageInfo.interestRate,onChange:this.InterestRateOnChange})),r.a.createElement("label",{htmlFor:"mortgage-duration"},"Mortgage Duration (Years) "),r.a.createElement("span",{className:"basic-input-input"},r.a.createElement("input",{type:"number",name:"mortgage-duration",step:"5",min:"0",value:this.props.mortgageInfo.totalDuration,onChange:this.TotalDurationOnChange})))}}]),a}(n.Component)),j=Object(y.b)((function(t){return{mortgageInfo:t.mortgageCalcReducer}}),(function(t){return{updatePropertyValue:function(e){t(I.updatePropertyValue(e))},updateInterestRate:function(e){t(I.updateInterestRate(e))},updateTotalDuration:function(e){t(I.updateTotalDuration(e))},updateMonthlyPayments:function(){t(I.updateMonthlyPayments())},updateTotalPayment:function(){t(I.updateTotalPayment())},updateTotalInterest:function(){t(I.updateTotalInterest())}}}))(A),P=(a(74),function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={},n.props.updateMonthlyPayments(),n.props.updateTotalPayment(),n.props.updateTotalInterest(),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BasicOutputWidget"},r.a.createElement("label",{htmlFor:"total-cost"},"Total Cost of Mortgage"),r.a.createElement("span",{className:"basic-output-input"},"$",r.a.createElement("input",{type:"number",name:"total-cost",className:"mortgage-amount-output",value:this.props.mortgageInfo.totalPayment,readOnly:!0})),r.a.createElement("label",{htmlFor:"monthly-payment"},"Monthly Payments"),r.a.createElement("span",{className:"basic-output-input"},"$",r.a.createElement("input",{type:"number",name:"monthly-payment",className:"mortgage-amount-output",value:this.props.mortgageInfo.monthlyPayment,readOnly:!0})),r.a.createElement("label",{htmlFor:"interest-paid"},"Total Interest Paid"),r.a.createElement("span",{className:"basic-output-input"},"$",r.a.createElement("input",{type:"number",name:"interest-paid",className:"mortgage-amount-output",value:this.props.mortgageInfo.totalInterest,readOnly:!0})))}}]),a}(n.Component)),R=Object(y.b)((function(t){return{mortgageInfo:t.mortgageCalcReducer}}),(function(t){return{updateMonthlyPayments:function(){t(I.updateMonthlyPayments())},updateTotalPayment:function(){t(I.updateTotalPayment())},updateTotalInterest:function(){t(I.updateTotalInterest())}}}))(P),C=a(61),M=(a(170),function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).monthlyHOAOnChange=function(t){n.props.updateMonthlyHOA(parseFloat(t.target.value))},n.propertyTaxRateOnChange=function(t){n.props.updatePropertyTaxRate(parseFloat(t.target.value))},n.insuranceCostOnChange=function(t){n.props.updateAnnualInsuranceCost(parseFloat(t.target.value))},n.getMonthlyExpenses=function(){var t;return t=parseFloat(n.props.mortgageInfo.monthlyPayment)+parseFloat(n.props.mortgageInfo.propertyTaxRate/100*n.props.mortgageInfo.propertyValue/12)+parseFloat(n.props.mortgageInfo.annualInsuranceCost/12)+parseFloat(n.props.mortgageInfo.monthlyHOA),console.log(t),t},n.getChartData=function(t){var e=n.state.data;return e.datasets=[{backgroundColor:["#003f5c","#bc5090","#ff6361","#ffa600"],borderWidth:1,data:[n.props.mortgageInfo.monthlyPayment,n.props.mortgageInfo.propertyTaxRate/100*n.props.mortgageInfo.propertyValue/12,n.props.mortgageInfo.annualInsuranceCost/12,n.props.mortgageInfo.monthlyHOA]}],e},n.state={monthlyHOA:0,data:{labels:["Principle & Interest","Taxes","Insurance","HOA"]}},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"PITIEstimatorWidget"},r.a.createElement("div",{className:"InformationDiv"},r.a.createElement("label",{htmlFor:"tax-rate"},"Property Tax Rate (%)"),r.a.createElement("span",{className:"piti-input"},r.a.createElement("input",{type:"number",name:"tax-rate",step:"1",max:"100",min:"0",value:this.props.mortgageInfo.propertyTaxRate,onChange:this.propertyTaxRateOnChange})),r.a.createElement("label",{htmlFor:"home-insurance"},"Annual Home Insurance"),r.a.createElement("span",{className:"piti-input"},"$",r.a.createElement("input",{type:"number",name:"home-insurance",className:"piti-amount-input",step:"1",max:"100",min:"0",value:this.props.mortgageInfo.annualInsuranceCost,onChange:this.insuranceCostOnChange})),r.a.createElement("label",{htmlFor:"monthly-hoa"},"Monthly HOA"),r.a.createElement("span",{className:"piti-input"},"$",r.a.createElement("input",{type:"number",name:"monthly-hoa",className:"piti-amount-input",step:"100",min:"0",value:this.props.mortgageInfo.monthlyHOA,onChange:this.monthlyHOAOnChange})),r.a.createElement("label",{htmlFor:"monthly-expenses"},"Monthly Housing Expenses"),r.a.createElement("span",{className:"piti-output"},"$",r.a.createElement("input",{type:"number",name:"monthly-hoa",className:"piti-amount-output",value:this.getMonthlyExpenses().toFixed(2),readOnly:!0}))),r.a.createElement("div",{className:"chart-div"},r.a.createElement(C.Doughnut,{className:"Chart",options:{responsive:!0,maintainAspectRatio:!1,tooltips:{callbacks:{label:function(t,e){return"$"+e.datasets[0].data[t.index]}}},legend:{display:!0,position:"left",labels:{fontSize:9,boxWidth:10,fontColor:"#eee"}}},data:this.getChartData,width:100})))}}]),a}(n.Component)),N=Object(y.b)((function(t){return{mortgageInfo:t.mortgageCalcReducer}}),(function(t){return{updateMonthlyHOA:function(e){t(I.updateMonthlyHOA(e))},updatePropertyTaxRate:function(e){t(I.updatePropertyTaxRate(e))},updateAnnualInsuranceCost:function(e){t(I.updateAnnualInsuranceCost(e))}}}))(M),x=(a(171),function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"MortgageCalc"},r.a.createElement(j,null),r.a.createElement(R,null),r.a.createElement(N,null))}}]),a}(n.Component)),D=(a(172),function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"NavigationBar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/budget-manager"},"Budget")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/debt-manager"},"Debt")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/tax-estimator"},"Taxes")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/mortgage-calculator"},"Mortgage")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Home"))))}}]),a}(n.Component)),_=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"DebtManager")}}]),a}(n.Component),F=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"BudgetManager")}}]),a}(n.Component),H=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"TaxEstimator"},"TaxEstimator")}}]),a}(n.Component),G=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"BudgetManager")}}]),a}(n.Component);function w(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(D,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/mortgage-calculator",component:x}),r.a.createElement(p.a,{path:"/tax-estimator",component:H}),r.a.createElement(p.a,{path:"/debt-manager",component:_}),r.a.createElement(p.a,{path:"/budget-manager",component:F}),r.a.createElement(p.a,{path:"/",component:G}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(18),V=a(3),U={propertyValue:2e5,interestRate:5,totalDuration:30,monthlyPayment:0,totalPayment:0,totalInterest:0,monthlyHOA:100,propertyTaxRate:1.5,annualInsuranceCost:1200};var $=Object(k.b)({mortgageCalcReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(V.a)(Object(V.a)({},t),{},{propertyValue:e.payload.propertyValue});case h:return Object(V.a)(Object(V.a)({},t),{},{interestRate:e.payload.interestRate});case d:return Object(V.a)(Object(V.a)({},t),{},{totalDuration:e.payload.totalDuration});case O:return Object(V.a)(Object(V.a)({},t),{},{totalPayment:(t.monthlyPayment*t.totalDuration*12).toFixed(2)});case f:return console.log(t),Object(V.a)(Object(V.a)({},t),{},{monthlyPayment:(t.propertyValue*(t.interestRate/100/12)/(1-Math.pow(1+t.interestRate/100/12,-12*t.totalDuration))).toFixed(2)});case b:return Object(V.a)(Object(V.a)({},t),{},{totalInterest:(t.totalPayment-t.propertyValue).toFixed(2)});case E:return Object(V.a)(Object(V.a)({},t),{},{monthlyHOA:e.payload.monthlyHOA});case T:return Object(V.a)(Object(V.a)({},t),{},{propertyTaxRate:e.payload.propertyTaxRate});case v:return Object(V.a)(Object(V.a)({},t),{},{annualInsuranceCost:e.payload.annualInsuranceCost});default:return t}}}),B=Object(k.c)($);l.a.render(r.a.createElement(y.a,{store:B},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},62:function(t,e,a){t.exports=a(174)},67:function(t,e,a){},68:function(t,e,a){},73:function(t,e,a){},74:function(t,e,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.534b6972.chunk.js.map