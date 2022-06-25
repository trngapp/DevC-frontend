import React from "react"
import "bootstrap"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Carousel from "./carousel"
import { Link } from 'react-router-dom'
import Landing from '../home/landing.gif'
import Community from '../home/community.gif'

const Home = () => {
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
                <div class="row">

                    <div class="col">
                        <img src={Landing} alt="Image" style={{ width: '60vh', height: '60vh' }}>

                        </img>
                    </div>

                    <div class="col">


                </div>

                <div class="col">
                <img src={Community} alt="Image" style={{ width: '60vh', height: '60vh' }}>
                </img>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <br />
                    <br />
                    <center> <h1>Create your own Project</h1></center>
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
                    <hr style={{ width: "100%" }}></hr>
                    <br />
                    <br />
                    <center><h1>Apply to be a part of the team in some amazing projects</h1> </center>
                    <br />
                    <br /> <br />
                    <br />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1>Web Development</h1>
                    <Link to="/explore">  <ColorButton sx={{marginLeft:{md:"1000px",xs:"10px"}}} variant="contained" className="next" >Explore</ColorButton></Link>
                    <br />
                    <Carousel />
                    <hr style={{ width: "100%" }}></hr>
                    <br /> <br />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1>Android Development</h1>
                    <Link to="/explore">  <ColorButton sx={{marginLeft:{md:"1000px",xs:"10px"}}} variant="contained" className="next" >Explore</ColorButton></Link>
                    <br />
                    <Carousel />
                    <hr style={{ width: "100%" }}></hr>
                    <br /> <br />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1>ML/AI</h1>
                    <Link to="/explore">  <ColorButton sx={{marginLeft:{md:"1000px",xs:"10px"}}} variant="contained" className="next" >Explore</ColorButton></Link>
                    <br />
                    <Carousel />
                    <hr style={{ width: "100%" }}></hr>
                    <br /> <br />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1>Data Aanalysis</h1>
                    <Link to="/explore">  <ColorButton sx={{marginLeft:{md:"1000px",xs:"10px"}}} variant="contained" className="next" >Explore</ColorButton></Link>
                    <br />
                    <Carousel />
                    <hr style={{ width: "100%" }}></hr>
                    <br /> <br />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1>Web Security</h1>
                    <Link to="/explore">  <ColorButton sx={{marginLeft:{md:"1000px",xs:"10px"}}} variant="contained" className="next" >Explore</ColorButton></Link>
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