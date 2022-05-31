import React from "react";
import type {NextPage} from "next";
import {Link, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {NextSeo} from "next-seo";

import aerolab_challenge from "../../assets/projects/aerolab_challenge.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";
import {upAnimation} from "../../animation/animations";

const Index: NextPage = () => {
  const badges = ["NEXT JS", "Styled Components", "Framer Motion", "Jest"];

  const textVariant = useBreakpointValue({
    base: "sm",
    md: "md",
    xl: "lg",
  });

  const MotionStack = motion(Stack);
  const MotionText = motion(Text);

  return (
    <>
      <NextSeo title="Project-Aerolab Challenge" />
      <ProjectLayout
        badges={badges}
        imageSrc={aerolab_challenge.src}
        nextLink="/projects/wiseguys"
        title="Aerolab Frontend Challenge"
      >
        <MotionStack
          animate="visible"
          gap={2}
          initial="hidden"
          transition="transition"
          variants={upAnimation}
        >
          <Text size={textVariant}>
            This is a project build as a solution to{" "}
            <Link
              isExternal
              _hover={{color: "aerolab"}}
              fontWeight="600"
              href="https://aerolab.us/"
              size={textVariant}
            >
              Aerolab&apos;s
            </Link>{" "}
            frontend coding challenge, that consist of a catalog view for a loyalty program app.
          </Text>
          <Text size={textVariant}>
            Based on the Figma design provided by them I tried my best to replicat it pixel perfect.
            If you want to know more about the challenge you can click{" "}
            <Link
              isExternal
              _hover={{color: "brand.900"}}
              fontWeight="600"
              href="https://github.com/Aerolab/frontend-developer-coding-challenge#Acceptance-Criteria  "
              size={textVariant}
            >
              here
            </Link>
            .
          </Text>
        </MotionStack>
        <MotionText
          animate="visible"
          initial="hidden"
          size={textVariant}
          transition="transition"
          variants={upAnimation}
        >
          You can visit the demo{" "}
          <Link
            isExternal
            _hover={{color: "brand.900"}}
            fontWeight="600"
            href="https://aerolab-frontend-challenge-ebon.vercel.app/"
            size={textVariant}
          >
            here
          </Link>
          .
        </MotionText>
      </ProjectLayout>
    </>
  );
};

export default Index;
