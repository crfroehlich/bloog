import { readFileSync, close, open, utimes } from 'fs';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'js-y... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(2794) FIXME: Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
      resolve();
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
