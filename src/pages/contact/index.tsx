import { Box, Typography } from "@mui/material";
import { theme } from "../../config/theme";

export function ContactPage() {
  return (
    <section id="sectionContact">
      <Box
        height={window.innerHeight}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Typography fontSize={26} fontWeight={theme.typography.fontWeightBold}>
          Contact Page...
        </Typography>
      </Box>
    </section>
  );
}
