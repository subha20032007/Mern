 const TodoItem=({id,title,status,handelToggle,handelDelete})=>{
  //console.dir(id+"*")
    return(
      <>
      <div key={id}>{title} - {status ? "Completed" : "Not Completed"}</div>
      <button onClick={()=>handelToggle(id)}>Toggle</button>
      <button onClick={()=>handelDelete(id)}>Delete</button>
</>
    )
  }
  export default TodoItem;