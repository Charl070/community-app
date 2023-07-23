import styled from 'styled-components/native';
import { colors } from 'constants/colors';

export const TouchableCard = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${colors.grey3};
  border-radius: 6px;
  padding-horizontal: 18px;
  flex: 1;
`;

export const TouchableButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  justify-content: flex-end;
`;

export const FavouriteView = styled.View`
  height: 40px;
  border-width: 1px;
  justify-content: flex-end;
`;

export const NameView = styled.View`
  justify-content: space-evenly;
  align-items: center;
  border-bottom-color: ${colors.grey3};
  border-bottom-width: 1px;
  padding-bottom: 8px;
`;

export const SizeView = styled.View`
  height: 40px;
  justify-content: center;
`;
