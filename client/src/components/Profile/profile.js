/* eslint-disable */
import React ,{useState,useContext,useEffect}from "react"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Project from "./project"
import Persona from "./info"
import Applications from "./applications"
import Request from "./request.js"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from "@mui/material/Typography";
import {AuthContext} from "../../context/AuthContext"
import {useNavigate} from "react-router-dom"
import {ProfileContext} from "./profContext.js"
import axios from "axios"
//fontFamily="Inter,sans-serif"

const profile =()=>{
    const {logout} = useContext(AuthContext);
    const {first}=useContext(ProfileContext);
    const [image,setImage]=useState("");
const navigate=useNavigate();

useEffect(()=>{
    document.title="Profile-Welcome!"
    const value=localStorage.getItem("user");
    axios.get(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/image?email=${value}`,{withCredentials:true}).then((res)=>{
      setImage(res.data[0].image);

}).catch((error)=>{
console.log(error);
})
 })


    const log=()=>{
       logout();
       navigate("/signin");

    }
    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#C81132",
        outline:"none",
color:"black",
        '&:hover': {
            backgroundColor: "#C81132 ",
            color:"black"
        },
    }));
    const CButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "white",
        color:"black",
        outline:"none",

        //outline:"none",visibility:"hidden",opacity:0,

        '&:hover': {
            backgroundColor: "#C81132",
            color:"white",

            //transition: "0.5s"
        },
        '&:focus':{
            outline:"none"

        }
    }));
    const [proj,setproj]=useState(false);
    const [personal,setpersonal]=useState(true);
    const [req,setreq]=useState(false);
    const [applied,setapplied]=useState(false);
    const [open,setopen]=useState(false);
    const Projects=()=>{
        setpersonal(false);
        setproj(true);
        setreq(false);
        setapplied(false);

    }
    const Personal=()=>{
       setpersonal(true);
       setproj(false);
       setapplied(false);
       setreq(false);
    }
    const Requests=()=>{
        setpersonal(false);
        setproj(false);
        setapplied(false);
        setreq(true);
    }
    const Applied=()=>{
        setpersonal(false);
        setproj(false);
        setreq(false);
        setapplied(true);
    }

    return (
        <>

           <Grid container style={{padding:"20px"}}>
               <Grid item lg={2} xs={12} sx={{border:"0.5px #EAEAEA solid ",height:"700px"}}>

<Grid item lg={12} xs={12} style={{height:"220px",borderBottom:"0.5px #EAEAEA  solid "}} >
<center><Avatar
        //alt={first}
        //src="/static/images/avatar/1.jpg"
        src={image}
        sx={{ width: 160, height: 160,marginTop:"12%",backgroundColor:"#64b9f9"}}
      />
      {/*<ColorButton variant="contained" className="next" style={{width:"20px",marginTop:"23px"}} >Upload</ColorButton>*/}
      <PhotoCameraIcon sx={{width:"100px"}}/>
      </center>
</Grid>
<Grid item lg={12}  xs={12} style={{height:"500px"}}>
    <br/>
<div onClick={Personal} style={{backgroundColor:personal?"#64b9f9":"white",height:"50px",borderRadius:"5px",cursor:"pointer"}}>

<PermIdentityIcon sx={{height:"20px",marginLeft:"12px",marginBottom:"4px",color:personal?"white":"black"}}/><h6 style={{padding:"15px",paddingLeft:"5px",display:"inline-block",color:personal?"white":"black",fontFamily:"Inter,sans-serif"}}>Personal Info</h6>
</div>
<br/>
<div onClick={Applied} style={{backgroundColor:applied?"#64b9f9":"white",height:"50px",borderRadius:"5px",cursor:"pointer"}}>
    <ListAltIcon sx={{height:"20px",marginLeft:"12px",marginBottom:"4px",color:applied?"white":"black"}}/>
<h6 style={{padding:"15px",color:applied?"white":"black",paddingLeft:"5px",display:"inline-block",fontFamily:"Inter,sans-serif"}}>Applied</h6>
</div>
<br/>
<div onClick={Projects}  style={{backgroundColor:proj?"#64b9f9":"white",height:"50px",borderRadius:"5px",cursor:"pointer"}}>
    <CreateNewFolderIcon sx={{height:"20px",marginLeft:"12px",marginBottom:"4px",color:proj?"white":"black"}}/>
<h6 style={{padding:"15px",paddingLeft:"5px",display:"inline-block",color:proj?"white":"black",fontFamily:"Inter,sans-serif"}}>Project Created</h6>
</div>
<br/>
<div onClick={Requests} style={{backgroundColor:req?"#64b9f9":"white",height:"50px",borderRadius:"5px",cursor:"pointer"}}>
    <ListAltIcon sx={{height:"20px",marginLeft:"12px",marginBottom:"4px",color:req?"white":"black"}}/>
<h6 style={{padding:"15px",color:req?"white":"black",paddingLeft:"5px",display:"inline-block",fontFamily:"Inter,sans-serif"}}>Requests</h6>
</div>
<br/>
<br/>
<br/>
<br/>
<center><CButton onClick={log}><LogoutIcon /><Typography><strong>Logout</strong></Typography></CButton></center>
</Grid>
               </Grid>
               <Grid item lg={10} xs={12} sx={{border:"1px #EAEAEA solid ",height:"700px",overflow:"scroll"}}>
{proj?<Project/>:null}
{personal?<Persona/>:null}
{applied? <Applications/> : null}
{req? <Request/> : null}
                   </Grid>
           </Grid>

        </>
    )
}
export default profile;