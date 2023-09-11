import { ReactNode } from "react";

export interface InputWrapperProps {
  children?: ReactNode;
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  state?: {
    state: "default" | "disabled" | "error" | "success";
    message?: string;
  };
  underline?: boolean;
}
