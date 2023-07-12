/* eslint-disable */
import React ,{useEffect,useContext,useState} from "react"
import "bootstrap"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Carousel from "./carousel"
import { Link } from 'react-router-dom'
import Landing from '../../static/images/hello1.jpg'
import Community from '../../static/images/hii.jpg'
//import Bubbles from "../../static/images/bubbles.gif"
import Typography from "@mui/material/Typography"
import axios from "axios"
import Grid from '@mui/material/Grid';
import {AuthContext} from "../../context/AuthContext"
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useNavigate } from "react-router-dom";
//import Loader from "./loaderUni.js"




const Home1 = () => {
    const navigate= useNavigate();
    //const [isLoading,setLoading]=useState(true);

    const handleSecurity=()=>{
//navigate('/explore',{state:{Type:"Security"}});


    }
    const handleCreate=()=>{

    }
    const handleWeb=()=>{
        //navigate('/explore',{state:{Type:"Web"}});


            }
            const handleAndroid=()=>{
                //navigate('/explore',{state:{Type:"Android"}});


                    }
                    const handleML=()=>{
                        //navigate('/explore',{state:{Type:"ML"}});


                            }
                            const handleData=()=>{
                                //navigate('/explore',{state:{Type:"Data"}});


                                    }

     /*useEffect(()=>{
         const value={email:"Mukesh@gmail.com",password:"Mukesh@123"};
         axios.post('http://localhost:3336/login',value,{withCredentials:true}).then((res)=>{
             console.log(res.data);
         })

    })*/
    useEffect(()=>{
       document.title="Home-Welcome!"

    })

    const {logout} = useContext(AuthContext);

    const log=()=>{
       logout();
    }


    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        //backgroundColor: "#C81132",
        backgroundColor:"#FF8000",

        '&:hover': {
            backgroundColor: "#FF8000 ",
        },
    }));
    return (
        <>


            <Grid container spacing={4} sx={{ padding:4 }}>
                {/*<button onClick={log}></button>*/}
                {/*<Grid item   style={{backgroundColor:"f8f9fa"}}>*/}

                <Grid item md={7} xs={12} sx={{marginTop:"100px"}}>


                <Typography  sx={{fontWeight:550,fontFamily:"Inter,sans-serif"}} variant="h1" fontSize="3rem">Finding a Project or Creating one, We got you covered</Typography>
                <br/>
                <br/>


                <Typography fontFamily="Inter,sans-serif" sx={{color:"#495057"}} variant="h2" fontSize="1.50rem"> Devcera is a place for you to Create and Collaborate , build your own team or become a part of a team or project !</Typography>

                <hr/>
<br/>
               {/* <Link to="/aboutus">  <ColorButton  variant="contained" className="next" >About Us</ColorButton></Link>*/}
                </Grid>

                    <Grid item md={5} xs={12}>

                        <img src={Landing} alt="homeimg" style={{ width: '60vh', height: '50vh',float:"right" }}>

                        </img>
                    </Grid>


                   {/* <div class="col">
                        <img src={Community} alt="home" style={{ width: '70vh', height: '40vh' }}>
                        </img>
    </div>*/}
                {/*</Grid>*/}
               {/* <hr style={{ width: "100%", backgroundColor: "blue" }}></hr>*/}



                    <Grid item md={12} xs={12}>
                        <br />
                        <br />

                        {/* <img src={Bubbles} alt="bubbles"> </img> <center> <h1>Create your own Project</h1></center>*/}
                        <center><div style={{borderRadius:"50%",height:"90px",width:"90px",backgroundColor:"#F0F8FF"}}>  <center><TipsAndUpdatesIcon sx={{width:"6vh",height:"6vh",color:"#007FFF",marginTop:"22px",marginLeft:"8px"}}/></center></div></center>
                        <br />

                        <center><Typography fontFamily="Inter,sans-serif" variant="h1" fontSize={35}>CREATE YOUR OWN TEAM</Typography></center>
                        <br />
                        <br />

                        <center><Link to="/create"><ColorButton variant="contained" className="next" type="submit">Create</ColorButton></Link></center>

                    </Grid>


                    <Grid item md={12} xs={12}>
                        <br />

                        <br />
                        <hr style={{ width: "100%", backgroundColor: "black" }}></hr>
                        <br />
                        <br />
                        {/*<center><h1>Apply to be a part of the team in some amazing projects</h1> </center>*/}

                         <center><div style={{borderRadius:"50%",height:"90px",width:"90px",backgroundColor:"#F0F8FF"}}>  <center><HandshakeIcon sx={{width:"6vh",height:"6vh",color:"#007FFF",marginTop:"22px",marginLeft:"5px"}}/></center></div></center>
                         <br/>
                        <center><Typography fontFamily="Inter,sans-serif" variant="h1" fontSize={35}>APPLY IN DIFFERENT PROJECTS</Typography></center>


                        <br />
                        <br /> <br />
                        <br />
                    </Grid>

                   <Grid item md={11} xs={12} sx={{marginLeft:{md:"50px",xs:"0px"}}}>
                        <h1 style={{fontFamily:"Inter,sans-serif"}}>Web Development</h1>
                         <br />
                    <Carousel Type="Web"/>
                    <ColorButton sx={{ /*marginLeft: { lg: "1150px", md:"700px", xs: "10px" }*/ float:"right" }} variant="contained" className="next" onClick={handleWeb}>Explore</ColorButton>

                       <br/>
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </Grid>


                    <Grid item md={11} xs={12} sx={{marginLeft:{md:"50px",xs:"0px"}}}>
                        <h1 style={{fontFamily:"Inter,sans-serif"}}>Android Development</h1>
                       <br />
                        <Carousel Type="Android"/>
                      <ColorButton sx={{ /*marginLeft: { lg: "1150px", md:"700px", xs: "10px" }*/ float:"right" }} variant="contained" className="next" onClick={handleAndroid}>Explore</ColorButton>
                       <br/>
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </Grid>


                    <Grid item md={11} xs={12} sx={{marginLeft:{md:"50px",xs:"0px"}}}>
                        <h1 style={{fontFamily:"Inter,sans-serif"}}>ML/AI</h1>
                          <br />
                        <Carousel Type="ML"/>
                         <ColorButton sx={{ /*marginLeft: { lg: "1150px", md:"700px", xs: "10px" }*/ float:"right" }} variant="contained" className="next" onClick={handleML}>Explore</ColorButton>
                       <br/>
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </Grid>


                    <Grid item md={11} xs={12} sx={{marginLeft:{md:"50px",xs:"0px"}}}>
                        <h1 style={{fontFamily:"Inter,sans-serif"}}>Data Aanalysis</h1>
                         <br />
                        <Carousel Type="Data" />
                          <ColorButton sx={{ /*marginLeft: { lg: "1150px", md:"700px", xs: "10px" }*/ float:"right" }} variant="contained" className="next"  onClick={handleData}>Explore</ColorButton>
                       <br/>
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </Grid>


                    <Grid item md={11} xs={12} sx={{marginLeft:{md:"50px",xs:"0px"}}}>
                        <h1 style={{fontFamily:"Inter,sans-serif"}}>Web Security</h1>

                        <br />
                        <Carousel Type="Security" />

                <ColorButton sx={{ /*marginLeft: { lg: "1150px", md:"700px", xs: "10px" }*/ float:"right"  }}  onClick={handleSecurity} variant="contained" className="next" >Explore</ColorButton>
                       <br/> <hr style={{ width: "100%" }}></hr>
                        <br /> <br />

                </Grid>
            </Grid>




        </>
    )
}
export default Home1