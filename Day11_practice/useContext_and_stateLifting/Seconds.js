import Third from "./Third";
export default function Second(){
    return(
        <>
        <h1>This is child of App()</h1>
        <Third />
        </>
    )
}


// import Third from "./Third";
// export default function Second({count,setCount}){
//     return(
//         <>
//         <h1>This is child of App()</h1>
//         <Third count={count} setCount={setCount}/>
//         </>
//     )
// }