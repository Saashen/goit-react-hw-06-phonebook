(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={form:"ContactForm_form__1N0Jp",label:"ContactForm_label__CMjd9",caption:"ContactForm_caption__v9RhV",button:"ContactForm_button__2hC3_"}},13:function(e,t,n){e.exports={Alert:"Alert_Alert__1caDl",Text:"Alert_Text__RGnSh"}},23:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),l=n(6),s=n(7),i=n.n(s),m=n(5),u=n(3),p=n(16),b=n(17),d=n(21),h=n(18),_=n(22),f=n(8),C=n.n(f),E="ADD_CONTACT",A="DELETE_CONTACT",N=n(1),v=n.n(N),O=n(13),g=n.n(O),j=function(){return c.a.createElement("div",{className:g.a.Alert},c.a.createElement("p",{className:g.a.Text},"Contact already exists!"))},y=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:"",isAlert:!1},n.id={nameId:C()(),numberId:C()()},n.isInContactList=function(e,t){return n.props.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?n.setState({isAlert:!0}):n.props.onAddContact(Object(u.a)({},e))},n.handleChange=function(e){var t=e.target,a=t.name,c=t.value;n.setState(Object(m.a)({},a,c))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,c=t.number,r={id:C()(),name:a,number:c};""!==a&&""!==c&&(n.isInContactList(r,a),n.setState({name:"",number:""}))},n}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.isAlert,r=this.id,o=r.nameId,l=r.numberId;return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(j,null),c.a.createElement("form",{className:v.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:v.a.label,htmlFor:o},c.a.createElement("span",{className:v.a.caption},"Name"),c.a.createElement("input",{className:v.a.input,type:"text",onChange:this.handleChange,value:t,name:"name",id:o})),c.a.createElement("label",{className:v.a.label,htmlFor:l},c.a.createElement("span",{className:v.a.caption},"Number"),c.a.createElement("input",{className:v.a.input,type:"text",onChange:this.handleChange,value:n,name:"number",id:l})),c.a.createElement("button",{className:v.a.button,type:"submit"},"Add contact")))}}]),t}(a.Component),x=Object(l.b)((function(e){return{contacts:e.contacts}}),(function(e){return{onAddContact:function(t){return e(function(e){return{type:E,payload:{contact:e}}}(t))}}}))(y),F=n(9),k=n.n(F),S=function(){return c.a.createElement("section",{className:k.a.Filter},c.a.createElement("span",{className:k.a.Caption},"Find contacts"),c.a.createElement("input",{className:k.a.Input,type:"text"}))},T=function(){return c.a.createElement("div",{className:i.a.App},c.a.createElement("h1",{className:i.a.Phonebook},"Phonebook"),c.a.createElement(x,null),c.a.createElement("h1",{className:i.a.Contacts},"Contacts"),c.a.createElement(S,null))},w=n(2),I=n(19),D=n(20),L={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(console.log(a),n){case E:return Object(u.a)({},e,{contacts:[].concat(Object(D.a)(e),[a.contact])});case A:return Object(u.a)({},e,{contacts:e.filter((function(e){return e.id!==a.id}))});default:return e}},J=Object(w.createStore)(P,Object(I.devToolsEnhancer)());o.a.render(c.a.createElement(l.a,{store:J},c.a.createElement(T,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={App:"App_App__Ny9C0",Phonebook:"App_Phonebook__133iz",Contacts:"App_Contacts__3nicq"}},9:function(e,t,n){e.exports={Filter:"Filter_Filter__O7rco"}}},[[23,1,2]]]);
//# sourceMappingURL=main.f63dc6f7.chunk.js.map