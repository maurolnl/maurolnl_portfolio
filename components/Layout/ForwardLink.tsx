import React from "react";
import NextLink from "next/link";
import {Button, Link} from "@chakra-ui/react";
import {ArrowForwardIcon, ArrowBackIcon} from "@chakra-ui/icons";

interface Props {
  href?: string;
  variant?: string;
  padding?: string[];
  display?: string[];
  children?: React.ReactNode;
}
const ForwardLink: React.FC<Props> = ({href, display, variant, padding, children}) => {
  return (
    <>
      {href ? (
        <NextLink passHref href={href}>
          {variant ? (
            <Link
              _active={{textDecoration: "none", backgroundSize: "0 0.1em, 30% 0.1em"}}
              _hover={{textDecoration: "none", backgroundSize: "0 0.1em, 30% 0.1em"}}
              background="linear-gradient(to right, rgba(100, 200, 200, 0), rgba(100, 200, 200, 0)),
            linear-gradient(to right, rgba(119, 76, 96, 1), rgba(119, 76, 96, 1), rgba(119, 76, 96, 1))"
              backgroundColor={"transparent"}
              backgroundPosition="100% 100%"
              backgroundRepeat="no-repeat"
              backgroundSize=" 100% 0.1em, 0 0.1em"
              cursor={"pointer"}
              display={display ? display : "block"}
              fontSize={[16, 18, 20]}
              height={"fit-content"}
              sx={{
                "&:hover > svg": {transform: "translate(0px, -1px) scale(1.1)"},
                "&:hover > svg > path": {fill: "#774C60"},
              }}
              transition="background-size 400ms"
              whiteSpace="nowrap"
              width={"fit-content"}
            >
              <ArrowBackIcon h={[4, 5]} paddingLeft={2} transition="all 400ms" w={[6, 8]} />
              {children}
            </Link>
          ) : (
            <Link
              _active={{textDecoration: "none", backgroundSize: "0 0.1em, 30% 0.1em"}}
              _hover={{textDecoration: "none", backgroundSize: "0 0.1em, 30% 0.1em"}}
              background="linear-gradient(to right, rgba(100, 200, 200, 0), rgba(100, 200, 200, 0)),
          linear-gradient(to right, rgba(119, 76, 96, 1), rgba(119, 76, 96, 1), rgba(119, 76, 96, 1))"
              backgroundColor={"transparent"}
              backgroundPosition="100% 100%, 0 100%"
              backgroundRepeat="no-repeat"
              backgroundSize=" 100% 0.1em, 0 0.1em"
              cursor={"pointer"}
              display={display ? display : "block"}
              fontSize={[16, 18, 20]}
              height={"fit-content"}
              sx={{
                "&:hover > svg": {transform: "translate(0px, -1px) scale(1.1)"},
                "&:hover > svg > path": {fill: "#774C60"},
              }}
              transition="background-size 400ms"
              whiteSpace="nowrap"
              width={"fit-content"}
            >
              {children}
              <ArrowForwardIcon h={[4, 5]} paddingLeft={2} transition="all 400ms" w={[6, 8]} />
            </Link>
          )}
        </NextLink>
      ) : (
        <Button
          isDisabled
          _hover={{backgroundColor: "transparent"}}
          backgroundColor={"transparent"}
          cursor="not-allowed"
          fontSize={[16, 18, 20]}
          fontWeight="500"
          height={"fit-content"}
          width={"fit-content"}
        >
          {variant ? (
            <>
              <ArrowForwardIcon h={[4, 5]} paddingLeft={2} transform="rotate(180deg)" w={[6, 8]} />
              {children}
            </>
          ) : (
            <>
              {children}
              <ArrowForwardIcon h={[4, 5]} paddingLeft={2} w={[6, 8]} />
            </>
          )}
        </Button>
      )}
    </>
  );
};

export default ForwardLink;
