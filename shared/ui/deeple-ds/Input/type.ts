import { InputHTMLAttributes } from "react";

import { InputWrapperProps } from "../InputWrapper/type";

export type InputProps = Omit<InputWrapperProps, "children"> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix" | "disabled" | "children">;
