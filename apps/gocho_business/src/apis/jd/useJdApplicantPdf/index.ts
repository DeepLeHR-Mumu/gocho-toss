import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/apis/axiosInstance";
import { jdApplicantPdfKeyObj, GetJdApplicantPdfDef } from "./type";

export const getJdApplicantPdf: GetJdApplicantPdfDef = async (jdId, applyIdArr) => {
  const { data } = await axiosInstance.get(
    `/jds/${jdId}/applicants/pdf-generate${
      applyIdArr && applyIdArr.length !== 0 ? `?applyIds=${applyIdArr.join(",")}` : ""
    }`
  );
  return data;
};

export const useJdApplicantPdf = (jdId?: number) =>
  useQuery({
    queryKey: jdId ? jdApplicantPdfKeyObj.applyPdf(jdId) : undefined,
    queryFn: ({ queryKey: [{ jdId: queryKeyJdId }] }) => getJdApplicantPdf(queryKeyJdId),
  });
