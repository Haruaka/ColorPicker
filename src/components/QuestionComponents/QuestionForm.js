import React from "react";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import Question from './Question';
import Choice from './Choice';
import { useStyles } from "../../styles";

export default function QuestionForm(props) {
  const classes = useStyles();
  const getChoices = () => {
    return props.question.choices.map(value => <Choice key={value.name} choice={value}/>)
  }
  return (
    <FormControl component="fieldset" error={props.error} className={classes.formControl}>
      <Question num={props.num} name={props.question.question}/>
      <RadioGroup aria-label="quiz" name="quiz" value={props.value} onChange={props.handleRadioChange}>
        {getChoices()}
      </RadioGroup>
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Next
      </Button>
    </FormControl>
  );
}

