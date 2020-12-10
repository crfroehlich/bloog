import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const Link = ({
  to,
  ...props
}: any) =>
  isAbsoluteUrl(to) ? (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <a
      href={to}
      {...props}
      target={props.target ? props.target : '_blank'}
      rel={props.rel ? props.rel : 'noopener noreferrer'}
    >
      {props.children}
    </a>
  ) : (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <GatsbyLink to={to} {...props} />
  );

export default Link;
