import { TextareaHTMLAttributes } from "react";
import { InputWrapperProps } from "../InputWrapper/type";

type TextareaType = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "prefix" | "suffix" | "disabled" | "children"> &
  Omit<InputWrapperProps, "children">;

export interface TextareaProps extends TextareaType {
  height?: number;
}
