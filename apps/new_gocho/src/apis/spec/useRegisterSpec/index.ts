import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { postRegisterSpecDef, RequestObjDef, useRegisterSpecProps } from "./type";

export const postRegisterSpec: postRegisterSpecDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/specs", requestObj);
  return data;
};

export const useRegisterSpec: useRegisterSpecProps = () => useMutation<ResponseDef, AxiosError, RequestObjDef>({ mutationFn: postRegisterSpec });
