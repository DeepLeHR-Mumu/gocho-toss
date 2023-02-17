import { UseFormReturn } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { JobFormValues } from "../../type";

export interface CommonDataPartProps {
  jobData: {
    id: number;
    startTime: number | string;
    endTime: number | string;
    processArr: string[];
    applyRouteArr: string[];
    applyUrl: string;
    etcArr: string[];
    title: string;
    cut: boolean;
    company: {
      id: number;
      name: string;
    };
  };
  companyDataArr: {
    id: number;
    name: string;
  }[];
  jobForm: UseFormReturn<JobFormValues>;
  setSearchWord: Dispatch<SetStateAction<string>>;
}
