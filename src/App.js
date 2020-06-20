
import React, {useState} from "react";
import { Grid, CssBaseline, Paper } from '@material-ui/core';
import StartQuiz from './components/StartQuiz'
import QuestionsPage from './pages/QuestionsPage'
import ResultsPage from './pages/ResultsPage'
import { useStyles } from "./styles";

export default function App() {
  const classes = useStyles();
  const [view, setView] = useState(0);

  function changePage (num) {
    if (num === 0) {
      setView(0)
    } else if (num === 1) {
      setView(1)
    }
    else {
      setView(2)
    }
  }

  const setPage = () => {
    if (view === 0){
      return <StartQuiz change={changePage}/>
    }
    else if (view === 1){
      return <QuestionsPage change={changePage}/>
    }
    else {
      return <ResultsPage change={changePage}/>
    }
  }

  return (
    <Grid container component="main" alignItems="center" justify="center" className={classes.root}>
      <Grid container className={classes.container}>
        <CssBaseline />
        <Grid item xs={false} sm={5} md={5} className={classes.image}/>
        <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6}>
          {setPage()}
        </Grid>
      </Grid>
    </Grid>
  );
}
