
import { NavLink } from "react-router-dom"

export const Navbar =()=>{

    const Active={textDecoration:"none",color:"orange"}
    const NotActive={textDecoration:"none",color:"teal"}
    const Links=[ {path:"/",title:"Home"},
                  {path:"/login",title:"Login"},
                  {path:"/about",title:"About"},
                  {path:"/user",title:"User"},
                  {path:"/contact",title:"Contact"},
              
]
    return(
        <>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
         {
            Links.map(({path,title})=>(
                <NavLink style={({isActive})=>{
                    return (
                        isActive?Active:NotActive
                    )
                }} key={path} to={path}>{title}</NavLink>
            ))
         }
       
          </div>

        </>
    )
}