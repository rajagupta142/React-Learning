import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";


//---------------------------------------------------------------------------------------------------

// function Main(){
//     const [color,setColor]=useState("black");
//     console.log('first');
//         document.body.style.backgroundColor=color;
//     return (
//         <>
//         <h1>Background Color Changer</h1>
//         <div id='but'>
//         <button onClick={()=>setColor("red")}>Red</button>
//         <button onClick={()=>setColor("blue")}>Blue</button>
//         <button onClick={()=>setColor("green")}>Green</button>
//         <button onClick={()=>setColor("indigo")}>Indigo</button>
//         <button onClick={()=>setColor("purple")}>Purple</button>
//         <button onClick={()=>setColor("orange")}>Orange</button>
//         <button onClick={()=>setColor("violet")}>Violet</button>
//         <button onClick={()=>setColor("grey")}>Grey</button>
//         <button onClick={()=>setColor("yellow")}>Yellow</button>
//         <button onClick={()=>setColor("brown")}>Brown</button>
//         </div>
//         </>
//     )
// }


//the problem in above code is initially you have set color to black and useState will hold that color
// But, if you click on red button onClick={()=>setColor("red") will check the previous state(i.e useState("black"))
// and compare new State useState('red') to previous State(black) if state is changed, it will be rendered
// but if you click on red again previous state(red) and new state(red), it shouldn't be allowed to render again
// still you will see it is rendering

//clicking on red button consecutively allow only max 2 times of rendering(render and re-render) 
//after that no matter how many times you click it's not going to render

//but that's only case in primitive values(string,number)
//in non-primitive values(array,object) only 1 times it will be rendered
//because then reference are compared (array and object stores references)
//like in myntra project where we used to sort price


//but i want only to render when state is actually  changed 
//here, we use useEffect


//---------------------------------------------------------------------------------------
//useEffect(callback function,dependency)

function Main(){
    const [color,setColor]=useState("black");
    console.log('first');
    useEffect(()=>{
        console.log('second');
        document.body.style.backgroundColor=color;},[color])
        
    return (
        <>
        <h1>Background Color Changer</h1>
        <div id='but'>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("indigo")}>Indigo</button>
        <button onClick={()=>setColor("purple")}>Purple</button>
        <button onClick={()=>setColor("orange")}>Orange</button>
        <button onClick={()=>setColor("violet")}>Violet</button>
        <button onClick={()=>setColor("grey")}>Grey</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
        <button onClick={()=>setColor("brown")}>Brown</button>
        </div>
        </>
    )
}





ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);