import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import LeftDrawer from './LeftDrawer';
import Header from './Header';
import MobileNav from './MobileNav';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Articles from './Articles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '1920px',
    minHeight: '110vh',
    marginBottom: theme.spacing(10),
  },
  content: {
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(7),
    paddingRight: theme.spacing(5),
    width: '100%',
  },
  drawer: {
    backgroundColor: '#3D4B51',
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: '#3D4B51',
    color: '#fff',
    width: drawerWidth,
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
        <Box displayPrint='none'>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor='left'
          >
            <LeftDrawer />
          </Drawer>
        </Box>
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
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/articles'>
            <Articles />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
