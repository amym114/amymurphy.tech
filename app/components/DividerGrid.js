import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

function DividerGrid() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mt={4} mb={4}>
          <Divider className={classes.divider} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DividerGrid;
