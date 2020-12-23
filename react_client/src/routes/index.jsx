import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LandingRoute from './LandingRoute';
import LandingPage from '../pages/LandingPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <LandingRoute path="/home" component={LandingPage} />
        {/*<AuthenticatedRoute path="/browse" component={BrowsingLayout} />*/}
      </Switch>
    </Router>
  );
};

export default Routes;
