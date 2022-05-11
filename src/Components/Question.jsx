import React from "react";
import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  Box,
} from "@mui/material";

export const Question = ({
  label,
  questionDetail,
  questionDetails,
  optionChange,
}) => {
  const { questionOptions, selectedValue } = questionDetail;
  return (
    <Box>
      <h2>Question 1 of 5</h2>
      <FormControl>
        <h3>
          You are really busy at work and a colleague is telling you their life
          story and personal woes. You:
        </h3>

        <RadioGroup value={selectedValue}>
          {questionOptions.map(({ name, value, option }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio color="primary" />}
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
