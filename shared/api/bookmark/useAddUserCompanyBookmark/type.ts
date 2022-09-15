import { AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  userId: number;
  companyId: number;
}

export interface AddUserCompanyBookmarkResponseDef {
  data: {
    insertId: number;
    userId: number;
    companyId: number;
  };
}

export interface PostAddUserCompanyBookmarkDef {
  ({ userId, companyId }: RequestObjDef): Promise<AddUserCompanyBookmarkResponseDef>;
}

export interface useAddUserCompanyBookmarkProps {
  (): UseMutationResult<AddUserCompanyBookmarkResponseDef, AxiosError, RequestObjDef>;
}
