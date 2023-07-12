import React from 'react';

import { GoogleLogin} from '@react-oauth/google';

const google = () => {

    return (

        <GoogleLogin

  buttonText="Login with Google"
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            scope="email"
          />

    )
}

export default google;