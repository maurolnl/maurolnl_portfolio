import {Box, Container} from "@chakra-ui/react";
import React from "react";

import Navbar from "../Navbar";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  const BOTTOM_BOXES_SIZE = "110px";
  const BOTTOM_BOXES_SIZE_SM = "70px";

  return (
    <Box
      backgroundColor="brand.400"
      display="flex"
      flexDirection="column"
      minH={"100vh"}
      overflowX="clip"
    >
      <Box
        backgroundColor={"brand.100"}
        display={"flex"}
        flexDirection="row"
        height={[``, ``, ``, ``, ``, `calc(100vh - ${BOTTOM_BOXES_SIZE})`]}
        minH={[
          `calc(100vh - ${BOTTOM_BOXES_SIZE_SM})`,
          `calc(100vh - ${BOTTOM_BOXES_SIZE_SM})`,
          `calc(100vh - ${BOTTOM_BOXES_SIZE_SM})`,
          `calc(100vh - ${BOTTOM_BOXES_SIZE})`,
        ]}
      >
        <Container maxW={"container.desktop"} minH="100%" position="relative">
          <Navbar />
          <Box as="main" height={"calc(100% - 110px)"} paddingY={5} width={"100%"}>
            {children}
          </Box>
        </Container>
        <Box
          backgroundColor={"brand.400"}
          borderColor={"black"}
          borderLeft="1px solid"
          display={["none", "none", "none", "none", "none", "block"]}
          minH={"100vh"}
          width={"30px"}
        />
        <Box
          backgroundColor={"brand.400"}
          borderColor={"black"}
          borderLeft="1px solid"
          display={["none", "none", "none", "none", "none", "block"]}
          minH={"100vh"}
          width={"80px"}
        />
      </Box>
      <Box
        borderColor={"neutral.900"}
        borderTop="1px solid"
        height={["20px", "20px", "20px", "30px"]}
        maxW="100vw"
      />
      <Box
        borderColor={"neutral.900"}
        borderTop="1px solid"
        height={["50px", "50px", "50px", "80px"]}
        maxW="100vw"
      />
    </Box>
  );
};

export default Layout;
