import React, {useState,useContext} from 'react'
import {Modal} from "react-bootstrap"
import Button from '@mui/material/Button';
//import logo from "./success.png"
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
//import "react-bootstrap"
import "bootstrap"
import { styled } from '@mui/material/styles';
import {ProfileContext} from "./profContext.js"
//import {fontStyle} from '@mui/system';
function Info({firstName,lastName,bio,job,logo}) {
   // const [show, setShow] = useState();

const {open,setopen,first,last,email,linkedin,twitter,skill,github}=useContext(ProfileContext);

    const handleClose = () =>{

     setopen(false);

    }
    const handleShow = () => setopen(true);

    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)",
        //backgroundColor: "#1C4774",
        '&:hover': {
        // backgroundColor:  "#1C4774",
        background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)"
       },
      }));
    return (
        <>


            {/*<Button variant="primary"
                onClick={handleShow}>
                modal
    </Button>*/}



<Modal show={open}
                onHide={handleClose}
                size='lg'
                centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div class="container">
                        <div class="row"></div>
                        <div class="row ">
                            <div class="col">
                          <center>  <PlaylistAddCheckCircleIcon sx={{width:"60px",height:"60px",color:"#00BFFF"}}/> </center>

                                <br/>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <center>
                                    <h1 style={
                                        {
                                            fontStyle: "Franklin Gothic Medium",
                                            fontWeight: "normal"
                                        }
                                    }>

                                     <ol style={{textAlign:"left",fontFamily:"sans-serif",fontSize:"27px"}}>
                                      <li>
                                          <b>{first}{last}</b>

                                      </li>
                                      <li>
                                         <b>{email}</b>
                                      </li>
                                      <li>
                                         <b> {skill}</b>
                                      </li>
                                      <li>
                                         <b> {linkedin}</b>
                                      </li>
                                      <li>
                                         <b> {twitter}</b>
                                      </li>

                                      <li>
                                         <b> {github}</b>
                                      </li>

                                     </ol>





                                    </h1>
                                </center>
                            </div>
                        </div>


                    </div>


                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    )
}

export default Info;