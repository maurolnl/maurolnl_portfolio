import type {NextPage} from "next";
import Head from "next/head";

import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mauro Leonel Quiroga | Portfolio</title>
        <meta content="Mauro Leonel Quiroga personal Portfolio" name="description" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#000000" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
