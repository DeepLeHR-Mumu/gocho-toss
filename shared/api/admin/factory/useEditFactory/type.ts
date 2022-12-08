import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
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

export interface EditFactoryDef {
  ({
    id,
    name,
    address,
    male_number,
    female_number,
    product,
    bus,
    dormitory,
  }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseEditFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
