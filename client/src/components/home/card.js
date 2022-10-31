import React , {useEffect,useContext} from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaellaImage from "../../static/images/webimage.png"
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

/*const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);*/

const ColorButton = styled(Button)(({ theme }) => ({
    //color: theme.palette.getContrastText(purple[500]),
    backgroundColor:"blue",

    '&:hover': {
     backgroundColor:  "blue ",
   },
  }));

export default function BasicCard({description,projectLeader,projectName,openings}) {
  useEffect(()=>{
    console.log(description);
  })
  const {user} = useContext(AuthContext);
  const navigate= useNavigate();
    const handleClick=()=>{
navigate('/apply',{state:{To:projectLeader,From:user}});
    }
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
      <center><ColorButton variant="contained" className="next"  onClick={handleClick}>Apply</ColorButton></center>
      </CardActions>
    </Card>

    </>
  );
}
