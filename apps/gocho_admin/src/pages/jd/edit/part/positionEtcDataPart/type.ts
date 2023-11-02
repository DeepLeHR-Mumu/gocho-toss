import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "../../type";

export interface PositionBoxProps {
  jobForm: UseFormReturn<JobFormValues>;
  jobData: {
    qualification: {
      preferredCertification: string[] | null;
    };
  };
}
