import React from "react";
import NextLink from "next/link";
import {Link} from "@chakra-ui/react";
import {motion} from "framer-motion";

interface Props {
  href: string;
  children?: React.ReactNode;
  variant?: string;
  isExternal?: boolean;
  isActive?: boolean;
  isNotHoverable?: boolean;
  onClick?: () => void;
}

const InternalLink: React.FC<Props> = ({
  href,
  variant,
  isExternal,
  isNotHoverable,
  onClick,
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
        <MotionLink
          _hover={{textDecoration: "none", color: "brand.700", borderColor: "brand.700"}}
          borderBottom="2px solid transparent"
          borderColor={isActive ? "brand.700" : undefined}
          color={isActive ? "brand.700" : undefined}
          isExternal={isExternal}
          transition={{duration: 0.4, ease: "easeInOut"}}
          variant={variant}
          whileHover={{y: -1, opacity: 0.9}}
          onClick={onClick}
        >
          {children}
        </MotionLink>
      )}
    </NextLink>
  );
};

export default InternalLink;
