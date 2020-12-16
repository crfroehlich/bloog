import { css } from '@emotion/react';
import { onMobile, onTablet } from './responsive';
import { getTheme } from '../theme';

const { colors, transitions } = getTheme();
const tbl = getTheme().table;

export const show = css`
  display: block;
`;

export const hidden = css`
  display: none;
`;

export const reset = css`
  margin: 0;
  display: block;
  padding: 0;
`;

export const scrollY = css`
  overflow-x: hidden;
  overflow-y: overlay;
`;

export const flex = css`
  display: flex;
  align-content: stretch;
  justify-content: space-between;
`;

export const transparent = css`
  background: transparent;
  border: none;
  outline: none;
`;

export const shadowAround = () => css`
  box-shadow: 0 0 6px 0 ${colors.shadow};
`;

export const blockquote = () => css`
  font-size: 1.4em;
  width: 100%;
  margin: 30px auto;
  font-style: italic;
  color: ${colors.font};
  padding: 14px 25px 14px 75px;
  border-left: 8px solid ${colors.primary};
  line-height: 1.6;
  position: relative;
  background: ${colors.border};

  &::before {
    content: '\\201C';
    color: ${colors.primary};
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -13px;
  }

  &::after {
    content: '';
  }
  p {
    font-size: 16px;
  }
`;

export const pre = css`
  background-color: transparent;
  border: 0 !important;
  font-size: 14px;
  display: grid;
  pre.prism-code {
    margin: 0;
    padding: 16px;
    overflow: auto;
    border-radius: 4px;
  }
`;

export const anchor = () => css`
  transition: color 0.15s;
  color: ${colors.primary};
  &:hover {
    color: ${colors.primaryDark};
  }
`;

export const table = () => css`
  padding: 0;
  border: 1px solid ${tbl.border};
  border-radius: 4px;
  border-spacing: 0;
  overflow-wrap: normal;
  ${onMobile} {
    white-space: pre;
  }
  thead {
    background-color: ${tbl.header?.background};
    color: ${tbl.header.font};
    tr {
      font-weight: bold;
      text-align: left;
      th:first-of-type {
        border-top-left-radius: 4px;
      }
      th:last-child {
        border-top-right-radius: 4px;
      }
      th {
        margin: 0;
        padding: 6px 13px;
      }
    }
  }

  tbody tr {
    transition: ${transitions.hover};
    border-top: 1px solid ${colors.primary};
    margin: 0;
    padding: 0;

    &:nth-of-type(even) {
      background-color: ${tbl.evenRow};
    }

    &:nth-of-type(odd) {
      background-color: ${tbl.oddRow};
    }

    &:last-child {
      td:first-of-type {
        border-bottom-left-radius: 4px;
      }
      td:last-child {
        border-bottom-right-radius: 4px;
      }
    }

    td {
      margin: 0;
      padding: 6px 13px;
    }
  }

  tbody tr:hover {
    background-color: ${tbl.rowHover};
  }

  th :first-of-type,
  td :first-of-type {
    margin-top: 0;
  }

  th :last-child,
  td :last-child {
    margin-bottom: 0;
  }
`;

export const scrollbar = css`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

export const skipParagraph = css`
  &:first-of-type {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const list = css`
  li {
    p {
      margin: 8px 0;
    }
    p:first-of-type {
      margin-top: 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
    p:nth-of-type(n + 2):last-child {
      margin-bottom: 10px;
    }
  }
`;

export const hiddenMobile = css`
${onMobile} {
  display: none;
}
`;

export const hiddenTablet = css`
${onTablet} {
  display: none;
}
`;

export const visibleMobile = css`
display: none;
${onMobile} {
  display: flex;
}
`;

export const visibleTablet = css`
display: none;
${onTablet} {
  display: flex;
}
`;