import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "@pages/jd/type";
import { Dispatch, SetStateAction } from "react";

export interface CommonDataPartProps {
  companyDataArr: {
    id: number;
    name: string;
  }[];
  jobForm: UseFormReturn<JobFormValues>;
  setSearchWord: Dispatch<SetStateAction<string>>;
}
