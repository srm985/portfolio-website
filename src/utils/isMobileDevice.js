export const MOBILE_BREAKPOINT = 768;

const isMobileDevice = (viewportWidth) => viewportWidth < MOBILE_BREAKPOINT;

export default isMobileDevice;
