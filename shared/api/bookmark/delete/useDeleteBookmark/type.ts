import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";
import { ResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  userId: number;
  likeType: string;
  elemId: number;
}

export interface DeleteUserBookmarkDef {
  ({ userId, likeType, elemId }: RequestObjDef): Promise<ResponseDef>;
}

export interface useDeleteUserBookmarkProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
