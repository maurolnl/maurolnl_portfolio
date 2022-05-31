import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import type {AppProps} from "next/app";
import {Box, ChakraProvider} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";

import {theme} from "../styles/theme";
import Layout from "../components/Layout/Layout";

function MyApp({Component, pageProps, router}: AppProps) {
  const MotionBox = motion(Box);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <MotionBox key={router.route} height="100%">
            <MotionBox
              backgroundColor="black"
              color="black"
              exit={{x: ["-110vw", "0vw", "0vw"], opacity: [1, 1, 0]}}
              height="100vh"
              initial={{x: "-110vw"}}
              left="-50px"
              position="absolute"
              top="0px"
              transition={{type: "tween", times: [0, 0.5, 1], duration: 1.1, ease: "easeInOut"}}
              width="110vw"
              zIndex="999999"
            />
            <MotionBox exit={{opacity: 0}} height="100%" transition={{delay: 0.5, duration: 0}}>
              <Component {...pageProps} />
            </MotionBox>
          </MotionBox>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
