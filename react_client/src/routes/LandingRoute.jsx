import React from 'react';
import { Route } from 'react-router-dom';
import LandingLayout from '../layouts/LandingLayout/LandingLayout';

const LandingRoute = ({ component: Component }) => {
  return (
    <Route
      render={(props) => (
        <LandingLayout>
          <Component {...props} />
        </LandingLayout>
      )}
    />
  );
};

export default LandingRoute;
