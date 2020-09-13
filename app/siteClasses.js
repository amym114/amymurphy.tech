import { makeStyles } from '@material-ui/core/styles';

const siteClasses = makeStyles((theme) => ({
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
  },
  bodyLink: {
    color: '#3D4B51',
    textDecoration: 'none',
    fontWeight: '700',
  },
  pt5: {
    paddingTop: '5px',
  },
  pt10: {
    paddingTop: '10px',
  },
  pt15: {
    paddingTop: '15px',
  },
  mt5: {
    marginTop: '5px',
  },
  mt10: {
    marginTop: '10px',
  },
  mt15: {
    marginTop: '15px',
  },
  pb5: {
    paddingBottom: '5px',
  },
  pb10: {
    paddingBottom: '10px',
  },
  pb15: {
    paddingBottom: '15px',
  },
  mb5: {
    marginBottom: '5px',
  },
  mb10: {
    marginBottom: '10px',
  },
  mb15: {
    marginBottom: '15px',
  },
  padImg: {
    padding: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    bodyCard: {
      paddingTop: theme.spacing(3),
    },
  },
  menuBtn: {
    transform: 'translate(0px, 25px) rotate(-90deg)',
    color: '#FFF',
    position: '-webkit-sticky',
    position: 'sticky',
    top: '0',
  },
  menuBtnHolder: {
    backgroundColor: '#3D4B51',
  },
}));
export default siteClasses;
