import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";
import { jdApplicantArrKeyObj, GetJdApplicantArrDef, RequestObjDef } from "./type";
import { selector } from "./util";

export const getJdApplicantArr: GetJdApplicantArrDef = async ({ jdId, order, page, size }) => {
  const { data } = await axiosInstance.get(`/jds/${jdId}/applicants`, {
    params: { page, size, order },
  });
  return data;
};

export const useJdApplicantArr = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: requestObj.jdId ? jdApplicantArrKeyObj.applicantArr(requestObj) : undefined,
    queryFn: ({ queryKey: [{ requestObj: queryKeyRequestObj }] }) => getJdApplicantArr(queryKeyRequestObj),
    select: ({ data, page_result }) => selector({ data, page_result }),
  });
