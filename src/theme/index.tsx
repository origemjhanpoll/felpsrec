import { alpha, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    appbar: Palette["primary"];
  }

  interface PaletteOptions {
    appbar?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#F4D955",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffffff",
      dark: "#ba000d",
      contrastText: "#000",
    },
    appbar: {
      main: "#121B1C",
      dark: "#0C1112",
      light: "#C1C0BB",
      // red: "red",
    },
  },
});

export const colorPallete = {
  black: "#121B1C",
  grey: "#3D403D",
  red: "#9D0105",
  redLight: "#C34947",
  light: "#C1C0BB",
};
