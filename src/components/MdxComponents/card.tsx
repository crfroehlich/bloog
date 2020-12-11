import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ArrowRight } from 'react-feather';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import { shadowAround } from '../../styles/styles';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'transitions' does not exist on type 'The... Remove this comment to see the full error message
transitions.hover};
`;

export default ({ ...props }) => {
  
  return <Card css={shadowAround} {...props} />;
};
