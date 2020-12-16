
import { Sun as DayImage, Moon as NightImage } from 'react-feather';
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
  return <ButtonIcon icon={img} onClick={toggleActiveTheme} title={'Switch theme'} {...props} />;
};
