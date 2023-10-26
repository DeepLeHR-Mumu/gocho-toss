import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponseDef } from "shared-type/api";

export interface PutResumeProfileDef {
  email: string | null;
  location: {
    address: string | null;
    x: string | null;
    y: string | null;
  } | null;
  hobby: string | null;
  specialty: string | null;
}

export interface RequestObjDef {
  userId: number;
  image?: File;
  requestObj: PutResumeProfileDef;
}

export interface PutUserResumeProfile {
  ({ userId, image, ...requestObj }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UserPutUserResumeProfile {
  (userId: number): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
