import { useState, useEffect } from "react";

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height,
    outerWidth,
    outerHeight,
  } = window;
  return {
    width,
    height,
    outerWidth,
    outerHeight,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
