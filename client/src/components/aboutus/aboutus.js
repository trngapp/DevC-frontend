import React from "react";
import { Box } from "@mui/material";

function Aboutus()
{
    return(
        <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
        
    );

    
}

export default Aboutus