import { FactoryObjDef } from "@/apis/jd/type/jdDetail";

export interface FactoryInfoModalProps
  extends Pick<FactoryObjDef, "name" | "product" | "male_number" | "female_number" | "bus" | "dormitory"> {
  close?: () => void;
}
