export const upAnimation = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: [40, 0, 0],
    opacity: [0, 0.4, 1],
  },
  transition: {
    times: [0, 0.8, 1],
  },
};

export const sideAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: [-100, 0, 0],
    opacity: [0, 0.3, 1],
  },
  transition: {
    times: [0, 0.7, 1],
  },
};
