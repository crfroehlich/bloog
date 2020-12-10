// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'emoji'.
const emoji = require('node-emoji');

const emojify = (text: any) => {
  return emoji.emojify(text, (name: any) => name);
};

const clean = (text: any) => {
  const emojified = emojify(text);
  return emoji.strip(emojified);
};

module.exports = {
  emojify,
  clean,
};
