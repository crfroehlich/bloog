import e from 'node-emoji';

export const emojify = (text: any) => {
  return e.emojify(text, (name: any) => name);
};

export const clean = (text: any) => {
  const emojified = emojify(text);
  return e.strip(emojified);
};

export const emoji = { clean, emojify };