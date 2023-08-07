export interface AuthInfoModalProps {
  managerId: number;
  accept?: (id: number) => void;
  reject?: (id: number, reason: string | null) => void;
  close?: () => void;
}
