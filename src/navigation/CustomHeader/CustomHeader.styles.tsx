import styled from 'styled-components/native';
import { colors } from 'constants/colors';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-itmes: center;
`;

export const ContainerView = styled.View`
  background-color: white;
  padding: 20px 15px 8px 15px;
  border-bottom-color: ${colors.grey3};
  border-bottom-width: 1px;
  height: auto;
`;

export const ActionsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const FooterView = styled.View`
  display: flex;
  justify-content: flex-start;
`;
