import Globalcontext from "./Global";
import { useContext } from "react";

export default function Fourth(){
  // const data=useContext(Globalcontext);
  const {count,setCount}=useContext(Globalcontext);
  // console.log(data);
  return(
        <>
        <h1>This is child of Third()</h1>
        <h2>The count is: {count}</h2>
        {/* <h2>printing the {data}</h2>   only use if  GlobalContext.provider is not used */}
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
        )
}





// export default function Fourth({count,setCount}){
//   return(
//         <>
//         <h1>This is child of Third()</h1>
//         <h3>The count is :{count}</h3>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
//         </>
//         )
// }
