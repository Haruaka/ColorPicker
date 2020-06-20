import React from "react";
import { Button, Typography } from '@material-ui/core';
import { useStyles } from "../styles";

export default function ResultsPage(props) {
  const classes = useStyles();
  function changePage() { props.change(0) }

  return (
    <div className={classes.content}>
      <Typography variant="h3" component="h1" gutterBottom>
        YOUR RESULTS
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom style={{marginBottom:'5vh'}}>
        WEEEEEE
      </Typography>
      <Button onClick={changePage} variant="contained" color="secondary">
        Retry
      </Button>
    </div>
  );
}

