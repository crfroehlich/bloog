// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'close'.
const { readFileSync, close, open, utimes } = require('fs');
const yaml = require('js-yaml');
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'path'.
const path = require('path');

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'touch'.
const touch = (path: any) => {
  return new Promise((resolve, reject) => {
    const time = new Date();
    utimes(path, time, time, (err: any) => {
      if (err) {
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '(err: any, fd: any) => void' is ... Remove this comment to see the full error message
        return open(path, 'w', (err: any, fd: any) => {
          if (err) return reject(err);
          // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
          close(fd, (err: any) => err ? reject(err) : resolve(fd));
        });
      }
      resolve();
    });
  });
};

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'readYamlOr... Remove this comment to see the full error message
const readYamlOrJson = (path: any) => {
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
const rootDir = () => path.dirname(require.main.filename);

module.exports = { touch, readYamlOrJson, rootDir };
