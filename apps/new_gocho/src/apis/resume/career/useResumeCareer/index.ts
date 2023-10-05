import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeCareerKeyObj } from "@/constants/queryKeyFactory/resume/resumeCareerKeyObj";
import { GetResumeCareerDef } from "./type";
import { selector } from "./util";

export const getResumeCareer: GetResumeCareerDef = async (resumeId, careerId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/careers/${careerId}`);
  return data;
};

export const useResumeCareer = (resumeId?: number, careerId?: number) =>
  useQuery({
    queryKey: resumeId && careerId ? resumeCareerKeyObj.career(resumeId, careerId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId, careerId: queryKeyCareerId }] }) =>
      getResumeCareer(queryKeyResumeId, queryKeyCareerId),
    select: ({ data }) => selector(data),
  });
