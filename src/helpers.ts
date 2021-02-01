export const scrollWindowHeight = () => {
  window.scroll(0, window.innerHeight);
};

export const getWindowSizes = () => ({
  h: window.innerHeight,
  w: window.innerWidth,
});
