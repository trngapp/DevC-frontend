import React from 'react'
import { Card, Grid, Icon, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';



function request() {

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const [checked, setChecked] = React.useState(false);




      const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '60%', md: '90%' },
            bgcolor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            p: { xs: 2, md: 4 },
      };




      return (
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
                                    <h5 class="mt-2 mb-0">Alexender Schidmt</h5>
                                    <br />
                                    <h4 id='Pname'>Sample Heading</h4>
                                    <br />
                                    <Grid container spacing={{ xs: 4, md: 1 }} columns={{ xs: 6, md: 12 }}>
                                          <Grid item xs={2} md={4}  >
                                                <IconButton size='xl' sx={{color:"#0077b5"}} href="#">
                                                      <LinkedInIcon sx={{ fontSize: 40 }} />
                                                </IconButton>
                                          </Grid>

                                          <Grid item xs={2} md={4}>
                                                <IconButton size='xl' sx={{ color: "#00aced" }} href="https://www.google.com/">
                                                      <TwitterIcon sx={{ fontSize: 40 }}/>
                                                </IconButton>
                                          </Grid>

                                          <Grid item xs={2} md={4} >
                                                <IconButton  sx={{color:"#00aced"}} href="#">
                                                      <EmailIcon sx={{ fontSize: 40 }}/>
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
                                    <center>
                                          <Button className='agredes' variant="contained" onClick={handleOpen}>Agreement</Button>
                                          {checked === true ? <CheckCircleIcon sx={{ color: "green" }} /> : null}
                                    </center>
                                    <Modal
                                          open={open}
                                          onClose={handleClose}
                                          aria-labelledby="modal-modal-title"
                                          aria-describedby="modal-modal-description"
                                    >

                                          <Box sx={style}>

                                                <Typography id="modal-modal-title" variant="h6" component="h2" align='left'>
                                                      Agreement
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2, width: { xs: 'auto', md: 'auto' }, height: { xs: 'auto', md: 'auto' } }} align='justify'>
                                                      This Employment Agreement i.e. terms and conditions of employment is a contract for use when an Indian business hires a new employee. It can be used for a range of different employment types, including full time, part-time and fixed term.

                                                      This Agreement sets out all of the terms of employment, including job duties, salary and benefits, work hours, confidentiality, annual leave and various other key terms.

                                                      In many cases, once an employer chooses to take on a new employee, the parties want to get started without delay. Therefore, the employer may wish to provide the employee with a letter that spells out some of the key terms more briefly. Employers may wish to use an Offer Letter for Employment in these situations and then follow it up with this Employment Agreement.

                                                      However, this Employment Agreement goes into more detail about the various terms of employment and provides a more robust document so that both the employer and the employee fully understand what is expected of one another, and how the employment arrangement may develop over time (for example, by providing details of bonuses and pay increases).

                                                      This Employment Agreement is not suitable for use by contractors. Instead, contractors should use the Service Agreement.

                                                      The Consultancy Agreement can be used when availing the services of the Consultant or independent contractor by an individual or a business entity. For more information on the difference between these two agreements, please check our guide: What is the difference between an Employee and an Independent Contractor?
                                                </Typography>


                                                <Checkbox
                                                      checked={checked}
                                                      onChange={() => setChecked(true)}
                                                      inputProps={{ 'aria-label': 'controlled' }}
                                                      align='right'

                                                /><label>Do you agree with this agreement ?</label>


                                          </Box>
                                    </Modal>

                              </div>
                              <br />

                        </div>
                  </Card>
                  <br />
                  {checked === true ? <Button variant='contained' color='success'>APPLY</Button> : null}
            </center>
      )
}


export default request