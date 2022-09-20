import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "../../axiosInstance";
// import { jobBookmarkObjDef } from "../../bookmark/type/bookmark";

import { AddUserBookmarkResponseDef, AddUserBookmarkDef, useAddUserBookmarkProps, RequestObjDef } from "./type";

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

export const useAddUserBookmark: useAddUserBookmarkProps = () => {
  // const queryClient = useQueryClient();

  const mutationResult = useMutation<AddUserBookmarkResponseDef, AxiosError, RequestObjDef>(
    addUserBookmark
    // {
    //   onMutate: async (requestObj) => {
    //     await queryClient.cancelQueries([{ data: "userJobBookmarkArr", userId: requestObj.userId }]);
    //     const prevBookmarkArr = queryClient.getQueryData([{ data: "userJobBookmarkArr", userId: requestObj.userId }]);
    //     queryClient.setQueryData<jobBookmarkObjDef[]>(
    //       [{ data: "userJobBookmarkArr", userId: requestObj.userId }],
    //       (old) => {
    //         if (!old) {
    //           return [];
    //         }
    //         return [
    //           old.map((jobDef) => {
    //             return jobDef.id;
    //           }),
    //           requestObj.elemId,
    //         ];
    //       }
    //     );
    //   },
    // });
  );
  return mutationResult;
};
