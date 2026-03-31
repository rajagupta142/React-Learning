import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// function Counter(){
//     let count=0;
//     return(
//         <div className="first">
//             <h1>Count is:{count} </h1>
//             <button >Increment</button>
//             <button>Decrement</button>
//         </div>
//     )
// }

//--------------------------------------------------------------------------


// function Counter(){
//     let count=0;

//     function incrementnumber(){
//         count=count+1;
//         console.log("count value is:",count);
//     }

//     function decrementnumber(){
//         count=count-1;
//     }

//     return(
//         <div className="first">
//             <h1>Count is:{count}</h1>
//             <button onClick={incrementnumber}>Increment</button>
//             <button onClick={decrementnumber}>Decrement</button>
//         </div>
//     )
// }



//this function runs 1 time and when you click button Increment it only runs code inside
//incrementnumber(), and it doesnot again run Counter function so, it doesnot run 
// return(------) part again so that's why you see Count is:0 everytime you click button
// likewise for decrementnumber()
// Counter() is NOT called again ❌ 
// JSX is NOT re-evaluated ❌    ---------------> <h1>Count is:{count}</h1>
// return (...) is NOT executed again ❌


//the problem here is if you click on button you will see there will be no changes in count
//but if you do console.log() there you will see count is increasing or decreasing
// this is because you haven't updated DOM, <h1>Count is:{count}</h1>, the count is in h1 tag 
//so you need to update DOM i.e count inside h1 tag

//-----------------------------------------------------------------------------------------



// function Counter(){
//     let count=0;

//     function incrementnumber(){
//         count=count+1;
//         document.querySelector('h1').innerText=`Count is ${count}`;
//         // console.log("count value is:",count);
        // document.querySelector('#a').innerHTML=`Increment ${count}`;
        // document.querySelector('#b').innerHTML=`Decrement ${count}`;
//     }

//     function decrementnumber(){
//         count=count-1;
//         document.querySelector('h1').innerText=`Count is ${count}`;
        // document.querySelector('#a').innerHTML=`Increment ${count}`;
        // document.querySelector('#b').innerHTML=`Decrement ${count}`;
//     }

//     return(
//         <div className="first">
//             <h1>Count is:{count}</h1>
//             <button id="a" onClick={incrementnumber}>Increment {count}</button>
//             <button id="b" onClick={decrementnumber}>Decrement  {count}</button>
//         </div>
//     )
// }




// The problem here is whereever you have used {count}, like inside <h1>,<button>
//for all of them you need to update the DOM ,that's a manual way of handling DOM
//so to solve this we have 'hook useState,useReference --we will use useState


//----------------------------------------------------------------------------------------



function Counter(){
    let [count,setcount]=useState(0);

    function incrementnumber(){
        count=count+1;
        setcount(count);
        // document.querySelector('h1').innerText=`Count is ${count}`;
        // console.log("count value is:",count);
    }

    function decrementnumber(){
        count=count-1;
        setcount(count);
        // document.querySelector('h1').innerText=`Count is ${count}`;
    }

    return(
        <div className="first">
            <h1>Count is:{count}</h1>
            <button onClick={incrementnumber}>Increment {count}</button>
            <button onClick={decrementnumber}>Decrement  {count}</button>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);

