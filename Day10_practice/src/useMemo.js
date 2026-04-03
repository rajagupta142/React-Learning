import React,{useState,useEffect, useMemo} from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [count,setCount] = useState(0);
    const [number,setNumber] = useState("");
    // const [result,setResult]=useState("");
     
    function Fibonacci(n){
        if(n<=1) return n;
       return Fibonacci(n-1) + Fibonacci(n-2);
    }


//    useEffect(()=>{
//      setResult(Fibonacci(number));
//    },[number]);

 const result =useMemo(()=>{
    return Fibonacci(number);
 },[number])
   
    return(
        <div className="mainDiv">
            <h1>The count is:{count}</h1>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
            <div className="fibonacci">
                <h2>The fibonacci Number is: {result}</h2>
                <input type="number" placeholder="Enter the Number" onChange={(e)=>{setNumber(Number(e.target.value))}} ></input>

            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)






//-----------------------------------------------------------------------------


// function App(){

//     const [count,setCount] = useState(0);
//     const [number,setNumber] = useState("");
     
//     function Fibonacci(n){
//         if(n<=1) return n;
//        return Fibonacci(n-1) + Fibonacci(n-2);
//     }

//     const result =Fibonacci(number);
   
//     return(
//         <div className="mainDiv">
//             <h1>The count is:{count}</h1>
//             <button onClick={()=>setCount(count + 1)}>Increment</button>
//             <button onClick={()=>setCount(count - 1)}>Decrement</button>
//             <div className="fibonacci">
//                 <h2>The fibonacci Number is: {result}</h2>
//                 <input type="number" placeholder="Enter the Number" onChange={(e)=>{setNumber(Number(e.target.value))}} ></input>

//             </div>
//         </div>
//     )
// }






//-------------------------------------------------------------------------
//     function Fibonacci(n){
    //     if(n<=1) return n;
    //    return Fibonacci(n-1) + Fibonacci(n-2);
    // }

// this is a heavy calculation when you give larger number like 40, when you put 50 it will 
// make page unresponsive, so, we know clicking on button and typing some number on searchbar
// both are independent but let's say you type 40 in searchbar, after few seconds it gave you
// fibonacci number and now when you click on button you'll see your count immediately don't
// get updated. this is because  the moment you click 'Increment', this will 
// setCount(count + 1)  setCount will update count value and then call function App(){
// the main function again execute every line of code  where function Fibonacci(n) this will 
// also get executed since you've entered 40, it will take some time that's why your count
// updated after few seconds

// Every time you click on button every time Fibonacci() gets executed so, every time 
// your count will update late

//  so, we use (useMemo)---- slightly better than useEffect because useEffect gets executed
// at the very end after return statement and useMemo runs the moment execution line reaches
    //  const result=useMemo(()=>{
    //    return Fibonacci(number);
    // },[number]);

// so, what's the problem ?

// The problem is you cannot write useEffect like this  const result=useEffect(()=>{
// <h2>The fibonacci Number is: {result}</h2>    because of this line
// you need to create one more variable 
// const [result,setResult]=usestate("");

// and your useEffect code looks like 
//    useEffect(()=>{
//      setResult(Fibonacci(number));
//    },[number]);

// the problem is when you type number in search bar
{/* <input type="number" placeholder="Enter the Number" onChange={(e)=>{setNumber(Number(e.target.value))}} ></input> */}

// this will run and setNumber function is called which will call function App(){

// useEffect will run at end , so again at the end setResult(Fibonacci(number));
// setResult function will be called which will call function App(){
// so, using useEffect will re-render one more time which will waste time,memory etc.

// but, using useMemo runs the moment it reach the  const result=useMemo(()=>{  this code


// and one more thing is useEffect is meant for side effects (API calls, DOM updates, subscriptions), not calculations.


// you cannot do 
//    useEffect(()=>{
//      setNumber(Fibonacci(number));
//    },[number]);

// because if you have typed 40 in search bar Fibonacci(number) this will calculate 
// fibonacci (102334155) and then setNumber() will store that fibonacci number 102334155
// inside number 


//--------------------------------------------------------------------
// function Fibonacci(n){
//     if(n<=1) return 1;
//     return Fibonacci(n-1) + Fibonacci(n-2);
// }


// fibonacci(4)

// = fibonacci(3) + fibonacci(2)

// = (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))

// = ((fibonacci(1) + fibonacci(0)) + 1) + (1 + 0)

// = ((1 + 0) + 1) + (1 + 0)

// = (1 + 1) + 1

// = 3

//-----------------------------------------------------------------------------