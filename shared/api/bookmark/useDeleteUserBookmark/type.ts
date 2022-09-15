import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";
import { ResponseDef } from "@sharedType/api/responseType";

export interface RequestObjDef {
  userId: number;
  likeType: "jd-bookmarks" | "company-bookmarks" | "posting-likes" | "tip-likes";
  elemId: number;
}

export interface DeleteUserBookmarkDef {
  ({ userId, likeType, elemId }: RequestObjDef): Promise<ResponseDef>;
}

export interface useDeleteUserBookmarkProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
