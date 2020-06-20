import React from "react";
import { Button, Typography } from '@material-ui/core';
import QuestionForm from '../components/QuestionComponents/QuestionForm'
import { useStyles } from "../styles";
import data from '../json/questions.json';

export default function QuestionsPage(props) {
  const classes = useStyles();
  const num = 1;
  const question = React.useState(data.questions[3]);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The Form has been submitted.");
    console.log(value);
  };

  function changePage() { console.log(question); props.change(2); }

  return (
    <div className={classes.content}>
      <form onSubmit={handleSubmit}>
        <QuestionForm num={num} question={question[0]} value={value} error={error} handleRadioChange={handleRadioChange}/>
      </form>
      <Button onClick={changePage} variant="contained" color="secondary">
        Submit
      </Button>
    </div>
  );
}

