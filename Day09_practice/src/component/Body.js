import { useEffect, useState } from "react";


  function Body(){

   const [profile,setProfile]=useState([10]);
   const [numberofProfile,setNumberofProfile]=useState("");

   async function generateProfile(count){
        const response= await fetch(`https://api.github.com/users?per_page=${count}`); 
        const data= await response.json();
        setProfile(data);
   }
    useEffect(()=>{
        generateProfile();
    },[]);

     return(
        <div className="but">
            <input type="number" className="inpu" placeholder="Search here" value={numberofProfile} onChange={(e)=>setNumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(numberofProfile)} type="search">Search Profile</button>
         <div className="profile">
      {
        profile.map((value)=>{
          return  (<div key={value.id} className="cards">
                <img src={value.avatar_url}></img>
                <h2>{value.login}</h2>
                <a href={value.html_url} target="blank">Profile</a>
            </div>)
        })
      }
    </div>
    </div>
  )
}

export default Body;











//-------------------------------------------------------------------------------------



// import { useEffect, useState } from "react";


//   function Body(){

//    const [profile,setProfile]=useState([]);
//    console.log("hello");

//    async function generateProfile(){
//         const response= await fetch("https://api.github.com/users?per_page=10"); 
//         const data= await response.json();
//         setProfile(data);
//    }
//     useEffect(()=>{
//         generateProfile();
//     },[]);

//      return(
//          <div className="profile">
//       {
//         profile.map((value)=>{
//           return  (<div key={value.id} className="cards">
//                 <img src={value.avatar_url}></img>
//                 <h2>{value.login}</h2>
//                 <a href={value.html_url} target="blank">Profile</a>
//             </div>)
//         })
//       }
//     </div>
//   )
// }

// export default Body;



//--------------------------------------------------------------------------------------


//we have to show card in body and to show profiles in card we need to fetch profiles from github first
//to fetch a profile we need to create a separate function for this

// function generateProfile(){

//   const response=fetch("https://api.github.com/users?per_page=10"); 
//     //this will return promise,because it's async task so we can't write function like this
// }
//   function Body(){

//     const [profile,setProfile]=useState([]);

//    async function generateProfile(){

//   const response= await fetch("https://api.github.com/users?per_page=10"); 
//   //this will give me data but now i've to convert it into json and it's also an async task
//   const data= await response.json();
//   setProfile(data);
//     }

//     //now i need to call this function as well then only the code inside this function will execute
//     // generateProfile();   //this will run the entire code infinite times
//             //this will call generateProfile(); then, inside it we have setProfile(data);
//             // which will make the value of profile as whatever data is passed,then 
//             // setProfile(data); will call the main function Body()

//      useEffect(()=>{
//         generateProfile();
//   },[]);    //as it has [] this function will be executed only one time (i.e initially)     
  
//   return(
//     //here i have to return cards displaying profile of 10 people
//     // i know 'profile' have data now ==>  const [profile,setProfile]=useState([]);  
                        
//     <div className="profile">
//         {/* now i need to take the object in 'profile'(it is storing data in json) one by one */}
//         {/* for that i need to use arr.map */}
//       {
//         profile.map((value)=>{
//           return  (<div key={value.id} className="cards">
//                 <img src={value.avatar_url}></img>
//                 <h2>{value.login}</h2>
//                 <a href={value.html_url} target="blank">Profile</a>
//             </div>)
//         })
//       }        // we used return in profile.map(()=>) because ()=> is a callback function
//     </div>     //if you write in single line no need of writing return but if you write
//   )            //multiple line of code inside callback fn then you have to use return
// }
              // profile.map((value)=>{ is a js code so JSX will only understand if you
              //put it inside {} that's why   <div className="profile">{js code} </div>                

// export default Body;

//--------------------------------------------------------------------------------

// Normal Method


//   function Body(){

//    const profile=[];
//    console.log("hello");

//    async function generateProfile(){
//         const response= await fetch("https://api.github.com/users?per_page=10"); 
//         const data= await response.json();
//         profile=data;
//    }
// generateProfile();

// But this will show you nothing in display because since generateProfile(); is async fun
//  the return will run first and when data came inside profile the main function(i.e Body) 
// you are not rendering again that's why we use usestate() where we call setProfile(data);
