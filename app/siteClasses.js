import { makeStyles } from '@material-ui/core/styles';

const siteClasses = makeStyles((theme) => ({
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
  },
  padTop5: {
    paddingTop: '5px',
  },
  padTop10: {
    paddingTop: '10px',
  },
  padTop15: {
    paddingTop: '15px',
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    bodyCard: {
      paddingTop: theme.spacing(3),
    },
  },
}));
export default siteClasses;
