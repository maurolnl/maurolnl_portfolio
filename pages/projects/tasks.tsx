import React from "react";
import {NextPage} from "next";
import {Heading, Link, Stack, Text} from "@chakra-ui/react";

import todo from "../../assets/projects/todo.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";

const Index: NextPage = () => {
  const badges = ["React JS", "TypeScipt", "CSS Modules"];

  return (
    <ProjectLayout
      badges={badges}
      imageSrc={todo.src}
      prevLink="/projects/covidtracker"
      title="Another TODO list"
    >
      <Stack gap={2}>
        <Text>
          This was one of my first projects in web dev, with this I was able to learn all the basics
          of React and TypeScript.
        </Text>
        <Text>
          Thanks to this project I understood all the benefits of TypeScript and, since then,
          I&apos;ve been using it.
        </Text>
      </Stack>
      <Text>
        You can visit the{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://tasks.maurolquiroga.site/"
        >
          site
        </Link>
        , or you can see the code{" "}
        <Link
          isExternal
          _hover={{color: "brand.900"}}
          fontWeight="600"
          href="https://github.com/maurolnl/react-tasks"
        >
          here
        </Link>
        .
      </Text>
    </ProjectLayout>
  );
};

export default Index;
