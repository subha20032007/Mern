import { useState } from "react"

function Counter(){
const [count,setCount]=useState(0)
const handelAdd=()=>{
setCount(count+1)
}
const handelSub=()=>{
    setCount(count-1) 
}
const handelDub=()=>{
    setCount(count*2)
    
}
    return(
        <>
        <h2 data-testid ="counter-header">Counter</h2>
        <h3 data-testid ="count">{count}</h3>
        <button data-testid ="add-btn" onClick={handelAdd}>+</button>
        <button data-testid ="subtract-btn" onClick={handelSub}>-</button>
        <button data-testid ="double-btn" onClick={handelDub}>Double</button>
        </>
    )
}
export default Counter