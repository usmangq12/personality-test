import React from "react";
import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  Box,
} from "@mui/material";

export const Question = ({ label, questionDetail, optionChange }) => {
  const { questionOptions, question, questionNo, selectedValue } =
    questionDetail;

  return (
    <Box>
      <h2>Question {questionNo} of 5</h2>
      <FormControl>
        <h3>{question}</h3>

        <RadioGroup value={selectedValue}>
          {questionOptions.map(({ name, value, option }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={option}
              onChange={() => {
                optionChange(name, value);
              }}
              name={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
