import { Empty, Link } from '..';
import { anchor } from '../../styles/styles';

export const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      <Link to={props.href} css={anchor()}>
        {link}
      </Link>
    );
  }
  return <Empty />;
};
