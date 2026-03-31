import React from "react";
import ReactDOM from "react-dom/client";


//Header
//Body
//Footer

// function Card(){

// }

// function App(){
//     return(
//         //Header
//         //Body
//         //Footer
    //    <div>
    //     <Card/>
    //    </div>
//     )
// }

// const Root=ReactDOM.createRoot(document.getElementById('root'));
// Root.render(App);

//----------------------------------------------------------------------------

// function Card(props){
//     return(
//     <div style={{border:"2px solid black", padding:"5px"}}>
//         <img src="https://triprindia.com/cdn/shop/files/3_1_16284f4a-d74e-4d1d-aa2b-10b34f6c912a.jpg?v=1750685929&width=600" height="200px" width="200px"/>
//         <div style={{textAlign:"center"}}>
//             <h2>T-shirts</h2>
//             <h1>40-80%Off</h1>
//             <h2>Shop Now</h2>
//         </div>
//     </div>
//     )

// };



// function App(){
//     return(
//         //Header
//         //Body
//         //Footer
//         <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
//             <Card />
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//         </div>
//     )
// };

// const Root=ReactDOM.createRoot(document.getElementById('root'));
// Root.render(<App/>);

//----------------------------------------------------------------------------------------

// function Card(props){
//     return(
//     <div style={{border:"2px solid black", padding:"5px"}}>
//         <img src="https://triprindia.com/cdn/shop/files/3_1_16284f4a-d74e-4d1d-aa2b-10b34f6c912a.jpg?v=1750685929&width=600" height="200px" width="200px"/>
//         <div style={{textAlign:"center"}}>
//             <h2>{props.cloth}</h2>
//             <h1>{props.offer}</h1>
//             <h2>Shop Now</h2>
//         </div>
//     </div>
//     )

// };


// function App(){
//     return(
        //Header
        //Body
        //Footer
        // <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
        //     <Card cloth="T-shirt" offer="40-80% Off"/>
        //     <Card cloth="Jeans" offer="30-60% Off"/>
        //     <Card cloth="Kurta" offer="40-70% Off"/>
        //     <Card cloth="Ethnic Wear" offer="40-80% Off"/>
        //     <Card cloth="Gown" offer="40-90% Off"/>
        //     <Card cloth="Saree" offer="40-60% Off"/>
        //     <Card cloth="Formal Wear" offer="50-80% Off"/>
        //     <Card cloth="Shoes" offer="60-80% Off"/>
        //     <Card cloth="Spectacles" offer="30-80% Off"/>
        //     <Card cloth="Sports Wear" offer="50-70% Off"/>
        //     <Card cloth="fancy Dress" offer="40-80% Off"/>
        //     <Card cloth="Bag" offer="20-50% Off"/>


    // if there will be 1000 cards, will you write like this for all 1000 cards
    //so better approach is use array and for every cards put information inside it

        // </div>
//     )
// };

// const Root=ReactDOM.createRoot(document.getElementById('root'));
// Root.render(<App/>);




//----------------------------------------------------------------------


function Card(props){
    return(
    <div style={{border:"2px solid black", padding:"5px"}}>
        <img src="https://triprindia.com/cdn/shop/files/3_1_16284f4a-d74e-4d1d-aa2b-10b34f6c912a.jpg?v=1750685929&width=600" height="200px" width="200px"/>
        <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Shop Now</h2>
        </div>
    </div>
    )

};

const arr=[{cloth:"T-shirt", offer:"40-80% Off"},{cloth:"Jeans", offer:"30-60% Off"},{cloth:"Kurta" , offer:"40-70% Off"},
           {cloth:"Ethnic Wear", offer:"40-80% Off"},{cloth:"Formal Wear", offer:"50-80% Off"},{cloth:"Shoes", offer:"60-80% Off"},{cloth:"Spectacles", offer:"30-80% Off"},
           {cloth:"Sports Wear",offer:"50-70% Off"},{cloth:"fancy Dress", offer:"40-80% Off"}];

