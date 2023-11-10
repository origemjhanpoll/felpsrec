import "./App.css";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

import HomePage from "./pages/home";
import GalleryPage from "./pages/gallery";
import AboutPage from "./pages/about";
import { AppBar } from "./components/appbar";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AppBar />
        <HomePage />
        <AboutPage />
        <GalleryPage />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
