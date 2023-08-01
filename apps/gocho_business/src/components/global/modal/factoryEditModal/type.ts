export interface FactoryEditFormValues {
  id?: number;
  factory_name: string;
  address: string;
  male_number: number;
  female_number: number;
  product: string;
  bus_bool: "true" | "false";
  bus_etc: string;
  dormitory_bool: "true" | "false";
  dormitory_etc: string;
}
