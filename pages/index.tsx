import {
  Box,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import i18n from "./../app/lib/i18n/client";
import { AVAILABLE_LANGUAGES } from "./../app/lib/i18n/constants";
import { Trans, useTranslation } from "react-i18next";

function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("black", "white");
  const { t } = useTranslation(["appHome", "account"]);

  return (
    <html
      lang={i18n.language}
      dir={
        AVAILABLE_LANGUAGES.find(({ key }) => key === i18n.language)?.dir ??
        "ltr"
      }
    >
      <body>
        <Box></Box>
      </body>
    </html>

    // <Box textAlign="center" fontSize="xl" p={8}>
    //   <Heading as="h1" size="2xl" mb={6} color={textColor}>
    //     Welcome to My Mega App
    //   </Heading>
    //   <Box>
    //     <text>hellooooo</text>
    //   </Box>

    //   <Button onClick={toggleColorMode} mt={4} colorScheme="teal">
    //     Toggle {colorMode === "light" ? "Dark" : "Light"}
    //   </Button>
    // </Box>
  );
}

export default HomePage;
