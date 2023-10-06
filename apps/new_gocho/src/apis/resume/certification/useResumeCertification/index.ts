import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeCertificationKeyObj } from "@/constants/queryKeyFactory/resume/resumeCertificationKeyObj";
import { GetResumeCertificationDef } from "./type";
import { selector } from "./util";

export const getResumeCollege: GetResumeCertificationDef = async (resumeId, certificationId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/certifications/${certificationId}`);
  return data;
};

export const useResumeCertification = (resumeId?: number, certificationId?: number) =>
  useQuery({
    queryKey:
      resumeId && certificationId ? resumeCertificationKeyObj.certification(resumeId, certificationId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId, certificationId: queryKeyCertificationId }] }) =>
      getResumeCollege(queryKeyResumeId, queryKeyCertificationId),
    select: ({ data }) => selector(data),
  });
