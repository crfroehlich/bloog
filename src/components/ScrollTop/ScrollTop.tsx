import styled from '@emotion/styled';
import { onMobile, onTablet } from '../../styles/responsive';
import { ChevronUp } from 'react-feather';
import { getTheme } from '../../theme';

const { scrollTop, transitions } = getTheme();
const scrollToTop = () => window.scrollTo(0, 0);

export const ScrollTop = styled(({
  className
}: any) => {
  return (
    <div className={className} onClick={scrollToTop} role={'button'} tabIndex={0}>
      <ChevronUp />
    </div>
  );
})`
  background-color: ${scrollTop?.background};
  width: 35px;
  height: 35px;
  position: fixed;
  border-radius: 50px;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  z-index: 10;
  transition: ${transitions.hover};
  ${onTablet} {
    background-color: ${scrollTop?.background + 'bc'};
  }
  ${onMobile} {
    bottom: 25px;
    right: 25px;
    width: 30px;
    height: 30px;
    background-color: ${scrollTop?.background + '9b'};
  }
  svg {
    width: 50%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    path {
      fill: ${scrollTop.arrow};
    }
  }
  &:hover {
    background: ${scrollTop.hover};
  }
`;
