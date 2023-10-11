import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeCertificationKeyObj } from "@/constants/queryKeyFactory/resume/resumeCertificationKeyObj";
import { GetResumeCertificationArrDef } from "./type";
import { selector } from "./util";

export const getResumeCertificationArr: GetResumeCertificationArrDef = async (resumeId: number) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/certifications`);
  return data;
};

export const useResumeCertificationArr = (resumeId: number) =>
  useQuery({
    enabled: Boolean(resumeId),
    queryKey: resumeCertificationKeyObj.certificationArr(resumeId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeCertificationArr(queryKeyResumeId),
    select: ({ data }) => selector(data),
  });
