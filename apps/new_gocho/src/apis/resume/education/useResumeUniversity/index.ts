import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/apis/axiosInstance";

import { resumeUniversityKeyObj } from "@/constants/queryKeyFactory/resume/resumeUniversityKeyObj";

import { GetResumeUniversityDef } from "./type";
import { selector } from "./util";

export const getResumeUniversity: GetResumeUniversityDef = async (resumeId, universityId) => {
  const { data } = await axiosInstance.get(`/resumes/${resumeId}/educations/universities/${universityId}`);
  return data;
};

export const useResumeUniversity = (resumeId: number, universityId: number) =>
  useQuery({
    enabled: Boolean(resumeId && universityId),
    queryKey: resumeUniversityKeyObj.university(resumeId, universityId),
    queryFn: ({ queryKey: [{ resumeId: queryKeyResumeId }] }) => getResumeUniversity(queryKeyResumeId, universityId),
    select: ({ data }) => selector(data),
  });
