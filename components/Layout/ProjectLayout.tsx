import {Box, Heading, Stack, useBreakpointValue} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import ForwardLink from "./ForwardLink";
import Badge from "./Badge";

interface Props {
  title: string;
  imageSrc: string;
  nextLink?: string | undefined;
  prevLink?: string | undefined;
  badges: string[];
  children?: React.ReactNode;
}

const ProjectLayout: React.FC<Props> = ({
  title,
  imageSrc,
  nextLink,
  prevLink,
  badges,
  children,
}) => {
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

  return (
    <Stack direction={"row"} height="100%" justifyContent={"space-between"}>
      <Stack
        justifyContent={"space-between"}
        width={["100%", "100%", "100%", "100%", "100%", "40%"]}
      >
        <Stack gap={[2, 2, 2, 2, 2, 7]}>
          <Stack gap={2}>
            <Stack alignItems="center" direction="row" justifyContent={"space-between"}>
              <Heading color={"neutral.900"} size={headingVariant}>
                Projects
              </Heading>
              <Stack
                direction="row"
                display={["flex", "flex", "flex", "flex", "flex", "none"]}
                gap={[0, 0, 2, 4]}
              >
                <ForwardLink
                  href={prevLink}
                  padding={["2px 10px", "2px 10px", "5px 20px"]}
                  variant="invert"
                >
                  Prev
                </ForwardLink>
                <ForwardLink href={nextLink} padding={["2px 10px", "2px 10px", "5px 20px"]}>
                  Next
                </ForwardLink>
              </Stack>
            </Stack>
            <Heading as="h3" color="neutral.900" size={subHeadingVariant} whiteSpace="break-spaces">
              {title}
            </Heading>
            <Stack
              alignItems={"flex-start"}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              flexDirection={"column"}
              gap={3}
              justifyContent="flex-start"
            >
              <Box
                boxShadow={"#c0bcb3 5px 5px 3px 0px"}
                display={["flex", "flex", "flex", "flex", "flex", "none"]}
                height={[230, 300, 490]}
                maxW={["100%", "100%", "100%", "100%", "inherit"]}
                position="relative"
                width={872}
              >
                <Image alt={"hero-me"} layout="fill" objectFit="cover" src={imageSrc} />
              </Box>
              <Stack direction="row">
                {badges.map((badge, index) => {
                  return (
                    <Badge key={index} color="black">
                      {badge}
                    </Badge>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
          {children}
        </Stack>

        <Stack direction="row" display={["none", "none", "none", "none", "none", "flex"]} gap={4}>
          <ForwardLink href={prevLink} padding={["5px 20px"]} variant="invert">
            Prev
          </ForwardLink>
          <ForwardLink href={nextLink} padding={["5px 20px"]}>
            Next
          </ForwardLink>
        </Stack>
      </Stack>
      <Stack
        alignItems={"flex-end"}
        display={["none", "none", "none", "none", "none", "flex"]}
        flexDirection={"column"}
        gap={3}
        justifyContent="flex-start"
      >
        <Box boxShadow={"#c0bcb3 5px 5px 3px 0px"} height={490} position="relative" width={872}>
          <Image alt={"hero-me"} layout="fill" objectFit="cover" src={imageSrc} />
        </Box>
        <Stack direction="row">
          {badges.map((badge, index) => {
            return (
              <Badge key={index} color="black">
                {badge}
              </Badge>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectLayout;
