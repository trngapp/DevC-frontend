/* eslint-disable */
import React, { createContext, useState} from "react";

//import {  useLocation } from "react-router-dom";
export const SignupContext = createContext();

export function SignupProvider({children}){
   // const { pathname } = useLocation();
  //  const [token,setToken]=useState();
//localStorage.getItem("user")


const [email,setEmail]=useState("");
const [image,setImage]=useState("");



    /*useEffect(()=>{

      var x=document.cookie.indexOf("access_token");
      if(x==-1)
      {
        setLog(false);
       // setUser(null);
        localStorage.removeItem("user");
      }
    })*/




return(
    <SignupContext.Provider
      value={{
        email,setEmail,image,setImage

      }}
    >
      {children}
    </SignupContext.Provider>
)

}


