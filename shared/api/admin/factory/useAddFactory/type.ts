import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { AdminResponseDef } from "shared-type/api/responseType";

import { FactoryRequestObjDef } from "../type";

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
  }: FactoryRequestObjDef): Promise<AdminResponseDef>;
}

export interface useAddFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, FactoryRequestObjDef>;
}
