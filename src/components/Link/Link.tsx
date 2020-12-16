import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

export const Link = ({
  to,
  ...props
}: any) =>
  isAbsoluteUrl(to) ? (
    
    <a
      href={to}
      {...props}
      target={props.target ? props.target : '_blank'}
      rel={props.rel ? props.rel : 'noopener noreferrer'}
    >
      {props.children}
    </a>
  ) : (
    
    <GatsbyLink to={to} {...props} />
  );
