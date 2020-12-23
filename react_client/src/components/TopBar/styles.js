import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  topBar: {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0px 0px 0px 0px',
    display: 'flex',
    justifyContent: 'flexEnd',
  },
  iconButton: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
