import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import siteClasses from '../siteClasses';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';

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
    color: '#fff',
    textDecoration: 'none',
  },
  selected: {
    fontWeight: 700,
    color: '#91AEBA',
  },
}));

export default function LeftDrawer(props) {
  const classes = useStyles();
  const mainClasses = siteClasses();

  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const triggerDrawer = () => {
    appDispatch({
      type: 'setMobileIsOpen',
      value: false,
    });
  };

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
    >
      {props.closeBtn ? (
        <Grid
          container
          direction='row'
          justify='flex-end'
          alignItems='flex-end'
        >
          <Grid item>
            <Box className={mainClasses.menuBtnHolder} onClick={triggerDrawer}>
              <div className={mainClasses.menuBtn}>MENU</div>
            </Box>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
      <Hidden smDown>
        <img
          src='images/amymurphy.png'
          className={clsx(classes.drawerImg, mainClasses.imgFluid)}
        />
      </Hidden>
      <Hidden mdUp>
        <Box mt={5}></Box>
      </Hidden>
      <List>
        <NavLink
          to='/'
          className={classes.navLink}
          activeClassName={classes.selected}
          exact
        >
          <ListItem button>
            <ListItemText disableTypography primary='HOME' />
          </ListItem>
        </NavLink>
        <NavLink
          to='/resume'
          className={classes.navLink}
          activeClassName={classes.selected}
        >
          <ListItem button>
            <ListItemText disableTypography primary='RESUME' />
          </ListItem>
        </NavLink>
        <NavLink
          to='/about'
          className={classes.navLink}
          activeClassName={classes.selected}
        >
          <ListItem button>
            <ListItemText disableTypography primary='ABOUT' />
          </ListItem>
        </NavLink>
        <NavLink
          to='/articles'
          className={classes.navLink}
          activeClassName={classes.selected}
        >
          <ListItem button>
            <ListItemText disableTypography primary='ARTICLES' />
          </ListItem>
        </NavLink>
        <NavLink
          to='/contact'
          className={classes.navLink}
          activeClassName={classes.selected}
        >
          <ListItem button>
            <ListItemText disableTypography primary='CONTACT' />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}
