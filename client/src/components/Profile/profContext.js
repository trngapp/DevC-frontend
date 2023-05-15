/* eslint-disable */
import React,{createContext, useState} from "react"

export const ProfileContext= createContext();
export function ProfileProvider({children}){
    const [open ,setopen]=useState(false);
    const [first,setfirst]=useState("");
    const [last,setlast]=useState("");
    const [email,setemail]=useState("");
    const [linkedin,setlink]=useState("");
    const [twitter,settwit]=useState("");
    const [bio,setbio]=useState("");
    const [job,setjob]=useState("");
    const [skill,setskill]=useState("");
    const [github,setgit]=useState("");
    
    return (

        <>
        <ProfileContext.Provider
        value={{open,setopen,first,setfirst,last,setlast,email,setemail,linkedin,setlink,twitter,settwit,skill,setskill,github,setgit}}
        >
{children}
        </ProfileContext.Provider>
        </>
    )





}