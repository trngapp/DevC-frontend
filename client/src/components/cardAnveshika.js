import React, {useState} from 'react'
import {Modal} from "react-bootstrap"
import Button from '@mui/material/Button';
import logo from "./success.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import MediaQuery from "react-responsive";
import {fontStyle} from '@mui/system';
import Table from "./tableAnveshika"
function CardAnv() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


           {/* <Button variant="primary"
                onClick={handleShow}>
                modal
    </Button>*/}
    <MediaQuery query="(min-width: 992px)">
    <center><Button onClick={handleShow}><FormatListNumberedIcon  /></Button></center>

    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
    <center><Button onClick={handleShow}>List of Information of all anvesikas</Button></center>
    </MediaQuery>



            <Modal show={show}
                onHide={handleClose}
                size='xl'
                centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>

<Table/>

                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    )
}

export default CardAnv;