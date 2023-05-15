/* eslint-disable */
import React,{createContext} from "react";
import { useState } from "react";
export const InfoContext = createContext();
export function InfoProvider({children}){

         const [open,setopen]=useState(false);

    return(
        <InfoContext.Provider
          value={{
            open,setopen
          }}
        >
          {children}
        </InfoContext.Provider>
    )




    }