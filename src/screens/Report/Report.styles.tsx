import { colors } from 'constants/colors';
import styled from 'styled-components/native';
import { CardProps } from './Report.type';

export const StyledCard = styled.View<CardProps>`
  background: ${({ backGroundColor }) =>
    backGroundColor ? colors[backGroundColor] : colors.grey};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 8px 8px 8px 0;
`;

export const ContainerView = styled.View`
  width: 100%;
  padding: 16px;
`;

export const ReportCard = styled.TouchableOpacity`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom-color: ${colors.grey3};
  border-bottom-width: 1px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  display: flex;
  padding: 15px 16px;
  border-bottom-color: ${colors.grey3};
  border-bottom-width: 1px;
`;
