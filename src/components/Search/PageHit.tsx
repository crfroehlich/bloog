import React from 'react';
import { Hit } from './Hits';
import { emojiTools as emoji } from '../../utils/emoji';
import styled from '@emotion/styled';
import { getTheme } from '../../theme';

const { search } = getTheme();

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
  background-color: ${search.mark?.background};
  color: ${search.mark?.font};
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
  
  return <div>
    <span>{beforeText}</span>
    <Highlight>{emoji.emojify(query)}</Highlight>
    <span>{afterText}</span>
  </div>
}

export const PageHit = ({
  hit,
  q,
  maxWords
}: any) => {
  return (
    <li>
      <Hit
        slug={hit.slug}
        title={emoji.emojify(hit.title)}
        details={hit.excerpt ? highlight(q, hit.excerpt, maxWords): ''}
      />
    </li>
  );
};
