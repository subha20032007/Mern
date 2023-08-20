import { useState } from 'react';

const initialState={
    title:"",
    price:"",
    imgUrl:""
  }
export const ProductForm=({handelFormSubmit})=>{
    const[formState,setFormState]=useState(initialState)

    const handelChange=(e)=>{
        let {name,value}=e.target
        let data={...formState,[name]:value}
        setFormState(data)
    }
   const handelSubmit=(e)=>{
    handelFormSubmit(formState)
    e.preventDefault()
    setFormState(initialState)
    }
    const {title,price,imgUrl}=formState
return(
<>
<div className='Product-creation-form'>
     <h1>Add Product</h1>
      <form onSubmit={handelSubmit}>
     <lable>
      <input placeholder='Enter Product Name'
             onChange={handelChange}
              name='title'
              value={title}
      />
     </lable>
     <br/>
     <br/>
     <lable>
      <input placeholder='Enter Product Price'
 onChange={handelChange}
type='number'
value={price}
name='price'
      />
     </lable>
     <br/>
     <br/>
     <lable>
      <input placeholder='Enter Image Url'
      type='url'
 onChange={handelChange}
 name='imgUrl'
 value={imgUrl}
      />
     </lable>
     <br/>
     <br/>
     <lable>
      <input type='submit' value="CREATE PRODUCT"/>
     </lable>
     <br/>
     <br/>
      </form>
</div>
</>
)
}