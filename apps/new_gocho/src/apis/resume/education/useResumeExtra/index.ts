import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeExtrasKeyObj } from "@/constants/queryKeyFactory/resume/resumeExtrasKeyObj";

import { GetResumeExtrasDef } from "./type";
import { selector } from "./util";

export const getResumeExtras: GetResumeExtrasDef = async (resumeId, extraId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/educations/extras/${extraId}`);
  return data;
};

export const useResumeExtras = (resumeId: number, extraId: number) =>
  useQuery({
    queryKey: resumeId ? resumeExtrasKeyObj.extras(resumeId, extraId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeExtras(queryKeyResumeId, extraId),
    select: ({ data }) => selector(data),
  });
