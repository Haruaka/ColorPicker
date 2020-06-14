import React from "react";
import { Button, Grid, Typography} from '@material-ui/core';

export default function QuestionsPage(props) {
  function changePage() { props.change(2) }

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
      <Typography variant="h3" component="h1" gutterBottom>
        PAGE STUFF
      </Typography>
      <Button onClick={changePage} variant="contained" color="secondary">
        Submit
      </Button>
    </Grid>
  );
}
