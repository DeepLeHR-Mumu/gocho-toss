import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeEducationKeyObj } from "@/constants/queryKeyFactory/resume/resumeEducationKeyObj";

import { GetResumeEducationDef } from "./type";
import { selector } from "./util";

export const getResumeEducationArr: GetResumeEducationDef = async (resumeId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/educations`);
  return data;
};

export const useResumeEducationArr = (resumeId?: number) =>
  useQuery({
    queryKey: resumeId ? resumeEducationKeyObj.educationArr(resumeId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeEducationArr(queryKeyResumeId),
    select: ({ data }) => selector(data),
  });
