import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number;
  image?: File;
  nickname?: string;
}

export interface UserProfileResponse {
  data: { access_token: string; refresh_token: string };
}

export interface PatchUserProfileDef {
  ({ userId, image, nickname }: RequestObjDef): Promise<UserProfileResponse>;
}

export interface ErrorResponse extends AxiosError {
  status: string;
  error_message: string;
  error_code: number;
  status_name: string;
  path: string;
  method: string;
}

export interface UsePatchUserProfileProps {
  (): UseMutationResult<UserProfileResponse, ErrorResponse, RequestObjDef>;
}
