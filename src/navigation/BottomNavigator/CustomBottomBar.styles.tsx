import { colors } from 'constants/colors';
import styled from 'styled-components/native';

import { BottomTabButtonProps } from './CustomBottomBar.types';

export const StyledView = styled.View`
  background-color: white;
  flex-direction: row;
  height: 86px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text<BottomTabButtonProps>`
  color: ${({ isFocused }) => (isFocused ? colors.blue : colors.grey3)};
  font-family: 'DMSans-Medium';
  font-size: 12px;
`;

export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))``;

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  flex-grow: 1;
`;
