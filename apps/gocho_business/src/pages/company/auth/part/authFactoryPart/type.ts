import { UseFormReturn } from "react-hook-form";
import { CompanyAuthFormValues } from "../applyAuthPart/type";

export interface Factory {
  name: string;
  address: string;
  maleNumber: number;
  femaleNumber: number;
  product: string;
  bus: {
    exists: boolean;
    desc: string;
  };
  dormitory: {
    exists: boolean;
    desc: string;
  };
}

export interface AuthFactoryPartProps {
  companyAuthForm: UseFormReturn<CompanyAuthFormValues>;
  //   companyData: {
  //     factory: {
  //       id: number;
  //       name: string;
  //       address: string;
  //       maleNumber: number;
  //       femaleNumber: number;
  //       product: string;
  //       bus: {
  //         exists: boolean;
  //         desc: string | null;
  //       };
  //       dormitory: {
  //         exists: boolean;
  //         desc: string | null;
  //       };
  //     }[];
  //   };
}
