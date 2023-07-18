import { Factory } from "../../part/applyAuthPart/authFactoryPart/type";

export interface FactoryRegisterFormValues {
  name: string;
  address: string;
  maleNumber: number;
  femaleNumber: number;
  product: string;
  bus: { exists: "true" | "false"; desc: string };
  dormitory: { exists: "true" | "false"; desc: string };
}

export interface AuthFactoryAddModalProps {
  defaultFactory: Factory | null;
  add: (factory: FactoryRegisterFormValues) => void;
  modify: (factory: FactoryRegisterFormValues) => void;
  cancel: () => void;
}
