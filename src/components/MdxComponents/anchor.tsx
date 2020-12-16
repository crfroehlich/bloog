import { anchor } from '../../styles/styles';
import { Link, Empty } from '..';

export const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      <Link to={props.href} css={anchor()}>
        {link}
      </Link>
    );
  } else {
    return <Empty />;
  }
};
