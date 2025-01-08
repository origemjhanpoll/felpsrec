import "./App.css";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";

import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { GalleryPage } from "./pages/gallery";
import { ContactPage } from "./pages/contact";
import { ISections } from "./config/interfaces";
import { AppBarCustom } from "./components/appbar";

const sections: ISections[] = [
  {
    id: "sectionHome",
    name: "Home",
    url: "/home",
  },
  {
    id: "sectionAbout",
    name: "About",
    url: "/about",
  },
  {
    id: "sectionGallery",
    name: "Gallery",
    url: "/gallery",
  },
  {
    id: "sectionContact",
    name: "Contact",
    url: "/contact",
  },
];

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AppBarCustom sections={sections} />
        <HomePage />
        <AboutPage />
        <GalleryPage />
        <ContactPage />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
