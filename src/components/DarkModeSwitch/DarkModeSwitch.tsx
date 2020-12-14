
import React from 'react';
import { Sun as DayImage, Moon as NightImage } from 'react-feather';
// @ts-expect-error ts-migrate(2305) FIXME: Module '".."' has no exported member 'ButtonIcon'.
import { ButtonIcon } from '..';

type Props = {
    isDarkThemeActive: boolean;
    toggleActiveTheme: (...args: any[]) => any;
    background?: string;
    hoverFill?: string;
    hoverStroke?: string;
    fill?: string;
    stroke?: string;
};

export const DarkModeSwitch = ({ isDarkThemeActive, toggleActiveTheme, ...props }: Props) => {
  const img = isDarkThemeActive ? NightImage : DayImage;
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <ButtonIcon icon={img} onClick={toggleActiveTheme} title={'Switch theme'} {...props} />;
};
