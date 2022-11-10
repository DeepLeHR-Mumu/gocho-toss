import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { editPostingDef, useEditPostingProps, RequestObjDef } from "./type";

const editPosting: editPostingDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.put(
    `/postings/${requestObj?.id}`,
    {
      title: `${requestObj?.title}`,
      description: `${requestObj?.description}`,
      type: `${requestObj?.type}`,
    },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );

  return data;
};

export const useEditPosting: useEditPostingProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(editPosting);
  return mutationResult;
};
