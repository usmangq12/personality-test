import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";

import { steps, questions } from "../constants";
import { Question } from "./Question";

export default function FormComponent(props) {
  const { setFinishStatus } = props;
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
    if (activeStep === 0 && answers.Q1 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 1 && answers.Q2 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 2 && answers.Q3 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 3 && answers.Q4 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 4 && answers.Q5 !== null) {
      setDisable(!disable);
    }
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
    if (activeStep === 0 && answers.Q1 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 1 && answers.Q2 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 2 && answers.Q3 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 3 && answers.Q4 !== null) {
      setDisable(!disable);
    }
    if (activeStep === 4 && answers.Q5 !== null) {
      setDisable(!disable);
    }
  };

  const handleFinish = (e) => {
    let sum = 0;
    for (let i in answers) {
      sum += answers[i];
    }
    if (sum > 39) {
      setFinishStatus(true);
    } else {
      setFinishStatus(false);
    }
  };

  const selectOption = (name, value) => {
    setDisable(false);
    setAnswers({ ...answers, [name]: value });
  };

  // definning array for steppers

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box>
            <Question
              label="Question 1"
              answers={answers[0]}
              questionDetail={questions[0]}
              optionChange={(name, value) => {
                selectOption(name, value);
              }}
            />
          </Box>
        );

      case 1:
        return (
          <Box>
            <Question
              label="Question 2"
              answers={answers[1]}
              questionDetail={questions[1]}
              optionChange={(name, value) => {
                selectOption(name, value);
              }}
            />
          </Box>
        );

      case 2:
        return (
          <Box>
            <Question
              label="Question 3"
              answers={answers[2]}
              questionDetail={questions[2]}
              optionChange={(name, value) => {
                selectOption(name, value);
              }}
            />
          </Box>
        );

      case 3:
        return (
          <Box>
            <Question
              label="Question 4"
              answers={answers[3]}
              questionDetail={questions[3]}
              optionChange={(name, value) => {
                selectOption(name, value);
              }}
            />
          </Box>
        );

      case 4:
        return (
          <Box>
            <Question
              label="Question 5"
              answers={answers[4]}
              questionDetail={questions[4]}
              optionChange={(name, value) => {
                selectOption(name, value);
              }}
            />
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
