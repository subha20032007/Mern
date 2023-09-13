
import {useState} from "react"
export const TodoInput=({handelTodo})=>{
    const [value,setValue]=useState("")
    const handelChange=(e)=>{
        setValue(e.target.value)
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        handelTodo({title:value,status:false})
        setValue("")
    }
    return(
        <>
<input data-testid="todo-input" placeholder="Add Your Plan" onChange={handelChange}/>


<button data-testid="add-button" onClick={handelSubmit}>Add Todo</button>
        </>
    )
}