import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaellaImage from "../../static/images/webimage.png"
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const ColorButton = styled(Button)(({ theme }) => ({
    //color: theme.palette.getContrastText(purple[500]),
    backgroundColor:"blue",

    '&:hover': {
     backgroundColor:  "blue ",
   },
  }));

export default function BasicCard({description,projectLeader,projectName,openings}) {
  return (
      <>
    <Card sx={{ minWidth: 275 ,margin:"2%"}}>
        <CardMedia
        component="img"
        height="194"
        image={PaellaImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Openings: {openings}
        </Typography>
        <Typography variant="h5" component="div">
        Project Name: {projectName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Project Leader: {projectLeader}
        </Typography>
        <Typography variant="body2">
       <strong>Description:</strong> <br/> {description}
          <br />

        </Typography>
      </CardContent>
      <CardActions>
       {/* <Button size="small" type="contained">Apply</Button>*/}
        <center><Link to="/apply"><ColorButton variant="contained" className="next" >Apply</ColorButton></Link></center>
      </CardActions>
    </Card>

    </>
  );
}
