/* eslint-disable */
import React,{createContext} from "react";
import { useState } from "react";
export const ApplyContext = createContext();
export function ApplyProvider({children}){

         const [from,setfrom]=useState("");
         const [to,setto]=useState("");
    return(
        <ApplyContext.Provider
          value={{
            from,setfrom,to,setto
          }}
        >
          {children}
        </ApplyContext.Provider>
    )




    }