export interface BlockUserModalProps {
  companyId?: number;
  userId: number;
  cancelHandler?: () => void;
  confirmHandler?: () => void;
}
