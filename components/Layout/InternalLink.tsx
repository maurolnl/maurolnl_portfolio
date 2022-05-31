import React from "react";
import NextLink from "next/link";
import {Link} from "@chakra-ui/react";
import {motion} from "framer-motion";

interface Props {
  href: string;
  children?: React.ReactNode;
  variant?: string;
  isExternal?: boolean;
  isHoverable?: boolean;
  onClick?: () => void;
}

const InternalLink: React.FC<Props> = ({
  href,
  variant,
  isExternal,
  isHoverable,
  onClick,
  children,
}) => {
  const MotionLink = motion(Link);

  return (
    <NextLink passHref href={href}>
      {!isHoverable ? (
        <MotionLink
          _hover={{textDecoration: "none"}}
          isExternal={isExternal}
          variant={variant}
          onClick={onClick}
        >
          {children}
        </MotionLink>
      ) : (
        <MotionLink
          _hover={{textDecoration: "none"}}
          borderBottom="2px solid transparent"
          isExternal={isExternal}
          transition={{duration: 1, ease: "easeInOut"}}
          variant={variant}
          whileHover={{borderBottom: "2px solid black"}}
          onClick={onClick}
        >
          {children}
        </MotionLink>
      )}
    </NextLink>
  );
};

export default InternalLink;
