import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router";
import Home from "./src/Home";
import Dashboard from "./src/Dashboard";
import Contact from "./src/contact";
import Details from "./src/Details";
import Hi from "./src/Hi";
import Hello from "./src/Hello";
import Zero from "./src/zero";

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

          </Routes>
        </BrowserRouter>

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)



//--------------------------------------------------------------------------------

// function App(){
//     return(
//         <BrowserRouter>
//           <Routes>
//              <Route path="/" element={<Home></Home>}>Home</Route>
//              <Route path="/Contact" element={<Contact></Contact>}>Contact</Route>
//              <Route path="/Dashboard" element={<Dashboard></Dashboard>}>Dashboard</Route>
//           </Routes>
//         </BrowserRouter>

//     )
// }

// now if you change the url from http://localhost:xxxx to http://localhost:xxxx/Dashboard 
// you will reach Dashboard page without reload

//------------------------------------------------------------------------------------

// if you want add navbar here you cannot use anchor tag <a href="">
// in, React Router we don't use <a> anchor tag because 
// it reload the entire page, loses app state(if you are filling a form),slower
// Instead React Router has (link) for navbar

//  <Link to="/Contact">Contact</Link> 

// when  you click Contact the url changes to http://localhost:xxxx/Contact
//  <Route path="/Contact" element={<Contact></Contact>}>Contact</Route> 
// this will see the path matches and it will render element={<Contact></Contact>}
// that's when you see the content of Contact

//---------------------------------------------------------------------------------
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route,Link } from "react-router";
// import Home from "./src/Home";
// import Dashboard from "./src/Dashboard";
// import Contact from "./src/contact";

// function App(){
//     return(
//         <BrowserRouter>
//         <nav>
//              <Link to="/">Home</Link>
//              <Link to="/Contact">Contact</Link>
//              <Link to="/Dashboard">Dashboard</Link>
//         </nav>
      
//           <Routes>
//              <Route path="/" element={<Home></Home>}>Home</Route>
//              <Route path="/Contact" element={<Contact></Contact>}>Contact</Route>
//              <Route path="/Dashboard" element={<Dashboard></Dashboard>}>Dashboard</Route>
//           </Routes>
//         </BrowserRouter>

//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)



//--------------------------------------------------------------------------------------
// NESTED ROUTE

// Now i want to create Details page and inside Details i want content of Zero file as default
// when i want Hi and Hello as naviagation inside Details and when i click any of them
// that file content should be shown