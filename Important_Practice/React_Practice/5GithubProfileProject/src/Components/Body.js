import React,{ useState,useEffect} from "react";

function Body(){

    //  let profile=[];
     const [profile,setProfile] = useState([]);
     const [InputNumber,SetinputNumber]=useState("10");
    //In order to create card of 10 github profile,we need 10 github profile first
    //Basically we need data of 10 github profile,and that data we can get from api request
    
  async function Githubapi(count){
         let val=Math.floor(Math.random()*10000);
         const response=await fetch(`https://api.github.com/users?since=${val}&per_page=${count}`);
         const data= await response.json();     //Now,Data will be having 15 objects(Data of 15 github profile)
        //  profile=data;    //profile will be having 15 objects(data of 15 profiles) inside Array
        setProfile(data);
    }

    useEffect(()=>{
        Githubapi();
    },[InputNumber]);
    

    return(
     <div className="main">
        <input type="number" className="inp"  placeholder="Search here"  onChange={(e)=>SetinputNumber(Number(e.target.value))}></input>
        <button onClick={()=>Githubapi(InputNumber)}>Search</button> 
        <div className="card">{
        profile.map((value)=>{
           return( <div key={value.id} className="profile">
                 <img src={value.avatar_url}></img>
                 <h3>{value.login}</h3>
                 <a href={value.html_url}>Profle</a>
            </div>)
             })
          } 
       </div>
    </div>
    );

}

export default Body;