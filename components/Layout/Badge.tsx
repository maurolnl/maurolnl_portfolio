import {Box, Text} from "@chakra-ui/react";
import React from "react";

interface Props {
  children?: React.ReactNode;
  color?: string;
}

const Badge: React.FC<Props> = ({color, children}) => {
  const selectedColor = color ? color : "black";

  return (
    <Box
      border="1px solid"
      borderColor={selectedColor}
      color={selectedColor}
      display="inline-block"
      padding="2px 8px"
      textTransform={"uppercase"}
      verticalAlign={"middle"}
      whiteSpace="nowrap"
    >
      <Text size="sm">{children}</Text>
    </Box>
  );
};

export default Badge;
