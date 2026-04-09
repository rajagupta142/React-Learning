import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";


export default function Counting(){
    const count =useSelector((state)=>state.slice1.count);
    //useSelector()----subscribing to the event when state is changing it re-renders the UI
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

//------------------------------------------------------------------------------------

{/* <button onClick={()=>dispatch(Increment())}>Increment</button> */}

//(1) Increment()    ---> this is an action creator function which creates an action object
// Increment() → { type: "slice1/Increment", payload: undefined }  --->this is action object
//(2) dispatch(Increment()   -------> sends action to store

// (3) configureStore({
//   reducer: {
//     slice1: slice1Reducer,  slice1Reducer-->this contains all reducer function of slice1
//     slice2: slice2Reducer
//   }
// })

// Store looks at the action type: "slice1/Increment",  Finds slice1Reducer,  
// Store → calls the slice’s reducer(calls the Increment function) inside slice1Reducer 
// (4)   Reducer → updates state
// (5)  store now has updated values because useSelector() re-rnders automatically