import React from "react";
import { Box } from "@mui/material";
import "bootstrap"
import ReactPlayer from 'react-player';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import MediaQuery from "react-responsive";

function Aboutus() {
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
            <center><ReactPlayer url="https://www.youtube.com/watch?v=8zKuNo4ay8E&ab_channel=AkshaySaini" playing={false} width='100%' height='100%'/></center>
          </MediaQuery>
          <MediaQuery minWidth={1224.1} >
            <center><ReactPlayer url="https://www.youtube.com/watch?v=8zKuNo4ay8E&ab_channel=AkshaySaini" playing={false} /></center>
          </MediaQuery>
        </Grid>
        <Grid item md={12}>
          <Card sx={{ borderRadius: "5px", backgroundColor: "#F5F5F5", color: "black" }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: "agrandir medium" }}>
                There's something for everybody. Follow along, chat on Discord, or read up on what we're doing.chat on Discord, or read up on what we're doing.</Typography>

            </CardContent>

          </Card>

        </Grid>



        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: "5px", backgroundColor: "rgb(235, 84, 188)", color: "black" }}>
            <CardContent>
              <h1>DevCera Community</h1>
              <Typography>
                There's something for everybody. Follow along, chat on Discord, or read up on what we're doing.chat on Discord, or read up on what we're doing.</Typography>
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
                We want donation to grow our app, and serve you with high end application</Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card sx={{ borderRadius: "5px", backgroundColor: "rgb(128, 236, 255)", color: "black" }}>
            <CardContent>
              <h1>Contribute</h1>
              <Typography>Help create DevCera
                Help create us DevCera by directly contributing to DevCera Codebase. We're always looking for new contributors.</Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </>
  );


}

export default Aboutus