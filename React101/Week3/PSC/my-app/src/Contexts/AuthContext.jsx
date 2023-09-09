import { createContext, useState } from "react"


export const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
    const [token,setToken]=useState("")
    const [isAuth,setAuth]=useState(false)

    const login=(token)=>{
       setAuth(true)
       setToken(token)
    }
    const logOut=()=>{
        setAuth(false)
        setToken("")
    

     }
    return(
        <AuthContext.Provider value={{login,logOut,isAuth,token}}>
            {children}
        </AuthContext.Provider>
    )
}