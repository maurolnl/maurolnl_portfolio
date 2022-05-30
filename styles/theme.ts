import {extendTheme} from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#96938c",
    700: "#c0bcb3",
    400: "#ebe7db",
    100: "#e1dfdd",
  },
  neutral: {
    100: "#ffffff",
    900: "#000000",
  },
  aerolab: "#ff4f00",
};

const sizes = {
  container: {
    desktop: "1750px",
    large: "1024px",
    medium: "720px",
    small: "350px",
  },
};

const styles = {
  global: {
    "#__next": {
      padding: 0,
      margin: 0,
    },
  },
};

const breakpoints = {
  desktop: "1811px",
};

const components = {
  Heading: {
    baseStyle: {
      fontWeight: 500,
      whiteSpace: "nowrap",
      textTransform: "uppercase",
    },
    sizes: {
      xl: {
        fontSize: "120px",
        fontWeight: 600,
        lineHeight: "0.87",
        letterSpacing: "2px",
      },
      lg: {
        fontSize: "86px",
        fontWeight: 600,
        lineHeight: "0.86",
        letterSpacing: "2px",
      },
      md: {
        fontSize: "56px",
        fontWeight: 500,
        lineHeight: "0.85",
        letterSpacing: "0px",
      },
      sm: {
        fontSize: "36px",
        fontWeight: 600,
        lineHeight: "0.85",
        letterSpacing: "0px",
      },
      mobile: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "0.85",
        letterSpacing: "0px",
      },
      mobileH3: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "0.85",
        letterSpacing: "1px",
      },
    },
  },
  Text: {
    baseStyle: {
      fontSize: "20px",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    sizes: {
      sm: {
        fontSize: "16px",
        fontWeigh: 600,
        letterSpacing: "1.5px",
      },
      md: {
        fontSize: "18px",
        fontWeight: 500,
      },
      lg: {
        fontSize: "20px",
        fontWeight: 500,
      },
    },
  },
  Link: {
    baseStyle: {
      fontWeight: 500,
      color: "neutral.900",
      fontSize: "20px",
    },
    variants: {
      sm: {
        fontWeight: 600,
        color: "neutral.900",
        letterSpacing: "1px",
        fontSize: "16px",
      },
    },
  },
};

const fonts = {
  heading: `'Poppins', system-ui,  sans-serif`,
  body: `'Poppins', system-ui, sans-serif`,
};

export const theme = extendTheme({colors, sizes, styles, fonts, components, breakpoints});
