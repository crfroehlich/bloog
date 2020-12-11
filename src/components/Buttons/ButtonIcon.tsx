
import styled from '@emotion/styled';
import { IComponentTheme } from '..';

const ButtonIconWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  outline: none;

  background-color: ${({ background }: IComponentTheme) => background};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    svg {
      fill: ${(props: IComponentTheme) => props.hoverFill};
      stroke: ${(props: IComponentTheme) => props.hoverStroke};
    }
  }
  svg {
    transition: ${(props: IComponentTheme) => props.theme?.transitions?.hover};
    fill: ${(props: IComponentTheme) => props.fill};
    stroke: ${(props: IComponentTheme) => props.stroke};
  }
`;

export const ButtonIcon = ({ icon, ...props }: any) => {
  return (
    <ButtonIconWrapper {...props} role={'button'} tabIndex={0}>
      {/* not defining color as a workaround to use css styling instead */}
      {icon.render({ color: '' })}
    </ButtonIconWrapper>
  );
};

export default ButtonIcon;
