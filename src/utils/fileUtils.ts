import { readFileSync, close, open, utimes } from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export const touch = (path: any) => {
  return new Promise((resolve, reject) => {
    const time = new Date();
    utimes(path, time, time, (err) => {
      if (err) {
        return open(path, 'w', (err, fd) => {
          if (err) return reject(err);
          close(fd, (err) => (err ? reject(err) : resolve(fd)));
        });
      }
      resolve(time);
    });
  });
};

export const readYamlOrJson = (path: any) => {
  try {
    if (path.endsWith('.yml') || path.endsWith('.yaml')) {
      const fileContents = readFileSync(path, 'utf8');
      return yaml.safeLoad(fileContents);
    } else if (path.endsWith('.json')) {
      return require(path);
    }
    throw 'Config file must be either YAML or JSON';
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const rootDir = () => {
  const filename = require && require.main ? require.main.filename : '';
  return path.dirname(filename)
};
