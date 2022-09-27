import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../../axiosInstance";
import { AddUserBookmarkResponseDef, AddUserBookmarkDef, RequestObjDef } from "./type";

const addUserBookmark: AddUserBookmarkDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/users/${requestObj?.userId}/${requestObj.likeType}/`,
    { elemId: requestObj.elemId },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useAddUserBookmark = () => {
  const mutationResult = useMutation<AddUserBookmarkResponseDef, AxiosError, RequestObjDef>(addUserBookmark);
  return mutationResult;
};
