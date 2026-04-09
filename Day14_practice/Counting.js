import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";


export default function Counting(){
    const count =useSelector((state)=>state.slice1.count);
    const dispatch=useDispatch();
    console.log(Increment);
    return(
        <>
        <h1>The count is: {count}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}


//-------------------------------------------------------------------------------

// import { useSelector } from "react-redux";


// export default function Counting(){
//     const count =useSelector((state)=>{state.slice1.count})
//     return(
//         <>
//         <h1>The count is: {count}</h1>
//         <button>Increment</button>
//         <button>Decrement</button>
//         <button>Reset</button>
//         </>
//     )
// }

//useSelector()------> to access the count( declared in Slice and exported to store 
// ---so, basically--->It reads data from the Redux store.) 
// i need to use useSelector