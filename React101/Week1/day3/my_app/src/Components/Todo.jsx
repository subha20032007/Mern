import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { useState } from 'react';


export function Todo(){
    const [Todos,setTodo]=useState([])
//

  const handelAdd=(text)=>{
       let newItem={
        id:Date.now()+Math.random()+text,
        title:text,
        status:false
       }
       const addItem=[...Todos,newItem]
       setTodo(addItem)
   //    console.log(newItem)
    
  }
const handelToggle=(id)=>{
   const toggleId=id
  const AfterUpdateTodo= Todos.map((todo)=>
    toggleId===todo.id?{...todo,status:!todo.status}:todo
   )
  //  console.log(toggleId)
  //  console.log(AfterUpdateTodo)
setTodo(AfterUpdateTodo)
}
const handelDelete=(id)=>{
  const DeleteId=id
  const AfterDeleteTodo=Todos.filter((todo)=>
  DeleteId!==todo.id
  )
  // console.log( AfterDeleteTodo)
  setTodo(AfterDeleteTodo)
}
  return (
   <>

   
     <AddTodo handelAdd={handelAdd}/>
    
    {Todos.map((todo)=>(
     
      <TodoItem
      id={todo.id}
        title={todo.title}
        status={todo.status}
       handelToggle={handelToggle}
       handelDelete={handelDelete}
      />

    ))}
</>
  );
}