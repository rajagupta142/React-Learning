import React from "react";
import ReactDOM from "react-dom/client";



function Card(props){
    return(
    <div style={{border:"2px solid black", padding:"5px"}}>
        <img src="https://img.tatacliq.com/images/i27//437Wx649H/MP000000028370418_437Wx649H_202509172056581.jpeg" height="200px" width="200px"/>
        <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h2>Shop Now</h2>
        </div>
    </div>
    )

};

const arr=[{cloth:"T-shirt", offer:"40-80% Off"},{cloth:"Jeans", offer:"30-60% Off"},{cloth:"Kurta" , offer:"40-70% Off"},
           {cloth:"Ethnic Wear", offer:"40-80% Off"},{cloth:"Formal Wear", offer:"50-80% Off"},{cloth:"Shoes", offer:"60-80% Off"},{cloth:"Spectacles", offer:"30-80% Off"},
           {cloth:"Sports Wear",offer:"50-70% Off"},{cloth:"fancy Dress", offer:"40-80% Off"}];

function App(){
    return(  
        <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
       
        {/* // you cannot directly return without <div> or <></>
        // in jsx you have to use {} to pass js object obj.name(which must be either string,array and number)  
      { */}

       {
        arr.map((value,index)=><Card key={index} cloth={value.cloth} offer={value.offer}/>)

        //this will return an array and array,string and number is allowed and object is not.
      }
      </div>
    )
};

const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
