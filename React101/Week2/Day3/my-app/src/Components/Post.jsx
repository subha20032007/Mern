
import { useEffect, useState } from "react"
import { PostItem } from "./PostItem"

const getPost=(url)=>{
    return fetch(url).then((res)=>res.json()).catch(err=>err)
}

export const Posts=()=>{
const [Posts,setPosts]=useState([])
const [loading,setLoading]=useState(false)
const [err,setErr]=useState(false)
const [Page,setPage]=useState(1)

const updatePage=(val)=>{
setPage(prev=>prev+val)
console.log(Page)
}
useEffect(()=>{
    fetchAndUpdateData(Page)
},[Page])

const fetchAndUpdateData=async(Page)=>{
  
    try{
        setLoading(true)
const data=await getPost(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${Page}`)
setPosts(data)
setLoading(false)
console.dir(Posts)
    }catch(err){
        setLoading(true)
console.log('Error come in Your Code')
setLoading(false)
setErr(true)
    }
}
if(loading){
    return <h1>Loading .....</h1>
}
if(err){
    return <h1>Something Went Wrong Please Refresh</h1>
}
    return(
        <div>
            {/* <button onClick={fetchAndUpdateData}>Get Post</button> */}
           {
             Posts.map((post)=>
                <PostItem key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}

                />
             ) 
            }
            <button   disabled={Page===1} onClick={()=>updatePage(-1)}>Previous</button>
            <button disabled>{Page}</button>
            <button onClick={()=>updatePage(1)}>Next</button>
        </div>
    )
}