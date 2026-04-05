import { Outlet,Link } from "react-router";
export default function Details(){
    return(
        <>
        <nav>
           <Link to="">Zero</Link>
           <Link to="Hello">Hello</Link>
           <Link to="Hi">Hi</Link>
        </nav>

        <h1>This is a  Details page</h1>
        <Outlet></Outlet>
        </>
    )
}