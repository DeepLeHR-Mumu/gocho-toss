import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@api/axiosInstance";
import {
  AddUserCompanyBookmarkResponseDef,
  PostAddUserCompanyBookmarkDef,
  useAddUserCompanyBookmarkProps,
  RequestObjDef,
} from "./type";

const postAddUserCompanyBookmark: PostAddUserCompanyBookmarkDef = async (requestObj) => {
  const token = localStorage.getItem("token");
  const { data } = await axiosInstance.post(`/users/${requestObj?.userId}/company-bookmarks`, {
    headers: {
      "x-access-token": token,
    },

    body: { companyId: `${requestObj?.companyId}` },
  });
  return data;
};

export const useAddUserCompanyBookmark: useAddUserCompanyBookmarkProps = () => {
  const mutationResult = useMutation<AddUserCompanyBookmarkResponseDef, AxiosError, RequestObjDef>(
    postAddUserCompanyBookmark
  );
  return mutationResult;
};
