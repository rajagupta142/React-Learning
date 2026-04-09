import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slicer2";

const stores= configureStore({
    reducer:{
        slice2:CartReducer,
    }
})

export default stores;