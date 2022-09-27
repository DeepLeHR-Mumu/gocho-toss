import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number;
  likeType: "jd-bookmarks" | "company-bookmarks" | "posting-likes" | "tip-likes";
  elemId: number;
}

export interface AddUserBookmarkResponseDef {
  data: {
    insertId: number;
    userId: number;
    Id: number;
  };
}

export interface AddUserBookmarkDef {
  ({ userId, likeType, elemId }: RequestObjDef): Promise<AddUserBookmarkResponseDef>;
}

export interface useAddUserBookmarkProps {
  (): UseMutationResult<AddUserBookmarkResponseDef, AxiosError, RequestObjDef>;
}
