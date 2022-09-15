import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { ResponseDef } from "@sharedType/api/responseType";
import { axiosInstance } from "../../axiosInstance";
import { useDeleteUserBookmarkProps, RequestObjDef, DeleteUserBookmarkDef } from "./type";

const deleteUserBookmark: DeleteUserBookmarkDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.delete(
    `/users/${requestObj?.userId}/${requestObj.likeType}/${requestObj.elemId}`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useDeleteUserBookmark: useDeleteUserBookmarkProps = () => {
  const mutationResult = useMutation<ResponseDef, AxiosError, RequestObjDef>(deleteUserBookmark);
  return mutationResult;
};
