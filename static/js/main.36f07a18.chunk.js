(this.webpackJsonptmdba=this.webpackJsonptmdba||[]).push([[0],[,,,,,,function(t,e,n){t.exports={control:"AddTransaction_control__2f7NE",btn:"AddTransaction_btn__1I-a2"}},,function(t,e,n){t.exports={"income-expenses":"IncomeExpenses_income-expenses__32Qe3"}},,function(t,e,n){t.exports={header:"Header_header__3msUY"}},function(t,e,n){t.exports={balance:"Balance_balance__2PFBJ"}},function(t,e,n){t.exports={"list-item":"Transaction_list-item__1Pdjx"}},function(t,e,n){t.exports={"transaction-list":"TransactionList_transaction-list__1RALg"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(9),s=n.n(a),i=(n(19),n(20),n(10)),o=n.n(i),u=n(0),j=function(){return Object(u.jsx)("div",{className:o.a.header,children:Object(u.jsx)("h1",{children:"Expense Tracker"})})},l=n(3),d=n(14),b=n(4),x=function(t,e){switch(e.type){case"ADD_ITEM":return Object(b.a)(Object(b.a)({},t),{},{transactions:[e.payload].concat(Object(d.a)(t.transactions))});case"REMOVE_ITEM":return Object(b.a)(Object(b.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});default:return t}},O={transactions:[]},h=Object(c.createContext)(O),f=function(t){var e=t.children,n=Object(c.useReducer)(x,O),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(u.jsx)(h.Provider,{value:{transactions:a.transactions,addTransaction:function(t){s({type:"ADD_ITEM",payload:t})},removeTransaction:function(t){s({type:"REMOVE_ITEM",payload:t})}},children:e})},m=n(6),p=n.n(m),v=function(){var t=Object(c.useContext)(h).addTransaction,e=Object(c.useState)(""),n=Object(l.a)(e,2),r=n[0],a=n[1],s=Object(c.useState)(0),i=Object(l.a)(s,2),o=i[0],j=i[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Math.floor(1e6*Math.random()),text:r,amount:+o};t(n)},children:[Object(u.jsx)("h2",{children:"Add new transaction"}),Object(u.jsxs)("div",{className:p.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("input",{value:r,id:"text",type:"text",onChange:function(t){return a(t.target.value)}})]}),Object(u.jsxs)("div",{className:p.a.control,children:[Object(u.jsx)("label",{htmlFor:"amount",children:"Amount "}),Object(u.jsx)("input",{value:o,id:"amount",type:"number",onChange:function(t){return j(t.target.value)}})]}),Object(u.jsx)("button",{className:p.a.btn,children:"Add transaction"})]})},_=n(11),T=n.n(_);function E(t){var e=t.toFixed(2).split(".");return"$ "+e[0].split("").reverse().reduce((function(t,e,n,c){return"-"===e?t:e+(!n||n%3?"":",")+t}),"")+"."+e[1]}var N=function(){var t=Object(c.useContext)(h).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0);return Object(u.jsxs)("div",{className:T.a.balance,children:[Object(u.jsx)("h4",{children:"YOUR BALANCE"}),Object(u.jsx)("h1",{children:E(t)})]})},g=n(12),y=n.n(g),C=function(t){var e=t.transaction,n=Object(c.useContext)(h).removeTransaction;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:y.a["list-item"],children:[Object(u.jsx)("span",{children:e.text}),Object(u.jsx)("span",{children:e.amount}),Object(u.jsx)("button",{onClick:function(){n(e.id)},children:"X"})]})})},A=n(13),F=n.n(A),I=function(){var t=Object(c.useContext)(h).transactions;return console.log("dddd",t),Object(u.jsxs)("div",{className:F.a["transaction-list"],children:[Object(u.jsx)("h2",{children:"History"}),Object(u.jsx)("ul",{children:t.map((function(t){return Object(u.jsx)(C,{transaction:t},t.id)}))})]})},M=n(8),D=n.n(M);function B(t){var e=t.toFixed(2).split(".");return"$ "+e[0].split("").reverse().reduce((function(t,e,n,c){return"-"===e?t:e+(!n||n%3?"":",")+t}),"")+"."+e[1]}var L=function(){var t=Object(c.useContext)(h).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0),n=-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0);return Object(u.jsxs)("div",{className:D.a["income-expenses"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Income"}),Object(u.jsx)("p",{className:"money plus",children:B(e)})]}),Object(u.jsxs)("div",{className:D.a.epense,children:[Object(u.jsx)("h4",{children:"Expense"}),Object(u.jsx)("p",{className:"money minus",children:B(n)})]})]})};var P=function(){return Object(u.jsx)(f,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)(N,{}),Object(u.jsx)(L,{}),Object(u.jsx)(I,{}),Object(u.jsx)(v,{})]})]})})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),R()}],[[22,1,2]]]);
//# sourceMappingURL=main.36f07a18.chunk.js.map