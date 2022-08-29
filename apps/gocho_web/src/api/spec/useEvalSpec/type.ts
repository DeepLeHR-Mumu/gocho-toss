import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ResponseDef } from "@type/api/responseType";

export interface RequestObjDef {
  specId: number;
  specData: {
    score: number;
    weakness: string[];
    strength: string[];
    feedback?: string;
  };
}

export interface PostEvalSpecResponse extends ResponseDef {
  data: unknown;
}

export interface PostEvalSpecDef {
  (requestObj: RequestObjDef): Promise<PostEvalSpecResponse>;
}

export interface UseEvalSpecProps {
  (): UseMutationResult<PostEvalSpecResponse, AxiosError, RequestObjDef>;
}
