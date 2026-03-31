import React,{useCallback,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile(){
    return(
    <>
        <Header></Header>
        <Body></Body>
    </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);

