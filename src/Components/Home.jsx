import React from "react";
import { Box, Button, Typography, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Psychometric from "../assets/images/Psychometric.png";
import test from "../assets/images/test.svg";
import { Container } from "@mui/system";

export function Home() {
  return (
    <Container>
      <Grid
        container
        justifyContent={{ xs: "center", md: "flex-end" }}
        alignItems="center"
        height="100vh"
        fontFamily="'Roboto', sans-serif"
      >
        <Grid item xs={7}>
          <img src={test} width="500px" height={"500px"} />
        </Grid>
        <Grid xs={5}>
          <Card
            sx={{
              // width: { xs: "90%", sm: "70%", md: "30%" },
              borderRadius: 4,
              // bgcolor: "transparent",
              color: "black",
              height: "auto",
              background: "#dcdcdb",
              p: 3,
              // ml: 2,
              // mr: { xs: 2, md: 14 },
              //   boxShadow: "0 5px 15px rgba(0,0,0,.5)",
              //   position: "relative",
              //   zIndex: "1",
              //   "&:before": {
              //     position: "absolute",
              //     content: '""',
              //     top: "0",
              //     left: "0",
              //     width: "100%",
              //     height: "100%",
              //     opacity: "0.3",
              //     background: "#fff",
              //     zIndex: "-1",
              //   },
            }}
          >
            <Grid
              item
              fontWeight="bold"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={Psychometric} width={"190px"} alt="brain" />

              <Typography
                variant="h1"
                mt={3}
                mb={2}
                textTransform={"uppercase"}
                textAlign={{ xs: "center" }}
                color="#2e937a"
                textShadow="unset"
                fontWeight={"700"}
              >
                Are you an introvert or an extrovert?
              </Typography>
              <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                Introverts are generally more sensitive to low-intensity stimuli
                - they are mentally alerted to inputs that extroverts may miss."
                <cite>-Laurie Helgoe.</cite>
              </Typography>

              <Link to="questions" style={{ textDecoration: "none" }}>
                <Button sx={{ mt: 2 }} variant="contained" color="primary">
                  Let's Evaluate!
                </Button>
              </Link>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
