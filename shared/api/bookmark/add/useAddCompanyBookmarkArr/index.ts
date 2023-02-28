import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { axiosInstance } from "../../../axiosInstance";
import { CompanyBookmarkResObjDef } from "../../type/bookmark";
import { ResponseObjDef, AddCompanyBookamrkArrDef, RequestObjDef } from "./type";

interface CompanyObjDef {
  id: number;
  name: string;
  logo_url: string;
}

const addCompanyBookmarkArr: AddCompanyBookamrkArrDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.post(
    `/users/${requestObj?.userId}/company-bookmarks/`,
    { elemId: requestObj.elemId },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const useAddCompanyBookmarkArr = (companyObj: CompanyObjDef | undefined) => {
  const queryClient = useQueryClient();
  const mutationResult = useMutation<ResponseObjDef, AxiosError, RequestObjDef>({
    mutationFn: addCompanyBookmarkArr,
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.companyBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(
        userBookmarkKeyObj.companyBookmarkArr({ userId: requestObj.userId })
      );

      queryClient.setQueryData<CompanyBookmarkResObjDef>(
        userBookmarkKeyObj.companyBookmarkArr({ userId: requestObj.userId }),
        (old) => {
          if (old?.data === null) {
            return {
              data: [companyObj as CompanyObjDef],
            };
          }
          if (old && companyObj)
            return {
              data: [...old.data, companyObj],
            };
          return undefined;
        }
      );
      return { previousTodos };
    },
  });
  return mutationResult;
};
