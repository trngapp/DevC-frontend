/* eslint-disable */
import React, { useState,useEffect,useContext } from "react"
import { Card, Grid, IconButton, Typography } from '@mui/material';
import Logo from "../../static/images/logo.png"
import ApartmentIcon from '@mui/icons-material/Apartment';
import Button from '@mui/material/Button';
import { SettingsBackupRestore } from "@mui/icons-material";
import { useSSRSafeId } from "@react-aria/ssr";
import {useLocation} from 'react-router-dom';
import axios from "axios"
import { Modal } from "react-bootstrap";
import Checkbox from '@mui/material/Checkbox';
import RadarIcon from '@mui/icons-material/Radar';
import LandscapeIcon from '@mui/icons-material/Landscape';
import Success from "./success.js"
import {AuthContext} from "../../context/AuthContext";
import { CircleSpinnerOverlay, FerrisWheelSpinner } from 'react-spinner-overlay'

import Error from "./error.js"
const Apply=()=>{

const {user}=useContext(AuthContext);
    const [checked, setChecked] = React.useState(false);
    const [show, setShow] = useState(false);




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const transform = (event) =>{

        if(event)
        {
              setChecked(event.target.checked)
        }
        else
        {
              setChecked(event.target);
        }

  };

    const {state} = useLocation();
    const [ logo, setLogo] = useState("");
    const [leaderemail, setLeadermail] = useState("");
    const [leadername, setLeadername] = useState("");
    const [projectname,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [Ptype,setPtype]=useState("");
     const [Otype,setOtype]=useState("");
    const [expertise,setExpertise]=useState("");
    const [number,setNumber]=useState("");
    const [workplace,setWorkplace]=useState("");

    const [sub,setsub]=useState(false);
    const [done,setdone]=useState(false);
    const [error,seterror]=useState(false);
    const [errorMessage,seterrorMessage]=useState("");


    useEffect(()=>{
        //const values={email:'tarang@gmail.com'};
        //const params = new url.URLSearchParams(values);

       // console.log(state.To);
       // console.log(state.From);
       document.title="Apply-Welcome!"
        const value=state?state.To:"";
        console.log(value);

        axios.get(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/projectinfo?email=${value}`).then((res)=>{
              console.log(res.data[0].project_type);
              setLogo(res.data[0].logo);
              setLeadermail(res.data[0].leader_email);
              setLeadername(res.data[0].leader_name);
              setName(res.data[0].project_name);
              setDesc(res.data[0].project_desc);
              setPtype(res.data[0].project_type);
              setOtype(res.data[0].opening_type);
              setWorkplace(res.data[0].workplace_type);
              setExpertise(res.data[0].opening_expertise);
              setNumber(res.data[0].opening_number);

  }).catch((error)=>{
       // console.log(error.response.data);
    setTimeout(()=>{
    //setLoading(false);
    },1000)

  })

  })
   /* const [aggrement,setagreement]=useState(false);
    const agree=()=>{
        setagreement(true);



    }*/
    const submit=()=>{
        //console.log(From);
         const value={from:user,to:state?state.To:""};
         setsub(true);
        axios.post('https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/apply',value,{withCredentials:true}).then((res)=>{

         console.log(res);
         // login(formData.email);

         setTimeout(()=>{
           //setLoading(false);
           //navigate("/");
          setsub(false);
          setdone(true);
          },3000)


        setdone(false);



        }).catch(error=>{
     console.log(error.response.data);


     setTimeout(()=>{
     //setLoading(false);
     setsub(false);
seterrorMessage(error.response.data);
     seterror(true);
     },3000)

     seterror(false);
     seterrorMessage("");

         })

   }












    return (
        <>
        { done===true? <Success/>:null}
            {error===true?<Error message={errorMessage}/>:null}
        <div style={{backgroundColor:"#F5F5F5"}}>
<br/>
<CircleSpinnerOverlay
      　　loading={sub}
       overlayColor="rgba(0,153,255,0.2)"
      />
         <Card sx={{
                        width: { xs: '100%', md: 1100 },
                        backgroundColor: "white",
                        marginLeft:"12%",




                  }
                  } >
                      <div style={{marginLeft:"15px",marginTop:"10px"}}>
               {/* <img alt="img" src={Logo} width="80" height="60"></img>*/}
               <Typography style={{fontSize:"27px",fontFamily:"sans-serif",fontWeight:"bold"}}>{projectname}</Typography>
               <br/>
            <Typography style={{fontFamily:"sans-serif",fontSize:"20px",fontWeight:"bold"}}>{Ptype}</Typography>


          <br/>
          <ApartmentIcon style={{display:"inline"}}/><Typography style={{fontFamily:"sans-serif",fontSize:"17px",display:"inline",color:"#585858",textTransform:"uppercase"}}>{workplace}</Typography>
          <br/>
          {/*<ApartmentIcon style={{display:"inline"}}/><Typography style={{fontSize:"17px",fontFamily:"sans-serif",display:"inline",color:"#585858"}}>10,001+ employees · IT Services and IT Consulting</Typography>*/}


        <LandscapeIcon style={{display:"inline"}}/>  <Typography style={{fontSize:"17px",fontFamily:"sans-serif",color:"#585858",display:"inline",textTransform:"uppercase"}}>{expertise}</Typography>
<br/>
      <RadarIcon style={{display:"inline",color:"green"}}/>  <Typography style={{fontSize:"17px",fontFamily:"sans-serif",display:"inline",color:"black"}}>Actively Recruiting</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{checked?<Button  variant="contained" onClick={submit} style={{display:"inline"}}>Apply</Button>:<Button  variant="contained"  disabled style={{display:"inline"}}>Apply</Button>}&nbsp;&nbsp;&nbsp;<Button  variant="primary"  onClick={handleShow} style={{display:"inline",backgroundColor:"green",color:"white"}}>Agreement</Button>

        <Modal show={show} onHide={handleClose} sx={{width:{lg:"170px",xs:"30px"}}}>
                                          <Modal.Header closeButton>
                                                <Modal.Title>Agreement</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>
By applying for a job on this job portal, you agree to the following terms and conditions:
<br/>
<ol>
    <li>
You agree to provide accurate and truthful information in your job application.</li>

<li>
You agree to abide by the terms and conditions of the job posting.</li>
<li>
You agree to not submit multiple job applications for the same job.</li>
<li>
You agree to not contact the hiring manager or company directly without the express permission of the job portal.</li>
<li>
You agree to not use the job portal for any illegal or prohibited purpose.</li>
<li>
You agree to indemnify and hold harmless the job portal from any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the job portal.</li>
</ol>
<br/>
This agreement is governed by the team of devcera. If any provision of this agreement is held to be invalid or unenforceable, such provision shall be struck from this agreement and the remaining provisions shall remain in full force and effect.
<br/>
By clicking below, you agree to the above terms and conditions.
 </Modal.Body>
                                          <Modal.Footer>
                                                <Checkbox
                                                      checked={checked}
                                                      onChange={transform}
                                                      inputProps={{ 'aria-label': 'controlled' }}
                                                      align='right'

                                                /><label>Do you agree with this agreement ?</label>
                                          </Modal.Footer>
                                    </Modal>
        <br/>
          <br/>
          </div>


                  </Card>
                  <br/>

                  <Card sx={{
                        width: { xs: '100%', md: 1100 },
                        backgroundColor: "white",
                        marginLeft:"12%"



                  }
                  } >

                      <div style={{marginLeft:"15px",marginTop:"10px"}}>

<Typography style={{fontSize:"20px",fontFamily:"sans-serif",display:"inline",color:"black",fontWeight:"bold"}}>About the project</Typography>
<br/>
<br/>
{/*<img alt="img" src={Logo} width="80" height="60" style={{display:"inline"}}/>&nbsp; &nbsp;*/} <Typography style={{fontSize:"20px",fontFamily:"sans-serif",display:"inline"}}>{projectname}</Typography>
<br/>
<br/>
<Typography style={{fontFamily:"sans-serif"}}>
    {desc}

</Typography>
<br/>
          <br/>
          </div>
                  </Card>
                  <br/>

<Card sx={{
      width: { xs: '100%', md: 1100 },
      backgroundColor: "white",
      marginLeft:"12%"



}
} >

    <div style={{marginLeft:"15px",marginTop:"10px"}}>

<Typography style={{fontSize:"20px",fontFamily:"sans-serif",display:"inline",color:"black",fontWeight:"bold"}}>Meet the leader</Typography>
<br/>
<br/>

<img alt="img" src="https://i.imgur.com/bDLhJiP.jpg" width="80" height="60" style={{display:"inline"}} class="rounded-circle"/>&nbsp; &nbsp; <Typography style={{fontSize:"20px",fontFamily:"sans-serif",display:"inline"}}>{leadername}</Typography>


<br/>
<br/>
</div>
</Card>
<br/>
                  </div>


        </>
    )

}
export default Apply;