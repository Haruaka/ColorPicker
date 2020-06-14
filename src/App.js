
import React, {useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Image from './assets/rainbow_vortex.png';
import Paper from '@material-ui/core/Paper';
import StartQuiz from './components/StartQuiz'
import QuestionsPage from './pages/QuestionsPage'
import ResultsPage from './pages/ResultsPage'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    padding: '0 6vw',
    margin: '0 20px',
    height: '70vh',
  }
}));

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
        <Grid item xs={false} sm={5} md={6} className={classes.image}/>
        <Grid item xs={12} sm={7} md={6} component={Paper} elevation={6}>
          {setPage()}
        </Grid>
      </Grid>
    </Grid>
  );
}
