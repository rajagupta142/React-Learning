import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Github(){

    // const data=useParams();
     const {name}=useParams();  // -- you can take this as well
     const [profile,setProfile]=useState(null);
    // console.log(data);

    async function Fetchuser(){
        const response=await fetch(`https://api.github.com/users/${name}`);
        const data=await response.json();
        setProfile(data);
    }
    
    useEffect(()=>{
        Fetchuser();
    },[]);

    return(<>
        <h2>This is Github Profile</h2>
        <div>
            <img src={profile?.avatar_url}></img>
            <h2>{profile?.url}</h2>
        </div>
        </>
    )
}




//------------------------------------------------------------------------------------
//first.js,Github.js 








// import { useParams } from "react-router";

// export default function Github(){

//     // const data=useParams();
//      const {name}=useParams();  // -- you can take this as well
//     console.log(data);

//     return(
//         <>
//            <h2>This is Github Profile</h2>
//         </>
//     )
// }



//  <Route path="/Github/:name" element={<Github></Github>}></Route>
//   :name --This part of the URL is dynamic (a variable)

// Instead of hardcoding routes like:
// /Github/rohit
// /Github/john
// /Github/alex

// You write one route:
// /Github/:name

// http://localhost:xxxx/Github/abcdef  -- if you have typed this url
//  const data=useParams();  this will read the dynamic value from the URL. (i.e abcdef)
//useParams()  --> It returns an object of all URL parameters

// you can try changing this abcdef to different name -- this ( const data=useParams(); ) will
// catch the value you put here ---> Github/abcdef