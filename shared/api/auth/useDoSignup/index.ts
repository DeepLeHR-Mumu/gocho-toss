import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";

import { PostSignUpDef, RequestObjDef, SignUpResponseDef, UseDoSignUpProps } from "./type";

const postSignUp: PostSignUpDef = async (requestObj) => {
  const { data } = await axiosInstance.post("/auth/register", {
    ...requestObj,
  });
  return data;
};

export const useDoSignUp: UseDoSignUpProps = () => {
  const mutationResult = useMutation<SignUpResponseDef, AxiosError, RequestObjDef>(postSignUp);
  return mutationResult;
};
