
import {NavLink} from "react-router-dom"
const Links=[{path:"/",title:"Home"},
             {path:"/contact",title:"Contact"},
             {path:"/login",title:"Login"},
             {path:"/about",title:"About"},
             {path:"/product",title:"Product"},
              {path:"/register",title:"Register"},
          
            ]
          
export const Navbar=()=>{
const Active={textDecoration:"none",color:"ORANGE"}
const NotActive={textDecoration:"none",color:"GREEN"}
return(
    <>
     <div style={{display:'flex',justifyContent:"space-around",margin:"20px"}}>
        {Links.map((el)=>(
            <NavLink style={({isActive})=>{
            return  isActive? Active:NotActive
            }} to={el.path}>{el.title}</NavLink>
           
        ))}
       
        </div>
    </>
)
}