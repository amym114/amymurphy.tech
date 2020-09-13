import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import LeftDrawer from './LeftDrawer';

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    transform: 'translate(0px, 25px) rotate(-90deg)',
    color: '#FFF',
  },
  menuBtnHolder: {
    backgroundColor: '#3D4B51',
  },
}));

function CloseBtn() {
  return (
    <>
      <CloseIcon />
    </>
  );
}

export default CloseBtn;
