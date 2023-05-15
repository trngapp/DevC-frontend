import React, {useState,useContext} from 'react'
import {Modal} from "react-bootstrap"
import Button from '@mui/material/Button';
import logo from "./success.png"
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
//import "react-bootstrap"
import "bootstrap"
import { styled } from '@mui/material/styles';
import {InfoContext} from "./context.js"
//import {fontStyle} from '@mui/system';
function Info({handle}) {
    //const [show, setShow] = useState(true);
    const {open,setopen} = useContext(InfoContext);
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
                                          <b>Keep the description clear and ellaborative</b>

                                      </li>
                                      <li>
                                         <b>Fill details carefully</b>
                                      </li>
                                      <li>
                                         <b> Don't mention any social medial handles in description, once caught doing it your account will be deactivated</b>
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