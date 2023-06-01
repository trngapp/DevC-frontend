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

    const [sub,setsub]=useState(false);
    const [done,setdone]=useState(false);
    const [error,seterror]=useState(false);
    const [errorMessage,seterrorMessage]=useState("");

    useEffect(()=>{
        //const values={email:'tarang@gmail.com'};
        //const params = new url.URLSearchParams(values);

       // console.log(state.To);
       // console.log(state.From);
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
                <img alt="img" src={Logo} width="80" height="60"></img>
            <Typography style={{fontWeight:"bold",fontFamily:"sans-serif",fontSize:"27px"}}>{Otype}</Typography>

          <Typography style={{fontSize:"14px",fontFamily:"sans-serif"}}>{projectname}. Bangaluru Urban,Karnataka,India</Typography>
          <br/>
          <ApartmentIcon style={{display:"inline"}}/><Typography style={{fontSize:"17px",fontFamily:"sans-serif",display:"inline",color:"#585858"}}>10,001+ employees · IT Services and IT Consulting</Typography>

          <br/>
        <LandscapeIcon style={{display:"inline"}}/>  <Typography style={{fontSize:"17px",fontFamily:"sans-serif",color:"#585858",display:"inline",textTransform:"uppercase"}}>{expertise}</Typography>
<br/>
      <RadarIcon style={{display:"inline",color:"green"}}/>  <Typography style={{fontSize:"17px",fontFamily:"sans-serif",display:"inline",color:"black"}}>Actively Recruiting</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{checked?<Button  variant="contained" onClick={submit} style={{display:"inline"}}>Apply</Button>:<Button  variant="contained"  disabled style={{display:"inline"}}>Apply</Button>}&nbsp;&nbsp;&nbsp;<Button  variant="primary"  onClick={handleShow} style={{display:"inline",backgroundColor:"green",color:"white"}}>Agreement</Button>

        <Modal show={show} onHide={handleClose} sx={{width:{lg:"170px",xs:"30px"}}}>
                                          <Modal.Header closeButton>
                                                <Modal.Title>Agreement</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body>E. Project Planning Meetings
After both parties have signed this Agreement, the parties shall meet at
COMPANY or a mutually convenient location and at a mutually convenient date
and time to discuss project planning. The parties shall endeavor to hold this
meeting within one week after both parties have signed this Agreement.
F. Submission To Index Sites
At the time that DEVELOPER conducts the first “walk through” of COMPANY’s
final Web Site, DEVELOPER will register COMPANY’s URL with the
following search engines: Yahoo, Infoseek, Alta Vista, Web Crawler and Excite!.
DEVELOPER will supply a list of other sites (up to 50 sites) with which
COMPANY may also choose to register.
G. Delivery of Deliverables
Upon COMPANY’s approval of its final Web Site, or upon termination of this
Agreement, whichever occurs earlier, DEVELOPER shall deliver to COMPANY
all Code, Documentation, reports and other materials developed by DEVELOPER
in the course of its performance under this Agreement and any other items
reasonably necessary for the operation of COMPANY’s Wet) Site (other than
third party operating system software, third party networking software, Web
Browsers and hardware) and all changes and enhancements thereto (the
“Deliverables”). Documentation shall be delivered in printed format and in
electronic format. Code shall be delivered in electronic format. The transfer of
electronic materials shall be accomplished by copying them to floppy disks, 100
megabyte ZIP cartridges or via File Transfer Protocol (“FTP”). Files will be
provided in HTML format, standard word processing Text format or, if images, as </Modal.Body>
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

<Typography style={{fontSize:"20px",fontFamily:"sans-serif",display:"inline",color:"black"}}>About the project</Typography>
<br/>
<br/>
<img alt="img" src={Logo} width="80" height="60" style={{display:"inline"}}/>&nbsp; &nbsp; <Typography style={{fontSize:"20px",fontFamily:"sans-serif",display:"inline"}}>Lenovo</Typography>
<br/>
<br/>
<Typography style={{fontFamily:"sans-serif"}}>
    {desc}
    <br/>
    <br/>
    <br/>
Information Technology & Services  1,001-5,000 employees  2,987 on LinkedIn
Comviva is changing the world through digital experiences. Our innovative portfolio of digital solutions and platforms brings greater choice, faster time to market and flexibility, to better meet the evolving needs of our customers as they drive growth, transform and bring efficiency. From maximizing customer lifetime value to enabling large-scale digital transformation, we partner globally with organizations in the communications and financial industry to solve problems fast and transform for tomorrow.
Comviva solutions have been deployed by over 130 Communication Services Providers and Financial Institutions in more than 90 countries and have delivered the benefits of digital and mobility to billions of people around the world.
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