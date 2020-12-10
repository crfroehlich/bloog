/* eslint-disable react/display-name */
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './accordion' was resolved to '/mnt/k/code/... Remove this comment to see the full error message
import Accordion from './accordion';
// @ts-expect-error ts-migrate(6142) FIXME: Module './anchor' was resolved to '/mnt/k/code/scr... Remove this comment to see the full error message
import AnchorTag from './anchor';
// @ts-expect-error ts-migrate(6142) FIXME: Module './badge' was resolved to '/mnt/k/code/scra... Remove this comment to see the full error message
import Badge from './badge';
// @ts-expect-error ts-migrate(6142) FIXME: Module './card' was resolved to '/mnt/k/code/scrat... Remove this comment to see the full error message
import Card from './card';
// @ts-expect-error ts-migrate(6142) FIXME: Module './codeBlock' was resolved to '/mnt/k/code/... Remove this comment to see the full error message
import CodeBlock from './codeBlock';
// @ts-expect-error ts-migrate(6142) FIXME: Module './fileDownloadCard' was resolved to '/mnt/... Remove this comment to see the full error message
import DownloadCard from './fileDownloadCard';
// @ts-expect-error ts-migrate(6142) FIXME: Module './highlights' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import Highlights from './highlights';
// @ts-expect-error ts-migrate(6142) FIXME: Module './icon' was resolved to '/mnt/k/code/scrat... Remove this comment to see the full error message
import Icon from './icon';
// @ts-expect-error ts-migrate(6142) FIXME: Module './imageCard' was resolved to '/mnt/k/code/... Remove this comment to see the full error message
import ImageCard from './imageCard';
// @ts-expect-error ts-migrate(6142) FIXME: Module './jargon' was resolved to '/mnt/k/code/scr... Remove this comment to see the full error message
import Jargon from './jargon';
// @ts-expect-error ts-migrate(6142) FIXME: Module './layout' was resolved to '/mnt/k/code/scr... Remove this comment to see the full error message
import Layout from './layout';
// @ts-expect-error ts-migrate(6142) FIXME: Module './linkCard' was resolved to '/mnt/k/code/s... Remove this comment to see the full error message
import LinkCard from './linkCard';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import { blockquote, pre, table, list } from '../../styles';
import { useTheme } from '@emotion/react';
// @ts-expect-error ts-migrate(2306) FIXME: File '/mnt/k/code/scratchpads/BooGi/src/utils/emoj... Remove this comment to see the full error message
import emoji from '../../utils/emoji';

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
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div css={{ display: 'grid' }}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <div css={{ overflowX: 'auto' }}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <section id={name} {...props} />;
};

const emphasis = (props: any) => {
  const useJargon = !(typeof props.children === 'string');
  if (useJargon) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <Jargon {...props} />;
  }
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <em {...props} />;
};

export default {
  h1: (props: any) => Header(1, props),
  h2: (props: any) => Header(2, props),
  h3: (props: any) => Header(3, props),
  h4: (props: any) => Header(4, props),
  h5: (props: any) => Header(5, props),
  h6: (props: any) => Header(6, props),
  section: (props: any) => Section(props),
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  blockquote: (props: any) => <blockquote css={blockquote(useTheme())} {...props} />,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  p: (props: any) => <p className="paragraph" {...props} />,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  pre: (props: any) => <pre css={pre} {...props} />,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  table: (props: any) => <Table {...props}/>,
  em: emphasis,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  img: (props: any) => <a href={props.src} target="_blank" rel="noopener noreferrer">
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <img loading={'lazy'} {...props} />
  </a>,
  code: CodeBlock,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  ul: (props: any) => <ul css={list} {...props} />,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
