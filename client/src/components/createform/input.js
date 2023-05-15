/* eslint-disable */
import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export default  function signupinput({type,label,defaultvalue}) {
    return (
        <>
        <div>
        <Box
      component="form"
     sx={{
        '& > :not(style)': { m: 1,width:"99.4%" },
      }}
     // noValidate
      //autoComplete="off"
    >
<TextField
required
          id="outlined-password-input"
          label={label}
          type={type}
          //autoComplete="current-password"
        defaultValue={defaultvalue}

        />
        </Box>

</div>
        </>
    )
}