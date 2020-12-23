import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logoText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 30,
    fontFamily: 'Raleway',
    color: theme.palette.primary.headings,
  },
  icon: {
    height: '1em',
    width: '1em',
  },
}));

export default useStyles;
