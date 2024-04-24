import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  primary: "#ff6347", // Tomato
  secondary: "#2e8b57", // Sea green
};

// Extend the default theme with custom colors and configurations
const theme = extendTheme({ config, colors });

export default theme;
