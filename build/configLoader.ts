import { merge, cloneDeep } from 'lodash';
import { configDefaults, IConfig } from './configDefaults';
import { readYamlOrJson } from './fileUtils';
import { processPwa } from '../src/utils/config-pwa';

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
    return readEnvOrDefault('CONFIG_PATH', 'build/config.yml');
  }

  read() {
    const path = this.getPath();
    return readYamlOrJson(path);
  }
}

class EnvReader extends ConfigReader {
  config = {};

  readArray(key: any) {
    const value = `${this.readValue(key)}`;
    if (value) {
      return value.split(',').map(s => s.trim());
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
 
  read() {
    this.readObject(configDefaults, this.config, '');
    return null;
  }
  
  readConfig() {
    this.readObject(configDefaults, this.config, '');
    return this.config;
  }
}


export const read = (): IConfig => {
  const fileConfig = new FileReader().read();
  const envConfig = new EnvReader().readConfig();
  const def = cloneDeep(configDefaults);

  let config = merge(def, fileConfig);
  config = merge(config, envConfig);
  postProcessConfig(config);
  return config;
};

const postProcessConfig = (config: any) => {
  if (config.pwa.enabled === true) {
    processPwa(config);
  }

  config.sidebar.groups.sort((a: any, b: any) => {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    let byOrder = a.order > b.order ? 1 : a.order > b.order ? -1 : 0;
    return byOrder === 0 ? b.path?.length || 0 - a.path?.length || 0 : byOrder;
  });
};

let conf: IConfig;
export const getConf = (): IConfig => conf = conf || read();