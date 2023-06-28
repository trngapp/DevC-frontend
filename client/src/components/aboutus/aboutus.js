import React,{useEffect} from "react";
//import { Box } from "@mui/material";
import "bootstrap"
import ReactPlayer from 'react-player';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import MediaQuery from "react-responsive";
import FavoriteIcon from '@mui/icons-material/Favorite';


function Aboutus() {
  useEffect(()=>{
    document.title="About-Us-Welcome!"
 })

  return (
    <>
      {/* <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}

      />*/}
      <Grid container spacing={2} sx={{ padding: 6 }} >
        <Grid item md={12}>
          <MediaQuery maxWidth={1224} >
            <center><ReactPlayer url="https://youtu.be/vE3gCE7iSpo" playing={false} width='110%' height='110%'/></center>

          </MediaQuery>
          <MediaQuery minWidth={1224.1} >
            <center><ReactPlayer url="https://youtu.be/vE3gCE7iSpo" playing={false} /></center>
          </MediaQuery>
        </Grid>
        <Grid item md={12}>
          <Card sx={{ borderRadius: "5px", backgroundColor: "#F5F5F5", color: "black" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: "agrandir medium" }}>
               A platform made especially for developers to come and create new projects ,build teams , become a part of the teams , and to create some projects that can be usefull</Typography>

            </CardContent>

          </Card>

        </Grid>



        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: "5px", backgroundColor: "rgb(235, 84, 188)", color: "black" }}>
            <CardContent>
              <h1>DevCera Community</h1>
              <Typography>
                There's something for everybody. Follow along, chat on Discord, or read up on what we're doing.</Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: "5px", backgroundColor: "rgb(20, 241, 149)", color: "black" }}>
            <CardContent>
              <h1>Donate</h1>
              <Typography>
                We want donation to grow our app for us to serve you with high end application</Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card sx={{ borderRadius: "5px", backgroundColor: "rgb(128, 236, 255)", color: "black" }}>
            <CardContent>
              <h1>Contribute (Coming soon!!)</h1>
              <Typography>Help create DevCera
                Help create us DevCera by directly contributing to DevCera Codebase. We're always looking for new contributors.</Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>

        </Grid>
        <Grid item xs={12} md={12}>
          <br/>
          <center>
        <Typography>Made with <FavoriteIcon sx={{color:"red"}}/> by</Typography>
        <Typography sx={{fontWeight:"bolder",fontSize:"19px"}}>TARANG SHARMA( Founder & Developer(Frontend & Backend))</Typography>
    <br/>
{/*<Typography>Team members: Frontend </Typography>
<Typography sx={{fontWeight:"bolder",fontSize:"17px"}}>Harishita Rana</Typography>*/}
        </center>
        </Grid>
      </Grid>

    </>
  );


}

export default Aboutus