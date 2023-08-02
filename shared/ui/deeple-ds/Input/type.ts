import { ChangeEventHandler } from "react";

export interface InputProps {
  label?: string;
  id?: string;
  placeholder?: string;
  state?: {
    state: "default" | "disabled" | "error" | "success";
    message?: string;
  };
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
