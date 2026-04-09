 import { useState } from "react";
 import { addItems,removeItems } from "./Slicer2";
 import { useDispatch } from "react-redux";

    export default function FoodCart({value}){
    
    const [inCart,setInCart]=useState(false);
    const dispatch=useDispatch();

    function handleClick(){
        if(inCart){
            setInCart(false);
            dispatch(removeItems());
        }
        else{
            setInCart(true);
             dispatch(addItems());
        }
    }

    return(
        <>
            <h1>{value.food}</h1>
            <h1>{value.Price}</h1>
            <button onClick={handleClick}>{inCart?"Remove":"Add"}</button>       
        </>
    )
}

// Add : inCart = false
// Remove : inCart=true