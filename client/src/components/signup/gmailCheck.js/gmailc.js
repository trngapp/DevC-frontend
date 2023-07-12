import React from 'react';


import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './gmail.js';
import Logo from "./symbol.png"
import Box from '@mui/material/Box';

function App() {
  return (
    <>
<Box
                  sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
  <img src={Logo} alt="logo" style={{width:"100px"}}/>
    <div style={{width:"100px"}}>



        <GoogleOAuthProvider clientId="530815747234-dmje51rm1i1ktp4100gh360ba1e5ctom.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>

    </div>
    </Box>

    </>
  );
}

export default App;