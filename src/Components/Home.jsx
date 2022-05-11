import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import testImg from "../assets/images/test1.png";

export function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="90vh"
      fontFamily="'Roboto', sans-serif"
    >
      <Box>
        <Container>
          <Box
            fontWeight="bold"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <img src={testImg} width={"190px"} alt="brain" />

            <Typography
              fontSize={"1.5rem"}
              fontWeight={"550"}
              mt={3}
              mb={2}
              textTransform={"uppercase"}
            >
              {" "}
              Are you an introvert or an extrovert?
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ textAlign: "center", fontWeight: "normal" }}
            >
              Introverts are generally more sensitive to low-intensity stimuli -
              they are mentally alerted to inputs that extroverts may miss."
              <cite>-Laurie Helgoe.</cite>
            </Typography>

            <Link to="showForm" style={{ textDecoration: "none" }}>
              <Button sx={{ mt: 2 }} variant="contained" color="primary">
                Let's Evaluate!
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
