import React from 'react';
import AppleLogin from 'react-apple-login';
const clientId = process.env.REACT_APP_APPLE_CLIENT_ID as string;
const redirectURI = process.env.REACT_APP_APPLE_REDIRECT_URI as string;
const SignIn: React.FC = () => {
  const handleCallback = (e: any) => {
    console.log(e);
  };
  return <AppleLogin clientId={clientId} redirectURI={redirectURI} callback={handleCallback} />;
};

export default SignIn;
