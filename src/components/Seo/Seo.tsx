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
    
    <Helmet
      htmlAttributes={{
        lang: config.metadata.language,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General tags */}
      
      <title>{title}</title>
      
      <meta name="title" content={title} />
      
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      
      <meta property="og:url" content={url} />
      
      <meta property="og:title" content={title} />
      
      <meta property="og:description" content={description} />
      
      <meta property="og:image" content={image} />
      
      <meta property="og:type" content="website" />
      {/* Twitter Card tags */}
      
      <meta name="twitter:card" content="summary" />
      
      <meta name="twitter:title" content={title} />
      
      <meta name="twitter:description" content={description} />
      {/* <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ''}
      /> */}
    </Helmet>
  );
};
