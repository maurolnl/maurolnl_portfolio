import React from "react";
import {NextPage} from "next";
import {Heading, Link, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

import todo from "../../assets/projects/todo.png";
import ProjectLayout from "../../components/Layout/ProjectLayout";
import {upAnimation} from "../../animation/animations";

const Index: NextPage = () => {
  const badges = ["React JS", "TypeScipt", "CSS Modules"];

  const MotionStack = motion(Stack);
  const MotionText = motion(Text);

  return (
    <ProjectLayout
      badges={badges}
      imageSrc={todo.src}
      prevLink="/projects/covidtracker"
      title="Another TODO list"
    >
      <MotionStack
        animate="visible"
        gap={2}
        initial="hidden"
        transition="transition"
        variants={upAnimation}
      >
        <Text>
          This was one of my first projects in web dev, with this I was able to learn all the basics
          of React and TypeScript.
        </Text>
        <Text>
          Thanks to this project I understood all the benefits of TypeScript and, since then,
          I&apos;ve been using it.
        </Text>
      </MotionStack>
      <MotionText animate="visible" initial="hidden" transition="transition" variants={upAnimation}>
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
      </MotionText>
    </ProjectLayout>
  );
};

export default Index;
