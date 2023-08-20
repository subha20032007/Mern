import React from 'react'
import {Routes,Route} from "react-router-dom"
import {Home} from '../Pages/Home'
import {About} from '../Pages/About'
import {Contact} from '../Pages/Contact'
import {Login} from '../Pages/Login'
import {Product} from '../Pages/Product'
import {SingleProduct} from '../Pages/SingleProduct'
import {Register} from '../Pages/Register'
import {Notfound } from '../Pages/Notfound'
import {PrivateRoutes} from "./PrivateRoute"
export const AllRoutes=() =>{

  return (
    <>
    <Routes>
        <Route path="/" element={
        <PrivateRoutes>
        <Home/>
        </PrivateRoutes>
        }/>
        <Route path="/about"  element= { <PrivateRoutes><About/></PrivateRoutes>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={ <Product/>}/>
        <Route path="/product/:id" element={ <PrivateRoutes><SingleProduct/></PrivateRoutes>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Notfound/>}/>
    </Routes>
    </>

  )
}





