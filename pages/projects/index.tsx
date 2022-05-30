import React from "react";
import type {NextPage} from "next";
import {Link, Stack, Text} from "@chakra-ui/react";
import Image from "next/image";

import aerolab_challenge from "../../assets/projects/aerolab_challenge.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";

const Index: NextPage = () => {
  const badges = ["NEXT JS", "Styled Components", "Framer Motion", "Jest"];

  return (
    <ProjectLayout
      badges={badges}
      imageSrc={aerolab_challenge.src}
      nextLink="/projects/wiseguys"
      title="Aerolab Frontend Challenge"
    >
      <Stack gap={2}>
        <Text>
          This is a project build as a solution to{" "}
          <Link isExternal _hover={{color: "aerolab"}} fontWeight="600" href="https://aerolab.us/">
            Aerolab&apos;s
          </Link>{" "}
          frontend coding challenge, that consist of a catalog view for a loyalty program app.
        </Text>
        <Text>
          Based on the Figma design provided by them I tried my best to replicat it pixel perfect.
          If you want to know more about the challenge you can click{" "}
          <Link
            isExternal
            _hover={{color: "brand.900"}}
            fontWeight="600"
            href="https://github.com/Aerolab/frontend-developer-coding-challenge#Acceptance-Criteria  "
          >
            here
          </Link>
          .
        </Text>
      </Stack>
      <Text>
        You can visit the demo{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://aerolab-frontend-challenge-ebon.vercel.app/"
        >
          here
        </Link>
        .
      </Text>
    </ProjectLayout>
  );
};

export default Index;
