import styled from '@emotion/styled';
import { IComponentTheme } from '..';
import { paddingLeftRight } from './styles';

const Token = styled.span`
  font-weight: bold;
`;

const StatsWrapper = styled.p`
  color: ${(props: IComponentTheme) => props.theme?.search?.font?.base};
  font-size: 11px;
  text-align: right;
  margin-top: 10px;
`;

export const Stats = ({
  hits,
  processingTimeMS
}: any) => (
  
  <StatsWrapper css={paddingLeftRight}>
    Found
    
    <Token> {hits}</Token> results in
    
    <Token> {processingTimeMS}</Token> ms
  </StatsWrapper>
);

export default Stats;
