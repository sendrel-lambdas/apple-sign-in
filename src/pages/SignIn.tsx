import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import * as scriptjs from 'scriptjs';
import Success from './Success';
const clientId = process.env.REACT_APP_APPLE_CLIENT_ID as string;

const redirectURI = process.env.REACT_APP_APPLE_REDIRECT_URI as string;
declare global {
  interface Window {
    AppleID: any;
  }
}

scriptjs.get('https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js', () => {
  const params = {
    clientId,
    redirectURI,
    scope: 'name email',
    usePopup: true,
  };
  window.AppleID.auth.init(params);
});

const SignIn: React.FC = () => {
  const [appleData, setAppleData] = useState<null | any>(null);
  const handleAppleSignInSuccess = async (data: any) => {
    setAppleData(data.detail);
    console.log(data);
  };
  const handleAppleSignInFailure = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    document.addEventListener('AppleIDSignInOnSuccess', handleAppleSignInSuccess);
    document.addEventListener('AppleIDSignInOnFailure', handleAppleSignInFailure);
    console.log('here');
    return () => {
      console.log('yo');
      document.removeEventListener('AppleIDSignInOnSuccess', handleAppleSignInSuccess);
      document.addEventListener('AppleIDSignInOnFailure', handleAppleSignInFailure);
    };
  });
  if (appleData) {
    return <Success userData={appleData} />;
  }
  return (
    <React.Fragment>
      <div
        id="appleid-signin"
        data-color="black"
        data-border="true"
        data-type="sign in"
        style={{ width: '210px', height: '40px' }}
      ></div>
    </React.Fragment>
  );
};

export default SignIn;
