import {Box} from "@chakra-ui/react";
import type {NextPage} from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mauro Leonel Quiroga | Portfolio</title>
        <meta content="Mauro Leonel Quiroga personal Portfolio" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Box>Hello world</Box>
    </>
  );
};

export default Home;
