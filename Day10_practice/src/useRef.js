import React, { useState, useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {

    const [count, setCount] = useState(0);
    let money = useRef(0);
    // let money = 0;
    return (
        <div className="mainDiv">
            <h1>The count is:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <div className="money">
                <h1>The count is:{money.current}</h1>
                <button onClick={() => {
                    money.current = money.current + 1;
                    console.log(money);
                }
                }>Money</button>
            </div>

        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//----------------------------------------------------------------------------

//  <div className="money">
//     <h1>The count is:{money.current}</h1>
//     <button onClick={() => {
//         money.current = money.current + 1;
//         console.log(money);
//     }
//     }>Money</button> 


//  This will now doesnot reset the money value to 0 after you click Increment button
//  where you left, from there it start printing on console 

//------------------------------------------------------------------------------------

            // <div className="money">
            //     <h1>The count is:{money.current}</h1>
            //     <button onClick={() => {
            //         money = money + 1;
            //         console.log(money);
            //     }
            //     }>Money</button>
            // </div>

            //--------------------------------------------------------------------------------------------

            // <div className="money">
            //     <h1>The count is:{money.current}</h1>
            //     <button onClick={()=> money=money + 1}>Money</button>
            // </div>
            //--------------------------------------------------------------------------------

            {/* <button onClick={()=> money=money + 1}>Money</button> */ }

            // when you click on Money button , it don't have state variable so , this  function App(){
            // is not called so, not re-render and money value in <h1>The count is:{money}</h1>
            // don't get increased


            {/* <div className="money">
    <h1>The count is:{money}</h1>

    <button onClick={() => {
        money = money + 1;
        console.log(money);
    }
    }>Money</button> */}

// when you click on money button, in console it gets printed like 1  2   3   4
// after then if you click on Increment or Decrement button and then again you click
// on money button you will see it again start from 1

// is there anyway to print money from wher i left before ?
// ---> there comes 'useRef'  in the picture

// useRef store references of the  variable in current object when you expand current object then
// the value is stored inside 'key' current (key:value) (current : 0)
// to access or print that value you need to do (money.current)
