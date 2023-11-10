import { Button, alpha, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { theme } from "../../../theme";
import { ISections } from "../../../interfaces";
import { useState } from "react";

export function AppBarWeb({ sections }: { sections: ISections[] }) {
  const [tab, setTab] = useState(sections[0].id);
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
        borderBottomStyle: "solid",
        borderBottomWidth: "0.5px",
        borderBottomColor: scrollStarted
          ? alpha(theme.palette.primary.main, 1)
          : alpha(theme.palette.background.default, 0.1),
        transition: "all",
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
              history.pushState({}, "", item.url);
              scrollToPosition(item.id);
            }}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={
                tab == item.id
                  ? theme.palette.text.secondary
                  : theme.palette.text.primary
              }
              variant="body1"
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
