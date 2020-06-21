import React from "react";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import Question from './Question';
import Choice from './Choice';
import { useStyles } from "../../styles";
import zIndex from "@material-ui/core/styles/zIndex";

export default function QuestionForm(props) {
  const classes = useStyles();
  function changePage() { props.change(2); }
  const getChoices = () => { return props.question.choices.map(value => <Choice key={value.name} choice={value}/>)}

  const setBtns = () => {
    if (props.index === 1) {
      return <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={props.next}>Next</Button>
      </div>
    }
    else if (props.index < props.max && props.index > 1) {
      return <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={props.prev}>Previous</Button>
        <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={props.next}>Next</Button>
      </div>
    }
    else {
      return <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={changePage}>Submit</Button>
    }
  }

  return (
    <FormControl component="fieldset" error={props.error} className={classes.formControl}>
      <Question index={props.index} name={props.question.question}/>
      <RadioGroup aria-label="quiz" name="quiz" value={props.value} onChange={props.handleRadioChange}>
        {getChoices()}
      </RadioGroup>
      {setBtns()}
    </FormControl>
  );
}

