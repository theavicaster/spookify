import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LandingRoute from './LandingRoute';
import LandingPage from '../pages/LandingPage/LandingPage';
import BrowsingRoute from './BrowsingRoute';
import BrowsingPageSongs from '../pages/BrowsingPage/BrowsingPageSongs';
import BrowsingPageAlbums from '../pages/BrowsingPage/BrowsingPageAlbums';
import BrowsingPageArtists from '../pages/BrowsingPage/BrowsingPageArtists';
import BrowsingPageGenres from '../pages/BrowsingPage/BrowsingPageGenres';
import BrowsingPageAlbumById from '../pages/BrowsingPage/BrowsingPageAlbumById';
import BrowsingPageArtistById from '../pages/BrowsingPage/BrowsingPageArtistById';
import BrowsingPageGenreById from '../pages/BrowsingPage/BrowsingPageGenreById';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <LandingRoute exact path="/home" component={LandingPage} />
        <Redirect exact from="/browse" to="/browse/songs" />
        <BrowsingRoute
          exact
          path="/browse/songs"
          component={BrowsingPageSongs}
        />
        <BrowsingRoute
          exact
          path="/browse/albums"
          component={BrowsingPageAlbums}
        />
        <BrowsingRoute
          exact
          path="/browse/albums/:id"
          component={BrowsingPageAlbumById}
        />
        <BrowsingRoute
          exact
          path="/browse/artists"
          component={BrowsingPageArtists}
        />
        <BrowsingRoute
          exact
          path="/browse/artists/:id"
          component={BrowsingPageArtistById}
        />
        <BrowsingRoute
          exact
          path="/browse/genres"
          component={BrowsingPageGenres}
        />
        <BrowsingRoute
          exact
          path="/browse/genres/:id"
          component={BrowsingPageGenreById}
        />
        <BrowsingRoute
          exact
          path="/browse/playlists"
          component={BrowsingPageSongs}
        />
        <BrowsingRoute
          exact
          path="/browse/search"
          component={BrowsingPageSongs}
        />
        <BrowsingRoute
          exact
          path="/browse/likes"
          component={BrowsingPageSongs}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
