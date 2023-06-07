/* eslint-disable */
import React,{useEffect,useState} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loading from "../loading.js"
import { styled } from '@mui/material/styles';
import axios from "axios"

const Project=()=>{
    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "white",
       // borderColor:"#C81132",
        color:"blue", border:"3px solid blue"
,
        '&:hover': {
            backgroundColor: "white",
            border:"3px solid #C81132",
            color:"#C81132"
        },
    }));
    const [logo,setlogo]=useState("");
    const [position,setposition]=useState("");
    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [pname,setpname]=useState("");
    const [workplace,setworkplace]=useState("");
    const [desc,setdesc]=useState("");
    const [type,settype]=useState("");
    const [number,setnumber]=useState("");
    const [expertise,setexp]=useState("");

    const [load,setLoad]=useState(false);
    useEffect(()=>{

        setLoad(true);
        const value=localStorage.getItem("user");
        axios.get(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/projinfo?email=${value}`,{withCredentials:true}).then((res)=>{
            console.log(res.data);
            console.log(res.data.position);
            console.log(res);

            setposition(res.data.position);
            setemail(res.data.leader_email);
            setname(res.data.leader_name);
            setpname(res.data.project_name);
            setworkplace(res.data.workplace_type);
            setdesc(res.data.project_desc);
            settype(res.data.project_type);
            setnumber(res.data.opening_number);
            setexp(res.data.opening_expertise);



            }).catch((error)=>{
      console.log(error)

            })






























        setTimeout(()=>{
          setLoad(false);
        },1000)
    },load)
    return (
        <>
            {load?<Loading/>:
    <center>  <Grid container spacing={2} sx={{padding:{lg:"50px",xs:"5px"},width:"80%"}}>


                      <Grid item md={12} xs={12}>
                      <TextField
                          fullWidth
 label="First Name"
 defaultValue={pname}
/>
                      </Grid>
                      <Grid item md={12} xs={12}>
                      <TextField
                          fullWidth
 label="First Name"
 defaultValue={name}
/>
                          </Grid>
                          <Grid item xs={12} md={6}>

<TextField
    fullWidth
label="First Name"
defaultValue={position}
/>

</Grid>


<Grid item xs={12} md={6}>
<TextField
fullWidth
label="First Name"
defaultValue={workplace}
/>
</Grid>
<Grid item xs={12} md={6}>

<TextField
    fullWidth
label="First Name"
defaultValue={desc}
/>

</Grid>


<Grid item xs={12} md={6}>
<TextField
fullWidth
label="First Name"
defaultValue={type}
/>
</Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
 label="First Name"
 defaultValue={number}
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
 label="First Name"
 defaultValue={expertise}
/>
                          </Grid>



     </Grid>
     <ColorButton      variant="contained" className="next" >Edit</ColorButton>
     </center>}
        </>
    )
}
export default Project;