import React ,{useEffect,useContext} from "react"
import "bootstrap"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Carousel from "./carousel"
import { Link } from 'react-router-dom'
import Landing from '../../static/images/hello.jpg'
import Community from '../../static/images/hii.jpg'
import Bubbles from "../../static/images/bubbles.gif"
import Typography from "@mui/material/Typography"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"



const Home = () => {

     /*useEffect(()=>{
         const value={email:"Mukesh@gmail.com",password:"Mukesh@123"};
         axios.post('http://localhost:3336/login',value,{withCredentials:true}).then((res)=>{
             console.log(res.data);
         })

    })*/

    const {logout} = useContext(AuthContext);

    const log=()=>{
       logout();
    }


    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#C81132",

        '&:hover': {
            backgroundColor: "#C81132 ",
        },
    }));
    return (
        <>

            <div class="container">
                <button onClick={log}></button>
                <div class="row">

                    <div class="col">
                        <img src={Landing} alt="Image" style={{ width: '50vh', height: '40vh' }}>

                        </img>
                    </div>

                    <div class="col">


                    </div>

                    <div class="col">
                        <img src={Community} alt="Image" style={{ width: '70vh', height: '40vh' }}>
                        </img>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <br />
                        <br />

                        {/* <img src={Bubbles} alt="bubbles"> </img> <center> <h1>Create your own Project</h1></center>*/}

                        <center><Typography fontFamily="agrandir medium" variant="h1" fontSize={35}>CREATE YOUR OWN PROJECT</Typography></center>
                        <br />
                        <br />

                        <center><Link to="/create"><ColorButton variant="contained" className="next" type="submit">Create</ColorButton></Link></center>

                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <br />
                        <br /> <br />
                        <br />
                        <hr style={{ width: "100%", backgroundColor: "black" }}></hr>
                        <br />
                        <br />
                        {/*<center><h1>Apply to be a part of the team in some amazing projects</h1> </center>*/}

                        <center><Typography fontFamily="agrandir medium" variant="h1" fontSize={35}>APPLY IN DIFFERENT PROJECTS</Typography></center>
                        <br />
                        <br /> <br />
                        <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>Web Development</h1>
                        <Link to="/explore">  <ColorButton sx={{ marginLeft: { md: "1000px", xs: "10px" } }} variant="contained" className="next" >Explore</ColorButton></Link>
                        <br />
                        <Carousel />
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>Android Development</h1>
                        <Link to="/explore">  <ColorButton sx={{ marginLeft: { md: "1000px", xs: "10px" } }} variant="contained" className="next" >Explore</ColorButton></Link>
                        <br />
                        <Carousel />
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>ML/AI</h1>
                        <Link to="/explore">  <ColorButton sx={{ marginLeft: { md: "1000px", xs: "10px" } }} variant="contained" className="next" >Explore</ColorButton></Link>
                        <br />
                        <Carousel />
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>Data Aanalysis</h1>
                        <Link to="/explore">  <ColorButton sx={{ marginLeft: { md: "1000px", xs: "10px" } }} variant="contained" className="next" >Explore</ColorButton></Link>
                        <br />
                        <Carousel />
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>Web Security</h1>
                        <Link to="/explore">  <ColorButton sx={{ marginLeft: { md: "1000px", xs: "10px" } }} variant="contained" className="next" >Explore</ColorButton></Link>
                        <br />
                        <Carousel />
                        <hr style={{ width: "100%" }}></hr>
                        <br /> <br />
                    </div>
                </div>
            </div>




        </>
    )
}
export default Home