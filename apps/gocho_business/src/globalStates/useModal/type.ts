import { UseFormReturn } from "react-hook-form";

import { JdFormValues } from "@/pages/jd/upload/type";
import { CompanyFormValues } from "@/pages/company/edit/type";

export interface factoryObjDef {
  factory: {
    id: number;
    factory_name: string;
    product: string;
    address: string;
    male_number: number;
    female_number: number;
    bus_bool: boolean;
    bus_etc: string | null;
    dormitory_bool: boolean;
    dormitory_etc: string | null;
  };
  companyForm: UseFormReturn<CompanyFormValues>;
}

export interface certiModalDef {
  jdForm: UseFormReturn<JdFormValues>;
}

export type contentModalDef = factoryObjDef | certiModalDef;

export type modalNameDef =
  | "loginModal"
  | "factoryAddModal"
  | "usageTermModal"
  | "privacyTermModal"
  | "companyAuthModal"
  | null;

export type contentModalNameDef = "factoryEditModal" | "certiAddModal";

export interface setCurrentModalDef {
  (modal: contentModalNameDef, contentObj: contentModalDef): void;
  (modal: modalNameDef, contentObj?: never): void;
}
export interface SetModalDef {
  (modal: contentModalNameDef | modalNameDef, contentObj?: never | contentModalDef): void;
}

export interface UseModalProps {
  modal: modalNameDef | contentModalNameDef;
  contentObj?: contentModalDef | never;
  setModal: SetModalDef;
}
