import React, { useEffect } from 'react';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Link'.
import { Link } from '..';
import styled from '@emotion/styled';
import { emojiTools as emoji } from '../../utils/emoji';
import { navigate } from 'gatsby';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config } from 'config';
import { ChevronLeft, ChevronRight } from 'react-feather'

// @ts-expect-error ts-migrate(2305) FIXME: Module '"../Navigation"' has no exported member 'c... Remove this comment to see the full error message
import { calculateFlatNavigation, getNavigationData } from '../Navigation';
import { onMobile } from '../../styles/responsive';

const conf = {
  pathDivider: ' — ',
  previousName: 'Previous',
  nextName: 'Next',
};

const PreviousNextWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: auto;
  display: grid;
  grid-template-rows: auto;
  column-gap: 24px;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
`;

const Arrow = styled(({
  className,
  arrow

}: any) => <div className={className}>{arrow.render({color: ''})}</div>)`
  display: block;
  margin: 0;
  flex: 0 0 auto;
  font-size: 16pt;
  transition: color 200ms ease 0s;
  padding: 16px;
  
  ${onMobile} {
    padding: 6px;
  }
  svg {
    stroke: ${(props) => props.theme.previousNext.font};
  }
`;

const Title = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  transition: color 200ms ease 0s;

  span {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
  }
`;

const Label = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'previousNext' does not exist on type 'Th... Remove this comment to see the full error message
previousNext.fontLabel};

  span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }
`;

const ContentWrapper = styled(({
  className,
  label,
  title
}: any) => {
  return (
    
    <div className={className}>
      
      <Label>
        
        <span>{label}</span>
      </Label>
      
      <Title>
        
        <span>{emoji.emojify(title)}</span>
      </Title>
    </div>
  );
})`
  display: block;
  margin: 0;
  flex: 1 1 0%;
  padding: 16px;
  ${onMobile} {
    padding: 6px;
  }
`;

const LeftButton = ({
  url,
  title,
  label
}: any) => {
  return (
    
    <Button url={url}>
      
      <Arrow arrow={ChevronLeft} />
      
      <ContentWrapper title={title} label={label} css={{ textAlign: 'right' }} />
    </Button>
  );
};

const RightButton = ({
  url,
  title,
  label
}: any) => {
  return (
    
    <Button url={url}>
      
      <ContentWrapper title={title} label={label} />
      
      <Arrow arrow={ChevronRight} />
    </Button>
  );
};

const Button = styled(({
  className,
  url,
  children
}: any) => {
  return (
    
    <Link to={url ? url : '#'} className={className}>
      {children}
    </Link>
  );
})`
  cursor: pointer;
  -moz-box-align: center;
  -moz-box-direction: normal;
  -moz-box-orient: horizontal;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  place-self: stretch;
  color: ${(props) => props.theme.previousNext.font};
  background-color: ${(props) => props.theme.previousNext.background};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.previousNext.border};
  transition: border 200ms ease 0s;
  box-shadow: ${(props) => props.theme.previousNext.shadow} 0 3px 8px;
  text-decoration: none;
  visibility: ${(props) => props.url ? 'visible' : 'hidden'};
  opacity: ${(props) => props.url ? 1 : 0};

  &:hover {
    color: ${(props) => props.theme.previousNext.hover};
    text-decoration: none;
    border: 1px solid ${(props) => props.theme.previousNext.hover};
    svg * {
      stroke: ${(props) => props.theme.previousNext.hover};
    }
  }
`;

const calculatePreviousNext = (nav: any, index: any) => {
  const nextInfo = {};
  const previousInfo = {};
  let currentIndex = index;
  const set = (nav: any, info: any) => {
    if (nav) {
      info.url = nav.url;
      info.title = nav.title;
      info.path = emoji.emojify(nav.groupName);
    }
  };
  if (currentIndex === undefined) {
    // index
    if (nav[0]) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'url' does not exist on type '{}'.
      nextInfo.url = nav[0].url;
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{}'.
      nextInfo.title = nav[0].title;
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'path' does not exist on type '{}'.
      nextInfo.path = nav[0].groupName;
    }
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'url' does not exist on type '{}'.
    previousInfo.url = null;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{}'.
    previousInfo.title = null;
    currentIndex = -1;
  } else {
    const next = nav[currentIndex + 1] ? nav[currentIndex + 1] : null;
    const previous = nav[currentIndex - 1] ? nav[currentIndex - 1] : null;
    set(next, nextInfo);
    set(previous, previousInfo);
  }
  return [previousInfo, nextInfo];
};

const setArrowNavigation = (previous: any, next: any) => {
  useEffect(() => {
    document.onkeydown = (e) => {
      e = e || window.event;
      // @ts-expect-error ts-migrate(2367) FIXME: This condition will always return 'false' since th... Remove this comment to see the full error message
      if (e.keyCode == '37' && previous.url) {
        // left arrow
        navigate(previous.url);
      // @ts-expect-error ts-migrate(2367) FIXME: This condition will always return 'false' since th... Remove this comment to see the full error message
      } else if (e.keyCode == '39' && next.url) {
        // right arrow
        navigate(next.url);
      }
    };
  }, [previous, next]);
};

export const PreviousNext = ({
  mdx
}: any) => {
  const edges = getNavigationData();
  const navigation = calculateFlatNavigation(edges);
  let currentIndex;
  navigation.every((el: any, index: any) => {
    if (el && el.url === mdx.fields.slug) {
      currentIndex = index;
      return false;
    }
    return true;
  });
  const [previous, next] = calculatePreviousNext(navigation, currentIndex);

  if (config.features.previousNext.arrowKeyNavigation === true) {
    setArrowNavigation(previous, next);
  }
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'path' does not exist on type '{}'.
  const previousLabel = `${previous.path ? previous.path + conf.pathDivider : ''} ${
    conf.previousName
  }`;
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'path' does not exist on type '{}'.
  const nextLabel = `${conf.nextName} ${next.path ? conf.pathDivider + next.path : ''}`;
  return (
    
    <PreviousNextWrapper>
      {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
      {currentIndex >= 0 ? (
        
        <>
          
          <LeftButton url={previous.url} title={previous.title} label={previousLabel} />
          
          <RightButton url={next.url} title={next.title} label={nextLabel} />
        </>
      ) : null}
    </PreviousNextWrapper>
  );
};
