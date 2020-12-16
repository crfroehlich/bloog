
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
  return <ButtonIcon icon={NightImage} onClick={toggleActiveTheme} title={'Switch theme'} {...props} />;
};
