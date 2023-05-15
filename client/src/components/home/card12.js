/*import React from "react";
const Ca=(()=>{
    return (
        <>
        <h1>No Projects Available!! Come back Later</h1>
        </>
    )
})
export default Ca;*/
/* eslint-disable */
import React , {useEffect} from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';


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

export default function Ca() {

  return (
      <>
    <Card sx={{ minWidth: 275 ,margin:"2%"}}>

      <CardContent>
<br/>
        <Typography sx={{ mb: 1.5,marginLeft:"20px" }} color="text.primary">
        No Projects Available ||  Come back Later
        </Typography>

      </CardContent>

    </Card>

    </>
  );
}