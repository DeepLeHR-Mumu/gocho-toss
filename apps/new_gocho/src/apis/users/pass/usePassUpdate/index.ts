import { useMutation } from "@tanstack/react-query";

import { AxiosError, AxiosResponse } from "axios";

import { axiosNoTokenInstance } from "@/apis/axiosInstance";

import { PostPassUpdateDef, RequestObjDef } from "./type";

const postPassUpdate: PostPassUpdateDef = async ({ userId, token }) => {
  const { data } = await axiosNoTokenInstance.post(`/users/${userId}/pass`, { token });
  return data;
};

export const usePassUpdate = () =>
  useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postPassUpdate,
  });
