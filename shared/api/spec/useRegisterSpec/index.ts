import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { postRegisterSpecDef, RequestObjDef, useRegisterSpecProps } from "./type";

export const postRegisterSpec: postRegisterSpecDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken");
  const headers = token ? { "x-access-token": token } : undefined;
  const { data } = await axiosInstance.post("/specs", requestObj, { headers });
  return data;
};

export const useRegisterSpec: useRegisterSpecProps = () => {
  return useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postRegisterSpec });
};
