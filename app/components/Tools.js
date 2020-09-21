import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  icon: {
    maxWidth: '80px',
    padding: theme.spacing(1),
  },
}));

function Tools() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <img
          src='images/icon-vscode.png'
          alt='VS Code'
          className={classes.icon}
        />
      </Grid>
      <Grid item>
        <img
          src='images/icon-github.png'
          alt='Github'
          className={classes.icon}
        />
      </Grid>
      <Grid item>
        <img
          src='images/icon-postman.png'
          alt='Postman'
          className={classes.icon}
        />
      </Grid>
      <Grid item>
        <img
          src='images/icon-sequelpro.png'
          alt='Sequel Pro'
          className={classes.icon}
        />
      </Grid>
      <Grid item>
        <img src='images/icon-xd.png' alt='Adobe XD' className={classes.icon} />
      </Grid>
      <Grid item>
        <img
          src='images/icon-photoshop.png'
          alt='Adobe Photoshop'
          className={classes.icon}
        />
      </Grid>
    </Grid>
  );
}

export default Tools;
