import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeExtraKeyObj } from "@/constants/queryKeyFactory/resume/resumeExtraKeyObj";

import { GetResumeExtraDef } from "./type";
import { selector } from "./util";

export const getResumeExtra: GetResumeExtraDef = async (resumeId, extraId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/educations/extras/${extraId}`);
  return data;
};

export const useResumeExtra = (resumeId: number, extraId: number) =>
  useQuery({
    queryKey: resumeId ? resumeExtraKeyObj.extra(resumeId, extraId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeExtra(queryKeyResumeId, extraId),
    select: ({ data }) => selector(data),
  });
