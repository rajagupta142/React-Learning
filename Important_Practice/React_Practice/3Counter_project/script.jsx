import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// function Counter(){
//     let count=0;
//     function Increment(){
//         count=count+1;
//         document.querySelector('h1').innerText=`The count is: ${count}`;
//         document.querySelector('#a').innerHTML=`Increment ${count}`;
//         document.querySelector('#b').innerHTML=`Decrement ${count}`;

//     }
//     function Decrement(){
//         count=count-1;
//          document.querySelector('h1').innerText=`The count is: ${count}`;
//          document.querySelector('#a').innerHTML=`Increment ${count}`;
//          document.querySelector('#b').innerHTML=`Decrement ${count}`;
//     }
//     return(
//         <div>
//             <h1>The count is:{count}</h1>
//             <button id="a" onClick={Increment}>Increment {count}</button>
//             <button id="b" onClick={Decrement}>Decrement {count}</button>
//         </div>
//     )
// }


function Counter(){
   let [count,setCount]=useState(0);
    function Increment(){
        count=count+1;
        // document.querySelector('h1').innerText=`The count is: ${count}`;
        setCount(count);

    }
    function Decrement(){
        count=count-1;
        //  document.querySelector('h1').innerText=`The count is: ${count}`;
        setCount(count);
    }
    return(
        <div>
            <h1>The count is:{count}</h1>
            <button  onClick={Increment}>Increment {count}</button>
            <button  onClick={Decrement}>Decrement {count}</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);