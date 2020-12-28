import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  subheading: {
    backgroundColor: theme.palette.primary.buttons,
    color: 'black',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '5px',
    marginTop: '10px',
  },
  user: {
    color: theme.palette.error.main,
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
}));

export default useStyles;
