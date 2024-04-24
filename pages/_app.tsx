import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import store from "../app/store/store";
import theme from "../app/theme/theme"; // Import custom theme
import { useTranslation } from "react-i18next";

import "./../app/lib/dayjs/config";
import "./../app/lib/i18n/client";
import { AVAILABLE_LANGUAGES } from "./../app/lib/i18n/constants";

//import "../styles/globals.css";
import "../styles/index.scss";
function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  return (
    <Provider store={store}>
      <ChakraProvider
        theme={{
          ...theme,
          direction:
            AVAILABLE_LANGUAGES.find(({ key }) => key === i18n.language)?.dir ??
            "ltr",
        }}
      >
        <Component {...pageProps} />;
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
