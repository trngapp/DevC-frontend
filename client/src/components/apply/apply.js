import React from 'react'
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



function request() {

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [checked, setChecked] = React.useState(true);

      const handleChange = (event) => {
            setChecked(event.target.checked);
          };


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
                              <h2 id='Heading'>APPLY HERE!!</h2>


                              <div class="text-center">
                                    <img alt="" src="https://i.imgur.com/bDLhJiP.jpg" width="100" class="rounded-circle"></img>
                              </div>

                              <div class="text-center mt-3">
                                    <span class="bg-secondary p-1 px-4 rounded text-white">Leader</span>
                                    <h5 class="mt-2 mb-0">Alexender Schidmt</h5>
                                    <span>UI/UX Designer</span>

                                    <div class="px-4 mt-1">
                                          <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                                    </div>




                              </div>




                        </div>

                        <div class="card_desc">
                              <Box
                                    sx={{
                                          width: 'auto',
                                          height: 'auto',
                                          p: 2,
                                          backgroundColor: 'primary.dark',
                                          '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                          },
                                    }}
                              >
                                    SAMPLE TEXT------------ The school fair is right around the corner,
                                    and tickets have just gone on sale. We are selling a limited number of tickets at a discount,
                                    so move fast and get yours while they are still available.
                                    This is going to be an event you will not want to miss!
                                    First off, the school fair is a great value when compared with other forms of entertainment.
                                    Also, your ticket purchase will help our school, and when you help the school,
                                    it helps the entire community.
                                    But that’s not all! Every ticket you purchase enters you in a drawing to win fabulous prizes.
                                    And don’t forget, you will have mountains of fun because there are acres and acres of great rides,
                                    fun games, and entertaining attractions! Spend time with your family and friends at our school fair.
                                    Buy your tickets now!
                                    The school fair is right around the corner, and tickets have just gone on sale.
                                    Even though you may be busy, you will still want to reserve just one day out of an entire year to relax and have fun with us.
                                    Even if you don’t have much money, you don’t have to worry.
                                    A school fair is a community event, and therefore prices are kept low.
                                    Perhaps, you are still not convinced. Maybe you feel you are too old for fairs,
                                    or you just don’t like them.
                                    Well, that’s what my grandfather thought,
                                    but he came to last year’s school fair and had this to say about it: “I had the best time of my life!”
                                    While it’s true that you may be able to think of a reason not to come,
                                    I’m also sure that you can think of several reasons why you must come.
                                    We look forward to seeing you at the school fair!
                                    SAMPLE TEXT------------------------\\



                              </Box>
                              <br />
                              <div className='Agreement'>
                                    <center>
                                          <Button className='agredes' variant="contained" onClick={handleOpen}>Agreement</Button>
                                    </center>
                                    <Modal
                                          open={open}
                                          onClose={handleClose}
                                          aria-labelledby="modal-modal-title"
                                          aria-describedby="modal-modal-description"
                                    >

                                          <Box sx={style}>

                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                      Agreement
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 ,width:{xs:'auto',md:'auto'},height:{xs:'auto',md:'auto'}}}>
                                                      This Employment Agreement i.e. terms and conditions of employment is a contract for use when an Indian business hires a new employee. It can be used for a range of different employment types, including full time, part-time and fixed term.

                                                      This Agreement sets out all of the terms of employment, including job duties, salary and benefits, work hours, confidentiality, annual leave and various other key terms.

                                                      In many cases, once an employer chooses to take on a new employee, the parties want to get started without delay. Therefore, the employer may wish to provide the employee with a letter that spells out some of the key terms more briefly. Employers may wish to use an Offer Letter for Employment in these situations and then follow it up with this Employment Agreement.

                                                      However, this Employment Agreement goes into more detail about the various terms of employment and provides a more robust document so that both the employer and the employee fully understand what is expected of one another, and how the employment arrangement may develop over time (for example, by providing details of bonuses and pay increases).

                                                      This Employment Agreement is not suitable for use by contractors. Instead, contractors should use the Service Agreement.

                                                      The Consultancy Agreement can be used when availing the services of the Consultant or independent contractor by an individual or a business entity. For more information on the difference between these two agreements, please check our guide: What is the difference between an Employee and an Independent Contractor?
                                                </Typography>


                                                <Checkbox
                                                      checked={checked}
                                                      onChange={handleChange}
                                                 
                                                /><label>Do you agree with this agreement ?</label>


                                          </Box>
                                    </Modal>
                              </div>
                              <br />

                        </div>




                  </Card>
            </center>
      )
}


export default request