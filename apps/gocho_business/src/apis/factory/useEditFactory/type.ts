import { AxiosResponse } from "axios";

export interface RequestObjDef {
  id: number;
  factory_name: string;
  address: string;
  male_number: number;
  female_number: number;
  product: string;
  bus_bool: boolean;
  bus_etc: string | null;
  dormitory_bool: boolean;
  dormitory_etc: string | null;
}

export interface PostFactoryDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
