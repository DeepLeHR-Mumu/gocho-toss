import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosNoTokenInstance } from "../../axiosInstance";

import { PostSignUpDef, RequestObjDef, SignUpResponseDef, UseDoSignUpProps } from "./type";

const postSignUp: PostSignUpDef = async (requestObj) => {
  const { data } = await axiosNoTokenInstance.post("/users/register", { ...requestObj });
  return data;
};

export const useDoSignUp: UseDoSignUpProps = () => {
  return useMutation<SignUpResponseDef, AxiosError, RequestObjDef>({ mutationFn: postSignUp });
};
