import { createTheme } from "@mui/material/styles";
import { red, indigo, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: red[300],
      main: "#fc3c42",
      dark: red[900],
    },
    secondary: {
      light: indigo[300],
      main: "#09179b",
      dark: "#081960",
    },
    ebony: {
      light: grey[500],
      main: grey[700],
      dark: grey[900],
    },
    ivory: {
      light: grey[50],
      main: "#f3f4f3",
      dark: grey[400],
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    ebony: Palette["primary"];
    ivory: Palette["primary"];
  }

  interface PaletteOptions {
    ebony?: PaletteOptions["primary"];
    ivory?: PaletteOptions["primary"];
  }
}
