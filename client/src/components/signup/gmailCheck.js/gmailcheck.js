import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './gmail.js';

//import ReactDOM from 'react-dom';
//import GoogleLogin from 'react-google-login';
// or



/*const responseGoogleSuccess = (response) => {
  console.log(response);
}
const responseGoogleError = (response) => {
    console.log(response);
  }*/


const GmailCheck=()=>{
    return (
        <>
<GoogleOAuthProvider clientId="530815747234-dmje51rm1i1ktp4100gh360ba1e5ctom.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
        </>
    )
}
export default GmailCheck;