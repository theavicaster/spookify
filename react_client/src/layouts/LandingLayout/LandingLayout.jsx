import React from 'react';

import TopBar from '../../components/TopBar/TopBar';

const LandingLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default LandingLayout;
