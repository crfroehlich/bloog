import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { AlertCircle, AlertOctagon, AlertTriangle } from 'react-feather';
import { getTheme } from '../../theme';

const { highlights } = getTheme();

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

const HighlightWrapper = styled(({ className, children }: any) => (
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

const Highlight = ({ children, color, icon, ...props }: any) => {
  const highlightColor = highlights[color];
  return (
    <HighlightWrapper
      background={highlightColor?.background}
      border={highlightColor.border}
      font={highlightColor.font}
      {...props}
    >
      <div css={{ marginRight: '16px', lineHeight: 0 }}>
        {icon.render({ color: highlightColor.border, size: 24 })}
      </div>
      <div css={skipParagraph}>{children}</div>
    </HighlightWrapper>
  );
};

export const Highlights = {
  Warning: () =>
    Highlight({
      color: 'warning',
      icon: AlertTriangle,
      ...highlights.warning,
    }),
  Error: () =>
    Highlight({
      color: 'error',
      icon: AlertOctagon,
      ...highlights.error,
    }),
  Info: () =>
    Highlight({
      color: 'info',
      icon: AlertCircle,
      ...highlights.info,
    }),
  Tip: () =>
    Highlight({
      color: 'tip',
      icon: AlertCircle,
      ...highlights.tip,
    }),
};
