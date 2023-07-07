import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { useState } from 'react';


export function Todo(){
    const [todos,setTodo]=useState([])
//1
  const handelAdd=(text)=>{
       let newItem={
        id:Math.random()+Math.random(),
        title:text,
        status:false
       }
       const addItem=[...todos,newItem]
       setTodo(addItem)
    
  }
const handelToggle=(id)=>{
   const toggleId=id
  const AfterUpdateTodo= todos.map((todo)=>
    toggleId===todo.id?{...todo,status:!todo.status}:todo
   )
setTodo(AfterUpdateTodo)
}
  return (
   <>

   
     <AddTodo handelAdd={handelAdd}/>
    
    {todos.map((el,i)=>(
     
      <TodoItem
      id={el.id}
        title={el.title}
        status={el.status}
        handelToggle={handelToggle}
      />

    ))}
</>
  );
}