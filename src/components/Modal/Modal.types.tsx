interface ModalProps {
  onSuccessModal(payload: unknown): void;
  onCloseModal(payload: unknown): void;
  isModalVisible: boolean;
  cancelButtonName: string;
  successButtonName: string;
  modalTitle: string;
  children: React.ReactNode;
}

export type { ModalProps };
