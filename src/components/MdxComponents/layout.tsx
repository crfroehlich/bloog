import React from 'react';
import styled from '@emotion/styled';

const LayoutEl = styled.div`
  display: flex;
  flex-direction: ${(props) => props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'direction' does not exist on type '{ the... Remove this comment to see the full error message
direction || 'row'};
  align-items: ${(props) => props.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'align' does not exist on type '{ theme?:... Remove this comment to see the full error message
align};
  &.spacing-xlarge > * {
    margin: 64px 64px 64px 0;
  }
  &.spacing-large > * {
    margin: 32px 32px 32px 0;
  }
  &.spacing-medium > * {
    margin: 16px 16px 16px 0;
  }
  &.spacing-small > * {
    margin: 8px 8px 8px 0;
  }
  &.spacing-xsmall > * {
    margin: 4px 4px 4px 0;
  }
  & > * {
    flex: 1 1 0px;
  }
`;

export const Layout = ({
  children,
  spacing,
  ...props
}: any) => {
  let space = spacing || 'medium';
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LayoutEl className={'spacing-' + space} {...props}>
      {children}
    </LayoutEl>
  );
};
