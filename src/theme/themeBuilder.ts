import * as base from './base';
import lightTheme from './light';
import darkTheme from './dark';
import _ from 'lodash';

class ThemeBuilder {
  result: any;

  constructor(base: any) {
    this.result = _.cloneDeep(base);
  }

  applyColors(colors: any) {
    this.result['colors'] = _.merge(this.result.colors, colors);
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

  applyTheme(theme: any) {
    this.result = _.merge(this.result, theme);
    return this;
  }

  get() {
    return this.result;
  }
}

export const dark = new ThemeBuilder(base)
  .applyColors(darkTheme)
  .initialize()
  .applyTheme({ colors: darkTheme })
  .get();

export const light = new ThemeBuilder(base)
  .applyColors(lightTheme)
  .initialize()
  .applyTheme({ colors: lightTheme })
  .get();
