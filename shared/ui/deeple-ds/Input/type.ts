import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix" | "disabled"> {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  state?: {
    state: "default" | "disabled" | "error" | "success";
    message?: string;
  };
}
