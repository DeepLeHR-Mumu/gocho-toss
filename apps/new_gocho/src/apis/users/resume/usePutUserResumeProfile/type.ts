import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponseDef } from "shared-type/api";

export interface PutResumeProfileDef {
  email: string;
  location: {
    address: string;
    x: number;
    y: number;
  };
  hobby: string;
  specialty: string;
}

export interface RequestObjDef {
  userId: number;
  image: File;
  requestObj: PutResumeProfileDef;
}

export interface PutUserResumeProfile {
  ({ userId, image, ...requestObj }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UserPutUserResumeProfile {
  (): UseMutationResult<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>;
}
