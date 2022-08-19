import React from "react";
import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  Box,
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
        <h3>{question}</h3>

        <RadioGroup value={answer}>
          {questionOptions.map(({ name, value, option, index }) => (
            <FormControlLabel
              key={value}
              value={value}
              // onSelect={selectedValue}
              control={<Radio />}
              label={option}
              checked={answer == value}
              onChange={(event) => {
                console.log("Answer->", event.target.value);
                setAnswer(event.target.value);
              }}
              // name={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
