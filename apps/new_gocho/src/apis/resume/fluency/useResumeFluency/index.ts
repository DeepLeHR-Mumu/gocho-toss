import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeFluencyKeyObj } from "@/constants/queryKeyFactory/resume/resumeFluencyKeyObj";

import { GetResumeFluencyDef } from "./type";
import { selector } from "./util";

export const getResumeFluency: GetResumeFluencyDef = async (resumeId, fluencyId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/fluencies/${fluencyId}`);
  return data;
};

export const useResumeFluency = (resumeId: number, fluencyId: number) =>
  useQuery({
    queryKey: resumeId ? resumeFluencyKeyObj.fluency(resumeId, fluencyId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeFluency(queryKeyResumeId, fluencyId),
    select: ({ data }) => selector(data),
  });
