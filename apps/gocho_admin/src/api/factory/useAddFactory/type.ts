import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
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

export interface PostFactoryDef {
  ({
    company_id,
    factory_name,
    address,
    male_number,
    female_number,
    product,
    bus_bool,
    bus_etc,
    dormitory_bool,
    dormitory_etc,
  }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useAddFactoryProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
