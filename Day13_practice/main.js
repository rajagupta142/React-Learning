import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./CustomHooks/Header";
import Body from "./CustomHooks/Body";

function GithubProfile(){
// Header
// Body: 10 card show karenge

  return (
   <>
      <Header></Header>
      <Body></Body>
   </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);


//  main.js,Body.js,useFetch.js