import React,{useEffect,useState} from "react"
import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import axios from "axios"
const Invalid=()=>{
    const [image,setimage]=useState("");
    useEffect(()=>{
       axios.get("http://localhost:3336/getcreate").then((res)=>{

console.log(res.data.logo.data);
          setimage(res.data.logo.data);

    }).catch((error)=>{
        console.log(error);
    })
    })
return (
    <>
    <br/>  <br/>
<br/>
<br/>
<br/>
<br/>
<img src={image}/>
<center><WrongLocationIcon sx={{height:"120px",width:"120px"}}/></center>


<center><h2 style={{fontWeight:"10px"}}>Invalid Page</h2></center>
<br/>
<br/><br/>
<br/><br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

    </>
)
}
export default Invalid