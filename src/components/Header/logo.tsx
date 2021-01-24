import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from '../Link/Link';
import { onMobile, onTablet } from '../../styles/responsive';
import { getTheme } from '../../theme';

const { layout, colors } = getTheme();

const logoStyle = () => css`
  padding: 0 0;
  display: flex;
  align-items: center;
  ${onMobile} {
    min-height: 40px;
  }
  img {
    width: 55px;
    margin-right: 16px;
    display: inline-block;
    ${onTablet} {
      width: 50px;
    }
    ${onMobile} {
      margin-right: 8px;
      width: 45px;
    }
  }

  span {
    height: auto;
    font-size: 26px;
    line-height: 1.5;
    color: ${colors.white};
    ${onTablet} {
      font-size: 21px;
    }
    ${onMobile} {
      font-size: 19px;
      flex: initial;
      padding: 0 15px 0 0;
    }
    &:hover {
      text-decoration: none;
      opacity: 0.8;
      color: ${colors.red};
    }
  }
`;

const LogoWrapper = styled.div`
  margin-left: ${layout.leftMargin};
  ${onMobile} {
    margin-left: 10px;
  }
`;

export const Logo = styled(({ className, link, img, title }: any) => {
  return (
    <div className={className}>
      <LogoWrapper>
        <Link to={link} css={logoStyle()}>
          <img css={{ display: 'inline-block' }} src={img} alt={'logo'} loading={'lazy'} />
          <span css={{ display: 'inline-block' }}>{title}</span>
        </Link>
      </LogoWrapper>
    </div>
  );
})`
  min-width: ${layout.leftWidth};
  display: flex;
  align-items: center;
  border-right: none;
  ${onMobile} {
    border-right: none;
    min-width: auto;
    padding-right: 0;
  }
`;
