import * as Icons from 'react-feather';
import { useTheme } from '@emotion/react';

const capitalize = (text: any) => text.charAt(0).toUpperCase() + text.slice(1);

export const Icon = ({ ...props }) => {
  const theme = useTheme();
  let name = props.name
    .split('-')
    .map(capitalize)
    .reduce((acc: any, value: any) => (acc += value), '');
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
    <span
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
