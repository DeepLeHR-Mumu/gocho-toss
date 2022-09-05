import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@api/axiosInstance";
import { ResponseDef } from "@type/api/responseType";
import {
  postRegisterSpecDef,
  useRegisterSpecProps,
  RequestObjDef,
} from "./type";

export const postRegisterSpec: postRegisterSpecDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post("/specs", requestObj, {
    headers: { "x-access-token": token },
  });
  return data;
};

export const useRegisterSpec: useRegisterSpecProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(
    postRegisterSpec
  );
  return mutationResult;
};
