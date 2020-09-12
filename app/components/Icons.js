import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  icon: {
    maxWidth: '80px',
    padding: theme.spacing(1),
  },
}));

function Icons() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <img src='images/icon-react.png' alt='React' className={classes.icon} />
      </Grid>
      <Grid item>
        <img src='images/icon-node.png' alt='Node' className={classes.icon} />
      </Grid>
      <Grid item>
        <img src='images/icon-php.png' alt='PHP' className={classes.icon} />
      </Grid>
      <Grid item>
        <img src='images/icon-mysql.png' alt='MySQL' className={classes.icon} />
      </Grid>
      <Grid item>
        <img
          src='images/icon-js.png'
          alt='Javascript'
          className={classes.icon}
        />
      </Grid>
      <Grid item>
        <img src='images/icon-html.png' alt='HTML5' className={classes.icon} />
      </Grid>
      <Grid item>
        <img src='images/icon-css.png' alt='CSS3' className={classes.icon} />
      </Grid>

      <Grid item>
        <img
          src='images/icon-wordpress.png'
          alt='Wordpress'
          className={classes.icon}
        />
      </Grid>
    </Grid>
  );
}

export default Icons;
