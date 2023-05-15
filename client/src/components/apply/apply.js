/* eslint-disable */
import React,{useEffect,useContext} from 'react'
import { useState } from 'react';
import { Card, Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { Modal } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import axios from "axios"
import {AuthContext} from "../../context/AuthContext";
import Invalid from "../invalid/invalid";
import { CircleSpinnerOverlay, FerrisWheelSpinner } from 'react-spinner-overlay'

import Success from "./success.js"

import Error from "./error.js"
import {useLocation} from 'react-router-dom';



const request=()=>{


const {user}=useContext(AuthContext);


      const {state} = useLocation();
      //console.log(state.To);


      const [checked, setChecked] = React.useState(false);
      const [show, setShow] = useState(false);




      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);



      const [ logo, setLogo] = useState("");
      const [leaderemail, setLeadermail] = useState("");
      const [leadername, setLeadername] = useState("");
      const [projectname,setName]=useState("");
      const [desc,setDesc]=useState("");
      const [Ptype,setPtype]=useState("");
       const [Otype,setOtype]=useState("");
      const [expertise,setExpertise]=useState("");
      const [number,setNumber]=useState("");
      const [sub,setsub]=useState(false);
      const [done,setdone]=useState(false);
      const [error,seterror]=useState(false);
      const [errorMessage,seterrorMessage]=useState("");

      useEffect(()=>{
            //const values={email:'tarang@gmail.com'};
            //const params = new url.URLSearchParams(values);

           // console.log(state.To);
           // console.log(state.From);
            const value=state?state.To:"";
            console.log(value);

            axios.get(`http://localhost:3336/projectinfo?email=${value}`).then((res)=>{
                  console.log(res.data[0].project_type);
                  setLogo(res.data[0].logo);
                  setLeadermail(res.data[0].leader_email);
                  setLeadername(res.data[0].leader_name);
                  setName(res.data[0].project_name);
                  setDesc(res.data[0].project_desc);
                  setPtype(res.data[0].project_type);
                  setOtype(res.data[0].opening_type);
                  setExpertise(res.data[0].opening_expertise);
                  setNumber(res.data[0].opening_number);

      }).catch((error)=>{
           // console.log(error.response.data);
        setTimeout(()=>{
        //setLoading(false);
        },1000)

      })

      })
    const Files=(e)=>{
          e.preventDefault();
          console.log("files");
    }
    const submit=()=>{
           //console.log(From);
            const value={from:user,to:state?state.To:""};
            setsub(true);
           axios.post('http://localhost:3336/apply',value,{withCredentials:true}).then((res)=>{

            console.log(res);
            // login(formData.email);

            setTimeout(()=>{
              //setLoading(false);
              //navigate("/");
             setsub(false);
             setdone(true);
             },3000)


           setdone(false);



           }).catch(error=>{
        console.log(error.response.data);


        setTimeout(()=>{
        //setLoading(false);
        setsub(false);
seterrorMessage(error.response.data);
        seterror(true);
        },3000)

        seterror(false);
        seterrorMessage("");

            })

      }




      // const style = {
      //       position: 'absolute',
      //       top: '50%',
      //       left: '50%',
      //       transform: 'translate(-50%, -50%)',
      //       width: { xs: '60%', md: '90%' },
      //       bgcolor: 'white',
      //       border: '2px solid #000',
      //       boxShadow: 24,
      //       p: { xs: 2, md: 4 },
      // };

      const transform = (event) =>{

            if(event)
            {
                  setChecked(event.target.checked)
            }
            else
            {
                  setChecked(event.target);
            }

      };




      return (
            <>

            {/*<FerrisWheelSpinner loading={sub}　size={28} />*/}

            { done===true? <Success/>:null}
            {error===true?<Error message={errorMessage}/>:null}
            <CircleSpinnerOverlay
      　　loading={sub}
       overlayColor="rgba(0,153,255,0.2)"
      />
            <center>


                  <Card sx={{
                        width: { xs: '100%', md: 1100 },
                        backgroundColor: "#F5F5F5",

                  }


                  } >

                        <div>
                             {/* <h2 id='Heading'>APPLY HERE!!</h2>*/}
                              <div class="text-center">
                                    <img alt="" src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"></img>
                              </div>

                              <div class="text-center mt-3">
                                    <span class="bg-secondary p-1 px-4 rounded text-white">Leader</span>
                                    <h5 class="mt-2 mb-0">{leadername}</h5>
                                    <br />
                                    <h4 id='Pname'>{projectname}</h4>
                                    <br />
                                    <Grid container spacing={{ xs: 4, md: 1 }} columns={{ xs: 6, md: 12 }}>
                                          <Grid item xs={2} md={4}  >
                                                <IconButton size='xl' sx={{ color: "#0077b5" }} href="#">
                                                      <LinkedInIcon sx={{ fontSize: 40 }} />
                                                </IconButton>
                                          </Grid>

                                          <Grid item xs={2} md={4}>
                                                <IconButton size='xl' sx={{ color: "#00aced" }} href="https://www.google.com/">
                                                      <TwitterIcon sx={{ fontSize: 40 }} />
                                                </IconButton>
                                          </Grid>

                                          <Grid item xs={2} md={4} >
                                                <IconButton sx={{ color: "#00aced" }} href="#">
                                                      <EmailIcon sx={{ fontSize: 40 }} />
                                                </IconButton>
                                          </Grid>


                                          <br />
                                    </Grid>
                              </div>
                        </div>

                        <div class="card_desc">
                              <Box
                                    sx={{
                                          width: 'auto',
                                          height: 'auto',
                                          p: 3,

                                    }}
                              >
                                    <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 6, md: 12 }}>
                                          <Grid item xs={2} md={4}  >
                                                <TextField
                                                      disabled
                                                      id="PType"
                                                      label=  {Ptype}
                                                      //defaultValue="Web-Development"
                                                      variant="standard"
                                                >

                                                </TextField>
                                          </Grid>

                                          <Grid item xs={2} md={4}>
                                                <TextField
                                                      disabled
                                                      id="OType"
                                                      label=     {Otype}
                                                      //defaultValue="Front-End"
                                                      variant="standard"
                                                >

                                                </TextField>

                                          </Grid>

                                          <Grid item xs={2} md={4}>
                                                <TextField
                                                disabled
                                                      id="OExpert"
                                                      label= {expertise}
                                                      //defaultValue="Intermediate"
                                                      variant="standard"
                                                >

                                                </TextField>

                                          </Grid>
                                    </Grid>
                                    <br />
                                    <Grid item xs={12}>
                                          <Typography variant="body2" align='justify'>
                                                {desc}
                                          </Typography>



                                    </Grid>
                              </Box>
                              <br/>
                              <form onSubmit={Files}>
                                    <label>Select resume/cv (pdf)</label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                              <input type="file" id="myfile" name="myfile" accept="application/pdf" />
                              <input  style={{borderRadius:"5px",backgroundColor:"#0A66C2",color:"white",border:"none"}} type="submit" name="Upload"/>

                              </form>
                              <br />
                              <div className='Agreement'>
                                    <div>
                                          <Button variant="primary" onClick={handleShow} sx={{backgroundColor:"green",color:"white"}}>
                                                Agreement
                                          </Button>
                                          {checked === true ? <CheckCircleIcon sx={{ color: "blue" }} /> : null  }
                                    </div>

                                    <Modal show={show} onHide={handleClose}>
                                          <Modal.Header closeButton>
                                                <Modal.Title>Agreement</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                          <Modal.Footer>
                                                <Checkbox
                                                      checked={checked}
                                                      onChange={transform}
                                                      inputProps={{ 'aria-label': 'controlled' }}
                                                      align='right'

                                                /><label>Do you agree with this agreement ?</label>
                                          </Modal.Footer>
                                    </Modal>


                              </div>
                              <br />

                        </div>
                  </Card>
                  <br />
                  {checked === true ? <Button variant='contained' onClick={submit} sx={{backgroundColor:"#C81132"}}>APPLY</Button> : <Button variant="contained" disabled color='success'>APPLY</Button>}
                  <br />
                  <br />
            </center>

            </>

      )
}


export default request