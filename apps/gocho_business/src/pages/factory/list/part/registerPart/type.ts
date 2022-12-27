import { Dispatch, SetStateAction } from "react";

export interface RegisterPartProps {
  isEditing: false | number;
  setIsEditing: Dispatch<SetStateAction<number | false>>;
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
