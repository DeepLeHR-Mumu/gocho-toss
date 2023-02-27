import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { postRegisterSpecDef, useRegisterSpecProps, RequestObjDef } from "./type";

export const postRegisterSpec: postRegisterSpecDef = async (requestObj) => {
  const token = localStorage.getItem("accessToken") as string;
  const { data } = await axiosInstance.post("/specs", requestObj, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useRegisterSpec: useRegisterSpecProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postRegisterSpec);
  return mutationResult;
};
