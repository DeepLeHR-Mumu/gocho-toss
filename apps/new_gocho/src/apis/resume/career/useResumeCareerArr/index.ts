import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeCareerKeyObj } from "@/constants/queryKeyFactory/resume/resumeCareerKeyObj";
import { GetResumeCareerArrDef } from "./type";
import { selector } from "./util";

export const getResumeCareerArr: GetResumeCareerArrDef = async (resumeId: number) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/careers`);
  return data;
};

export const useResumeCareerArr = (resumeId: number) =>
  useQuery({
    enabled: !!resumeId,
    queryKey: resumeCareerKeyObj.careerArr(resumeId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeCareerArr(queryKeyResumeId),
    select: ({ data }) => selector(data),
  });
