import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.buttons,
    fontWeight: 'bold',
    minWidth: '175px',
    '&:hover': {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default useStyles;
