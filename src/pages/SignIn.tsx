import React from 'react';
import AppleLogin from 'react-apple-login';
const clientId = process.env.REACT_APP_APPLE_CLIENT_ID as string;
const redirectURI = process.env.REACT_APP_APPLE_REDIRECT_URI as string;
const SignIn: React.FC = () => {
  return <AppleLogin clientId={clientId} redirectURI={redirectURI} />;
};

export default SignIn;
