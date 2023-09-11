import { FactoryObjDef } from "@/apis/jd/type/jdDetail";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FactoryInfoModalProps
  extends Pick<FactoryObjDef, "name" | "product" | "male_number" | "female_number" | "bus" | "dormitory"> {
  close?: () => void;
}
