import {useState} from "react"

export function AddTodo({handelAdd}){
    const [text,setText]=useState("")
    const handelChange=(e)=>{
      setText(e.target.value)
  
    }
    const handelClick=()=>{
    handelAdd(text)
    setText("")
    }
    return (
      <>
   
    <input value={text} type="test" onChange={handelChange}/>
    <button onClick={handelClick}>ADD</button>
  
  
      </>
   
    )
  }