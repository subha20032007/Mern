 const TodoItem=({key,title,status,handelToggle})=>{
    return(
      <>
      <div key={key}>{title} - {status ? "Completed" : "Not Completed"}</div>
      <button onClick={handelToggle(key)}>Toggle</button>
</>
    )
  }
  export default TodoItem;