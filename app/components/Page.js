import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LeftDrawer from './LeftDrawer';
import Header from './Header';
import MobileNav from './MobileNav';
import Home from './Home';
import About from './About';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '1920px',
  },
  content: {
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(7),
    paddingRight: theme.spacing(5),
    width: '100%',
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    content: {
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(7),
      paddingRight: theme.spacing(5),
      width: '100%',
    },
  },
}));

export default function Page() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smDown>
        <LeftDrawer />
      </Hidden>
      <Hidden mdUp>
        <MobileNav />
      </Hidden>
      <main className={classes.content}>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
