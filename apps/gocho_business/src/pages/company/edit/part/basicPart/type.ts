import { UseFormReturn } from "react-hook-form";
import { PostSubmitValues } from "../../type";

export interface BasicPartProps {
  companyForm: UseFormReturn<PostSubmitValues>;
  userInfoData: {
    companyId: number;
  };
}

export interface PostBasicSubmitValues {
  employee_number: number;
  intro: string;
  address: string;
  nozo: {
    exists: boolean;
    desc: string;
  };
  pay_avg: number;
  pay_start: number;
  pay_desc: string;
}
