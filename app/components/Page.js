import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LeftDrawer from './LeftDrawer';
import Header from './Header';
import Home from './Home';

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
}));

export default function Page() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <LeftDrawer />
      <main className={classes.content}>
        <Header />
        <Home />
      </main>
    </div>
  );
}
