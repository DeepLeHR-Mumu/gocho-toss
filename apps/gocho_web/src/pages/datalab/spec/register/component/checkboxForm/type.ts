import { UseFormRegisterReturn } from "react-hook-form";
import { ChangeEvent } from "react";

export interface selectObjDef {
  [title: string]: number;
}

export interface CheckboxFormProps {
  itemArr: string[];
  backgroundStyle?: "blue01" | "blue02";
  maxCount: number;
  moreActive?: boolean;
  registerObj: UseFormRegisterReturn;
}

export interface handleToggleDef {
  (onChangeEvent: ChangeEvent<HTMLInputElement>, index: number): void;
}
