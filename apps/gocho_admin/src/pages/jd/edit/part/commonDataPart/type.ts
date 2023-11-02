import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface CommonDataPartProps {
  jobData: {
    id: number;
    title: string;
    apply: {
      startTime: number | string;
      endTime: number | string;
      cut: boolean;
      etc: string[];
      process: string[];
      route: {
        isDirect: boolean;
        email: string | null;
        link: string | null;
      };
    };
    company: {
      id: number;
      name: string;
    };
  };
  jobForm: UseFormReturn<JobFormValues>;
}
