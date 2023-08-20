const { useContext } = require("react")
const { AuthContext } = require("../Contexts/AuthContext")
const { Navigate } = require("react-router-dom")


export const PrivateRoutes=({children})=>{
const {isAuth}=useContext(AuthContext)
if(!isAuth){
return <Navigate to="/login" />
}
    return(
        <>
       {children}
       </>
    )
}