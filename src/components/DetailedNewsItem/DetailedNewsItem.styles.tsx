import { StyledTypography } from 'components/Typography/Typography.styles';
import { colors } from 'constants/colors';
import styled from 'styled-components/native';

export const ContainerView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-itmes: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 12px;
`;

export const NewsContainer = styled(ContainerView)`
  padding: 0 12px;
  width: 90%;
  flex-direction: column;
`;

export const ShortDateView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f3f3;
  color: #2ca8ff;
  border-radius: 6px;
  height: 40px;
  width: 40px;
`;

export const StyledParagraph = styled(StyledTypography)`
  margin-bottom: 8px;
`;

export const TouchableImage = styled.TouchableOpacity`
  border-width: 4px;
  border-color: ${colors.grey2};
  border-radius: 10px;
  margin-bottom: 8px;
  over-flow: hidden;
`;
export const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;
