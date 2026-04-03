export default function Increment({count,setCount}){

    return(
        <>
        <h1>The count is: {count}</h1>
         <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )   
}