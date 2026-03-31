import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./component/colorful";

    console.log("Script running");

function Main(){
        const [count,setCount]=useState(0);
    return(
        <>
        <div className="counter">
        <h1 style={{backgroundColor:"blue",color:"white"}}>Count is:{count}</h1>
        <button style={{backgroundColor:"purple",color:"white",fontSize:"20px",borderRadius:"2.5px",marginBottom:"8px",marginRight:"30px"}} onClick={()=>setCount(count+1)}>Increment</button>
        <button style={{backgroundColor:"purple",color:"white",fontSize:"20px",borderRadius:"2.5px",marginBottom:"8px"}} onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
        <Colorful></Colorful>   
        </>
    )
}

//<Colorful></Colorful>  this is getting executed everytime if you click on count button
//you can use memo if you don't want some function to run while exporting that function


ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);