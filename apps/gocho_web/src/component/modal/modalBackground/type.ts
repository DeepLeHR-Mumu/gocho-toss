import { ReactNode } from "react";

export interface modalComponentProps {
  children: ReactNode;
  closeModal(): void;
}
