import styled from '@emotion/styled';
import { IComponentTheme } from '..';
import { shadowAround } from '../../styles/styles';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: ${(props: IComponentTheme) => props.theme?.transitions?.hover};
`;

export default ({ ...props }) => {
  
  return <Card css={shadowAround} {...props} />;
};
