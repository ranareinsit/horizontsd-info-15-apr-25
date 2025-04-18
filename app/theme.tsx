import { createTheme } from "@mui/material/styles";
import { lightBlue, blue, grey, blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[600],
          light: blue[50],
          dark: blue[800],
          contrastText: blue[400],
        },
        secondary: {
          main: lightBlue[500],
          light: lightBlue[50],
          dark: lightBlue[900],
          contrastText: lightBlue[500],
        },
        text: {
          primary: grey[900],
          secondary: grey[800]
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: blue[500],
          light: blue[50],
          dark: blueGrey[900],
          contrastText: blue[800],
        },
        secondary: {
          main: lightBlue[500],
          light: lightBlue[50],
          dark: lightBlue[900],
          contrastText: lightBlue[800],
        },
        text: {
          primary: grey[50],
          secondary: grey[100]
        },
      },
    },
  },
});
