import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const CenteredModal = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
,`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: #fff;
  border-color: #BAC0CA;
  border-width: ${StyleSheet.hairlineWidth};
  border-radius: 6px;
  padding: 16px;
  width: 75%;
  elevation: 20;
,`;

export const ModalContentContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
export const ModalButtonsContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const ModalButtonStyle = styled.View`
  margin-left: 16px;
`;
