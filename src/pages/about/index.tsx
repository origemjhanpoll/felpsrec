import { Box, Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../config/theme";

export function AboutPage() {
  const isMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  return (
    <section id="sectionAbout">
      <Grid
        container
        columns={12}
        pt={isMd ? 16 : 8}
        pb={isMd ? 16 : 8}
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          paddingX={4}
        >
          <Box
            width={isMd ? "60%" : "90%"}
            textAlign={isMd ? "start" : "center"}
          >
            <Typography
              fontSize={isMd ? 36 : 26}
              fontWeight={theme.typography.fontWeightBold}
            >
              PRODUTORA IMATERIAL
            </Typography>
            <Typography
              fontSize={isMd ? 36 : 26}
              fontWeight={theme.typography.fontWeightBold}
              color={theme.palette.primary.main}
              sx={{
                borderBottom: "4px solid",
                borderColor: theme.palette.primary.main,
              }}
            >
              equipe top
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          pt={isMd ? 0 : 8}
          paddingX={4}
          textAlign={isMd ? "start" : "center"}
        >
          <Typography
            fontSize={isMd ? 22 : 18}
            fontWeight={theme.typography.fontWeightLight}
          >
            Maecenas vitae interdum tellus, sed dignissim tortor. Suspendisse
            vitae mi vel elit tincidunt dignissim. In et justo eget ligula
            pretium congue eget id libero. Phasellus nibh quam, vulputate non
            turpis vel, dignissim fermentum dolor. Nullam nec erat sed ligula
            cursus dapibus ut eget massa. Nullam hendrerit vehicula
            pellentesque.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
