import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeCertificationKeyObj } from "@/constants/queryKeyFactory/resume/resumeCertificationKeyObj";

import { GetResumeCertificationDef } from "./type";
import { selector } from "./util";

export const getResumeCertification: GetResumeCertificationDef = async (resumeId, certificationId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/certifications/${certificationId}`);
  return data;
};

export const useResumeCertification = (resumeId: number, certificationId: number) =>
  useQuery({
    queryKey: resumeCertificationKeyObj.certification(resumeId, certificationId),
    enabled: Boolean(resumeId && certificationId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId, certificationId: queryKeyCertificationId }] }) =>
      getResumeCertification(queryKeyResumeId, queryKeyCertificationId),
    select: ({ data }) => selector(data),
  });
