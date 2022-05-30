import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";

import {theme} from "../styles/theme";
import Layout from "../components/Layout/Layout";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
