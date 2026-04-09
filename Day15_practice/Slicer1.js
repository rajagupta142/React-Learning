import { createSlice } from "@reduxjs/toolkit";

const reactslicer=createSlice({
    name:"slice1",
    initialState: {count:0},
    reducers:{
        Increment:(state)=>
            {state.count= state.count+1},
        Decrement:(state)=>{state.count=state.count -1},
        Reset:(state)=>{state.count=0},
        CustomIncreaser:(state,action)=>{state.count=state.count + action.payload}
    }
})

export const {Increment,Decrement,Reset,CustomIncreaser} = reactslicer.actions;

export default reactslicer.reducer;

// export {reactslicer};


// dispatch(CustomIncreaser(Number(number))); 
// we know this will create action object {type:slice1/CustomIncreaser, payload:10}
//  and sends the action to the store 
// payload is just an argument that is being passed 
// CustomIncreaser:(state,action)=>{state.count=state.count + action.payload}

// we know action contains two things (1) type and (2) payload 
// {type:slice1/CustomIncreaser, payload:10}

//--------------------------------------------------------------------------

// import { createSlice } from "@reduxjs/toolkit";

// const reactslicer=createSlice({
//     name:"slice1",
//     initialState: {count:0},
//     reducers:{
//         Increment:(state)=>
//             {state.count= state.count+1},
//         Decrement:(state)=>{state.count=state.count -1},
//         Reset:(state)=>{state.count=0},
//         CustomIncreaser:(state,action)=>{state.count=state.count + action.payload}
//     }
// })

// export const {Increment,Decrement,Reset,CustomIncreaser} = reactslicer.actions;

// export default reactslicer.reducer;













//--------------------------------------------------------------------------------------



// import { createSlice } from "@reduxjs/toolkit";

// const reactslicer=createSlice({
//     name:"slice1",
//     initialState: {count:0},
//     reducers:{
//         Increment:(state)=>
//             {state.count= state.count+1},
//         Decrement:(state)=>{state.count=state.count -1},
//         Reset:(state)=>{state.count=0}
//     }
// })

// export const {Increment,Decrement,Reset} = reactslicer.actions;

// export default reactslicer.reducer;

// export {reactslicer};

//-------------------------------------------------------------------------

// Increment:(state)=>   this state stores the object declared in initialstate (i.e {count:0})
//Therefore, state={count:0} ---- To access it -->  state.count
// the initial state keeps on changing like initially it was 0, let's say now count changes 
// to 1, so initialstate: {count:2} 
// Increment:(state)=> this state will get the latest value
