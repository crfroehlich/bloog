import { readYamlOrJson } from './fileUtils';

const jargonData = readYamlOrJson('build/jargon.yml');

const validateProperty = (entry: any, property: any, key: any) => {
  const value = entry[property];
  if (typeof value === 'undefined' || value === null || value.length === 0) {
    throw `Property '${property}' is not defined for jargon entry '${key}'!`;
  }
};

const getJargon = () => {
  const jargon = {};
  for (const key in jargonData) {
    const entry = jargonData[key];
    validateProperty(entry, 'name', key);
    validateProperty(entry, 'description', key);
    let long_description = `<span><b>${entry.name}</b>`;

    const { long_name } = entry;
    if (typeof long_name !== 'undefined' && long_name !== null && long_name.length > 0) {
      long_description += ` - ${long_name}`;
    }
    long_description += `</span> ${entry.description}`;
    jargon[key] = long_description;
  }
  return jargon;
};

export const jargon = getJargon();
