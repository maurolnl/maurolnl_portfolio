import {Box, Heading, Text, Stack, useBreakpointValue} from "@chakra-ui/react";
import {NextPage} from "next";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

import snow from "../assets/nieve.jpg";
import sl from "../assets/sl.jpg";
import me from "../assets/me.jpg";
import ForwardLink from "../components/Layout/ForwardLink";
import HeadingAnimated from "../components/Layout/HeadingAnimated";
import {sideAnimation, upAnimation} from "../animation/animations";

const Index: NextPage = () => {
  const MotionHeading = motion(Heading);
  const MotionStack = motion(Stack);
  const BoxAnimation = motion(Box);

  const headingVariant = useBreakpointValue({
    base: "mobile",
    sm: "sm",
    md: "md",
    lg: "lg",
    desktop: "xl",
  });

  const subHeadingVariant = useBreakpointValue({
    base: "mobileH3",
    lg: "sm",
    desktop: "md",
  });

  const textVariant = useBreakpointValue({
    base: "sm",
    md: "md",
    xl: "lg",
  });

  const container = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  const item1 = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };

  const item2 = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0},
  };

  const item3 = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0},
  };

  return (
    <Stack direction="row" height="100%" justifyContent={"space-between"}>
      <Stack justifyContent={"space-between"} width={["100%", "100%", "100%", "100%", "40%"]}>
        <Stack gap={[2, 2, 2, 2, 7]}>
          <Stack gap={2}>
            <HeadingAnimated as="h1" size={headingVariant} text="ABOUT ME" />
            <MotionHeading
              animate="visible"
              as="h3"
              color="neutral.900"
              initial="hidden"
              size={subHeadingVariant}
              textTransform={"none"}
              transition="transition"
              variants={upAnimation}
            >
              Based in San Luis, Argentina
            </MotionHeading>
          </Stack>
          <BoxAnimation
            animate="visible"
            display={["flex", "flex", "flex", "flex", "none"]}
            height={253}
            initial="hidden"
            maxW={["100%", "100%", "inherit", "inherit"]}
            position="relative"
            transition="transition"
            variants={sideAnimation}
            width={596}
          >
            <Image priority alt={"hero-me"} layout="fill" objectFit="cover" src={me.src} />
          </BoxAnimation>
          <MotionStack
            animate="visible"
            initial="hidden"
            transition="transition"
            variants={upAnimation}
          >
            <Text size={textVariant}>
              I’m a creative developer with experience working on products with both teams and
              individuals. I’ve been coding for over 5 years, and been into web development for
              about 2 years now.
            </Text>
            <Text size={textVariant}>
              I’m a easy going and self confident person, always taking the opportunities to learn
              new concepts about art, programming and physics.
            </Text>
          </MotionStack>
        </Stack>
        <ForwardLink href="/projects">MY PROJECTS</ForwardLink>
      </Stack>
      <BoxAnimation
        alignItems="flex-start"
        animate="visible"
        display={["none", "none", "none", "none", "flex"]}
        initial="hidden"
        justifyContent="flex-end"
        position="relative"
        variants={container}
        width={"60%"}
      >
        <BoxAnimation
          bottom={"400px"}
          h={"fit-content"}
          position="absolute"
          variants={item1}
          w={"fit-content"}
        >
          <Box height={231.5} position="relative" width={540}>
            <Image alt={"hero-me"} layout="fill" objectFit="cover" src={sl.src} />
          </Box>
        </BoxAnimation>
        <BoxAnimation
          bottom={"200px"}
          h={"fit-content"}
          position="absolute"
          right={"100px"}
          transition={{type: "tween", duration: 0.4}}
          variants={item2}
          w={"fit-content"}
        >
          <Box height={231.5} position="relative" width={540}>
            <Image alt={"hero-me"} layout="fill" objectFit="cover" src={me.src} />
          </Box>
        </BoxAnimation>
        <BoxAnimation
          bottom={"0px"}
          h={"fit-content"}
          position="absolute"
          right={"200px"}
          transition={{type: "tween", duration: 0.4}}
          variants={item3}
          w={"fit-content"}
        >
          <Box height={231.5} position="relative" width={540}>
            <Image alt={"hero-me"} layout="fill" objectFit="cover" src={snow.src} />
          </Box>
        </BoxAnimation>
      </BoxAnimation>
    </Stack>
  );
};

export default Index;
