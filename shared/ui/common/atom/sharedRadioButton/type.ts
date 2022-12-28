import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface SharedRadioButtonProps {
  value: string;
  id: string;
  registerObj: UseFormRegisterReturn;
  children: React.ReactNode;
}
