import styled from '@emotion/styled';
import React from 'react';
import Collapsible from 'react-collapsible';
import { renderToStaticMarkup } from 'react-dom/server';
import { ChevronDown, ChevronUp } from 'react-feather';
import { shadowAround } from '../../styles/styles';
import { getTheme } from '../../theme';
import { emojiTools } from '../../utils/emoji';

const { colors, transitions } = getTheme();

const AccordionWrapper = styled(({ openImg, closedImg, ...props }) => <div {...props} />)`
  margin: 10px 0;
  & > div {
    ${shadowAround()};
    border-radius: 4px;

    & > span {
      &.is-open {
        border-bottom: 1px solid ${colors.border};
        &:after {
          content: url('data:image/svg+xml; utf8, ${(props) => props.openImg}');
        }
      }
      &:hover {
        border: 1px solid ${colors.primary};
      }
      &:after {
        content: url('data:image/svg+xml; utf8, ${(props) => props.closedImg}');
        float: right;
      }
      transition: ${transitions.hover};
      border: 1px solid transparent;
      font-weight: 500;
      padding: 16px;
      cursor: pointer;
      display: block;
      width: 100%;
    }

    & > div > div {
      padding: 8px 16px;
    }
  }
`;

export const Accordion = ({ title, titleWhenOpen, expanded, children, ...props }: any) => {
  const color = encodeURIComponent(colors.primary); // replace # to not follow uri as usual
  const closed = renderToStaticMarkup(<ChevronDown size={22} color={color} />);
  const open = renderToStaticMarkup(<ChevronUp size={22} color={color} />);
  const triggerWhenOpen = titleWhenOpen || title;

  return (
    <AccordionWrapper openImg={open} closedImg={closed}>
      <Collapsible
        lazyRender={true}
        trigger={emojiTools.emojify(title)}
        triggerWhenOpen={emojiTools.emojify(triggerWhenOpen)}
        {...props}
      >
        {children}
      </Collapsible>
    </AccordionWrapper>
  );
};
