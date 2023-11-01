import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";

import { GetJdApplicantPdfDef, jdApplicantPdfKeyObj, RequestObjDef } from "./type";

export const getJdApplicantPdf: GetJdApplicantPdfDef = async ({ jdId, applicantId }) => {
  const response = await axiosInstance.get(`/jds/${jdId}/applicants/${applicantId}/pdf-generate`, {
    responseType: "blob",
  });
  return response;
};

export const useApplicantPdf = (requestObj: RequestObjDef) =>
  useQuery({
    queryKey: requestObj.jdId ? jdApplicantPdfKeyObj.applicantPdf(requestObj) : undefined,
    queryFn: ({ queryKey: [{ requestObj: queryKeyRequestObj }] }) => getJdApplicantPdf(queryKeyRequestObj),
  });
