import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number;
  elemId: number;
}

export interface ResponseObjDef {
  data: {
    insertId: number;
    userId: number;
    Id: number;
  };
}

export interface AddUserJobBookmarkDef {
  ({ userId, elemId }: RequestObjDef): Promise<ResponseObjDef>;
}

export interface useAddUserBookmarkProps {
  (): UseMutationResult<ResponseObjDef, AxiosError, RequestObjDef>;
}
