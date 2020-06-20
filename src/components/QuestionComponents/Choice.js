import React from "react";
import { Radio, FormControlLabel } from '@material-ui/core';

export default function Choice(props) {
  return (
    <FormControlLabel value={props.choice.name} control={<Radio />} label={props.choice.name} />
  );
}

