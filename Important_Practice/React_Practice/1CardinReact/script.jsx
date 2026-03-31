import React from "react";
import ReactDOM from "react-dom/client";


const restaurants=[
  { id: 1, name: "Pizza Hut", price: 200, rating: 4.2, discount: "50% OFF", img:"https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=LWxNqGlUSb5jfhv3Fu8lzYdXOebquU0_0WUKl0f5zxk="},
  { id: 2, name: "Burger King", price: 150, rating: 4.0, discount: "20% OFF", img: "https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=BIz-9inz1CdT5LkBOStg1LImZxPSAg5PyhCgFa4VqVc=" },
  { id: 3, name: "Pasta Street", price: 300, rating: 4.5, discount: "10% OFF", img: "https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.webp?a=1&b=1&s=612x612&w=0&k=20&c=-C6E5EYsOmqnUlt2-tPhmUs_Uzo7iSiwOv4abbg-0Hk=" },
  { id: 4, name: "Sushi House", price: 500, rating: 4.8, discount: "Free Delivery", img: "https://images.unsplash.com/photo-1682139710677-cb02f6bc4211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBwaWN0dXJlcyUyMG9mJTIwcmVzdHVyYW50fGVufDB8fDB8fHww"},
  { id: 5, name: "Taco Bell", price: 120, rating: 3.9, discount: "Buy 1 Get 1", img: "https://images.unsplash.com/photo-1758157835950-ceeda86f4693?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBwaWN0dXJlcyUyMG9mJTIwcmVzdHVyYW50fGVufDB8fDB8fHww" }
];

// function Cards(props){
//    return (
//     <div style={{border:"2px solid black",padding:"2px",display:"flex", flexDirection:"column",gap:"5px",textAlign:"center", height:"auto",width:"300px"}}>
//         <img src={props.img} style={{objectFit:"cover", height:"200px", width:"200px"}}/>
//         <h4>{props.name}</h4>
//         <p>{props.price}</p>
//         <p>{props.rating}</p>
//         <p>{props.discount}</p>
//     </div>
//    )
// }

// function App(){
//    return (
//     <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>{
//         restaurants.map((detail,index)=><Cards key={index} img={detail.img} name={detail.name} price={detail.price} rating={detail.rating} discount={detail.discount}/>)
// }</div>)
// }

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)





function Cards(props){
   return (
    <div style={{
        border: "2px solid black",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        textAlign: "center",
        width: "200px",   // fixed width
        boxSizing: "border-box"
    }}>
        <img src={props.img} style={{objectFit:"cover", height:"200px", width:"100%"}}/>
        <h4>{props.name}</h4>
        <p>Price: ₹{props.price}</p>
        <p>⭐ {props.rating}</p>
        <p>{props.discount}</p>
    </div>
   )
}

function App(){
   return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"10px",   // spacing between cards
        padding:"10px"
    }}>
        {restaurants.map((detail, index) => 
            <Cards 
                key={index} 
                img={detail.img} 
                name={detail.name} 
                price={detail.price} 
                rating={detail.rating} 
                discount={detail.discount} 
            />
        )}
    </div>
   )
}