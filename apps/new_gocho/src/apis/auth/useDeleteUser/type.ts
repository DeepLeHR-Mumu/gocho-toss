import { AxiosResponse, AxiosError } from "axios";
import { UseMutationResult } from "@tanstack/react-query";

export interface RequestObjDef {
  id: number;
}

export interface DeleteUserInfoDef {
  ({ id }: RequestObjDef): Promise<AxiosResponse>;
}

export interface UseDeleteUserInfoDef {
  // TODO: 나중에 어떻게 하면 onSuccessAction을 없앨 수 있을지 or 깔끔하게 바꿀 수 있을지 고민해보기
  (onSuccessAction: () => void): UseMutationResult<AxiosResponse, AxiosError, RequestObjDef>;
}
