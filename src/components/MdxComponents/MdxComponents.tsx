/* eslint-disable react/display-name */
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './accordion' was resolved to '/home/fro/co... Remove this comment to see the full error message
import { Accordion } from './accordion';
// @ts-expect-error ts-migrate(6142) FIXME: Module './anchor' was resolved to '/home/fro/code/... Remove this comment to see the full error message
import { AnchorTag } from './anchor';
// @ts-expect-error ts-migrate(6142) FIXME: Module './badge' was resolved to '/home/fro/code/t... Remove this comment to see the full error message
import { Badge } from './badge';
// @ts-expect-error ts-migrate(6142) FIXME: Module './card' was resolved to '/home/fro/code/te... Remove this comment to see the full error message
import { Card } from './card';
// @ts-expect-error ts-migrate(6142) FIXME: Module './codeBlock' was resolved to '/home/fro/co... Remove this comment to see the full error message
import { CodeBlock } from './codeBlock';
// @ts-expect-error ts-migrate(6142) FIXME: Module './fileDownloadCard' was resolved to '/home... Remove this comment to see the full error message
import { DownloadCard } from './fileDownloadCard';
// @ts-expect-error ts-migrate(6142) FIXME: Module './highlights' was resolved to '/home/fro/c... Remove this comment to see the full error message
import { Highlights } from './highlights';
// @ts-expect-error ts-migrate(6142) FIXME: Module './icon' was resolved to '/home/fro/code/te... Remove this comment to see the full error message
import { Icon } from './icon';
// @ts-expect-error ts-migrate(6142) FIXME: Module './imageCard' was resolved to '/home/fro/co... Remove this comment to see the full error message
import { ImageCard } from './imageCard';
// @ts-expect-error ts-migrate(6142) FIXME: Module './jargon' was resolved to '/home/fro/code/... Remove this comment to see the full error message
import { Jargon } from './jargon';
// @ts-expect-error ts-migrate(6142) FIXME: Module './layout' was resolved to '/home/fro/code/... Remove this comment to see the full error message
import { Layout } from './layout';
// @ts-expect-error ts-migrate(6142) FIXME: Module './linkCard' was resolved to '/home/fro/cod... Remove this comment to see the full error message
import { LinkCard } from './linkCard';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles/styles' was resolved to '/hom... Remove this comment to see the full error message
import { blockquote, pre, table, list } from '../../styles/styles';
import { useTheme } from '@emotion/react';
import { emojiTools as emoji } from '../../utils/emoji';

const idFromHeader = (props: any) => {
  let name = props.children;
  if (Array.isArray(name)) {
    name = props.children[0];
  }
  return emoji.clean(name).replace(/\s+/g, '').toLowerCase();
};
const Header = (level: any, props: any) => {
  let name = idFromHeader(props);
  return React.createElement('h' + level, {
    className: 'heading' + level,
    id: 'h-' + name,
    ...props,
  });
};

const Table = ({...props}) => (
  
  <div css={{ display: 'grid' }}>
    
    <div css={{ overflowX: 'auto' }}>
      
      <table css={table(useTheme())} {...props} />
    </div>
  </div>
);

const Section = (props: any) => {
  let header = '';
  if (Array.isArray(props.children)) {
    header = props.children[0].props;
  } else {
    header = props.children.props;
  }
  const name = idFromHeader(header);
  
  return <section id={name} {...props} />;
};

const emphasis = (props: any) => {
  const useJargon = !(typeof props.children === 'string');
  if (useJargon) {
    
    return <Jargon {...props} />;
  }
  
  return <em {...props} />;
};

export const MdxComponents = {
  h1: (props: any) => Header(1, props),
  h2: (props: any) => Header(2, props),
  h3: (props: any) => Header(3, props),
  h4: (props: any) => Header(4, props),
  h5: (props: any) => Header(5, props),
  h6: (props: any) => Header(6, props),
  section: (props: any) => Section(props),
  
  blockquote: (props: any) => <blockquote css={blockquote(useTheme())} {...props} />,
  
  p: (props: any) => <p className="paragraph" {...props} />,
  
  pre: (props: any) => <pre css={pre} {...props} />,
  
  table: (props: any) => <Table {...props}/>,
  em: emphasis,
  
  img: (props: any) => <a href={props.src} target="_blank" rel="noopener noreferrer">
    
    <img loading={'lazy'} {...props} />
  </a>,
  code: CodeBlock,
  
  ul: (props: any) => <ul css={list} {...props} />,
  
  ol: (props: any) => <ol css={list} {...props} />,
  a: AnchorTag,
  Badge,
  Layout,
  Icon,
  Accordion,
  Card,
  LinkCard,
  ImageCard,
  DownloadCard,
  ...Highlights,
};
