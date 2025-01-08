import {
  Box,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";
import video from "../../assets/videos/videoteste.mp4";

import { keyframes } from "@mui/system";

export function HomePage() {
  const isMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  const spin = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(202, 43, 48, 1.0);
    
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
`;

  return (
    <section id="sectionHome">
      <Box
        sx={{
          height: window.innerHeight,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video
          autoPlay
          loop
          muted
          height={window.innerHeight}
          width="100%"
          style={{ margin: 0, padding: 0, objectFit: "cover" }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <Box
          sx={{
            background: (theme) => theme.palette.common.black,
            opacity: 0.5,
            height: window.innerHeight,
            width: "100%",
            position: "absolute",
          }}
        />
        <Box
          position="absolute"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            aria-label="Play Icon"
            color="primary"
            sx={{
              width: 60,
              height: 60,
              animation: `${spin} 2s infinite ease`,
            }}
          >
            <PlayCircleTwoToneIcon
              fontSize="inherit"
              sx={{
                width: 75,
                height: 75,
              }}
            />
          </IconButton>
          <Typography
            textAlign="center"
            fontWeight={(theme) => theme.typography.fontWeightBold}
            color={(theme) => theme.palette.primary.contrastText}
            sx={{
              fontSize: isMd ? "90px" : "40px",
              transition: "all",
              transitionDuration: "250ms",
              lineHeight: 1.2,
            }}
          >
            IMATERIAL
            <br />
            PRODUTORA
          </Typography>
        </Box>
      </Box>
    </section>
  );
}
