import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    maxWidth: 500,
    minHeight: 325,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    color: theme.palette.primary.dark,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  heading: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    borderRadius: '5px',
  },
  subheading: {
    backgroundColor: theme.palette.primary.buttons,
    color: 'white',
    borderRadius: '5px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default useStyles;
