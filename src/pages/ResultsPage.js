import React from "react";
import { Button, Grid, Typography} from '@material-ui/core';

export default function ResultsPage(props) {
    function changePage() { props.change(0) }

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
      <Typography variant="h3" component="h1" gutterBottom>
        RESULTS HERE
      </Typography>
      <Button onClick={changePage} variant="contained" color="secondary">
        Return
      </Button>
    </Grid>
  );
}
