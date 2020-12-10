const breakpointsInt = {
  small: 768,
  large: 1170,
};

const breakpoints = {};

Object.keys(breakpointsInt).map(function (key, index) {
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  breakpoints[key] = breakpointsInt[key] + 'px';
});

const mq = Object.values(breakpoints).map((bp) => `@media (max-width: ${bp})`);

const checkViewport = (maxValue: any) => {
  if (typeof document !== `undefined`) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return vw <= maxValue;
  }
  return false;
}; 

export const isMobile = () => {
  return checkViewport(breakpointsInt.small);
};

export const isTablet = () => {
  return checkViewport(breakpointsInt.large);
};

export const isNormal = () => {
  return !(isMobile() || isTablet());
};

export const onMobile = mq[0];

export const onTablet = mq[1];
