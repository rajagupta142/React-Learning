import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItems = [
    {id:1, food:'Pizza', Price:"200"},
    {id:2, food:'Pasta', Price:"300"},
    {id:3, food:'Momos', Price:"200"},
    {id:4, food:'Kebab', Price:"2000"},
    {id:5, food:'Chicken', Price:"1200"},
    {id:6, food:'Panner', Price:"2800"},
    {id:7, food:'Burger', Price:"2100"},
    {id:8, food:'Poha', Price:"4200"},
    {id:9, food:'Rice', Price:"100"},
    {id:10, food:'Daal', Price:"300"},
];



export default function Card(){
    

    return(
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"20px"}}>
            {foodItems.map((value)=>{
                return (
                    <div key={value.id}>
                      <FoodCart value ={value}></FoodCart>
                    </div>
                )
            })}
        </div>
    )

}

//--------------------------------------------------------------------------------


// const foodItems = [
//     {id:1, food:'Pizza', Price:"200"},
//     {id:2, food:'Pasta', Price:"300"},
//     {id:3, food:'Momos', Price:"200"},
//     {id:4, food:'Kebab', Price:"2000"},
//     {id:5, food:'Chicken', Price:"1200"},
//     {id:6, food:'Panner', Price:"2800"},
//     {id:7, food:'Burger', Price:"2100"},
//     {id:8, food:'Poha', Price:"4200"},
//     {id:9, food:'Rice', Price:"100"},
//     {id:10, food:'Daal', Price:"300"},
// ];



// export default function Card(){
    
   
//     return(
//         <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"20px"}}>
//             {foodItems.map((value)=>{
//                 return (
//                     <div key={value.id}>
//                         <h1>{value.food}</h1>
//                         <h1>{value.Price}</h1>
//                         <button>Add</button>
//                     </div>
//                 )
//             })}
//         </div>
//     )

// }


//-------------------------------------------------------------------------------

// import { useState } from "react";

// const foodItems = [
//     {id:1, food:'Pizza', Price:"200"},
//     {id:2, food:'Pasta', Price:"300"},
//     {id:3, food:'Momos', Price:"200"},
//     {id:4, food:'Kebab', Price:"2000"},
//     {id:5, food:'Chicken', Price:"1200"},
//     {id:6, food:'Panner', Price:"2800"},
//     {id:7, food:'Burger', Price:"2100"},
//     {id:8, food:'Poha', Price:"4200"},
//     {id:9, food:'Rice', Price:"100"},
//     {id:10, food:'Daal', Price:"300"},
// ];



// export default function Card(){
    
//     const [inCart,setInCart]=useState(false);

//     function handleClick(){
//         if(inCart){
//             setInCart(false);
//         }
//         else{
//             setInCart(true);
//         }
//     }
   
//     return(
//         <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"20px"}}>
//             {foodItems.map((value)=>{
//                 return (
//                     <div key={value.id}>
//                            <h1>{value.food}</h1>
//                            <h1>{value.Price}</h1>
//                         <button onClick={handleClick}>{inCart?"Remove":"Add"}</button>
//                     </div>
//                 )
//             })}
//         </div>
//     )

// }

//let's take an example like swiggy where i have food items and in food items i have 
// Add buttons and when i click on that Add button it is added to cart
// Here, i want to make a button, initially Add button will be there but when i click on
// Add, button should get changed to Remove

// To create a dynamic button  
//     function handleClick(){
//         if(inCart){
//             setInCart(false);
//         }
//         else{
//             setInCart(true);
//         }
//     }



//  <button onClick={handleClick}>{inCart?"Remove":"Add"}</button>


// PROBLEM: When i click on Add button, i said the button should get changed to Remove,
// But, i'm clicking 1 Add button every button is getting changed to Remove ?

// This is because every button is using the same incart value
// (i.e const [inCart,setInCart]=useState(false);)
// when the incart value is false every button will display Add inside a button
// when incart value is true , every button will display remove inside a button


// To solve this i need to create inCart for each one of the button
// That's why i created FoodCart.js


// <FoodCart value ={value}></FoodCart>   for every Card FoodCart will be called 
//     const [inCart,setInCart]=useState(false); will run for every Card since you call
// FoodCart for every Card
// which means for every button now has separate inCart 