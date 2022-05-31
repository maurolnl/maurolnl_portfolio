import {Box, Heading, Stack, useBreakpointValue} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

import image_test from "../assets/test.png";
import {sideAnimation} from "../animation/animations";

import SideLinks from "./SideLinks";
import ForwardLink from "./Layout/ForwardLink";
import HeadingAnimated from "./Layout/HeadingAnimated";

const Hero = () => {
  const MotionBox = motion(Box);

  const headingVariant = useBreakpointValue({
    base: "mobile",
    sm: "sm",
    md: "md",
    lg: "lg",
    desktop: "xl",
  });

  return (
    <Stack direction="row" height="100%" justifyContent={"space-between"}>
      <Stack justifyContent="space-between" width={["100%", "100%", "100%", "40%"]}>
        <Box display={["flex", "flex", "flex", "none"]} justifyContent="flex-end">
          <ForwardLink href="/about">ABOUT ME</ForwardLink>
        </Box>
        <Stack direction={"column"} gap={[2, 2, 2, 6]}>
          <Box>
            <HeadingAnimated as="h1" size={headingVariant} text="FRONTEND" />
            <HeadingAnimated as="h1" size={headingVariant} text="DEVELOPER" />
          </Box>
          <MotionBox
            animate="visible"
            height={253}
            initial="hidden"
            maxW={["100%", "100%", "inherit", "inherit"]}
            position="relative"
            transition="transition"
            variants={sideAnimation}
            width={596}
          >
            <Image priority alt={"hero-me"} layout="fill" objectFit="cover" src={image_test.src} />
          </MotionBox>
          <Box display={["block", "block", "block", "none"]}>
            <Heading color="neutral.900" display={"flex"} size={headingVariant}>
              QUIROGA MAURO LEONEL
            </Heading>
          </Box>
        </Stack>
        <ForwardLink display={["none", "none", "none", "block"]} href="/about">
          ABOUT ME
        </ForwardLink>
      </Stack>

      <Box
        alignItems="flex-end"
        display={["none", "none", "none", "flex"]}
        justifyContent="flex-end"
        width={"60%"}
      >
        <SideLinks />
        <Stack alignItems={"flex-end"} direction="column">
          <Box>
            <HeadingAnimated
              display="flex"
              justifyContent="flex-end"
              size={headingVariant}
              text="QUIROGA"
            />
            <HeadingAnimated size={headingVariant} text="MAURO LEONEL" />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Hero;
