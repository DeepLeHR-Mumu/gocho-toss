import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { axiosInstance } from "@/apis/useIsRefreshLock";
import { ErrorResponseDef } from "@/types";

import { PostMaganersAuthDef, RequestObjDef, useManagerAuthProps, managerAuthKeyObj } from "./type";

export const postManagersAuth: PostMaganersAuthDef = async (requestObj) => {
  const formData = new FormData();
  const { managerId, certification, dto, logo, backgroundImage } = requestObj;

  formData.append("certification", certification);
  if (dto) formData.append("json", JSON.stringify({ ...dto, manager_id: managerId }));
  if (logo) formData.append("logo", logo);
  if (backgroundImage) formData.append("backgroundImage", backgroundImage);

  const { data } = await axiosInstance.post(`/managers/${managerId}/auth`, formData);
  return data;
};

export const useManagerAuth: useManagerAuthProps = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<ErrorResponseDef>, RequestObjDef>({
    mutationFn: (requestObj) => postManagersAuth(requestObj),
    onSuccess: () => {
      queryClient.invalidateQueries(managerAuthKeyObj.all);
    },
  });
};
