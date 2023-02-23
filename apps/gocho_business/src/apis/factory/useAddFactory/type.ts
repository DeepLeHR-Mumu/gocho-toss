import { AxiosResponse } from "axios";

export interface RequestObjDef {
  factory_name: string;
  address: string;
  male_number: number;
  female_number: number;
  product: string;
  bus_bool: boolean;
  bus_etc: string | null;
  dormitory_bool: boolean;
  dormitory_etc: string | null;
  id?: number;
}

export interface PostFactoryDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}
