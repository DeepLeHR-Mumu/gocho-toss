import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number;
  image?: File;
  nickname?: string;
}

export interface UserProfileResponse {
  data: { access_token: string; refresh_token: string; user_id: number };
}

export interface PatchUserProfileDef {
  ({ userId, image, nickname }: RequestObjDef): Promise<UserProfileResponse>;
}

export interface UsePatchUserProfileProps {
  (): UseMutationResult<UserProfileResponse, AxiosError, RequestObjDef>;
}
