import { TodoItem } from './Components/TodoItem';
import { AddTodo } from './Components/AddTodo';
import { useState } from 'react';
export function Todo(){
    const [todo,setTodo]=useState([])
 //12345678
  const handelAdd=(text)=>{
       let newItem={
        title:text,
        status:false
       }
       const addItem=[...todo,newItem]
       setTodo(addItem)
    
  }
//   const handelToggle =(el)=>{
//     console.log(el.status)
//   }
  return (
   <>

   
     <AddTodo handelAdd={handelAdd}/>
    
    {todo.map((el,i)=>(

      <TodoItem
        key={i}
        title={el.title}
        status={el.status}
      />

    ))}
</>
  );
}