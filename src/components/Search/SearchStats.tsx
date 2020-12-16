import styled from '@emotion/styled';
import { paddingLeftRight } from './styles';
import { getTheme } from '../../theme';

const { search } = getTheme();

const Token = styled.span`
  font-weight: bold;
`;

const StatsWrapper = styled.p`
  color: ${search.fond?.base};
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
