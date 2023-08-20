
import {useParams } from "react-router-dom"
import {useState,useEffect} from "react"

const getData=(url)=>{
    return(
fetch(url).then((res)=>res.json()).catch((err)=>err)
    )
}

export const UserPage=()=>{
    
    const[user,setUser]=useState({})
    const[loading,setLoading]=useState(false)
    const[iserr,setErr]=useState(false)
    const {user_id}=useParams()
    console.log(user_id)
    const fetchAndUpdateData=async()=>{
       
        let url=`http://localhost:3001/user/${user_id}`
        try{
            setLoading(true)
          const userData=await getData(url)
          console.log(userData)
       
       setUser(userData) 
         setLoading(false)
        }catch(err){
            setLoading(true)

setErr(true)
console.log(err)
setLoading(false)
        }
       
    }
    useEffect(()=>{
        fetchAndUpdateData()
},[])
  

    console.log(user)

    return(
        <>
          {loading?<h1>loading.....</h1>:
        iserr?<h1>404 BAD Requests.....</h1> :
    <div style={{border:"1px solid teal",marginTop:"30px",padding:"2%"}}>
           <img src={user.avatar} alt={user.first_name}/>
           <p>{user.first_name}{user.last_name}</p> 
           <p>Email : {user.email}</p> 
      </div> 
   
   
   
     }

        </>
    )
}