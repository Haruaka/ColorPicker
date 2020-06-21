import React, { useEffect } from "react";
import QuestionForm from '../components/QuestionComponents/QuestionForm'
import { useStyles } from "../styles";
import data from '../json/questions.json';

export default function QuestionsPage(props) {
  const classes = useStyles();
  const [questions, setQuestions] = React.useState(data.questions[0]);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

  useEffect(() => {
    let test = [];
    for(let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random()*data.questions.length);
      test.push(data.questions[num]);
      data.questions.splice(num, 1);
    }
    setQuestions(test);
    setIndex(0);
    console.log(data);
    console.log(test);
  },[])

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The Form has been submitted.");
    console.log(value);
  };

  const prevPage = () => {
    return index > 0 ? setIndex(index-1) : setIndex(0);
  }

  const nextPage = () => {
    return index < questions.length ? setIndex(index+1) : setIndex(questions.length - 1);
  }

  const switchQuestions = () => {
    return index >= 0 ? <QuestionForm index={index + 1} question={questions[index]} value={value} error={error} handleRadioChange={handleRadioChange} change={props.change} prev={prevPage} next={nextPage} max={questions.length}/> : <div></div>
  }

  return (
    <div className={classes.content}>
      <form onSubmit={handleSubmit}>
        {switchQuestions()}
      </form>
    </div>
  );
}

