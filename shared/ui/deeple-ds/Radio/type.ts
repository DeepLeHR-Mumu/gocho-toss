import { ChangeEventHandler } from "react";

export interface RadioProps {
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
