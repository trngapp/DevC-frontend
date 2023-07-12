import React from 'react';

import { GoogleLogin,GoogleOAuthProvider} from '@react-oauth/google';

const google = () => {

    return (
        <GoogleOAuthProvider clientId="530815747234-dmje51rm1i1ktp4100gh360ba1e5ctom.apps.googleusercontent.com">
        <GoogleLogin

  buttonText="Login with Google"
            onSuccess={credentialResponse => {
              console.log(credentialResponse.profileObj.email);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            scope="email"
          />
          </GoogleOAuthProvider>
    )
}

export default google;