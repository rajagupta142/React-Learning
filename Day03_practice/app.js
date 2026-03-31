import React from "react";
import ReactDOM from "react-dom/client"

//import is a part of javascript but not normal(old)js but 
// it's a part of latest js and we have to tell browser app.js is not a normal script but a module
//so inside  <script type="module" src="./app.js"></script>


// const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");
// // ReactDOM.render(element,document.getElementById('root'));
// // element : 50 card pade hue hai
// const div1 = React.createElement('div',{},[element,element2]);
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// // React root container: is
// // Reactroot.render(element);
// // Reactroot.render(element2);
// Reactroot.render(div1);

//-----------------------------------------------------------------------------

// const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");
// const div1 = React.createElement('div',{},[element,element2]);
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));     
// Reactroot.render(div1);

//createRoot is present inside react-dom/client  if you only use react-dom it will throw error

//-------------------------------------------------------------------------

// creating element using jsx

// const newElement=<h1>"Hello coder Army"</h1>
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);

//-------------------------------------------------------------------------

//To create multiple element
// const newElement=(
//  <>
//    <h1 id="first" className="second">"Hello coder Army"</h1>
//    <h2>"this is your third lecture"</h2>
// </>
// )
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);

//----------------------------------------------------------------------------

//we can use expression in jsx  (HTML and JSX difference)

// const name="Raja Gupta";
// const obj={
//     age:23,
//     salary:120000
// }
// const newElement=(
// <>
//   <h1 id="first" className="second">"Hello coder Army {name}"</h1>
//   <h2>"your age is:{obj.age}"</h2>
// </>
// )
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);


//------------------------------------------------------------

//inline styling of element in React   (why double brackets?)
// one for it expects a js expression, next is for creating js object 

// const newElement=(
// <>
//   <h1 id="first" className="second">"Hello coder Army"</h1>
//   <h2 style={{backgroundColor:"black",fontSize:"30px",color:"#fff"}}>"How are you"</h2>
// </>
// )
// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement);

//------------------------------------------------------------------------

// React Component

function greet(){
    return <h1>"Hello coder Army"</h1>;
};

function meet(){
    return <h2>"It was nice meeting you"</h2>
};

const newElement2=greet();
const newElement3=meet();
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(newElement2);
Reactroot.render(greet());  //you can directly render function here

//if i want to print both meet()) and greet()
// Reactroot.render(<>newElement2 newElement3</>)   // this is incorrect 
// Reactroot.render(<>{newElement2} {newElement3}</>)
Reactroot.render(<>{meet()} {greet()}</>) 