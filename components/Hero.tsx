import {Box, Button, Heading, Stack, useBreakpointValue} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import image_test from "../assets/test.png";

import SideLinks from "./SideLinks";
import ForwardLink from "./Layout/ForwardLink";

const Hero = () => {
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
            <Heading as="h1" color="neutral.900" size={headingVariant}>
              FRONTEND
            </Heading>
            <Heading as="h1" color="neutral.900" size={headingVariant}>
              DEVELOPER
            </Heading>
          </Box>
          <Box
            height={253}
            maxW={["100%", "100%", "inherit", "inherit"]}
            position="relative"
            width={596}
          >
            <Image priority alt={"hero-me"} layout="fill" objectFit="cover" src={image_test.src} />
          </Box>
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
            <Heading
              color="neutral.900"
              display={"flex"}
              justifyContent="flex-end"
              size={headingVariant}
            >
              QUIROGA
            </Heading>
            <Heading color="neutral.900" size={headingVariant}>
              MAURO LEONEL
            </Heading>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Hero;
