import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import LeftDrawer from './LeftDrawer';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';
import siteClasses from '../siteClasses';

const useStyles = makeStyles((theme) => ({}));

function MobileNav() {
  const mainClasses = siteClasses();

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
      <Collapse in={appState.mobileIsOpen} timeout='auto' unmountOnExit>
        <LeftDrawer closeBtn />
      </Collapse>
    </>
  );
}

export default MobileNav;
