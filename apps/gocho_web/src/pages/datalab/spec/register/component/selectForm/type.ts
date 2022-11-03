import { Dispatch, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface SelectFormProps {
  value: string | undefined;
  selectArr: string[] | undefined;
  index: number;
  desc: string;
  registerObj: UseFormRegisterReturn;
  showActiveObj: {
    active: string | null;
    setActive: Dispatch<SetStateAction<string | null>>;
    setIsShowSelectForm: Dispatch<SetStateAction<boolean>>;
  };
}
