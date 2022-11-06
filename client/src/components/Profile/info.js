import React, { useEffect,useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from "axios"
import Loading from "../loading.js"
const Info=()=>{
    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#C81132",

        '&:hover': {
            backgroundColor: "#C81132 ",
        },
    }));
    const [load,setLoad]=useState(false);
    const [firstName,setFirst]=useState("");
    const [lastName,setLast]=useState("");
    const [email,setEmail]=useState("");
    const [city,setCity]=useState("");
    const [skill,setSkill]=useState("");
    const [linkedin,setLinkedin]=useState("");
    const [twitter,setTwitter]=useState("");
    const [github,setGithub]=useState("");

    useEffect(()=>{
        const value=localStorage.getItem("user");
        axios.get(`http://localhost:3336/info?email=${value}`,{withCredentials:true}).then((res)=>{
        console.log(res);
        setFirst(res.data[0].first_name);
        setLast(res.data[0].last_name);
        setEmail(res.data[0].email);
        setCity(res.data[0].city);
        setSkill(res.data[0].skill);
        setLinkedin(res.data[0].linkedin);
        setTwitter(res.data[0].twitter);
        setGithub(res.data[0].github);

        setTimeout(()=>{
            setLoad(false);
          },1000)
        }).catch((error)=>{
  console.log(error)
  setTimeout(()=>{
    setLoad(false);
  },1000)
        })

        setLoad(true);

    },load)
    return (
        <>
        {load?<Loading/>:
    <center>  <Grid container spacing={2} sx={{padding:{lg:"30px",xs:"5px"},width:"80%"}}>
                      <Grid item xs={12} md={6}>

                      <TextField
                          fullWidth
                          defaultValue={firstName}
 label="First Name"
 sx={{cursor: 'pointer'}}
                      />

                      </Grid>


                      <Grid item xs={12} md={6}>
 <TextField
     fullWidth
     inputProps={
        { readOnly: true, }
    }
     defaultValue={lastName}
 label="Last Name"
 />
                      </Grid>

                      <Grid item md={12} xs={12}>
                      <TextField

                          fullWidth
                          inputProps={
                            { readOnly: true, }
                        }
                          defaultValue={email}
 label="Email"
/>
                      </Grid>
                      <Grid item md={12} xs={12}>
                      <TextField
                          fullWidth
                          inputProps={
                            { readOnly: true, }
                        }
                          defaultValue={skill}
 label="Skills"
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
                              inputProps={
                                { readOnly: true, }
                            }
                              defaultValue={city}
 label="City"
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
                              inputProps={
                                { readOnly: true, }
                            }
                              defaultValue={linkedin}
 label="Linkedin"
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
                              inputProps={
                                { readOnly: true, }
                            }
                              defaultValue={twitter}
 label="Twitter"
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
                              inputProps={
                                { readOnly: true, }
                            }
                              defaultValue={github}
 label="Github"
/>
                          </Grid>
                        {/*  <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
 label="First Name"
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
 label="First Name"
/>
        </Grid>*/}


     </Grid>
     <ColorButton      variant="contained" className="next" >Edit</ColorButton>
     </center>}
        </>
    )
}
export default Info;