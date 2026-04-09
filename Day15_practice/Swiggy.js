import React from "react";
import ReactDOM from "react-dom/client";
import Header from"./Header";
import Card from "./Card";
import { Provider } from "react-redux";
import stores from "./Stored";

 function App(){
    return(
        <Provider store={stores}>
            <Header></Header>
            <Card></Card>
        </Provider>
    )
 }

 ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



 //--------------------------------------------------------------------------------
 
 // swiggy.js, Card.js, Header.js, FoodCart.js,Slicer2.js,Stored.js

 //--------------------------------------------------------------------------------

//  import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from"./Header";
// import Card from "./Card";

//  function App(){
//     return(
//         <>
//             <Header></Header>
//             <Card></Card>
//         </>
//     )
//  }

//  ReactDOM.createRoot(document.getElementById('root')).render(<App/>);