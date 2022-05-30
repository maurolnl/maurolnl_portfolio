import React from "react";
import NextLink from "next/link";
import {Link} from "@chakra-ui/react";

interface Props {
  href: string;
  children?: React.ReactNode;
  variant?: string;
  isExternal?: boolean;
}

const InternalLink: React.FC<Props> = ({href, variant, isExternal, children}) => {
  return (
    <NextLink passHref href={href}>
      <Link _hover={{textDecoration: "none"}} isExternal={isExternal} variant={variant}>
        {children}
      </Link>
    </NextLink>
  );
};

export default InternalLink;
