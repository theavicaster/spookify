import React from 'react';

import TopBar from '../../components/TopBar/TopBar';

const BrowsingLayout = ({ errors, children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default BrowsingLayout;
