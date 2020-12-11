import { readFileSync, close, open, utimes } from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export const touch = (path: any) => {
  return new Promise((resolve, reject) => {
    const time = new Date();
    utimes(path, time, time, (err: any) => {
      if (err) {
        return open(path, 'w', (err: any, fd: any) => {
          if (err) return reject(err);
          close(fd, (err: any) => err ? reject(err) : resolve(fd));
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

// @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
export const rootDir = () => path.dirname(require.main.filename);
