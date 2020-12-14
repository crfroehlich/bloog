import React from 'react';
import { graphql } from 'gatsby';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'gats... Remove this comment to see the full error message
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Layout'.
import { Layout, EditOnRepo, PreviousNext, Seo } from '..';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'config' or its corresponding t... Remove this comment to see the full error message
import { config } from 'config';
import { emojiTools as emoji } from '../utils/emoji';
import { onMobile, onTablet } from '../styles/responsive';

const Title = styled.h1`
  font-size: 24pt
  line-height: 1.5;
  font-weight: 500;
  border-left: 2px solid ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'colors' does not exist on type 'Theme'.
colors.primary};
  padding: 0 16px;
  flex: 1;
  margin-top: 0;
  ${onTablet} {
    font-size: 22pt;
  }
  ${onMobile} {
    font-size: 20pt;
  }
`;

const PageTitle = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type 'Theme'.
content.border};
  color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type 'Theme'.
content.titleFont};
  ${onMobile} {
    padding: 15px;
    margin-bottom: 0;
  }
`;

const TitleWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const ContentWrapper = styled.div`
  color: ${(props) => props.theme.  
// @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type 'Theme'.
content.font};
  flex: 1;
  code {
    background: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type 'Theme'.
content.code.background};
    border: 1px solid ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type 'Theme'.
content.code.border};
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;
    color: ${(props) => props.theme.    
// @ts-expect-error ts-migrate(2339) FIXME: Property 'content' does not exist on type 'Theme'.
content.code.font};
    // overflow-wrap: break-word;
  }
  section {
    margin: 24px 0;
  }
  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 12px 0px;
    padding: 0px 0px 0px 2em;
  }

  ul li,
  ol li {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
  }
`;

const ReadingTime = styled(({
  className,
  time
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <span className={className}>Reading time: {time} min</span>
))`
  font-style: italic;
  font-size: 12px;
`;

const LastUpdated = styled(({
  className,
  time,
  name
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <span className={className}>
      Last update:{' '}
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <i>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <b>{time}</b>
      </i>{' '}
      by
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <i>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <b> {name}</b>
      </i>
    </span>
  );
})`
  font-size: 12px;
  display: block;
`;

export default class MDXRuntimeTest extends React.Component {
  componentDidMount() {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      element.scrollIntoView(true);
    }
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'data' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { data } = this.props;
    if (!data) {
      return null;
    }
    const {
      mdx,
      site: {
        siteMetadata: { docsLocation, docsLocationType, editable },
      },
      gitBranch,
    } = data;

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;
    const docTitle = emoji.emojify(mdx.fields.title);
    const headTitle = metaTitle ? metaTitle : emoji.clean(docTitle);
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Layout {...this.props}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Seo frontmatter={mdx.frontmatter} url={this.props.location.href} title={headTitle} />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <PageTitle>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TitleWrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Title>{docTitle}</Title>
            {docsLocation && ((editable && mdx.frontmatter.editable !== false) || mdx.frontmatter.editable === true) ? (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <EditOnRepo
                location={docsLocation}
                branch={gitBranch.name}
                path={mdx.parent.relativePath}
                repoType={docsLocationType}
              />
            ) : (
              ''
            )}
          </TitleWrapper>
          {(config.features.showMetadata === true && mdx.frontmatter.showMetadata !== false) ||
          mdx.frontmatter.showMetadata === true ? (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div css={{ display: 'block' }}>
              {mdx.parent.fields ? (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <LastUpdated
                  time={mdx.parent.fields.gitLogLatestDate}
                  name={mdx.parent.fields.gitLogLatestAuthorName}
                  email={mdx.parent.fields.gitLogLatestAuthorEmail}
                />
              ) : (
                ''
              )}
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <ReadingTime time={mdx.timeToRead * 2} />
            </div>
          ) : (
            ''
          )}
        </PageTitle>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ContentWrapper>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </ContentWrapper>
        {(config.features.previousNext.enabled === true &&
          mdx.frontmatter.showPreviousNext !== false) ||
        mdx.frontmatter.showPreviousNext ? (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div css={{ padding: '30px 0' }}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <PreviousNext mdx={mdx} />
          </div>
        ) : (
          ''
        )}
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
        docsLocationType
        editable
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      timeToRead
      parent {
        ... on File {
          relativePath
          fields {
            gitLogLatestAuthorName
            gitLogLatestAuthorEmail
            gitLogLatestDate(fromNow: true)
          }
        }
      }
      frontmatter {
        metaTitle
        showMetadata
        editable
        showPreviousNext
        showToc
      }
    }
    gitBranch {
      name
    }
    gitCommit(latest: { eq: true }) {
      hash
      date(formatString: "YYYY-MM-DD hh:mm")
    }
  }
`;
