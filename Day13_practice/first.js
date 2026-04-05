import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Home from "./src copy/Home";
import Dashboard from "./src copy/Dashboard";
import Contact from "./src copy/Contact"
import Details from "./src copy/Details";
import Hi from "./src copy/Hi";
import Hello from "./src copy/Hello";
import Zero from "./src copy/zero";
import Github from "./src/Github";

function App(){
    return(
        <BrowserRouter>
        <nav>
             <Link to="/">Home</Link>
             <Link to="/Contact">Contact</Link>
             <Link to="/Dashboard">Dashboard</Link>
             <Link to="/Details">Details</Link>
        </nav>
      
          <Routes>
             <Route path="/" element={<Home></Home>}>Home</Route>
             <Route path="/Contact" element={<Contact></Contact>}>Contact</Route>
             <Route path="/Dashboard" element={<Dashboard></Dashboard>}>Dashboard</Route>

             <Route path="/Details" element={<Details></Details>}>
                {/* <Route index element={<Zero></Zero>}></Route> */}
               <Route path="Hi" element={<Hi></Hi>}></Route>
               <Route path="Hello" element={<Hello></Hello>}></Route>
             </Route>

             <Route path="/Github/:name" element={<Github></Github>}></Route>

          </Routes>
        </BrowserRouter>

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);


// first.js,Home.js,Dashboard.js,Contact.js,Details.js,Hi.js,Hello.js,Github.js

// path="/Github/:name"

// :name --This part of the URL is dynamic (a variable)

// Instead of hardcoding routes like:
// /Github/rohit
// /Github/john
// /Github/alex

// You write one route:
// /Github/:name