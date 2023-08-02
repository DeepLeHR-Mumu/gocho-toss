import { ReactNode } from "react";

export interface ConfirmModalProps {
  title?: string;
  description?: ReactNode;
  cancel?: { name: string; onClick: () => void };
  confirm?: { name: string; onClick: () => void };
}
