import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "shared-type/api/responseType";

import { axiosInstance } from "../../axiosInstance";
import { PostWritePostingDef, useWritePostingProps, RequestObjDef } from "./type";

const postWritePosting: PostWritePostingDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    "/postings",
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

export const useWritePosting: useWritePostingProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(postWritePosting);
  return mutationResult;
};