function App(){
    return(  
        <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
       
        {/* // you cannot directly return without <div> or <></>
        // in jsx you have to use {} to pass js object obj.name(which must be either string,array and number)  
      { */}

       {
        arr.map((value,index)=><Card key="index"cloth={value.cloth} offer={value.offer}/>)

        //this will return an array and array,string and number is allowed and object is not.
      }
      </div>
    )
};

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);




//----------------------------------------------------------------------------------
// const restaurants=[
//   { id: 1, name: "Pizza Hut", price: 200, rating: 4.2, discount: "50% OFF", img:"https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=LWxNqGlUSb5jfhv3Fu8lzYdXOebquU0_0WUKl0f5zxk="},
//   { id: 2, name: "Burger King", price: 150, rating: 4.0, discount: "20% OFF", img: "https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=BIz-9inz1CdT5LkBOStg1LImZxPSAg5PyhCgFa4VqVc=" },
//   { id: 3, name: "Pasta Street", price: 300, rating: 4.5, discount: "10% OFF", img: "https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.webp?a=1&b=1&s=612x612&w=0&k=20&c=-C6E5EYsOmqnUlt2-tPhmUs_Uzo7iSiwOv4abbg-0Hk=" },
//   { id: 4, name: "Sushi House", price: 500, rating: 4.8, discount: "Free Delivery", img: "https://images.unsplash.com/photo-1682139710677-cb02f6bc4211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBwaWN0dXJlcyUyMG9mJTIwcmVzdHVyYW50fGVufDB8fDB8fHww"},
//   { id: 5, name: "Taco Bell", price: 120, rating: 3.9, discount: "Buy 1 Get 1", img: "https://images.unsplash.com/photo-1758157835950-ceeda86f4693?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBwaWN0dXJlcyUyMG9mJTIwcmVzdHVyYW50fGVufDB8fDB8fHww" }
// ];


// function App(){
//    return (
//     { 
//         restaurants.map((detail,index)=><Cards key={index} img={detail.img} name={detail.name} price={detail.price} rating={detail.rating} discount={detail.discount}/>)
//   }) 
// }  why can't we do this


// 1. The "Object Literal" Confusion
// In standard JavaScript, curly braces { } create an Object.

// const user = { name: "abc" }; — This is an Object Literal.

// When you write return ( { ... } ), JavaScript sees those starting braces and thinks: 
// "Oh, the user wants to return a data object (like a JSON object)."

// 2. The "Naked" Curly Brace Problem
// In React, we use { } to "escape" into JavaScript mode inside HTML.

// Correct: <div> { 2 + 2 } </div> (The <div> acts as the "HTML container").

// Incorrect: { 2 + 2 } (There is no "HTML container").

// If you don't have a tag (like <div> or <h1>) on the outside, 
// the computer doesn't know you are trying to write React code.
//  It just sees { } and assumes you are trying to define a variable or a data object.

// In JavaScript, curly braces { } used outside of a tag (like a <div>) are interpreted as an Object Literal.

// When you write return ( { ... } ), you are telling the function to return a plain JavaScript object.

// React components are required to return a React Element (something created with React.createElement).

// A "naked" curly brace block inside a return statement is syntactically invalid in JSX because 
// the compiler doesn't know what to do with it. It thinks you are trying to return an object, 
// but then it sees the .map() logic inside and gets confused.


//------------------------------------------------------------------------------------------


// function App(){
//    return (
//    <div> { 
//         restaurants.map((detail,index)=><Cards key={index} img={detail.img} name={detail.name} price={detail.price} rating={detail.rating} discount={detail.discount}/>)
//   }</div>) 
// }   why is this only correct


// The Tag: The <div> tells React: "Start creating a DOM node."

// The Bridge: Once you are inside a JSX tag, the curly braces { } change their meaning. 
// They act as a bridge that says: "Stop reading this as HTML and start executing this JavaScript code."

// The Result: The .map() executes, returns an array of <Cards />,
//  and React injects that array as the children of the <div>.

// When you put a <div> first, React says: "Okay, I am building a Box." Then, when it sees the { } inside that box,
//  it says: "Oh! Inside this box, I need to run some JavaScript logic (the map)."



// Curly braces {} are only allowed inside a tag to let us write JavaScript.
//  If you put {} on the outside, React thinks it's a mistake."