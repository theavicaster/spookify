import React from 'react';

import TopBar from '../../components/TopBar/TopBar';
import ErrorAlert from '../../components/Alerts/ErrorAlert';
import LoadingAlert from '../../components/Alerts/LoadingAlert';
import SuccessAlert from '../../components/Alerts/SuccessAlert';

const LandingLayout = ({ errors, children }) => {
  return (
    <>
      <TopBar />
      {children}
      <ErrorAlert />
      <LoadingAlert />
      <SuccessAlert />
    </>
  );
};

export default LandingLayout;
