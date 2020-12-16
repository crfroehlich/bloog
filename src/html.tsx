import React from 'react';
import { getConf } from '..';
import { scrollbar } from './styles';

const config = getConf();

type Props = {
    htmlAttributes?: any;
    headComponents?: any[];
    bodyAttributes?: any;
    preBodyComponents?: any[];
    body?: string;
    postBodyComponents?: any[];
};

export default class HTML extends React.Component<Props> {

  render() {
    return (
      
      <html {...this.props.htmlAttributes} lang="en">
        
        <head>
          
          <meta charSet="utf-8" />
          
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {config.metadata.ogImage ? (
            
            <meta property="og:image" content={config.metadata.ogImage} />
          ) : null}
          
          <meta property="twitter:card" content="summary_large_image" />
          {config.metadata.ogImage ? (
            
            <meta property="twitter:image" content={config.metadata.ogImage} />
          ) : null}
          {config.metadata.favicon ? (
            
            <link rel="shortcut icon" type="image/svg" href={config.metadata.favicon} />
          ) : null}
          
          <noscript key="noscript"></noscript>
          {this.props.headComponents}
        </head>
        
        <body css={scrollbar} {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body || '' }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
