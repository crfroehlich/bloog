
import { Sun as DayImage, Moon as NightImage } from 'react-feather';
import { ButtonIcon, IComponentTheme } from '..';

export const DarkModeSwitch = ({ isDarkThemeActive, toggleActiveTheme, ...props }: IComponentTheme) => {
  const img = isDarkThemeActive ? NightImage : DayImage;
  
  return <ButtonIcon icon={img} onClick={toggleActiveTheme} title={'Switch theme'} {...props} />;
};

export default DarkModeSwitch;
