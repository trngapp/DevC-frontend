import React from 'react';

import { GoogleLogin} from '@react-oauth/google';
import Success from '../../apply/success';
import jwt_decode from "jwt-decode";

const google = () => {
    //credentialResponse => {
      //  console.log(credentialResponse);
   // }
   const SuccessResponse=(response)=>{
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
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