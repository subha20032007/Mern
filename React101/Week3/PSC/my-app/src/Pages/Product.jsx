import React from 'react'
import {useState,useEffect} from "react"
import {Link,useSearchParams } from "react-router-dom"
const getData=async (url)=>{
   try{
    const res= await fetch(url)
    const data=await res.json()
    return {totalCount:res.headers.get(`X-Total-Count`),data}
   }catch(err){
    console.log(err)
   }
}
const getNumber=(page)=>{
  page=+page;
  if(typeof(page)!=="number"||page<=0|!page){
page=1
  }
 
  return page;
}
export const Product =()=> {
  const [products,setProduct]=useState([])
  const [loading,setLoading]=useState(false)
  const [isErr,setErr]=useState(false)
 const [searchParams,setSearchParams]=useSearchParams()
 const [page,setPage]=useState(getNumber(searchParams.get("page"))||1)
 const [totalPage,setTotalPage]=useState(0)
 const [orderby,setOrderby]=useState("")
  const [filterby,setFilterby]=useState("")
 const limit=2
const sort="price"
  const fetchAndUpdateData=async(page)=>{

  let url;
  if(orderby){
    url=`http://localhost:3001/data?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${orderby}`
  }else if(filterby){
    url=`http://localhost:3001/data?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${orderby}&category=${filterby}`
  } else{
    url=`http://localhost:3001/data?_page=${page}&_limit=${limit}`
  }
      try{
        setLoading(true)
         const {totalCount,data}=await getData(url)
   const total=Math.ceil(totalCount/limit)
    setTotalPage(total)
         console.log(data)
         setProduct(data)
         setLoading(false)
      }catch(err){
       setLoading(true)
console.log(err)
setLoading(false)
   setErr(true)

  }
 
 }
 const upDatePage=(val)=>{
  const pageData=page+val
setPage(pageData)
 }
useEffect(()=>{
fetchAndUpdateData(page)
},[page,orderby,filterby])

useEffect(()=>{
 
  let ParamObj={page,orderby,filterby}
  if(orderby){
  ParamObj.orderby=orderby
  }
  if(filterby){
ParamObj.filterby=filterby
  }
 setSearchParams(ParamObj)

  },[page,orderby,filterby])
//  console.log(searchParams.get("page"))
  return (
    <>{ loading?<div>  <h1>Loading....</h1></div>:isErr?<div> <h1>Something went Wrong please Refresh</h1></div>:<div>
    <button onClick={()=>setOrderby('asc')}>Order By Price Aces</button>
    <button onClick={()=>setOrderby('desc')}>Order By Price Desc</button>
     <button onClick={()=>setFilterby('electronics')}>Filter By Price Electronics</button>
    <button onClick={()=>setFilterby('jewelery')}>Filter By Price Jewelery</button>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:""}} >
    {
products?.map((el)=>(
  <div style={{margin:"2%",padding:"2%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}} key={el.id} >
  <img style={{width:"130px",height:"130px"}} src={el.image} alt={el.id}/>
  <h3> {el.title}</h3>
  <h4>{el.price}</h4>
  <Link to={`products/${el.id}`} >MORE ..</Link>
  
  </div>
))

    }
  
    </div>
  
  
  <button disabled={page===1} onClick={()=>upDatePage(-1)}>Prev</button>
  <button disabled >{page}</button>
  <button  disabled={page===totalPage} onClick={()=>upDatePage(1)}>Next </button>  
  </div> }</>
 
  )
}

