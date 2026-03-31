import React, { useState,useEffect } from "react";

    function Colorful(){

    const [color,setColor]=useState("black");
    useEffect(()=>
        {
        document.body.style.backgroundColor=color;
        },[color])
        
    return (
        <>
        <h1>Background Color Changer</h1>
        <div className="but">
        <button style={{backgroundColor:"red",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("red")}>Red</button>
        <button style={{backgroundColor:"blue",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("blue")}>Blue</button>
        <button style={{backgroundColor:"green",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("green")}>Green</button>
        <button style={{backgroundColor:"indigo",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("indigo")}>Indigo</button>
        <button style={{backgroundColor:"purple",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("purple")}>Purple</button>
        <button style={{backgroundColor:"orange",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("orange")}>Orange</button>
        <button style={{backgroundColor:"violet",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("violet")}>Violet</button>
        <button style={{backgroundColor:"grey",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("grey")}>Grey</button>
        <button style={{backgroundColor:"yellow",color:"black",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button style={{backgroundColor:"brown",color:"white",fontSize:"20px",borderRadius:"2.5px"}} onClick={()=>setColor("brown")}>Brown</button>
        </div>
        </>
    )
}

export default React.memo(Colorful);



