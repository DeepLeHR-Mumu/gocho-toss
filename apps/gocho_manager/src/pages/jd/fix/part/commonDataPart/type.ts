import { UseFormReturn } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { JobFormValues } from "@pages/jd/type";

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
    companyId: number;
    companyName: string;
  };
  companyDataArr: {
    id: number;
    name: string;
  }[];
  jobForm: UseFormReturn<JobFormValues>;
  setSearchWord: Dispatch<SetStateAction<string>>;
}
