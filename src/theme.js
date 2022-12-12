import { createTheme } from "@mui/material";

const theme = createTheme({
  // palette: {
  main: "#2e937a",
  themeLighGrey: "#dcdcdb",
  // },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#2e937a",
          fontSize: "1.5rem",
          fontWeight: "550",
        },
        subtitle1: {
          color: "#5e5a38",
          opacity: "0.9",
          fontWeight: "600",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#2e937a",
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#2e937a",

          "&:hover": {
            backgroundColor: "#2e937a",
          },
        },
      },
    },

    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active, &.Mui-completed": {
            color: "#dcdcdb",
            "& .MuiStepIcon-text": {
              fill: "#2e937a",
            },
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#2e937a",
          "&.Mui-checked": {
            color: "#2e937a",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#dcdcdb",
        },
      },
    },
  },
});
export default theme;
