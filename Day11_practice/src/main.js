import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Decrement from "./Decrement";
import Increment from "./Increment";

function App(){
 
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Hello Coder Army</h1>
            <Increment count={count} setCount={setCount}/>
            <Decrement count={count} setCount={setCount}/>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);




















//---------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// i want to create 1 more file first.js and there i want to create a Decrement button
// in main.js i only want Increment button then how can i do this ?
// i need to use [count,setCount] inside first.js for Decrement so , how will i be able to use?
// i need to pass [count,setCount] this as a props to function First() from here App() 
// App() is a parent function and First() is a children of App()

// you can only pass props from parent to a child and not from child to a parent

//-----------------------------------------------------------------------------


// main.js

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./first";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <Decrement counts={count} setCounts={setCount}/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// first.js

// export default function Decrement({counts,setCounts}){
//     return(
//         <>
//         <button onClick={()=>setCounts(counts-1)}>Decrement</button>
//         </>
//     )   
// }

// this is how you pass the props --<Decrement counts={count} setCounts={setCount}/>
// this is how you recieve the props--  export default function Decrement({counts,setCounts}){

// All the children can access the state variable and function  
// const [count,setCount]=useState(0);  created in parent function.


// --------------------------------------------------------------------------------

// now i want to create 3 file main.js , Increment.js, Decrement.js
// And i want to create state variable and function [count,setCount] inside Increment()
// Now, i have button Increment in function Increment() and i have button Decrement in function Decrement()
// if i click on Increment button, the count will increase but if i click on Decrement
// the count will not decreases this is because [count,setCount]--this is now not in APP()
// so, Decrement don't have access to this state variable
// Both Increment and Decrement are siblings so you shouldn't pass props from Increment()
// like <Decrement counts={count} setCounts={setCount}></Decrement> ---this will create
// a child for Increment which is Decrement.
// so, then you will be having <Increment> and <Decrement/> inside App()-- here both are sibling
// and then <Decrement counts={count} setCounts={setCount}></Decrement> inside Increment()
// which will also make Decrement() as a child for Increment()
//then you will see three button Increment,Decrement,Decrement


// main.js 
   
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./Decrement";
// import Increment from "./Increment";

// function App(){

//     return(
//         <div>
//             <h1>Hello Coder Army</h1>
//             <Increment/>
//             <Decrement/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



// Increment.js

// import React,{ useState } from "react";
// import Decrement from "./Decrement";

// export default function Increment(){

//     const [count,setCount]=useState(0);

//     return(
//         <>
//         <h1>The count is: {count}</h1>
//          <button onClick={()=>setCount(count+1)}>Increment</button>
//         </>
//     )   
// }


// Decrement.js

// export default function Decrement(){
//     return(
//         <>
//         <button>Decrement</button>
//         </>
//     )   
// }

//-----------------------------------------------------------------------------------------

// The only way that Increment and Decrement remain as a sibling and get access to state
// variable is to create a state variable inside parent App() only.

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Decrement from "./Decrement";
import Increment from "./Increment";

function App(){
 
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Hello Coder Army</h1>
            <Increment count={count} setCount={setCount}/>
            <Decrement count={count} setCount={setCount}/>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);




















//---------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// i want to create 1 more file first.js and there i want to create a Decrement button
// in main.js i only want Increment button then how can i do this ?
// i need to use [count,setCount] inside first.js for Decrement so , how will i be able to use?
// i need to pass [count,setCount] this as a props to function First() from here App() 
// App() is a parent function and First() is a children of App()

// you can only pass props from parent to a child and not from child to a parent

//-----------------------------------------------------------------------------


// main.js

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./first";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <Decrement counts={count} setCounts={setCount}/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// first.js

// export default function Decrement({counts,setCounts}){
//     return(
//         <>
//         <button onClick={()=>setCounts(counts-1)}>Decrement</button>
//         </>
//     )   
// }

// this is how you pass the props --<Decrement counts={count} setCounts={setCount}/>
// this is how you recieve the props--  export default function Decrement({counts,setCounts}){

// All the children can access the state variable and function  
// const [count,setCount]=useState(0);  created in parent function.


// --------------------------------------------------------------------------------

// now i want to create 3 file main.js , Increment.js, Decrement.js
// And i want to create state variable and function [count,setCount] inside Increment()
// Now, i have button Increment in function Increment() and i have button Decrement in function Decrement()
// if i click on Increment button, the count will increase but if i click on Decrement
// the count will not decreases this is because [count,setCount]--this is now not in APP()
// so, Decrement don't have access to this state variable
// Both Increment and Decrement are siblings so you shouldn't pass props from Increment()
// like <Decrement counts={count} setCounts={setCount}></Decrement> ---this will create
// a child for Increment which is Decrement.
// so, then you will be having <Increment> and <Decrement/> inside App()-- here both are sibling
// and then <Decrement counts={count} setCounts={setCount}></Decrement> inside Increment()
// which will also make Decrement() as a child for Increment()
//then you will see three button Increment,Decrement,Decrement


