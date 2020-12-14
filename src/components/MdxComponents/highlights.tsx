import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { AlertCircle, AlertOctagon, AlertTriangle } from 'react-feather';
import { css } from '@emotion/react';

const skipParagraph = css`
  .paragraph {
    &:first-of-type {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const HighlightWrapper = styled(({
  className,
  children
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={className}>{children}</div>
))`
  margin: 16px 0;
  padding: 14px;
  border: 1px solid ${(props) => props.border};
  background-color: ${(props) => props.background};
  color: ${(props) => props.font};
  align-items: center;
  display: flex;
  border-radius: 4px;
`;

const Highlight = ({
  children,
  color,
  icon,
  ...props
}: any) => {
  const theme = useTheme();
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'highlights' does not exist on type 'Them... Remove this comment to see the full error message
  const highlightColor = theme.highlights[color];
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <HighlightWrapper
      background={highlightColor.background}
      border={highlightColor.border}
      font={highlightColor.font}
      {...props}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div css={{ marginRight: '16px', lineHeight: 0 }}>
        {icon.render({ color: highlightColor.border, size: 24 })}
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div css={skipParagraph}>{children}</div>
    </HighlightWrapper>
  );
};

export const Highlights = {
  Warning: (props: any) => Highlight({
    color: 'warning',
    icon: AlertTriangle,
    ...props,
  }),
  Error: (props: any) => Highlight({
    color: 'error',
    icon: AlertOctagon,
    ...props,
  }),
  Info: (props: any) => Highlight({
    color: 'info',
    icon: AlertCircle,
    ...props,
  }),
  Tip: (props: any) => Highlight({
    color: 'tip',
    icon: AlertCircle,
    ...props,
  }),
};
