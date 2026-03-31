import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Card from "./component/card";
import arr from "./utils/dummy";



// function sortItems(){
//     let [Ar,setAr]=useState(arr);
//     arr.sort((a,b)=>a.price-b.price);
//     setAr(arr);      
    
//     //when you click button still you card won't be sort by price because Array is stored in
//     // heap memory(stored by reference),so reference won't change(they remain in their position)
//     //That's why you won't see cards sorted in order of price 
// }


//To solve this what we do is create a copy of that array [.. A]






 function App(){

    let [Ar,setAr]=useState(arr);

    function sortItems(){
      Ar.sort((a,b)=>a.price-b.price);
      setAr([...Ar]);      
    }

    function sortByDiscount(){
        // const B=arr.filter((value)=>parseInt(value.offer)>40); 
        // //offer is a string,to conver to number use parseInt()
        const B=arr.filter((value)=>{
            const discount=parseInt(value.offer)
             return discount>40;
        });
        setAr(B)
    }

    return (
    // <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
    // <Card cloth="T-shirt" offer="50-70%"/>
    // <Card cloth="shoes" offer="50-70%"/>
    // <Card cloth="Bag" offer="50-70%"/>
    // <Card cloth="Luggage" offer="50-70%"/>
    // <Card cloth="Formal Wear" offer="50-70%"/>
    // <Card cloth="Fancy dress" offer="50-70%"/>
    // <Card cloth="Sports Wear" offer="50-70%"/>
    // <Card cloth="spectacles" offer="50-70%"/>
    // <Card cloth="Baggie Jeans" offer="50-70%"/>
    // </div>
    
    <>

    <Header/>

    <button onClick={sortItems}>SortItems</button>
    <button onClick={sortByDiscount}>sortByDiscount</button>

    <div className="middle">
    {
    Ar.map((dress,index)=><Card key={index} cloth={dress.cloth} offer={dress.offer} price={dress.price} />)
     }
     </div>

     </>
 )}

 const Root= ReactDOM.createRoot(document.getElementById('root'));
 Root.render(<App/>);