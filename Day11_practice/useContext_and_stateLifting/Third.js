import Fourth from "./Fourths";
export default function Third(){
        return(
        <>
        <h1>This is child of Second()</h1>
        <Fourth />
        </>
        )
}


// import Fourth from "./Fourths";
// export default function Third({count,setCount}){
//         return(
//         <>
//         <h1>This is child of Second()</h1>
//         <Fourth count={count} setCount={setCount}/>
//         </>
//         )
// }