import React from "react"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
const profile =()=>{
    return (
        <>
           <Grid container>
               <Grid item lg={3} xs={12} sx={{border:"0.5px black solid ",height:"700px",borderRadius:"5px"}}>

<Grid item lg={12} xs={12} style={{height:"200px",borderBottom:"0.5px black solid "}} >
<center><Avatar
        alt="Tarang"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 120, height: 120,marginTop:"10%"}}
      /></center>
</Grid>
<Grid item lg={12}  xs={12} style={{height:"500px"}}>
asdasdasdasdasdasd
</Grid>
               </Grid>
               <Grid item lg={9} xs={12} sx={{border:"1px black solid ",height:"700px",borderRadius:"5px"}}>

                   </Grid>
           </Grid>

        </>
    )
}
export default profile;