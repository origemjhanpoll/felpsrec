import {
  Box,
  IconButton,
  Theme,
  alpha,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../theme";

export function AppBarComp() {
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));

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
          ? theme.palette.appbar.dark
          : alpha(theme.palette.appbar.main, 0.2),
        backdropFilter: "blur(8px)",
        borderBottomStyle: "solid",
        borderBottomWidth: "0.5px",
        borderBottomColor: alpha(theme.palette.secondary.main, 0.2),
        transition: "all",
        transitionDuration: "250ms",
      }}
      elevation={0}
    >
      {matches ? (
        <Toolbar style={{ justifyContent: "center", gap: 16 }}>
          {pages.map((item, index) => (
            <Box
              key={index}
              sx={{ cursor: "pointer" }}
              onClick={() => scrollToPosition(item.ref)}
            >
              <Typography
                fontWeight={theme.typography.fontWeightLight}
                color={theme.palette.secondary.main}
                variant="body1"
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Toolbar>
      ) : (
        <Toolbar style={{ justifyContent: "right" }}>
          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      )}
    </AppBar>
  );
}

function scrollToPosition(id: string) {
  const currentId = document.getElementById(id);
  window.scroll({
    top: currentId?.offsetTop,
    behavior: "smooth",
  });
}

const pages = [
  {
    text: "Home",
    ref: "sectionHome",
  },
  {
    text: "About",
    ref: "",
  },
  {
    text: "Services",
    ref: "",
  },
  {
    text: "Portfolio",
    ref: "",
  },
  {
    text: "Gallery",
    ref: "sectionGallery",
  },
  {
    text: "Testimonials",
    ref: "",
  },
  {
    text: "Contact",
    ref: "",
  },
];
