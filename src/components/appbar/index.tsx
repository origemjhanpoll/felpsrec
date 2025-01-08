import { useState } from "react";
import { ISections } from "../../config/interfaces";
import { Button, alpha, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { theme } from "../../config/theme";

export function AppBarCustom({ sections }: { sections: ISections[] }) {
  const [tab, setTab] = useState(sections[0].id);
  const scrollStarted = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window : undefined,
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrollStarted
          ? theme.palette.primary.dark
          : alpha(theme.palette.primary.dark, 0.2),
        backdropFilter: "blur(8px)",
        borderBottomStyle: "solid",
        borderBottomWidth: 0.5,
        borderBottomColor: scrollStarted
          ? alpha(theme.palette.primary.main, 1)
          : alpha(theme.palette.background.default, 0.1),
        transition: "all",
        height: 72.0,
        transitionDuration: "250ms",
      }}
      elevation={0}
    >
      <Toolbar
        style={{ justifyContent: "center", flexDirection: "row", gap: 16 }}
      >
        {sections.map((item, index) => (
          <Button
            disableRipple
            key={index}
            onClick={() => {
              setTab(item.id);
              scrollToPosition(item.id);
            }}
          >
            <Typography
              fontWeight={
                tab == item.id
                  ? theme.typography.fontWeightBold
                  : theme.typography.fontWeightMedium
              }
              color={
                tab == item.id
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary
              }
            >
              {item.name}
            </Typography>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

function scrollToPosition(id: string) {
  const currentId = document.getElementById(id);
  const sizeAppBar = document
    .getElementsByTagName("header")
    .item(0)!.offsetHeight;

  window.scroll({
    top: currentId!.offsetTop - sizeAppBar,
    behavior: "smooth",
  });
}
