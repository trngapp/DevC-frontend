/* eslint-disable */
import React, { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios"
import { Navigate, Outlet, useLocation } from "react-router-dom";
export const AuthContext = createContext();

export function AuthProvider({children}){
    const { pathname } = useLocation();
  //  const [token,setToken]=useState();
//localStorage.getItem("user")




    const [log,setLog]=useState(false);
    const [user,setUser]=useState(localStorage.getItem("user"));
    /*useEffect(()=>{

      var x=document.cookie.indexOf("access_token");
      if(x==-1)
      {
        setLog(false);
       // setUser(null);
        localStorage.removeItem("user");
      }
    })*/
    const login=(user)=>{

       localStorage.setItem("user",user);

       setUser(user);
       setLog(true);
       return <Navigate to="/" state={pathname} />

    }
    const logout=()=>{
        axios.get('http://localhost:3336/logout',{withCredentials:true}).then((res)=>{
        console.log("token deleted!!");
        setLog(false);
        setUser(null);
        localStorage.removeItem("user");
        
    })



    }
    const refresh=useCallback({



    })

return(
    <AuthContext.Provider
      value={{
        login,
        logout,
        log,
        user

      }}
    >
      {children}
    </AuthContext.Provider>
)

}



