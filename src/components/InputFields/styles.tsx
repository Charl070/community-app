import styled from 'styled-components/native';
import { colors } from 'constants/colors';

export const StyledView = styled.View`
  border-color: ${colors.grey3};
  border-radius: 4px;
  border-width: 1px;
  padding-vertical: 8px;
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  font-family: DMSans-Medium;
  padding-vertical: 2px;
  margin-left: 2px;
`;
