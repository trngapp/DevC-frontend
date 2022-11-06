import React,{useEffect,useState} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loading from "../loading.js"
import { styled } from '@mui/material/styles';
const Project=()=>{
    const ColorButton = styled(Button)(({ theme }) => ({
        //color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#C81132",

        '&:hover': {
            backgroundColor: "#C81132 ",
        },
    }));
    const [load,setLoad]=useState(false);
    useEffect(()=>{
        setLoad(true);
        setTimeout(()=>{
          setLoad(false);
        },1000)
    },load)
    return (
        <>
            {load?<Loading/>:
    <center>  <Grid container spacing={2} sx={{padding:{lg:"50px",xs:"5px"},width:"80%"}}>


                      <Grid item md={12} xs={12}>
                      <TextField
                          fullWidth
 label="First Name"
/>
                      </Grid>
                      <Grid item md={12} xs={12}>
                      <TextField
                          fullWidth
 label="First Name"
/>
                          </Grid>
                          <Grid item xs={12} md={6}>

<TextField
    fullWidth
label="First Name"
/>

</Grid>


<Grid item xs={12} md={6}>
<TextField
fullWidth
label="First Name"
/>
</Grid>
<Grid item xs={12} md={6}>

<TextField
    fullWidth
label="First Name"
/>

</Grid>


<Grid item xs={12} md={6}>
<TextField
fullWidth
label="First Name"
/>
</Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
 label="First Name"
/>
                          </Grid>
                          <Grid item md={12} xs={12}>
                          <TextField
                              fullWidth
 label="First Name"
/>
                          </Grid>



     </Grid>
     <ColorButton      variant="contained" className="next" >Edit</ColorButton>
     </center>}
        </>
    )
}
export default Project;