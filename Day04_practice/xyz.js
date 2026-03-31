import React from "react";
import ReactDOM from "react-dom/client";

// const element=(
// <div>
//     <h1>Hello coder Army</h1>
//     <h2>This is React Learning</h2>
// </div>
// );

// function greet(){
//     return (
//     <div>
//     <h1>Hello coder Army</h1>
//     <h2>This is React Learning</h2>
//     </div>
//     )
// }


const obj={
    name:"abc",
    age:23,
    salary:2500000
}

// function greet(){
//    return (
//         <div>
//             <h1>Hello coder {obj.name}</h1>
//             <h2>{obj.salary} is your salary per annum </h2>
//             <h3>This is an statement {obj}</h3>
//         </div>
//     )
// }

function greet(){
   return (
    Object.entries(obj).map(([key,value],index)=><p key={index}>{key}:{value}</p>)
   );
}

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(greet());