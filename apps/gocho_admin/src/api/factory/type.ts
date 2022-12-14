export interface FactoryResponseObjDef {
  id: number;
  name: string;
  address: string;
  male_number: number;
  female_number: number;
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

export interface FactoryRequestObjDef {
  company_id: number;
  factory_name: string;
  address: string;
  male_number: number;
  female_number: number;
  product: string;
  bus_bool: boolean;
  bus_etc: string;
  dormitory_bool: boolean;
  dormitory_etc: string;
}
