import {Box, Button, Stack, useDisclosure} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import logo from "../assets/logo.png";

import InternalLink from "./Layout/InternalLink";
import Menu from "./Menu";

const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Stack
      alignItems="center"
      as="nav"
      direction="row"
      gap={36}
      height={"110px"}
      justifyContent={["space-between", "space-between", "space-between", "flex-end"]}
    >
      <InternalLink href={"/"} isHoverable={false}>
        <Box height={"41px"} position="relative" width={"116px"}>
          <Image priority alt={"logo"} layout="fill" objectFit="cover" src={logo.src} />
        </Box>
      </InternalLink>
      <Stack direction={"row"} display={["none", "none", "none", "flex"]} gap={36}>
        <InternalLink href={"/about"}>About</InternalLink>
        <InternalLink href={"/projects"}>Projects</InternalLink>
        <InternalLink href={"/"}>CV</InternalLink>
      </Stack>
      <Button
        _active={{textDecoration: "underline", backgroundColor: "transparent"}}
        _hover={{backgroundColor: "transparent"}}
        backgroundColor="transparent"
        borderRadius="1px"
        display={["flex", "flex", "flex", "none"]}
        fontSize={["18px", "20px"]}
        fontWeight="600"
        letterSpacing="1px"
        onClick={onOpen}
      >
        Menu
      </Button>
      <Menu isOpen={isOpen} placement="bottom" size="full" onClose={onClose} />
    </Stack>
  );
};

export default Navbar;
