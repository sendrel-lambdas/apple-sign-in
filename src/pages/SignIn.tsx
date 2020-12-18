import React from 'react';
import { Helmet } from 'react-helmet';
import * as scriptjs from 'scriptjs';
const clientId = process.env.REACT_APP_APPLE_CLIENT_ID as string;
const redirectURI = process.env.REACT_APP_APPLE_REDIRECT_URI as string;

declare global {
  interface Window {
    AppleID: any;
  }
}

scriptjs.get('https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js', () => {
  const params = {
    clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
    redirectURI: process.env.REACT_APP_APPLE_REDIRECT_URI,
    scope: 'name email',
  };
  //
  window.AppleID.auth.init(params);
});
const SignIn: React.FC = () => {
  return (
    <React.Fragment>
      <button onClick={() => window.AppleID.auth.signIn()} />
    </React.Fragment>
  );
};

export default SignIn;
