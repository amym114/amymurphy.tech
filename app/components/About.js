import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import siteClasses from '../siteClasses';
import Icons from './Icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  inlineBtn: {
    display: 'inline',
    fontSize: '1.2rem',
    textTransform: 'none',
    fontWeight: 700,
    padding: 0,
    margin: 0,
  },
}));

function About() {
  const mainClasses = siteClasses();
  const classes = useStyles();

  return (
    <>
      <Typography variant='body2' className={mainClasses.bodyItalic} paragraph>
        TL;DR: Open to freelance work &ndash;{' '}
        <Link className={mainClasses.bodyLink} to='/contact'>
          get in touch
        </Link>{' '}
        today!
      </Typography>
      <Typography variant='body2' paragraph>
        When I first started in my career (15 years ago, with all the youthful
        enthusiasm that entails) I often told people that the thing that excited
        me most about the prospect of working in technology is how quickly it
        changes: “I’ll always have to keep learning, because as soon as you
        master one thing, the next best thing comes out.”{' '}
      </Typography>

      <Typography variant='body2' paragraph>
        While I had no way of knowing quite how true that would turn out to be
        – I’m amazed every day at the pace of development – still today, it’s
        what I love the most about what I do.{' '}
      </Typography>

      <Typography variant='body2' paragraph>
        Starting off as a designer, working my way into front-end development,
        and ultimately discovering a love of the under-the-hood coding and logic
        that it takes to run a big website, I am proud to say that my expertise
        has greatly evolved and strengthened over the years.{' '}
      </Typography>

      <Typography variant='body2' paragraph>
        <div
          style={{
            float: 'right',
            width: '30%',
            borderLeft: '1px solid #CCC',
            paddingLeft: '25px',
            marginLeft: '25px',
          }}
        >
          <Typography variant='h6'>IN CASE YOU WERE WONDERING...</Typography>
          <Box mt={3}>
            <Typography variant='body1'>
              You can see more of the details of my job these days here:{' '}
            </Typography>
          </Box>
          <Box mt={1} mb={3}>
            <Button variant='outlined'>
              <Typography variant='body1'>RESUME </Typography>
            </Button>
          </Box>
        </div>
        I recently made the leap from being a LAMP stack developer to a MERN
        stack developer, and in the process, I have changed my whole coding
        style. You’ll find me most days reading article upon article about
        functional programming, wrestling with the best way to fetch and treat
        data in Javascript, engaging in endless Udemy courses, getting
        unreasonably excited about filtering and mapping my arrays, and
        generally geeking out over all the new tech I’m learning right now. In
        addition, I’m trying to take the time to write articles on what I’m
        learning to (A) help myself understand it better, and (B) help others
        who are similarly eager to learn.{' '}
      </Typography>

      <Typography variant='body2' paragraph>
        Because of where I am professionally – learning and discovering new
        things every day – I’m looking for a few projects to help me sharpen my
        chops and learn the ins and outs of this new tech stack even better. If
        you’re looking for a designer or developer; a website or an app; a
        collaborator or project director –{' '}
        <Tooltip title='amymurphy114@gmail.com' placement='top'>
          <Button
            className={classes.inlineBtn}
            href='mailto:amymurphy114@gmail.com'
          >
            drop me a line
          </Button>
        </Tooltip>{' '}
        or{' '}
        <Tooltip title='251-454-1107' placement='top'>
          <Button className={classes.inlineBtn} href='tel:251-454-1107'>
            give me a call
          </Button>
        </Tooltip>{' '}
        .
      </Typography>
    </>
  );
}

export default About;
