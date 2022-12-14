import { AxiosError } from "axios";
import { AdminResponseDef } from "shared-type/api/responseType";
import { UseMutationResult } from "@tanstack/react-query";
import { FactoryRequestObjDef } from "../type";

export interface RequestObjDef {
  factoryId: number;
  data: FactoryRequestObjDef;
}

export interface EditFactoryDef {
  ({ ...data }: RequestObjDef): Promise<AdminResponseDef>;
}

export interface UseEditFactoryProps {
  (): UseMutationResult<AdminResponseDef, AxiosError, RequestObjDef>;
}
