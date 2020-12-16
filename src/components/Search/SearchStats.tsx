import styled from '@emotion/styled';
import { paddingLeftRight } from './styles';

const Token = styled.span`
  font-weight: bold;
`;

const StatsWrapper = styled.p`
  color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.font.base};
  font-size: 11px;
  text-align: right;
  margin-top: 10px;
`;

export const SearchStats = ({
  hits,
  processingTimeMS
}: any) => (
  <StatsWrapper css={paddingLeftRight}>
    Found
    <Token> {hits}</Token> results in
    <Token> {processingTimeMS}</Token> ms
  </StatsWrapper>
);
