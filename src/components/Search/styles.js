import { css } from '@emotion/react';

const defaults = {
  leftRight: '24px',
};

export const paddingLeftRight = css`
  padding-left: ${defaults.leftRight};
  padding-right: ${defaults.leftRight};
`;

export const marginLeftRight = css`
  margin-left: ${defaults.leftRight};
  margin-right: ${defaults.leftRight};
`;
