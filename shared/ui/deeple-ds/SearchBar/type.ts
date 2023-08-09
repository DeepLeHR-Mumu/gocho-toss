import { ChangeEventHandler, ReactNode } from "react";

export interface SearchBarProps {
  border?: "grayLine";
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
