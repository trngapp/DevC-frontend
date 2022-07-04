import React from "react"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {Form} from "react-bootstrap"
import Input from "./input"
import Card from "./cardError"
//import TextField from '@mui/material/TextField';

import {Link} from "react-router-dom";

const Create=()=>{
    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)",
        //backgroundColor: "#1C4774",
        '&:hover': {
        // backgroundColor:  "#1C4774",
        background: "linear-gradient(90deg, rgba(200, 17, 50, 0.8) 0%, rgba(214, 25, 0, 0.8) 50.31%, rgba(202, 0, 0, 0.8) 100%)"
       },
      }));

      const card=()=>{
          return(
<>
<div >

</div>
</>
          );
      };
    return(
        <>




<div class="container" style={{position:"relative"}}>
<div class="row">


<br/>
<br/>
<br/>
</div>
<div class="row">
{/*<h1 class="h1">Personal Information</h1>
                <br/>
    <br/>*/}
</div >
<div class="row">
<h2 class="h2">All fields are mandatory</h2>
 <br/>
                <br/>
</div>
<Form>
<div class="row">
<div class="col">
<Input type="text" label="Name" defaultvalue="Tarang Sharma">
</Input>
</div>
</div>
<div class="row">
    <div class="col">
        <Input type="text" label="email"></Input>
    </div>
</div>
<div class="row">
    <div class="col">
        <Input type="text" label="email"></Input>
    </div>
</div>
<div class="row">
    <div class="col">
        <Input type="text" label="email"></Input>
    </div>
</div>
<div class="row">
    <div class="col">
        <Input type="text" label="email"></Input>
    </div>
</div>

<div class="row">
               <div class="col">
               <br/>
                <br/>

             {/* <center> <ColorButton variant="contained" onClick={card} type="submit" >Submit</ColorButton></center>*/}
<Card/>
               </div>
               </div>
</Form>

</div >


        </>
    )
}
export default Create;

