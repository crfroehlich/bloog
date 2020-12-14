import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Collapsible from 'react-collapsible';
import { ChevronUp, ChevronDown } from 'react-feather';
import { renderToStaticMarkup } from 'react-dom/server';
import { emojiTools } from '../../utils/emoji';
import { shadowAround } from '../../styles/styles';

const AccordionWrapper = styled.div`
  margin: 10px 0;
  & > div {
    ${(props) => shadowAround(props.theme)};
    border-radius: 4px;

    & > span {
        &.is-open {
            border-bottom: 1px solid ${(props) => props.theme.colors.border};
            &:after {
                content: url('data:image/svg+xml; utf8, ${(props) => props.openImg}');
            }
        }
        &:hover {
            border: 1px solid ${(props) => props.theme.colors.primary};
        }
        &:after {
            content: url('data:image/svg+xml; utf8, ${(props) => props.closedImg}');
            float: right;
        }
        transition: ${(props) => props.theme.transitions.hover};
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

export const Accordion = ({ title, titleWhenOpen, expanded, children, ...props }) => {
  const theme = useTheme();
  const color = encodeURIComponent(theme.colors.primary); // replace # to not follow uri as usual
  const closed = renderToStaticMarkup(<ChevronDown size={22} color={color} />);
  const open = renderToStaticMarkup(<ChevronUp size={22} color={color} />);
  const triggerWhenOpen = titleWhenOpen ? titleWhenOpen : title;
  return (
    <AccordionWrapper theme={theme} openImg={open} closedImg={closed}>
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
