/* eslint-disable */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import CardInfo from "./reqInfoCard.js"
import {ProfileContext} from "./profContext.js"
import axios from "axios"
import Link from '@mui/material/Link';
import {useNavigate} from "react-router-dom"

import { CircleSpinnerOverlay, FerrisWheelSpinner } from 'react-spinner-overlay'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RequestCard({name,last,email,skill,linkedin,twitter,github,bio,job,logo,date}) {
  const [expanded, setExpanded] = React.useState(false);
  const [sub,setsub]=React.useState(false);
  const navigate=useNavigate();
//const [disable,setdisable]=React.useState(false);
  //const [open,setopen]=React.useState(false);
  const {open,setopen,setfirst,setlast,setemail,setlink,settwit,setskill,setgit} =React.useContext(ProfileContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const accept=()=>{
let value={to:localStorage.getItem("user"),from:email};
setsub(true);
  axios.patch(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/accept`,value,{withCredentials:true}).then((result)=>{
    console.log(result);
    alert(result);
    setTimeout(()=>{
      setsub(false);
      navigate("/profile");
    },1000)
    //setdisable(true);
  }).catch((error)=>{
console.log(error);
  })


}

const reject=()=>{
  let value={to:localStorage.getItem("user"),from:email};
setsub(true);
  axios.patch(`https://main--polite-syrniki-ad57c8.netlify.app/.netlify/functions/api/reject`,value,{withCredentials:true}).then((result)=>{
    console.log(result);
    alert(result);
    setTimeout(()=>{
      setsub(false);
    },1000)
    //setdisable(true);
  }).catch((error)=>{
console.log(error);
  })

}



  const clicky=()=>{
    console.log("clickkkyy");

    setopen(true);
    setfirst(name);
    setlast(last);
    setemail(email);
    setskill(skill);
    setlink(linkedin);
    settwit(twitter);
    setgit(github);
  }
  const OnGithub=()=>{
    window.open(`https://github.com/${github}`,"_blank");
  }
  const OnLinkdin=()=>{
    window.open(`https://www.linkedin.com/in/${linkedin}`,"_blank");
  }
  const OnTwitter=()=>{
    window.open(`https://twitter.com/${twitter}`,"_blank");
  }

  return (

    <>
    {open==true? <CardInfo firstName={name} lastName={last} skill={skill} email={email} linkedin={linkedin} twitter={twitter} github={github} bio={bio} job={job} logo={logo}/> :null}
    <CircleSpinnerOverlay
      　　loading={sub}
       overlayColor="rgba(0,153,255,0.2)"
      />
    <Card sx={{ maxWidth: 345,margin:5 }} >
      <CardHeader
        /*avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name}
          </Avatar>
        }*/
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
         sx={{cursor:"pointer"}}
        onClick={clicky}

      />
      {/*<CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />*/}
      <CardContent onClick={clicky} sx={{cursor:"pointer"}}>
        <Typography variant="body2" color="text.secondary">
       {date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {/*  <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
    </IconButton>*/}
     <Button  onClick={accept}    variant="contained" color="success" size="small">
        Accept
      </Button>
      &nbsp;
      <Button onClick={reject}    variant="contained" color="error" size="small">
        Reject
      </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

        <div onClick={OnLinkdin} style={{cursor:"pointer"}}> <LinkedInIcon sx={{color:"#0A66C2",display:"inline"}}/> <h6 style={{display:"inline"}}>Linkedin</h6></div>
          <br/>
        <div onClick={OnGithub} style={{cursor:"pointer"}}> <GitHubIcon sx={{display:"inline"}}/> <h6 style={{display:"inline"}}>Github</h6></div>
         <br/>
       <div onClick={OnTwitter} style={{cursor:"pointer"}}>  <TwitterIcon sx={{color:"#0A66C2",display:"inline"}}/> <h6 style={{display:"inline"}}>Twitter</h6></div>


        </CardContent>
      </Collapse>
    </Card>


    </>
  );
}