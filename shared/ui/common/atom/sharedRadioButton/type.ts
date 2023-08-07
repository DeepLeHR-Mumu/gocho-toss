import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface SharedRadioButtonProps {
  value: string;
  id: string;
  isDisabled?: boolean;
  registerObj: UseFormRegisterReturn;
  children: React.ReactNode;
  onClick?: () => void;
}
