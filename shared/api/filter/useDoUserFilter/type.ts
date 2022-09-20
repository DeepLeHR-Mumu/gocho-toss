import { ResponseDef } from "shared-type/api/responseType";
import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number | undefined;
  q: {
    possibleEdu: string[];
    place: string[];
    requiredExp: string[];
    contractType: string[];
    rotation: string[];
    industry: string[];
    task: string[];
  };
}

export interface PostDoUserFilterDef {
  ({ userId, q }: RequestObjDef): Promise<ResponseDef>;
}

export interface useDoUserFilterProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
