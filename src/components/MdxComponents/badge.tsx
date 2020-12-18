import styled from '@emotion/styled';
import colorFn from 'color';
import { getTheme } from '../../theme';

const { colors } = getTheme();

const BadgeWrapper = styled.span`
  padding: 4px 8px;
  background: ${(props: any) => props?.background};
  color: ${(props: any) => props.foreground};
  border-radius: 16px;
  min-width: 14px;
  font-weight: bold;
  font-size: 12px;
  align-self: flex-start;
  margin-left: 4px;
  margin-right: 4px;
`;

export const Badge = ({ children, color, ...props }: any) => {
  const background = color || colors.primary;
  const foreground =
    colorFn(background).luminosity() < 0.5 ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.95)';

  return (
    <BadgeWrapper foreground={foreground} background={background} {...props}>
      {children}
    </BadgeWrapper>
  );
};
