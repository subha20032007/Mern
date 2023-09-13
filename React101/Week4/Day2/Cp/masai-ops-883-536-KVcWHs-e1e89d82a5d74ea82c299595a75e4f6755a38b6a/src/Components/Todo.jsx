import {useState,useEffect} from "react"
import { TodoInput } from "./TodoInput";
import { GetData, PostData } from "./api";
export const Todos = () => {
  const [todos,setTodos]=useState([])

 
  const FetchAndUpdateData=()=>{
 GetData().then((res)=>setTodos(res.data))
 .catch((err)=>console.log(err))
  }

  const handelTodo=(value)=>{
    console.log(value)
    PostData(value)
    .then((res)=>FetchAndUpdateData())
   
   
  }
  useEffect(()=>{
    FetchAndUpdateData()
  },[])
  return (
    <div>
   <TodoInput handelTodo={handelTodo}/>
    {
      todos.map((el)=>(
        <div key={el.id} data-testid="todos-wrapper">
        <h1>{el.title}-{el.status?"True":"False"}</h1>
        </div>
      ))
    }
    </div>
  );
};

