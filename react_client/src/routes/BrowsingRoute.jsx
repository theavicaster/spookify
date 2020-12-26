import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BrowsingLayout from '../layouts/BrowsingLayout/BrowsingLayout';

const BrowsingRoute = ({ component: Component, loggedIn }) => {
  return (
    <Route
      render={(props) =>
        loggedIn === true ? (
          <BrowsingLayout>
            <Component {...props} />
          </BrowsingLayout>
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(BrowsingRoute);
