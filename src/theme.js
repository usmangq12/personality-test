import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#fff",
          fontSize: "1.5rem",
          textShadow: "1px 1px #c39b52",
          fontWeight: "550",
        },
        subtitle1: {
          color: "#5e5a38",
          opacity: "0.9",
          fontWeight: "600",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#c39b52",

          "&:hover": {
            backgroundColor: "#c39b52",
          },
        },
      },
    },

    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active, &.Mui-completed": {
            color: "#c39b52",
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          " &.Mui-checked": {
            color: "#c39b52",
          },
        },
      },
    },
  },
});
export default theme;
