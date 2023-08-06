import { ChangeEventHandler } from "react";

export interface CheckboxProps {
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
