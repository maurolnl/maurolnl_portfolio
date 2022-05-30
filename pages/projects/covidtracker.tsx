import React from "react";
import {NextPage} from "next";
import {Heading, Link, Stack, Text} from "@chakra-ui/react";

import covid from "../../assets/projects/covid.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";

const Index: NextPage = () => {
  const badges = ["React JS", "TypeScipt", "CSS Modules", "Wouter"];

  return (
    <ProjectLayout
      badges={badges}
      imageSrc={covid.src}
      nextLink="/projects/tasks"
      prevLink="/projects/wiseguys"
      title="Covid Tracker"
    >
      <Stack gap={2}>
        <Text>
          In this project I was looking to learn about pagination and why not, build something with
          the covid API.
        </Text>
        <Text>
          One of my main problems was the raw data coming from{" "}
          <Link
            isExternal
            _hover={{color: "brand.900"}}
            fontWeight="600"
            href="https://ourworldindata.org/"
          >
            Our World In Data
          </Link>
          , I had to fetch this data carefully to not ruin the app performance.
        </Text>
      </Stack>
      <Text>
        You can visit the{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://covid.maurolquiroga.site/"
        >
          site
        </Link>
        , or you can see the code{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://github.com/maurolnl/corona-tracker"
        >
          here
        </Link>
        .
      </Text>
    </ProjectLayout>
  );
};

export default Index;
