import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Stack,
  Button,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import React from "react";
import Image from "next/image";

import logo from "../assets/logo.png";

import HeadingAnimated from "./Layout/HeadingAnimated";
import InternalLink from "./Layout/InternalLink";

interface Props {
  isOpen: boolean;
  placement: "right" | "bottom" | "top" | "left";
  onClose: () => void;
  size: string;
}

const Menu: React.FC<Props> = ({isOpen, placement, size, onClose}) => {
  const router = useRouter();

  const isAboutPage = router.pathname.includes("about");
  const isProjectsPage = router.pathname.includes("projects");

  const headingVariant = useBreakpointValue({
    base: "headingLinkMd",
    sm: "headingLinkLg",
  });

  const handleClose = (route: string) => {
    if (router.pathname === route) {
      onClose();

      return;
    }

    if (route !== "/" && router.pathname.includes(route)) {
      onClose();

      return;
    }
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <Drawer isOpen={isOpen} placement={placement} size={size} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent backgroundColor="brand.900">
        <DrawerHeader paddingY="none">
          <Stack alignItems="center" direction="row" height="110px" justifyContent="space-between">
            <Box height={"41px"} position="relative" width={"116px"}>
              <Image priority alt={"logo"} layout="fill" objectFit="cover" src={logo.src} />
            </Box>
            <Button
              _active={{textDecoration: "underline", backgroundColor: "transparent"}}
              _hover={{backgroundColor: "transparent"}}
              backgroundColor="transparent"
              borderRadius="1px"
              fontSize={["18px", "20px"]}
              fontWeight="600"
              letterSpacing="1px"
              onClick={onClose}
            >
              Close
            </Button>
          </Stack>
        </DrawerHeader>
        <DrawerBody>
          <Stack
            alignItems="flex-start"
            direction="column"
            gap={8}
            height="100%"
            justifyContent="flex-end"
          >
            <Stack>
              <InternalLink isMenu href={"/"} onClick={() => handleClose("/")}>
                <HeadingAnimated
                  borderBottom={router.pathname === "/" ? "5px solid black" : undefined}
                  display="inline-block"
                  size={headingVariant}
                  text="Home"
                  textTransform="uppercase"
                />
              </InternalLink>
              <InternalLink isMenu href={"/about"} onClick={() => handleClose("about")}>
                <HeadingAnimated
                  borderBottom={isAboutPage ? "5px solid black" : undefined}
                  display="inline-block"
                  size={headingVariant}
                  text="About"
                  textTransform="uppercase"
                />
              </InternalLink>
              <InternalLink isMenu href={"/projects"} onClick={() => handleClose("projects")}>
                <HeadingAnimated
                  borderBottom={isProjectsPage ? "5px solid black" : undefined}
                  display="inline-block"
                  size={headingVariant}
                  text="Projects"
                  textTransform="uppercase"
                />
              </InternalLink>
              <InternalLink
                isExternal
                isMenu
                href={"/cv/Mauro_Leonel_Quiroga_CV_English.pdf"}
                onClick={onClose}
              >
                <HeadingAnimated
                  borderBottom={router.pathname.includes("cv") ? "5px solid black" : undefined}
                  display="inline-block"
                  size={headingVariant}
                  text="CV"
                  textTransform="uppercase"
                />
              </InternalLink>
            </Stack>
            <Stack direction="row" justifyContent="center" width="100%">
              <InternalLink isExternal href="https://www.linkedin.com/in/maurolnl/" variant="sm">
                LinkedIn
              </InternalLink>
              <InternalLink isExternal href="mailto:maurolquiroga@outlook.com" variant="sm">
                Email
              </InternalLink>
              <InternalLink isExternal href="https://github.com/maurolnl" variant="sm">
                Github
              </InternalLink>
            </Stack>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;
