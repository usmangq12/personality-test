import React, { useState, useEffect } from "react";
import "./FormComponentStyle.css";
import {
  Q1Detail,
  Q2Detail,
  Q3Detail,
  Q4Detail,
  Q5Detail,
} from "./QuestionsArray";
import {
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

export default function FormComponent(props) {
  const { setFinishStatus } = props;
  const [q1SelectedValue, setQ1SelectedValue] = useState(null);
  const [q2SelectedValue, setQ2SelectedValue] = useState(null);
  const [q3SelectedValue, setQ3SelectedValue] = useState(null);
  const [q4SelectedValue, setQ4SelectedValue] = useState(null);
  const [q5SelectedValue, setQ5SelectedValue] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({
    Q1: null,
    Q2: null,
    Q3: null,
    Q4: null,
    Q5: null,
  });
  const [disable, setDisable] = useState(true);

  // function on Next button

  const nextStep = () => {
    if (steps.length) {
      setActiveStep(activeStep + 1);
    }

    setDisable(true);
  };

  // function on Previous button

  const previousStep = (e) => {
    if (activeStep !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }

    if (activeStep !== steps.length) {
      setActiveStep(activeStep - 1);
    }
  };

  // function on Fininsh button

  console.log(answers);

  let sum=0;

  const handleFinish = (e) => {
    for (let i in answers) {
      sum += answers[i];
    }
    console.log(sum);
    if (sum > 39) {
      setFinishStatus(true);
    } else {
      setFinishStatus(false);
    }
  };

  const handleQuestionOne = (e) => {
    setDisable(false);

    setQ1SelectedValue(e.value);

    const value = e.value;
    console.log(Q1Detail);
    const name = e.name;

    setAnswers({ ...answers, [name]: value });
  };

  const handleQuestionTwo = (e) => {
    // handleRadio(item)

    setQ2SelectedValue(e.value);

    const value = e.value;
    console.log(Q2Detail);
    const name = e.name;

    setAnswers({ ...answers, [name]: value });
    setDisable(false);
  };

  const handleQuestionThree = (e) => {
    setQ3SelectedValue(e.value);

    const value = e.value;
    console.log(Q3Detail);
    const name = e.name;

    setAnswers({ ...answers, [name]: value });
    setDisable(false);
  };

  const handleQuestionFour = (e) => {
    setQ4SelectedValue(e.value);

    const value = e.value;
    console.log(Q2Detail);
    const name = e.name;

    setAnswers({ ...answers, [name]: value });
    setDisable(false);
  };

  const handleQuestionFive = (e) => {
    setQ5SelectedValue(e.value);

    const value = e.value;
    console.log(Q2Detail);
    const name = e.name;

    setAnswers({ ...answers, [name]: value });

    setDisable(false);
  };

  // definning array for steppers

  const steps = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
  ];

  const isDisableToMoveForward =
    activeStep === steps.length &&
    q1SelectedValue === null &&
    q2SelectedValue === null &&
    q3SelectedValue === null &&
    q4SelectedValue === null &&
    q5SelectedValue === null;

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box>
            <h2>Question 1 of 5</h2>
            <FormControl>
              <h3>
                You are really busy at work and a colleague is telling you their
                life story and personal woes. You:
              </h3>

              <RadioGroup value={q1SelectedValue}>
                {Q1Detail.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio color="primary" />}
                    label={item.option}
                    onChange={() => handleQuestionOne(item)}
                    name="Q1"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <Box>
            <h2>Question 2 of 5</h2>
            <FormControl>
              <h3>
                You have been sitting in the doctor's waiting room for more than
                25 minutes. You:
              </h3>

              <RadioGroup value={q2SelectedValue}>
                {Q2Detail.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio color="primary" />}
                    label={item.option}
                    onChange={() => handleQuestionTwo(item)}
                    name="Q2"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 2:
        return (
          <Box>
            <h2>Question 3 of 5</h2>
            <FormControl>
              <h3>You are taking part in a guided tour of a museum. You:</h3>

              <RadioGroup value={q3SelectedValue}>
                {Q3Detail.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    control={<Radio color="primary" />}
                    label={item.option}
                    value={item.value}
                    onChange={() => handleQuestionThree(item)}
                    name="Q3"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 3:
        return (
          <Box>
            <h2>Question 4 of 5</h2>
            <FormControl>
              <h3>
                During dinner parties at your home, you have a hard time with
                people who:
              </h3>

              <RadioGroup value={q4SelectedValue}>
                {Q4Detail.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio color="primary" />}
                    label={item.option}
                    onChange={() => handleQuestionFour(item)}
                    name="Q4"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        );

      case 4:
        return (
          <Box>
            <h2>Question 5 of 5</h2>
            <FormControl>
              <h3>
                You have been see a movie with your family and the reviews are
                mixed. You:
              </h3>

              <RadioGroup value={q5SelectedValue}>
                {Q5Detail.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio color="primary" />}
                    label={item.option}
                    onChange={() => handleQuestionFive(item)}
                    name="Q5"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        );

      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Box className="mainbg">
      <Box>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stepper
            sx={{ mt: 1, width: "70%", color: "white", pt: 2 }}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label} className={"red"}>
                <StepLabel sx={{ color: "white" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: 4,
              ml: 4,
              pl: 4,
              mr: 4,
              pt: 2,
              boxShadow: 3,
              bgcolor: "rgba(255,255,255,0.3)",
              width: "70%",
            }}
          >
            <Box
              sx={{
                ml: 4,
                mr: 4,
                width: "70%",
                height: "auto",
              }}
            ></Box>
            <Box>{getStepContent(activeStep)}</Box>

            <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
              <Button
                disabled={activeStep === 0}
                variant="contained"
                color="primary"
                onClick={(e) => previousStep(e)}
              >
                Previous
              </Button>
              {activeStep === steps.length - 1 ? (
                <Link to="/result" style={{ textDecoration: "none" }}>
                  <Button
                    disabled={disable}
                    sx={{ ml: "4px" }}
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleFinish(e)}
                  >
                    Finish
                  </Button>
                </Link>
              ) : (
                <Button
                  disabled={disable}
                  sx={{ ml: "4px" }}
                  variant="contained"
                  color="primary"
                  onClick={(e) => nextStep(e)}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
