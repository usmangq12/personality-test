import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Result(props) {
  const { isFinish } = props;

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"100vh"}
      marginRight={"10%"}
      marginLeft={"10%"}
    >
      <Box>
        {isFinish ? (
          <Box>
            {" "}
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              fontFamily={
                "Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif"
              }
            >
              <h1>" You are an Extrovert! "</h1>
            </Box>
            <h3>
              On the positive side, extroverts are often described as talkative,
              sociable, action-oriented, enthusiastic, friendly, and out-going.
              On the negative side, they are sometimes described as
              attention-seeking, easily distracted, and unable to spend time
              alone
            </h3>{" "}
          </Box>
        ) : (
          <Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              fontFamily={
                "Gotham, 'Helvetica Neue', Helvetica, Arial, sans-serif"
              }
            >
              <h1>" You are an Introvert! "</h1>
            </Box>
            <h3>
              An introvert is a person with qualities of a personality type
              known as introversion, which means that they feel more comfortable
              focusing on their inner thoughts and ideas, rather than what's
              happening externally. They enjoy spending time with just one or
              two people, rather than large groups or crowds
            </h3>
          </Box>
        )}
      </Box>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Reset
        </Button>
      </Link>
    </Box>
  );
}
