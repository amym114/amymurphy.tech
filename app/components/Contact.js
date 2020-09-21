import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import siteClasses from '../siteClasses';
import Icons from './Icons';
import DividerGrid from './DividerGrid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  inlineBtn: {
    display: 'inline',
    fontSize: '1.2rem',
    textTransform: 'none',
    color: '#637f8a',
    fontWeight: 700,
    padding: 0,
    margin: 0,
  },
  borderRight: {
    borderRight: '0px',
  },
  shadedBox: {
    backgroundColor: 'transparent',
  },
  [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
    borderRight: {
      borderRight: '1px solid #ccc',
    },
    shadedBox: {
      backgroundColor: '#FFF',
      borderRight: '1px solid #ccc',
      padding: '5px',
    },
  },
}));

function Contact() {
  const mainClasses = siteClasses();
  const classes = useStyles();

  return (
    <>
      <Typography variant='body1'>
        Ready to get started working together?
      </Typography>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={3}
      >
        <Grid item md={4} sm={12}>
          <Box className={classes.shadedBox}>
            <Typography variant='body1' align='center' component='div'>
              Call or Text: <br />
              <a href='tel:251-454-1107' className={mainClasses.bodyLink}>
                (251)454-1107
              </a>
            </Typography>
          </Box>
        </Grid>
        <Hidden mdUp>
          <DividerGrid />
        </Hidden>
        <Grid item md={4} xs={12}>
          <Box className={classes.shadedBox} m={2}>
            <Typography variant='body1' align='center'>
              Drop me a line: <br />
              <a
                href='mailto:amymurphy114@gmail.com'
                className={mainClasses.bodyLink}
              >
                amymurphy114@gmail.com
              </a>
            </Typography>
          </Box>
        </Grid>
        <Hidden mdUp>
          <DividerGrid />
        </Hidden>
        <Grid item md={4} xs={12}>
          <Box className={classes.shadedBox} m={2}>
            <Typography variant='body1' align='center'>
              Connect with me: <br />
              <a
                href='https://www.linkedin.com/in/amymurphy114/'
                className={mainClasses.bodyLink}
              >
                LinkedIn
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
