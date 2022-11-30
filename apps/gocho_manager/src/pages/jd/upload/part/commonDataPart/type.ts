import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { JobFormValues } from "@pages/jd/upload/type";
import { Dispatch, SetStateAction } from "react";

export interface CommonDataPartProps {
  companyDataArr: {
    id: number;
    name: string;
  }[];
  register: UseFormRegister<JobFormValues>;
  watch: UseFormWatch<JobFormValues>;
  setValue: UseFormSetValue<JobFormValues>;
  setSearchWord: Dispatch<SetStateAction<string>>;
}
