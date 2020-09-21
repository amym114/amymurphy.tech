import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import siteClasses from '../siteClasses';
import Icons from './Icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({}));

function Articles() {
  const mainClasses = siteClasses();
  const classes = useStyles();

  return (
    <>
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
    </>
  );
}

export default Articles;
