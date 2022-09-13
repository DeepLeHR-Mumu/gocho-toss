import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number;
  jdId: number;
}

export interface AddUserJobBookmarkResponseDef {
  data: {
    insertId: number;
    userId: number;
    jobId: number;
  };
}

export interface PostAddUserJobBookmarkDef {
  ({ userId, jdId }: RequestObjDef): Promise<AddUserJobBookmarkResponseDef>;
}

export interface useAddUserJobBookmarkProps {
  (): UseMutationResult<AddUserJobBookmarkResponseDef, AxiosError, RequestObjDef>;
}