// main.js 
   
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./Decrement";
// import Increment from "./Increment";

// function App(){

//     return(
//         <div>
//             <h1>Hello Coder Army</h1>
//             <Increment/>
//             <Decrement/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



// Increment.js

// import React,{ useState } from "react";
// import Decrement from "./Decrement";

// export default function Increment(){

//     const [count,setCount]=useState(0);

//     return(
//         <>
//         <h1>The count is: {count}</h1>
//          <button onClick={()=>setCount(count+1)}>Increment</button>
//         </>
//     )   
// }


// Decrement.js

// export default function Decrement(){
//     return(
//         <>
//         <button>Decrement</button>
//         </>
//     )   
// }

//-----------------------------------------------------------------------------------------

// The only way that Increment and Decrement remain as a sibling and get access to state
// variable is to create a state variable inside parent App() only.import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Decrement from "./Decrement";
import Increment from "./Increment";

function App(){
 
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Hello Coder Army</h1>
            <Increment count={count} setCount={setCount}/>
            <Decrement count={count} setCount={setCount}/>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);




















//---------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// i want to create 1 more file first.js and there i want to create a Decrement button
// in main.js i only want Increment button then how can i do this ?
// i need to use [count,setCount] inside first.js for Decrement so , how will i be able to use?
// i need to pass [count,setCount] this as a props to function First() from here App() 
// App() is a parent function and First() is a children of App()

// you can only pass props from parent to a child and not from child to a parent

//-----------------------------------------------------------------------------


// main.js

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./first";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <Decrement counts={count} setCounts={setCount}/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// first.js

// export default function Decrement({counts,setCounts}){
//     return(
//         <>
//         <button onClick={()=>setCounts(counts-1)}>Decrement</button>
//         </>
//     )   
// }

// this is how you pass the props --<Decrement counts={count} setCounts={setCount}/>
// this is how you recieve the props--  export default function Decrement({counts,setCounts}){

// All the children can access the state variable and function  
// const [count,setCount]=useState(0);  created in parent function.


// --------------------------------------------------------------------------------

// now i want to create 3 file main.js , Increment.js, Decrement.js
// And i want to create state variable and function [count,setCount] inside Increment()
// Now, i have button Increment in function Increment() and i have button Decrement in function Decrement()
// if i click on Increment button, the count will increase but if i click on Decrement
// the count will not decreases this is because [count,setCount]--this is now not in APP()
// so, Decrement don't have access to this state variable
// Both Increment and Decrement are siblings so you shouldn't pass props from Increment()
// like <Decrement counts={count} setCounts={setCount}></Decrement> ---this will create
// a child for Increment which is Decrement.
// so, then you will be having <Increment> and <Decrement/> inside App()-- here both are sibling
// and then <Decrement counts={count} setCounts={setCount}></Decrement> inside Increment()
// which will also make Decrement() as a child for Increment()
//then you will see three button Increment,Decrement,Decrement


// main.js 
   
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./Decrement";
// import Increment from "./Increment";

// function App(){

//     return(
//         <div>
//             <h1>Hello Coder Army</h1>
//             <Increment/>
//             <Decrement/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



// Increment.js

// import React,{ useState } from "react";
// import Decrement from "./Decrement";

// export default function Increment(){

//     const [count,setCount]=useState(0);

//     return(
//         <>
//         <h1>The count is: {count}</h1>
//          <button onClick={()=>setCount(count+1)}>Increment</button>
//         </>
//     )   
// }


// Decrement.js

// export default function Decrement(){
//     return(
//         <>
//         <button>Decrement</button>
//         </>
//     )   
// }

//-----------------------------------------------------------------------------------------

// The only way that Increment and Decrement remain as a sibling and get access to state
// variable is to create a state variable inside parent App() only.import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Decrement from "./Decrement";
import Increment from "./Increment";

function App(){
 
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Hello Coder Army</h1>
            <Increment count={count} setCount={setCount}/>
            <Decrement count={count} setCount={setCount}/>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);




















//---------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// i want to create 1 more file first.js and there i want to create a Decrement button
// in main.js i only want Increment button then how can i do this ?
// i need to use [count,setCount] inside first.js for Decrement so , how will i be able to use?
// i need to pass [count,setCount] this as a props to function First() from here App() 
// App() is a parent function and First() is a children of App()

// you can only pass props from parent to a child and not from child to a parent

//-----------------------------------------------------------------------------


// main.js

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./first";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <Decrement counts={count} setCounts={setCount}/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// first.js

// export default function Decrement({counts,setCounts}){
//     return(
//         <>
//         <button onClick={()=>setCounts(counts-1)}>Decrement</button>
//         </>
//     )   
// }

// this is how you pass the props --<Decrement counts={count} setCounts={setCount}/>
// this is how you recieve the props--  export default function Decrement({counts,setCounts}){

// All the children can access the state variable and function  
// const [count,setCount]=useState(0);  created in parent function.


// --------------------------------------------------------------------------------

