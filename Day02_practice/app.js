const element=React.createElement('h1',{id:'first',className:'Rahul',style:{backgroundColor:'blue',fontSize:'20px',color:'#ccc'},},"hello coder Army");
const element1=React.createElement('h1',{id:'second',className:'Rahul',style:{backgroundColor:'purple',fontSize:'20px',color:'#ccc'},},"Welcome to React lecture");

const div1=React.createElement('div',{},[element,element1]);

const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(element);
// Reactroot.render(element2);


Reactroot.render(div1);
