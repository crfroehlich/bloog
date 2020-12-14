import * as React from 'react';
import { anchor } from '../../styles/styles';
import { useTheme } from '@emotion/react';
import { Link } from '..';

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
