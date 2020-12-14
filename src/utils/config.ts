import fs from 'fs';
import { merge, cloneDeep } from 'lodash';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config as defaults } from 'config';
import { readYamlOrJson } from './fileUtils';
// @ts-expect-error ts-migrate(2305) FIXME: Module '"./config-pwa"' has no exported member 'pr... Remove this comment to see the full error message
import { processPwa } from './config-pwa';

export const generate = (path: any, config: any) => {
  const generated = `export const generatedConfig = ${JSON.stringify(config, undefined, 4)};`;
  fs.writeFile(path, generated, function (err) {
    if (err) return console.log(err);
  });
};

const readEnvOrDefault = (name: any, def: any) => {
  let value = process.env[name];
  return value ? value : def ? def : null;
};

class ConfigReader {
  read() {
    return null;
  }
}

class FileReader extends ConfigReader {
  getPath() {
    return readEnvOrDefault('CONFIG_PATH', __dirname + '/../../config/config.yml');
  }

  read() {
    const path = this.getPath();
    return readYamlOrJson(path);
  }
}

class EnvReader extends ConfigReader {
  readArray(key: any) {
    const value = this.readValue(key);
    if (value) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'split' does not exist on type 'string | ... Remove this comment to see the full error message
      return value.split(',').map(String.trim);
    }
    return value;
  }

  readValue(key: any) {
    if (key in process.env) {
      const value = process.env[key];
      try {
        if (value === 'true') {
          return true;
        } else if (value === 'false') {
          return false;
        } else if (typeof value === 'number') {
          return parseFloat(value);
        }
        return value;
      } catch (err) {
        return value;
      }
    }
    return undefined;
  }

  generatePrefix(prefix: any, key: any) {
    const suffix = key
      .split(/(?=[A-Z])/)
      .map((str: any) => str.toUpperCase())
      .join('_');
    return prefix !== '' ? `${prefix}_${suffix}` : suffix;
  }

  readObject(obj: any, config: any, prefix: any) {
    for (let [key, value] of Object.entries(obj)) {
      const newPrefix = this.generatePrefix(prefix, key);
      if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        value === null
      ) {
        const value = this.readValue(newPrefix);
        if (value !== undefined) {
          config[key] = value;
        }
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          const value = this.readArray(newPrefix);
          if (value !== undefined) {
            config[key] = value;
          }
        } else {
          const child = {};
          config[key] = child;
          this.readObject(value, child, newPrefix);
        }
      }
    }
  }

  // @ts-expect-error ts-migrate(2416) FIXME: Property 'read' in type 'EnvReader' is not assigna... Remove this comment to see the full error message
  read() {
    const config = {};
    this.readObject(defaults, config, '');
    return config;
  }
}


export const read = () => {
  const fileConfig = new FileReader().read();
  const envConfig = new EnvReader().read();
  const def = cloneDeep(defaults);

  let config = merge(def, fileConfig);
  config = merge(config, envConfig);
  postProcessConfig(config);
  return config;
};

const postProcessConfig = (config: any) => {
  if (config.pwa.enabled === true) {
    processPwa(config);
  }

  config.sidebar.groups.sort(function (a: any, b: any) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    let byOrder = a.order > b.order ? 1 : a.order > b.order ? -1 : 0;
    return byOrder === 0 ? b.path.length - a.path.length : byOrder;
  });
};
