import { useEffect, useState } from "react"
import {Link } from "react-router-dom"

const getData=(url)=>{
    return(
fetch(url).then((res)=>res.json()).catch((err)=>err)
    )
}
export const User=()=>{

    const[user,setUser]=useState([])
    const[loading,setLoading]=useState(false)
    const[iserr,setErr]=useState(false)

    const fetchAndUpdateData=async()=>{

        let url=`http://localhost:3001/user`
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
  


    return(
        <>
        {loading?<h1>loading.....</h1>:
        iserr?<h1>404 BAD Requests.....</h1> :
        <div >
{ user.map((el)=>(
    <div style={{border:"1px solid teal",marginTop:"30px",padding:"2%"}}>
    <img src={el.avatar} alt={el.first_name}/>
    <p>{el.first_name}{el.last_name}</p>
    <Link to={`/user/${el.id}`} >more</Link>
    </div>
))       
}  
 </div>
 }
            </>
    )
}