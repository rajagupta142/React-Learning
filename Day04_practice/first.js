import React from "react";
import ReactDOM from "react-dom/client";

// const element1=<h1>Hello coder Army</h1>;

//you can only give expression in JSX
//you cannot give statement in JSX

// //expression jo output laake de or jo result produce kare (only string,array and Number)
// const obj={
//     name:"abc",
//     age:22
// }
// const arr=[20,47,"Artificial Intelligence",70,];



//<h1>{obj}</h1>    -----jsx don't know what to show in screen like keys or value when it see {obj}
//React tries to render <h1>{obj}</h1> as a child Node(any element, component, or piece of data placed between the opening and closing tags of a JSX element.)
//React only React only allows the following to be rendered as text/children:
//Strings, Numbers, Arrays (of strings, numbers, or JSX), Other JSX Elements


//  obj.name --- it will return string  so it is allowed 

// function greet(name){
//     // return <h1>Hey buddy {obj.name},How are you doing?</h1>
//     return <h1>this is an array {arr}</h1>
//     //return
//     //return <h1>Hey buddy {let a=20;},How are you doing?</h1>  //this is an statement
       //return <h1>Hello {obj} //jsx don't understand object, it must produce an output like obj.name
       //return <h1>Hello {arr}</> // jsx understand this because it take out value of array one by one
//     //return <h1>Hey buddy { if(a>20){ 
//                             // console.log("greater than 20")}}</h1>  //this is a statement

// }


// JSX method of calling a function (first letter of function must be capital)


// function Greet(){
//     return <h2>Hello Coder</h2>
// };

// const element1=<Greet/>

//How to pass argument in JSX inside function
// props  ---it is an object and when argument is passed it is stored in props

function Greet(props){
    return <h2>Hello Coder {props.name} {props.age}</h2>
};

const element1=<Greet name="Rohit" age="23"/>

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(element1);