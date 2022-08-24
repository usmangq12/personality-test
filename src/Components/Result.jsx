import { Box, Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Psychometric from "../assets/images/Psychometric.png";

export function Result(props) {
  const { isFinish } = props;

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"100vh"}
      backgroundColor={"#6dc7e8"}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 4,
          ml: 4,
          pl: 4,
          pr: 4,
          mr: 4,
          pt: 2,
          pb: 2,
          width: "70%",

          bgcolor: "transparent",
          color: "black",
          height: "auto",
          boxShadow: "0 5px 15px rgba(0,0,0,.5)",
          position: "relative",
          zIndex: "1",
          "&:before": {
            position: "absolute",
            content: '""',
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            opacity: "0.3",
            background: "#fff",
            zIndex: "-1",
          },
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
                <Typography variant="h1">" You are an Extrovert! "</Typography>
              </Box>
              <Typography variant="subtitle1">
                On the positive side, extroverts are often described as
                talkative, sociable, action-oriented, enthusiastic, friendly,
                and out-going. On the negative side, they are sometimes
                described as attention-seeking, easily distracted, and unable to
                spend time alone
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
                <Typography variant="h1">" You are an Introvert! "</Typography>
              </Box>
              <Typography variant="subtitle1">
                An introvert is a person with qualities of a personality type
                known as introversion, which means that they feel more
                comfortable focusing on their inner thoughts and ideas, rather
                than what's happening externally. They enjoy spending time with
                just one or two people, rather than large groups or crowds
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
  );
}
