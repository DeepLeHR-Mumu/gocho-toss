import { UseFormReturn } from "react-hook-form";

import { JobFormValues } from "@/pages/jd/upload/type";

export interface factoryObjDef {
  id: number;
  name: string;
  address: string;
  maleNumber: number;
  femaleNumber: number;
  product: string;
  bus: {
    exists: boolean;
    desc: string | null;
  };
  dormitory: {
    exists: boolean;
    desc: string | null;
  };
}

export interface certiModalDef {
  jobForm: UseFormReturn<JobFormValues>;
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
