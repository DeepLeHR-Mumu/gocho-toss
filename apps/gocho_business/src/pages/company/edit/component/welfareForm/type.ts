import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";

interface SetValueDef {
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

export interface WelfareFormProps {
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
  setValue: UseFormSetValue<SetValueDef>;
}
