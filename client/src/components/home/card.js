/* eslint-disable */
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
import Badge from '@mui/material/Badge';


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
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      width:"10px",
      height:"10px",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        //position: 'absolute',
        top: 0,

        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
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
    <StyledBadge
        overlap="circular"
        //anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{marginLeft:"10px",}}
        variant="dot"
      ></StyledBadge> &nbsp; {/*<h6 style={{display:"inline-block",color:"#44b700",paddingTop:"5px"}}>ACTIVE</h6>*/}
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
        <Typography sx={{maxLines:3}} variant="body2">
       <strong>Description:</strong> <br/> {description.substring(0,100)}...
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
