import {useState} from "react"

  
 const AddTodo=({handelAdd})=>{
  let [text,setText]=useState("")
  const handelClick=()=>{
handelAdd(text)
setText("")
  }
  return(
    <>
<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder='Add Your Plan'
/>
<button onClick={handelClick}>AddTodo</button>
</>
  )
}
export default AddTodo