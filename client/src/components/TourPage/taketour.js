import React from "react";
import Grid from '@mui/material/Grid';
import Girl from "./imagegirl.png"
import Typography from "@mui/material/Typography"
import Collab from "./Collab.png"
import Create from "./Create.png"
import Grow from "./Grow.png"
import './tour.css';
import Learn from "./Learn.png"
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
const Tour = ()=>{
    return (
        <>
        <div style={{}}>
            <center>
           <Grid container spacing={1} sx={{background: "linear-gradient(173deg, #EEF9FE 0%, #F0E4DB 100%)"

}} >

              <Grid item md={8} sx={{marginTop:"30px"}}>

              <Typography  sx={{fontWeight:550,fontFamily:"Inter,sans-serif",marginTop:"30px"}} variant="h1" fontSize="3rem" align="left">Know Us Before You Register Yourself And Use Our Product.</Typography>
                <br/>
                <br/>


                <Typography fontFamily="Inter,sans-serif" sx={{color:"#495057"}} variant="h2" fontSize="1.50rem" align="left"> Devcera is a place for you to Create and Collaborate , build your own team or become a part of a team or project !</Typography>

                <hr/>
<br/>

            </Grid>
            <Grid item md={4} >
            <img src={Girl} className='hide-image'  alt="img1" style={{ width: '55vh', height: '55vh',float:"right",mixBlendMode: "darken",marginTop:"5px"}}>

</img>
            </Grid>
            <Grid item md={12} className='hide-image' >  <br/><br/> </Grid>

<Grid item md={3} >
<Card  variant="outlined"  sx={{borderRadius:"10px",width:{lg:"300px",xs:"300px",md:"250px"},height:{lg:"190px",xs:"200px",md:"120px"}}}>
    {/*<img src={Collab} style={{width:"300px"}}/>*/}
    <CardMedia
    component="img"
    image={Collab}

    />
</Card>
</Grid>
<Grid item md={3} >
<Card variant="outlined" sx={{borderRadius:"10px",width:{lg:"300px",xs:"300px",md:"250px"},height:{lg:"190px",xs:"200px",md:"120px"}}}>

<CardMedia
    component="img"
    image={Learn}

    />

</Card>
</Grid>
<Grid item md={3} >
<Card variant="outlined" sx={{borderRadius:"10px",width:{lg:"300px",xs:"300px",md:"250px"},height:{lg:"190px",xs:"200px",md:"120px"}}}>
<CardMedia
    component="img"
    image={Create}

    />
</Card>
</Grid>
<Grid item md={3} >
<Card variant="outlined" sx={{borderRadius:"10px",width:{lg:"300px",xs:"300px",md:"250px"},height:{lg:"190px",xs:"200px",md:"120px"}}}>
<CardMedia
    component="img"
    image={Grow}

    />
</Card>
<br/> <br/><br/><br/><br/>
</Grid>









        </Grid>


        </center>

        </div>

        </>
    )
}
export default Tour;