import React from 'react';
//import ReactDOM from 'react-dom';
//import GoogleLogin from 'react-google-login';
// or
import { GoogleLogin } from 'react-google-login';


const responseGoogleSuccess = (response) => {
  console.log(response);
}
const responseGoogleError = (response) => {
    console.log(response);
  }


const GmailCheck=()=>{
    return (
        <>
<GoogleLogin
    clientId="530815747234-dmje51rm1i1ktp4100gh360ba1e5ctom.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleError}
    cookiePolicy={'single_host_origin'}
  />
        </>
    )
}
export default GmailCheck;