import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LandingRoute from './LandingRoute';
import LandingPage from '../pages/LandingPage/LandingPage';
import BrowsingRoute from './BrowsingRoute';
import BrowsingPageSongs from '../pages/BrowsingPage/BrowsingPageSongs';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <LandingRoute exact path="/home" component={LandingPage} />
        <Redirect exact from="/browse" to="/browse/songs" />
        <BrowsingRoute exact path="/browse/songs" component={BrowsingPageSongs} />
        <BrowsingRoute exact path="/browse/albums" component={BrowsingPageSongs} />
        <BrowsingRoute
          exact
          path="/browse/albums/:id"
          component={BrowsingPageSongs}
        />
        <BrowsingRoute exact path="/browse/artists" component={BrowsingPageSongs} />
        <BrowsingRoute
          exact
          path="/browse/artists/:id"
          component={BrowsingPageSongs}
        />
        <BrowsingRoute exact path="/browse/genres" component={BrowsingPageSongs} />
        <BrowsingRoute
          exact
          path="/browse/genres/:id"
          component={BrowsingPageSongs}
        />
        <BrowsingRoute exact path="/browse/albums" component={BrowsingPageSongs} />
        <BrowsingRoute
          exact
          path="/browse/playlists"
          component={BrowsingPageSongs}
        />
        <BrowsingRoute exact path="/browse/search" component={BrowsingPageSongs} />
        <BrowsingRoute exact path="/browse/liked" component={BrowsingPageSongs} />
      </Switch>
    </Router>
  );
};

export default Routes;
