import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

const theme = createTheme({
  palette: {
    background: {
      default: "#F9FAFB",
      paper: "#FFF",
    },
    primary: {
      main: "#5048E5",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#374151",
      secondary: "#9CA3AF",
    },
  },
  typography: {
    allVariants: {
      ...inter.style,
    },
    button: {
      textTransform: "initial",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08);",
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
