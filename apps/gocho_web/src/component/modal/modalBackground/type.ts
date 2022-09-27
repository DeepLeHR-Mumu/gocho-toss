import { ReactNode } from "react";

export interface modalComponentProps {
  button: "home" | "close";
  children: ReactNode;
  closeModal(): void;
}
