import React from 'react';

import { GoogleLogin} from '@react-oauth/google';
//import Success from '../../apply/success';
import jwt_decode from "jwt-decode";

//import {useNavigate} from "react-router-dom"
//import {SignupContext} from "../signupContext.js"

const google = () => {
  //const navigate=useNavigate();
  //const {setImage,setEmail}=useContext(SignupContext);
    //credentialResponse => {
      //  console.log(credentialResponse);
   // }
   const SuccessResponse=(response)=>{
    const userObject = jwt_decode(response.credential);
    const {email,picture}=userObject;
    localStorage.setItem("image",picture);
    localStorage.setItem("email",email);

    console.log(userObject);
    /*setTimeout(()=>{
navigate("/signup");
    },1000);*/
    }

    return (

        <GoogleLogin

  buttonText="Login with Google"
            onSuccess={SuccessResponse}
            onError={() => {
              console.log('Login Failed');
            }}
            scope="email"
          />

    )
}

export default google;