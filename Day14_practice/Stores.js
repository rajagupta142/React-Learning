import { configureStore } from "@reduxjs/toolkit";
import Slice1reducer from "./Slicer1";

const stores= configureStore({
    reducer:{
    slice1: Slice1reducer,
    // slice2: Slice2reducer,
    // slice3: Slice3reducer,
    }
})

export default stores;