import React from "react";
import {NextPage} from "next";
import {Heading, Link, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {motion} from "framer-motion";

import covid from "../../assets/projects/covid.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";
import {upAnimation} from "../../animation/animations";

const Index: NextPage = () => {
  const badges = ["React JS", "TypeScipt", "CSS Modules", "Wouter"];

  const textVariant = useBreakpointValue({
    base: "sm",
    md: "md",
    xl: "lg",
  });

  const MotionStack = motion(Stack);
  const MotionText = motion(Text);

  return (
    <ProjectLayout
      badges={badges}
      imageSrc={covid.src}
      nextLink="/projects/tasks"
      prevLink="/projects/wiseguys"
      title="Covid Tracker"
    >
      <MotionStack
        animate="visible"
        gap={2}
        initial="hidden"
        transition="transition"
        variants={upAnimation}
      >
        <Text size={textVariant}>
          In this project I was looking to learn about pagination and why not, build something with
          the covid API.
        </Text>
        <Text size={textVariant}>
          One of my main problems was the raw data coming from{" "}
          <Link
            isExternal
            _hover={{color: "brand.900"}}
            fontWeight="600"
            href="https://ourworldindata.org/"
            size={textVariant}
          >
            Our World In Data
          </Link>
          , I had to fetch this data carefully to not ruin the app performance.
        </Text>
      </MotionStack>
      <MotionText
        animate="visible"
        initial="hidden"
        size={textVariant}
        transition="transition"
        variants={upAnimation}
      >
        You can visit the{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://covid.maurolquiroga.site/"
          size={textVariant}
        >
          site
        </Link>
        , or you can see the code{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://github.com/maurolnl/corona-tracker"
          size={textVariant}
        >
          here
        </Link>
        .
      </MotionText>
    </ProjectLayout>
  );
};

export default Index;
