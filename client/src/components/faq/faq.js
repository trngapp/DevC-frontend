/* eslint-disable */
import React,{useEffect} from "react";
import { Box } from "@mui/material";
import DevC from "../faq/hello.png";
import {  InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card } from "@mui/material";
//import Flow from '../faq/flow.jpg'
import Heel from '../faq/heel.jpg'
import Left from '../faq/leftimage.jpg'


function FAQ() {


    useEffect(()=>{
        document.title="Faq-Welcome!"
     })

    const TextAreaWrapper = styled(Paper)({
        marginLeft: '16px',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        border: 'groove',
        backgroundColor: 'white !important',
        width: 400,

        '.Search_Input': {
            fontSize: '20px',
            padding: '0px 6px',
            width: '100%',
        },
    });
    return (

        <>
            <Box sx={{
                width: 'auto',
                height: 'auto',
                backgroundColor: "white",
            }}>
                <center>
                    <div class="row">

                        <div class="col">
                        <img src={Left} alt="faq1" style={{ width: '40vh', height: '36vh' }}>

                        </img>


                        </div>

                        <div class="col">
                        <img src={DevC} alt='faq2' style={{ width: "210px", }} />

                        <TextAreaWrapper>
                        <SearchIcon sx={{ color: 'darkgrey' }} />
                        <InputBase
                            disabled
                            className="Search_Input"
                            placeholder="Describe your issue"
                            inputProps={{
                                'aria-label': 'Search by Company Position',
                            }}
                        />
                    </TextAreaWrapper>

                        </div>

                        <div class="col">
                        <img src={Heel} alt="faq3" style={{ width: '40vh', height: '40vh' }}>
                        </img>

                        </div>
                    </div>





                </center>
                <br />


            </Box>
            <br/>
            <br/>

            <center>
            <Typography
            sx={{alignContent:'center',justifyContent:'center',fontSize:20,fontWeight: 'bold'}}>
                How can we help you?
            </Typography>
            <br/>


                <Card sx={{
                    width: '50%',
                    height: 'auto',
                    border: 2,
                    borderRadius:2,
                    borderColor:"#D3D3D3"


                }}>



                    <Accordion sx={{

                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>How many projects can I create at once?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                At a time only one project can be active , you can not create another one unless you delete the current one.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>In how many projects can I apply ? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can only have atmost 6 requests under screening at a time.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Can I create a project and also apply to another one at the same time?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               Yes, you can !!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>





                </Card>
            </center>

            <br />
            <br />

        </>


    )


}

export default FAQ