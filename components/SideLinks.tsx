import {Stack} from "@chakra-ui/react";
import React from "react";

import InternalLink from "./Layout/InternalLink";

const SideLinks = () => {
  return (
    <Stack
      alignItems="flex-end"
      bottom={0}
      direction={"column"}
      gap={1}
      height={"96px"}
      margin={"auto"}
      position="absolute"
      right={"1rem"}
      top={0}
    >
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
  );
};

export default SideLinks;
