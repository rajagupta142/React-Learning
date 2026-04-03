
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "./Seconds";
import Globalcontext from "./Global";


function App(){
 
    const [count,setCount]=useState(0);
    return(
        <Globalcontext.Provider value={{count,setCount}}>
        <div>
            <h1>Hello Coder Army</h1>
            <Second/>
        </div>
        </Globalcontext.Provider>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

//--------------------------------------------------------------------------------------


// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Second from "./Seconds";


// function App(){
 
//     const [count,setCount]=useState(0);
//     return(
//         <div>
//             <h1>Hello Coder Army</h1>
//             <Second count={count} setCount={setCount}/>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// if Second() is child of App(), Third() is child of Second, Fourth is child of Third 
// And , i need to use  [count,setCount] this state variable in Fourth()
// i have to do is passing this state variable from App() to Second(), then from Second() to Third()
// then from Third() to Fourth() even though Second(),Third() not even using it but just because
// state variable needs to be passed to its descendent 

// Now, if there is a many descendent of parent component App()
// and i only need to use state variable at last descendent then it will be very difficult passing
// state variable from parent to its child as a props until it reaches where we need to use
// Also since every one of the Second(),Third(),Fourth() is using state variable then
// if i do some changes in Fourth.js every file will be re-rendered again --this will consume
// alot of time and memory

// to resolve this we create a global file where we will be having all state variable and
// function and whoever needs to use it, they can directly access from this global file

// here comes the use of useContext();