import React from "react";
import {NextPage} from "next";
import {Heading, Link, Stack, Text} from "@chakra-ui/react";

import wg from "../../assets/projects/wg.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";

const Index: NextPage = () => {
  const badges = ["NEXT JS", "Chakra UI", "Firebase", "Mercado Pago", "Framer Motion", "Jest"];

  return (
    <ProjectLayout
      badges={badges}
      imageSrc={wg.src}
      nextLink="/projects/covidtracker"
      prevLink="/projects"
      title="Wise Guys"
    >
      <Stack gap={2}>
        <Text>
          A project for a client who needed an ecommerce focused on the design of his brand.{" "}
        </Text>
        <Text>
          One of the biggest challenges, besides the design, was to sync a payment gateway and a
          database with stock.
        </Text>
      </Stack>
      <Text>
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
      </Text>
    </ProjectLayout>
  );
};

export default Index;
