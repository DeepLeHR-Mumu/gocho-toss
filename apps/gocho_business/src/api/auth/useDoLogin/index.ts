import { useMutation } from "@tanstack/react-query";

import { axiosNoTokenInstance } from "../../useIsRefreshLock";

import { PostLoginDef, RequestObjDef, ResponseObjDef, useDoLoginProps, LoginErrorValuesDef } from "./type";

const postLogin: PostLoginDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/auth/login", { ...requestObj });
  return data;
};

export const useDoLogin: useDoLoginProps = () =>
  useMutation<ResponseObjDef, LoginErrorValuesDef, RequestObjDef>(postLogin);
