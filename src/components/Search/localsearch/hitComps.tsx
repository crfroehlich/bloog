import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Hits' was resolved to '/mnt/k/code/scra... Remove this comment to see the full error message
import { Hit } from '../Hits';
// @ts-expect-error ts-migrate(2306) FIXME: File '/mnt/k/code/scratchpads/BooGi/src/utils/emoj... Remove this comment to see the full error message
import emoji from '../../../utils/emoji';
import styled from '@emotion/styled';

const trim_words = (str: any, numWords: any) => {
  const expString = str.split(/\s+/,numWords);
  return expString.join(" ");
}

const reverse = (str: any) => str.split("").reverse().join("");

const onReversed = (str: any, func: any) => {
  const reversed = reverse(str);
  const transformed = func(reversed);
  return reverse(transformed);
}

const Highlight = styled.span`
background-color: ${(props) => props.theme.
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.mark.background};
color: ${(props) => props.theme.
// @ts-expect-error ts-migrate(2339) FIXME: Property 'search' does not exist on type 'Theme'.
search.mark.font};
`;

const highlight = (query: any, text: any, maxWords: any) => {
  const regex = new RegExp(query, "i")
  const startPos = text.search(regex);
  if (startPos < 0) {
    return trim_words(text, maxWords);
  }
  const qLength = query.length;
  const boundary = Math.ceil((maxWords - 1) / 2);
  let beforeText = text.substring(0, startPos);
  beforeText = onReversed(beforeText, (reversed: any) => trim_words(reversed, boundary));
  beforeText = emoji.emojify(beforeText);
  let afterText = text.substring(startPos + qLength);
  afterText = trim_words(afterText, boundary);
  afterText = emoji.emojify(afterText);
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <span>{beforeText}</span>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Highlight>{emoji.emojify(query)}</Highlight>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <span>{afterText}</span>
  </>
}

export const PageHit = ({
  hit,
  q,
  maxWords
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <li>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Hit
        slug={hit.slug}
        title={emoji.emojify(hit.title)}
        details={hit.excerpt ? highlight(q, hit.excerpt, maxWords): ''}
      />
    </li>
  );
};
