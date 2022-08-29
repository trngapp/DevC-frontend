import React from 'react'
import 'bootstrap';
import "./footer.css"
import Logo from "./symbol.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MediaQuery from "react-responsive";
function footer() {
    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <MediaQuery query="(min-width: 651px)">
<div class="container-fluid contain" >
    <div class="row">

       {/*<div class="col-xxl">

        <br/>
           <img  style={{width:"100px",marginLeft:"20%"}} src={Logo}></img>


    </div>



    */}
<div class="col">

</div>


        <div class="col-xxl">
        <br/>
           <h1 class="headings">Other links</h1>


           <h1 class="headings">Shiksha Sopan </h1>


           <h1 class="headings">IAPT</h1>


           <h1 class="headings">Vigyan Prasar</h1>


           <h1 class="headings">HC Verma</h1>


           <h1 class="headings">Anveshika</h1>


           <h1 class="headings">Nani</h1>
        </div>



        <div class="col">

        </div>
        <div class="col-xxl" >
            <br/>
        <h1 class="headings">Contact Us</h1>

           <h3 class="headings"><MailOutlineIcon style={{color:"white"}}/>&nbsp;naest@shiksha-sopan.org</h3>


           <h3 class="headings"><WhatsAppIcon style={{color:"white",textAlignLast:"right"}}/>&nbsp;Click here to join our whatsapp group</h3>


           <h3 class="headings"><LocationOnIcon style={{color:"white"}}/>12/1-3 Sopan Ashram Chakratanpur Nankari IIT Kanpur  </h3>
        </div>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        &nbsp;&nbsp;
    </div>
    <hr style={{color:"white",border: "1px solid "}}></hr>
    <div class="row">
    <br/>
           <br/>


        <center class="col">
          <FacebookIcon style={{color:"white"}}/>&nbsp;
          <LinkedInIcon style={{color:"white"}}/>&nbsp;
          <InstagramIcon style={{color:"white"}} />&nbsp;
          <YouTubeIcon style={{color:"white"}}/>&nbsp;
        </center>
    </div>
</div>

</MediaQuery>




{/**/}

<MediaQuery query="(max-width: 650px)">
<div class="container contain">
    <div class="row">
    <div class="col-xxl">

<br/>
   <img style={{width:"100px"}} src={Logo}></img>

<br/>
<br/>
</div>
    </div>
    <h1 class="headings">Other links</h1>
    <div class="row">

    <br/>
    <br/>
        <div class="col">
        <h1 class="headings">Shiksha Sopan </h1>


<h1 class="headings">IAPT</h1>


<h1 class="headings">Vigyan Prasar</h1>

        </div>
        <div class="col">
        <h1 class="headings">HC Verma</h1>


<h1 class="headings">Anveshika</h1>


<h1 class="headings">Nani</h1>
        </div>
    </div>
    <div class="row">
    <div class="col" >
            <br/>
        <h1 class="headings">Contact Us</h1>

           <h3 class="headings"><MailOutlineIcon style={{color:"white"}}/>&nbsp;naest@shiksha-sopan.org</h3>


           <h3 class="headings"><WhatsAppIcon style={{color:"white",textAlignLast:"right"}}/>&nbsp;Click here to join our whatsapp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;group</h3>


           <h3 class="headings"><LocationOnIcon style={{color:"white"}}/>12/1-3 Sopan Ashram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chakratanpur Nankari IIT Kanpur  </h3>
        </div>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        &nbsp;&nbsp;


    </div>
    <hr style={{color:"white",border: "1px solid "}}></hr>
    <div class="row">
    <br/>
           <br/>


        <center class="col">
          <FacebookIcon style={{color:"white"}}/>&nbsp;
          <LinkedInIcon style={{color:"white"}}/>&nbsp;
          <InstagramIcon style={{color:"white"}} />&nbsp;
          <YouTubeIcon style={{color:"white"}}/>&nbsp;
        </center>
    </div>
</div>

</MediaQuery>



        </>
    )
}

export default footer