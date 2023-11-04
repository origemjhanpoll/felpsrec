import "./App.css";
import { Fragment } from "react";
import { AppBarComp } from "./components/appbar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import HomePage from "./pages/home";
import GalleryPage from "./pages/gallery";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AppBarComp />
        <HomePage />
        <GalleryPage />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
