export interface FactoryRegisterFormValues {
  factory_name: string;
  product: string;
  address: string;
  male_number: number;
  female_number: number;
  bus_bool: boolean;
  bus_etc: string | null;
  dormitory_bool: boolean;
  dormitory_etc: string | null;
}

export interface AuthFactoryAddModalProps {
  defaultFactory: FactoryRegisterFormValues | null;
  add: (factory: FactoryRegisterFormValues) => void;
  modify: (factory: FactoryRegisterFormValues) => void;
  cancel: () => void;
}
