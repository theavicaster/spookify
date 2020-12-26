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
        <LandingRoute exact path="/home" component={LandingPage} />
        <Redirect exact from="/browse" to="/browse/songs" />
        <BrowsingRoute exact path="/browse/songs" component={BrowsingPage} />
        <BrowsingRoute exact path="/browse/albums" component={BrowsingPage} />
        <BrowsingRoute
          exact
          path="/browse/albums/:id"
          component={BrowsingPage}
        />
        <BrowsingRoute exact path="/browse/artists" component={BrowsingPage} />
        <BrowsingRoute
          exact
          path="/browse/artists/:id"
          component={BrowsingPage}
        />
        <BrowsingRoute exact path="/browse/genres" component={BrowsingPage} />
        <BrowsingRoute
          exact
          path="/browse/genres/:id"
          component={BrowsingPage}
        />
        <BrowsingRoute exact path="/browse/albums" component={BrowsingPage} />
        <BrowsingRoute
          exact
          path="/browse/playlists"
          component={BrowsingPage}
        />
        <BrowsingRoute exact path="/browse/search" component={BrowsingPage} />
        <BrowsingRoute exact path="/browse/liked" component={BrowsingPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
