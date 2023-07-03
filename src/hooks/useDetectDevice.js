import { useEffect, useState } from "react";

const breakpoints = {
  xs: "576",
  sm: "786",
  md: "992",
  lg: "1200",
};

const deviceHandler = () => {
  const windowWidth = window.innerWidth;

  switch (true) {
    case windowWidth <= parseInt(breakpoints.xs):
      return "MOBILE";
    case windowWidth <= parseInt(breakpoints.sm):
      return "TABLET";
    case windowWidth <= parseInt(breakpoints.md):
      return "LAPTOP";
    case windowWidth <= parseInt(breakpoints.lg):
      return "DESKTOP";
    default:
      return "LARGE SCREEN";
  }
};

function useDetectDevice() {
  const [device, setDevice] = useState(() => deviceHandler());

  useEffect(() => {
    const handleResize = () => {
      setDevice(deviceHandler());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}

export { useDetectDevice };
