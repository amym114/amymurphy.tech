import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import LeftDrawer from './LeftDrawer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
      <svg
        height='24px'
        width='24px'
        fill='#000000'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        x='0px'
        y='0px'
      >
        <title>_</title>
        <g>
          <path d='M19,9.5a.49842.49842,0,0,1-.14648.35352l-6.5,6.5a.49983.49983,0,0,1-.707,0l-6.5-6.5a.5.5,0,0,1,.707-.707L12,15.293l6.14648-6.14649A.5.5,0,0,1,19,9.5Z'></path>
        </g>
      </svg>
    </>
  );
}

export default CloseBtn;
