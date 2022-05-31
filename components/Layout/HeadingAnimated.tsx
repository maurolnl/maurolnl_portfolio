import {Heading} from "@chakra-ui/react";
import {motion} from "framer-motion";
import React from "react";

interface Props {
  text: string;
  as?: string;
  size?: string | undefined;
  display?: string | undefined;
  justifyContent?: string | undefined;
  textTransform?: string | undefined;
  borderBottom?: string | undefined;
}

const HeadingAnimated: React.FC<Props> = ({
  as,
  size,
  textTransform,
  text,
  display,
  justifyContent,
  borderBottom,
}) => {
  const MotionHeading = motion(Heading);

  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
    },
  };

  return (
    <MotionHeading
      animate="visible"
      as={as}
      borderBottom={borderBottom}
      color="neutral.900"
      display={display}
      initial="hidden"
      justifyContent={justifyContent}
      size={size}
      textTransform={textTransform}
      variants={sentence}
    >
      {text.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </MotionHeading>
  );
};

export default HeadingAnimated;
