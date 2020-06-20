import React from "react";
import { Button, Typography} from '@material-ui/core';
import { useStyles } from "../styles";

export default function StartQuiz(props) {
  const classes = useStyles();
  function changePage(){ props.change(1) }

  return (
    <div className={classes.content}>
      <Typography variant="h3" component="h1" gutterBottom>
        Color Picker
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom style={{marginBottom:'5vh'}}>
        Simple Personality Quiz
      </Typography>
      <Button onClick={changePage} variant="contained" color="secondary">
        Start the Quiz
      </Button>
    </div>
  );
}
