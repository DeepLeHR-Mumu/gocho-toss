export interface ModalProps {
  setModal: (value: React.SetStateAction<boolean>) => void;
  cancelHandler?: () => void;
  confirmHandler?: () => void;
}
