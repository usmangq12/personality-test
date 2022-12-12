import React from "react";
import { Button, Typography, Card, Grid, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Psychometric from "../assets/images/Psychometric.png";
import test from "../assets/images/test.svg";
import { Container } from "@mui/system";

export function Home() {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
        height="100vh"
        fontFamily="'Roboto', sans-serif"
        gap={5}
      >
        <Grid item xs={12} sm={7} pt={{ xs: 3, sm: 0 }}>
          <CardMedia component={"img"} alt="test" src={test} />
        </Grid>
        <Grid item xs={12} sm={5} pb={{ xs: 3, sm: 0 }}>
          <Card
            sx={{
              borderRadius: 4,
              color: "black",
              height: "auto",
              background: "#dcdcdb",
              p: 3,
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
