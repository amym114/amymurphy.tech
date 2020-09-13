import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import LeftDrawer from './LeftDrawer';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';
import siteClasses from '../siteClasses';

const drawerWidth = '100vw';

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: '#3D4B51',
    width: drawerWidth,
    flexShrink: 0,
    height: '100vh',
    zIndex: '999',
  },
}));

function MobileNav() {
  const mainClasses = siteClasses();
  const classes = useStyles();

  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const triggerDrawer = () => {
    appDispatch({
      type: 'setMobileIsOpen',
      value: !appState.mobileIsOpen,
    });
  };

  return (
    <>
      <Box className={mainClasses.menuBtnHolder} onClick={triggerDrawer}>
        <div className={mainClasses.menuBtn}>MENU</div>
      </Box>
      <Collapse in={appState.mobileIsOpen} timeout='auto'>
        <Modal open={appState.mobileIsOpen} disableBackdropClick={false}>
          <Box className={classes.drawer}>
            <LeftDrawer closeBtn />
          </Box>
        </Modal>
      </Collapse>
    </>
  );
}

export default MobileNav;
