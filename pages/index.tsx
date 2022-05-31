import {Box} from "@chakra-ui/react";
import {motion} from "framer-motion";
import type {NextPage} from "next";
import Head from "next/head";

import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mauro Leonel Quiroga | Portfolio</title>
        <meta content="Mauro Leonel Quiroga personal Portfolio" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
