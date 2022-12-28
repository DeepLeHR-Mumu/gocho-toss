import { UseFormReturn } from "react-hook-form";
import { PostSubmitValues } from "../../type";

export interface PostWelfaleSubmitValues {
  welfare: {
    money: string[] | null;
    health: string[] | null;
    life: string[] | null;
    holiday: string[] | null;
    facility: string[] | null;
    vacation: string[] | null;
    growth: string[] | null;
    etc: string[] | null;
  };
}

export interface WelfarePartProps {
  companyForm: UseFormReturn<PostSubmitValues>;
  userInfoData: {
    id: number;
    companyId: number;
    companyName: string;
    companyLogo: string;
    email: string;
    name: string;
    department: string;
    iat: number;
    exp: number;
  };
}
