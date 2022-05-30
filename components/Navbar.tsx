import {Button, Stack, Text} from "@chakra-ui/react";
import React from "react";

import InternalLink from "./Layout/InternalLink";

const Navbar = () => {
  return (
    <Stack
      alignItems="center"
      as="nav"
      direction="row"
      gap={36}
      height={"110px"}
      justifyContent={["space-between", "space-between", "space-between", "flex-end"]}
    >
      <InternalLink href={"/"}>LOGO</InternalLink>
      <Stack direction={"row"} display={["none", "none", "none", "flex"]} gap={36}>
        <InternalLink href={"/about"}>About</InternalLink>
        <InternalLink href={"/projects"}>Projects</InternalLink>
        <InternalLink href={"/"}>CV</InternalLink>
      </Stack>
      <Button display={["flex", "flex", "flex", "none"]}>Menu</Button>
    </Stack>
  );
};

export default Navbar;
