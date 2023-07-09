import React from "react"
import Feed from "./feed.png"
const Feedback = ()=>{

    return (
        <>
        <div style={{backgroundColor:"#f0ebf8"}}>
     <center>
         <img src={Feed} alt="Feedback" style={{borderRadius:"10px"}}/> <br/>
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNSGbSj_klnpe6uyxdkQLBlKltDw7QHXkIya4hwb_djqtlog/viewform?embedded=true" title="Feedback form" width="940" height="1526" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
     </center>
     </div>
        </>
    )
}
export default Feedback;