import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.layout.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    width: 'inherit',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    fontWeight: 'bold',
    minWidth: '175px',
    '&:hover': {
      color: '#000000',
      backgroundColor: theme.palette.primary.buttons,
    },
  },
  icons: {
    color: '#320b86',
  },
}));

export default useStyles;
