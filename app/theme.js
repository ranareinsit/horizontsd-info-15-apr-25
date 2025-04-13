'use client'
import { createTheme } from '@mui/material/styles';
import { red, cyan, grey, blueGrey, common } from '@mui/material/colors';
export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: cyan[800],
          contrastText: common['white'],
          background: blueGrey[900],
        },
        secondary: {
          main: blueGrey[50],
          background: grey[900],
          contrastText: cyan[100],

        },
        text: {
          primary: grey['900'],
          secondary: grey['800']
        },
        mode: "light",
      },
    },
    dark: {
      palette: {
        primary: {
          main: cyan[50],
          contrastText: common.black,
          background: grey[900],
        },
        secondary: {
          main: cyan[600],
          background: grey[900],
          contrastText: grey[50],
        },
        text: {
          primary: grey['100'],
          secondary: grey['200']
        },
        mode: "dark",
      },
    },
  },
});
