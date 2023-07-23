import { colors } from 'constants/colors';
import styled from 'styled-components/native';
import { ButtonProps, ButtonVariant } from './Button.types';

const variantColor: { [key in ButtonVariant]: string } = {
  primary: colors.blue,
  secondary: colors.grey1,
  primary2: colors.blue2,
};

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background: ${({ variant }) => variantColor[variant]};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const StyledIconContainer = styled.View`
  padding-top: 10px;
  padding-left: 8px;
  align-items: center;
`;
