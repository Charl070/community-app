import styled from 'styled-components/native';

export const StyledNewsItemContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 12px 0px 12px;
  flex-direction: row;
`;
export const StyledNewsContent = styled.View`
  width: 90%;
  padding: 0 14px;
  border-bottom-color: #d8d8d8;
  border-bottom-width: 1px;
  padding-bottom: 16px;
`;
export const StyledDateContainer = styled.View`
  width: 10%;
`;
export const StyledDate = styled.View`
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

export const ImagesContainer = styled.View`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`;

export const BigImage = styled.TouchableOpacity`
  width: 35%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 7px;
  border-radius: 4px;
  border: 2px solid #bac0ca;
  margin-right: 10px;
`;
export const SmallImage = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border: 2px solid #bac0ca;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 5px;
`;
