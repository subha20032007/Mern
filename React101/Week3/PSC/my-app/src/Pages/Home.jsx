import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

export const Home=()=> {
    const {token,isAuth,logOut}=useContext(AuthContext)
  return (
    <div>

    <h1>Home</h1>

    {
        isAuth ? (<div> <h1>Token:{token}</h1>
        <button onClick={logOut}>Logout</button>
        </div>):("")
    }
    </div>
  )
}

