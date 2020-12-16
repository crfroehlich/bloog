import * as Icons from 'react-feather';
import { Empty } from '..';
import { getTheme } from '../../theme';

const { colors } = getTheme();

const capitalize = (text: any) => text.charAt(0).toUpperCase() + text.slice(1);

export const Icon = ({ ...props }) => {
  let name = props.name
    .split('-')
    .map(capitalize)
    .reduce((acc: any, value: any) => (acc += value), '');
  const icon = Icons[name];
  if (!icon) {
    return <Empty />;
  }

  const config = {
    size: props.size || 22,
    color: props.color || colors.font,
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
