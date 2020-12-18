import styled from '@emotion/styled';
import { onMobile } from '../../styles/responsive';
import { getTheme } from '../../theme';
import { Empty } from '../Empty';

const { header } = getTheme();

export const Navigation = styled(({ className, links }: any) => {
  return (
    <nav css={{ display: 'flex' }}>
      <ul className={className}>
        {links ? (
          links.map((link: any, key: any) => {
            const openRule = link.external ? '_blank' : '_self';
            if (link.link !== '' && link.text !== '') {
              return (
                <li key={`${key}_${link}`}>
                  <a
                    href={link.link}
                    target={openRule}
                    rel="noopener"
                    dangerouslySetInnerHTML={{ __html: link.text }}
                  />
                </li>
              );
            }
          })
        ) : (
          <Empty />
        )}
      </ul>
    </nav>
  );
})`
  display: flex;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  float: left;
  ${onMobile} {
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      height: 37px;

      a {
        font-size: 14px;
        padding: 10px 15px;
      }
    }
  }
  li {
    list-style-type: none;
    display: flex;
    & > a:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: ${header.fond!.hover};
      visibility: hidden;
      border-radius: 4px;
      transform: scaleX(0);
      transition: 0.25s linear;
    }
    & > a:focus:before,
    & > a:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
    a {
      font-family: 'Roboto';
      position: relative;
      color: ${header.fond!.base};
      font-size: 16px;
      font-weight: 500;
      line-height: 1em;
      opacity: 1;
      padding: 10px 15px;
      &:hover {
        color: ${header.fond!.hover};
      }
    }
  }
`;
