import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userBookmarkKeyObj } from "shared-constant/queryKeyFactory/bookmark/bookmarkKeyObj";

import { DeleteCompanyBoookmarkArrDef } from "./type";
import { axiosInstance } from "../../../axiosInstance";
import { CompanyBookmarkResObjDef } from "../../type/bookmark";

interface CompanyObjDef {
  id: number;
  name: string;
  logo_url: string;
}

const deleteCompanyBoookmarkArr: DeleteCompanyBoookmarkArrDef = async (requestObj) => {
  const token = localStorage.getItem("token") as string;
  const { data } = await axiosInstance.delete(`/users/${requestObj?.userId}/company-bookmarks/${requestObj.elemId}`, {
    headers: {
      "x-access-token": token,
    },
  });
  return data;
};

export const useDeleteCompanyBookmarkArr = (companyObj: CompanyObjDef | undefined) => {
  const queryClient = useQueryClient();
  const mutationResult = useMutation(deleteCompanyBoookmarkArr, {
    onMutate: async (requestObj) => {
      await queryClient.cancelQueries(userBookmarkKeyObj.companyBookmarkArr({ userId: requestObj.userId }));
      const previousTodos = queryClient.getQueryData(
        userBookmarkKeyObj.companyBookmarkArr({ userId: requestObj.userId })
      );

      queryClient.setQueryData<CompanyBookmarkResObjDef>(
        userBookmarkKeyObj.companyBookmarkArr({ userId: requestObj.userId }),
        (old) => {
          if (old && companyObj) {
            return {
              data: [
                ...old.data.filter((element) => {
                  return companyObj.id !== element.id;
                }),
              ],
            };
          }
          return undefined;
        }
      );
      return { previousTodos };
    },
  });
  return mutationResult;
};
