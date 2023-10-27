import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number | undefined;
  q: {
    possible_edu: string[];
    place: string[];
    required_exp: string[];
    contract_type: string[];
    rotation: string[];
    industry: string[];
    task: string[];
  };
}

export interface PostDoUserFilterDef {
  ({ userId, q }: RequestObjDef): Promise<AxiosResponse>;
}

export interface useDoUserFilterProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
