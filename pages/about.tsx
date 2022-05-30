import {Box, Heading, Text, Stack, useBreakpointValue, Container} from "@chakra-ui/react";
import {NextPage} from "next";
import React from "react";
import Image from "next/image";

import snow from "../assets/nieve.jpg";
import sl from "../assets/sl.jpg";
import me from "../assets/me.jpg";
import ForwardLink from "../components/Layout/ForwardLink";

const Index: NextPage = () => {
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

  return (
    <Stack direction="row" height="100%" justifyContent={"space-between"}>
      <Stack justifyContent={"space-between"} width={["100%", "100%", "100%", "100%", "40%"]}>
        <Stack gap={[2, 2, 2, 2, 7]}>
          <Stack gap={2}>
            <Heading as="h1" color="neutral.900" size={headingVariant}>
              ABOUT ME
            </Heading>
            <Heading as="h3" color="neutral.900" size={subHeadingVariant} textTransform={"none"}>
              Based in San Luis, Argentina
            </Heading>
          </Stack>
          <Box
            display={["flex", "flex", "flex", "flex", "none"]}
            height={253}
            maxW={["100%", "100%", "inherit", "inherit"]}
            position="relative"
            width={596}
          >
            <Image priority alt={"hero-me"} layout="fill" objectFit="cover" src={me.src} />
          </Box>
          <Stack>
            <Text size={textVariant}>
              I’m a creative developer with experience working on products with both teams and
              individuals. I’ve been coding for over 5 years, and been into web development for
              about 2 years now.
            </Text>
            <Text size={textVariant}>
              I’m a easy going and self confident person, always taking the opportunities to learn
              new concepts about art, programming and physics.
            </Text>
          </Stack>
        </Stack>
        <ForwardLink href="/projects">MY PROJECTS</ForwardLink>
      </Stack>
      <Box
        alignItems="flex-start"
        display={["none", "none", "none", "none", "flex"]}
        justifyContent="flex-end"
        position="relative"
        width={"60%"}
      >
        <Box bottom={"400px"} h={"fit-content"} position="absolute" w={"fit-content"}>
          <Box height={231.5} position="relative" width={540}>
            <Image alt={"hero-me"} layout="fill" objectFit="cover" src={sl.src} />
          </Box>
        </Box>
        <Box
          bottom={"200px"}
          h={"fit-content"}
          position="absolute"
          right={"100px"}
          w={"fit-content"}
        >
          <Box height={231.5} position="relative" width={540}>
            <Image alt={"hero-me"} layout="fill" objectFit="cover" src={me.src} />
          </Box>
        </Box>
        <Box bottom={"0px"} h={"fit-content"} position="absolute" right={"200px"} w={"fit-content"}>
          <Box height={231.5} position="relative" width={540}>
            <Image alt={"hero-me"} layout="fill" objectFit="cover" src={snow.src} />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Index;
