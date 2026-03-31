import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";


//---------------------------------------------------------------------------------------

// function Passwordgenerator(){
//     const [password,setPassword]=useState(" ");
//     const [length,setLength]=useState(10);
//     const [number,setNumber]=useState(false);
//     const [character,setCharacter]=useState(false);
     
//     function generatepassword(){   
// // we know code inside function is not executed until it is called till then only memory is allocated 
//         let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         if(number){
//            str+="0123456789";
//         }
//         if(character){
//             str+="~!@#$%^&*(){}";
//         }
//         let newPassword="";
//         for(let i=0;i<length;i++){
//         newPassword+=str[Math.floor(Math.random()*str.length)];
// // this part will only return the index [Math.floor(Math.random()*str.length)]
// //and str[Math.floor(Math.random()*str.length)];-->(str[x]) is one letter 
// //in order to generate password of length that you have moved on slider 
// // let newPassword="";        for(let i=0;i<length;i++){         newPassword+=str[Math.floor(Math.random()*str.length)];}
//         }
//         setPassword(newPassword);
//     }
//     useEffect(()=>{
//         generatepassword();   
//     },[length,number,character]);
    
//      //if you use like this it goes into infinite loop because when you call  generatepassword(); 
//      // the code inside it will be execute and then setPassword(newPassword); will call function Passwordgenerator(){
//      // now it will start executing the code inside it again it reaches  generatepassword(); 
//      //if you want the it should only execute when length is changed or number or character is checked
//      //then use useEffect
//     return(
//         <div>
//              <h3>your password is: {password}</h3>
//              <input type="range" min={5} max={50} onChange={(e)=>setLength(Number(e.target.value))}></input>
// {/* onChange={(e)=>setLength(Number(e.target.value))*/}  
//  {/* e has all the information stored about event when button is clicked or slider is moved */}
//  {/* e.target.value  e.target is element which triggred the even(here it is slider*/}
//  {/* when you move the slider length will change e.target.value will give you length value*/}
//  {/* but the value is in string so you need to convert to number */}
//              <label>length({length})</label>
//              <input type="checkbox" defaultChecked={number} onClick={()=>setNumber(!number)}></input>
// {/* defaultChecked is used to set the initial (default) state of a checkbox or radio input. */}
//              <label>Number</label>
//              <input type="checkbox" defaultChecked={number} onClick={()=>setCharacter(!character)}></input>
//              <label>Character</label>
//         </div>
//     )
// }


//-----------------------------------------------------------------------------------------

function Passwordgenerator(){

 const [password,setPassword]=useState("");
 const [length,setLength]=useState(0);
//  const [text,setText]=useState("");
 const [number,setNumber]=useState(false)
 const [character,setCharacter]=useState(false);

 function generatepassword(){
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newPassword=" ";
        if(number){
        str+="0123456789"
         }
         if(character){
            str+="~!@#$%^&*()_+}{";
         }
        for(let i=0;i<length;i++){
        newPassword+=str[Math.floor(Math.random()*str.length)];
    }

    setPassword(newPassword);
 }
 useEffect(()=>generatepassword(),[length,number,character]);
 
    return(
        <div className="second">
            <h3>your password is:</h3>
            <p>{password}</p>
            <input type="range" min={5} max={50} onChange={(e)=>setLength(Number(e.target.value))}></input>
            <label>length({length})</label>
            <input type="checkbox" defaultChecked={number} onClick={()=>setNumber(!number)}></input>
            <label>Number</label>
            <input type="checkbox" defaultChecked={false} onClick={()=>setCharacter(!character)}></input>
            <label>Character</label>
            {/* <input type="textarea" min={10} max={100} style={{height:"300px",width:"300px",display:"block"}}onChange={(e)=>setText(e.target.value)}></input>
            <label>{text}</label> */}
        </div>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<Passwordgenerator/>);