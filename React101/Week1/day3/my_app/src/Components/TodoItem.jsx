export function TodoItem({key,title,status}){
    return(
      <div key={key}>{title} - {status ? "Completed" : "Not Completed"}</div>
    )
  }