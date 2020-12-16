import config from '../.config';
import { scrollbar } from './styles';
import { Empty } from './components/Empty';

export const HTML = (props) => {
  const { 
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
  } = props;

  return (
    <html {...htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {config.metadata.ogImage ? (
          <meta property="og:image" content={config.metadata.ogImage} />
        ) : <Empty />}
        
        <meta property="twitter:card" content="summary_large_image" />
        {config.metadata.ogImage ? (
          
          <meta property="twitter:image" content={config.metadata.ogImage} />
        ) : <Empty />}
        {config.metadata.favicon ? (
          
          <link rel="shortcut icon" type="image/svg" href={config.metadata.favicon} />
        ) : <Empty />}
        <noscript key="noscript"></noscript>
        {headComponents}
      </head>
      <body css={scrollbar} {...bodyAttributes}>
        {preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body || '' }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
