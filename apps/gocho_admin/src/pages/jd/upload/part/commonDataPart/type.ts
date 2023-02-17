import { UseFormReturn } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { JobFormValues } from "../../type";

export interface CommonDataPartProps {
  companyDataArr: {
    id: number;
    name: string;
  }[];
  jobForm: UseFormReturn<JobFormValues>;
  setSearchWord: Dispatch<SetStateAction<string>>;
}
