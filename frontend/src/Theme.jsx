
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    info: {
      main: "#bcd102",
    },
    divider: "rgba(214,214,214,0.32)",
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
