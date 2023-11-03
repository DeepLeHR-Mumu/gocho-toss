import { AxiosError, AxiosResponse } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { RequestObjDef as AddJdRequestObjDef } from "../useAddJd/type";

export interface RequestObjDef extends AddJdRequestObjDef {
  jdId: number;
}

export interface PostEditJdDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse>;
}

export interface useEditJdProps {
  (): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
