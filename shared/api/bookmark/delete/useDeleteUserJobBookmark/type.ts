import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";
import { ResponseDef } from "shared-type/api/responseType";

export interface RequestObjDef {
  userId: number;
  elemId: number;
}

export interface DeleteUserJobBookmark {
  ({ userId, elemId }: RequestObjDef): Promise<ResponseDef>;
}

export interface useDeleteUserBookmarkProps {
  (): UseMutationResult<ResponseDef, AxiosError, RequestObjDef>;
}
