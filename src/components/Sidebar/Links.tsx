import { ExternalLink } from 'react-feather';
import React from 'react';
import styled from '@emotion/styled';
import { flex, transparent } from '../../styles';
import { getTheme } from '../../theme';

const { navigationSidebar } = getTheme();

const Link = styled(({
  className,
  to,
  text
}: any) => {
  try {
    if(to?.length > 0) {
      return (
        <li className={className}>
          <a href={to} target={'_blank'} css={flex} rel={'noreferrer'}>
            {text}
            <button css={transparent}>
              <ExternalLink size={14} />
            </button>
          </a>
        </li>
      );
    } else {
      return (
        <li className={className}>
          {text}
        </li>
      );
    }
  } catch(e) {
    console.log(e)
    console.log(to);
    throw e; 
  }
})`
  list-style: none;
  a {
    font-size: 14px;
    color: ${navigationSidebar.fond?.base};
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem 16px;
    button svg * {
      color: ${navigationSidebar.fond?.base};
    }
    &:hover {
      color: ${navigationSidebar.fond?.hover};
      button svg * {
        color: ${navigationSidebar.fond?.hover};
      }
    }
    button {
      padding: 0 25px 0 10px;
      cursor: pointer;
    }
  }
`;

export const Links = ({
  links
}: any) => (
  
  <ul>
    {links.map((link: any, key: any) => {
      if (link.link !== '' && link.text !== '') {
        
        return <Link key={`${key}_${link}`} to={link.link} text={link.text} />;
      }
    })}
  </ul>
);
