import React, { useContext, useState } from 'react'
import {Navigate} from "react-router-dom"
import { AuthContext } from '../Contexts/AuthContext'
// 
 
export const Login=()=> {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const {login,isAuth} = useContext(AuthContext)
//const navigate=useNavigate()
    const handelLogin=()=>{
        const loginData={email,password}
        fetch(`https://reqres.in/api/login`,{
          method:"POST",
          headers:{

            "Content-Type": "application/json" ,
          },
          body:JSON.stringify(loginData)
        }).then((res)=>res.json())
        .then((json)=>{
            console.log(json.token)
           login(json.token)

           //navigate("/")
        }) 
        .catch((err)=>console.log(err))
        
    }
    
    if(isAuth){
       return <Navigate to="/"/>
    }
   
  return (
    <div>
        <input type='email'  onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handelLogin}>Login</button>
        <p>"email": "eve.holt@reqres.in"</p><br/>
    <p>"password": "cityslicka"</p>
    </div>
  )
}

