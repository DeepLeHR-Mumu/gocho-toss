import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { PostChangePostingDef, useChangePostingProps, RequestObjDef } from "./type";

const postChangePosting: PostChangePostingDef = async (requestObj) => {
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

export const useChangePosting: useChangePostingProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postChangePosting);
  return mutationResult;
};
