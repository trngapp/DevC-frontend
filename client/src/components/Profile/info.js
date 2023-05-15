/* eslint-disable */
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
        //http://localhost:9000/.netlify/functions/api/
        //`http://localhost:3336/info?email=${value}`
        axios.get(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/info?email=${value}`,{withCredentials:true}).then((res)=>{
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
    <center>  <Grid container spacing={2} sx={{padding:{lg:"30px",xs:"5px"},width:"50%"}}>
                      <Grid item xs={12} md={6}>

                      <TextField
                          fullWidth
                          defaultValue={firstName}
 label="First Name"
 InputProps={{style: {fontSize: 20}}}
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
     InputProps={{style: {fontSize: 20}}}
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
                          InputProps={{style: {fontSize: 20}}}
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
                          InputProps={{style: {fontSize: 20}}}
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
                              InputProps={{style: {fontSize: 20}}}
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
                              InputProps={{style: {fontSize: 20}}}
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
                              InputProps={{style: {fontSize: 20}}}
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
                              InputProps={{style: {fontSize: 20}}}
 label="Github"
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
                              multiline
                              maxRows={10}
                             // defaultValue={github}
                              InputProps={{style: {fontSize: 20}}}
 label="Add Bio"
/>

                          </Grid>

                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth

                              //defaultValue={github}
                              InputProps={{style: {fontSize: 20}}}
 label="Job Profile"
/>

                          </Grid>




     </Grid>
     <ColorButton      variant="contained" className="next" >Edit</ColorButton>
     </center>}
        </>
    )
}
export default Info;