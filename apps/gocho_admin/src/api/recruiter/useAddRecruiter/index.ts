import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { AdminResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostRecruiterDef, RequestObjDef, useAddRecruiterProps } from "./type";

export const postRecruiter: PostRecruiterDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/managers/register", requestObj);
  return data;
};

export const useAddRecruiter: useAddRecruiterProps = () => {
  return useMutation<AdminResponseDef, AxiosError, RequestObjDef>(postRecruiter);
};