// now i want to create 3 file main.js , Increment.js, Decrement.js
// And i want to create state variable and function [count,setCount] inside Increment()
// Now, i have button Increment in function Increment() and i have button Decrement in function Decrement()
// if i click on Increment button, the count will increase but if i click on Decrement
// the count will not decreases this is because [count,setCount]--this is now not in APP()
// so, Decrement don't have access to this state variable
// Both Increment and Decrement are siblings so you shouldn't pass props from Increment()
// like <Decrement counts={count} setCounts={setCount}></Decrement> ---this will create
// a child for Increment which is Decrement.
// so, then you will be having <Increment> and <Decrement/> inside App()-- here both are sibling
// and then <Decrement counts={count} setCounts={setCount}></Decrement> inside Increment()
// which will also make Decrement() as a child for Increment()
//then you will see three button Increment,Decrement,Decrement


// main.js 
   
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./Decrement";
// import Increment from "./Increment";

// function App(){

//     return(
//         <div>
//             <h1>Hello Coder Army</h1>
//             <Increment/>
//             <Decrement/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



// Increment.js

// import React,{ useState } from "react";
// import Decrement from "./Decrement";

// export default function Increment(){

//     const [count,setCount]=useState(0);

//     return(
//         <>
//         <h1>The count is: {count}</h1>
//          <button onClick={()=>setCount(count+1)}>Increment</button>
//         </>
//     )   
// }


// Decrement.js

// export default function Decrement(){
//     return(
//         <>
//         <button>Decrement</button>
//         </>
//     )   
// }

//-----------------------------------------------------------------------------------------

// The only way that Increment and Decrement remain as a sibling and get access to state
// variable is to create a state variable inside parent App() only.import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Decrement from "./Decrement";
import Increment from "./Increment";

function App(){
 
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Hello Coder Army</h1>
            <Increment count={count} setCount={setCount}/>
            <Decrement count={count} setCount={setCount}/>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);




















//---------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <button onClick={()=>setCount(count-1)}>Decrement</button>
//             <
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// i want to create 1 more file first.js and there i want to create a Decrement button
// in main.js i only want Increment button then how can i do this ?
// i need to use [count,setCount] inside first.js for Decrement so , how will i be able to use?
// i need to pass [count,setCount] this as a props to function First() from here App() 
// App() is a parent function and First() is a children of App()

// you can only pass props from parent to a child and not from child to a parent

//-----------------------------------------------------------------------------


// main.js

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./first";

// function App(){
//     const [count,setCount]=useState(0);

//     return(
//         <div>
//             <h1>The count is: {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increment</button>
//             <Decrement counts={count} setCounts={setCount}/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

// first.js

// export default function Decrement({counts,setCounts}){
//     return(
//         <>
//         <button onClick={()=>setCounts(counts-1)}>Decrement</button>
//         </>
//     )   
// }

// this is how you pass the props --<Decrement counts={count} setCounts={setCount}/>
// this is how you recieve the props--  export default function Decrement({counts,setCounts}){

// All the children can access the state variable and function  
// const [count,setCount]=useState(0);  created in parent function.


// --------------------------------------------------------------------------------

// now i want to create 3 file main.js , Increment.js, Decrement.js
// And i want to create state variable and function [count,setCount] inside Increment()
// Now, i have button Increment in function Increment() and i have button Decrement in function Decrement()
// if i click on Increment button, the count will increase but if i click on Decrement
// the count will not decreases this is because [count,setCount]--this is now not in APP()
// so, Decrement don't have access to this state variable
// Both Increment and Decrement are siblings so you shouldn't pass props from Increment()
// like <Decrement counts={count} setCounts={setCount}></Decrement> ---this will create
// a child for Increment which is Decrement.
// so, then you will be having <Increment> and <Decrement/> inside App()-- here both are sibling
// and then <Decrement counts={count} setCounts={setCount}></Decrement> inside Increment()
// which will also make Decrement() as a child for Increment()
//then you will see three button Increment,Decrement,Decrement


// main.js 
   
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./Decrement";
// import Increment from "./Increment";

// function App(){

//     return(
//         <div>
//             <h1>Hello Coder Army</h1>
//             <Increment/>
//             <Decrement/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



// Increment.js

// import React,{ useState } from "react";
// import Decrement from "./Decrement";

// export default function Increment(){

//     const [count,setCount]=useState(0);

//     return(
//         <>
//         <h1>The count is: {count}</h1>
//          <button onClick={()=>setCount(count+1)}>Increment</button>
//         </>
//     )   
// }


// Decrement.js

// export default function Decrement(){
//     return(
//         <>
//         <button>Decrement</button>
//         </>
//     )   
// }

//-----------------------------------------------------------------------------------------

// The only way that Increment and Decrement remain as a sibling and get access to state
// variable is to create a state variable inside parent App() only.

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Decrement from "./Decrement";
// import Increment from "./Increment";

// function App(){
 
//     const [count,setCount]=useState(0);
//     return(
//         <div>
//             <h1>Hello Coder Army</h1>
//             <Increment count={count} setCount={setCount}/>
//             <Decrement count={count} setCount={setCount}/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


//  now , go to first.js to learn about useContext