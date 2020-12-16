/* eslint-disable react/display-name */
import React from 'react';
import { Accordion } from './accordion';
import { AnchorTag } from './anchor';
import { Badge } from './badge';
import { Card } from './card';
import { CodeBlock } from './codeBlock';
import { FileDownloadCard } from './fileDownloadCard';
import { Highlights } from './highlights';
import { Icon } from './icon';
import { ImageCard } from './imageCard';
import { Jargon } from './jargon';
import { Layout } from './layout';
import { LinkCard } from './linkCard';
import { blockquote, pre, table, list } from '../../styles/styles';
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
      <table css={table()} {...props} />
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
  blockquote: (props: any) => <blockquote css={blockquote()} {...props} />,
  p: (props: any) => <article className="paragraph" {...props} />,
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
  FileDownloadCard,
  ...Highlights,
};
