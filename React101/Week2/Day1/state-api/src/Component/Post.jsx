import style from './Style.module.css'
import { useState } from "react"
import { PostItem}  from "./PostItem"
const getData=(url)=>{
   return fetch(url)
    .then((res)=>res.json())
    .catch((err)=>err)
}
export const Post=()=>{
    const [posts,setPost]=useState([])
    const [loading,setLoading]=useState(false)
const fetchAndUpdateData=async()=>{
    try{
        setLoading(true)
        const data=await getData(`https://jsonplaceholder.typicode.com/posts`)
setPost(data)
setLoading(false)
    }catch(err){
        setLoading(true)
      console.log(err) 
      setLoading(false)
    }
}
if(loading){
    return <h1>Loading......</h1>
}
    return(

        <>
             <button className={style.btn} onClick={fetchAndUpdateData}>GET POST</button>
             <div>
                {
                    posts.map((el)=>
                   < PostItem key={el.id}
                             title={el.title}
body={el.body}
                   />
                    )
                }
             </div>
        </>
    )
}
