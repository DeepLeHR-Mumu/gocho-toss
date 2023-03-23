import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

import { ImageType } from "shared-type/ui/imageType";

export interface RequestObjDef {
  userId: number;
  origin_password?: string;
  new_password?: string;
  image?: ImageType;
}

export interface UserInfoResponse {
  data: { access_token: string; refresh_token: string };
}

export interface PatchUserInfoDef {
  ({ userId, origin_password, new_password, image }: RequestObjDef): Promise<UserInfoResponse>;
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
