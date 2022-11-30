import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { CompanyFormValues } from "@pages/company/upload/type";

export interface BasicInfoPartProps {
  register: UseFormRegister<CompanyFormValues>;
  watch: UseFormWatch<CompanyFormValues>;
  setLogoPicture: Dispatch<SetStateAction<File | undefined>>;
}
