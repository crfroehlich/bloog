import React from 'react';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'colo... Remove this comment to see the full error message
import colorFn from 'color';
import { useTheme } from '@emotion/react';

const BadgeWrapper = styled.span`
  padding: 4px 8px;
  background: ${(props) => props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{ th... Remove this comment to see the full error message
background};
  color: ${(props) => props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'foreground' does not exist on type '{ th... Remove this comment to see the full error message
foreground};
  border-radius: 16px;
  min-width: 14px;
  font-weight: bold;
  font-size: 12px;
  align-self: flex-start;
  margin-left: 4px;
  margin-right: 4px;
`;

const Badge = ({
  children,
  color,
  ...props
}: any) => {
  const theme = useTheme();

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
  const background = color || theme.colors.primary;

  const foreground =
    colorFn(background).luminosity() < 0.5 ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.95)';
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <BadgeWrapper foreground={foreground} background={background} {...props}>
      {children}
    </BadgeWrapper>
  );
};

export default Badge;
