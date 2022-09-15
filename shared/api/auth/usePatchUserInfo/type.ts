import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ImageType } from "@type/ui/imageType";

export interface RequestObjDef {
  userId: number;
  originPassword?: string;
  password?: string;
  image?: ImageType;
}

export interface UserInfoResponse {
  data: { token: string };
}

export interface PatchUserInfoDef {
  ({ userId, originPassword, password, image }: RequestObjDef): Promise<UserInfoResponse>;
}

export interface ErrorResponse extends AxiosError {
  error: {
    status: number;
    errorMessage: string;
    errorCode: number;
    statusName: string;
    path: string;
    method: string;
  };
}

export interface UsePatchUserInfoProps {
  (): UseMutationResult<UserInfoResponse, ErrorResponse, RequestObjDef>;
}
