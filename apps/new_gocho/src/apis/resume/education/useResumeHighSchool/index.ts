import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeHighSchoolKeyObj } from "@/constants/queryKeyFactory/resume/resumeHighSchoolKeyObj";

import { GetResumeHighSchoolDef } from "./type";
import { selector } from "./util";

export const getResumeHighSchool: GetResumeHighSchoolDef = async (resumeId: number, highschoolId: number) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/educations/highschools/${highschoolId}`);
  return data;
};

export const useResumeHighSchool = (resumeId: number, highschoolId: number) =>
  useQuery({
    enabled: Boolean(resumeId && highschoolId),
    queryKey: resumeHighSchoolKeyObj.highSchool(resumeId, highschoolId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeHighSchool(queryKeyResumeId, highschoolId),
    select: ({ data }) => selector(data),
  });
