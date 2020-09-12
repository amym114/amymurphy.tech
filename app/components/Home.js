import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import siteClasses from '../siteClasses';
import Icons from './Icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Home() {
  const mainClasses = siteClasses();

  return (
    <>
      <Grid container>
        <Grid item md={7} className={mainClasses.mb15}>
          <Typography variant='h2'>ABOUT</Typography>
        </Grid>
        <Grid item md={5} className={mainClasses.mb15}>
          <Typography variant='h2'>TECH SKILLS</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={7}>
          <Box pr={7}>
            <Typography variant='body2' paragraph>
              I am a motivated professional with over 15 years of experience,
              ready to take your project to the next level. A collaborative
              leader with solid project management and communication skills, I
              thrive on employing industry-best practices to deliver innovative
              and strategic solutions that surpass end-users' expectations.
            </Typography>
            <Typography variant='body2' paragraph>
              Learn more{' '}
              <Link to='/about' className={mainClasses.bodyLink}>
                about me
              </Link>
              , then{' '}
              <Link
                color='primary'
                to='/contact'
                className={mainClasses.bodyLink}
              >
                contact me
              </Link>{' '}
              today to get started working together!
            </Typography>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Icons />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
