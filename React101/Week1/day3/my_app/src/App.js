import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function Addtodo({handelAdd}){
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
function TodoItem({key,titel,status}){
  return(
    <div key={key}>{titel} - {status ? "Completed" : "Not Completed"}</div>
  )
}
function App() {
 
  const [todo,setTodo]=useState([])
 
  const handelAdd=(text)=>{
       let newItem={
        titel:text,
        status:false
       }
       const addItem=[...todo,newItem]
       setTodo(addItem)
    
  }
  const handelToggle =(el)=>{
    console.log(el.status)
  }
  return (
    
  <div className="App">
     <h1>TODO APP</h1>
     <Addtodo handelAdd={handelAdd}/>
    
    {todo.map((el,i)=>(

      <TodoItem
        key={i}
        titel={el.titel}
        status={el.status}
      />
    ))}

</div>
  );
}
//12345678910
export default App;
