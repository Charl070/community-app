import styled from 'styled-components/native';

export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
  },
}))``;

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  flex-grow: 1;
`;
