import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";

function App(){
    console.log("Hello");
    return(
    <Provider store={stores}>
    <Counting></Counting>
    </Provider>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);



///---------------------------------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom/client";

// function App(){
//     <Counting></Counting>
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);