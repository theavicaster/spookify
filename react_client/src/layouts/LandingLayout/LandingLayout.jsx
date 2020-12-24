import React from 'react';

import TopBar from '../../components/TopBar/TopBar';
import ErrorAlert from '../../components/Alerts/ErrorAlert';
import LoadingAlert from '../../components/Alerts/LoadingAlert';

const LandingLayout = ({ errors, children }) => {
  return (
    <>
      <TopBar />
      {children}
      <ErrorAlert />
      <LoadingAlert />
    </>
  );
};

export default LandingLayout;
