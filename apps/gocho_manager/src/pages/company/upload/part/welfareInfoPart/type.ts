import { UseFormRegister } from "react-hook-form";
import { CompanyFormValues } from "../../../type";

export type welfareArrDef = {
  title: string;
  data:
    | "welfare.money"
    | "welfare.health"
    | "welfare.life"
    | "welfare.holiday"
    | "welfare.facility"
    | "welfare.vacation"
    | "welfare.growth"
    | "welfare.etc";
}[];

export interface WelfareInfoPartProps {
  register: UseFormRegister<CompanyFormValues>;
}
