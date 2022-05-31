import React from "react";
import NextLink from "next/link";
import {Button, Link} from "@chakra-ui/react";
import {motion} from "framer-motion";

import ArrowIcon from "./ArrowIcon";

interface Props {
  href?: string;
  variant?: string;
  padding?: string[];
  display?: string[];
  children?: React.ReactNode;
}
const ForwardLink: React.FC<Props> = ({href, display, variant, padding, children}) => {
  const MotionLink = motion(Link);

  return (
    <>
      {href ? (
        <NextLink passHref href={href}>
          <MotionLink
            _hover={{textDecoration: "none", borderColor: "brand.700"}}
            backgroundColor={"transparent"}
            border="1px solid black"
            borderRadius="1px"
            cursor={"pointer"}
            display={display ? display : "block"}
            fontSize={[16, 18, 20]}
            height={"fit-content"}
            padding={padding ? padding : ["6px 12px", "6px 12px", "6px 12px", "12px 16px"]}
            transition={{duration: 0.2, ease: "easeInOut"}}
            whileHover={{x: 1, y: 1}}
            whiteSpace="nowrap"
            width={"fit-content"}
          >
            {variant ? (
              <>
                <ArrowIcon boxSize={[6, 8, 12]} paddingLeft={2} transform="rotate(180deg)" />
                {children}
              </>
            ) : (
              <>
                {children}
                <ArrowIcon boxSize={[6, 8, 12]} paddingLeft={2} />
              </>
            )}
          </MotionLink>
        </NextLink>
      ) : (
        <Button
          isDisabled
          _hover={{backgroundColor: "transparent"}}
          backgroundColor={"transparent"}
          border="1px solid black"
          borderRadius="1px"
          cursor="not-allowed"
          fontSize={[16, 18, 20]}
          fontWeight="500"
          height={"fit-content"}
          padding={padding ? padding : ["6px 12px", "6px 12px", "6px 12px", "12px 16px"]}
          width={"fit-content"}
        >
          {variant ? (
            <>
              <ArrowIcon boxSize={[6, 8, 12]} paddingLeft={2} transform="rotate(180deg)" />
              {children}
            </>
          ) : (
            <>
              {children}
              <ArrowIcon boxSize={[6, 8, 12]} paddingLeft={2} />
            </>
          )}
        </Button>
      )}
    </>
  );
};

export default ForwardLink;
