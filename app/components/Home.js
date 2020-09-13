import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import siteClasses from '../siteClasses';
import Icons from './Icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  iconHolder: {
    maxWidth: '450px',
  },
  padAboutRight: {
    paddingRight: theme.spacing(1),
  },
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    iconHolder: {
      maxWidth: '350px',
    },
    padAboutRight: {
      paddingRight: theme.spacing(7),
    },
  },
}));

function Home() {
  const mainClasses = siteClasses();
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
      >
        <Grid item md>
          <Box className={mainClasses.mb15}>
            <Typography variant='h2'>ABOUT</Typography>
          </Box>
          <Box className={classes.padAboutRight}>
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
        <Grid item className={classes.iconHolder}>
          <Box className={mainClasses.mb15}>
            <Typography variant='h2'>TECH SKILLS</Typography>
          </Box>
          <Icons />
        </Grid>
        <Grid item xs={12}>
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
            October 2004 &ndash; Present | Mobile, AL/New Orleans, LA
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
        <Grid item xs={12}>
          <Divider className={mainClasses.divider} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={12} className={mainClasses.mb15}>
          <Typography variant='h2'>ARTICLES</Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box mr={5}>
            <img
              src='images/article-nodemysql.png'
              alt='Node + MySQL Chained Promises Code Block'
              className={clsx(mainClasses.imgFluid, mainClasses.mb15)}
            />
            <Typography variant='h4' paragraph>
              Node + MySQL Chained Promises vs Async/Await
            </Typography>
            <Typography variant='body2' paragraph>
              In this tutorial, I will walk you through two different methods of
              accessing a MySQL database in Node: through ES6’s promise syntax,
              and through ES7’s async/await syntax.
            </Typography>
            <Typography variant='body2' paragraph>
              <a
                href='https://medium.com/@amymurphy_40966/node-mysql-chained-promises-vs-async-await-9d0c8e8f5ee1?sk=b4c22f184037d8a8b986258c79b84b36'
                target='_blank'
                className={mainClasses.bodyLink}
              >
                Continue reading on Medium &raquo;
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box mr={5}>
            <img
              src='images/article-es6.png'
              alt='My Top is 6 ES6 Features'
              className={clsx(mainClasses.imgFluid, mainClasses.mb15)}
            />
            <Typography variant='h4' paragraph>
              My Top is 6 ES6 Features
            </Typography>
            <Typography variant='body2' paragraph>
              As a developer regularly using JavaScript for the past 10+ years,
              I came to the scene right around the time that ES5 was making its
              debut...
            </Typography>
            <Typography variant='body2' paragraph>
              <a
                href='https://medium.com/@amymurphy_40966/node-mysql-chained-promises-vs-async-await-9d0c8e8f5ee1?sk=b4c22f184037d8a8b986258c79b84b36'
                target='_blank'
                className={mainClasses.bodyLink}
              >
                Continue reading on Medium &raquo;
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Box mb={5}>
            <Button variant='outlined' color='primary' size='small'>
              <Box p={1}>
                <Typography variant='h5'>VIEW ALL ARTICLES</Typography>
              </Box>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
