import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { PostSubmitValues } from "../../type";

// interface SetValueDef {
//   welfare: {
//     money: string[] | null;
//     health: string[] | null;
//     life: string[] | null;
//     holiday: string[] | null;
//     facility: string[] | null;
//     vacation: string[] | null;
//     growth: string[] | null;
//     etc: string[] | null;
//   };
// }

export interface WelfareFormProps {
  companyForm: UseFormReturn<PostSubmitValues>;
  title: string;
  desc: string;
  keyName:
    | "welfare.money"
    | "welfare.health"
    | "welfare.life"
    | "welfare.holiday"
    | "welfare.facility"
    | "welfare.vacation"
    | "welfare.growth"
    | "welfare.etc";
  registerObj: UseFormRegisterReturn;
  valueArr: string[] | null;
}
