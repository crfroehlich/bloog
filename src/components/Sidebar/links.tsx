import { ExternalLink } from 'react-feather';
import React from 'react';
import styled from '@emotion/styled';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles' was resolved to '/mnt/k/code... Remove this comment to see the full error message
import { flex, transparent } from '../../styles';

const Link = styled(({
  className,
  to,
  text
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <li className={className}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <a href={to} target={'_blank'} css={flex} rel={'noreferrer'}>
        {text}
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <button css={transparent}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <ExternalLink size={14} />
        </button>
      </a>
    </li>
  );
})`
  list-style: none;
  a {
    font-size: 14px;
    color: ${(props) => props.theme.navigationSidebar.font.base};
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem 16px;
    button svg * {
      color: ${(props) => props.theme.navigationSidebar.font.base};
    }
    &:hover {
      color: ${(props) => props.theme.navigationSidebar.font.hover};
      button svg * {
        color: ${(props) => props.theme.navigationSidebar.font.hover};
      }
    }
    button {
      padding: 0 25px 0 10px;
      cursor: pointer;
    }
  }
`;

const Links = ({
  links
}: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ul>
    {links.map((link: any, key: any) => {
      if (link.link !== '' && link.text !== '') {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Link key={`${key}_${link}`} to={link.link} text={link.text} />;
      }
    })}
  </ul>
);

export default Links;
