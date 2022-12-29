import { Dispatch, SetStateAction } from "react";

export interface RegisterPartProps {
  editingIndex: null | number;
  setEditingIndex: Dispatch<SetStateAction<number | null>>;
}

export interface FactoryRegisterDef {
  factory_name: string;
  address: string;
  male_number: number;
  female_number: number;
  product: string;
  bus_bool: "true" | "false";
  bus_etc?: string;
  dormitory_bool: "true" | "false";
  dormitory_etc?: string;
}

export interface FactoryEditDef extends FactoryRegisterDef {
  id: number;
}
