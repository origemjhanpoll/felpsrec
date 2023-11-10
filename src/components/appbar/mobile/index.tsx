import { IconButton, alpha, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../../theme";
import { useState } from "react";
import { ISections } from "../../../interfaces";

export function AppBarMobile({ sections }: { sections: ISections[] }) {
  const [isPress, setIsPress] = useState(false);

  const scrollStarted = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window : undefined,
  });

  return (
    <AppBar
      position="fixed"
      style={{
        background: scrollStarted
          ? theme.palette.primary.dark
          : alpha(theme.palette.primary.dark, 0.2),
        backdropFilter: "blur(8px)",
        transition: "all",
        transitionDuration: "250ms",
        width: "auto",
        margin: 16,
      }}
      elevation={0}
    >
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsPress((prev) => !prev)}
        >
          {isPress ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        {/* {sections.map((item, index) => (
          <Box
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => scrollToPosition(item.id)}
          >
            <Typography
              fontWeight={theme.typography.fontWeightLight}
              color={theme.palette.text.primary}
              variant="body1"
            >
              {item.name}
            </Typography>
          </Box>
        ))} */}
      </Toolbar>
    </AppBar>
  );
}

// function scrollToPosition(id: string) {
//   const currentId = document.getElementById(id);
//   const sizeAppBar = document
//     .getElementsByTagName("header")
//     .item(0)!.offsetHeight;

//   window.scroll({
//     top: currentId!.offsetTop - sizeAppBar,
//     behavior: "smooth",
//   });
// }
