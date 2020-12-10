import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Collapsible from 'react-collapsible';
import { ChevronUp, ChevronDown } from 'react-feather';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { renderToStaticMarkup } from 'react-dom/server';
// @ts-expect-error ts-migrate(2306) FIXME: File '/mnt/k/code/scratchpads/BooGi/src/utils/emoj... Remove this comment to see the full error message
import emoji from '../../utils/emoji';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import { shadowAround } from '../../styles';

const AccordionWrapper = styled.div`
margin: 10px 0;
& > div {
    ${(props) => shadowAround(props.theme)};
    border-radius: 4px;

    & > span {
        &.is-open {
            border-bottom: 1px solid ${(props) => props.theme.            
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.border};
            &:after {
                content: url('data:image/svg+xml; utf8, ${(props) => props.                
// @ts-expect-error ts-migrate(2339) FIXME: Property 'openImg' does not exist on type '{ theme... Remove this comment to see the full error message
openImg}');
            }
        }
        &:hover {
            border: 1px solid ${(props) => props.theme.            
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
        }
        &:after {
            content: url('data:image/svg+xml; utf8, ${(props) => props.            
// @ts-expect-error ts-migrate(2339) FIXME: Property 'closedImg' does not exist on type '{ the... Remove this comment to see the full error message
closedImg}');
            float: right;
        }
        transition: ${(props) => props.theme.        
// @ts-expect-error ts-migrate(2339) FIXME: Property 'transitions' does not exist on type 'The... Remove this comment to see the full error message
transitions.hover};
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

export default ({
    title,
    titleWhenOpen,
    expanded,
    children,
    ...props
}: any) => {
  const theme = useTheme();
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
  const color = encodeURIComponent(theme.colors.primary); // replace # to not follow uri as usual
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const closed = renderToStaticMarkup(<ChevronDown size={22} color={color} />);
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const open = renderToStaticMarkup(<ChevronUp size={22} color={color} />);
  const triggerWhenOpen = titleWhenOpen ? titleWhenOpen : title;
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AccordionWrapper theme={theme} openImg={open} closedImg={closed}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Collapsible
        lazyRender={true}
        trigger={emoji.emojify(title)}
        triggerWhenOpen={emoji.emojify(triggerWhenOpen)}
        {...props}
      >
        {children}
      </Collapsible>
    </AccordionWrapper>
  );
};
