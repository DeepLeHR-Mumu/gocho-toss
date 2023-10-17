import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";
import { jdApplicantArrKeyObj, GetJdApplicantArrDef } from "./type";
import { selector } from "./util";

export const getJdApplicantArr: GetJdApplicantArrDef = async (requestObj) => {
  const { data } = await axiosInstance.get(`/jds/${requestObj.jdId}/applicants`, {
    params: { page: requestObj.page, size: requestObj.size },
  });
  return data;
};

export const useJdApplicantArr = (requestObj: { jdId?: number; page?: number; size?: number } = {}) =>
  useQuery({
    queryKey: requestObj.jdId ? jdApplicantArrKeyObj.applicantArr(requestObj) : undefined,
    queryFn: ({ queryKey: [{ requestObj: queryKeyRequestObj }] }) => getJdApplicantArr(queryKeyRequestObj),
    select: ({ data, page_result }) => selector({ data, page_result }),
  });
