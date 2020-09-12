import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import siteClasses from '../siteClasses';
import Icons from './Icons';
import { Link } from 'react-router-dom';

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
        <Grid item md={12}>
          <Divider className={mainClasses.divider} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={7} className={mainClasses.mb15}>
          <Typography variant='h2'>EXPERIENCE</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={7} className={mainClasses.mb15}>
          <Box mb={3}>
            <Typography variant='h4'>FULL STACK WEB DEVELOPER</Typography>
            <Typography variant='body2'>
              March 2006 &ndash; Present | Mobile, AL/New Orleans, LA
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant='h4'>FREELANCE WEB DEVELOPER</Typography>
            October 2005 &ndash; Present | Mobile, AL/New Orleans, LA
          </Box>
          <Box mb={3}>
            <Typography variant='h4'>MOTION GRAPHICS DESIGNER</Typography>
            April 2005 &ndash; March 2006 | Mobile, AL
          </Box>
          <Box mb={5}>
            <Typography variant='h4'>
              FRONT-END DESIGNER AND DEVELOPER
            </Typography>
            October 2004 &ndash; March 2005 | Orlando, FL
          </Box>
          <Box>
            <Button variant='outlined' color='primary' size='small'>
              <Box p={1}>
                <Typography variant='h5'>SEE FULL RESUME</Typography>
              </Box>
            </Button>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Divider className={mainClasses.divider} />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
