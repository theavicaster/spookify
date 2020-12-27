import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 50,
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.layout.drawerWidth,
  },
}));

export default useStyles;
