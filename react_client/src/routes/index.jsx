import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LandingRoute from './LandingRoute';
import LandingPage from '../pages/LandingPage/LandingPage';
import BrowsingRoute from './BrowsingRoute';
import BrowsingPage from '../pages/BrowsingPage/BrowsingPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <LandingRoute path="/home" component={LandingPage} />
        <BrowsingRoute path="/browse" component={BrowsingPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
