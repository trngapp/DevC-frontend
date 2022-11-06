import React ,{useState}from "react"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Project from "./project"
import Persona from "./info"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
const profile =()=>{
    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#C81132",

        '&:hover': {
            backgroundColor: "#C81132 ",
        },
    }));
    const [proj,setproj]=useState(false);
    const [personal,setpersonal]=useState(true);
    const [req,setreq]=useState(false);
    const Projects=()=>{
        setpersonal(false);
        setproj(true);
        setreq(false);

    }
    const Personal=()=>{
       setpersonal(true);
       setproj(false);
       setreq(false);
    }
    const Requests=()=>{
        setpersonal(false);
        setproj(false);
        setreq(true);
    }
    return (
        <>
           <Grid container style={{padding:"20px"}}>
               <Grid item lg={2} xs={12} sx={{border:"0.5px #EAEAEA solid ",height:"700px"}}>

<Grid item lg={12} xs={12} style={{height:"220px",borderBottom:"0.5px #EAEAEA  solid "}} >
<center><Avatar
        alt="Tarang"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 160, height: 160,marginTop:"12%",backgroundColor:"#64b9f9"}}
      />
      {/*<ColorButton variant="contained" className="next" style={{width:"20px",marginTop:"23px"}} >Upload</ColorButton>*/}
      <PhotoCameraIcon sx={{width:"100px"}}/>
      </center>
</Grid>
<Grid item lg={12}  xs={12} style={{height:"500px"}}>
    <br/>
<div onClick={Personal} style={{backgroundColor:personal?"#64b9f9":"white",height:"50px",borderRadius:"5px",cursor:"pointer"}}>

<PermIdentityIcon sx={{height:"20px",marginLeft:"12px",marginBottom:"4px",color:personal?"white":"black"}}/><h6 style={{padding:"15px",paddingLeft:"5px",display:"inline-block",color:personal?"white":"black"}}>Personal Info</h6>
</div>
<br/>
<div onClick={Projects}  style={{backgroundColor:proj?"#64b9f9":"white",height:"50px",borderRadius:"5px",cursor:"pointer"}}>
    <CreateNewFolderIcon sx={{height:"20px",marginLeft:"12px",marginBottom:"4px",color:proj?"white":"black"}}/>
<h6 style={{padding:"15px",paddingLeft:"5px",display:"inline-block",color:proj?"white":"black"}}>Project Created</h6>
</div>
<br/>
<div onClick={Requests} style={{backgroundColor:req?"#64b9f9":"white",height:"50px",borderRadius:"5px",cursor:"pointer"}}>
    <ListAltIcon sx={{height:"20px",marginLeft:"12px",marginBottom:"4px",color:req?"white":"black"}}/>
<h6 style={{padding:"15px",color:req?"white":"black",paddingLeft:"5px",display:"inline-block",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"}}>Requests</h6>
</div>
</Grid>
               </Grid>
               <Grid item lg={10} xs={12} sx={{border:"1px #EAEAEA solid ",height:"700px"}}>
{proj?<Project/>:null}
{personal?<Persona/>:null}
                   </Grid>
           </Grid>

        </>
    )
}
export default profile;