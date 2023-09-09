import { useContext, useState } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import {Navigate} from "react-router-dom"

export const Login=()=>{
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const {isAuth,login,logOut}=useContext(AuthContext)
console.log(email,password)
const handelLogin=()=>{
const userData={email,password}
console.log(userData)
  fetch(`https://reqres.in/api/login`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(userData),
  })
  .then((res)=> res.json())
  .then((json)=>{
    console.log(json)
    login(json.token)
  })
  .catch((err)=>alert(err))
}
if(isAuth){
  return <Navigate to="/" />
}
return(
    <>
 <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email"/>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your Password"/>
    <button onClick={handelLogin} >Login</button>
    <p>
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
 </p>
   </>
  )
}