import { Box } from "@mui/material";
import "./index.css";
import background from "../../assets/images/background.jpg";
import useWindowDimensions from "../../utils/windowDimensions";

export default function HomePage() {
  const { height } = useWindowDimensions();

  return (
    <section id="sectionHome">
      <Box display="flex" flex={1}>
        <img
          src={background}
          width="100%"
          height={height}
          style={{ objectFit: "cover" }}
          alt={background}
          loading="lazy"
        />
      </Box>
    </section>
  );
}
