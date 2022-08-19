export const Step = ({ index, activeIndex, component: Component }) => {
  if (index !== activeIndex) return null;

  return Component;
};
