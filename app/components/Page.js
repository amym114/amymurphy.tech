import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LeftDrawer from './LeftDrawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(5),
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
}));

export default function Page() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <LeftDrawer />
      <main className={classes.content}>
        <Typography variant='h3'>Full Stack Developer</Typography>
        <Typography variant='h1'>AMY MURPHY</Typography>
        <Typography variant='h3'>New Orleans, LA</Typography>
      </main>
    </div>
  );
}
