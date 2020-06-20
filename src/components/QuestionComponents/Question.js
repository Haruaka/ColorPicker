import React from "react";
import { Typography } from '@material-ui/core';
import { useStyles } from "../../styles";

export default function Question(props) {
  //const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Question #{props.num}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom style={{marginBottom:'3vh'}}>
        {props.name}
      </Typography>
    </div>
  );
}

