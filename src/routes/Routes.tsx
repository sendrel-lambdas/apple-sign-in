import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragAndDrop from '../pages/DragAndDrop';
import SignIn from '../pages/SignIn';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/diagram"></Route>
      <Route exact path="/draganddrop">
        <DragAndDrop />
      </Route>
      <Route exact path="/">
        <SignIn />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
