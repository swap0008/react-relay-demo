(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,n,t){"use strict";var a=function(){var e=[{kind:"LocalArgument",name:"input",type:"DeleteStudentInput!",defaultValue:null}],n=[{kind:"LinkedField",alias:null,name:"deleteStudent",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"DeleteStudentPayload",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"deletedId",args:null,storageKey:null}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"DeleteStudentMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:n},operation:{kind:"Operation",name:"DeleteStudentMutation",argumentDefinitions:e,selections:n},params:{operationKind:"mutation",name:"DeleteStudentMutation",id:null,text:"mutation DeleteStudentMutation(\n  $input: DeleteStudentInput!\n) {\n  deleteStudent(input: $input) {\n    deletedId\n  }\n}\n",metadata:{}}}}();a.hash="d906bc2afa554dc2cde2676bf8fb98c6",e.exports=a},143:function(e,n,t){"use strict";var a={kind:"Fragment",name:"Student_viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}],hash:"7c68000c13cdd851bfc26058e7d6e8b9"};e.exports=a},144:function(e,n,t){"use strict";var a={kind:"Fragment",name:"Student_student",type:"Student",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"rollNo",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"age",args:null,storageKey:null}],hash:"d513c58d3ca646bbb6772cc32addc29d"};e.exports=a},145:function(e,n,t){"use strict";var a={kind:"Fragment",name:"Students_students",type:"Viewer",metadata:{connection:[{count:null,cursor:null,direction:"backward",path:["allStudents"]}]},argumentDefinitions:[],selections:[{kind:"LinkedField",alias:"allStudents",name:"__Students_allStudents_connection",storageKey:null,args:null,concreteType:"StudentConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"StudentEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Student",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"FragmentSpread",name:"Student_student",args:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"pageInfo",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"hasPreviousPage",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"startCursor",args:null,storageKey:null}]}]},{kind:"FragmentSpread",name:"Student_viewer",args:null}],hash:"75f3b3344ce1f2eb937f56fe44d9ddcb"};e.exports=a},146:function(e,n,t){"use strict";var a=function(){var e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},n=[{kind:"Literal",name:"last",value:100}];return{kind:"Request",fragment:{kind:"Fragment",name:"AppAllStudentsQuery",type:"Query",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"FragmentSpread",name:"Students_students",args:null}]}]},operation:{kind:"Operation",name:"AppAllStudentsQuery",argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[e,{kind:"LinkedField",alias:null,name:"allStudents",storageKey:"allStudents(last:100)",args:n,concreteType:"StudentConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"StudentEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"Student",plural:!1,selections:[e,{kind:"ScalarField",alias:null,name:"rollNo",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"age",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"pageInfo",storageKey:null,args:null,concreteType:"PageInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"hasPreviousPage",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"startCursor",args:null,storageKey:null}]}]},{kind:"LinkedHandle",alias:null,name:"allStudents",args:n,handle:"connection",key:"Students_allStudents",filters:[]}]}]},params:{operationKind:"query",name:"AppAllStudentsQuery",id:null,text:"query AppAllStudentsQuery {\n  viewer {\n    ...Students_students\n    id\n  }\n}\n\nfragment Students_students on Viewer {\n  ...Student_viewer\n  allStudents(last: 100) {\n    edges {\n      node {\n        ...Student_student\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Student_viewer on Viewer {\n  id\n}\n\nfragment Student_student on Student {\n  id\n  rollNo\n  name\n  age\n}\n",metadata:{}}}}();a.hash="eebdf8ac370a58206c69e7d313e12dd2",e.exports=a},147:function(e,n,t){"use strict";var a=function(){var e=[{kind:"LocalArgument",name:"input",type:"CreateStudentInput!",defaultValue:null}],n=[{kind:"Variable",name:"input",variableName:"input"}],t={kind:"ScalarField",alias:null,name:"rollNo",args:null,storageKey:null},a={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},l={kind:"ScalarField",alias:null,name:"age",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"AddDetailMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:[{kind:"LinkedField",alias:null,name:"createStudent",storageKey:null,args:n,concreteType:"CreateStudentPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"student",storageKey:null,args:null,concreteType:"Student",plural:!1,selections:[t,a,l]}]}]},operation:{kind:"Operation",name:"AddDetailMutation",argumentDefinitions:e,selections:[{kind:"LinkedField",alias:null,name:"createStudent",storageKey:null,args:n,concreteType:"CreateStudentPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"student",storageKey:null,args:null,concreteType:"Student",plural:!1,selections:[t,a,l,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]}]},params:{operationKind:"mutation",name:"AddDetailMutation",id:null,text:"mutation AddDetailMutation(\n  $input: CreateStudentInput!\n) {\n  createStudent(input: $input) {\n    student {\n      rollNo\n      name\n      age\n      id\n    }\n  }\n}\n",metadata:{}}}}();a.hash="f8d1146509650b619050b6c5a245089c",e.exports=a},148:function(e,n,t){"use strict";var a=function(){var e=[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"AddDetailQuery",type:"Query",metadata:null,argumentDefinitions:[],selections:e},operation:{kind:"Operation",name:"AddDetailQuery",argumentDefinitions:[],selections:e},params:{operationKind:"query",name:"AddDetailQuery",id:null,text:"query AddDetailQuery {\n  viewer {\n    id\n  }\n}\n",metadata:{}}}}();a.hash="d51d39a6b110b834d1ff1f349d2a7626",e.exports=a},149:function(e,n,t){"use strict";var a=function(){var e=[{kind:"LocalArgument",name:"input",type:"UpdateStudentInput!",defaultValue:null}],n=[{kind:"LinkedField",alias:null,name:"updateStudent",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"UpdateStudentPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"student",storageKey:null,args:null,concreteType:"Student",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"age",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"rollNo",args:null,storageKey:null}]}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"UpdateStudentMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:n},operation:{kind:"Operation",name:"UpdateStudentMutation",argumentDefinitions:e,selections:n},params:{operationKind:"mutation",name:"UpdateStudentMutation",id:null,text:"mutation UpdateStudentMutation(\n  $input: UpdateStudentInput!\n) {\n  updateStudent(input: $input) {\n    student {\n      id\n      name\n      age\n      rollNo\n    }\n  }\n}\n",metadata:{}}}}();a.hash="acf7150b01e6013ea0cc69be6e2e5e95",e.exports=a},150:function(e,n,t){"use strict";var a=function(){var e=[{kind:"LocalArgument",name:"id",type:"ID!",defaultValue:null}],n={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},t={kind:"LinkedField",alias:null,name:"Student",storageKey:null,args:[{kind:"Variable",name:"id",variableName:"id"}],concreteType:"Student",plural:!1,selections:[n,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"age",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"rollNo",args:null,storageKey:null}]};return{kind:"Request",fragment:{kind:"Fragment",name:"UpdateStudentQuery",type:"Query",metadata:null,argumentDefinitions:e,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[t]}]},operation:{kind:"Operation",name:"UpdateStudentQuery",argumentDefinitions:e,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[t,n]}]},params:{operationKind:"query",name:"UpdateStudentQuery",id:null,text:"query UpdateStudentQuery(\n  $id: ID!\n) {\n  viewer {\n    Student(id: $id) {\n      id\n      name\n      age\n      rollNo\n    }\n    id\n  }\n}\n",metadata:{}}}}();a.hash="abd8903d95a87af768338128df9b28ca",e.exports=a},151:function(e,n,t){},152:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(78),i=t.n(r),u=t(17),o=t(20),d=t(10),s=t(11),c=t(13),m=t(12),p=t(14),g=t(5),y=t(4);var f=new y.Environment({network:y.Network.create(function(e,n){return fetch("https://api.graph.cool/relay/v1/cjx4c78gt50270134wtlydpy7",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e.text,variables:n})}).then(function(e){return e.json()})}),store:new y.Store(new y.RecordSource)}),S=function(){return t(138)};var k=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l))))._handleDelete=function(){!function(e,n){var t={input:{id:e,clientMutationId:""}};Object(g.commitMutation)(f,{mutation:S,variables:t,onError:function(e){return console.error(e)},updater:function(e){var t=e.getRootField("deleteStudent").getValue("deletedId"),a=e.get(n),l=y.ConnectionHandler.getConnection(a,"Students_allStudents");y.ConnectionHandler.deleteNode(l,t)}})}(t.props.student.id,t.props.viewer.id)},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.student;return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.rollNo),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.age),l.a.createElement("td",{onClick:this._handleDelete,style:{cursor:"pointer"}},l.a.createElement("i",{className:"material-icons"},"delete")),l.a.createElement("td",null,l.a.createElement(u.b,{to:"/update/".concat(e.id)},l.a.createElement("i",{className:"material-icons"},"system_update_alt"))))}}]),n}(l.a.Component),v=Object(g.createFragmentContainer)(k,{viewer:function(){return t(143)},student:function(){return t(144)}}),h=function(e){function n(){return Object(d.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",null,"Student Details"),l.a.createElement(u.b,{to:"/add"},l.a.createElement("h5",null,"Add Student +"))),l.a.createElement("table",{className:"centered striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Delete"),l.a.createElement("th",null,"Update")),this.props.students.allStudents.edges.map(function(n){var t=n.node;return l.a.createElement(v,{student:t,viewer:e.props.students,update:e._handleUpdate})}))))}}]),n}(l.a.Component),b=Object(g.createFragmentContainer)(h,{students:function(){return t(145)}}),E=function(){return t(146)},F=function(e){function n(){return Object(d.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(g.QueryRenderer,{environment:f,query:E,render:function(e){var n=e.error,t=e.props;return n?l.a.createElement("div",null,"Error!"):t?l.a.createElement(b,{students:t.viewer}):l.a.createElement("div",null,"Loading...")}})}}]),n}(l.a.Component),K=function(){return t(147)},w=0,N=function(e,n,t,a,l){var r={input:{rollNo:n,name:t,age:a,clientMutationId:""}};Object(g.commitMutation)(f,{mutation:K,variables:r,optimisticUpdate:function(e){var l="client:newStudent:"+w++,r=e.create(l,"Detail");r.setValue(l,"id"),r.setValue(t,"name"),r.setValue(a,"age"),r.setValue(n,"rollNo");var i=e.get(l),u=y.ConnectionHandler.getConnection(i,"Students_allStudents");u&&y.ConnectionHandler.insertEdgeAfter(u,r)},updater:function(n){var t=n.getRootField("createStudent").getLinkedRecord("student"),a=n.get(e),l=y.ConnectionHandler.getConnection(a,"Students_allStudents");l&&y.ConnectionHandler.insertEdgeAfter(l,t)},onCompleted:l,onError:function(e){return console.log(e)}})},D=function(){return t(148)},C=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l)))).state={rollNo:"",name:"",age:""},t._createStudent=function(e){var n=t.state,a=n.rollNo,l=n.name,r=n.age;N(e,parseInt(a),l,parseInt(r),function(){return t.props.history.replace("/")})},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.rollNo,a=n.name,r=n.age;return l.a.createElement(g.QueryRenderer,{environment:f,query:D,render:function(n){var i=n.error,o=n.props;return i?l.a.createElement("div",null,"Error!"):o?l.a.createElement("div",{style:{width:"500px",margin:"auto"}},l.a.createElement("h1",null,"Add Student"),l.a.createElement("input",{type:"text",placeholder:"rollNo",value:t,onChange:function(n){return e.setState({rollNo:n.target.value})}}),l.a.createElement("input",{type:"text",placeholder:"name",value:a,onChange:function(n){return e.setState({name:n.target.value})}}),l.a.createElement("input",{type:"text",placeholder:"age",value:r,onChange:function(n){return e.setState({age:n.target.value})}}),l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:function(){return e._createStudent(o.viewer.id)}},"Submit",l.a.createElement("i",{className:"material-icons right"},"send")),l.a.createElement(u.b,{to:"/"},l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",style:{marginLeft:"10px"}},"Go Back",l.a.createElement("i",{className:"material-icons right"},"arrow_back")))):l.a.createElement("div",null,"Loading...")}})}}]),n}(a.Component),O=Object(o.e)(C),_=function(){return t(149)},j=function(e,n,t,a,l){var r={input:{id:e,name:n,age:a,rollNo:t,clientMutationId:""}};Object(g.commitMutation)(f,{mutation:_,variables:r,optimisticUpdater:function(l){var r=l.get(e);r.setValue(n,"name"),r.setValue(a,"age"),r.setValue(t,"rollNo")},updater:function(e){var n=e.getRootField("updateStudent").getLinkedRecord("student"),t=n.getValue("name"),a=n.getValue("age"),l=n.getValue("rollNo");n.setValue(t,"name"),n.setValue(a,"age"),n.setValue(l,"rollNo")},onCompleted:function(){return l()},onError:function(e){return console.error(e)}})},L=function(){return t(150)},V=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l)))).state={id:"",rollNo:"",name:"",age:""},t._updateStudent=function(){var e=t.state,n=e.rollNo,a=e.name,l=e.age;j(t.props.match.params.id,a,parseInt(n),parseInt(l),function(){return t.props.history.replace("/")})},t._setDefaultValue=function(e){var n=e.id,a=e.rollNo,l=e.age,r=e.name;t.setState({id:n,rollNo:a,age:l,name:r})},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.rollNo,a=n.name,r=n.age;return l.a.createElement(g.QueryRenderer,{environment:f,query:L,variables:{id:this.props.match.params.id},render:function(n){var i=n.error,u=n.props;return i?l.a.createElement("div",null,"Error!"):u?l.a.createElement("div",{style:{backgroundColor:"rgba(0,0,0,0.5)",height:"100vh"}},l.a.createElement("div",{className:"modal-content"},l.a.createElement("span",{className:"close",onClick:function(){return e.props.history.replace("/")}},"\xd7"),l.a.createElement("div",{style:{width:"500px",margin:"auto"}},l.a.createElement("h1",null,"Update Student"),l.a.createElement("input",{type:"text",placeholder:"rollNo",value:t,onChange:function(n){return e.setState({rollNo:n.target.value})}}),l.a.createElement("input",{type:"text",placeholder:"name",value:a,onChange:function(n){return e.setState({name:n.target.value})}}),l.a.createElement("input",{type:"text",placeholder:"age",value:r,onChange:function(n){return e.setState({age:n.target.value})}}),l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:e._updateStudent},"Update",l.a.createElement("i",{className:"material-icons right"},"send")),l.a.createElement("button",{style:{marginLeft:"20px"},className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:function(){return e._setDefaultValue(u.viewer.Student)}},"Default Value",l.a.createElement("i",{className:"material-icons right"},"assignment_return"))))):l.a.createElement("div",null,"Loading...")}})}}]),n}(a.Component),x=Object(o.e)(V);t(151);i.a.render(l.a.createElement(u.a,null,l.a.createElement(o.a,{exact:!0,path:"/",component:F}),l.a.createElement(o.a,{path:"/add",component:O}),l.a.createElement(o.a,{path:"/update/:id",component:x})),document.getElementById("root"))},81:function(e,n,t){e.exports=t(152)}},[[81,1,2]]]);
//# sourceMappingURL=main.21258917.chunk.js.map