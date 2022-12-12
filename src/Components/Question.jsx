import React from "react";
import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  Box,
  Typography,
} from "@mui/material";

export const Question = ({
  details: { question, questionOptions },
  answer,
  setAnswer,
}) => {
  // const { questionOptions, question, selectedValue } = questionDetail;

  return (
    <Box>
      {/* <h2>{label} of 5</h2> */}
      <FormControl>
        <Typography variant="h1">{question}</Typography>

        <RadioGroup value={answer}>
          {questionOptions.map(({ name, value, option, index }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio color="primary" />}
              label={<Typography variant="subtitle1">{option}</Typography>}
              checked={answer === value}
              onChange={(event) => {
                setAnswer(event.target.value);
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
