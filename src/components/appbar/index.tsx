// import { Theme, useMediaQuery } from "@mui/material";
import { AppBarWeb } from "./web";
// import { AppBarMobile } from "./mobile";
import { ISections } from "../../interfaces";

export function AppBar() {
  // const isMD = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  return <AppBarWeb sections={sections} />;
}
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
