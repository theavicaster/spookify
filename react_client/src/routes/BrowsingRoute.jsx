import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BrowsingLayout from '../layouts/BrowsingLayout/BrowsingLayout';

const BrowsingRoute = ({ component: Component, loggedIn, ...otherProps }) => {
  const id = otherProps.computedMatch.params.id;

  return (
    <Route
      render={(props) =>
        loggedIn === true ? (
          <BrowsingLayout>
            <Component id={id} {...props} />
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
