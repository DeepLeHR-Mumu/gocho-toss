import { ReactNode } from "react";

export interface ModalWithTitleProps {
  title?: string;
  width?: number;
  children?: ReactNode;
  closeHandler?: () => void;
}
