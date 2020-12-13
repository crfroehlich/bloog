import { anchor } from '../../styles/styles';
import { useTheme } from '@emotion/react';
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

export default AnchorTag;
