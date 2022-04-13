import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#303030",
    },
    secondary: {
      main: "#ff0000",
      contrastText: "#fff",
    },
    text: {
      secondary: "#808080",
    },
  },
});

export default theme;
