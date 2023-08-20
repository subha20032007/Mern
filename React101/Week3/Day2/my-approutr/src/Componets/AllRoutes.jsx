
import {Routes,Route} from "react-router-dom"
import { About } from "../Page/About"
import { Contact } from "../Page/Contact"
import { Home } from "../Page/Home"
import { Login } from "../Page/Login"
import { User } from "../Page/User"

import { UserPage } from "../Page/UserPage"
export const AllRoutes=()=>{

    return(
 <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/user/:user_id" element={<UserPage/>}/>
        </Routes>
</>
      
    )


}

