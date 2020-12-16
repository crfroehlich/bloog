import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';
import { Empty } from '../Empty';

export const Link = ({
  to,
  ...props
}) => {
  try {
    if(isAbsoluteUrl(to)) {
      return <a
        href={to}
        {...props}
        target={props.target ? props.target : '_blank'}
        rel={props.rel ? props.rel : 'noopener noreferrer'}
      >
        {props.children}
      </a>
    }
    if(!to || to.length == 0) {
      return <Empty />;
    }
    return <GatsbyLink to={to} {...props} />
  } catch(e) {
    console.log(to);
    console.log(e);
    throw e;
  }
}
