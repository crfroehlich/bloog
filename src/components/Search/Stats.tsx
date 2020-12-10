import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/mnt/k/code/scr... Remove this comment to see the full error message
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

const Stats = ({
  hits,
  processingTimeMS
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <StatsWrapper css={paddingLeftRight}>
    Found
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Token> {hits}</Token> results in
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Token> {processingTimeMS}</Token> ms
  </StatsWrapper>
);

export default Stats;
