import React from 'react';


import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './gmail.js';

function App() {
  return (
    <div className="App">



        <GoogleOAuthProvider clientId="530815747234-dmje51rm1i1ktp4100gh360ba1e5ctom.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>

    </div>
  );
}

export default App;