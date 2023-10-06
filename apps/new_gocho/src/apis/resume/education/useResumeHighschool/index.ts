import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeHighschoolKeyObj } from "@/constants/queryKeyFactory/resume/resumeHighschoolKeyObj";

import { GetResumeHighschoolDef } from "./type";
import { selector } from "./util";

export const getResumeHighschool: GetResumeHighschoolDef = async (resumeId: number, highschoolId: number) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/educations/highschools/${highschoolId}`);
  return data;
};

export const useResumeHighschool = (resumeId: number, highschoolId: number) =>
  useQuery({
    queryKey: resumeId ? resumeHighschoolKeyObj.highschool(resumeId, highschoolId) : undefined,
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeHighschool(queryKeyResumeId, highschoolId),
    select: ({ data }) => selector(data),
  });
