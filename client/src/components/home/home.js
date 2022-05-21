import React from "react"
import "bootstrap"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Carousel from "./carousel"

const Home = ()=>{
    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#C81132",

        '&:hover': {
         backgroundColor:  "#C81132 ",
       },
      }));
    return (
<>

<div class="container">
    <div class="row">

    </div>
    <div class="row">
<div class="col">
<br/>
    <br/>
    <center> <u><h5>Create your own Project</h5></u> </center>
    <br/>
    <br/>
    <center><ColorButton variant="contained" className="next" type="submit">Create</ColorButton></center>
</div>
    </div>
    <div class="row">
<div class="col">
<br/>
    <br/> <br/>
    <br/>
    <hr style={{width:"1000px"}}></hr>
    <br/>
    <br/>
   <center><u><h5>Apply to be a part of the team in some amazing projects</h5></u>  </center>
   <br/>
    <br/> <br/>
    <br/>
</div>
        </div>
        <div class="row">
<div class="col">
<h1>Web Development</h1>
<br/>
<Carousel/>
<hr style={{width:"1000px"}}></hr>
<br/> <br/>
</div>
        </div>
        <div class="row">
        <div class="col">
<h1>Android Development</h1>
<br/>
<Carousel/>
<hr style={{width:"1000px"}}></hr>
<br/> <br/>
</div>
        </div>
        <div class="row">
        <div class="col">
<h1>ML/AI</h1>
<br/>
<Carousel/>
<hr style={{width:"1000px"}}></hr>
<br/> <br/>
</div>
        </div>
        <div class="row">
        <div class="col">
<h1>Data Aanalysis</h1>
<br/>
<Carousel/>
<hr style={{width:"1000px"}}></hr>
<br/> <br/>
</div>
        </div>
        <div class="row">
        <div class="col">
<h1>Web Security</h1>
<br/>
<Carousel/>
<hr style={{width:"1000px"}}></hr>
<br/> <br/>
</div>
        </div>
</div>




</>
    )
}
export default Home