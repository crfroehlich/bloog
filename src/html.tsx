import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import config from 'config';
// @ts-expect-error ts-migrate(6142) FIXME: Module './styles' was resolved to '/mnt/k/code/scr... Remove this comment to see the full error message
import { scrollbar } from './styles';

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
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <html {...this.props.htmlAttributes} lang="en">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <head>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <meta charSet="utf-8" />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {config.metadata.ogImage ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <meta property="og:image" content={config.metadata.ogImage} />
          ) : null}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <meta property="twitter:card" content="summary_large_image" />
          {config.metadata.ogImage ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <meta property="twitter:image" content={config.metadata.ogImage} />
          ) : null}
          {config.metadata.favicon ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <link rel="shortcut icon" type="image/svg" href={config.metadata.favicon} />
          ) : null}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <noscript key="noscript"></noscript>
          {this.props.headComponents}
        </head>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <body css={scrollbar} {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
