
import { useState,useEffect } from 'react';
import './App.css';
import { ProductForm } from './Components/ProductForm';
import { ProductsItem } from './Components/ProductsItem';
import {Pagination} from "./Components/Pagination"
const getData=(url)=>{
  return fetch(url)
  .then(async(res)=>{
    //console.log(res.headers.get('X-Total-Count'))
   return {xTotal:+res.headers.get('X-Total-Count'),data:await res.json()}
  } )

                
}

function App() {

const[err,setErr]=useState(false)
const[loading,setLoading]=useState(false)
const [products,setProduct]=useState([])
const [page,setPage]=useState(1)
const [totalCount,setTotalCount]=useState(0)
useEffect(()=>{
  fetchAndUpdateData(page)
},[page])

const handelPagination=(val)=>{
  const pageClick=page+val
  setPage(pageClick)
}

const fetchAndUpdateData=async(page)=>{
  const url=`http://localhost:3001/products?_page=${page}&_limit=4`
  setLoading(true)
  try{
 
let res=await getData(url)
const{xTotal,data}=res
setProduct(data)
setTotalCount(xTotal)
setLoading(false)
console.log(data,"*")
console.log(xTotal,"#")
}catch(err){
  
  setErr(true)
  setLoading(false)
}
}


const handelFormSubmit=(formData)=>{
  
  setLoading(true)

fetch('http://localhost:3001/products',{
  method:"POST",
  headers:{
  "Content-Type":"application/json"
  },
  body:JSON.stringify(formData)
}).then((res)=>res.json())
.then((res)=>{
 
  fetchAndUpdateData(page)
  setLoading(false)
})
.catch((err)=>{
  console.log(err)
  setErr(true)
  setLoading(false)
})

}


console.log(products)

  return (
  loading?<h1>Loading .....</h1>:err?<h1>Something Went Wrong </h1>:  
  <div className="App">
     <ProductForm handelFormSubmit={handelFormSubmit}/>
   <br/>
   <br/>
     <div className='products'>
   
     { products.map((el,i)=>(
      <ProductsItem  key={i+el.id} 
      id={el.id}
      title={el.title}
      price={el.price}
      imgUrl={el.imgUrl}
      />
     ))
      } 
      </div>
      <br/>
      <br/>
      <div>
      <Pagination handelPagination={handelPagination}
                   page={page}
                   totalCount={totalCount}
      />
    </div>
    
</div>
  );
}

export default App;
