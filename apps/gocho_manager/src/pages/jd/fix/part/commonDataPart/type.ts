import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { JobFormValues } from "@pages/jd/upload/type";
import { Dispatch, SetStateAction } from "react";

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
  register: UseFormRegister<JobFormValues>;
  watch: UseFormWatch<JobFormValues>;
  setValue: UseFormSetValue<JobFormValues>;
  setSearchWord: Dispatch<SetStateAction<string>>;
}
