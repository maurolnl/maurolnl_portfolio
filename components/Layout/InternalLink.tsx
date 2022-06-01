import React from "react";
import NextLink from "next/link";
import {Link, Stack} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {ExternalLinkIcon} from "@chakra-ui/icons";

interface Props {
  href: string;
  children?: React.ReactNode;
  variant?: string;
  isExternal?: boolean;
  isCV?: boolean;
  isActive?: boolean;
  isMenu?: boolean;
  isNotHoverable?: boolean;
  onClick?: () => void;
}

const InternalLink: React.FC<Props> = ({
  href,
  variant,
  isExternal,
  isCV,
  isNotHoverable,
  onClick,
  isMenu,
  children,
  isActive,
}) => {
  const MotionLink = motion(Link);

  return (
    <NextLink passHref href={href}>
      {isNotHoverable ? (
        <MotionLink
          _hover={{textDecoration: "none"}}
          isExternal={isExternal}
          variant={variant}
          onClick={onClick}
        >
          {children}
        </MotionLink>
      ) : (
        <Stack alignItems="center" direction="row">
          <Link
            _active={
              !isActive && !isMenu
                ? {textDecoration: "none", backgroundSize: "0 0.1em, 100% 0.1em"}
                : {}
            }
            _hover={
              !isActive && !isMenu
                ? {textDecoration: "none", backgroundSize: "0 0.1em, 100% 0.1em"}
                : {}
            }
            background="linear-gradient(to right, rgba(100, 200, 200, 0), rgba(100, 200, 200, 0)),
          linear-gradient(to right, rgba(88, 111, 124, 1), rgba(88, 111, 124, 1), rgba(88, 111, 124, 1))"
            backgroundPosition="100% 100%, 0 100%"
            backgroundRepeat="no-repeat"
            backgroundSize=" 100% 0.1em, 0 0.1em"
            borderBottom="2px solid transparent"
            borderColor={isActive ? "brand.700" : undefined}
            color="neutral.900"
            isExternal={isExternal}
            transition="background-size 400ms"
            variant={variant}
            onClick={onClick}
          >
            {children}
          </Link>
          {isCV ? <ExternalLinkIcon h={4} w={4} /> : ""}
        </Stack>
      )}
    </NextLink>
  );
};

export default InternalLink;
