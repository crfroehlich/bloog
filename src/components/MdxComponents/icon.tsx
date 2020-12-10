import React from 'react';
import * as Icons from 'react-feather';
import { useTheme } from '@emotion/react';

const capitalize = (text: any) => text.charAt(0).toUpperCase() + text.slice(1);

const Icon = ({ ...props }) => {
  const theme = useTheme();
  let name = props.name
    .split('-')
    .map(capitalize)
    .reduce((acc: any, value: any) => (acc += value), '');
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const icon = Icons[name];
  if (!icon) {
    return '';
  }

  const config = {
    size: props.size || 22,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
    color: props.color || theme.colors.font,
  };
  const margin = props.margin || '5px';
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: any; css: { margin: string; svg:... Remove this comment to see the full error message
      css={{
        margin: '0 ' + margin,
        svg: {
          verticalAlign: 'middle',
        },
      }}
    >
      {icon.render(config)}
    </span>
  );
};

export default Icon;
