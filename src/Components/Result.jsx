import { Box, Button, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import Psychometric from "../assets/images/Psychometric.png";

export function Result(props) {
  const { isFinish } = props;

  return (
    <Container>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        height={"100vh"}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: 4,
          }}
        >
          <Box>
            {isFinish ? (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img src={Psychometric} width={"190px"} alt="brain" />
                <Box
                  mt={2}
                  mb={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  fontFamily={
                    "Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                  }
                >
                  <Typography variant="h1">
                    " You are an Extrovert! "
                  </Typography>
                </Box>
                <Typography variant="subtitle1" textAlign={"center"}>
                  On the positive side, extroverts are often described as
                  talkative, sociable, action-oriented, enthusiastic, friendly,
                  and out-going. On the negative side, they are sometimes
                  described as attention-seeking, easily distracted, and unable
                  to spend time alone
                </Typography>{" "}
              </Box>
            ) : (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img src={Psychometric} width={"190px"} alt="brain" />
                <Box
                  mt={2}
                  mb={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"row"}
                  fontFamily={
                    "Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                  }
                >
                  <Typography variant="h1">
                    " You are an Introvert! "
                  </Typography>
                </Box>
                <Typography variant="subtitle1" textAlign={"center"}>
                  An introvert is a person with qualities of a personality type
                  known as introversion, which means that they feel more
                  comfortable focusing on their inner thoughts and ideas, rather
                  than what's happening externally. They enjoy spending time
                  with just one or two people, rather than large groups or
                  crowds
                </Typography>
              </Box>
            )}
          </Box>
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ pl: 5, pr: 5, mt: 2 }}
              >
                Reset
              </Button>
            </Link>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
