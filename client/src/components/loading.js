import React from "react";
import ReactLoading from 'react-loading';
const Loading=()=>{
    return (
        <>
        <center>
<div style={{marginTop:"25%"}}><ReactLoading type="spin" color="#3292dc" height="50px" width="50px"  /> </div>
</center>
        </>
    )
}
export default Loading;