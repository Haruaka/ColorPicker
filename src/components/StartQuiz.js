import React from "react";
import { Button, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  },
}));

export default function StartQuiz(props) {
  const classes = useStyles();
  function changePage(){ props.change(1) }

  return (
    <div className={classes.paper}>
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
