import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import siteClasses from '../siteClasses';

function Header() {
  const mainClasses = siteClasses();

  return (
    <>
      <Typography variant='h3'>Full Stack Developer</Typography>
      <Typography variant='h1'>AMY MURPHY</Typography>
      <Typography variant='h3'>New Orleans, LA</Typography>
      <Divider className={mainClasses.divider} />
    </>
  );
}

export default Header;
