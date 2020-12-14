import { base } from './base';
import { light as lightTheme } from './light';
import { dark as darkTheme } from './dark';
import { cloneDeep, merge } from 'lodash';

class ThemeBuilder {
  constructor(base) {
    this.result = cloneDeep(base);
  }

  applyColors(colors) {
    this.result['colors'] = merge(this.result.colors, colors);
    return this;
  }

  initialize() {
    for (let [key, value] of Object.entries(this.result)) {
      if (typeof value === 'function') {
        this.result[key] = value(this.result.colors);
      } else {
        this.result[key] = value;
      }
    }
    return this;
  }

  applyTheme(theme) {
    this.result = merge(this.result, theme);
    return this;
  }

  get() {
    return this.result;
  }
}

export const dark = new ThemeBuilder(base)
  .applyColors(darkTheme.colors)
  .initialize()
  .applyTheme(darkTheme)
  .get();

export const light = new ThemeBuilder(base)
  .applyColors(lightTheme.colors)
  .initialize()
  .applyTheme(lightTheme)
  .get();
