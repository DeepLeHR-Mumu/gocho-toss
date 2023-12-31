import { UseFormReturn } from "react-hook-form";
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
  jobForm: UseFormReturn<JobFormValues>;
}
