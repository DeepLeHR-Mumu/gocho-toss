import { ReactNode, InputHTMLAttributes } from "react";

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "type"> {
  border?: "grayLine";
  prefix?: ReactNode;
  suffix?: ReactNode;
  color?: "gray";
}
