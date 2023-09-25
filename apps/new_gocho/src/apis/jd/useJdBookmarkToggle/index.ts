import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { userBookmarkKeyObj } from "@/constants/queryKeyFactory/bookmark/bookmarkKeyObj";
import { jdArrKeyObj } from "@/constants/queryKeyFactory/jd/jdArrKeyObj";
import { jdDetailKeyObj } from "@/constants/queryKeyFactory/jd/jdDetailKeyObj";
import { bannerArrKeyObj } from "@/constants/queryKeyFactory/banner/bannerArrKeyObj";
import { userJdHistoryKeyObj } from "@/constants/queryKeyFactory/jd/jdUserHistoryArrKeyObj";

import { axiosInstance } from "../../axiosInstance";
import { PostJdApplyClickDef, RequestObjDef } from "./type";

const postJdBookmarkToggle: PostJdApplyClickDef = async (requestObj: RequestObjDef) => {
  const { data } = await axiosInstance.post(`jds/${requestObj.jdId}/bookmarks`, null);
  return data;
};

export const useJdBookmarkToggle = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, RequestObjDef>({
    mutationFn: postJdBookmarkToggle,
    onSuccess: () => {
      queryClient.invalidateQueries(bannerArrKeyObj.top);
      queryClient.invalidateQueries(jdArrKeyObj.all);
      queryClient.invalidateQueries(jdDetailKeyObj.all);
      queryClient.invalidateQueries(userBookmarkKeyObj.jdAll);
      queryClient.invalidateQueries(userJdHistoryKeyObj.all);
    },
  });
};

// interface JobObjDef {
//   id: number;
//   end_time: number;
//   title: string;
//   cut: boolean;
//   company: { name: string; logo_url: string };
// }
//
// const addJobBookmark: AddJobBookmarkDef = async (requestObj) => {
//   const token = localStorage.getItem("accessToken");
//   const headers = token ? { "x-access-token": token } : undefined;
//   const { data } = await axiosInstance.post(
//     `/users/${requestObj.userId}/jd-bookmarks/`,
//     { id: requestObj.id },
//     { headers }
//   );
//   return data;
// };
//
// export const useAddJobBookmarkArr = (jobObj: JobObjDef | undefined) => {
//   const queryClient = useQueryClient();
//   return useMutation<ResponseObjDef, AxiosError, RequestObjDef>({
//     mutationFn: addJobBookmark,
//     onMutate: async (requestObj) => {
//       await queryClient.cancelQueries(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
//       const previousTodos = queryClient.getQueryData(userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }));
//
//       queryClient.setQueryData<jobBookmarkResObjDef>(
//         userBookmarkKeyObj.jobBookmarkArr({ userId: requestObj.userId }),
//         (old) => {
//           if (old?.data === null) {
//             return {
//               data: [jobObj as JobObjDef],
//             };
//           }
//           if (old && jobObj)
//             return {
//               data: [...old.data, jobObj],
//             };
//           return undefined;
//         }
//       );
//       return { previousTodos };
//     },
//   });
// };
