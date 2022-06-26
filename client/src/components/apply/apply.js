import React from 'react'
import { useState } from 'react';
import { Card, Grid, Icon, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { Modal } from "react-bootstrap"
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';



function request() {


      const [checked, setChecked] = React.useState(false);
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);




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




      return (
            <center>
                  <Card sx={{
                        width: { xs: '100%', md: 1100 },
                        backgroundColor: "#F5F5F5",

                  }


                  } >

                        <div>
                              <h2 id='Heading'>APPLY HERE!!</h2>
                              <div class="text-center">
                                    <img alt="" src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"></img>
                              </div>

                              <div class="text-center mt-3">
                                    <span class="bg-secondary p-1 px-4 rounded text-white">Leader</span>
                                    <h5 class="mt-2 mb-0">Alexender Schidmt</h5>
                                    <br />
                                    <h4 id='Pname'>Sample Heading</h4>
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
                                                      id="PType"
                                                      label="Project Type"
                                                      defaultValue="Web-Development"
                                                      variant="standard"
                                                />
                                          </Grid>

                                          <Grid item xs={2} md={4}>
                                                <TextField
                                                      id="OType"
                                                      label="Opening Type"
                                                      defaultValue="Front-End"
                                                      variant="standard"
                                                />

                                          </Grid>

                                          <Grid item xs={2} md={4}>
                                                <TextField
                                                      id="OExpert"
                                                      label="Opening Expertise"
                                                      defaultValue="Intermediate"
                                                      variant="standard"
                                                />

                                          </Grid>
                                    </Grid>
                                    <br />
                                    <Grid item xs={12}>
                                          <Typography variant="body2" align='justify'>
                                                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                                quasi quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                                quasi quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                                quasi quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                                quasi quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                                quasi quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                                quasi quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                                quasi quidem quibusdam.
                                          </Typography>



                                    </Grid>
                              </Box>
                              <br />
                              <div className='Agreement'>
                                    <div>
                                          <Button variant="primary" onClick={handleShow} sx={{backgroundColor:"#C81132"}}>
                                                Agreement
                                          </Button>
                                          {checked === true ? <CheckCircleIcon sx={{ color: "green" }} /> : null }
                                    </div>

                                    <Modal show={show} onHide={handleClose}>
                                          <Modal.Header closeButton>
                                                <Modal.Title>Agreement</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                          <Modal.Footer>
                                                <Checkbox
                                                      checked={checked}
                                                      onChange={() => setChecked(true)}
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
                  {checked === true ? <Button variant='contained' color='success'>APPLY</Button> : <Button variant="contained" disabled color='success'>APPLY</Button>}
                  <br />
                  <br />
            </center>
            
      )
}


export default request