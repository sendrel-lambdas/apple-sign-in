import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragAndDrop from '../pages/DragAndDrop';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/diagram"></Route>
      <Route exact path="/draganddrop">
        <DragAndDrop />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
