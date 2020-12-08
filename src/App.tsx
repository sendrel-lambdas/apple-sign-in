import React from 'react';
import { Helmet } from 'react-helmet';
import Routes from './routes/Routes';

function App() {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s | Material App" defaultTitle="Material App - React Admin & Dashboard Template" />
      <Routes />
    </React.Fragment>
  );
}

export default App;
