import { readYamlOrJson } from './fileUtils';

export const jargonData = readYamlOrJson(__dirname + '/../../config/jargon.yml');

export const validateProperty = (entry: any, property: any, key: any) => {
  const value = entry[property];
  if (typeof value === 'undefined' || value === null || value.length === 0) {
    throw "Property '" + property + "' is not defined for jargon entry '" + key + "'!";
  }
};

const jargon = {};
for (const key in jargonData) {
  const entry = jargonData[key];
  validateProperty(entry, 'name', key);
  validateProperty(entry, 'description', key);
  let long_description = '<span><b>' + entry.name + '</b>';

  let long_name = entry.long_name;
  if (typeof long_name !== 'undefined' && long_name !== null && long_name.length > 0) {
    long_description += ' - ' + long_name;
  }
  long_description += '</span> ' + entry.description;
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  jargon[key] = long_description;
}