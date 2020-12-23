import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as SpookifySvg } from '../../../assets/spookifyIcon.svg';

import useStyles from './styles';

const SpookifyIcon = ({ height, width }) => {
  const classes = useStyles();

  return (
    <SvgIcon style={{ height: height, width: width }}>
      <SpookifySvg className={classes.imageIcon} />
    </SvgIcon>
  );
};

export default SpookifyIcon;
