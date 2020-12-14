import React from 'react';
import { Helmet } from 'react-helmet';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config } from 'config';

type Props = {
    frontmatter: any;
    title: string;
    url: string;
};

export const Seo = ({ frontmatter, title, url }: Props) => {
  const description = frontmatter.description
    ? frontmatter.description
    : config.metadata.description;
  const image = frontmatter.cover ? frontmatter.cover : config.metadata.siteImage;

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Helmet
      htmlAttributes={{
        lang: config.metadata.language,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General tags */}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <title>{title}</title>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta name="title" content={title} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta property="og:url" content={url} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta property="og:title" content={title} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta property="og:description" content={description} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta property="og:image" content={image} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta name="twitter:card" content="summary" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta name="twitter:title" content={title} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <meta name="twitter:description" content={description} />
      {/* <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ''}
      /> */}
    </Helmet>
  );
};
