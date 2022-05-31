import {Box, Heading, Stack, useBreakpointValue} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

import {sideAnimation, upAnimation} from "../../animation/animations";

import ForwardLink from "./ForwardLink";
import Badge from "./Badge";
import HeadingAnimated from "./HeadingAnimated";

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
  const MotionHeading = motion(Heading);
  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);

  const isOutOfContainer = useBreakpointValue({md: true});

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
              <HeadingAnimated size={headingVariant} text={"Projects"} />
              <Stack
                direction="row"
                display={["flex", "flex", "flex", "flex", "flex", "none"]}
                gap={[0, 0, 2, 4]}
              >
                <ForwardLink
                  href={prevLink}
                  padding={["2px 10px", "2px 10px", "5px 25px"]}
                  variant="invert"
                >
                  Prev
                </ForwardLink>
                <ForwardLink href={nextLink} padding={["2px 10px", "2px 10px", "5px 25px"]}>
                  Next
                </ForwardLink>
              </Stack>
            </Stack>
            <MotionHeading
              animate="visible"
              as="h3"
              color="neutral.900"
              initial="hidden"
              size={subHeadingVariant}
              transition="transition"
              variants={upAnimation}
              whiteSpace="break-spaces"
            >
              {title}
            </MotionHeading>
            <Stack
              alignItems={"flex-start"}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              flexDirection={"column"}
              gap={3}
              justifyContent="flex-start"
            >
              <MotionBox
                animate="visible"
                boxShadow={"#c0bcb3 5px 5px 3px 0px"}
                display={["flex", "flex", "flex", "flex", "flex", "none"]}
                height={[230, 300, 490]}
                initial="hidden"
                maxW={["100%", "100%", "100%", "100%", "inherit"]}
                position="relative"
                transition="transition"
                variants={sideAnimation}
                width={872}
              >
                <Image alt={"hero-me"} layout="fill" objectFit="cover" src={imageSrc} />
              </MotionBox>
              <MotionStack
                direction="row"
                drag={!isOutOfContainer ? "x" : undefined}
                dragConstraints={{left: -250, right: 0}}
                dragElastic={0.2}
              >
                {badges.map((badge, index) => {
                  return (
                    <Badge key={index} color="black">
                      {badge}
                    </Badge>
                  );
                })}
              </MotionStack>
            </Stack>
          </Stack>
          {children}
        </Stack>

        <Stack direction="row" display={["none", "none", "none", "none", "none", "flex"]} gap={4}>
          <ForwardLink href={prevLink} padding={["5px 25px"]} variant="invert">
            Prev
          </ForwardLink>
          <ForwardLink href={nextLink} padding={["5px 25px"]}>
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
        <MotionBox
          animate={{x: 0, opacity: 1}}
          boxShadow={"#c0bcb3 5px 5px 3px 0px"}
          height={490}
          initial={{x: 100, opacity: 0}}
          position="relative"
          transition={{duration: 1}}
          width={872}
        >
          <Image alt={"hero-me"} layout="fill" objectFit="cover" src={imageSrc} />
        </MotionBox>
        <MotionStack
          animate={{opacity: 1}}
          direction="row"
          initial={{opacity: 0}}
          transition={{duration: 1}}
        >
          {badges.map((badge, index) => {
            return (
              <Badge key={index} color="black">
                {badge}
              </Badge>
            );
          })}
        </MotionStack>
      </Stack>
    </Stack>
  );
};

export default ProjectLayout;
