import * as React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../styles/styles' was resolved to '/hom... Remove this comment to see the full error message
import { anchor } from '../../styles/styles';
import { useTheme } from '@emotion/react';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'Link'.
import { Link } from '..';

// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'link' implicitly has an 'any' typ... Remove this comment to see the full error message
export const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      
      <Link to={props.href} css={anchor(useTheme())}>
        {link}
      </Link>
    );
  } else {
    return null;
  }
};
