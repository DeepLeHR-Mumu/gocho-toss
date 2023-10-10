import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeCertificationKeyObj } from "@/constants/queryKeyFactory/resume/resumeCertificationKeyObj";

import { GetCertificationListDef } from "./type";

export const getCertificationList: GetCertificationListDef = async (q) => {
  const { data } = await axiosInstance.get(`/resumes/find-certifications`, {
    params: {
      q,
    },
  });
  return data;
};

export const useCertificationList = (q: string) =>
  useQuery({
    enabled: Boolean(q.length),
    queryKey: resumeCertificationKeyObj.certificationList(q),
    queryFn: ({ queryKey: [{ q: queryKeyParams }] }) => getCertificationList(queryKeyParams),
  });
