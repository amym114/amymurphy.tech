import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import siteClasses from '../siteClasses';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  drawerImg: {
    padding: theme.spacing(3),
  },
  navLink: {
    fontFamily: 'Montserrat, Helvetica, Arial, sans',
    fontSize: '2rem',
    fontWeight: 300,
  },
}));

export default function LeftDrawer() {
  const classes = useStyles();
  const mainClasses = siteClasses();

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
    >
      <img
        src='images/amymurphy.png'
        className={clsx(classes.drawerImg, mainClasses.imgFluid)}
      />
      <List>
        <ListItem button>
          <ListItemText
            className={classes.navLink}
            disableTypography
            primary='HOME'
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.navLink}
            disableTypography
            primary='RESUME'
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.navLink}
            disableTypography
            primary='ABOUT'
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.navLink}
            disableTypography
            primary='ARTICLES'
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            className={classes.navLink}
            disableTypography
            primary='CONTACT'
          />
        </ListItem>
      </List>
    </Drawer>
  );
}
