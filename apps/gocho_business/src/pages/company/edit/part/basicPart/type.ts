import { UseFormReturn } from "react-hook-form";
import { PostSubmitValues } from "../../type";

export interface BasicPartProps {
  companyForm: UseFormReturn<PostSubmitValues>;
  userInfoData: {
    companyId: number;
  };
}
