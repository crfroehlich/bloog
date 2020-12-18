import colorfn from 'color';

export const increaseIntensivity = (color: any, factor: any) => {
  const clr = colorfn(color);
  const intensified = clr.isDark() ? clr.darken(factor) : clr.lighten(factor);
  return intensified.hex();
};

export const decreaseIntensivity = (color: any, factor: any) => {
  const clr = colorfn(color);
  const luminStd = 1 / clr.luminosity();
  const fc = luminStd > 6 ? factor * 6 : factor * luminStd;
  const intensified = clr.isDark() ? clr.lighten(fc) : clr.darken(fc);
  return intensified.hex();
};

export const grayscaleCompatible = (color: any) => {
  return increaseIntensivity(colorfn(color).negate().grayscale().hex(), 0.7);
};
