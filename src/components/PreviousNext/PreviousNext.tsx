import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Empty, Link } from '..';
import config from '../../../.config';
import { onMobile } from '../../styles/responsive';
import { getTheme } from '../../theme';
import { emojiTools as emoji } from '../../utils/emoji';
import { calculateFlatNavigation, getNavigationData } from '../Navigation';

const { previousNext } = getTheme();

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

const Arrow = styled(({ className, arrow }: any) => (
  <div className={className}>{arrow.render({ color: '' })}</div>
))`
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
    stroke: ${previousNext.font};
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
  color: ${previousNext.fontLabel};
  span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }
`;

const ContentWrapper = styled(({ className, label, title }: any) => {
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

const LeftButton = ({ url, title, label }: any) => {
  return (
    <Button url={url}>
      <Arrow arrow={ChevronLeft} />
      <ContentWrapper title={title} label={label} css={{ textAlign: 'right' }} />
    </Button>
  );
};

const RightButton = ({ url, title, label }: any) => {
  return (
    <Button url={url}>
      <ContentWrapper title={title} label={label} />
      <Arrow arrow={ChevronRight} />
    </Button>
  );
};

const Button = styled(({ className, url, children }: any) => {
  return (
    <Link to={url || '#'} className={className}>
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
  color: ${previousNext.font};
  background-color: ${previousNext?.background};
  border-radius: 4px;
  border: 1px solid ${previousNext.border};
  transition: border 200ms ease 0s;
  box-shadow: ${previousNext.shadow} 0 3px 8px;
  text-decoration: none;
  visibility: ${(props) => (props.url ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.url ? 1 : 0)};

  &:hover {
    color: ${previousNext.hover};
    text-decoration: none;
    border: 1px solid ${previousNext.hover};
    svg * {
      stroke: ${previousNext.hover};
    }
  }
`;
interface Nav {
  url?: string;
  title?: string;
  path?: string;
  groupName?: string;
}
const calculatePreviousNext = (nav: any, index: any): Nav[] => {
  const nextInfo: Nav = {};
  const previousInfo: Nav = {};
  let currentIndex = index;
  const set = (nav: Nav, info: Nav) => {
    if (nav?.url && info != undefined) {
      info.url = nav.url;
      info.title = nav.title;
      info.path = emoji.emojify(nav.groupName);
    }
  };
  if (currentIndex === undefined) {
    // index
    if (nav && nav[0]) {
      nextInfo.url = nav[0].url;
      nextInfo.title = nav[0].title;
      nextInfo.path = nav[0].groupName;
    }
    previousInfo.url = undefined;
    previousInfo.title = undefined;
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
      if (e.keyCode == 37 && previous.url) {
        // left arrow
        navigate(previous.url);
      } else if (e.keyCode == 39 && next.url) {
        // right arrow
        navigate(next.url);
      }
    };
  }, [previous, next]);
};

export const PreviousNext = ({ mdx }: any) => {
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
  const previousLabel = `${previous.path ? previous.path + conf.pathDivider : ''} ${
    conf.previousName
  }`;
  const nextLabel = `${conf.nextName} ${next.path ? conf.pathDivider + next.path : ''}`;
  return (
    <PreviousNextWrapper>
      {currentIndex >= 0 ? (
        <>
          <LeftButton url={previous.url} title={previous.title} label={previousLabel} />
          <RightButton url={next.url} title={next.title} label={nextLabel} />
        </>
      ) : (
        <Empty />
      )}
    </PreviousNextWrapper>
  );
};
