import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  factoryId: number;
  data: {
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
  };
}

export interface EditFactoryDef {
  ({ ...data }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseEditFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
