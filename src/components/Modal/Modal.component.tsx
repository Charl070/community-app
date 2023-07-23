import React from 'react';
import {
  CenteredModal,
  ModalView,
  ModalButtonsContainer,
  ModalContentContainer,
  ModalButtonStyle,
} from './Modal.styles';
import { ModalProps } from './Modal.types';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';
import { Modal } from 'react-native';

const DialogModal: React.FC<ModalProps> = ({ ...props }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isModalVisible}
      onRequestClose={() => {
        props.onCloseModal(!props.isModalVisible);
      }}>
      <CenteredModal>
        <ModalView>
          <ModalContentContainer>
            <>
              <Typography weight="bold" variant="heading2">
                {props.modalTitle}
              </Typography>
              {props.children}
            </>
          </ModalContentContainer>

          <ModalButtonsContainer>
            <Button
              onPress={() => props.onCloseModal(!props.isModalVisible)}
              title={props.cancelButtonName}
              variant="primary2"
              buttonTextColor="blue"
            />
            <ModalButtonStyle>
              <Button
                onPress={() => props.onSuccessModal(!props.isModalVisible)}
                title={props.successButtonName}
                variant="primary"
                buttonTextColor="white"
              />
            </ModalButtonStyle>
          </ModalButtonsContainer>
        </ModalView>
      </CenteredModal>
    </Modal>
  );
};

export { DialogModal };
