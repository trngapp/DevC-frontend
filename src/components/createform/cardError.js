import React, {useState} from 'react'
import {Modal} from "react-bootstrap"
import Button from '@mui/material/Button';
import logo from "../../static/images/symbolwrong.png"
//import "react-bootstrap"
import "bootstrap"
import { styled } from '@mui/material/styles';
import { colors } from '@mui/material';
//import {fontStyle} from '@mui/system';
function CardError({handle}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
     <center> <ColorButton variant="contained" onClick={handleShow} type="submit" >Submit</ColorButton></center>


            <Modal show={show}
                onHide={handleClose}
                size='lg'
                centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div class="container">
                        <div class="row"></div>
                        <div class="row ">
                            <div class="col">
                                <img src={logo}
                                    width="25%"
                                    style={
                                        {marginLeft: "38%"}
                                }></img>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <center>
                                    <h4 style={
                                        {
                                            fontStyle: "Roboto",
                                            fontWeight: "normal",
                                            color:"red"

                                        }
                                    }>You Cannot Create This Project Right Now</h4>
                                </center>
                            </div>
                        </div>
                        <div class="row">
                            <center><h3>You have already Created one project which is not finished yet , please finish that to create another one!!</h3></center>
                        </div>

                    </div>


                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    )
}

export default CardError;