import React from "react";
import {NextPage} from "next";
import {Heading, Link, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

import wg from "../../assets/projects/wg.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";
import {upAnimation} from "../../animation/animations";

const Index: NextPage = () => {
  const badges = ["NEXT JS", "Chakra UI", "Firebase", "Mercado Pago", "Framer Motion", "Jest"];

  const MotionStack = motion(Stack);
  const MotionText = motion(Text);

  return (
    <ProjectLayout
      badges={badges}
      imageSrc={wg.src}
      nextLink="/projects/covidtracker"
      prevLink="/projects"
      title="Wise Guys"
    >
      <MotionStack
        animate="visible"
        gap={2}
        initial="hidden"
        transition="transition"
        variants={upAnimation}
      >
        <Text>
          A project for a client who needed an ecommerce focused on the design of his brand.{" "}
        </Text>
        <Text>
          One of the biggest challenges, besides the design, was to sync a payment gateway and a
          database with stock.
        </Text>
      </MotionStack>
      <MotionText animate="visible" initial="hidden" transition="transition" variants={upAnimation}>
        You can visit the site{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://wiseguys.site/"
        >
          here
        </Link>
        .
      </MotionText>
    </ProjectLayout>
  );
};

export default Index;
